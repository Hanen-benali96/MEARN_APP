require('dotenv').config()
const express = require('express')

const app = express()
const connnectDB= require ("./config/connection")
const authRouter=require('./routes/auth')
const product=require('./routes/product')
const user =require('./routes/user')
const profile=require('./routes/profile')
const adminRouter = require('./routes/admin')
connnectDB();
//middlewares
app.use(express.json())
app.use('/api/auth',authRouter);
app.use('/api/products',product);
app.use('/api/users' ,  user);
app.use('/api/profile',profile);
app.use('/api/admin',adminRouter);


app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port, ${process.env.PORT}` )
})
