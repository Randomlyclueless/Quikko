from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    create_access_token,
    jwt_required,  # Make sure this is imported
    get_jwt_identity,
    get_jwt
)
from datetime import timedelta
from ..models.user import User
from .. import db, jwt  # Ensure jwt is imported from your package

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    """Register a new user (customer or vendor)"""
    try:
        data = request.get_json()
        if not data:
            return jsonify({
                'status': 'error',
                'message': 'No input data provided'
            }), 400

        required_fields = ['username', 'email', 'password', 'role']
        if not all(field in data for field in required_fields):
            return jsonify({
                'status': 'error',
                'message': f'Missing required fields: {", ".join(required_fields)}'
            }), 400

        if User.query.filter_by(email=data['email']).first():
            return jsonify({
                'status': 'error',
                'message': 'Email already registered'
            }), 409

        if data['role'] not in ['customer', 'vendor']:
            return jsonify({
                'status': 'error',
                'message': 'Invalid role specified'
            }), 400

        new_user = User(
            username=data['username'],
            email=data['email'],
            password=generate_password_hash(data['password']),
            role=data['role']
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            'status': 'success',
            'message': 'Registration successful',
            'user_id': new_user.id,
            'role': new_user.role
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@auth_bp.route('/login', methods=['POST'])
def login():
    """Authenticate user and return JWT token"""
    try:
        data = request.get_json()
        if not data:
            return jsonify({
                'status': 'error',
                'message': 'No input data provided'
            }), 400

        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({
                'status': 'error',
                'message': 'Missing email or password'
            }), 400

        user = User.query.filter_by(email=email).first()

        if not user or not check_password_hash(user.password, password):
            return jsonify({
                'status': 'error',
                'message': 'Invalid credentials'
            }), 401

        additional_claims = {
            'user_id': user.id,
            'role': user.role
        }
        
        access_token = create_access_token(
            identity=user.email,
            additional_claims=additional_claims,
            expires_delta=timedelta(hours=1)
        )

        return jsonify({
            'status': 'success',
            'access_token': access_token,
            'user_id': user.id,
            'role': user.role
        }), 200

    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@auth_bp.route('/validate', methods=['GET'])
@jwt_required()
def validate_token():
    """Validate JWT token and return user info"""
    try:
        current_user_email = get_jwt_identity()
        claims = get_jwt()
        
        user = User.query.filter_by(email=current_user_email).first()
        if not user:
            return jsonify({
                'status': 'error',
                'message': 'User not found'
            }), 404

        return jsonify({
            'status': 'success',
            'user': {
                'email': user.email,
                'role': user.role,
                'user_id': user.id
            },
            'token_claims': claims
        }), 200

    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500