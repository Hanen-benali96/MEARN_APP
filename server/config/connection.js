const mongoose = require('mongoose')
connnectDB = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB connected `)
    } catch (error) {
        console.log({mes:'DB is not connected',error})
}}

module.exports= connnectDB
