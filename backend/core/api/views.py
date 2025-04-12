from rest_framework.viewsets import ModelViewSet
from .serializers import CoreSerializer
from ..models import Core

class CoreViewSet(ModelViewSet):
    queryset = Core.objects.all()
    serializer_class = CoreSerializer