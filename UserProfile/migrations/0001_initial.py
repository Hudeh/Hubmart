# Generated by Django 2.2.3 on 2021-01-01 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('active', models.BooleanField(default=True)),
                ('is_verified', models.BooleanField(default=False)),
                ('staff', models.BooleanField(default=False)),
                ('admin', models.BooleanField(default=False)),
                ('first_name', models.CharField(blank=True, max_length=254, null=True, verbose_name='First Name')),
                ('phone', models.CharField(blank=True, max_length=254, null=True, verbose_name='Phone')),
                ('last_name', models.CharField(blank=True, max_length=254, null=True, verbose_name='Last Name')),
                ('username', models.CharField(blank=True, max_length=254, null=True, verbose_name='Username')),
                ('email', models.EmailField(blank=True, max_length=255, null=True, unique=True, verbose_name='Email')),
                ('timestamp', models.DateTimeField(auto_now=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
