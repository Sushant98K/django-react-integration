from rest_framework.serializers import ModelSerializer
from ..models import Core

class CoreSerializer(ModelSerializer):
    class Meta:
        model = Core
        fields = ('id', 'title', 'body')