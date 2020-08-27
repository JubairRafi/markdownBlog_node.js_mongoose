const express = require("express")
const mongoose =require("mongoose")
const Article = require("./models/article")

const articleRouter = require("./routes/articles") //require from routes folder
const app = express()

mongoose.connect("mongodb://localhost/blog",{useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false})

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))
app.use("/articles", articleRouter) //using router

app.get("/", async(req,res)=>{
  const articles = await Article.find().sort({
    createdAt: "desc"
  })
  res.render("articles/index",{articles: articles})
})

app.listen(3000)
