import express from "express"
import DataBaseConnection from "./config/DataBase.js"
import dotenv from "dotenv"
import ProductRoutes from "./routes/ProductRoutes.js"
dotenv.config()
DataBaseConnection()
const app = express()
const port = process.env.PORT

//cors 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });



app.use('/api/products',ProductRoutes)




app.listen(port,()=>console.log(`Server is running on port :${port}`))

