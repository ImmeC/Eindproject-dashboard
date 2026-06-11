docker compose up -d

docker compose up --build -d

docker compose down

docker ps

docker restart backend

docker restart mongo

Database naam:

dbImme

Collecties:

users

remedierings

Voorbeeld user:

{
"username": "imme",
"password": "1234",
"role": "student",
"email": "imme@test.be"
}

Voorbeeld remediering:

{
"titel": "MongoDB Oefening",
"vak": "Databeheer",
"beschrijving": "Maak oefeningen 1 t.e.m. 5",
"datum": "2025-06-30"
}
