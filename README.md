docker compose up -d

docker compose up --build -d

docker compose down

docker ps

docker restart backend

docker restart mongo

docker exec -it mongo mongosh

use dbImme

show dbs

show collections

db.users.find()

db.remedierings.find()

db.users.find().pretty()

db.remedierings.find().pretty()

db.users.insertOne({
username: "imme",
password: "1234",
role: "student",
email: "imme@test.be"
})

db.remedierings.insertOne({
titel: "MongoDB Oefening",
vak: "Databeheer",
beschrijving: "Maak oefeningen 1 t.e.m. 5",
datum: "2025-06-30"
})

Database:

dbImme

Collecties:

users

remedierings

**Klasse diagram**

<img width="677" height="509" alt="image" src="https://github.com/user-attachments/assets/ebf5f01b-7c60-4c24-9cad-2df66b12da4b" />

(duidelijker gemaakt door AI) 
