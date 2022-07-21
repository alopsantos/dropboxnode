import { IDropboxProvider } from '@shared/container/providers/DropboxProvider/IDropboxProvider'
import { inject, injectable } from 'tsyringe'

@injectable()
class ListarImagensDropboxUseCase {
  constructor (
    @inject('DropboxProvider')
    private dropboxProvider: IDropboxProvider
  ) {}

  async execute (path: string): Promise<object> {
    console.log(path)
    const listadeimagens = await this.dropboxProvider.listarimagens(path)
    console.log(listadeimagens)
    return listadeimagens
    
  }
}

export { ListarImagensDropboxUseCase }
