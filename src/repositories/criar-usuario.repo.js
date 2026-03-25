const db = require ("../config/db");

async function lista(listaUsuarios){
     const [rows] = await db.query("SELECT * FROM cadastro_usuarios WHERE id = ?", [listaUsuarios.id]
);
return rows;
}

async function criar(criar_usuario) {
    const {nome, email, cpf, senha, pais, estado, cidade, telefone, role } = criar_usuario;
     console.log(`Dados recebidos: ${nome}, ${email}, ${cpf}, ${senha}, ${pais}, ${estado}, ${cidade}, ${telefone}, ${role}`);

     const res = await db.query("INSERT INTO cadastro_usuarios (nome, email, cpf, senha, pais, estado, cidade, telefone, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [nome, email, cpf, senha, pais, estado, cidade, telefone, role])

     return res.insertID
}

module.exports = { lista, criar }