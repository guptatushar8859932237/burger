const express =require('express')
const router = require('./royessss/routs')
const cors = require('cors')
const mongoose =require('./database/databsas')

const app =express();

app.use(express.json())
app.use(cors())
app.use('/',router)
app.listen(9897,()=>{
    console.log('this is port 5000')
})