import { Router } from 'express'
import { dropboxListaRouts } from './dropbox.routes'

const router = Router()

router.use('/dropbox', dropboxListaRouts)

export { router }
