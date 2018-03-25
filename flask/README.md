# Persona API

Requires Flask and Python 3  

Setup:

Load into a ```virtualenv``` environment  

```cd server```  
```pip install -r requirements.txt```  
```unzip fake_profiles.zip```  
```source .env```  
```createdb persona_database```  
```createdb persona_database_test```  
```python manage.py db upgrade```  
```flask run```  

Run:

Head to the following url in a browser/Postman/Insomnia

```GET    http://localhost:8081/people```  
```GET    http://localhost:8081/people/{page}```  

