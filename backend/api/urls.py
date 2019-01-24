from django.urls import path,include
from .views import (StudentListAPIView,StudentDetailView,
                    StudenCreateAPIView,StudentUpdateApiView,
                    StudentDeleteApiView)




urlpatterns = [
    path('',StudentListAPIView.as_view()),
    path('create',StudenCreateAPIView.as_view()),

    path('<pk>/',StudentUpdateApiView.as_view()),
    path('<pk>/delete', StudentDeleteApiView.as_view()),



]
