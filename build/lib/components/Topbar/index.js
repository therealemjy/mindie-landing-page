'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var mindie_logo_svg_1 = require('./mindie-logo.svg');
var Wrapper_1 = require('components/Wrapper');
var Style = require('./style');
var Topbar = function() {
  return react_1.default.createElement(
    Style.Container,
    null,
    react_1.default.createElement(
      Wrapper_1.default,
      null,
      react_1.default.createElement(Style.Logo, {
        as: mindie_logo_svg_1.default,
      })
    )
  );
};
exports.default = Topbar;
//# sourceMappingURL=index.js.map
