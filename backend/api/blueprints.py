from .auth.controllers import bp as auth_bp
from .user.controllers import bp as user_bp


def register_blueprints(app):
    for bp in [auth_bp, user_bp]:
        if app.config['API_ROOT']:
            bp.url_prefix = app.config['API_ROOT'] + bp.url_prefix
        app.register_blueprint(bp)
