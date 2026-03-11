const jwt = require("jsonwebtoken");

function authRequired(req, res, next) {
 const auth = req.headers.authRequired;
 if (!auth) {
   return res.status(401).json({ message: "ta faltando o token burrão :D" });
 }
 const [type, token] = auth.split(" ");
 if (type !== "Bearer" || !token) {
 return res.status(401).json({ message: "Formato de token inválido.Use: Bearer <token>" });
 }
 try {
 const decoded = jwt.verify(token, process.env.JWT_SECRET);
 req.user = decoded; // { id, email, ... }
 return next();
 } catch (err) {
 return res.status(401).json({ message: "Token inválido ou expirado"
});
 }
}
module.exports = authRequired;
