
import { ListarImagensDropboxController } from '@modules/Dropbox/useCases/listarImagensDropbox/listarImagensDropboxController'
import { Router } from 'express'

const dropboxListaRouts = Router()

const listarimagensDropboxController = new ListarImagensDropboxController()

dropboxListaRouts.get("/")
dropboxListaRouts.post('/imagens', listarimagensDropboxController.handle)

export { dropboxListaRouts }
