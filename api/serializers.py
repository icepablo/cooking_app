from .models import *
from rest_framework import serializers

class AmountSerializer(serializers.ModelSerializer):
    #ingredient_name= serializers.PrimaryKeyRelatedField(source='ingredient_name.name',queryset=Ingredient.objects.all())
   # meal_name = serializers.PrimaryKeyRelatedField(source='meal.name',queryset=Meal.objects.all())
    meal_name = serializers.ReadOnlyField(source='meal.name')
    ingredient_name = serializers.ReadOnlyField(source='ingredient_name.name')
    
    
    class Meta:
        model = IngredientAmount    
        fields = ('ingredient_name','amount','meal_name')  
        
        #fields = '__all__'
        '''
        extra_kwargs = {'meal_name': {'write_only': True}}
        def create(self, validated_data):
            meal_name_data = validated_data.pop('meal_name')
            ingredient_amount = IngredientAmount.objects.create(**validated_data)
            Amount.objects.create(user=user, **profile_data)
            return user
           '''
class MealTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MealType
        fields = '__all__'   

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class CreateMealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = '__all__'

class MealSerializer(serializers.ModelSerializer):
    type_name= serializers.ReadOnlyField(source='type.name')
    ingredients = serializers.SlugRelatedField(read_only=True, slug_field='name', many=True)   
    amount = AmountSerializer(read_only=True,  many=True,source='meal_id')
    
    class Meta:
        model = Meal
        fields = ('id', 'name', 'type_name', 'recipe', 'photo', 'ingredients','amount')
           