import dotenv from "dotenv"
import DataBaseConnection from "./config/DataBase.js"
import User from "./models/UserModel.js"
import Product from "./models/ProductModel.js"
import Order from "./models/OrderModel.js"
import users from "./data/users.js"
import colors from 'colors'
import products from "./data/products.js"
dotenv.config();
DataBaseConnection();



const importDataSeeder = async ()=>{
   try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createUser =await User.insertMany(users);

    const adminUser = createUser[0]._id;

    const sampleProduct = await products.map((product)=>({...product,user:adminUser}));
    await Product.insertMany(sampleProduct);
    console.log(`Data seeder inserted ✔`.bgGreen);
    process.exit();
   } catch (error) {
    console.log(`Error ${error.message}`.bgRed);
    process.exit(1);   
   }
}
const DeleteDataSeeder = async ()=>{
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        console.log(`Data seeder deleted ✔`.bgGreen);

        process.exit();
       } catch (error) {
        console.log(`Error ${error.message}`.bgRed);

        process.exit(1);   
       }
}

if(process.argv[2]==='-insert')
{
    importDataSeeder();
}


if(process.argv[2]==='-delete')
{
    DeleteDataSeeder();
}





