import os
from flask import Flask, make_response, request, jsonify
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
app = Flask(__name__, static_folder="static")

# Enable CORS for frontend communication
CORS(app, supports_credentials=True)

# Initialize bcrypt for password hashing
bcrypt = Bcrypt(app)

# ✅ Database Configuration
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql+mysqlconnector://quikko_user:Password%40123@localhost/quikko_db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# ✅ User Model
class User(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    contact = db.Column(db.String(15), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)  # Store hashed password

# ✅ Handle OPTIONS Preflight Requests (For CORS)
@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        response = make_response()
        response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
        response.headers["Access-Control-Allow-Credentials"] = "true"
        return response, 200

# ✅ Test Route for Fetching Users
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = [{"id": u.id, "name": u.name, "email": u.email} for u in users]
    return jsonify(users_list)


if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # optional: ensures tables exist
    app.run(debug=True)
