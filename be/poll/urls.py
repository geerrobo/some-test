from rest_framework_nested import routers
from .views import PollViewSet

router = routers.DefaultRouter()
router.register("", PollViewSet, basename="polls")

urlpatterns = router.urls