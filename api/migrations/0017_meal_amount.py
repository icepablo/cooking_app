# Generated by Django 3.2.3 on 2021-10-28 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_auto_20211028_1915'),
    ]

    operations = [
        migrations.AddField(
            model_name='meal',
            name='amount',
            field=models.CharField(default=1, max_length=1000),
            preserve_default=False,
        ),
    ]
