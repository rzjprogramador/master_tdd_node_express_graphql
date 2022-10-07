import express from 'express'

import setupMiddlewares from '@src/main/config/setup_middlewares'
import { setupRoutes } from '@src/main/config/routes'
import { serverGraphqlMiddle } from '@src/main/graphql/server/server_graphql_middle_express'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
export default app