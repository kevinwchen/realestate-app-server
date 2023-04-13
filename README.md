# Real Estate API Server

This repository consists of a Node.js and Express REST API connected to a MongoDB Atlas database.

The database consists of property listing information following the schema in the /models directory. These can be called and used on a real estate company website or portfolio.

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
