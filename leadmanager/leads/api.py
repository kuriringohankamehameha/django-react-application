from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset (Allows us to create CRUD API without specifiying explicit methods)
# We can use default routes and register endpoints, so that we can request from that endpoint

class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
    serializer_class = LeadSerializer

    def get_queryset(self):
        # Gets only the leads of that particular user
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)