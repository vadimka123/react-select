"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var base_dist_reactSelect = require("./Select-516c46c6.cjs.prod.js"), stateManager = require("./stateManager-0160baf5.cjs.prod.js"), _classCallCheck = require("@babel/runtime/helpers/classCallCheck"), _createClass = require("@babel/runtime/helpers/createClass"), _inherits = require("@babel/runtime/helpers/inherits"), index$1 = require("./index-703d0e4e.cjs.prod.js"), React = require("react"), core = require("@emotion/core"), createCache = require("@emotion/cache"), memoizeOne = require("memoize-one");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

require("@babel/runtime/helpers/objectWithoutProperties"), require("@babel/runtime/helpers/extends"), 
require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/toConsumableArray"), 
require("@babel/runtime/helpers/assertThisInitialized"), require("@emotion/css"), 
require("react-dom"), require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize"), require("@babel/runtime/helpers/defineProperty");

var _classCallCheck__default = _interopDefault(_classCallCheck), _createClass__default = _interopDefault(_createClass), _inherits__default = _interopDefault(_inherits), React__default = _interopDefault(React), createCache__default = _interopDefault(createCache), memoizeOne__default = _interopDefault(memoizeOne), NonceProvider = function(_Component) {
  _inherits__default.default(NonceProvider, _Component);
  var _super = index$1._createSuper(NonceProvider);
  function NonceProvider(props) {
    var _this;
    return _classCallCheck__default.default(this, NonceProvider), (_this = _super.call(this, props)).createEmotionCache = function(nonce) {
      return createCache__default.default({
        nonce: nonce
      });
    }, _this.createEmotionCache = memoizeOne__default.default(_this.createEmotionCache), 
    _this;
  }
  return _createClass__default.default(NonceProvider, [ {
    key: "render",
    value: function() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return React__default.default.createElement(core.CacheProvider, {
        value: emotionCache
      }, this.props.children);
    }
  } ]), NonceProvider;
}(React.Component), index = stateManager.manageState(base_dist_reactSelect.Select);

exports.createFilter = base_dist_reactSelect.createFilter, exports.defaultTheme = base_dist_reactSelect.defaultTheme, 
exports.mergeStyles = base_dist_reactSelect.mergeStyles, exports.components = index$1.components, 
exports.NonceProvider = NonceProvider, exports.default = index;
