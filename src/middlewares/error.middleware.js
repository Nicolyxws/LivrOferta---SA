function errorMiddleware(err, req, res, next) {
    console.error(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Erro interno de servidor";
    return res.status(statusCode).json({ message });
}
module.exports = errorMiddleware;