from django.contrib import admin
from django.urls import path
from . import views

app_name = 'other'
urlpatterns = [
    path('', views.regional_airlines, name="regional_airlines"),
]