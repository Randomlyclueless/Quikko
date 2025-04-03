import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables

class Config:
    # Database
    SQLALCHEMY_DATABASE_URI = os.getenv('DB_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Authentication
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
    SECRET_KEY = os.getenv('FLASK_SECRET_KEY')