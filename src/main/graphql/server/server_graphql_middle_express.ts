import typeDefs from '@src/main/graphql/type_defs/type_defs'
import resolvers from '@src/main/graphql/resolvers/resolvers'

import { graphqlHTTP } from "express-graphql"
import { makeExecutableSchema } from "graphql-tools"

const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
})

export const serverGraphqlMiddle = (graphqlHTTP({
      schema,
      graphiql: true,
    })
)

//  app.use(graphqlMiddle)