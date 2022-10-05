import { Express } from 'express'
import { bodyParser, cors } from '@src/main/middlewares'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}