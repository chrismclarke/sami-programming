const fs = require("fs").promises;
const path = require("path");
const folders = [];

const walk = async (dir, list = { files: [], folders: [] }) => {
  const files = await fs.readdir(dir);

  for (file of files) {
    const filepath = path.join(dir, file);
    const stat = await fs.stat(filepath);

    if (stat.isDirectory()) {
      list.folders.push(filepath.replace(__dirname, ""));
      filelist = await walk(filepath, list);
    } else {
      list.files.push(file);
    }
  }

  return list;
};
walk(path.join(__dirname, "blockly-games")).then(list => {
  console.log(list.folders);
});
