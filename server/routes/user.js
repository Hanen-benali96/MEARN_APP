const express = require('express')

const isAuth = require('../middelwares/isAuth')

const Send = require('../models/Send')
const User = require('../models/User')
const router = express.Router()

router.post('/adduser' ,isAuth, async (req , res)=>{
     const users = req.body
    try {
        const user = await new User (user) 
        await user.save()
        res.status(200).send({ "added with succes" : users  })
    } catch (error) {
       console.log(error) 
    }
})


router.get('/getuser' , async(req , res)=>{
    try {
       const user = await User.find()
       res.status(200).send({ "users" : user   })
    } catch (error) {
     
    }
})

router.put('/edituser/:id' ,isAuth,async(req, res)=>{
    const {id} = req.params
    const { name,address1,address2,zipCode,phone  } = req.body
    try {
        const user = await  User.findByIdAndUpdate(id, {$set :{name,address1,address2,zipCode,phone  }})
        res.status(200).send({"user updated" : user})
    } catch (error) {
        console.log(error)
    }
})

router.delete('/deleteuser/:id',isAuth, async(req , res)=>{
    const {id} =req.params
    try {
         await User.findByIdAndDelete(id)
        res.status(200).send("user delted" )
    } catch (error) {
        console.log(error)
    }
})

router.post("/send",isAuth, async (req, res) => {
    const { name,email,phone,message} = req.body
    try {
     
     const send = await Send.create ({name,email,phone,message})
      res.send({  "Your message sent successfully" : send });
    } catch (error) {
      res.status(500).json({ msg: "Error ❌" });
      console.log(error)
    }
  });

module.exports = router