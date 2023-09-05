import express from "express"
import DataBaseConnection from "./config/DataBase.js"
import products from "./data/products.js"
import dotenv from "dotenv"
dotenv.config()
DataBaseConnection()
const app = express()
const port = process.env.PORT

app.get("/",(req,res)=>{
    res.send("Hi pooria")
});

app.get('/api/product/:id',(req,res)=>{
    const ProductById = products.find((product)=>product._id===parseInt(req.params.id));
    res.send(ProductById)
    // res.json(ProductById)
})



app.listen(port,()=>console.log(`Server is running on port :${port}`))

