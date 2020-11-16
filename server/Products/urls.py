from rest_framework import routers
from .views import ProductViewSet, OrderViewSet, AddressViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register('products', ProductViewSet, 'products')
router.register('orders', OrderViewSet, 'orders')
router.register('address', AddressViewSet, 'address')

urlpatterns = router.urls
