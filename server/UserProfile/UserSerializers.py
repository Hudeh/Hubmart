from .models import MyUser
from rest_framework import serializers
from django.contrib.auth import authenticate


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id','email', 'username']
        


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id','email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}


    
    # def create(self, validated_data):
    #     user = MyUser.objects.create_user(
    #         email=validated_data['email'],
    #         username=validated_data['username']
    #     )
    #     user.set_password(validated_data['password'])
    #     user.save()
    #     return user
    def create(self, validated_data):
        user = MyUser.objects.create_user(**validated_data)
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials: Username or Password")