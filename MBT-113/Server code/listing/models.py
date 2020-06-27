from django.contrib.gis.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

#name,address info,contactdetails-phone,email serfices offered, photos,bedcounts,coordinates

class Listing(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='profile')
    name = models.CharField(max_length=200,blank=False)
    address = models.CharField(max_length=200,blank=False)
    city = models.CharField(max_length=200,blank=True)
    pincode = models.IntegerField(blank=True,null=True)
    phone = models.IntegerField(blank=True,null=True)
    #email = models.EmailField(blank=True)
    description = models.TextField(blank=True,null=True)
    services = models.TextField(blank=True,null=True)
    #image = models.ImageField()
    bed_count = models.IntegerField(blank=False,null=True)
    #position = models.PointField(null=True,blank=True)
    #created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Listing.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

def __str__(self):
    return self.name
