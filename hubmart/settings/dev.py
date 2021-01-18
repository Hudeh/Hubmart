'''Use this for development'''

from .base import *

ALLOWED_HOSTS += ['127.0.0.1']
DEBUG = True

WSGI_APPLICATION = 'hubmart.wsgi'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'hubmartdb',
        'USER': 'postgres',
        'PASSWORD': 'Hudehtech@12',
        'HOST': 'localhost',
        'PORT': '',
    }
}

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)
CORS_ORIGIN_ALLOW_ALL = True