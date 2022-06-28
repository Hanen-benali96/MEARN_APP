const express = require('express');
const isAuth = require('../middelwares/isAuth');
const upload = require('../middelwares/upload');
const User = require('../models/User');
const router=express.Router()


router.put('/update',isAuth,upload.single('ImgProfile'),async(req,res)=>{
    const file=req.file
  console.log(file)
   try {
      await User.findByIdAndUpdate(req.user.id,{$set:{ imageUrl:req.file.filename,...req.body}})
      res.send('image uploaded')
   } catch (error) {
       res.status(500).send('server error')
       
   }
   
})
// Edit user name & lastname
router.put("/editeprofile/:id", isAuth, async (req, res) => {
  console.log(req.body)
  const { name,address1,address2,zipCode,phone  } = req.body
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $set: {
          name,address1,address2,phone,zipCode
    }});
      res.status(200).send("User  Updated");
    } catch (error) {
      res.status(500).send("Server Error");
      console.log(error)
    }
  });
 ;
module.exports= router;