"use strict";

function _interopDefault(ex) {
  return ex && "object" == typeof ex && "default" in ex ? ex.default : ex;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _objectWithoutPropertiesLoose = _interopDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose")), _extends = _interopDefault(require("@babel/runtime/helpers/extends")), _inheritsLoose = _interopDefault(require("@babel/runtime/helpers/inheritsLoose")), React = require("react"), React__default = _interopDefault(React), memoizeOne = _interopDefault(require("memoize-one"));

require("@emotion/core"), require("react-dom"), require("prop-types"), require("../../dist/utils-2db2ca57.cjs.prod.js");

var index$1 = require("../../dist/index-fbdc55b0.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteralLoose"), 
require("react-input-autosize");

var reactTransitionGroup = require("react-transition-group"), AnimatedInput = function(WrappedComponent) {
  return function(_ref) {
    _ref.in, _ref.onExited, _ref.appear, _ref.enter, _ref.exit;
    var props = _objectWithoutPropertiesLoose(_ref, [ "in", "onExited", "appear", "enter", "exit" ]);
    return React__default.createElement(WrappedComponent, props);
  };
}, Fade = function(_ref) {
  var Tag = _ref.component, _ref$duration = _ref.duration, duration = void 0 === _ref$duration ? 1 : _ref$duration, inProp = _ref.in, props = (_ref.onExited, 
  _objectWithoutPropertiesLoose(_ref, [ "component", "duration", "in", "onExited" ])), transition = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity " + duration + "ms"
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return React__default.createElement(reactTransitionGroup.Transition, {
    mountOnEnter: !0,
    unmountOnExit: !0,
    in: inProp,
    timeout: duration
  }, function(state) {
    var innerProps = {
      style: _extends({}, transition[state])
    };
    return React__default.createElement(Tag, _extends({
      innerProps: innerProps
    }, props));
  });
}, collapseDuration = 260, Collapse = function(_Component) {
  function Collapse() {
    for (var _this, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
    return (_this = _Component.call.apply(_Component, [ this ].concat(args)) || this).duration = collapseDuration, 
    _this.rafID = void 0, _this.state = {
      width: "auto"
    }, _this.transition = {
      exiting: {
        width: 0,
        transition: "width " + _this.duration + "ms ease-out"
      },
      exited: {
        width: 0
      }
    }, _this.getWidth = function(ref) {
      ref && isNaN(_this.state.width) && (_this.rafID = window.requestAnimationFrame(function() {
        var width = ref.getBoundingClientRect().width;
        _this.setState({
          width: width
        });
      }));
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
  _inheritsLoose(Collapse, _Component);
  var _proto = Collapse.prototype;
  return _proto.componentWillUnmount = function() {
    this.rafID && window.cancelAnimationFrame(this.rafID);
  }, _proto.render = function() {
    var _this2 = this, _this$props = this.props, children = _this$props.children, inProp = _this$props.in, width = this.state.width;
    return React__default.createElement(reactTransitionGroup.Transition, {
      enter: !1,
      mountOnEnter: !0,
      unmountOnExit: !0,
      in: inProp,
      timeout: this.duration
    }, function(state) {
      var style = _extends({}, _this2.getStyle(width), {}, _this2.getTransition(state));
      return React__default.createElement("div", {
        ref: _this2.getWidth,
        style: style
      }, children);
    });
  }, Collapse;
}(React.Component), AnimatedMultiValue = function(WrappedComponent) {
  return function(_ref) {
    var inProp = _ref.in, onExited = _ref.onExited, props = _objectWithoutPropertiesLoose(_ref, [ "in", "onExited" ]);
    return React__default.createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, React__default.createElement(WrappedComponent, _extends({
      cropWithEllipsis: inProp
    }, props)));
  };
}, AnimatedPlaceholder = function(WrappedComponent) {
  return function(props) {
    return React__default.createElement(Fade, _extends({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
}, AnimatedSingleValue = function(WrappedComponent) {
  return function(props) {
    return React__default.createElement(Fade, _extends({
      component: WrappedComponent
    }, props));
  };
}, AnimatedValueContainer = function(WrappedComponent) {
  return function(props) {
    return React__default.createElement(reactTransitionGroup.TransitionGroup, _extends({
      component: WrappedComponent
    }, props));
  };
}, makeAnimated = function(externalComponents) {
  void 0 === externalComponents && (externalComponents = {});
  var components = index$1.defaultComponents({
    components: externalComponents
  }), Input = components.Input, MultiValue = components.MultiValue, Placeholder = components.Placeholder, SingleValue = components.SingleValue, ValueContainer = components.ValueContainer, rest = _objectWithoutPropertiesLoose(components, [ "Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer" ]);
  return _extends({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
}, AnimatedComponents = makeAnimated(), Input = AnimatedComponents.Input, MultiValue = AnimatedComponents.MultiValue, Placeholder = AnimatedComponents.Placeholder, SingleValue = AnimatedComponents.SingleValue, ValueContainer = AnimatedComponents.ValueContainer, index = memoizeOne(makeAnimated, index$1.exportedEqual);

exports.Input = Input, exports.MultiValue = MultiValue, exports.Placeholder = Placeholder, 
exports.SingleValue = SingleValue, exports.ValueContainer = ValueContainer, exports.default = index;
