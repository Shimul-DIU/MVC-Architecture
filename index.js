let express=require("express")

let userRouter=require('./routes/userRouter')
let productRouter=require('./routes/productRouter')
let app=express()
let port=3000
app.use(express.urlencoded({extended:true}))
app.use(productRouter)
app.use(userRouter)

app.listen(port,()=>{
    console.log(`Your server is running sucessfully at http://127.0.0.1:${port}`)
})