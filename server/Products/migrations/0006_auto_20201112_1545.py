# Generated by Django 2.2.3 on 2020-11-12 14:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0005_auto_20201106_1451'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='address', to=settings.AUTH_USER_MODEL),
        ),
    ]
