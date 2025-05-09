from django.http import HttpResponse
from django.shortcuts import render
from .models import Client, Saler, Category, Product, Store, Order, Contract
# Create your views here.
def index(request):
    store = Store.objects.get(name = 'yoyo')
    products = Product.objects.filter(store = store)  
    orders = Order.objects.filter(store = store)
    return render(request, 'index.html', {'products': products ,'store': store ,'orders': orders})

def home(request):
    return render(request, 'home.html')