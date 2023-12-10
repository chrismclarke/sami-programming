import fs from "fs";
const { readdirSync, writeFileSync, readFileSync } = fs;
import yaml from "js-yaml";
const { load, dump } = yaml;

/**
 * Generate a list of all folders that contain assets and write to `pubspec.yaml`
 */
function main() {
  const assetList = listFileFoldersRecursively("assets");
  const pubspecJson = load(readFileSync("pubspec.yaml", "utf8"));
  pubspecJson.flutter.assets = assetList;
  writeFileSync("pubspec.yaml", dump(pubspecJson));
}
main();

/**
 *  Recursively list all folders that contain files
 *  (empty folders will not be listed, but children of empty folders will still be processed)
 */
function listFileFoldersRecursively(baseFolder = "", allFolders = []) {
  const withFileTypes = true;
  const folders = readdirSync(baseFolder, { withFileTypes }).filter((f) => f.isDirectory());
  for (const folder of folders.map((f) => f.name)) {
    const folderpath = `${baseFolder}/${folder}`;
    // only record path if it has files inside
    if (readdirSync(folderpath, { withFileTypes }).filter((f) => f.isFile()).length > 0) {
      allFolders.push(`${folderpath}/`);
    }
    listFileFoldersRecursively(folderpath, allFolders);
  }
  return allFolders;
}
