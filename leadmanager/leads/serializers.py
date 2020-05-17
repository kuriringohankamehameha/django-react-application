from rest_framework import serializers
from leads.models import Lead

# Lead Serializer
# We need to serialize the Python objects into JSON
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead # get the model from above (leads.models)
        fields = '__all__' # We're serializing all fields
