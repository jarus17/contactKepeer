const express = require("express");

const router = express.Router();

//@route   POST api/users
//@descip   Register a user
//access   public

router.post("/",(req,res)=>{
    res.send("Register a users")
})

module.exports = router;