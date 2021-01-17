from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
# from safedelete.models import SafeDeleteModel
# from safedelete.models import SOFT_DELETE_CASCADE
# from safedelete.managers import SafeDeleteAllManager
class UserManager(BaseUserManager):

    def create_user(self, email, password=None, active=True, staff=False, admin=False, **extra_fields):
        """ usermanger for creating user profile"""
        if not email:
            raise ValueError("please provide username or email")
        user = self.model(email=email, **extra_fields)
        email=self.normalize_email(email)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """ creating superuser """
        user = self.create_user(email, password)
        user.admin = True
        user.staff = True
        user.active = True
        user.superuser = True
        user.save(using=self._db)
        return user


class MyUser(AbstractBaseUser):
    """ user model """
    active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    first_name  =   models.CharField(verbose_name='First Name',max_length=254,blank=True, null=True)
    phone  =   models.CharField(verbose_name='Phone',max_length=254,blank=True, null=True)
    last_name  =   models.CharField(verbose_name='Last Name',max_length=254,blank=True, null=True)
    username  =   models.CharField(verbose_name='Username',max_length=254, blank=True, null=True)
    email = models.EmailField(verbose_name='Email',max_length=255,unique=True,blank=True, null=True)
    timestamp = models.DateTimeField(auto_now=True)
    objects = UserManager()
 
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True
    def tokens():
        return ''
    @property
    def is_staff(self):
        return self.staff

    def is_admin(self):
        return self.admin

    @property
    def is_active(self):
        return self.active