from django.contrib import admin
from django.utils.html import format_html

from .models import Booking


@admin.action(description='Mark selected as Confirmed')
def mark_confirmed(modeladmin, request, queryset):
    queryset.update(status=Booking.Status.CONFIRMED)


@admin.action(description='Mark selected as Completed')
def mark_completed(modeladmin, request, queryset):
    queryset.update(status=Booking.Status.COMPLETED)


@admin.action(description='Mark selected as Cancelled')
def mark_cancelled(modeladmin, request, queryset):
    queryset.update(status=Booking.Status.CANCELLED)


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'date', 'time', 'status_badge', 'status', 'created_at']
    list_filter = ['status', 'date', 'time']
    search_fields = ['name', 'email']
    date_hierarchy = 'date'
    ordering = ['-date', 'time']
    list_per_page = 25
    list_editable = ['status']
    actions = [mark_confirmed, mark_completed, mark_cancelled]

    fieldsets = (
        (None, {'fields': ('name', 'email')}),
        ('Scheduled call', {'fields': ('date', 'time', 'status')}),
        ('Metadata', {'fields': ('created_at',)}),
    )
    readonly_fields = ['created_at']

    @admin.display(description='Status')
    def status_badge(self, obj):
        colors = {
            Booking.Status.PENDING: 'secondary',
            Booking.Status.CONFIRMED: 'info',
            Booking.Status.COMPLETED: 'success',
            Booking.Status.CANCELLED: 'danger',
        }
        color = colors.get(obj.status, 'secondary')
        return format_html(
            '<span class="badge badge-{}">{}</span>',
            color,
            obj.get_status_display(),
        )
