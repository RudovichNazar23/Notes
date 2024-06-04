from django.urls import path
from .views import CreateUserView, MyProfileView, CreateNoteView


urlpatterns = [
    path("create_user/", CreateUserView.as_view(), name="create_user"),
    path("my_profile/", MyProfileView.as_view(), name="my_profile"),
    path("create_note/", CreateNoteView.as_view(), name="create_note")
]
