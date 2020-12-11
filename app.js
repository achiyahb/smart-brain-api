const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express();
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.send('server is running')
})

app.post('/signin',(req,res) =>{
    let email = req.body.email
    let password = req.body.password
    if(email === db.getDB().users[0].email &&
        password === db.getDB().users[0].password){
        res.json('success')
    } else {
        res.json('signing in failed')
    }
})

app.listen(3000, ()=>{
    console.log('listing to port 3000')
})