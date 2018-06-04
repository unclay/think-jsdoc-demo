const view = require('think-view');
const cache = require('think-cache');
const session = require('think-session');

module.exports = [
  view, // make application support view
  cache,
  session
];
