from rest_framework import routers
from .views import ProductViewSet, OrderViewSet, AddressViewSet, ShippingViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register('product-items', ProductViewSet, 'product-items')
router.register('orders', OrderViewSet, 'orders')
router.register('billing', AddressViewSet, 'billing')
router.register('shipping', ShippingViewSet, 'shipping')

urlpatterns = router.urls
