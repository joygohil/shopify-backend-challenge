# Shopify Backend Developer Intern Challenge Fall 22
This is simple APIs for buidling an inventory tracking web application for a logistic company.
##
**Features**
- Create inventory items
- Edit Them
- Delete Them
- View a list of them

**Additional Feature**
- When deleting, allow deletion comments and undeletion

## Get started
In order to run the API locally, you will need the latest version Node.js and npm. Dependencies will be installed by running the below command in the project directory:
`npm i`
I have use Mongo Atlas Cluster for the database and have added the config in the config/local.js. 
- To check the API Docs simply run the project in the below mentioned replit link:
	https://replit.com/@JoyGohil/shopify-backend-challenge#.replit
- It will open the hosted Swagger UI where you can test the APIs

## API Format
This API accepts data in JSON only. When sending data, set the `Content-Type` header to `application/json` with JSON body. For example:
```
curl -X POST \
   -H "Content-Type: application/json" \
   -d '{"name": "Pen", "count": 20, "category": "stationary", "sizeInKg": "0.001"}'  \
   https://shopify-backend-challenge.joygohil.repl.co/item/