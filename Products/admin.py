from django.contrib import admin
from . models import Product, Orders, Address, ShippingAddress
from safedelete.admin import SafeDeleteAdmin, highlight_deleted


class ProductAdmin(SafeDeleteAdmin):
    list_display = (highlight_deleted,  "image", "item", "price", "stock_count",
                    "category", "purchase_date", "expire_date") + SafeDeleteAdmin.list_display
    list_filter = ("item", "category") + SafeDeleteAdmin.list_filter


admin.site.register(Product, ProductAdmin)


class OrdersAdmin(SafeDeleteAdmin):
    list_display = (highlight_deleted, 'products', 'id', 'user', 'billing_address',
                    'ordered', 'ordered_date') + SafeDeleteAdmin.list_display
    list_filter = ('products',) + SafeDeleteAdmin.list_filter


admin.site.register(Orders, OrdersAdmin)


class AddressAdmin(SafeDeleteAdmin):
    list_display = (highlight_deleted,  'street_address',
                    'state_name') + SafeDeleteAdmin.list_display
    list_filter = ('user', 'street_address', 'state_name') + \
        SafeDeleteAdmin.list_display


admin.site.register(Address, AddressAdmin)

class ShippingAdmin(SafeDeleteAdmin):
    list_display = (highlight_deleted,  'street_address',
                    'state_name') + SafeDeleteAdmin.list_display
    list_filter = ('user', 'street_address', 'state_name') + \
        SafeDeleteAdmin.list_display


admin.site.register(ShippingAddress, ShippingAdmin)
