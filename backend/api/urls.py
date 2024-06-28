from django.urls import path

from rest_framework import routers

from .views import (
    CreateUserView, 
    CurrentUserView, 
    UserProfileDetailView, 
    UpdateUserProfileView,
    NoteViewSet
)

urlpatterns = [
    path("create_user/", CreateUserView.as_view(), name="create_user"),
    path("get_request_user/", CurrentUserView.as_view(), name="my_profile"),
    path("create_note/", NoteViewSet.as_view({"post": "create"}), name="create_note"),
    path("note_list/", NoteViewSet.as_view({"get": "list"}), name="note_list"),
    path("delete_note/<int:pk>/", NoteViewSet.as_view({"delete": "destroy"}), name="delete_note"),
    path("update_note/<int:pk>/", NoteViewSet.as_view({"put": "update"}), name="update_note"),
    path("user_profile/", UserProfileDetailView.as_view(), name="user_profile"),
    path("update_user_profile/<int:pk>/", UpdateUserProfileView.as_view(), name="update_user_profile"),
]
