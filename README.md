
Application created by [ThinkJS](http://www.thinkjs.org)

## Install dependencies

```
npm install
```

## Start server

```
npm start
```

## Add think-jsdoc

```
npm install think-jsdoc --save-dev
```

## Config think-jsdoc

```js
const Application = require('thinkjs');
const watcher = require('think-watcher');
const babel = require('think-babel');
const notifier = require('node-notifier');
const jsdocExtend = require('think-jsdoc/extend');
const jsdoc = require('think-jsdoc');

// 因为thinkjs会自动清除docs下面的js文件，所以多设置一层server目录存放api
const NewApplication = jsdocExtend(Application, {
  OUT_PAth: 'docs/server'
});

const instance = new NewApplication({
  ROOT_PATH: __dirname,
  watcher: watcher,
  transpiler: [babel, {
    presets: ['think-node']
  }],
  docTranspiler: [jsdoc, {
    match: /(controll|config)/g,
  }],
  notifier: notifier.notify.bind(notifier),
  env: 'development'
});

instance.run();
```