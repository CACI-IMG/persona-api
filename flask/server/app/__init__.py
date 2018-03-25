
from flask import abort, jsonify, redirect, request
from flask_api import FlaskAPI
from flask_sqlalchemy import SQLAlchemy
from instance.config import app_config

db = SQLAlchemy()


def create_app(config_name):
    from app.models import Persona
    app = FlaskAPI(__name__, instance_relative_config=True)
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('config.py')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    @app.route('/people/', defaults={'page': 1}, methods=['GET'])
    @app.route("/people/<int:page>/", methods=["GET"])
    def people(page):
        people = Persona.query.paginate(page, 10).items
        results = []
        for person in people:
            obj = {
                'id': person.id,
                'job': person.job,
                'company': person.company,
                'ssn': person.ssn,
                'residence': person.residence,
                'current_location': person.current_location,
                'blood_group': person.blood_group,
                'website': person.website,
                'username': person.username,
                'name': person.name,
                'sex': person.sex,
                'address': person.address,
                'mail': person.mail,
                'birthdate': person.birthdate,
                'date_created': person.date_created,
                'date_modified': person.date_modified
            }
            results.append(obj)

        response = jsonify(results)
        response.status_code = 200
        return response

    return app
