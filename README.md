# design-to-code-generator

By following specific naming rules on design prototyping tool, this tool will turn it into source code directly. you can also customise how it works by config file.

## background

This repository aims to be a tool set that generates iOS/Android app source code and related assets from design prototyping tools like Sketch, Figma, and so on.

The base concept is that _"let's make it automatic that is painful for human"_ so that both designers and developers can concentrate on more higher level of product development.

## tools

we prepared cli tools as below:

### currently implemented

- (Sketch/Figma -> iOS) convert image slices into xcassets files

### to be added

- (Sketch -> iOS) convert color palette into xcassets files
- (Sketch -> iOS) convert static view layouts into SwiftUI layout

Android version to be added...

## prerequisite

1. node version `8.9.0` or over.
2. install [sketch](https://www.sketchapp.com/).
3. check if [sketchtool](https://developer.sketchapp.com/guides/sketchtool/) exists by executing `$ ls /Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool`

## how to install

1. npm install -g git@github.com:podder-ai/design-to-code.git

## how to use

1. set environment variables on `.env` file (you can copy .env.default)
2. set `dtc.config.json` properly
3. dtcgen <command> <options>

### (Sketch -> iOS) To convert image slices into xcassets files

`dtcgen slice --input "./sample.sketch" --platform ios`

### (Figma -> iOS) convert image slices and color palette into xcassets files

```
# you need to set constants on .env file beforehand
dtcgen slice --tool "figma" --platform ios
```

### (Sketch -> iOS) convert color palette into xcassets files

to be added...

### (Sketch -> iOS) convert static view layouts into SwiftUI layout

to be added...

## contributing

### suggest issues

Just create from issues tab.
https://github.com/podder-ai/design-to-code/issues

### make PR

1. fork this repo
2. create your feature branch: `git checkout -b some-new-feature`
3. commit your changes: `git commit -am 'added some feature'`
4. push to the branch: `git push origin some-new-feature`
5. submit a pull request

### try cli while development

1. make sure that you did finished `tsc` and have directory `dist` on root dir which has transpiled sourcecodes.
2. `npm link` on project root dir which make symlink to global npm node_modules
3. now you can execute like `dtcgen slice --input "./sample.sketch"`.

** To remove symlink, you can execute `npm install` on dtcgen project. **

## thanks to

https://github.com/jsynowiec/node-typescript-boilerplate

## LICENSE

apache2.0
