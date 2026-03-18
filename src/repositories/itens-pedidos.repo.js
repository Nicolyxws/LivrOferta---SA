const db = require("../config/db");

async function lista(itensPedidos){
    const [rows] = await db.query("SELECT * FROM itens_pedidos WHERE id = ?", [itensPedidos.id]        
);
return rows;
}

async function criar(data) {
    const {id_pedido, tipo_item, id_item, quantidade, preco_unitario} = data
    console.log(`Dados recebidos: ${id_pedido}, ${tipo_item}, ${id_item}, ${quantidade}, ${preco_unitario}`);

    const [res] = await db.query("INSERT INTO itens_pedido (id_pedido, tipo_item, id_item, quantidade, preco_unitario) VALUES (?, ?, ?, ?, ?)", [id_pedido, tipo_item, id_item, quantidade, preco_unitario])

    return res.insertId;
}

module.exports = { lista, criar }