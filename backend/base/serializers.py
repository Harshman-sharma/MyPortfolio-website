# rest framwork api doesn't returns values from tables of models.py until data is serialized
# serializing means to convert tables/models to json format
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterDatas
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'

class FutureProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FutureProjects
        fields = '__all__'

class AchievementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievements
        fields = '__all__'

class QualificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qualifications
        fields = '__all__'

class CertificatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificates
        fields = '__all__'