const mongoose=require('mongoose');
var schema=new mongoose.Schema({
    Username:{
        type:String,
        unique:true,
       
    },
    Password:{
        type:String,
        unique:true,
       
    }
   
})
const Donordb=mongoose.model('donordb',schema);
module.exports=Donordb;
