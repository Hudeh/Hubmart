from rest_framework import viewsets
from .serializer import ProductSerializer, OrderSerializer,AddressSerializer,ShippingSerializer
from rest_framework.permissions import  AllowAny, IsAuthenticated
from .models import Product,Orders,Address, ShippingAddress

class ProductViewSet(viewsets.ModelViewSet):
    """product viewsets"""
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Product.objects.all()
    

class OrderViewSet(viewsets.ModelViewSet):
    """Order viewsets"""
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.orders.all()
    
   
    def perform_create(self, serializer):
        billing_address = Address.objects.get(user=self.request.user)
        return serializer.save(user=self.request.user, billing_address=billing_address)

class AddressViewSet(viewsets.ModelViewSet):
    """Address viewsets"""
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.address.all()

    def perform_create(self,serializer):
        return serializer.save(user=self.request.user)
class ShippingViewSet(viewsets.ModelViewSet):
    """Address viewsets"""
    serializer_class = ShippingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.shipping.all()

    def perform_create(self,serializer):
        return serializer.save(user=self.request.user)