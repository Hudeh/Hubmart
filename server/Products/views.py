from rest_framework import viewsets
from .serializer import ProductSerializer
from rest_framework.permissions import  AllowAny
from .models import Product

class ProductViewSet(viewsets.ModelViewSet):
    """product viewsets"""
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_queryset(self, *args, **kwargs):
        return Product.objects.all()
    