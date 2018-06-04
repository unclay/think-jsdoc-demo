const Application = require('thinkjs');
const watcher = require('think-watcher');
const babel = require('think-babel');
const notifier = require('node-notifier');
const jsdocExtend = require('think-jsdoc/extend');
const jsdoc = require('think-jsdoc');

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
