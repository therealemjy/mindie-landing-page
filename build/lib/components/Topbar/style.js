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
exports.Container = styled_components_1.default.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: ',
        'px 0;\n',
      ],
      [
        '\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: ',
        'px 0;\n',
      ]
    )),
  Spacing.base * 3
);
exports.Logo = styled_components_1.default.img(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  height: ', 'px;\n'],
      ['\n  height: ', 'px;\n']
    )),
  Spacing.base * 4
);
var templateObject_1, templateObject_2;
//# sourceMappingURL=style.js.map
