const express = require("express");

const cors = require("cors");

require("dotenv").config();

require("dotenv").config();

const livrosRoutes = require("./routes/livros.routes.js");

const errorMiddleware = require("./middlewares/error.middleware");
const app = express();
app.use(cors());
app.use(express.json());

app.use( ".//livros",  livrosRoutes)


app.use(errorMiddleware);
module.exports = app; 
