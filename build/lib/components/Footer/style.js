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
var Typography = require('styles/typography');
var Spacing = require('styles/spacing');
var Colors = require('styles/colors');
var Wrapper_1 = require('components/Wrapper');
var SignUpForm_1 = require('containers/SignUpForm');
exports.Wrapper = styled_components_1.default(Wrapper_1.default)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  text-align: center;\n'],
      ['\n  text-align: center;\n']
    ))
);
exports.Title = styled_components_1.default.h2(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(['\n  ', ';\n'], ['\n  ', ';\n'])),
  Typography.title
);
exports.SignUpForm = styled_components_1.default(SignUpForm_1.default)(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  margin: 0 auto ', 'px;\n'],
      ['\n  margin: 0 auto ', 'px;\n']
    )),
  Spacing.base * 20
);
exports.WarningTitle = styled_components_1.default.div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ['\n  color: ', ';\n  display: block;\n  margin-bottom: ', 'px;\n'],
      ['\n  color: ', ';\n  display: block;\n  margin-bottom: ', 'px;\n']
    )),
  Colors.pastelRed,
  Spacing.base
);
exports.Infos = styled_components_1.default.div(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  display: flex;\n  justify-content: center;\n  padding: ',
        'px 0;\n',
      ],
      ['\n  display: flex;\n  justify-content: center;\n  padding: ', 'px 0;\n']
    )),
  Spacing.base * 2
);
var ItemCss = styled_components_1.css(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  color: ',
        ';\n  font-size: 0.825rem;\n  padding: ',
        'px;\n  margin: 0 ',
        'px;\n',
      ],
      [
        '\n  color: ',
        ';\n  font-size: 0.825rem;\n  padding: ',
        'px;\n  margin: 0 ',
        'px;\n',
      ]
    )),
  Colors.lightGrey,
  Spacing.base,
  Spacing.base * 2
);
exports.Copyright = styled_components_1.default.span(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(['\n  ', ';\n'], ['\n  ', ';\n'])),
  ItemCss
);
exports.Contact = styled_components_1.default.a(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  text-decoration: none;\n\n  &:hover {\n    color: ',
        ';\n  }\n',
      ],
      [
        '\n  ',
        ';\n  text-decoration: none;\n\n  &:hover {\n    color: ',
        ';\n  }\n',
      ]
    )),
  ItemCss,
  Colors.azure
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8;
//# sourceMappingURL=style.js.map
