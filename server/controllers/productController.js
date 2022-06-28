const Product = require("../models/Product")



exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products
        })
    
    } catch (error) {
        res.status(500).send('server error')
    }
  
}
//Update Product --- Admin
exports.updateProduct = async (req, res) => {
   try {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: true,
            message: "Product is not found with this id"
        })

    }
    await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false
    });
    res.status(200).json({
        success: true,
        msg:"product update"
    })
   } catch (error) {
    res.status(500).send('server error')
   }
}

exports.AjouteProduct = async (req, res) => {
    console.log(req.file)
 
    try {
        const product = await Product.create({...req.body,imagesUrl:req.file.filename});
        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
   
}





exports.DeleteProduct = async (req, res) => {
    try {
         await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            msg:"product deleted"
        })
    } catch (error) {
      res.status(500).send('server error')
    }
    
}
exports.getProductById = async (req, res) => {
console.log(req.params.id)
try {
    let product = await Product.findById(req.params.id);
    
        return  res.status(200).json({
        success: true,
      product
    })


} catch (error) {
    
console.log(error)
    
} }



