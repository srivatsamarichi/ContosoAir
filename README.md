# ContosoAir ✈️ 

Contoso Air is a sample airline booking application with a Node.js based frontend with a CosmosDB database. Runs a nodejs server (Express v4.16) that stores customer booked flights in a CosmosDb database.

![contoso](ContosAir.png)

## Requirements

- Node v8.9.4 or later
- Azure CosmosDb

### Local Environment Setup

This project uses ES6, and has been tested with nodejs v8.9.4.
There is almost no front-end logic. Still, the application uses webpack to compile sass styles and bundle third parties js files. If you want to modify any front logic or style run `npm run local:build`.

In order to launch a local server on port 3000 (can be modified with environment variable PORT) run:

```bash
npm install
SET %COSMOS_DB_NAME%=<azure_web_site>
SET %COSMOS_DB_AUTH_KEY%=<cosmos_auth_key>
npm start
```

This will run locally the server and attach to the CosmosDb Endpoint using mongodb connection string.
