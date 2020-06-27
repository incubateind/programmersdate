from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

#from django.views import generic
#from django.contrib.gis.geos import fromstr
from django.contrib.gis.db.models.functions import Distance
from django.contrib.gis.geos import Point

from .serializer import ListingSerializer
from .serializer import UserSerializer
from .models import Listing
from django.contrib.auth.models import User

longitude = -80.191788
latitude = 25.761681

user_location = Point(longitude, latitude, srid=4326)

#hospitals/
class HospitalList(APIView):
    def get(self,request):
        if request.method == "GET":
            user = User.objects.all()
            hospitals = Listing.objects.all()
            serializer1 = ListingSerializer(hospitals, many=True)
            serializer2 = UserSerializer(user, many=True)
            return Response(serializer1.data,serializer2.data)
            

#hospitals/1/
class SingleHospitalList(APIView):

    def get(self,request,id):
        try:
            hospitals = Listing.objects.get(id=id)
        except Listing.DoesNotExist:
            return Response("Above entry do not exists",status=status.HTTP_404_NOT_FOUND)
        
        if request.method=="GET":
            serializer = ListingSerializer(hospitals)
            return Response(serializer.data)

#hospitals/1/update/
class UpdateList(APIView):

    def put(self,request,id):
        try:
            hospitals = Listing.objects.get(id=id)
        except Listing.DoesNotExist:
            return Response("Above entry do not exists",status=status.HTTP_404_NOT_FOUND)
        
        if request.method=="PUT":
            serializer = ListingSerializer(hospitals,data=request.data)
            data = {}
            if serializer.is_valid():
                serializer.save()
                data["success"] = "update successful"
                return Response(data=data)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

#hospitals/create/
class CreateList(APIView):
    def post(self,request):
        hospital = Listing()

        if request.method == "POST":
            serializer = ListingSerializer(hospital,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)