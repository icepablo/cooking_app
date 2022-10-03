# Generated by Django 3.2.3 on 2021-10-27 09:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_meal_ingredients_amount'),
    ]

    operations = [
        migrations.CreateModel(
            name='IngAmount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ingname', models.TextField()),
                ('ingamount', models.IntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='meal',
            name='amount',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.ingamount'),
        ),
    ]
