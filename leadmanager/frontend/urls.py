from django.urls import path
from . import views

# Set url patterns for the frontend app
urlpatterns = [
    # Load views.index() for the root url (wrt frontend)
    path('', views.index)
]