from django.db import models
from safedelete.models import SafeDeleteModel
from safedelete.models import SOFT_DELETE_CASCADE
from safedelete.managers import SafeDeleteAllManager
from django.conf import settings
from django_countries.fields import CountryField
from django.contrib.postgres.fields import ArrayField
from decimal import  Decimal



class Product(SafeDeleteModel):
    """Product Model"""
    _safedelete_policy = SOFT_DELETE_CASCADE

    item = models.CharField(max_length=255)
    image = models.ImageField(
        upload_to='product/images/uploads_date/%Y/%m/%d/',blank=True, null=True)
    price = models.DecimalField(max_digits=12, decimal_places=2, default=Decimal("0.00"))
    stock_count = models.PositiveIntegerField()
    category = models.CharField(max_length=100)
    description = models.TextField(default='Product description.')
    purchase_date = models.DateField(blank=True, null=True)
    expire_date = models.DateField(blank=True, null=True)
    uploaded_date = models.DateField(auto_now_add=True, null=True, blank=True)
    current_update = models.DateField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return self.item

    original_objects = SafeDeleteAllManager()




class Orders(SafeDeleteModel):
    """Order Model"""
    _safedelete_policy = SOFT_DELETE_CASCADE
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE,related_name="orders",null=True)
    products= ArrayField(models.CharField(max_length=255),default=list)
    quantities = ArrayField(models.CharField(max_length=255), default=list)
    ordered = models.BooleanField(default=False)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('0.00'))
    delivery_method = models.CharField(max_length=30, default='')
    payment_method = models.CharField(max_length=30, default='')
    ordered_date = models.DateTimeField(auto_now_add=True)
    shipping_address = models.ForeignKey(
        'Address', related_name='shipping_address', on_delete=models.SET_NULL, blank=True, null=True)
    billing_address = models.ForeignKey(
        'Address', related_name='billing_address', on_delete=models.SET_NULL, blank=True, null=True)
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    class Meta:
        verbose_name_plural = "Orders"

    def __str__(self) -> str:
        return str(self.products)
        
    original_objects = SafeDeleteAllManager()

ADDRESS_CHOICES = (
    ('B', 'Billing'),
    ('S', 'Shipping'),
)

class Address(SafeDeleteModel):
    """Address Model"""
    _safedelete_policy = SOFT_DELETE_CASCADE

    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE,null=True, related_name='address')
    street_address = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100,blank=True, null=True)
    last_name = models.CharField(max_length=100,blank=True, null=True)
    city_name = models.CharField(max_length=100)
    state_name = models.CharField(max_length=100,blank=True, null=True)
    store_name = models.CharField(max_length=100,blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    zip = models.CharField(max_length=100)
    updated_date = models.DateTimeField(auto_now_add=True,blank=True, null=True)
    create_date = models.DateTimeField(auto_now=True,blank=True, null=True)

    original_objects = SafeDeleteAllManager()

    def __str__(self):
        return str(self.user)

    class Meta:
        verbose_name_plural = 'Addresses'

class ShippingAddress(SafeDeleteModel):
    """ Shipping Adress"""
    _safedelete_policy = SOFT_DELETE_CASCADE

    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE,null=True, related_name='shipping')
    street_address = models.CharField(max_length=100,blank=True, null=True)
    first_name = models.CharField(max_length=100,blank=True, null=True)
    last_name = models.CharField(max_length=100,blank=True, null=True)
    city_name = models.CharField(max_length=100,blank=True, null=True)
    state_name = models.CharField(max_length=100,blank=True, null=True)
    country = models.CharField(max_length=100, default="Nigeria", blank=True, null=True)
    zip = models.CharField(max_length=100,blank=True, null=True)
    note = models.TextField(default="shipping note", blank=True, null=True)
    updated_date = models.DateTimeField(auto_now_add=True)
    create_date = models.DateTimeField(auto_now=True)

    original_objects = SafeDeleteAllManager()

    def __str__(self):
        return str(self.user)

    class Meta:
        verbose_name_plural = 'Shipping Address'