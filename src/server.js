const app = require("./app");
const PORT = process.env.PORT || 3000;

require('dotenv').config();

const mysql = require('mysql2');  

const users = []

//POST
app.post('/usuarios', (req, res) => {
    const {nome, email, senha} = req.body
  
    const sql = "INSERT INTO usuarios (nome, email, senha) values(?, ?, ?)";

    db.query(sql, [nome, email, senha], (err, result) => {
     if(err) {
          return res.status(500).json({erro:err});

     }
    })
    
});



app.get('/usuarios', (req, res) => {
     res.json(users)
});


app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});




