'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var Style = require('./style');
var Footer = function() {
  return react_1.default.createElement(
    Style.Wrapper,
    null,
    react_1.default.createElement(
      Style.Title,
      null,
      'Pas de stigma. Pas de tabous.'
    ),
    react_1.default.createElement(Style.SignUpForm, null),
    react_1.default.createElement(
      Style.WarningTitle,
      null,
      "Si votre sant\u00E9 est en danger, n'utilisez pas ce site. Appelez le 15."
    ),
    react_1.default.createElement(
      Style.Infos,
      null,
      react_1.default.createElement(
        Style.Copyright,
        null,
        'Copyright \u00A9 ',
        new Date().getFullYear()
      ),
      react_1.default.createElement(
        Style.Contact,
        { href: 'mailto:bonjour@mindie.app' },
        'Contactez-nous'
      )
    )
  );
};
exports.default = Footer;
//# sourceMappingURL=index.js.map
