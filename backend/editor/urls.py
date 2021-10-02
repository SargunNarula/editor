from django.urls import path


from . import views



urlpatterns = [
#    path(''    , views.events_home , name='home'     ),
    path('code', views.submit.as_view()     , name='code_run' ),
]

