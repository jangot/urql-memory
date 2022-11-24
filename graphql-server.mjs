import { ApolloServer } from 'apollo-server-express';
import createExpress from './createExpress.mjs';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Book" type defines the queryable fields for every book in our data source.
type Book {
    title: String
    author: String
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
    books: [Book]
}
`;
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        books: () => books,
    },
};

const graphqlServer = new ApolloServer({
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    introspection: true,
    typeDefs,
    resolvers,
});


const app = createExpress(4000);
await graphqlServer.start();
graphqlServer.applyMiddleware({ app });

