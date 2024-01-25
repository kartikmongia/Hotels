const express=require('express')
const app=express();

const db=require('./db');
require('dotenv').config();

const PORT=process.env.PORT || 3000;

//const Person=require('./models/Person');
const Menuitem=require('./models/Menuitem');




const bodyParser=require('body-parser');
app.use(bodyParser.json());



app.get('/',function(req,res){
    res.send("hello world");
})

    


  



app.post('/Menuitem',async(req,res)=>{
    try{
    const data=req.body;
    const newMenu=new Menuitem(data);
    const response =await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
    }

    
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }})
    
    app.get('/Menuitem',async(req,res)=>{
        try{
            const data =await Menuitem.find();
            console.log('data fetched');
            res.status(200).json(data);
            

        }
        catch(err){
            console.log(err);
        res.status(500).json({error:'internal server error'});

        }
    })








const PersonRoutes=require('./Routes/PersonRoutes');
app.use('/Person',PersonRoutes);




app.post('/items',(req,res)=>{
    res.send("data is saved");
})



app.listen(3000);