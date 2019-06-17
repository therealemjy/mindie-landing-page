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
var Colors = require('./colors');
var Responsive = require('./responsive');
exports.weight = {
  bold: 700,
  demiBold: 600,
  medium: 500,
  normal: 300,
  light: 200,
};
exports.mainTitle = styled_components_1.css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  color: ',
        ';\n  font-size: 2.125rem;\n\n  @media (min-width: ',
        'px) {\n    font-size: 2.425rem;\n  }\n',
      ],
      [
        '\n  color: ',
        ';\n  font-size: 2.125rem;\n\n  @media (min-width: ',
        'px) {\n    font-size: 2.425rem;\n  }\n',
      ]
    )),
  Colors.darkGrey,
  Responsive.phone + 1
);
exports.title = styled_components_1.css(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  color: ',
        ';\n  font-size: 1.75rem;\n\n  @media (min-width: ',
        'px) {\n    font-size: 2rem;\n  }\n',
      ],
      [
        '\n  color: ',
        ';\n  font-size: 1.75rem;\n\n  @media (min-width: ',
        'px) {\n    font-size: 2rem;\n  }\n',
      ]
    )),
  Colors.darkGrey,
  Responsive.phone + 1
);
exports.paragraph = styled_components_1.css(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  font-size: 1.125rem;\n  color: ', ';\n  line-height: 1.6;\n'],
      ['\n  font-size: 1.125rem;\n  color: ', ';\n  line-height: 1.6;\n']
    )),
  Colors.pigeonGrey
);
exports.input = styled_components_1.css(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ['\n  font-size: 1.125rem;\n  color: ', ';\n'],
      ['\n  font-size: 1.125rem;\n  color: ', ';\n']
    )),
  Colors.darkGrey
);
exports.button = styled_components_1.css(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  font-size: 1.125rem;\n  color: ', ';\n'],
      ['\n  font-size: 1.125rem;\n  color: ', ';\n']
    )),
  Colors.white
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5;
//# sourceMappingURL=typography.js.map
