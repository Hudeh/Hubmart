from rest_framework import routers
from .views import ProductViewSet, OrderViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register('products', ProductViewSet, 'products')
router.register('order', OrderViewSet, 'order')

urlpatterns = router.urls
