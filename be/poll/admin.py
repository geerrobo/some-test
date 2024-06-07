from django.contrib import admin
from poll.models import Poll


@admin.register(Poll)
class PollAdmin(admin.ModelAdmin):
    list_display = ["title", "is_done", "created_at"]

