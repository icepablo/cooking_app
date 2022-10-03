from django.db import models
from django.db.models.deletion import CASCADE

class MealType(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    name = models.TextField()
    
    def __str__(self):
        return self.name

class Meal(models.Model):
    name = models.TextField()
    type = models.ForeignKey(MealType, on_delete=models.CASCADE, default=None)
    recipe = models.TextField()
    photo = models.ImageField(null=True, height_field=None, width_field=None, max_length=None,upload_to='media/')
    ingredients = models.ManyToManyField(Ingredient)

    def __str__(self):
        return self.name    

class IngredientAmount(models.Model):
    ingredient_name = models.ForeignKey(Ingredient, on_delete=models.CASCADE, default=None)
    amount = models.FloatField(default=None)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE, default=None, related_name='meal_id')

    class Meta:
        ordering = ['meal']

    def __str__(self):
        return self.ingredient_name
