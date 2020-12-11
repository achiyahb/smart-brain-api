module.exports  = {
    getDB
}
function getDB(){
    return database
}

const database = {
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