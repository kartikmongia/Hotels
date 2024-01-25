const mongoose=require('mongoose');


const menuitemschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true

    }
   
})



// creaqte person model
const Menuitem=mongoose.model('Menuitem',menuitemschema);
module.exports=Menuitem;