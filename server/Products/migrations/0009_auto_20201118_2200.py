# Generated by Django 2.2.3 on 2020-11-18 21:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0008_auto_20201118_1524'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='name',
            new_name='item',
        ),
    ]
