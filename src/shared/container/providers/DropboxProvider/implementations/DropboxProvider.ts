import { Dropbox } from 'dropbox'

import { IDropboxProvider } from '../IDropboxProvider'

const dbx = new Dropbox({ accessToken: process.env.ACCESS_TOKEN })

class DropboxProvider implements IDropboxProvider {
  async move (path: string): Promise<void> {
    await dbx
      .filesListFolder({ path: `/imagens/${path}` })
      .then(function (response) {
        return response.result.entries
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  async listarimagens (path: string): Promise<object | any> {
    await dbx
      .filesListFolder({ path: `/imagens/${path}` })
      .then(function (response) {
        return response.result.entries
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}

export { DropboxProvider }
