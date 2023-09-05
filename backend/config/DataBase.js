import mongoose from "mongoose";


const DataBaseConnection =async ()=>{
    try {
        const connection =await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDb connected ✔ host :${connection.connection.host}`);
    } catch (error) {
        console.log(`Error :${error.message}`);
        process.exit(1);
    }
}


export default DataBaseConnection;