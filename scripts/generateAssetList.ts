import * as fs from "fs-extra";
import * as yaml from "js-yaml";

/**
 * Generate a list of all folders that contain assets and write to `pubspec.yaml`
 */
function main() {
  const assetList = listFileFoldersRecursively("assets");
  const pubspecJson: any = yaml.safeLoad(fs.readFileSync("pubspec.yaml", "utf8"));
  pubspecJson.flutter.assets = assetList;
  fs.writeFileSync("pubspec.yaml", yaml.safeDump(pubspecJson));
}
main();

/**
 *  Recursively list all folders that contain files
 *  (empty folders will not be listed, but children of empty folders will still be processed)
 */
function listFileFoldersRecursively(baseFolder: string, allFolders: string[] = []) {
  const withFileTypes = true;
  const folders = fs.readdirSync(baseFolder, { withFileTypes }).filter((f) => f.isDirectory());
  for (const folder of folders.map((f) => f.name)) {
    const folderpath = `${baseFolder}/${folder}`;
    // only record path if it has files inside
    if (fs.readdirSync(folderpath, { withFileTypes }).filter((f) => f.isFile()).length > 0) {
      allFolders.push(`${folderpath}/`);
    }
    listFileFoldersRecursively(folderpath, allFolders);
  }
  return allFolders;
}
