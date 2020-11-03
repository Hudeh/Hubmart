from rest_framework import viewsets
from .serializer import ProductSerializer, OrderSerializer,AddressSerializer
from rest_framework.permissions import  AllowAny, IsAuthenticated
from .models import Product,Orders,Address

class ProductViewSet(viewsets.ModelViewSet):
    """product viewsets"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_queryset(self, *args, **kwargs):
        return Product.objects.all()
    

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        return self.request.user.order.all()
    

    def post(self, serializer, *args, **kwargs):
        return serializer.save(user=self.request.user)

class AddressViewSet(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        address_type = self.request.get_params.get('address_type', None)
        qs = Address.objects.all()
        if address_type is None:
            return qs
        return qs.filter(self.request.user, address_type=address_type)

    def post(self,serializer, *args, **kwargs):
        return serializer.save(user=self.request.user)