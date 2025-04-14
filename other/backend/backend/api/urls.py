from rest_framework.routers import DefaultRouter
from app.api.urls import product_router
from django.urls import path, include

router = DefaultRouter()

# /App => Product
router.registry.extend(product_router.registry)

urlpatterns = [
    path('', include(router.urls))
]
