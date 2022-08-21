from rest_framework import serializers
from .models import CovidData, District, CasesPerDistrict

class CovidModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CovidData
        fields = "__all__"

class DistrictModelSerializer(serializers.ModelSerializer):
    total = serializers.IntegerField()
    class Meta:
        model = District
        fields = "__all__"

class CasesPerDistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = CasesPerDistrict
        fields = "__all__"

# CovidModelSerializer(CovidData).data