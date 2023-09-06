import express from "express"
import DataBaseConnection from "./config/DataBase.js"
import dotenv from "dotenv"
import ProductRoutes from "./routes/ProductRoutes.js"
dotenv.config()
DataBaseConnection()
const app = express()
const port = process.env.PORT

// app.get("/",(req,res)=>{
//     res.send("Hi pooria")
// });


app.use('/api/products',ProductRoutes)




app.listen(port,()=>console.log(`Server is running on port :${port}`))

