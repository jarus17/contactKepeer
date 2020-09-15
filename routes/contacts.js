const express = require("express");

const router = express.Router();

//@route   GET api/contact
//@descip   Get all user contact
//access   private

router.get("/",(req,res)=>{
    res.send("get all user contact")
})
//@route   Post api/contacts/:id
//@descip   create a contact
//access   private

router.post("/:id",(req,res)=>{
    res.send("create a contact")
})

//@route   PUT api/contacts/:id
//@descip   Update a contact
//access   private

router.put("/:id",(req,res)=>{
    res.send("Update a contact")
})


//@route   Delete api/contacts/:id
//@descip   Delete a contact
//access   private

router.delete("/:id",(req,res)=>{
    res.send("Delete a contact")
})
module.exports = router;