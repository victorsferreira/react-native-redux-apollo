import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { graphql } from 'graphql';

const config = require('./config');
const context = require('./context');
const schema = require('./schema');

const app = express();

app.get('/graphql/execute', function(req, res){
    var query = req.query.q;

    graphql(schema, query, null, context)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err)=>{
        console.log('err', err);
        res.status(err.status || 500).json(err.message);
    })
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: schema,
    context: context
}));

app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(config.port);

module.exports = app;
