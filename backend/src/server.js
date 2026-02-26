import express from 'express'

const app = express()

app.use(express.json())

const users = []

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

app.listen(3000, () => {
     console.log('Servidor em Execução');
});



