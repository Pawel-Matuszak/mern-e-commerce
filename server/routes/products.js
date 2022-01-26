import express from "express";
const router = express.Router()

import Item from "../models/Item.js";

//GET /products
//get all items
router.get("/", async (req, res)=>{
  const result = await Item.find();
  await res.json(result); 
})

//POST /products
//add new item
router.post("/", async (req,res)=>{
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
    url: req.body.url,
  })

  res.json(await newItem.save())
})

//DELETE /products/:id
//remove one item
router.delete("/:id", (req,res)=>{
  Item.deleteOne({_id: req.params.id}, (err)=>{
    if(err) return res.status(404).json({success: false})
  })
  res.json({success: true})
})

export default router