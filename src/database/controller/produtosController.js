const { response } = require('express');
const { v4: uuid } = require('uuid')
const Produto = require('../models/produtos');

module.exports = {
//conteudo da pagina inicial
  async index(request, response){
        try{
            const produto = await Produto.find();
            return response.status(200).json({ produto });
        }catch(err){
            response.status(500).json({ error: err.message });
        }
    },
//criar um novo produto
  async store(request, response){
      const { name, marca, valor, avatar} = request.body;

      if(!name || !marca || !valor || !avatar){
          return response.status(404).json({ error: "Algum campo não foi preenchido!" });
      }
      const produto = new Produto({
          _id: uuid(),
          name,
          marca,
          valor,
          avatar,
      });
      try{
        await produto.save();

        return response.status(201).json({ message: "produto adicionado com sucesso"});
      } catch(err){
        response.status(400).json({ error: err.message });
      }
  },
//atualizar o produto
  async update(request, response){
     const { name, marca, valor, avatar } = request.body;
    if(!name && !marca && !valor && !avatar){
      return response.status(400).json({ error: "Algum campo não foi preenchido!"});
    }
    if(name) response.produto.name = name;
    if(marca) response.produto.marca = marca;
    if(valor) response.produto.valor = valor;
    if(avatar) response.produto.avatar = avatar;

    try{
        await response.produto.save();
        
        return response.status(200).json({ message: "produto atualizado com sucesso"});
    }catch(err){
        return response.status(500).json({ error: err.message });
    }
  },
  async delete(request, response){
    try{
      await response.produto.remove();
      return response.status(200).json({ message: "Produto deletado com sucesso"});
    }catch(err){
      return response.status(500).json({ error: err.message });
    }
  }
};