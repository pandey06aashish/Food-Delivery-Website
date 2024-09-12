import fs from 'fs';
import foodModels from '../models/foodModels.js';
import { constants } from 'buffer';

const addFood=async(req,res)=>{
      
    let image_filename=`${req.file.filename}`;

    const food =new foodModels({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

 const listfood=async(req,res)=>{
    try{
        const foods=await foodModels.find({});
        res.json({success:true,data:foods})
    }
    catch(error){
         console.log(error);
         res.json({success:false,message:"Error"})
    }
 }


 const removefood=async(req,res)=>{
       try{
         const food=await foodModels.findById(req.body.id);
         fs.unlink(`uploads/${food.image}`,()=>{})
         await foodModels.findByIdAndDelete(req.body.id);
         res.json({success:true,message:"Food Removed"})
       }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
       }
 }

export {addFood,listfood,removefood} ;