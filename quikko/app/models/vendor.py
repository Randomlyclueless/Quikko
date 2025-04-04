from ..extensions import db

class Vendor(db.Model):
    __tablename__ = "vendors_data"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)  # Hashed password
    contact = db.Column(db.String(15), nullable=False)
    address = db.Column(db.String(255), nullable=False)
