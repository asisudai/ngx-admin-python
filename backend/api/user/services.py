import flask_bcrypt

from .models import User
from ..db import db


def get_user_by_email(email):
    if not email:
        raise Exception('No email provided.')

    return User.query.filter_by(email=email).first()


def get_user_by_id(id):
    if not id:
        raise Exception('No email provided.')
    return User.query.filter_by(id=id).first()


def check_user_exists(email):
    return True if get_user_by_email(email) else False


def generate_password_hash(password):
    return flask_bcrypt.generate_password_hash(password, 10)


def check_user_password_by_email_and_password(email, password):
    user = get_user_by_email(email)
    return check_password(user, password)


def check_password(user, password):
    return flask_bcrypt.check_password_hash(user.password, password) if user else False


def create_user(email, password, fullname):
    u = User(email, generate_password_hash(password), fullname)
    db.session.add(u)
    db.session.commit()


def update_user_password(user, new_password):
    user.password = generate_password_hash(new_password)
    update_user(user)


def update_user(user):
    db.session.merge(user)
    db.session.commit()
