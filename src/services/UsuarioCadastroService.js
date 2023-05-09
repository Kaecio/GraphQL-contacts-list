const db = require('../db')

class UsuarioCadastroService{
    constructor(db){
        this.service = db
    }

    contatos = async () => await db('contacts');

    criarContato = async ( data ) =>
        await(await this.service('contacts').insert(data).returning("*"))[0]
    atualizarContato = async (id, data ) => 
        await(await this.service('contacts').where({id}).update(data).returning("*"))[0]
    deletarContato = async (filtro) => {
        if (filtro.id){
            return await this.service('contacts').where({id: filtro.id}).delete()
        }
        if (filtro.email){
            return await this.service('contacts').where({email: filtro.email}).delete()
        }
        throw new Error('Passe um paramentro')
    }
}

module.exports = new UsuarioCadastroService(db);