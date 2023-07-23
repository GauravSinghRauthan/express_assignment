const express = require('express')
const app = express()

PORT = 3001

app.get('/',(req,res)=>{
    res.send('Welcome to Men & Women Dummy Data')
})

app.get('/men',(req,res)=>{
    res.status(200).json([{"id": "1","name":"men's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "2","name":"men's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "3","name":"men's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "4","name":"men's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "5","name":"men's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "6","name":"men's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "7","name":"men's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "8","name":"men's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "9","name":"men's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "10","name":"men's T-shirt","Brand":"ABC","Color":"blue"}]
)
})

app.get('/women',(req,res)=>{
    res.status(200).json([{"id": "1","name":"women's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "2","name":"women's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "3","name":"women's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "4","name":"women's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "5","name":"women's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "6","name":"women's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "7","name":"women's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "8","name":"women's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "9","name":"women's T-shirt","Brand":"ABC","Color":"blue"},
    {"id": "10","name":"women's T-shirt","Brand":"ABC","Color":"blue"}]
)
})

app.get('/other',(req,res)=>{
    res.send('page not found')
})

app.listen(PORT,()=>{
    console.log(`app listen at ${3001}`)
})