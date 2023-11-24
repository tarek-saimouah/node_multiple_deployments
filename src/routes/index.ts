import { Router } from 'express'
import appRouter from './app.router'

const router = Router()

router.use('/hello', appRouter)

export default router
