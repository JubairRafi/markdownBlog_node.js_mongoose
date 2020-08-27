const express = require("express")
const articleRouter = require("./routes/articles") //require from routes folder
const app = express()


app.set('view engine', 'ejs')


app.use("/articles", articleRouter) //using router

app.get("/",(req,res)=>{
  const articles=[{
    title: "Test article",
    createdAt: new Date(),
    description: "Test description"
  }]
  res.render("index",{articles: articles})
})

app.listen(3000)
