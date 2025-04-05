from flask import Flask, jsonify
from flask_cors import CORS
from werkzeug.exceptions import HTTPException
from .extensions import db, migrate, jwt, bcrypt

def create_app(config_class='config.Config'):
    app = Flask(__name__)
    app.config.from_object(config_class)
    CORS(app)
    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)

    # Register blueprints
    register_blueprints(app)

    # Create tables
    with app.app_context():
        try:
            from app.models.vendor import Vendor
            db.create_all()  # For primary database
            db.create_all(bind_key='vendors')  # For vendors database
            
            # Debug: Print all registered routes
            print("\n=== REGISTERED ROUTES ===")
            for rule in app.url_map.iter_rules():
                print(f"{', '.join(rule.methods)} {rule.rule}")
            print("=======================\n")
            
        except Exception as e:
            app.logger.error(f"Database initialization error: {e}")

    # Error handling
    @app.errorhandler(HTTPException)
    def handle_exception(e):
        return jsonify({
            "error": e.name,
            "message": e.description
        }), e.code

    return app

def register_blueprints(app):
    """Register all application blueprints"""
    from app.routes.vendor_auth import auth_bp
    
    # Register vendor auth blueprint with proper URL prefix
    app.register_blueprint(auth_bp, url_prefix='/api/vendor/auth')  # Changed to match your desired URL
    
    # Debug print to confirm registration
    print(f"Registered vendor auth blueprint at: /api/vendor/auth")