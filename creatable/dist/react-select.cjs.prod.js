"use strict";

function _interopDefault(ex) {
  return ex && "object" == typeof ex && "default" in ex ? ex.default : ex;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("@babel/runtime/helpers/objectWithoutProperties");

var _extends = _interopDefault(require("@babel/runtime/helpers/extends")), _toConsumableArray = _interopDefault(require("@babel/runtime/helpers/toConsumableArray")), _classCallCheck = _interopDefault(require("@babel/runtime/helpers/classCallCheck")), _createClass = _interopDefault(require("@babel/runtime/helpers/createClass")), _possibleConstructorReturn = _interopDefault(require("@babel/runtime/helpers/possibleConstructorReturn")), _getPrototypeOf = _interopDefault(require("@babel/runtime/helpers/getPrototypeOf")), _assertThisInitialized = _interopDefault(require("@babel/runtime/helpers/assertThisInitialized")), _inherits = _interopDefault(require("@babel/runtime/helpers/inherits")), _defineProperty = _interopDefault(require("@babel/runtime/helpers/defineProperty")), React = require("react"), React__default = _interopDefault(React);

require("memoize-one"), require("@emotion/core"), require("react-dom"), require("prop-types"), 
require("@babel/runtime/helpers/typeof"), require("raf");

var utils = require("../../dist/utils-0597d710.cjs.prod.js");

require("../../dist/index-103894a4.cjs.prod.js");

var reactSelect = require("../../dist/Select-d996f398.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize");

var stateManager = require("../../dist/stateManager-37bb71fd.cjs.prod.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(source, !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(source).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

var compareOption = function() {
  var inputValue = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", option = arguments.length > 1 ? arguments[1] : void 0, candidate = String(inputValue).toLowerCase(), optionValue = String(option.value).toLowerCase(), optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
}, builtins = {
  formatCreateLabel: function(inputValue) {
    return 'Create "'.concat(inputValue, '"');
  },
  isValidNewOption: function(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function(option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function(option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: !0
    };
  }
}, defaultProps = _objectSpread({
  allowCreateWhileLoading: !1,
  createOptionPosition: "last"
}, builtins), makeCreatableSelect = function(SelectComponent) {
  var _class, _temp;
  return _temp = _class = function(_Component) {
    function Creatable(props) {
      var _this;
      _classCallCheck(this, Creatable), _this = _possibleConstructorReturn(this, _getPrototypeOf(Creatable).call(this, props)), 
      _defineProperty(_assertThisInitialized(_this), "select", void 0), _defineProperty(_assertThisInitialized(_this), "onChange", function(newValue, actionMeta) {
        var _this$props = _this.props, getNewOptionData = _this$props.getNewOptionData, inputValue = _this$props.inputValue, isMulti = _this$props.isMulti, onChange = _this$props.onChange, onCreateOption = _this$props.onCreateOption, value = _this$props.value;
        if ("select-option" !== actionMeta.action) return onChange(newValue, actionMeta);
        var newOption = _this.state.newOption, valueArray = Array.isArray(newValue) ? newValue : [ newValue ];
        if (valueArray[valueArray.length - 1] !== newOption) onChange(newValue, actionMeta); else if (onCreateOption) onCreateOption(inputValue); else {
          var newOptionData = getNewOptionData(inputValue, inputValue), newActionMeta = {
            action: "create-option"
          };
          onChange(isMulti ? [].concat(_toConsumableArray(utils.cleanValue(value)), [ newOptionData ]) : newOptionData, newActionMeta);
        }
      });
      var options = props.options || [];
      return _this.state = {
        newOption: void 0,
        options: options
      }, _this;
    }
    return _inherits(Creatable, _Component), _createClass(Creatable, [ {
      key: "UNSAFE_componentWillReceiveProps",
      value: function(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading, createOptionPosition = nextProps.createOptionPosition, formatCreateLabel = nextProps.formatCreateLabel, getNewOptionData = nextProps.getNewOptionData, inputValue = nextProps.inputValue, isLoading = nextProps.isLoading, isValidNewOption = nextProps.isValidNewOption, value = nextProps.value, options = nextProps.options || [], newOption = this.state.newOption;
        newOption = isValidNewOption(inputValue, utils.cleanValue(value), options) ? getNewOptionData(inputValue, formatCreateLabel(inputValue)) : void 0, 
        this.setState({
          newOption: newOption,
          options: !allowCreateWhileLoading && isLoading || !newOption ? options : "first" === createOptionPosition ? [ newOption ].concat(_toConsumableArray(options)) : [].concat(_toConsumableArray(options), [ newOption ])
        });
      }
    }, {
      key: "focus",
      value: function() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function() {
        var _this2 = this, props = _extends({}, this.props), options = this.state.options;
        return React__default.createElement(SelectComponent, _extends({}, props, {
          ref: function(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    } ]), Creatable;
  }(React.Component), _defineProperty(_class, "defaultProps", defaultProps), _temp;
}, SelectCreatable = makeCreatableSelect(reactSelect.Select), Creatable = stateManager.manageState(SelectCreatable);

exports.default = Creatable, exports.defaultProps = defaultProps, exports.makeCreatableSelect = makeCreatableSelect;
