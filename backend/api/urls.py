from django.urls import path
from .views import CreateUserView, MyProfileView, CreateNoteView, NoteListView, DeleteNoteView, UpdateNoteView


urlpatterns = [
    path("create_user/", CreateUserView.as_view(), name="create_user"),
    path("my_profile/", MyProfileView.as_view(), name="my_profile"),
    path("create_note/", CreateNoteView.as_view(), name="create_note"),
    path("note_list/", NoteListView.as_view(), name="note_list"),
    path("delete_note/<int:pk>/", DeleteNoteView.as_view(), name="delete_note"),
    path("update_note/<int:pk>/", UpdateNoteView.as_view(), name="update_note"),
]
