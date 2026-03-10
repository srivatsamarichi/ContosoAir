# ContosoAir ✈️

Contoso Air is a sample airline booking application with a Node.js based frontend with a CosmosDB database. Runs a nodejs server (Express v4.16) that stores customer booked flights in a CosmosDb database.

![contoso](Contosoair.png)

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

## ContosoAir Local Setup (Docker + MongoDB)

This guide explains how to run the **ContosoAir Node.js application** locally using **Docker** and **MongoDB**.

## Prerequisites

Install the following tools:

* Docker
* Docker Compose

Verify installation:

```bash
docker --version
docker compose version
```

## Project Architecture

The application runs with two containers:

```
ContosoAir
│
├── contoso-air-app (Node.js application)
└── contoso-mongo   (MongoDB database)
```

The application connects to the database using:

```
mongodb://mongodb:27017/contosoair
```

(`mongodb` is the Docker service name)

## Setup Steps

1. Clone the Repository

    ```bash
    git clone <repo-url>
    cd ContosoAir
    ```

2. Fix Package Version. Update `package.json` if it contains a placeholder:

    ```json
    "version": "#{VERSION_NUMBER}#"
    ```

    Change it to:

    ```json
    "version": "1.0.0"
    ```

3. Configure MongoDB Connection. Update the database connection code to use an environment variable.

    Example:

    ```javascript
    const connectionString =
    process.env.MONGO_URL || "mongodb://localhost:27017/contosoair";

    mongoose.connect(connectionString);
    ```

4. Build and Start Containers. Run the following command from the project root:

    ```bash
    docker compose up --build
    ```

    This will start:

    * Node.js application container
    * MongoDB container

5. Access the Application. Open your browser and access the below url.

    ```
    http://localhost:8081
    ```


## Useful Docker Commands

- View running containers

    ```bash
    docker ps
    ```

- View application logs

    ```bash
    docker compose logs -f
    ```

- Stop containers

    ```bash
    docker compose down
    ```

- Rebuild containers

    ```bash
    docker compose up --build
    ```

## MongoDB Access (Optional)

1. Connect to the MongoDB container:

    ```bash
    docker exec -it contoso-mongo mongosh
    ```

2. Useful commands:

    ```
    show dbs
    use contosoair
    show collections
    ```

## Stopping the Environment

To stop and remove containers. Database data will persist using Docker volumes.

```bash
docker compose down
```

## Summary

Run the entire stack with a single command.

```bash
docker compose up --build
```

Then access:

```
http://localhost:8081
```

The ContosoAir application will run locally with MongoDB using Docker.
