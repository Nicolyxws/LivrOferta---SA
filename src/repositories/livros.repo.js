const db = require("../config/db");

async function list(livros){
const [rows] = await db.query("SELECT * FROM livros WHERE id = ?", [livros.id]
);
return rows;
}

async function create(data) {
    const {titulo, autor, categoria, ano, preco, estoque, descricao, imagem} = data;

    const [res] = await db.query("INSERT INTO livros (titulo, autor, categoria, ano, preco, estoque, descricao, imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [titulo, autor, categoria, ano, preco, estoque, descricao, imagem]);

    return res.insertID;
}

module.exports = { list, create}