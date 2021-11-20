const { validate: isUuid } = require('uuid');
const Produto = require('../models/produtos');

module.exports = {
    async validateId(requeste, response, next){
        const { id } = requeste.params;

        if(!isUuid(id)){
            return response.status(400).json({ error: 'invalid id' });
        }
        try{
            const produto = await Produto.findById(id);
            response.produto = produto;
            if(!produto){
                return response.status(404).json({ error: 'produto não existe!'});
            }
        }catch(err){
            return response.status(500).json({ error: err.message });
        }
        next();
    }
};