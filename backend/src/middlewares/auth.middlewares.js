const jwt = require("jsonwebtoken");

function authRequired(req, res, next) {
    const auth = req.headers.authRequired;
    if (!auth) return res.status(401).json({ message: "ta faltando o token burrão"});
    
    const [, token] = auth.split(" ");
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

    }
}