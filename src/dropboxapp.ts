import { Dropbox } from "dropbox";

const dbx = new Dropbox({ accessToken: process.env.ACCESS_TOKEN });
const FilesListFolderDropbox = async () => {
  await dbx
    .filesListFolder({ path: "/imagens/7" })
    .then(function (response) {
      return response.result.entries;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export { FilesListFolderDropbox };
