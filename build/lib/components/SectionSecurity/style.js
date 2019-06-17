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
var Typography = require('styles/typography');
var Wrapper_1 = require('components/Wrapper');
exports.Container = styled_components_1.default.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  min-height: ', 'px;\n  display: flex;\n  align-items: center;\n'],
      ['\n  min-height: ', 'px;\n  display: flex;\n  align-items: center;\n']
    )),
  Spacing.base * 90
);
exports.Wrapper = styled_components_1.default(Wrapper_1.default)(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  text-align: center;\n  max-width: ', 'px;\n'],
      ['\n  text-align: center;\n  max-width: ', 'px;\n']
    )),
  Spacing.base * 90
);
exports.Illustration = styled_components_1.default.img(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  height: auto;\n  width: ', 'px;\n  margin-bottom: ', 'px;\n'],
      ['\n  height: auto;\n  width: ', 'px;\n  margin-bottom: ', 'px;\n']
    )),
  Spacing.base * 16,
  Spacing.base * 2
);
exports.Title = styled_components_1.default.h2(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(['\n  ', ';\n'], ['\n  ', ';\n'])),
  Typography.title
);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=style.js.map
