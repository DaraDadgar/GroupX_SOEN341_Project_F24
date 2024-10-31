"""Add assessments model

Revision ID: 56fc8e71206b
Revises: 58c618418bd7
Create Date: 2024-10-26 22:00:08.441980

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '56fc8e71206b'
down_revision = '58c618418bd7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('assessments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('receiver_id', sa.Integer(), nullable=False),
    sa.Column('sender_id', sa.Integer(), nullable=False),
    sa.Column('cooperation_score', sa.Float(), nullable=False),
    sa.Column('conceptual_contribution_score', sa.Float(), nullable=False),
    sa.Column('practical_contribution_score', sa.Float(), nullable=False),
    sa.Column('work_ethic_score', sa.Float(), nullable=False),
    sa.Column('comments', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['receiver_id'], ['students.id'], ),
    sa.ForeignKeyConstraint(['sender_id'], ['students.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('teams', schema=None) as batch_op:
        batch_op.create_unique_constraint(None, ['name'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('teams', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')

    op.drop_table('assessments')
    # ### end Alembic commands ###
