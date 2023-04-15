# Real Estate API Server

This repository consists of a Node.js and Express REST API connected to a MongoDB Atlas database.

The database consists of property listing information following the schema in the /models directory. These can be called and used on a real estate company website or portfolio.

## Running the API Locally

To run the API locally, clone the repository then install all packages using:

```
npm i
```

To connect to MongoDB, replace the CONNECTION_URL variable in the .env file with your credentials database URL. You can also change the port if desired:

```
CONNECTION_URL="mongodb+srv://<username>:<password>@cluster"
PORT=5000
```

To run the server, use:

```
npm start
```

which runs according to the "start" script in the package.json file.

## Running the API with Docker

Build the image using:

```
docker build -t realestate-api .
```

Run the docker container from the built image using:

```
docker run -d realestate-api -p HOST_PORT:CONTAINER_PORT
```

where HOST_PORT is the port on your local machine, and CONTAINER_PORT is the assigned listener port for the API in the container (in the .env file).

To stop the container, use:

```
docker stop realestate-api
```
