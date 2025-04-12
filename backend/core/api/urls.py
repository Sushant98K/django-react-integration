from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import CoreViewSet

core_router = DefaultRouter()
core_router.register(r'cores', CoreViewSet)