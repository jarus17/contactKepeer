const express = require("express");

const router = express.Router();

//@route   GET api/auth
//@descip   Get logged in user
//access   private

router.get("/",(req,res)=>{
    res.send("get loged in a user")
})
//@route   Post api/auth
//@descip   Auth user & get token
//access   public

router.post("/",(req,res)=>{
    res.send("log in user")
})

module.exports = router;