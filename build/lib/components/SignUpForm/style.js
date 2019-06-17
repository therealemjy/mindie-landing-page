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
var Colors = require('styles/colors');
var Spacing = require('styles/spacing');
var Typography = require('styles/typography');
exports.Container = styled_components_1.default.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  width: 100%;\n  max-width: ', 'px;\n'],
      ['\n  width: 100%;\n  max-width: ', 'px;\n']
    )),
  Spacing.base * 54
);
exports.Form = styled_components_1.default.form(
  templateObject_2 || (templateObject_2 = __makeTemplateObject([''], ['']))
);
exports.ControlRow = styled_components_1.default.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  position: relative;\n  display: flex;\n'],
      ['\n  position: relative;\n  display: flex;\n']
    ))
);
exports.Label = styled_components_1.default.label(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ['\n  display: block;\n  font-weight: ', ';\n  margin-bottom: ', 'px;\n'],
      ['\n  display: block;\n  font-weight: ', ';\n  margin-bottom: ', 'px;\n']
    )),
  Typography.weight.demiBold,
  Spacing.base
);
var inputsCss = styled_components_1.css(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  border-radius: ',
        'px;\n  border: 1px solid transparent;\n  outline: 0;\n  padding: ',
        'px;\n',
      ],
      [
        '\n  border-radius: ',
        'px;\n  border: 1px solid transparent;\n  outline: 0;\n  padding: ',
        'px;\n',
      ]
    )),
  Spacing.base,
  Spacing.base * 2
);
exports.Input = styled_components_1.default.input(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  ',
        ';\n\n  flex: 1;\n  background-color: ',
        ';\n\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ',
        ';\n  }\n  :-ms-input-placeholder {\n    color: ',
        ';\n  }\n',
      ],
      [
        '\n  ',
        ';\n  ',
        ';\n\n  flex: 1;\n  background-color: ',
        ';\n\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ',
        ';\n  }\n  :-ms-input-placeholder {\n    color: ',
        ';\n  }\n',
      ]
    )),
  Typography.input,
  inputsCss,
  Colors.almostWhite,
  Colors.lightGrey,
  Colors.lightGrey
);
exports.SubmitButton = styled_components_1.default.button(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  ',
        ';\n\n  background-color: ',
        ';\n  margin-left: ',
        'px;\n  cursor: pointer;\n\n  :hover {\n    background-color: ',
        ';\n  }\n',
      ],
      [
        '\n  ',
        ';\n  ',
        ';\n\n  background-color: ',
        ';\n  margin-left: ',
        'px;\n  cursor: pointer;\n\n  :hover {\n    background-color: ',
        ';\n  }\n',
      ]
    )),
  Typography.button,
  inputsCss,
  Colors.azure,
  Spacing.base * 2,
  Colors.green
);
exports.Select = styled_components_1.default.select(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  ',
        ';\n\n  cursor: pointer;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: ',
        ';\n  padding-right: ',
        'px;\n',
      ],
      [
        '\n  ',
        ';\n  ',
        ';\n\n  cursor: pointer;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: ',
        ';\n  padding-right: ',
        'px;\n',
      ]
    )),
  Typography.input,
  inputsCss,
  Colors.almostWhite,
  Spacing.base * 6
);
exports.Icon = styled_components_1.default.img(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      [
        '\n  cursor: pointer;\n  width: ',
        'px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: ',
        'px;\n  margin: auto;\n',
      ],
      [
        '\n  cursor: pointer;\n  width: ',
        'px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: ',
        'px;\n  margin: auto;\n',
      ]
    )),
  Spacing.base * 3,
  Spacing.base * 2
);
exports.EndMessage = styled_components_1.default.span(
  templateObject_10 ||
    (templateObject_10 = __makeTemplateObject(
      ['\n  ', ';\n\n  font-weight: ', ';\n  color: ', ';\n'],
      ['\n  ', ';\n\n  font-weight: ', ';\n  color: ', ';\n']
    )),
  Typography.paragraph,
  Typography.weight.demiBold,
  Colors.green
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10;
//# sourceMappingURL=style.js.map
