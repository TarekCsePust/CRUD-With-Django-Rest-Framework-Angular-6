from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=120)
    department = models.CharField(max_length=120)
    session = models.CharField(max_length=120)
    phone = models.IntegerField()
