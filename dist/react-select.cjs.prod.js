"use strict";

function _interopDefault(ex) {
  return ex && "object" == typeof ex && "default" in ex ? ex.default : ex;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = require("react"), React__default = _interopDefault(React), memoizeOne = _interopDefault(require("memoize-one")), core = require("@emotion/core");

require("react-dom"), require("prop-types");

var index$1 = require("./index-00536dcb.cjs.prod.js"), reactSelect = require("./Select-c695b25b.cjs.prod.js");

require("@emotion/css"), require("react-input-autosize");

var stateManager = require("./stateManager-4a6ad8f6.cjs.prod.js"), createCache = _interopDefault(require("@emotion/cache"));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, 
  subClass.__proto__ = superClass;
}

var NonceProvider = function(_Component) {
  function NonceProvider(props) {
    var _this;
    return (_this = _Component.call(this, props) || this).createEmotionCache = function(nonce) {
      return createCache({
        nonce: nonce
      });
    }, _this.createEmotionCache = memoizeOne(_this.createEmotionCache), _this;
  }
  return _inheritsLoose(NonceProvider, _Component), NonceProvider.prototype.render = function() {
    var emotionCache = this.createEmotionCache(this.props.nonce);
    return React__default.createElement(core.CacheProvider, {
      value: emotionCache
    }, this.props.children);
  }, NonceProvider;
}(React.Component), index = stateManager.manageState(reactSelect.Select);

exports.components = index$1.components, exports.createFilter = reactSelect.createFilter, 
exports.defaultTheme = reactSelect.defaultTheme, exports.mergeStyles = reactSelect.mergeStyles, 
exports.NonceProvider = NonceProvider, exports.default = index;
