const express = require('express')
const router = express.Router()
const User = require ('../models/User')
const isAuth = require('../middelwares/isAuth')
const Product = require('../models/Product')
const upload = require("../middelwares/upload")
const Send = require('../models/Send')

router.get('/getusers' ,isAuth, async(req , res)=>{
    try {
       const user = await User.find()
       res.status(200).send({ "users" : user   })
    } catch (error) {
     console.log(error)
    }
})

router.get('/getAllSend' ,isAuth, async(req , res)=>{
    try {
       const send = await Send.find()
       res.status(200).send({ "messages" :send  })
    } catch (error) {
     console.log(error)
    }
})

router.put('/update/product/:id',isAuth,upload.single('myImage'),async (req, res) => {
    const file=req.file
    console.log(file)
    try {
     let product = await Product.findById(req.params.id);
     if (!product) {
         return res.status(500).send("product not found")
 }
     await Product.findByIdAndUpdate(req.params.id, {$set:{ imagesUrl:req.file.filename,...req.body}}, {
         new: true,
         runValidators: true,
         useUnified: false
     });
     res.status(200).send("product update")
    } catch (error) {
     res.status(500).send('server error')
     console.log(error)
    }
 }
)
router.post('/addProduct',isAuth,upload.single("myImage"),async (req, res) => {
     console.log(req.file)
     try {
         const product = await Product.create({...req.body,imagesUrl:req.file.filename});
         res.status(200).send({
             success: true,
             product
            
         })
         console.log(product)
     } catch (error) {
         console.log(error)
         res.status(500).send('server error')
     }
    
 })
 
 router.get('/getAllProducts', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products
        })
    
    } catch (error) {
        res.status(500).send('server error')
    }
  
})
router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params._id);
        res.status(200).json({
            success: true,
            product
        })
    
    } catch (error) {
        res.status(500).send('server error')
        console.log(error)
    }
  
})
router.get('/getAllOrders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({
            success: true,
            orders
        })
    
    } catch (error) {
        res.status(500).send('server error')
    }
  
})
 
 
 router.delete('/delete/product/:id',isAuth,async (req, res) => {
     try {
          await Product.findByIdAndDelete(req.params.id);
         res.status(200).json({
             success: true,
             msg:"product deleted"
         })
     } catch (error) {
       res.status(500).send('server error')
     }
     
 })
 router.get("/:id",isAuth,async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })

module.exports= router; 