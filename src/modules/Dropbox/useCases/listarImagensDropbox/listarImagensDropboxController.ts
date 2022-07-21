import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListarImagensDropboxUseCase } from './listarImagensDropboxUseCase'

class ListarImagensDropboxController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { path } = request.body
    
    const listarImagensDropboxUseCase = container.resolve(
      ListarImagensDropboxUseCase
    )

    await listarImagensDropboxUseCase.execute(path)

    return response.send()
  }
}

export { ListarImagensDropboxController }
