const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyParser.json()) //monstrando que vamos usar dados json

app.get('/', (req, res) => {

    
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'fseletro'
    }) 


    connection.query('SELECT * FROM produtos;',  (error, result)  => { 
         //todo select vai ficar em dados
         res.json(result)
    })
}) 

app.post("/pedidos", (req, res)=>{
    const mysql = require('mysql');
    const post=req.body
    console.log(post);
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'fseletro'
    }); 


    connection.query('INSERT INTO pedidos SET ?', post,()=>{
      

      return res.json({mensage: "Dados enviados com sucesso!"})
    })
});

app.get('/pedidos', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'fseletro'
    }) 


    connection.query('SELECT * FROM pedidos;',  (error, result)  => { 
         res.json(result)
    })
}) 


app.listen(3006,function(){
    console.log('funcionado no : http://localhost:3006!')
});