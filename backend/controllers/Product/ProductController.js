import Product from "../../models/ProductModel.js"

export const GetAllProduct = async(req,res) => {
    try {
        const products = await Product.find({})
        return res.json(products)
    } catch (error) {
        return res.send(`Error occured ${error.message}`);
    }
}



export const GetProductById = async(req,res) => {
    try {
        const {id} = req.params
        const product = await Product.find({ _id : id })
        return res.json(product)
    } catch (error) {
        return res.send(`Error occured ${ error.message } id not found `);
    }
}
