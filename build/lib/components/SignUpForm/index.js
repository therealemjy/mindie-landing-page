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
var Style = require('./style');
var chevron_down_svg_1 = require('./chevron-down.svg');
var Motivation;
(function(Motivation) {
  Motivation['COUPLE_ISSUES'] = 'COUPLE_ISSUES';
})((Motivation = exports.Motivation || (exports.Motivation = {})));
var handleChange = function(callback) {
  return function(_a) {
    var _b = _a.currentTarget,
      name = _b.name,
      value = _b.value;
    return callback({
      name: name,
      value: value,
    });
  };
};
var SignUpForm = function(_a) {
  var step = _a.step,
    values = _a.values,
    onChange = _a.onChange,
    onSubmit = _a.onSubmit,
    className = _a.className;
  var handleSubmit = function(event) {
    // Prevent form from submitting
    event.preventDefault();
    onSubmit(step, values);
  };
  // Note: we direclty submit the form when the user selects a motivation
  var handleMotivationChange = function(_a) {
    var _b;
    var _c = _a.currentTarget,
      name = _c.name,
      value = _c.value;
    onChange({ name: name, value: value });
    onSubmit(step, __assign({}, values, ((_b = {}), (_b[name] = value), _b)));
  };
  return react_1.default.createElement(
    Style.Container,
    { className: className },
    step < 2 &&
      react_1.default.createElement(
        Style.Form,
        { onSubmit: handleSubmit },
        step === 0 &&
          react_1.default.createElement(
            react_1.default.Fragment,
            null,
            react_1.default.createElement(
              Style.Label,
              { htmlFor: 'email' },
              'Inscrivez-vous'
            ),
            react_1.default.createElement(
              Style.ControlRow,
              null,
              react_1.default.createElement(Style.Input, {
                value: values.email,
                onChange: handleChange(onChange),
                id: 'email',
                name: 'email',
                type: 'email',
                placeholder: 'Email',
              }),
              react_1.default.createElement(
                Style.SubmitButton,
                { type: 'submit' },
                'Envoyer'
              )
            )
          ),
        step === 1 &&
          react_1.default.createElement(
            react_1.default.Fragment,
            null,
            react_1.default.createElement(
              Style.Label,
              { htmlFor: 'motivation' },
              "Qu'est ce qui vous am\u00E8ne ?"
            ),
            react_1.default.createElement(
              Style.ControlRow,
              null,
              react_1.default.createElement(
                Style.Select,
                {
                  value: values.motivation,
                  defaultValue: '',
                  onChange: handleMotivationChange,
                  id: 'motivation',
                  name: 'motivation',
                },
                react_1.default.createElement(
                  'option',
                  { value: '', disabled: true },
                  'Choisissez une option'
                ),
                react_1.default.createElement(
                  'option',
                  { value: Motivation.COUPLE_ISSUES },
                  'Probl\u00E8mes de couple'
                )
              ),
              react_1.default.createElement(Style.Icon, {
                as: chevron_down_svg_1.default,
              })
            )
          )
      ),
    step === 2 &&
      react_1.default.createElement(Style.EndMessage, null, 'Merci !')
  );
};
exports.default = SignUpForm;
//# sourceMappingURL=index.js.map
