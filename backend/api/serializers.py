from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Note


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "note_creator", "note_title", "note_content"]
