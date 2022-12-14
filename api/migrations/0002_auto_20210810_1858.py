# Generated by Django 3.2.3 on 2021-08-10 16:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='commented_meal',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.meal'),
        ),
        migrations.AlterField(
            model_name='meal',
            name='photo',
            field=models.ImageField(null=True, upload_to='media/'),
        ),
    ]
