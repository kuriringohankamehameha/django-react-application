from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
# Register our routes to the endpoint
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls # Gives the urls associated with this endpoint