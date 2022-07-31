from django.http import HttpResponse
from django.template import loader

import numpy as np
import matplotlib.pyplot as plt


def regional_airlines(request):
    template = loader.get_template('other/regional_airlines.html')
    context = {}
    return HttpResponse(template.render(context, request))
    
def birthday_song(request):
    template = loader.get_template('other/birthday_song.html')
    context = {}
    return HttpResponse(template.render(context, request))
    
    