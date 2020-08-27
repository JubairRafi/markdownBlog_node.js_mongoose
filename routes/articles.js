const express = require("express")
const router = express.Router() //for routing

router.get("/",(req,res)=>{
  res.send("this is routes")
})
module.exports = router
