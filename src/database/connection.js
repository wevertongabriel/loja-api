require('dotenv').config();
const mongoose =  require('mongoose');
const { connect } = mongoose;
const url = require('url');


async function connectToDatabase() {
    const uri = `${process.env.MONGO_URL}`;
    
    const connection = await connect(uri).then(()=>{
            console.log('Banco de dados conectado com sucesso');
        }).catch((err)=>{
            console.log(`erro ao se connectar com o banco de dados! erro: ${err}`);
        });
}

module.exports = connectToDatabase;