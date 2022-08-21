from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import redirect
from . import views

app_name = "dashboard"
urlpatterns = [
    path('', views.indexView, name="index"),
    path('covid', views.covidView, name="covid"),
    # path('about', views.aboutView, name="about"),
    # path('', lambda request: redirect('/dashboard/covid', permanent=False)),
    path('map', views.mapView, name="map"),
    path('sentiment-analysis', views.sentimentAnalysisView, name="sentiment_analysis"),
    path('data', views.dataView, name="data"),
    path('blogs', views.blogsView, name="blogs"),
    path('blog2', views.blog2View, name="blog2"),
    path('test', views.testView, name="test"),

    # APi endpoints
    path('api/v1/', views.dasboardView, name="dashboard_api"),
    path('api/v1/map', views.mapDataView, name="map_api"),
    path('api/v1/map_filter/', views.mapDataByDate, name="map_data_by_date"),
    path('api/v1/update', views.update, name="updates_api"),
    path('api/v1/analysis', views.sentimentAnalysis, name="analysis_api")
]

# urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)