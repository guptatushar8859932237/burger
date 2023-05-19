const getdata = require('../modallll/modalas')

const mydata= (req ,res)=>{
getdata.find().then((err,data)=>{
    if(err){
        res.json(err)
    }else{
        res.json(data)
    }
})
}

const postdata = async (req,res)=>{
try {
    const {firstname , lastname , email,address,contact}= req.body
        
const user = getdata({
    firstname:firstname,
    lastname:lastname,
    email:email,
    address:address,
    contact:contact
})
await user.save().then(()=>{
    res.json({message:"order successfuly" , success : true })
})
} catch{
    res.json({message:"order not success" , success:false})
}
}

module.exports={mydata, postdata}