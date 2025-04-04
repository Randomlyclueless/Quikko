from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from werkzeug.exceptions import HTTPException

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()
bcrypt = Bcrypt()

def create_app(config_class='config.Config'):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)  # Handles migrations
    jwt.init_app(app)
    bcrypt.init_app(app)

    # Register blueprints
    from .routes import auth, vendor as vendor_routes
    app.register_blueprint(auth.auth_bp, url_prefix='/auth')
    app.register_blueprint(vendor_routes.vendor_bp, url_prefix='/vendor')

    # Error handling
    @app.errorhandler(HTTPException)
    def handle_exception(e):
        return jsonify({
            "error": e.name,
            "message": e.description
        }), e.code

    return app  
