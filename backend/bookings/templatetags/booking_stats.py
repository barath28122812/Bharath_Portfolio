from django import template
from django.utils import timezone

from bookings.models import Booking

register = template.Library()


@register.simple_tag
def booking_counts():
    today = timezone.localdate()
    return {
        'total': Booking.objects.count(),
        'today': Booking.objects.filter(date=today).count(),
        'upcoming': Booking.objects.filter(date__gt=today).count(),
        'completed': Booking.objects.filter(status=Booking.Status.COMPLETED).count(),
        'pending': Booking.objects.filter(status=Booking.Status.PENDING).count(),
    }


@register.simple_tag
def bookings_per_month(months=6):
    today = timezone.localdate()
    rows = []
    for i in range(months - 1, -1, -1):
        y, m = today.year, today.month - i
        while m <= 0:
            m += 12
            y -= 1
        label = f'{y}-{m:02d}'
        rows.append({
            'label': label,
            'count': Booking.objects.filter(date__year=y, date__month=m).count(),
        })
    return rows


@register.simple_tag
def upcoming_bookings(limit=5):
    today = timezone.localdate()
    return Booking.objects.filter(date__gte=today).order_by('date', 'time')[:limit]
