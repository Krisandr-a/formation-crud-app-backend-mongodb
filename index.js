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

// // get all products
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// });

// // get product by id
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     // destructure the http request (req.params) to get the value of id
//     const { id } = req.params;
//     // use id to find the product in the MongoDB database
//     const product = await Product.findById(id);
//     // display the product in json
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// });


// // add product to DB
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     // 200 for success + request body
//     res.status(200).json(product);
//   } catch (error) {
//     // 500 for server status
//     res.status(500).json({message: error.message});
//   }
// });

// //update product by id
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     // destructure 
//     const { id } = req.params;

//     // use id to update and upadte with req.body
//     const product = await Product.findByIdAndUpdate(id, req.body)

//     // if no product has this id
//     if (!product) {
//       return res.status(404).json("Product not found.");
//     }

//     // product successfully updated, check for product again
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);

//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// });

// // delete product by id
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedProduct = await Product.findByIdAndDelete(id);
    
//     if (!deletedProduct) {
//       return res.status(404).json("Product not found.");
//     }

//     res.status(200).json("Product successfully deleted!");

//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// });

// connection string found in DB
mongoose.connect("mongodb+srv://krisandraadams:lCf1LbieyDJ205VG@simplecrudbackenddb.rhs0ey4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=simpleCRUDBackendDB")
  .then(() => {
    console.log("Connected!");
    app.listen(8080, () => {
    console.log("Server is listening on port 8080.");
    });
  })
  .catch(() => console.log("Connection failed."));