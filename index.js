//nodemon used to monitor/update app
// mongoose for MongoDB
// If you get the error "[nodemon] app crashed - waiting for file changes before starting..."
// got to Task Manager and end all Node.js processes there
const mongoose = require("mongoose");
const express = require("express");
const productRoute = require("./routes/product.route.js");
const Product = require("./models/product.model.js")
const app = express();

// middleware that allows for the use of JSON in http requests
app.use(express.json());

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("Hello from Node API (Updated)");
});

// connection string found in DB
mongoose.connect("mongodb+srv://krisandraadams:lCf1LbieyDJ205VG@simplecrudbackenddb.rhs0ey4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=simpleCRUDBackendDB")
  .then(() => {
    console.log("Connected!");
    app.listen(8080, () => {
    console.log("Server is listening on port 8080.");
    });
  })
  .catch(() => console.log("Connection failed."));