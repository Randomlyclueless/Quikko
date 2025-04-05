from werkzeug.security import generate_password_hash, check_password_hash
from app.extensions import db

class Vendor(db.Model):
    __bind_key__ = 'vendors'
    __tablename__ = 'vendors'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    business_name = db.Column(db.String(100))
    gov_id_verified = db.Column(db.Boolean, default=False)
    
    # Authentication methods
    def set_password(self, password):
        self.password = generate_password_hash(password)
        
    def check_password(self, password):
        return check_password_hash(self.password, password)
    
    def generate_auth_token(self):
        from flask_jwt_extended import create_access_token
        return create_access_token(identity=self.id)