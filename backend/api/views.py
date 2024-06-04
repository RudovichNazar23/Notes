from rest_framework import permissions
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import UserSerializer, NoteSerializer


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class MyProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class CreateNoteView(generics.CreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(note_creator=self.request.user)