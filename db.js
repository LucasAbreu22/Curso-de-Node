const express = require('express');
const mysql = require('mysql')

// const db = mysql.createConnection({
//     host : 'localhost', 
//     database : 'test', 
//     user : 'root', 
//     password : '' 
// })

const app = express();

app.listen('2220', () => {
    console.log('Server na porta 2220')
});