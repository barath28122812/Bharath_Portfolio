"""URL configuration for backend project."""

from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from bookings.views import BookingViewSet

router = DefaultRouter()
router.register('bookings', BookingViewSet, basename='booking')

admin.site.site_header = 'Portfolio Admin'
admin.site.site_title = 'Portfolio Admin'
admin.site.index_title = 'Bookings & Site administration'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
