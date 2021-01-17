from django.urls import path, include
from django.conf.urls import url
from allauth.account.views import confirm_email
from .views import LoginAPIView, RegisterAPIView, UserAPIView
from knox import views as knox_view

urlpatterns = [
    path('', include('knox.urls')),
    path('users', UserAPIView.as_view()),
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('logout', knox_view.LogoutView().as_view(), name='knox_logout')
]
