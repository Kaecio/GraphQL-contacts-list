
// nome da tables é o mesmo que foi criado no arquivo de configuracao do banco
module.exports = {
    Query: {
        contatos: async (obj, args, context, info) => {
            return await context.usuarioCadastroService.contatos()
        }
    },
    Mutation:{
        criarContato: async (_,{data}, context ) =>
            await context.usuarioCadastroService.criarContato(data),
        atualizarContato: async (_, {id, data} ,{usuarioCadastroService} ) => 
            await usuarioCadastroService.atualizarContato(id, data),
        deletarContato: async (_, {filtro}, {usuarioCadastroService}) => 
            await usuarioCadastroService.deletarContatos(filtro),
    }
}
