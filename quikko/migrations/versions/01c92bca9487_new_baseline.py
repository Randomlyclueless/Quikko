"""New baseline

Revision ID: 01c92bca9487
Revises: 
Create Date: 2025-04-01 22:53:58.913767

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '01c92bca9487'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vendors', schema=None) as batch_op:
        batch_op.drop_index('email')

    op.drop_table('vendors')
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('created_at', sa.DateTime(), nullable=True))
        batch_op.create_unique_constraint(None, ['username'])
        batch_op.drop_column('updated_at')

    with op.batch_alter_table('vendors_data', schema=None) as batch_op:
        batch_op.add_column(sa.Column('tax_id', sa.String(length=30), nullable=True))
        batch_op.drop_index('tax_id_number')
        batch_op.drop_column('city')
        batch_op.drop_column('tax_country')
        batch_op.drop_column('address_line2')
        batch_op.drop_column('postal_code')
        batch_op.drop_column('country')
        batch_op.drop_column('state')
        batch_op.drop_column('address_line1')
        batch_op.drop_column('tax_id_type')
        batch_op.drop_column('updated_at')
        batch_op.drop_column('tax_id_number')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('vendors_data', schema=None) as batch_op:
        batch_op.add_column(sa.Column('tax_id_number', mysql.VARCHAR(length=20), nullable=False))
        batch_op.add_column(sa.Column('updated_at', mysql.DATETIME(), nullable=True))
        batch_op.add_column(sa.Column('tax_id_type', mysql.ENUM('EIN', 'GSTIN', 'VAT', 'OTHER'), nullable=False))
        batch_op.add_column(sa.Column('address_line1', mysql.VARCHAR(length=100), nullable=False))
        batch_op.add_column(sa.Column('state', mysql.VARCHAR(length=50), nullable=False))
        batch_op.add_column(sa.Column('country', mysql.VARCHAR(length=2), server_default=sa.text("'US'"), nullable=False))
        batch_op.add_column(sa.Column('postal_code', mysql.VARCHAR(length=20), nullable=False))
        batch_op.add_column(sa.Column('address_line2', mysql.VARCHAR(length=100), nullable=True))
        batch_op.add_column(sa.Column('tax_country', mysql.VARCHAR(length=2), server_default=sa.text("'US'"), nullable=False))
        batch_op.add_column(sa.Column('city', mysql.VARCHAR(length=50), nullable=False))
        batch_op.create_index('tax_id_number', ['tax_id_number', 'tax_country'], unique=True)
        batch_op.drop_column('tax_id')

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('updated_at', mysql.TIMESTAMP(), server_default=sa.text("'0000-00-00 00:00:00'"), nullable=False))
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('created_at')

    op.create_table('vendors',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('shop_name', mysql.VARCHAR(length=100), nullable=False),
    sa.Column('owner_name', mysql.VARCHAR(length=100), nullable=False),
    sa.Column('email', mysql.VARCHAR(length=120), nullable=False),
    sa.Column('phone', mysql.VARCHAR(length=15), nullable=False),
    sa.Column('business_category', mysql.VARCHAR(length=100), nullable=False),
    sa.Column('address', mysql.TEXT(), nullable=False),
    sa.Column('password_hash', mysql.VARCHAR(length=255), nullable=False),
    sa.Column('shop_logo', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('business_license', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('created_at', mysql.DATETIME(), nullable=True),
    sa.Column('updated_at', mysql.DATETIME(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='latin1',
    mysql_engine='InnoDB'
    )
    with op.batch_alter_table('vendors', schema=None) as batch_op:
        batch_op.create_index('email', ['email'], unique=True)

    # ### end Alembic commands ###
