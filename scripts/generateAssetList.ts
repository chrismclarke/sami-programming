import * as fs from "fs-extra";

function main() {
  const list = listFoldersRecursively("assets");
  console.log("list", list);
}
main();

function listFoldersRecursively(
  dir: string,
  list = { files: [] as any, folders: [] as any }
) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = `${dir}/${file}`;
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      list.folders.push(filepath);
      listFoldersRecursively(filepath, list);
    } else {
      list.files.push(file);
    }
  }
  return list;
}
