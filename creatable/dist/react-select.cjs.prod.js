"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("@babel/runtime/helpers/objectWithoutProperties");

var _extends = require("@babel/runtime/helpers/extends");

require("@babel/runtime/helpers/slicedToArray");

var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray"), _defineProperty = require("@babel/runtime/helpers/defineProperty"), _classCallCheck = require("@babel/runtime/helpers/classCallCheck"), _createClass = require("@babel/runtime/helpers/createClass");

require("@babel/runtime/helpers/assertThisInitialized");

var _inherits = require("@babel/runtime/helpers/inherits"), _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn"), _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf"), React = require("react");

require("memoize-one"), require("@emotion/core"), require("react-dom"), require("@babel/runtime/helpers/typeof");

var index = require("../../dist/index-6196fd68.cjs.prod.js"), base_dist_reactSelect = require("../../dist/Select-5747cfc0.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize");

var stateManager = require("../../dist/stateManager-f244de42.cjs.prod.js");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var _extends__default = _interopDefault(_extends), _toConsumableArray__default = _interopDefault(_toConsumableArray), _defineProperty__default = _interopDefault(_defineProperty), _classCallCheck__default = _interopDefault(_classCallCheck), _createClass__default = _interopDefault(_createClass), _inherits__default = _interopDefault(_inherits), _possibleConstructorReturn__default = _interopDefault(_possibleConstructorReturn), _getPrototypeOf__default = _interopDefault(_getPrototypeOf), React__default = _interopDefault(React);

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter((function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    }))), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
      _defineProperty__default.default(target, key, source[key]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    }));
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
    return !(!inputValue || selectValue.some((function(option) {
      return compareOption(inputValue, option);
    })) || selectOptions.some((function(option) {
      return compareOption(inputValue, option);
    })));
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
    _inherits__default.default(Creatable, _Component);
    var _super = _createSuper(Creatable);
    function Creatable(props) {
      var _this;
      _classCallCheck__default.default(this, Creatable), (_this = _super.call(this, props)).select = void 0, 
      _this.onChange = function(newValue, actionMeta) {
        var _this$props = _this.props, getNewOptionData = _this$props.getNewOptionData, inputValue = _this$props.inputValue, isMulti = _this$props.isMulti, onChange = _this$props.onChange, onCreateOption = _this$props.onCreateOption, value = _this$props.value, name = _this$props.name;
        if ("select-option" !== actionMeta.action) return onChange(newValue, actionMeta);
        var newOption = _this.state.newOption, valueArray = Array.isArray(newValue) ? newValue : [ newValue ];
        if (valueArray[valueArray.length - 1] !== newOption) onChange(newValue, actionMeta); else if (onCreateOption) onCreateOption(inputValue); else {
          var newOptionData = getNewOptionData(inputValue, inputValue), newActionMeta = {
            action: "create-option",
            name: name
          };
          onChange(isMulti ? [].concat(_toConsumableArray__default.default(index.cleanValue(value)), [ newOptionData ]) : newOptionData, newActionMeta);
        }
      };
      var options = props.options || [];
      return _this.state = {
        newOption: void 0,
        options: options
      }, _this;
    }
    return _createClass__default.default(Creatable, [ {
      key: "UNSAFE_componentWillReceiveProps",
      value: function(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading, createOptionPosition = nextProps.createOptionPosition, formatCreateLabel = nextProps.formatCreateLabel, getNewOptionData = nextProps.getNewOptionData, inputValue = nextProps.inputValue, isLoading = nextProps.isLoading, isValidNewOption = nextProps.isValidNewOption, value = nextProps.value, options = nextProps.options || [], newOption = this.state.newOption;
        newOption = isValidNewOption(inputValue, index.cleanValue(value), options) ? getNewOptionData(inputValue, formatCreateLabel(inputValue)) : void 0, 
        this.setState({
          newOption: newOption,
          options: !allowCreateWhileLoading && isLoading || !newOption ? options : "first" === createOptionPosition ? [ newOption ].concat(_toConsumableArray__default.default(options)) : [].concat(_toConsumableArray__default.default(options), [ newOption ])
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
        var _this2 = this, options = this.state.options;
        return React__default.default.createElement(SelectComponent, _extends__default.default({}, this.props, {
          ref: function(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    } ]), Creatable;
  }(React.Component), _class.defaultProps = defaultProps, _temp;
}, SelectCreatable = makeCreatableSelect(base_dist_reactSelect.Select), Creatable = stateManager.manageState(SelectCreatable);

exports.default = Creatable, exports.defaultProps = defaultProps, exports.makeCreatableSelect = makeCreatableSelect;
