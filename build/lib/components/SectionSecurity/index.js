'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var Style = require('./style');
var P_1 = require('components/P');
var shield_svg_1 = require('./shield.svg');
var SectionSecurity = function() {
  return react_1.default.createElement(
    Style.Container,
    null,
    react_1.default.createElement(
      Style.Wrapper,
      null,
      react_1.default.createElement(Style.Illustration, {
        as: shield_svg_1.default,
      }),
      react_1.default.createElement(
        Style.Title,
        null,
        'Confidentialit\u00E9 et s\u00E9curit\u00E9'
      ),
      react_1.default.createElement(
        P_1.default,
        null,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur mollis tortor nec consectetur. Mauris varius enim non accumsan pulvinar. Ut pretium eu augue eu faucibus.'
      )
    )
  );
};
exports.default = SectionSecurity;
//# sourceMappingURL=index.js.map
