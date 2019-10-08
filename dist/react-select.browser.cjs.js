'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

require("@babel/runtime/helpers/objectWithoutPropertiesLoose");

require("@babel/runtime/helpers/extends");

require("@babel/runtime/helpers/assertThisInitialized");

var _inheritsLoose = _interopDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = require('react');

var React__default = _interopDefault(React);

var memoizeOne = _interopDefault(require('memoize-one'));

var core = require('@emotion/core');

require('react-dom');

require('prop-types');

require('./utils-896a48cb.browser.cjs.js');

var index$1 = require('./index-09f5bdbf.browser.cjs.js');

var reactSelect = require('./Select-df4c902e.browser.cjs.js');

require('@emotion/css');

require("@babel/runtime/helpers/taggedTemplateLiteralLoose");

require('react-input-autosize');

var stateManager = require('./stateManager-bf434fde.browser.cjs.js');

var createCache = _interopDefault(require('@emotion/cache'));

var NonceProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.createEmotionCache = function (nonce) {
      return createCache({
        nonce: nonce
      });
    };

    _this.createEmotionCache = memoizeOne(_this.createEmotionCache);
    return _this;
  }

  var _proto = NonceProvider.prototype;

  _proto.render = function render() {
    var emotionCache = this.createEmotionCache(this.props.nonce);
    return React__default.createElement(core.CacheProvider, {
      value: emotionCache
    }, this.props.children);
  };

  return NonceProvider;
}(React.Component);

var index = stateManager.manageState(reactSelect.Select);
exports.components = index$1.components;
exports.createFilter = reactSelect.createFilter;
exports.defaultTheme = reactSelect.defaultTheme;
exports.mergeStyles = reactSelect.mergeStyles;
exports.NonceProvider = NonceProvider;
exports.default = index;
