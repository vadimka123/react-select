"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("@babel/runtime/helpers/objectWithoutProperties"), require("@babel/runtime/helpers/extends"), 
require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/toConsumableArray"), 
require("@babel/runtime/helpers/defineProperty");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck"), _createClass = require("@babel/runtime/helpers/createClass");

require("@babel/runtime/helpers/assertThisInitialized");

var _inherits = require("@babel/runtime/helpers/inherits"), _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn"), _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf"), React = require("react"), memoizeOne = require("memoize-one"), core = require("@emotion/core");

require("react-dom"), require("@babel/runtime/helpers/typeof");

var index$1 = require("./index-6196fd68.cjs.prod.js"), base_dist_reactSelect = require("./Select-5747cfc0.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize");

var stateManager = require("./stateManager-f244de42.cjs.prod.js"), createCache = require("@emotion/cache");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var _classCallCheck__default = _interopDefault(_classCallCheck), _createClass__default = _interopDefault(_createClass), _inherits__default = _interopDefault(_inherits), _possibleConstructorReturn__default = _interopDefault(_possibleConstructorReturn), _getPrototypeOf__default = _interopDefault(_getPrototypeOf), React__default = _interopDefault(React), memoizeOne__default = _interopDefault(memoizeOne), createCache__default = _interopDefault(createCache);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function() {
    var result, Super = _getPrototypeOf__default.default(Derived);
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf__default.default(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else result = Super.apply(this, arguments);
    return _possibleConstructorReturn__default.default(this, result);
  };
}

function _isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), 
    !0;
  } catch (e) {
    return !1;
  }
}

var NonceProvider = function(_Component) {
  _inherits__default.default(NonceProvider, _Component);
  var _super = _createSuper(NonceProvider);
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

exports.components = index$1.components, exports.createFilter = base_dist_reactSelect.createFilter, 
exports.defaultTheme = base_dist_reactSelect.defaultTheme, exports.mergeStyles = base_dist_reactSelect.mergeStyles, 
exports.NonceProvider = NonceProvider, exports.default = index;
