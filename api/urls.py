from django.urls import path
from .views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', MealView.as_view()),
    path('add/', MealCreateView.as_view()),
    path('m/', MealTypeView.as_view()),
    path('i/', IngredientView.as_view()),
    path('<int:pk>', SingleMealView.as_view()),
    path('a/',AmountView.as_view())
    
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)