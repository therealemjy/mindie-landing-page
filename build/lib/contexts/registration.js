'use strict';
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
exports.UPDATE_VALUES = 'UPDATE_VALUES';
exports.INCREMENT_STEP = 'INCREMENT_STEP';
var reducer = function(state, action) {
  switch (action.type) {
    case exports.UPDATE_VALUES:
      return __assign({}, state, {
        values: __assign({}, state.values, action.values),
      });
    case exports.INCREMENT_STEP:
      return __assign({}, state, { step: state.step + 1 });
    default:
      return;
  }
};
var initialState = {
  step: 0,
  values: {
    email: '',
    motivation: undefined,
  },
};
var Context = react_1.createContext(initialState);
var Provider = function(_a) {
  var children = _a.children;
  var _b = react_1.useReducer(reducer, initialState),
    state = _b[0],
    dispatch = _b[1];
  return react_1.default.createElement(
    Context.Provider,
    { value: { state: state, dispatch: dispatch } },
    children
  );
};
exports.default = { Context: Context, Provider: Provider };
//# sourceMappingURL=registration.js.map
