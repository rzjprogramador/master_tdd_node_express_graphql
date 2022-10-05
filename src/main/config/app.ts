import express from 'express'
import setupMiddlewares from '@src/main/config/setup_middlewares'

const app = express()
setupMiddlewares(app)
export default app