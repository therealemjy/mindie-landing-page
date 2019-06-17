'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var SEO_1 = require('components/SEO');
var Header_1 = require('components/Header');
var SectionSecurity_1 = require('components/SectionSecurity');
var Footer_1 = require('components/Footer');
var api_1 = require('libs/api');
var api_2 = require('contexts/api');
var registration_1 = require('contexts/registration');
var App = function() {
  // Note: ideally this side-effect should be stored in a separate container, but because of
  // how  Gatsby generates pages we can't do that without complicated changes to the structure
  var _a = react_1.useState(undefined),
    apiDriver = _a[0],
    setApiDriver = _a[1];
  react_1.useEffect(function() {
    return setApiDriver(new api_1.default());
  }, []);
  return react_1.default.createElement(
    registration_1.default.Provider,
    null,
    react_1.default.createElement(
      api_2.default.Provider,
      { value: apiDriver },
      react_1.default.createElement(SEO_1.default, {
        title: 'Mindie App | Sois heureux wesh',
        description: '',
      }),
      react_1.default.createElement(Header_1.default, null),
      react_1.default.createElement(SectionSecurity_1.default, null),
      react_1.default.createElement(Footer_1.default, null)
    )
  );
};
exports.default = App;
//# sourceMappingURL=index.js.map
