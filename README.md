# SAMI Programming

This is a flutter wrapper around [Blockly Games](https://blockly-games.appspot.com/) for use on android or ios devices.

## Prerequisites

- [Flutter](https://docs.flutter.dev/get-started/install)
- [Dart](https://dart.dev/get-dart

**Android Development**
Follow docs at:
https://docs.flutter.dev/get-started/install/windows#install-android-studio

If Android Studio already installed then setup wizard will not run, and instead should manually install required components from sdk manager (e.g. Android SDK, Android SDK Command-line Tools, Android SDK Build-Tools)

May also want to install flutter plugin from `File -> Settings -> Plugins`
https://plugins.jetbrains.com/plugin/9212-flutter

## Setup

- Clone Repo

```
git clone --depth 1 https://github.com/supportingami/sami-programming
```

- Install dependencies

```sh
yarn install
```

```sh
flutter run
```

## Creating a new build (for any language)

### Prerequisites

- Node
- [Yarn](https://yarnpkg.com/getting-started/install)

1. Download the required assets from https://github.com/google/blockly-games/wiki/Offline

2. Copy assets to `assets/blockly-games` (overwrite existing files)

3. Generate files list

```sh
yarn install
```

```sh
node scripts/generateAssetList.js
```

## Running on device

Using android studio run the debug build, or create a signed release for the play store

NOTE - for running the app you can open android studio on main folder
If trying to edit gradle build or image assets easier to open within child `android` folder

## Versioning

Versioning should be handled by updating the pubspec.yaml file

```
version: 1.0.2+2
```

Where version name is given by 3-digit number, and build number by what follows `+`

If this does not work, manually add to `android/local.properties`

```
flutter.versionName=1.0.2
flutter.versionCode=2
```
