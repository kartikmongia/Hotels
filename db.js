const mongoose=require('mongoose');
require('dotenv').config();

//const mongoURL=process.env.MONGODB_URL_LOCAL

const mongoURL=process.env.MONGODB_URL;

//const mongoURL='mongodb+srv://RAM:qwertyuiop@cluster0.jweeh1s.mongodb.net/?retryWrites=true&w=majority'
const db=mongoose.connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

db.on('connected',() =>{
    console.log('connected to MongoDB server');

});
db.on('error',(err) =>{
    console.error(' MongoDB connection error',err);

});
db.on('disconnected',() =>{
    console.log('MongoDB disconnected');

});


module.exports=db;