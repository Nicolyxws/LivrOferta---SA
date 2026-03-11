const db = require("../config/db");

async function ListarLivros(livros){
const [rows] = await db.query("SELECT * FROM livros WHERE id = ?", [livros.id]
);
return rows;
}

async function CriarLivros(livros, data) {
    const {titulo, autor, categoria, ano, preco, estoque, descricao, imagem} = data;

    const [res] = await db.query("INSERT INTO livros (titulo, autor, categoria, ano, preco, estoque, descricao, imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [titulo, autor, categoria, ano, preco, estoque, descricao, imagem]);
    return res.insertID;
}

async function DeleteLivro(id) {
    await db.query("DELETE FROM livros WHERE id = ?", [id]);
}

module.exports = { ListarLivros, CriarLivros, DeleteLivro, }