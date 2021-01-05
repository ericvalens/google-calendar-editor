# Google Calendar Editor

Run `docker-compose -f docker-compose.yaml up` to build and run the application

This project will create three containers:
- (1) angular app , port `4200`
- (2) nestjs , port `3333`
- (3) mongodb , ports `27017-27019`

navigate to http://localhost:4200/login , you will be prompted to enter google credentials 

navigate to http://localhost:3333/api/ to view all available api methods 

to-do:
- (1) add java app to docker container 
- (2) pass google credentials to java app 
- (3) clean-up ui 
- (4) ensure users can save their calendar configurations 
- (5) create middleware to protect certain api routes 
