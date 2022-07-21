interface IDropboxProvider {
  move(path: string): Promise<void>;
  listarimagens(path: string): Promise<object>;
}

export { IDropboxProvider }
