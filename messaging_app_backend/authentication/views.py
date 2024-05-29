from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status
from django.contrib.auth import authenticate

class Signup(APIView):
    def post(self,request):
        user=User.objects.filter(username=request.data.get("username"))
        if user.exists():
            return Response(status=status.HTTP_304_NOT_MODIFIED)
        else:
           user=User.objects.create_user(request.data.get("username"),request.data.get("email"),request.data.get("password"))
           user.save()
           return Response(status=status.HTTP_201_CREATED)
    
class Login(APIView):
    def post(self,request):
        username=request.data.get("username")
        password=request.data.get("password")
        user=authenticate(request,username=username,password=password)
        if (user is not None):
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
# Create your views here.
