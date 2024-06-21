from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    note_creator = models.ForeignKey(to=User, on_delete=models.CASCADE)
    note_title = models.CharField(max_length=50)
    note_content = models.TextField()
    note_date_created = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.note_creator} - {self.note_title}"


class UserProfile(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name="profile")
    user_profile_picture = models.FileField(upload_to="profile_pictures", blank=True)
    email = models.EmailField(max_length=50, blank=True, unique=True)
    city = models.CharField(max_length=50, blank=True)
    user_description = models.TextField(max_length=255, blank=True)

    def __str__(self) -> str:
        return f"{self.user}"
