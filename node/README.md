# Persona API

Requires Postgres and Node.js  

Setup:

```cd server```  

```npm install -g sequelize-cli``` 

```npm install``` 

```npm run setup``` will create a db called ```persona_database``` and populate it    

```npm run setup_test``` will create a db called ```persona_database_test``` and populate it      

The databases can be accessed via the postgres user ```username``` with no password  

To change this user edit ```server/config/config.json```  

```npm run setup```

```npm start```


Run:

Head to the following urls in a browser/Postman/Insomnia

```GET    http://localhost:8081/search{username}```  
```GET    http://localhost:8081/people```  
```DELETE http://localhost:8081/people/{username}```  

Test:

```npm run setup_test```  
```npm test```  
