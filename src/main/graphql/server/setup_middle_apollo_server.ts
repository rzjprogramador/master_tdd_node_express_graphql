import typeDefs from '@src/main/graphql/schema_roots/type_defs'
import resolvers from '@src/main/graphql/schema_roots/resolvers'

import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'

export const setupApolloServer = async (app: Express): Promise<void> => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start()
  server.applyMiddleware({ app })
}