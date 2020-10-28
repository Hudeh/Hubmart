from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/auth/', include('UserProfile.urls')),
    path('api/products/', include('Products.urls')),
    # path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path('admin/', admin.site.urls),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if not settings.DEBUG:
    urlpatterns += [re_path(r'^.*',
                            TemplateView.as_view(template_name='index.html'))]