import express from "express"
import { GetAllProduct, GetProductById } from "../controllers/Product/ProductController.js";

const ProductRoutes = express.Router();

ProductRoutes.get('/',GetAllProduct)
ProductRoutes.get('/:id',GetProductById)



export default ProductRoutes