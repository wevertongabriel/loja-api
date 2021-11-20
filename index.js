//express config
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT
app.listen(port, () => console.log(`Rodando na porta ${port}`));
app.use(cors());
app.use(express.json());

//connection database
const mongoose = require('mongoose');
const connectToDatabase = require('./src/database/connection');
connectToDatabase();
const db = mongoose.connection;
const Produto = require('./src/database/models/produtos');

//controller export
const produtosController = require('./src/database/controller/produtosController');
const produtosMiddleware = require('./src/database/middlewares/produtoMiddleware');

app.get('/api', produtosController.index);

app.post('/api', produtosController.store);

app.put('/api/:id', produtosMiddleware.validateId, produtosController.update);
app.delete('/api/:id', produtosMiddleware.validateId, produtosController.delete);