import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
const app = express();

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

app.use(express.json());

import propertiesRouter from "./routes/properties.js";
app.use("/properties", propertiesRouter);
