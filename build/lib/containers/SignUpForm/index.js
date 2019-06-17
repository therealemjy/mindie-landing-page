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
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var _this = this;
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var SignUpForm_1 = require('components/SignUpForm');
var api_1 = require('contexts/api');
var registration_1 = require('contexts/registration');
var ContainedSignUpForm = function(props) {
  var _a = react_1.useContext(registration_1.default.Context),
    state = _a.state,
    dispatch = _a.dispatch;
  var api = react_1.useContext(api_1.default);
  var handleChange = function(_a) {
    var _b;
    var name = _a.name,
      value = _a.value;
    return dispatch({
      type: registration_1.UPDATE_VALUES,
      values: ((_b = {}), (_b[name] = value), _b),
    });
  };
  var handleSubmit = function(step, values) {
    return __awaiter(_this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (
              (step === 0 && !values.email.length) ||
              (step === 1 && !values.motivation)
            ) {
              return [2 /*return*/];
            }
            if (!(step === 0 && values.email.length > 0))
              return [3 /*break*/, 2];
            // Save user's email
            return [4 /*yield*/, api.registerUser(values.email)];
          case 1:
            // Save user's email
            _a.sent();
            return [3 /*break*/, 3];
          case 2:
            if (step === 1 && values.motivation) {
              // Save user's motivation
              // Note: here we don't wait for the request to have been executed since it's the last step
              api.registerUserMotivation(values.motivation);
            }
            _a.label = 3;
          case 3:
            dispatch({ type: registration_1.INCREMENT_STEP });
            return [2 /*return*/];
        }
      });
    });
  };
  return react_1.default.createElement(
    SignUpForm_1.default,
    __assign({}, props, {
      step: state.step,
      values: state.values,
      onSubmit: handleSubmit,
      onChange: handleChange,
    })
  );
};
exports.default = ContainedSignUpForm;
//# sourceMappingURL=index.js.map
