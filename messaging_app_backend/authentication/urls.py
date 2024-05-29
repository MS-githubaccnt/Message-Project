from django.urls import path,include
from .views import Login,Signup
from . import views
urlpatterns=[
    path("login",Login.as_view()),
    path("signup",Signup.as_view())

    
]