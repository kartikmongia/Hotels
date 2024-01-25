const mongoose=require('mongoose');

const mongoURL='mongodb://localhost:27017/hotellls'

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