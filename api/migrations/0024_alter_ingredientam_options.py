# Generated by Django 3.2.8 on 2021-11-01 08:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_remove_meal_amout'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='ingredientam',
            options={'ordering': ['ingredient_name']},
        ),
    ]
