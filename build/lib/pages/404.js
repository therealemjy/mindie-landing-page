'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var SEO_1 = require('components/SEO');
var NotFound = function() {
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(SEO_1.default, {
      title: '404: Not found',
      description: '',
    }),
    react_1.default.createElement('h1', null, 'NOT FOUND'),
    react_1.default.createElement(
      'p',
      null,
      "You just hit a route that doesn't exist... the sadness."
    )
  );
};
exports.default = NotFound;
//# sourceMappingURL=404.js.map
