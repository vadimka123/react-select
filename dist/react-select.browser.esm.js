import '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/assertThisInitialized';
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { CacheProvider } from '@emotion/core';
import 'react-dom';
import 'prop-types';
import './utils-496ce688.browser.esm.js';
export { y as components } from './index-959fcf3d.browser.esm.js';
import { S as Select } from './Select-8b3d4c31.browser.esm.js';
export { c as createFilter, a as defaultTheme, m as mergeStyles } from './Select-8b3d4c31.browser.esm.js';
import '@emotion/css';
import '@babel/runtime/helpers/esm/taggedTemplateLiteralLoose';
import 'react-input-autosize';
import { m as manageState } from './stateManager-0a2faafb.browser.esm.js';
import createCache from '@emotion/cache';

var NonceProvider =
/*#__PURE__*/
function (_Component) {
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
    return React.createElement(CacheProvider, {
      value: emotionCache
    }, this.props.children);
  };

  return NonceProvider;
}(Component);

var index = manageState(Select);

export default index;
export { NonceProvider };
