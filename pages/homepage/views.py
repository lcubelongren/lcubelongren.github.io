from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('homepage/homepage.html')
    context = {
	}
    return HttpResponse(template.render(context, request))