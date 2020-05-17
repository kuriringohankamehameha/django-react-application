from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from itertools import chain

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User # A User Model
        fields = ('id', 'username', 'email',)

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password',)
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            *(chain(validated_data[field] for field in ['username', 'email', 'password']))
            )
        return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")