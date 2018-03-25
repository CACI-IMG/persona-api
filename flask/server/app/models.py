from app import db


class Persona(db.Model):

    __tablename__ = 'personas'

    id = db.Column(db.Integer, primary_key=True)
    job = db.Column(db.String(100))
    company = db.Column(db.String(100))
    ssn = db.Column(db.String(15))
    residence = db.Column(db.String(100))
    current_location = db.Column(db.ARRAY(db.String))
    blood_group = db.Column(db.String(100))
    website = db.Column(db.ARRAY(db.String))
    username = db.Column(db.String(100))
    name = db.Column(db.String(100))
    sex = db.Column(db.String(1))
    address = db.Column(db.String(100))
    mail = db.Column(db.String(100))
    birthdate = db.Column(db.String(20))
    date_created = db.Column(db.DateTime, default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def __init__(self, name):
        self.name = name

    def save(self):
        db.session.add(self)
        db.session.commit()

    @staticmethod
    def get_all():
        return Persona.query.all()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def __repr__(self):
        return "<Persona: {}>".format(self.name)
