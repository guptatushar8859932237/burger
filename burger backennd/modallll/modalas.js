const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    address:{
        type:String,
        required:true

    },
    contact:{
        type:String,
        required:true

    }
})

const getdata = mongoose.model('burgerOrder',userSchema)
module.exports=getdata;