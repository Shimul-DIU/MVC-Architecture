let path=require('path')
let users=require('../models/userModel')
let getUser=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/user.html'))
}

let saveUser=(req,res)=>{
    
let {name,password,email}=req.body;
let user={
    name,password,email
}
users.push(user)
res.send({
    users
})
}
module.exports={getUser,saveUser}