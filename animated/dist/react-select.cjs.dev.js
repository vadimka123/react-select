'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _objectWithoutPropertiesLoose = _interopDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends = _interopDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose = _interopDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = require('react');

var React__default = _interopDefault(React);

var memoizeOne = _interopDefault(require('memoize-one'));

require('@emotion/core');

require('react-dom');

require('prop-types');

require('../../dist/utils-03a02e63.cjs.dev.js');

var index$1 = require('../../dist/index-9fda4fea.cjs.dev.js');

require('@emotion/css');

require("@babel/runtime/helpers/taggedTemplateLiteralLoose");

require('react-input-autosize');

var reactTransitionGroup = require('react-transition-group'); // strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow


var AnimatedInput = function AnimatedInput(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        appear = _ref.appear,
        enter = _ref.enter,
        exit = _ref.exit,
        props = _objectWithoutPropertiesLoose(_ref, ["in", "onExited", "appear", "enter", "exit"]);

    return React__default.createElement(WrappedComponent, props);
  };
};

var Fade = function Fade(_ref) {
  var Tag = _ref.component,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      inProp = _ref.in,
      onExited = _ref.onExited,
      props = _objectWithoutPropertiesLoose(_ref, ["component", "duration", "in", "onExited"]);

  var transition = {
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
    mountOnEnter: true,
    unmountOnExit: true,
    in: inProp,
    timeout: duration
  }, function (state) {
    var innerProps = {
      style: _extends({}, transition[state])
    };
    return React__default.createElement(Tag, _extends({
      innerProps: innerProps
    }, props));
  });
}; // ==============================
// Collapse Transition
// ==============================


var collapseDuration = 260; // wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.duration = collapseDuration;
    _this.rafID = void 0;
    _this.state = {
      width: 'auto'
    };
    _this.transition = {
      exiting: {
        width: 0,
        transition: "width " + _this.duration + "ms ease-out"
      },
      exited: {
        width: 0
      }
    };

    _this.getWidth = function (ref) {
      if (ref && isNaN(_this.state.width)) {
        /*
          Here we're invoking requestAnimationFrame with a callback invoking our
          call to getBoundingClientRect and setState in order to resolve an edge case
          around portalling. Certain portalling solutions briefly remove children from the DOM
          before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
          while the Select component is in this state.
        */
        // cannot use `offsetWidth` because it is rounded
        _this.rafID = window.requestAnimationFrame(function () {
          var _ref$getBoundingClien = ref.getBoundingClientRect(),
              width = _ref$getBoundingClien.width;

          _this.setState({
            width: width
          });
        });
      }
    };

    _this.getStyle = function (width) {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: width
      };
    };

    _this.getTransition = function (state) {
      return _this.transition[state];
    };

    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.rafID) {
      window.cancelAnimationFrame(this.rafID);
    }
  } // width must be calculated; cannot transition from `undefined` to `number`
  ;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in;
    var width = this.state.width;
    return React__default.createElement(reactTransitionGroup.Transition, {
      enter: false,
      mountOnEnter: true,
      unmountOnExit: true,
      in: inProp,
      timeout: this.duration
    }, function (state) {
      var style = _extends({}, _this2.getStyle(width), {}, _this2.getTransition(state));

      return React__default.createElement("div", {
        ref: _this2.getWidth,
        style: style
      }, children);
    });
  };

  return Collapse;
}(React.Component);

var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        props = _objectWithoutPropertiesLoose(_ref, ["in", "onExited"]);

    return React__default.createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, React__default.createElement(WrappedComponent, _extends({
      cropWithEllipsis: inProp
    }, props)));
  };
};

var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return React__default.createElement(Fade, _extends({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
};

var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return React__default.createElement(Fade, _extends({
      component: WrappedComponent
    }, props));
  };
}; // make ValueContainer a transition group


var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return React__default.createElement(reactTransitionGroup.TransitionGroup, _extends({
      component: WrappedComponent
    }, props));
  };
};

var makeAnimated = function makeAnimated(externalComponents) {
  if (externalComponents === void 0) {
    externalComponents = {};
  }

  var components = index$1.defaultComponents({
    components: externalComponents
  });

  var Input = components.Input,
      MultiValue = components.MultiValue,
      Placeholder = components.Placeholder,
      SingleValue = components.SingleValue,
      ValueContainer = components.ValueContainer,
      rest = _objectWithoutPropertiesLoose(components, ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"]);

  return _extends({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
};

var AnimatedComponents = makeAnimated();
var Input = AnimatedComponents.Input;
var MultiValue = AnimatedComponents.MultiValue;
var Placeholder = AnimatedComponents.Placeholder;
var SingleValue = AnimatedComponents.SingleValue;
var ValueContainer = AnimatedComponents.ValueContainer;
var index = memoizeOne(makeAnimated, index$1.exportedEqual);
exports.Input = Input;
exports.MultiValue = MultiValue;
exports.Placeholder = Placeholder;
exports.SingleValue = SingleValue;
exports.ValueContainer = ValueContainer;
exports.default = index;
