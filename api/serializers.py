from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Student


class StudentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'name', 'department','session','phone')
        #extra_kwargs = {'password':{'write_only':True,'required':True}}

    def create(self,validated_data):
        user = Student.objects.create(**validated_data)
        return user






