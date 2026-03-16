const db = require("../config/db");

async function list(itensPedidos){
    const [rows] = await db.query("SELECT * FROM itens_pedidos WHERE id = ?", [itensPedidos.id]        
);

return rows;
}

async function create(itensPedidos, data) {
    const {id_pedido, tipo_item, id_item, quantidade, preco_unit} = data

    const [res] = await db.query("INSERT INTO itens_pedidos (id_pedido, tipo_item, id_item, quantidade, preco_unit) VALUES (?, ?, ?, ?, ?)", [id_pedido, tipo_item, id_item, quantidade, preco_unit])

    return res.insertId;
}

module.exports = { list, create}