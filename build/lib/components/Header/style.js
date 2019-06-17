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
var Responsive = require('styles/responsive');
var Wrapper_1 = require('components/Wrapper');
var P_1 = require('components/P');
exports.Container = styled_components_1.default.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  min-height: ',
        'px;\n  position: relative;\n  overflow-x: hidden;\n',
      ],
      [
        '\n  min-height: ',
        'px;\n  position: relative;\n  overflow-x: hidden;\n',
      ]
    )),
  Spacing.base * 87
);
exports.Wrapper = styled_components_1.default(Wrapper_1.default)(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  @media (min-width: ', 'px) {\n    padding-top: ', 'px;\n  }\n'],
      ['\n  @media (min-width: ', 'px) {\n    padding-top: ', 'px;\n  }\n']
    )),
  Responsive.phone + 1,
  Spacing.base * 10
);
exports.Title = styled_components_1.default.h1(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  ',
        ';\n\n  margin: ',
        'px 0 ',
        'px;\n\n  @media (min-width: ',
        'px) {\n    max-width: 520px;\n    width: 47%;\n    margin-top: ',
        'px;\n  }\n',
      ],
      [
        '\n  ',
        ';\n\n  margin: ',
        'px 0 ',
        'px;\n\n  @media (min-width: ',
        'px) {\n    max-width: 520px;\n    width: 47%;\n    margin-top: ',
        'px;\n  }\n',
      ]
    )),
  Typography.mainTitle,
  Spacing.base * 13,
  Spacing.base * 2,
  Responsive.phone + 1,
  Spacing.base * 15
);
exports.P = styled_components_1.default(P_1.default)(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  margin: 0 0 ',
        'px;\n\n  @media (min-width: ',
        'px) {\n    max-width: 450px;\n    width: 47%;\n  }\n',
      ],
      [
        '\n  margin: 0 0 ',
        'px;\n\n  @media (min-width: ',
        'px) {\n    max-width: 450px;\n    width: 47%;\n  }\n',
      ]
    )),
  Spacing.base * 4,
  Responsive.phone + 1
);
exports.IllustrationDesktop = styled_components_1.default.img(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  display: none;\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 1500px;\n  height: auto;\n  margin-top: -',
        'px;\n\n  @media (min-width: ',
        'px) {\n    display: block;\n  }\n',
      ],
      [
        '\n  display: none;\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 1500px;\n  height: auto;\n  margin-top: -',
        'px;\n\n  @media (min-width: ',
        'px) {\n    display: block;\n  }\n',
      ]
    )),
  Spacing.base * 37,
  Responsive.phone + 1
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5;
//# sourceMappingURL=style.js.map
