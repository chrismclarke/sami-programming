# SAMI Programming

This is a flutter wrapper around [Blockly Games](https://blockly-games.appspot.com/) for use on android or ios devices.

## Prerequisites

- Node
- Yarn

## Setup

- Clone Repo

```
git clone --depth 1 https://github.com/supportingami/sami-programming
```

- Install dependencies

```
yarn install
```

## Creating a new build (for any language)

1. Download the required assets from https://github.com/google/blockly-games/wiki/Offline

2. Copy assets to `assets/blockly-games` (overwrite existing files)

3. Generate files list

```
npm run build
```

## Running on device

Using android studio run the debug build, or create a signed release for the play store

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
