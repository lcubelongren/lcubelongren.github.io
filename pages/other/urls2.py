from django.contrib import admin
from django.urls import path
from . import views

app_name = 'birthday_song'
urlpatterns = [
    path('', views.birthday_song, name='birthday_song'),

]