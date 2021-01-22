const knex = require('knex')


function getDB(){
    return database
}

const db = knex({
    client: 'pg',
        connection: {
        host : '127.0.0.1',
            user : 'postgres',
            password : 'test123',
            database : 'smart-brain'
}
})



function insertToDb(user){
    let newUser = {
        name:user.name,
        email:user.email,
        password:user.password,
        entries:0,
        registerDate: new Date(),
        id: database.counter
    }
    database.users.push()
    database.counter++
    return newUser
}

const database = {
    counter:125,
    users: [
        {
            id: '123',
            name: 'Achiya',
            email: 'achiyahb@gmail.com',
            password: '123456',
            entries:'0',
            registerDate: new Date()
        },
        {
            id: '124',
            name: 'Lavi',
            email: 'lavi@gmail.com',
            password: '123123',
            entries:'0',
            registerDate: new Date()
        }
    ]
}

module.exports  = {
    getDB,
    insertToDb,
    db
}
