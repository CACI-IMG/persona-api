import os

from app import create_app, db, models
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

app = create_app(config_name=os.getenv('APP_SETTINGS'))
migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()
