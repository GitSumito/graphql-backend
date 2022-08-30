const { ApolloServer, gql} = require("apollo-server");


// HeackerNews each one
let links = [
    {
        id: "link-0",
        description: "hoge0",
        url: "sumito.jp",
    },
    {
        id: "link-1",
        description: "hoge1",
        url: "sumito.jp",
    },
    {
        id: "link-2",
        description: "hoge2",
        url: "sumito.jp",
    },
]
// define GraphQL schema 
const typeDefs = gql`
    type Query {
        info: String!
        feed: [Link]!
    }

    type Link{
        id: ID!
        description: String!
        url: String!
    }
`;

// resolver
const resolvers = {
    Query: {
        info: () => "Hackernews clone",
        feed: () => links,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => console.log(`now listening ${url}`));
