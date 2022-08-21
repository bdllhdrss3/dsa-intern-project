from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dashboard/', include('Dashboard.urls')),
    # path('', views.indexView, name="home")
    path('', lambda request: redirect('/dashboard/', permanent=False)),
    
]