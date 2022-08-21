"""
ASGI config for DataScienceAfrica project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os
import django
from channels.http import AsgiHandler
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter
from channels.routing import ProtocolTypeRouter, URLRouter
import DataScienceAfrica.routing
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'DataScienceAfrica.settings')

# application = get_asgi_application()


# django.setup()

application = ProtocolTypeRouter({
"http": AsgiHandler(),
"websocket": AuthMiddlewareStack(
        URLRouter(
            DataScienceAfrica.routing.websocket_urlpatterns
        )
    ),
})
