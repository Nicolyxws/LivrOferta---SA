<<<<<<< HEAD
require('dotenv').config();
const express = require("express");
const mysql = require('mysql2');  


const app = require("./app");
const PORT = process.env.PORT || 3000;

//CONEXÃO COM MYSQL 
const db = mysql.createConnection ({
    host: process.env.DB_HOST ||'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'senai',
    database: process.env.DB_NAME ||'livroferta'
});


app.use(express.json());

app.post('/usuarios', (req, res) => {
    const {nome, email, senha} = req.body
 
    const sql = "INSERT INTO usuarios (nome, email, senha) values(?, ?, ?)";


    db.query(sql, [nome, email, senha], (err, result) => {
     if(err) {
          return res.status(500).json({error: err.message});
     }
    res.status(201).json({mesage: "Usuário criado.", id:result.insertId});    
});
});
app.get('/usuarios', (req, res) => {
     res.json(users)
});



app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
})
=======
import express from 'express'

const app = express()

app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {
    const {nome, email, senha} = req.body
  
    const sql = "INSERT INTO usuarios (nome, email, senha) values(?, ?, ?)";

    db.query(sql, [nome, email, senha], (err, result) => {
     if(err) {
          return res.status(500).json({erro:err});
     }
    })
    
});

app.get('/usuarios', (req, res) => {
     res.json(users)
});

app.listen(3000, () => {
     console.log('Servidor em Execução');
});



>>>>>>> fed9fa5b4ccc4bc17f33eb087f56e1862b00a121
