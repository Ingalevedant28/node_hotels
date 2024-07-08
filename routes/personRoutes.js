const express = require('express');

const rout = express.Router();
const Person = require('./../models/Person');

rout.post('/', async (req,res) => {

    try{
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
});

rout.get('/', async (req,res) => {

    try{
    const data = await Person.findOne();
    console.log('data fetched');
    res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal error"})
    }
});

rout.get('/:worktype', (req,res)=>{
    try{
        const workType = req.params.worktype;
        if(workType== 'chef' || workType== 'manager' || workType== 'waiter'){
            const response = Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response)
        }
    }
    catch(err){
       
    }
});

rout.put('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;
        const updatedPersondata = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersondata, {
            new: true,
            runValidators: true
        })

        if (!response){
            return res.status(404).json({error: 'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
});

rout.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;
        

        const response = await Person.findByIdAndDelete(personId);
       

        if (!response){
            return res.status(404).json({error: 'person Deleted'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'person deleted successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }

});

module.exports = rout;