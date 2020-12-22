const express = require("express");
const products = require("./data/products");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Api is running...");
});


app.get("/apis/products", (req, res) => {
    res.json(products)
});

app.get("/apis/products/:id", (req, res) => {
    res.json(products.find(p => p._id === req.params.id));
});


const PORT = process.env.PORT || "5000";
const NODE_ENV = process.env.NODE_ENV;
console.log(PORT)
app.listen(PORT, () => {
    console.log(`listining to port ${PORT} on ${NODE_ENV} Enviromen`);
});
