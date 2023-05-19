const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/burger',
{
    useNewUrlParser:true,
    UseUnifiedTopology:true
}).then(()=>{
    console.log("dataconnect")
}).catch(()=>{
    console.log("not connect")
});

module.exports=mongoose