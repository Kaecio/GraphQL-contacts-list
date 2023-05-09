const { join } = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const loadedTypeDefs = loadFilesSync(join(__dirname, "modules", "**", "*.gql"));
const loadedResolvers = loadFilesSync(
  join(__dirname, "modules", "**", "resolvers.js")
);

const typeDefs = mergeTypeDefs(loadedTypeDefs);
const resolvers = mergeResolvers(loadedResolvers);

module.exports = { typeDefs, resolvers };
