from django.urls import path


from . import views



urlpatterns = [
    path('code', views.submit.as_view()     , name='code_run' ),
]

