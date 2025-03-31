from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager  # Import JWTManager

db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()  # Initialize JWT

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://quikko_user:Password%40123@localhost/quikko_db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = 'supersecretkey'  # Secret key for encoding tokens

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)  # Initialize JWT with Flask app

    from app.routes.auth import auth
    app.register_blueprint(auth, url_prefix='/auth')

    return app
