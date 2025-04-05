from app.extensions import db, bcrypt, jwt
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required
from werkzeug.security import check_password_hash
from app.models.vendor import Vendor





auth_bp = Blueprint('vendor_auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    
    # Validation
    required_fields = ['email', 'password', 'business_name']
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400
        
    if Vendor.query.filter_by(email=data['email']).first():
        return jsonify({"error": "Email already registered"}), 409
        
    try:
        vendor = Vendor(
            email=data['email'],
            business_name=data['business_name']
        )
        vendor.set_password(data['password'])
        
        db.session.add(vendor)
        db.session.commit()
        
        return jsonify({
            "message": "Registration successful",
            "vendor_id": vendor.id
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"error": "Email and password required"}), 400
        
    vendor = Vendor.query.filter_by(email=data['email']).first()
    
    if not vendor or not vendor.check_password(data['password']):
        return jsonify({"error": "Invalid credentials"}), 401
        
    if not vendor.gov_id_verified:
        return jsonify({
            "error": "Account pending verification",
            "verified": False
        }), 403
        
    return jsonify({
        "access_token": vendor.generate_auth_token(),
        "vendor_id": vendor.id
    })

@auth_bp.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({"message": "Authenticated route works!"})

@auth_bp.route('/test', methods=['GET'])
def test_route():
    return jsonify({"message": "THIS ROUTE WORKS!"}), 200