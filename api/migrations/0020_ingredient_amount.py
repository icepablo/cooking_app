# Generated by Django 3.2.8 on 2021-10-31 15:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_delete_ingamount'),
    ]

    operations = [
        migrations.AddField(
            model_name='ingredient',
            name='amount',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]