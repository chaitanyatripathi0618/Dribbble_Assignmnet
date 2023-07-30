const mongoose = require("mongoose")

const User = new mongoose.Schema(
    {
        name:{
            type:String , 
            required:true
        },
        
        password:{
            type:String , 
            required:true
        }
        

    },
    {collection:'userLogin'}
)
const model= mongoose.model('userLogin',User)
module.exports=model