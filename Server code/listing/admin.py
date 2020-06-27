from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin
from .models import Listing

# Register your models here.

@admin.register(Listing)
class ListingAdmin(OSMGeoAdmin):
    list_display = ('name',)

