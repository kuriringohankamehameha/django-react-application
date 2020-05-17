from django.db import models

# Create your models here.
# Simply creates table fields. Populate them into the Database using migrations.py
# Create the Migrations File: `python manage.py makemigrations leads`
# And then run the migrations to create tables using: `python manage.py migrate`
class Lead(models.Model):
    # Define the fields
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)