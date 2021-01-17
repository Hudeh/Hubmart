from .models import MyUser
from django.http import request
from rest_framework import generics
from .UserSerializers import UserSerializer, RegisterSerializer, LoginSerializer
from rest_framework.permissions import IsAuthenticated
from knox.models import AuthToken
from rest_framework.response import Response
from rest_framework import status
from .utils import Utils
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.conf import settings
from django.utils import six
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode

class UserAPIView(generics.RetrieveAPIView):
    permission_classes =[IsAuthenticated]
    serializer_class = UserSerializer


    def get_object(self,*args, **kwargs):
        return self.request.user

class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class RegisterAPIView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token =AuthToken.objects.create(user)[1]
        # current_site = get_current_site(request).domain used for production
        # user_id = force_text(urlsafe_base64_encode(force_bytes(user.id)))
        # revsurl =  reverse('confirm_email')
        # absurl = 'http://127.0.0.1:8000' + revsurl + user_id +'?token='+token
        # email_body= 'Hi ' +  'use the link below to verify email\n'+ absurl
        # data ={'email_body':email_body, 'to_email':user.email,'email_subject':'Verify your email'}
        # Utils.send_emails(data)

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })
    


# class VerifyEmail(generics.GenericAPIView):
#     def get(request):
#         token = request.GET.get('token')
#         try:
#             uid = force_text(urlsafe_base64_decode(token))
#             user = MyUser.objects.get(pk=uid)
#         except (TypeError, ValueError, OverflowError, MyUser.DoesNotExist):
#             user = None
#         # checking if the user exists, if the token is valid.
#         if not user.is_verified:
#             # if valid set active true 
#             user.is_verified  = True
#             user.is_valid = True
#             user.is_active = True
#             user.save()
#             return Response({'email':'Successfully activated'},status=status.HTTP_201_CREATED)
#         else:
#             return Response({'error':'Error'},status=status.HTTP_404_CREATED)
   