from django.shortcuts import render
from rest_framework import permissions
from rest_framework import generics

from .serializers import UserSerializer


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
