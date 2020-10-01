from django.shortcuts import render
from django.views.generic import View

from django.http import JsonResponse
from time import time

class AjaxHandlerView(View):

    def get(self, request):

        #'request' is an object,'GET' is a dictionary and 'get()' is its method
        text = request.GET.get('button_text')  #gets the value of the key 'button_text' in js file
        
        # print()
        # print(text)
        # print()
        
        #Checks whether the request is ajax or not
        if request.is_ajax():
            t =  time()
            text = f'Ajax request is {t}'
            return JsonResponse({'text':text}, status=200)

        return render(request, 'demo_app/index.html')


    def post(self, request):
        card_text = request.POST.get('text')

        result = f'I have got: {card_text}'
        return JsonResponse({'data':result}, status=200)