from rest_framework import viewsets
from .serializer import ProductSerializer, OrderSerializer,AddressSerializer
from rest_framework.permissions import  AllowAny, IsAuthenticated
from .models import Product,Orders,Address

class ProductViewSet(viewsets.ModelViewSet):
    """product viewsets"""
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Product.objects.all()
    

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.orders.all()
    

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

class AddressViewSet(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.address.all()

    def perform_create(self,serializer):
        return serializer.save(user=self.request.user)