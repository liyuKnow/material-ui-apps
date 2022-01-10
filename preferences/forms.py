from django import forms
from .models import Preference
from django.core.exceptions import ValidationError


class PreferenceModelForm(forms.ModelForm):
    class Meta:
        model = Preference
        fields = "__all__"

    def clean_first_name(self):
        first_name = self.cleaned_data.get("first_name")
        if len(first_name) < 3:
            raise ValidationError("Firstname must be at least 3 characters long")

        return first_name

    def clean_last_name(self):
        name = self.cleaned_data.get("last_name")
        if len(name) < 3:
            raise ValidationError("Last name must be at least 3 characters long")

        return name

    def clean_bio(self):
        bio = self.cleaned_data.get("bio")
        if len(bio) < 10:
            raise ValidationError("Bio must be at least 10 characters long")

        return bio
