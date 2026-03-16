const repo = require("../repositories/itens-pedidos.repo");

async function list(req, res, next) {
    try {
        const itensPedidos = await repo.list(req.itensPedidos.id);
        res.json(itensPedidos);
    } catch (e) {
        next(e);
    }
}

async function create(req, res, next) {
    try {
        const id = await repo.create(req.itensPedidos.id, req.body);
        res.status(201).json({ id });
    } catch (e) {
        next(e);
    }
}

module.exports = { list, create}