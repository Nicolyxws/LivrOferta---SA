require('dotenv').config();
const express = require("express");
const mysql = require('mysql2');  
const app = express();

//TO-DO
// rotas, regras de negocio (controllers) e models (repositories) devem ser modularizados e separados nos respectivos arquivos

//Código organizado
app.use(express.json());

//importar rotas
const criarUsuarioRoutes = require("../src/routes/criar-usuarios.routes");
app.use("/Criar_usuarios", criarUsuarioRoutes);

const livroRoutes = require("../src/routes/livros.routes");
app.use("/livros", livroRoutes);

// const livroPedidos = require("../src/routes/itens-pedidos.route");
// app.use("/itens-pedidos", livroPedidos);

const usuariosroutes = require("../src/routes/usuario.routes");
app.use("/usuarios", usuariosroutes)

module.exports = app; 