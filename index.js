const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql/index");
const UsuarioCadastroService = require("./src/services/UsuarioCadastroService");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () =>({
    usuarioCadastroService: UsuarioCadastroService
  })
});

server.listen().then(({ url }) => console.log(url));
