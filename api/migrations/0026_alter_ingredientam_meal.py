# Generated by Django 3.2.8 on 2021-11-01 10:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0025_alter_ingredientam_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ingredientam',
            name='meal',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='meal_id', to='api.meal'),
        ),
    ]