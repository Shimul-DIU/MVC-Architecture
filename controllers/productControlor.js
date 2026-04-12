let path=require('path');
let Products=require('../models/productModel')
let ChoseProducts=(req,res)=>{
    
res.sendFile(path.join(__dirname,'../views/product.html'))
}
let Saveproducts=(req,res)=>{
    let{vehical_1,vehical_2,vehical_3,fruits,religious}=req.body
    let product={
        vehical_1,vehical_2,vehical_3,fruits,religious
    }
    Products.push(product)
res.send({
Products
})
    

}

module.exports={ChoseProducts,Saveproducts}