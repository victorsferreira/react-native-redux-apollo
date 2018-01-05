import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';
import gql from 'graphql-tag';
import fetch from 'node-fetch';

class GraphQL {
    static Client = new ApolloClient({
        link: new HttpLink({uri: 'http://192.168.1.105:8080/graphql', fetch: fetch}),
        cache: new InMemoryCache()
    });

    static execute(query){
        var command = gql`
        ${query}
        `;

        return this.Client.query({ query: command });
    }
}

export default GraphQL;
