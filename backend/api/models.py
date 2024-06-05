from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    note_creator = models.ForeignKey(to=User, on_delete=models.CASCADE)
    note_title = models.CharField(max_length=50)
    note_content = models.TextField()
    note_date_created = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.note_creator} - {self.note_title}"
