from rest_framework import serializers
from .models import Listing

from django.contrib.auth.models import User

class ListingSerializer(serializers.ModelSerializer):

    #id = serializers.IntegerField(source = 'pk', read_only = True)
    #username = serializers.CharField(source = 'user.username', read_only = True)
    #email = serializers.CharField(source = 'user.email')
    #first_name = serializers.CharField(source = 'user.first_name')
    #last_name = serializers.CharField(source = 'user.last_name')

    class Meta:
        model = Listing
        #fileds = ('name','position')
        fields = '__all__'
        read_only_fields = ('updated_at',)

    #def update(self, instance, validated_data):
    # First, update the User
     #   user_data = validated_data.pop('user', None)
      #  for attr, value in user_data.items():
       #         setattr(instance.user, attr, value)
    # Then, update UserProfile
       # for attr, value in validated_data.items():
        #    setattr(instance, attr, value)
        #instance.save()
        #return instance

    #def create(self, validated_data):
     #           user_data = validated_data.pop('user')
      #          user = User.objects.create(**user_data)
       #         profile = Listing.objects.create(user = user, **validated_data)
        #        return profile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #fileds = ('name','position')
        fields = '__all__'
        #read_only_fields = ('updated_at',)