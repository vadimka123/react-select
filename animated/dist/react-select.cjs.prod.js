"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _objectWithoutProperties = require("@babel/runtime/helpers/objectWithoutProperties"), _extends = require("@babel/runtime/helpers/extends"), _defineProperty = require("@babel/runtime/helpers/defineProperty"), _classCallCheck = require("@babel/runtime/helpers/classCallCheck"), _createClass = require("@babel/runtime/helpers/createClass"), _inherits = require("@babel/runtime/helpers/inherits"), _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn"), _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf"), React = require("react"), memoizeOne = require("memoize-one");

require("@emotion/core"), require("react-dom"), require("@babel/runtime/helpers/typeof");

var index$1 = require("../../dist/index-6196fd68.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteral"), 
require("react-input-autosize");

var reactTransitionGroup = require("react-transition-group");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var _objectWithoutProperties__default = _interopDefault(_objectWithoutProperties), _extends__default = _interopDefault(_extends), _defineProperty__default = _interopDefault(_defineProperty), _classCallCheck__default = _interopDefault(_classCallCheck), _createClass__default = _interopDefault(_createClass), _inherits__default = _interopDefault(_inherits), _possibleConstructorReturn__default = _interopDefault(_possibleConstructorReturn), _getPrototypeOf__default = _interopDefault(_getPrototypeOf), React__default = _interopDefault(React), memoizeOne__default = _interopDefault(memoizeOne), AnimatedInput = function(WrappedComponent) {
  return function(_ref) {
    _ref.in, _ref.onExited, _ref.appear, _ref.enter, _ref.exit;
    var props = _objectWithoutProperties__default.default(_ref, [ "in", "onExited", "appear", "enter", "exit" ]);
    return React__default.default.createElement(WrappedComponent, props);
  };
};

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

var Fade = function(_ref) {
  var Tag = _ref.component, _ref$duration = _ref.duration, duration = void 0 === _ref$duration ? 1 : _ref$duration, inProp = _ref.in, props = (_ref.onExited, 
  _objectWithoutProperties__default.default(_ref, [ "component", "duration", "in", "onExited" ])), transition = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity ".concat(duration, "ms")
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return React__default.default.createElement(reactTransitionGroup.Transition, {
    mountOnEnter: !0,
    unmountOnExit: !0,
    in: inProp,
    timeout: duration
  }, (function(state) {
    var innerProps = {
      style: _objectSpread({}, transition[state])
    };
    return React__default.default.createElement(Tag, _extends__default.default({
      innerProps: innerProps
    }, props));
  }));
}, collapseDuration = 260, Collapse = function(_Component) {
  _inherits__default.default(Collapse, _Component);
  var _super = _createSuper(Collapse);
  function Collapse() {
    var _this;
    _classCallCheck__default.default(this, Collapse);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
    return (_this = _super.call.apply(_super, [ this ].concat(args))).duration = collapseDuration, 
    _this.rafID = void 0, _this.state = {
      width: "auto"
    }, _this.transition = {
      exiting: {
        width: 0,
        transition: "width ".concat(_this.duration, "ms ease-out")
      },
      exited: {
        width: 0
      }
    }, _this.getWidth = function(ref) {
      ref && isNaN(_this.state.width) && (_this.rafID = window.requestAnimationFrame((function() {
        var width = ref.getBoundingClientRect().width;
        _this.setState({
          width: width
        });
      })));
    }, _this.getStyle = function(width) {
      return {
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: width
      };
    }, _this.getTransition = function(state) {
      return _this.transition[state];
    }, _this;
  }
  return _createClass__default.default(Collapse, [ {
    key: "componentWillUnmount",
    value: function() {
      this.rafID && window.cancelAnimationFrame(this.rafID);
    }
  }, {
    key: "render",
    value: function() {
      var _this2 = this, _this$props = this.props, children = _this$props.children, inProp = _this$props.in, width = this.state.width;
      return React__default.default.createElement(reactTransitionGroup.Transition, {
        enter: !1,
        mountOnEnter: !0,
        unmountOnExit: !0,
        in: inProp,
        timeout: this.duration
      }, (function(state) {
        var style = _objectSpread(_objectSpread({}, _this2.getStyle(width)), _this2.getTransition(state));
        return React__default.default.createElement("div", {
          ref: _this2.getWidth,
          style: style
        }, children);
      }));
    }
  } ]), Collapse;
}(React.Component), AnimatedMultiValue = function(WrappedComponent) {
  return function(_ref) {
    var inProp = _ref.in, onExited = _ref.onExited, props = _objectWithoutProperties__default.default(_ref, [ "in", "onExited" ]);
    return React__default.default.createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, React__default.default.createElement(WrappedComponent, _extends__default.default({
      cropWithEllipsis: inProp
    }, props)));
  };
}, AnimatedPlaceholder = function(WrappedComponent) {
  return function(props) {
    return React__default.default.createElement(Fade, _extends__default.default({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
}, AnimatedSingleValue = function(WrappedComponent) {
  return function(props) {
    return React__default.default.createElement(Fade, _extends__default.default({
      component: WrappedComponent
    }, props));
  };
}, AnimatedValueContainer = function(WrappedComponent) {
  return function(props) {
    return React__default.default.createElement(reactTransitionGroup.TransitionGroup, _extends__default.default({
      component: WrappedComponent
    }, props));
  };
};

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter((function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    }))), keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach((function(key) {
      _defineProperty__default.default(target, key, source[key]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach((function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    }));
  }
  return target;
}

var makeAnimated = function() {
  var externalComponents = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, components = index$1.defaultComponents({
    components: externalComponents
  }), Input = components.Input, MultiValue = components.MultiValue, Placeholder = components.Placeholder, SingleValue = components.SingleValue, ValueContainer = components.ValueContainer, rest = _objectWithoutProperties__default.default(components, [ "Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer" ]);
  return _objectSpread$1({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
}, AnimatedComponents = makeAnimated(), Input = AnimatedComponents.Input, MultiValue = AnimatedComponents.MultiValue, Placeholder = AnimatedComponents.Placeholder, SingleValue = AnimatedComponents.SingleValue, ValueContainer = AnimatedComponents.ValueContainer, index = memoizeOne__default.default(makeAnimated, index$1.exportedEqual);

exports.Input = Input, exports.MultiValue = MultiValue, exports.Placeholder = Placeholder, 
exports.SingleValue = SingleValue, exports.ValueContainer = ValueContainer, exports.default = index;
