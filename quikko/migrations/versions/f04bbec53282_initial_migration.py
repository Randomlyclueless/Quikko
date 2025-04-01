"""Initial migration

Revision ID: f04bbec53282
Revises: 25acf793d54a
Create Date: 2025-04-01 11:02:10.351258

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'f04bbec53282'
down_revision = '25acf793d54a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vendors', schema=None) as batch_op:
        batch_op.drop_index('email')

    op.drop_table('vendors')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('vendors',
    sa.Column('vendor_id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('shop_name', mysql.VARCHAR(length=255), nullable=False),
    sa.Column('owner_name', mysql.VARCHAR(length=255), nullable=False),
    sa.Column('email', mysql.VARCHAR(length=255), nullable=False),
    sa.Column('phone', mysql.VARCHAR(length=15), nullable=False),
    sa.Column('business_category', mysql.VARCHAR(length=255), nullable=False),
    sa.Column('address', mysql.TEXT(), nullable=False),
    sa.Column('password_hash', mysql.VARCHAR(length=255), nullable=False),
    sa.Column('shop_logo', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('business_license', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('created_at', mysql.DATETIME(), nullable=True),
    sa.Column('updated_at', mysql.DATETIME(), nullable=True),
    sa.PrimaryKeyConstraint('vendor_id'),
    mysql_default_charset='latin1',
    mysql_engine='InnoDB'
    )
    with op.batch_alter_table('vendors', schema=None) as batch_op:
        batch_op.create_index('email', ['email'], unique=True)

    # ### end Alembic commands ###
