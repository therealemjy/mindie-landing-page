'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var styled_components_1 = require('styled-components');
var Spacing = require('styles/spacing');
var Wrapper = styled_components_1.default.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  margin: 0 auto;\n  max-width: ', 'px;\n  padding: 0 ', 'px;\n'],
      ['\n  margin: 0 auto;\n  max-width: ', 'px;\n  padding: 0 ', 'px;\n']
    )),
  Spacing.base * 130,
  Spacing.base * 2
);
exports.default = Wrapper;
var templateObject_1;
//# sourceMappingURL=index.js.map
