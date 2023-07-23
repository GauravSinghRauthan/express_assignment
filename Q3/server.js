
const express = require('express')
const app = express()

app.use(express.json())

const PORT = 3001 

app.get('/',(req,res)=>{
    res.json({msg:`I am homepage`})
})

app.get('/about',(req,res)=>{
    res.json({msg:`I am about page`})  
})

app.get('/contact',(req,res)=>{
    res.json({email:`suppor#@pwskills.com`})
})

app.listen(PORT,()=>{
    console.log(`app listen port at ${PORT}`)
})