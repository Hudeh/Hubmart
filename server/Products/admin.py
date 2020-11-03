from django.contrib import admin
from . models import Product, Orders, Address
from safedelete.admin import SafeDeleteAdmin, highlight_deleted


class ProductAdmin(SafeDeleteAdmin):
    list_display = (highlight_deleted,  "image", "name", "price", "stock_count", "in_stock",
                    "category", "purchase_date", "expire_date") + SafeDeleteAdmin.list_display
    list_filter = ("name", "category") + SafeDeleteAdmin.list_filter


admin.site.register(Product, ProductAdmin)



class OrdersAdmin(SafeDeleteAdmin):
    list_display = (highlight_deleted, 'ordered','user') + SafeDeleteAdmin.list_display
    list_filter = ('order',) + SafeDeleteAdmin.list_filter

admin.site.register(Orders, OrdersAdmin)


class AddressAdmin(SafeDeleteAdmin):
    list_display = (highlight_deleted,  'street_address', 'country') + SafeDeleteAdmin.list_display
    list_filter= ('user', 'street_address', 'country') + SafeDeleteAdmin.list_display


admin.site.register(Address, AddressAdmin)