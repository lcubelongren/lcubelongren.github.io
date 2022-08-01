from django.contrib import admin
from django.urls import path
from . import views

app_name = 'regional_airlines'
urlpatterns = [
    path('', views.regional_airlines, name='regional_airlines'),

]