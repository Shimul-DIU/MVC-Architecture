let express=require("express");
let router=express.Router();
const {  getUser, saveUser } = require("../controllers/userControlor");


router.get("/user",getUser);
router.post("/users",saveUser)

module.exports=router