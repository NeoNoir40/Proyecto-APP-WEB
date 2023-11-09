const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    database: 'astroseiza',
    password: ''
});

db.connect(error =>{
    if(error){
        console.log(error);
        return;
    }
    console.log('Conectado a la base de datos correctamente')
})

module.exports = db;