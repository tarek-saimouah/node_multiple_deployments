import { Request, Response } from 'express'
import config from '../config'

export default class AppController {
  hello(req: Request, res: Response) {
    res.status(200).send(`Hello from ${config.NODE_ENV}!`)
  }
}
