import { Express } from 'express'
import { bodyParser } from '@src/main/middlewares/body_parser'

export default (app: Express): void => {
  app.use(bodyParser)
}