# Generated by Django 3.2.8 on 2021-11-01 11:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0026_alter_ingredientam_meal'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='IngredientAm',
            new_name='IngredientAmount',
        ),
    ]