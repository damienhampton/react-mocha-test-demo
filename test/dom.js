const { JSDOM } = require('jsdom');
const { window } = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}
window.MessageChannel = require('worker_threads').MessageChannel;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
require('raf/polyfill');
copyProps(window, global);
require('@testing-library/react/dont-cleanup-after-each');