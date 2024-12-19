from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField, TextAreaField,DecimalField
from flask_wtf.file import FileField,FileAllowed
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError

class Calculator(FlaskForm):
    floorarea= DecimalField('floorarea',validators=[DataRequired()])
    submit=SubmitField('Calculate')