from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .serializers import *
# Create your views here.
def index(request):
    store = Store.objects.get(name = 'yoyo')
    products = Product.objects.filter(store = store)  
    orders = Order.objects.filter(store = store)
    return render(request, 'index.html', {'products': products ,'store': store ,'orders': orders})

def home(request):
    return render(request, 'home.html')

#API views
class ClientView(viewsets.ModelViewSet):
    # !!! queryset and serializer_class are requiered fields with those specifique name but not in this specifique order !!!
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class SalerView(viewsets.ModelViewSet):
    queryset = Saler.objects.all()
    serializer_class = SalerSerializer

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
