from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User

from .models import Note


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
    
    def create(self, validated_data):
        user = User(**validated_data)
        user_password = validated_data["password"]
        try: 
            validate_password(password=user_password, user=user)
            user.set_password(validated_data["password"])
            user.save()
        except ValidationError as error:
            raise serializers.ValidationError({"password": error.messages})
        return user


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "note_creator", "note_title", "note_content", "note_date_created"]
        extra_kwargs = {
            "note_creator": {"read_only": True}
        }    
