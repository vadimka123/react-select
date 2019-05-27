'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

require("@babel/runtime/helpers/objectWithoutProperties");

require("@babel/runtime/helpers/extends");

require("@babel/runtime/helpers/toConsumableArray");

require("@babel/runtime/helpers/objectSpread");

var _classCallCheck = _interopDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass = _interopDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn = _interopDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf = _interopDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized = _interopDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits = _interopDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty = _interopDefault(require("@babel/runtime/helpers/defineProperty"));

var React = require('react');

var React__default = _interopDefault(React);

var memoizeOne = _interopDefault(require('memoize-one'));

var core = require('@emotion/core');

require('react-dom');

require('prop-types');

require("@babel/runtime/helpers/typeof");

require('raf');

require('./chunk-c9662232.cjs.dev.js');

var __chunk_2 = require('./chunk-50137db3.cjs.dev.js');

var reactSelect = require('../base/dist/react-select.cjs.dev.js');

require('@emotion/css');

require("@babel/runtime/helpers/taggedTemplateLiteral");

require('react-input-autosize');

var __chunk_3 = require('./chunk-d117fa1a.cjs.dev.js');

var createCache = _interopDefault(require('@emotion/cache'));

var NonceProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    _classCallCheck(this, NonceProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NonceProvider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "createEmotionCache", function (nonce) {
      return createCache({
        nonce: nonce
      });
    });

    _this.createEmotionCache = memoizeOne(_this.createEmotionCache);
    return _this;
  }

  _createClass(NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce);
      return React__default.createElement(core.CacheProvider, {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(React.Component);

var index = __chunk_3.manageState(reactSelect.default);

exports.components = __chunk_2.components;
exports.createFilter = reactSelect.undefined;
exports.defaultTheme = reactSelect.undefined;
exports.mergeStyles = reactSelect.undefined;
exports.NonceProvider = NonceProvider;
exports.default = index;
