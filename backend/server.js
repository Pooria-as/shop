import express from "express"
import products from "./data/products.js"

const app = express()
const PORT = 5000



app.get("/",(req,res)=>{
    res.send("Hi")
});

app.get('/api/product/:id',(req,res)=>{
    const ProductById = products.find((product)=>product._id===parseInt(req.params.id));
    res.send(ProductById)
    // res.json(ProductById)
})



app.listen(PORT,()=>console.log(`Server is running on port :${PORT}`))

