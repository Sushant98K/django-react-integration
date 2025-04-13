from rest_framework.routers import DefaultRouter
from core.api.urls import core_router
from products.api.urls import product_router
from django.urls import path, include

router = DefaultRouter()
#core
router.registry.extend(core_router.registry)

#products
router.registry.extend(product_router.registry)

urlpatterns = [
    path('', include(router.urls)),
]