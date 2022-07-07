import 'dotenv/config'
import {FilesListFolderDropbox} from './dropboxapp'

// interface IFiles {
//   name?: string;
//   path_lower?: string;
//   path_display?: string;
//   id?: string;
// }
// interface IFile {
//   file: IFiles[]
// }

// const filesList:IFile[] = []
// const dbx = new Dropbox({accessToken: process.env.ACCESS_TOKEN})
// dbx.filesListFolder({path: '/imagens/7'}).then((response: any) => {
//   filesList.push(response.result.entries);
//   // console.log(filesList)
// }).catch((err: any) => {
//   console.log(err)
// })
// filesList.map(file => {
//   return(
//     console.log(file)
//   )
// })
const imagens  = async () => FilesListFolderDropbox() 

console.log(imagens)
