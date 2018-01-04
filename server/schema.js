import { makeExecutableSchema } from 'graphql-tools';

const types = require('./types');
const resolvers = require('./resolvers');

module.exports = makeExecutableSchema({
    typeDefs: types,
    resolvers: resolvers
});
