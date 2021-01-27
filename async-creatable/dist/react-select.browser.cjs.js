'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var async_dist_reactSelect = require('../../async/dist/react-select.browser.cjs.js');
var creatable_dist_reactSelect = require('../../creatable/dist/react-select.browser.cjs.js');
var stateManager = require('../../dist/stateManager-3a752181.browser.cjs.js');
var base_dist_reactSelect = require('../../dist/Select-c56dccd3.browser.cjs.js');
require('@babel/runtime/helpers/extends');
require('@babel/runtime/helpers/objectWithoutProperties');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/inherits');
require('../../dist/index-a3a50fbb.browser.cjs.js');
require('@babel/runtime/helpers/typeof');
require('@emotion/core');
require('@emotion/css');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('react-input-autosize');
require('@babel/runtime/helpers/defineProperty');
require('react');
require('react-dom');
require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/assertThisInitialized');
require('memoize-one');

var SelectCreatable = creatable_dist_reactSelect.makeCreatableSelect(base_dist_reactSelect.Select);
var SelectCreatableState = stateManager.manageState(SelectCreatable);
var AsyncCreatable = async_dist_reactSelect.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
