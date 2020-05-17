from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset (Allows us to create CRUD API without specifiying explicit methods)
# We can use default routes and register endpoints, so that we can request from that endpoint

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all() # get all the fields to load the queryset
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer