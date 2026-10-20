from rest_framework import serializers

from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'name', 'email', 'date', 'time', 'status', 'created_at']
        read_only_fields = ['id', 'created_at']
