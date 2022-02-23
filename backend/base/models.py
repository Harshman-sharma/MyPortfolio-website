#from math import fmod
#from unicodedata import name
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class RegisterDatas(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    newpsk = models.CharField(max_length=200, null=True, blank=True)
    #_id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)


class UserInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    residence = models.CharField(max_length=200, null=True, blank=True)
    school = models.CharField(max_length=200, null=True, blank=True)
    profile_img = models.ImageField(null=True, blank=True)
    aboutMe = models.TextField(null=True, blank=True)
    interests = models.CharField(max_length=200, null=True, blank=True)
    maxQual = models.CharField(max_length=200, null=True, blank=True)
    ghLink = models.CharField(max_length=200, null=True, blank=True)
    insta = models.CharField(max_length=200, null=True, blank=True)
    twitter = models.CharField(max_length=200, null=True, blank=True)
    fb = models.CharField(max_length=200, null=True, blank=True)
    linkedin = models.CharField(max_length=200, null=True, blank=True)
    
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Projects(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    
    description = models.TextField(null=True, blank=True)
    requirements = models.TextField(null=True, blank=True)
    Languages = models.CharField(max_length=200, null=True, blank=True)
    workedFrom = models.DateField(null = True)
    workedTo = models.DateField(null=True)
    githubLink = models.CharField(max_length=200, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.title


class FutureProjects(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    aim = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    requirements = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.title


class Achievements(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    achievement1 = models.CharField(max_length=200, null=True, blank=True)
    achievement2 = models.CharField(max_length=200, null=True, blank=True)
    achievement3 = models.CharField(max_length=200, null=True, blank=True)
    achievement4 = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return self.name

class Qualifications(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    class10 = models.ImageField(null=True, blank=True)
    class12 = models.ImageField(null=True, blank=True)
    def __str__(self):
        return self.name

class Certificates(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    cert1 = models.ImageField(null=True, blank=True)
    cert2 = models.ImageField(null=True, blank=True)
    cert3 = models.ImageField(null=True, blank=True)
    cert4 = models.ImageField(null=True, blank=True)
    def __str__(self):
        return self.name