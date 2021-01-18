'''Use this for production'''

from .base import *
import dj_database_url

SECRET_KEY = ('SECRET_KEY')
DEBUG = False

DATABASES = {'default': dj_database_url.config('DATABASE_URL')}
ALLOWED_HOSTS += ['https://hubmart-clone.heroku.com/']
WSGI_APPLICATION = 'hubmart.wsgi'



AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
