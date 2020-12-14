const express = require('express')
const bodyParser = require('body-parser')
const {getDB, insertToDb} = require('./db')

const app = express();
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.send('server is running')
})

app.post('/signin',(req,res) =>{
    let email = req.body.email
    let password = req.body.password
    if(email === getDB().users[0].email &&
        password === getDB().users[0].password){
        res.json('success')
    } else {
        res.status(400).json('signing in failed')
    }
})

app.get('profiles/:id',(req, res)=>{
    let profileId = req.params
    let match = false
    getDB().forEach( user => {
        if (user.id === profileId){
            match = true;
            return res.json(user)
        }
        if (!match){
            return res.status(404).json('not found')
        }
    })
})


app.post('/register',(req,res) =>{
    if(req.body.password && req.body.email && req.body.name){
        res.json(insertToDb( req.body))
    } else {
        res.status(400).json('registering is failed')
    }

})
let port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port , ()=>{
    console.log('listing to port' + port)
})