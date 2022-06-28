const express = require("express");
const { getAllProducts,  updateProduct, AjouteProduct, DeleteProduct, getProductById } = require("../controllers/productController");

const isAuth = require("../middelwares/isAuth");
const upload = require("../middelwares/upload");
const Product = require("../models/Product");

const router=express.Router();
 

router.get('/',getAllProducts);
router.get('/product/:id',getProductById)
router.put('/update/:id',isAuth,updateProduct);
router.post('/ajout',isAuth,upload.single("myImage"),AjouteProduct);
router.delete('/delete/:id',isAuth,  DeleteProduct)          
router.put('/updates',isAuth,upload.single("myImage"),async (req, res)=>{
       
       const file=req.file 
       try {
          await Product.findByIdAndUpdate(req.product.id,{$set:{imagesUrl:req.file.filename}})
          res.send('image uploaded')
       } catch (error) {
           res.status(500).send('server error')
           console.log(file)
       }
})

 module.exports=router 