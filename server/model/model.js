const mongoose=require('mongoose');
var schema=new mongoose.Schema({
    Username:{
        type:String,
        unique:true,
        required:true
    },
    Password:{
        type:String,
        unique:true,
        required:true
    }
   
})
const Donordb=mongoose.model('donordb',schema);
module.exports=Donordb;
