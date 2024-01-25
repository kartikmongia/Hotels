const express=require('express');
const router=express.Router();
const Person=require('./../models/Person');

router.post('/',async(req,res)=>{
    try{
    const data=req.body;
    const newPerson=new Person(data);
    const response =await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }

    
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }})


    router.get('/',async(req,res)=>{
        try{
            const data =await Person.find();
            console.log('data fetched');
            res.status(200).json(data);
            

        }
        catch(err){
            console.log(err);
        res.status(500).json({error:'internal server error'});

        }
    })
    router.put('/:id',async(req,res)=>{
        try{
            const personId=req.params.id;//extract the id from URL parameter
            const updatedPersonData=req.body;//updated data for the person
            
            const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
                new:true,// return the updated document
                runValidators:true,//run mangoose validation
            })
            if(!response){
                return res.status(404).json({error:'person not found'});
            }
            console.log('data updated');
            res.status(200).json(response);
    
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal server errpr'});
    
        }
    })
    router.delete('/:id',async(req,res)=>{
        try{
            const personId=req.params.id;
    
            const response=await Person.findByIdAndDelete(personId);
            if(!response){
                return res.status(404).json({error:'person not found'});
            }
            console.log('data deleted');
            res.status(200).json({message:'person deleted success'});
    
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal server errpr'});
    
    
        }
    })
    











    module.exports=router;