'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@babel/runtime/helpers/objectWithoutProperties');
require('@babel/runtime/helpers/extends');
require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/toConsumableArray');
require('../../dist/index-f305b8a6.cjs.dev.js');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/assertThisInitialized');
require('@babel/runtime/helpers/inherits');
require('react');
require('memoize-one');
require('@babel/runtime/helpers/defineProperty');
require('@emotion/core');
require('react-dom');
require('@babel/runtime/helpers/typeof');
var base_dist_reactSelect = require('../../dist/Select-3d61464e.cjs.dev.js');
require('@emotion/css');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('react-input-autosize');
var stateManager = require('../../dist/stateManager-522df67b.cjs.dev.js');
var async_dist_reactSelect = require('../../async/dist/react-select.cjs.dev.js');
var creatable_dist_reactSelect = require('../../creatable/dist/react-select.cjs.dev.js');

var SelectCreatable = creatable_dist_reactSelect.makeCreatableSelect(base_dist_reactSelect.Select);
var SelectCreatableState = stateManager.manageState(SelectCreatable);
var AsyncCreatable = async_dist_reactSelect.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
