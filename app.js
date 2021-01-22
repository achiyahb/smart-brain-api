const express = require('express')
const bodyParser = require('body-parser')
const {getDB, insertToDb,db} = require('./db')
const cors = require('cors')
const app = express();
app.use(bodyParser.json())

db.select('name', 'age', 'score').from('users')
    .then(data=>{
        console.log(data)
    })

app.get('/',(req,res)=>{
    res.send('server is running')
})

app.use(cors())

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

app.post('/image',(req,res) => {
    let id = req.body.id
    const db = getDB()
    let match = false
    db.users.forEach(user => {
        if (user.id === Number(id)) {
            user.entries++
            return res.json({name:user.name,entries: user.entries})
        }
    })
        if (!match) {
            return res.status(404).json('not found')
        }
})

app.get('/profiles/:id',(req, res)=>{
    let profileId = req.params.id
    let match = false
    let db = getDB()
        db.users.forEach( user => {
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

let port = process.env.PORT ? process.env.PORT : 3500;
app.listen(port , ()=>{
    console.log('listing to port ' + port)
})
