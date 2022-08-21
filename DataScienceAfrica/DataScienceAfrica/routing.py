# from channels.routing import route
from Dashboard.consumers import NotificationSystem
from django.urls import re_path

websocket_urlpatterns = [
    re_path('ws/', NotificationSystem.as_asgi()),
]