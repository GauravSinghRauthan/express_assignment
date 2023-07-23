const express = require('express')
const app = express()

app.use(express.json())

const PORT = 3000

app.get('/random',(req,res)=>{
    const random = Math.floor(Math.random()*100)
    res.json({random})
})

app.listen(PORT,()=>{
    console.log(`app listen port at ${PORT}`)
})

