const { gql, ApolloServer } = require('apollo-server')
//type defn/schemas

const typeDefs = gql`
    type Query{
        greeting:String
    }
`;

// console.log(typeDefs)
//resolvers
const resolvers = {
    Query: {
        greeting:() => 'Hello World from GraphQL'
    }
}

const server = new ApolloServer({typeDefs, resolvers});
server.listen({port:9000})
        .then(({url}) => console.log(`Server is running @:${url}`))