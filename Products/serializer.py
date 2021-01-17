from django_countries.serializer_fields import CountryField
from rest_framework import serializers
from .models import Product, Orders, Address, ShippingAddress
from UserProfile.UserSerializers import UserSerializer





class ProductSerializer(serializers.ModelSerializer):
    # image = serializers.ImageField(
    #     max_length=None, use_url=True,
    # )
    class Meta:
        model =Product
        fields = ("id","item", "price", "stock_count","category")


class OrderSerializer(serializers.ModelSerializer):
    orders = ProductSerializer(many=True, read_only=True)
    user = serializers.SlugRelatedField(slug_field='email',read_only=True)
    billing_address = serializers.SlugRelatedField(slug_field='street_address',read_only=True)
    class Meta:
        model = Orders
        fields = ("__all__")

class AddressSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field='email',read_only=True)
    

    class Meta:
        model = Address
        fields = (
            'id',
            'user',
            'street_address',
            'first_name',
            'last_name',
            'store_name',
            'state_name',
            'city_name',
            'zip',
            'phone'
        )

class ShippingSerializer(serializers.ModelSerializer):

    user = serializers.SlugRelatedField(slug_field='email',read_only=True)
    

    class Meta:
        model = ShippingAddress
        fields = (
            'id',
            'user',
            'street_address',
            'first_name',
            'last_name',
            'country',
            'city_name',
            'state_name',
            'zip',
            'note'
        )