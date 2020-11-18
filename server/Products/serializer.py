from django_countries.serializer_fields import CountryField
from rest_framework import serializers
from .models import Product, Orders, Address
from UserProfile.UserSerializers import UserSerializer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model =Product
        fields = ('id','name', 'image', 'price', 'in_stock', 'category')


class OrderSerializer(serializers.ModelSerializer):
    # user = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Orders
        fields = ('user','order','quantity')

class AddressSerializer(serializers.ModelSerializer):
    country = CountryField()
    user = serializers.SlugRelatedField(slug_field='email',read_only=True)
    

    class Meta:
        model = Address
        fields = (
            'id',
            'user',
            'street_address',
            'first_name',
            'last_name',
            'country',
            'city_name',
            'zip',
            'address_type',
            'default',
            'phone'
        )