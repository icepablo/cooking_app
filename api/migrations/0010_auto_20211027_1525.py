# Generated by Django 3.2.3 on 2021-10-27 13:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20211027_1523'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meal',
            name='amount',
        ),
        migrations.DeleteModel(
            name='IngAmount',
        ),
    ]
