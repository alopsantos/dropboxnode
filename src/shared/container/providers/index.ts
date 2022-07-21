import { container } from 'tsyringe'

import { IDropboxProvider } from './DropboxProvider/IDropboxProvider'
import { DropboxProvider } from './DropboxProvider/implementations/DropboxProvider'

container.registerSingleton<IDropboxProvider>(
  'DropboxProvider',
  DropboxProvider
)
