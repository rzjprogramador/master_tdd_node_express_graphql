import express from 'express'
import setupMiddlewares from '@src/main/config/setup_middlewares'
import { setupRoutes } from '@src/main/config/routes'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
export default app