const express = require('express')
const {mydata,postdata} = require('../contrls/cobntrolles')
const router = express.Router()

router.get('/get',mydata)
router.post('/order',postdata)
module.exports=router