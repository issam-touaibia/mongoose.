const express = require ('express')
const app = express()
const mongoose=require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
},(err)=> {
    err ? console.log(err) :
    console.log("database is connect")
})

app.use("/", require("./routes/personRoutes"));

app.listen(PORT, (err) =>{
    err ? console.log(err) : console.log(`server is running on http://localhost:${process.env.PORT} `)
})