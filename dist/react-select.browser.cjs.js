'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var memoizeOne = _interopDefault(require('memoize-one'));
var core = require('@emotion/core');
require('react-dom');
require('prop-types');
var index$1 = require('./index-2f917010.browser.cjs.js');
var reactSelect = require('./Select-90499e66.browser.cjs.js');
require('@emotion/css');
require('react-input-autosize');
var stateManager = require('./stateManager-ae44bec7.browser.cjs.js');
var createCache = _interopDefault(require('@emotion/cache'));

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NonceProvider = /*#__PURE__*/function (_Component) {
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
    return /*#__PURE__*/React__default.createElement(core.CacheProvider, {
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
