from django.db.models.query import QuerySet
from rest_framework import generics,status
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.generics import RetrieveDestroyAPIView

class MealView(generics.ListAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer

    def delete(self, request):
        id = request.data
        snippet = Meal.objects.get(id=id)
        snippet.delete()
        return Response(status=status.HTTP_200_OK)

class SingleMealView(RetrieveDestroyAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer

class MealCreateView(generics.CreateAPIView):
    queryset = Meal.objects.all()
    serializer_class = CreateMealSerializer

class MealTypeView(generics.ListCreateAPIView):
    queryset = MealType.objects.all()
    serializer_class = MealTypeSerializer

class IngredientView(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class AmountView(generics.ListCreateAPIView):
    queryset = IngredientAmount.objects.all()
    serializer_class = AmountSerializer
