const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const produtosSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  marca: {
    type: String,
    required: true,
  },
  valor: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  }

});

module.exports = model("produtos", produtosSchema);