from django.shortcuts import get_object_or_404
from  .serializers import StudentListSerializer
from .models import Student
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import (

    CreateAPIView,
    ListAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView,
    RetrieveAPIView

    )



class  StudentListAPIView(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentListSerializer




class StudenCreateAPIView(CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentListSerializer




class StudentUpdateApiView(RetrieveUpdateAPIView):
    print("This is worked.....")
    queryset = Student.objects.all()
    serializer_class = StudentListSerializer




class StudentDeleteApiView(DestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentListSerializer








"""
class  StudentListAPIView(APIView):


    def get(self, request):
        queryset = Student.objects.all()
        serializer_class = StudentListSerializer(queryset, many=True)
        return Response(serializer_class.data)

    def post(self, request):
        serializer = StudentListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

"""
class StudentDetailView(RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentListSerializer


