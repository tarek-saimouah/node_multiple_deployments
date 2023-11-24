import { Router } from 'express'
import AppController from '../controllers/app.controller'

const controller = new AppController()

const router = Router()

router.route('/').get(controller.hello)

export default router
