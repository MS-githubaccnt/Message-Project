from django.contrib import admin
from django.urls import path,include
from authentication import urls,views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/',include(urls)),
]
