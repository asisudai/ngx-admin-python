from flask import Blueprint, request, jsonify
from marshmallow import Schema, fields

from flask_jwt_extended import get_jwt_identity

from .services import get_user_by_id, update_user
from api.core import validate_json_body

bp = Blueprint('user', __name__, url_prefix='/users')


@bp.route('/current', methods=['GET'])
def get_current_user():
    user_id = get_jwt_identity()
    user = get_user_by_id(user_id)
    return jsonify(__serialize_user(user))


class AddressSchema(Schema):
    street = fields.String(required=True, allow_none=True)
    city = fields.String(required=True, allow_none=True)
    zipCode = fields.String(required=True, allow_none=True)


class UpdateUserSchema(Schema):
    email = fields.Email(required=True)
    firstName = fields.String(required=True, allow_none=True)
    lastName = fields.String(required=True, allow_none=True)
    userName = fields.String(required=True, allow_none=True)
    age = fields.Number(required=True, allow_none=True)
    address = fields.Nested(AddressSchema())


@bp.route('/current', methods=['PUT'])
@validate_json_body(UpdateUserSchema)
def update_current_user():
    user_id = get_jwt_identity()
    data = request.get_json()

    user = get_user_by_id(user_id)

    user.email = data['email']
    user.first_name = data['firstName']
    user.last_name = data['lastName']
    user.login = data['userName']
    user.age = data['age']
    user.street = data['address']['street']
    user.city = data['address']['city']
    user.zip = data['address']['zipCode']

    update_user(user)

    return jsonify(__serialize_user(user))


def __serialize_user(user):
    return {
        'id': user.id,
        'email': user.email,
        'firstName': user.first_name,
        'lastName': user.last_name,
        'userName': user.login,
        'age': user.age,
        'address': {
            'street': user.street,
            'city': user.city,
            'zipCode': user.zip,
        }
    }
