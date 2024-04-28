//nodemon used to monitor/update app
// mongoose for MongoDB
// If you get the error "[nodemon] app crashed - waiting for file changes before starting..."
// got to Task Manager and end all Node.js processes there
const mongoose = require("mongoose");
const express = require("express");
const productRoute = require("./routes/product.route.js");
const envVar = require('dotenv');
const app = express();

// get connection string from .env
envVar.config();
const connection = process.env.DATABASE_CONNECTION;

// middleware that allows for the use of JSON in http requests
app.use(express.json());

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("Hello from Node API (Updated)");
});

// connection string found in DB
mongoose.connect(connection)
  .then(() => {
    console.log("Connected!");
    app.listen(8080, () => {
    console.log("Server is listening on port 8080.");
    });
  })
  .catch(() => console.log("Connection failed."));