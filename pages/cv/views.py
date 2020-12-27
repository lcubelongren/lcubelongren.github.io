from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('cv/cv.html')
    context = {
	}
    return HttpResponse(template.render(context, request))