require("dotenv").config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

app.get('/',(req,res,next)=>{
    res.status(200).send('Hi buddy! How are you?');
})


app.listen(PORT,()=>console.log('server running on '+PORT))