from django.urls import path
from .views import (
    CreateUserView, 
    CurrentUserView, 
    CreateNoteView, 
    NoteListView, 
    DeleteNoteView, 
    UpdateNoteView, 
    UserProfileDetailView, 
    UpdateUserProfileView
)


urlpatterns = [
    path("create_user/", CreateUserView.as_view(), name="create_user"),
    path("get_request_user/", CurrentUserView.as_view(), name="my_profile"),
    path("create_note/", CreateNoteView.as_view(), name="create_note"),
    path("note_list/", NoteListView.as_view(), name="note_list"),
    path("delete_note/<int:pk>/", DeleteNoteView.as_view(), name="delete_note"),
    path("update_note/<int:pk>/", UpdateNoteView.as_view(), name="update_note"),
    path("user_profile/", UserProfileDetailView.as_view(), name="user_profile"),
    path("update_user_profile/<int:pk>/", UpdateUserProfileView.as_view(), name="update_user_profile"),
]
