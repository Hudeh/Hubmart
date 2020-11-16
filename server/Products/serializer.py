from django_countries.serializer_fields import CountryField
from rest_framework import serializers
from .models import Product, Orders, Address


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model =Product
        fields = ('id','name', 'image', 'price', 'in_stock', 'category')


class OrderSerializer(serializers.ModelSerializer):
    # user = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Orders
        fields = ('user','shipping_address','billing_address','order','quantity')

class AddressSerializer(serializers.ModelSerializer):
    country = CountryField()

    class Meta:
        model = Address
        fields = (
            'id',
            'user',
            'street_address',
            'apartment_address',
            'country',
            'zip',
            'address_type',
            'default',
            'phone'
        )