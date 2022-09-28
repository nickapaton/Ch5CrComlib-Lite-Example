# Welcome

Angular Demo project using the Ch5CrComlib-Lite.

Created by Nick Paton at M3 Technology Group Inc.

## Use of Crestron Hardware

In order to run this project on a Crestron TS touchscreen the `ch5prep` script must be run after building the project. This replaces the `type=module` with `defer` in all script tags so that CORS is defeated. This is required because Crestron touchscreens read the project from the local file system instead of through aweb server.

You will need to install the following package globally

`npm install --global replace-in-files-cli`

The steps are:
- ng build
- npm run ch5prep
- npm run ch5arc

This will result in a .ch5z file in the dist folder that will run as a web xpanel or on a Crestron touch screen.

Mac Users: I have no been able to get the replace-in-files-cli to work on Mac OS, so you will need to modify the script tags in dist/crcomliblite/index.html manually
