'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var Style = require('./style');
var Topbar_1 = require('components/Topbar');
var SignUpForm_1 = require('containers/SignUpForm');
var weird_shape_svg_1 = require('./weird-shape.svg');
var Header = function() {
  return react_1.default.createElement(
    Style.Container,
    null,
    react_1.default.createElement(Topbar_1.default, null),
    react_1.default.createElement(
      Style.Wrapper,
      null,
      react_1.default.createElement(
        Style.Title,
        null,
        "Obtenez le soutien d'un professionnel depuis le comfort de votre canap\u00E9"
      ),
      react_1.default.createElement(
        Style.P,
        null,
        'Nous traversons tous des p\u00E9riodes difficiles dans nos vies. Parler \u00E0 un professionnel de la psychologie avec un avis neutre peut toujours aider, m\u00EAme quand on se dit ne pas en avoir besoin.'
      ),
      react_1.default.createElement(SignUpForm_1.default, null)
    ),
    react_1.default.createElement(Style.IllustrationDesktop, {
      as: weird_shape_svg_1.default,
    })
  );
};
exports.default = Header;
//# sourceMappingURL=index.js.map
