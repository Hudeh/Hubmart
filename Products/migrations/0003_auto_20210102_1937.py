# Generated by Django 2.2.3 on 2021-01-02 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0002_auto_20210101_2132'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shippingaddress',
            name='zip',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
