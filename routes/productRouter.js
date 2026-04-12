let express=require('express')
const {ChoseProducts,Saveproducts} = require('../controllers/productControlor')
let prouterRouter=express.Router()

prouterRouter.get('/products',ChoseProducts )
prouterRouter.post('/products',Saveproducts)

module.exports=prouterRouter


