from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Preference(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    bio = models.TextField()
    songs = models.ManyToManyField("songs.Song", blank=True)
    added_at = models.DateTimeField()
    active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.first_name} "
