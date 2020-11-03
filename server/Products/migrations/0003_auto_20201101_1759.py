# Generated by Django 2.2.3 on 2020-11-01 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0002_address_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='quantity',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.RemoveField(
            model_name='orders',
            name='order',
        ),
        migrations.AddField(
            model_name='orders',
            name='order',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='orders',
            name='ordered_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.DeleteModel(
            name='ProductItem',
        ),
    ]
