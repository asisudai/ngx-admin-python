from api.core import Mixin
from ..db import db


class User(Mixin, db.Model):
    """User Table."""

    __tablename__ = "user"

    id = db.Column(db.Integer, unique=True, primary_key=True)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)

    first_name = db.Column(db.String, nullable=False, default='')
    last_name = db.Column(db.String, nullable=False, default='')
    login = db.Column(db.String, nullable=True)
    age = db.Column(db.Integer, nullable=True)
    street = db.Column(db.String, nullable=True)
    city = db.Column(db.String, nullable=True)
    zip = db.Column(db.String, nullable=True)

    def __init__(self, email, password, name):
        if name:
            res = name.split(' ')
            self.first_name = '' if len(res) == 1 else res[0]
            self.last_name = res[0] if len(res) == 1 else ' '.join(res[1:])
        self.last_name = None
        self.email = email
        self.password = password

    def __repr__(self):
        return f"<User {self.first_name} {self.last_name}>"
