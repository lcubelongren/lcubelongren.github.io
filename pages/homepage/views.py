from django.http import HttpResponse
from django.template import loader

import numpy as np
import matplotlib.pyplot as plt


def index(request):
    plt.switch_backend('agg')
    
    t = np.linspace(0, np.pi, 1000)
    fig = plt.figure(figsize=(6,4), dpi=100)
    plt.plot(np.sin(t), np.cos(t), c='k')
    plt.plot(-np.sin(t), np.cos(t), c='k')
    plt.axis('off')
    
    plt.savefig('static/images/test/thing.png', transparent=True)

    # -----
    template = loader.get_template('homepage/homepage.html')
    context = {}
    return HttpResponse(template.render(context, request))
    
    