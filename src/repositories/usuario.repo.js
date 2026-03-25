const db = require("../config/db");

async function list(usuario){
    const [rows] = await db.query("SELECT * FROM usuario WHERE id = ?", [usuario.id]);
    return rows;
}

async function create(data){
    const {nome, email, senha, tipo} = data;
    const [res] = await db.query("INSERT INTO usuario (nome, email, senha, tipo) VALUES (?, ?, ?, ?)", [nome, email, senha, tipo]);
    return res.insertId;
}

module.exports = { list, create}