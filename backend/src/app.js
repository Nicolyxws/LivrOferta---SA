require("dotenv").config();
const express = require("express");
const cors = require("cors");

const livroRoutes = require("./routes/livros.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/livros", livroRoutes.router);

module.exports =  app;
