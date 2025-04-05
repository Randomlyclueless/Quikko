import os
from pathlib import Path
from dotenv import load_dotenv
from urllib.parse import quote_plus

# Load environment variables
load_dotenv()

class Config:
    # ===== Flask Core Config =====
    SECRET_KEY = os.getenv('FLASK_SECRET_KEY')
    
    # ===== Database Config =====
    # Main Database (MySQL)
    SQLALCHEMY_DATABASE_URI = os.getenv('DB_URI')
    
    # Vendor Database (SQLite) - Consolidated configuration
    SQLALCHEMY_BINDS = {
        'vendors': os.getenv('VENDOR_DB_URI', f"sqlite:///{Path(__file__).parent.parent}/vendors.db")
    }
    
    # Database Engine Settings
    SQLALCHEMY_ENGINE_OPTIONS = {
        'pool_pre_ping': True,
        'pool_recycle': 3600,
        'connect_args': {
            'check_same_thread': False  # For SQLite only
        }
    }
    
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # ===== JWT Config =====
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
    JWT_ACCESS_TOKEN_EXPIRES = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES', 86400))  # 24 hours
    
    # ===== Security =====
    PASSWORD_SALT = os.getenv('PASSWORD_SALT') or os.getenv('FLASK_SECRET_KEY')
    
    # ===== Environment =====
    DEBUG = os.getenv('FLASK_DEBUG', 'false').lower() == 'true'