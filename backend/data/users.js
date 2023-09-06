import bcrypt from "bcrypt"


const users = [
    {
        name:"Admin",
        email:"admin@gmail.com",
        password:bcrypt.hashSync('123456789',10),
        isAdmin:true
    },
    {
        name:"ali",
        email:"ali@gmail.com",
        password:bcrypt.hashSync('123456789',10),
        isAdmin:false
    },
    {
        name:"Ehtan",
        email:"Ehtan@gmail.com",
        password:bcrypt.hashSync('123456789',10),
        isAdmin:false
    }
];


export default users