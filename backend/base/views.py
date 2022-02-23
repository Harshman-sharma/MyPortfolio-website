from django.shortcuts import render
#from django.http import JsonResponse
#from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets

from .models import *
#from .products import products
from .serializers import *


# Create your views here.

class getRegisterDatas(viewsets.ModelViewSet):
    queryset = RegisterDatas.objects.all()
    serializer_class = RegisterSerializer

class getUserInfo(viewsets.ModelViewSet):
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer

class getProjects(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer

class getFutureProjects(viewsets.ModelViewSet):
    queryset = FutureProjects.objects.all()
    serializer_class = FutureProjectsSerializer

class getAchievements(viewsets.ModelViewSet):
    queryset = Achievements.objects.all()
    serializer_class = AchievementsSerializer

class getQualifications(viewsets.ModelViewSet):
    queryset = Qualifications.objects.all()
    serializer_class = QualificationsSerializer

class getCertificates(viewsets.ModelViewSet):
    queryset = Certificates.objects.all()
    serializer_class = CertificatesSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',

        '/api/products/upload/',

        '/api/products/<id>/reviews/',

        '/api/products/top/',

        '/api/products/<id>/',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',

    ]
    return Response(routes)


@api_view(['GET'])
def getProduct(request, pk):
    # In case of retrieving data from a static file:
    # for i in products:
    #   if i['_id'] == pk:
    #      product = i
    # return Response(product)

    # From database:
    # taking data from product table of .models.py
    product = Projects.objects.get(_id=pk)
    serializer = ProjectSerializer(
        product, many=False)  # serializing table data
    return Response(serializer.data)


#@api_view(['GET', 'POST'])
#def getreactformdata(request):
 #   print(request)
  #  if request.method == 'GET':
   #     return Response(request.data)


