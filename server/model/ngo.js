const mongoose=require('mongoose');
var schema2=new mongoose.Schema({
    Username:{
        type:String,
        unique:true,
       
    },
    Password:{
        type:String,
        unique:true,
       
    }
   
})
const NGOdb=mongoose.model('ngodb',schema2);
module.exports=NGOdb;
