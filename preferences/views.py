from django.shortcuts import render
from django.views.generic import FormView
from .forms import PreferenceModelForm
from django.contrib import messages

# Create your views here.
class MyPreferenceFormView(FormView):
    template_name = "preferences/preferences.html"
    form_class = PreferenceModelForm

    def get_success_url(self):
        return self.request.path

    def form_valid(self, form):
        form.save()
        messages.add_message(
            self.request, messages.SUCCESS, "Preferences saved successfully"
        )
        return super().form_valid(form)

    def form_invalid(self, form):
        form.add_error(None, "Opps something went wrong ...")
        return super().form_invalid(form)
