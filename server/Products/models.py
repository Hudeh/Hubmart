from django.db import models
from safedelete.models import SafeDeleteModel
from safedelete.models import SOFT_DELETE_CASCADE
from safedelete.managers import SafeDeleteAllManager
from django.conf import settings
from django_countries.fields import CountryField

class Product(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE_CASCADE

    name = models.CharField(max_length=255)
    image = models.ImageField(
        upload_to='product/images/uploads_date/%Y/%m/%d/')
    price = models.DecimalField(max_digits=12, decimal_places=2)
    stock_count = models.CharField(max_length=4)
    in_stock = models.CharField(max_length=10)
    category = models.CharField(max_length=30)
    purchase_date = models.DateField(blank=True, null=True)
    expire_date = models.DateField(blank=True, null=True)
    uploaded_date = models.DateField(auto_now_add=True, blank=True, null=True)
    current_update = models.DateField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return self.name

    original_objects = SafeDeleteAllManager()


class ProductItem(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE_CASCADE


    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                            on_delete=models.CASCADE)
    ordered = models.BooleanField(default=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


    def __str__(self):
        return str(self.product)
    original_objects = SafeDeleteAllManager()

class Orders(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE_CASCADE

    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    order = models.ManyToManyField(ProductItem)
    ordered = models.BooleanField(default=False)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    shipping_address = models.ForeignKey(
        'Address', related_name='shipping_address', on_delete=models.SET_NULL, blank=True, null=True)
    billing_address = models.ForeignKey(
        'Address', related_name='billing_address', on_delete=models.SET_NULL, blank=True, null=True)
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    class Meta:
        verbose_name_plural = "Orders"

    def __str__(self) -> str:
        return str(self.order)
        
    original_objects = SafeDeleteAllManager()

ADDRESS_CHOICES = (
    ('B', 'Billing'),
    ('S', 'Shipping'),
)

class Address(SafeDeleteModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    street_address = models.CharField(max_length=100)
    apartment_address = models.CharField(max_length=100)
    country = CountryField(multiple=False)
    phone = models.CharField(max_length=15, blank=True, null=True)
    zip = models.CharField(max_length=100)
    address_type = models.CharField(max_length=1, choices=ADDRESS_CHOICES)
    default = models.BooleanField(default=False)

    original_objects = SafeDeleteAllManager()

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'Addresses'