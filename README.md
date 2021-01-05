# Google Calendar Editor

create `.env` file in the following directory: `google-calendar-editor/apps/api/` and add the following content: 

`GOOGLE_CLIENT_ID='...'`

`GOOGLE_SECRET='...'`

Run `docker-compose -f docker-compose.yaml up` to build and run the application

This project will create three containers:
- (1) angular app , port `4200`
- (2) nestjs , port `3333`
- (3) mongodb , ports `27017-27019`

navigate to http://localhost:4200/login , you will be prompted to enter google credentials 

navigate to http://localhost:3333/api/ to view all available api methods 

to interact with mongodb run `docker exec -it google-calendar-editor_db_1 mongo` (mongodb docker container might be different, please confirm)

by default, mongo will create three databases: (1) `admin`, (2) `config` and (3) `local` - we will be storing user information in the `gce` database

within `gce` we will have a mongodb `collection` titled: `users`

to view all databases, run: `show dbs;`

to interact with specific database, run ` use [collection-name]` such as: `use gce` in our example 

to view all collections within specific mongodb database, run `show collections` 

to view all entries within collection, run `db.[collection-name].find()` such as `db.users.find()` in our example 

to remove all entries from collection, run `db.[collection-name].remove({ })` such as `db.users.remove({ })` in our example 

to find search for an entry within a collection, run `db.[collection-name].findOne({ id: "data" });` such as `db.users.findOne({ id: "1234" });` in our example 

to-do:
- (1) add java app to docker container 
- (2) pass google credentials to java app 
- (3) clean-up ui 
- (4) ensure users can save their calendar configurations 
- (5) create middleware to protect certain api routes 
