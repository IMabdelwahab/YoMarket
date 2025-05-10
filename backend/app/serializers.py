from rest_framework import serializers # serializer is responsible to transform  a model into json format
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DjangoUser
        fields = ['username','email','last_name','first_name']

class ClientSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Client
        # fields = ['phone','address','user']
        fields = '__all__'

    def create(self,validated_data):
        user_data = validated_data.pop('user')
        user = DjangoUser.objects.create(**user_data) # cliant.user must be a user instance
        client = Client.objects.create(user=user,**validated_data) # ** to make the dictionary keyword argument : usermane = "person1"
        return client
    
    

class SalerSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Client
        # fields = ['phone','address','user']
        fields = '__all__'

    def create(self,validated_data):
        user_data = validated_data.pop('user')
        user = DjangoUser.objects.create(**user_data)
        saler = Saler.objects.create(user=user,**validated_data)
        return saler


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'