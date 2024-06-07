from rest_framework import viewsets
from poll.models import Poll
from poll.serializers import PollSerializer


class PollViewSet(viewsets.ModelViewSet):
    queryset = Poll.objects.all()

    def get_serializer_class(self):
        return PollSerializer
