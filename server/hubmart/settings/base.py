import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '!_l_av7v@@^ei8q@z&^$16*7qh50v-5%v^$pz9k^!1v^0if=w%'
DEBUG = True
ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'suit',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    #third party
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'corsheaders',
    'rest_framework',
    'safedelete',
    'knox',
    'graphene_django',
    'django_countries',

    #app
    'Products',
    'UserProfile'
  


]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'hubmart.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.abspath(os.path.join(os.path.dirname(__file__),'../../../hubmart/' 'build'))],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

STATIC_URL = '/static/'
MEDIA_URL = '/media/'
STATICFILES_DIRS = [os.path.abspath(os.path.join(os.path.dirname(__file__),'../../../hubmart/' 'build/static'))]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
SITE_ID = 1

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'knox.auth.TokenAuthentication',
    ),
    'DATETIME_FORMAT':"%m/%d/%Y %H:%M:%S"
}

#djangorestql for querying dynamic data
# GRAPHENE = {
#     'SCHEMA': 'cloudsuit.schema.schema'
# }




ACCOUNT_EMAIL_REQUIRED = False
ACCOUNT_AUTHENTICATION_METHOD = 'username'
ACCOUNT_EMAIL_VERIFICATION = 'none'
AUTH_USER_MODEL = 'UserProfile.MyUser'



# Django Suit configuration example
SUIT_CONFIG = {
    # header
    'ADMIN_NAME': 'Hubmart Store',
    'HEADER_DATE_FORMAT': 'l, j. F Y',
    'HEADER_TIME_FORMAT': 'H:i',

    # forms
    'SHOW_REQUIRED_ASTERISK': True,  # Default True
    'CONFIRM_UNSAVED_CHANGES': True, # Default True

    # menu
    'SEARCH_URL': '/admin/auth/user/',
    'MENU_ICONS': {
       'sites': 'icon-leaf',
       'auth': 'icon-lock',
    },
    'MENU_OPEN_FIRST_CHILD': True, # Default True
    'MENU_EXCLUDE': ('auth.group',),
    'MENU': (
        'sites',
        {'app': 'auth', 'icon':'icon-lock', 'models': ('user', 'group')},
        {'label': 'Settings', 'icon':'icon-cog', 'models': ('auth.user', 'auth.group')},
        {'label': 'Support', 'icon':'icon-question-sign', 'url': '/support/'},
    ),

    # misc
    'LIST_PER_PAGE': 15
}