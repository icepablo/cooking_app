# Generated by Django 3.2.3 on 2021-08-30 10:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210830_1158'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meal',
            name='ingredients_amount',
            field=models.CharField(max_length=200),
        ),
    ]