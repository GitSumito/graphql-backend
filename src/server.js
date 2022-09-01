const { ApolloServer, gql} = require("apollo-server");

const fs = require("fs");
const path = require("path");

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



// resolver
const resolvers = {
    Query: {
        info: () => "Hackernews clone",
        feed: () => links,
    },

    Mutation: {
        post: (parent, args) => {
            let idCount = links.length;
            
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            };

            links.push(link);
            return link;
        }
    }
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"),
    resolvers,
});

server.listen().then(({url}) => console.log(`now listening ${url}`));
