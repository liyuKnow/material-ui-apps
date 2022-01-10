from django.urls import path
from .views import MyPreferenceFormView

urlpatterns = [
    path("add", MyPreferenceFormView.as_view(), name="preferences"),
]
