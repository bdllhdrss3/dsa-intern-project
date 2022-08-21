from django.contrib import admin
from .models import *
from import_export.admin import ImportExportModelAdmin


@admin.register(CovidData)
class CovidDataAdmin(ImportExportModelAdmin):
    pass
@admin.register(District)
class DistrictAdmin(ImportExportModelAdmin):
    pass
@admin.register(CasesPerDistrict)
class CasesPerDistrictAdmin(ImportExportModelAdmin):
    pass
@admin.register(SentimentAnalysis)
class SentimentAnalysisAdmin(ImportExportModelAdmin):
    pass