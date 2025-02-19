const express = require('express');

const router = express.Router();

const menu = require('./../models/menu')

router.post("/", async (req,res)=>{
    try{
        const data = req.body;
        const newMenu = new menu(data);

        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal error"})
    }
});

router.get('/', async (req,res)=>{

    try{
    const data = await menu.findOne();
    console.log('data fetched');
    res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal error"})
    }
});

router.get('/:tasteType', async (req,res)=>{

    try{
        const tasteType = req.params.tasteType;
        if(tasteType== 'Spicy' || tasteType== 'sour' || tasteType== 'sweet'){
    const tastetype = await menu.findOne({tasteType: taste});
    console.log('data fetched');
    res.status(200).json(data);
    }
}
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal error"})
    }
});

router.put('/:id',async (req, res)=>{
    try{
    const menuId = req.params.id;
    const updatedMenu = req.body;

    const response = await menu.findByIdAndUpdate(menuId, updatedMenu,{
        new: true,
        runValidators: true
    });
     if(!response){
        res.status(404).json({error: "Internal error"})
     }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }

});

router.delete("/:id", async (req,res)=>{
    try{
        const menuId = req.params.id;

        const response = await menu.findOneAndDelete(menuId);

        if(!response){
            res.status(404).json({error: "internal error"})
        }
        console.log('data deleted');
        res.status(200).json({message: 'person deleted successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal error"})
    }
})

module.exports = router;

// hi i am vedant