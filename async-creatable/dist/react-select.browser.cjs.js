'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

require("@babel/runtime/helpers/objectWithoutPropertiesLoose");

require("@babel/runtime/helpers/extends");

require("@babel/runtime/helpers/assertThisInitialized");

require("@babel/runtime/helpers/inheritsLoose");

require('react');

require('memoize-one');

require('@emotion/core');

require('react-dom');

require('prop-types');

require('../../dist/utils-896a48cb.browser.cjs.js');

require('../../dist/index-09f5bdbf.browser.cjs.js');

var reactSelect = require('../../dist/Select-df4c902e.browser.cjs.js');

require('@emotion/css');

require("@babel/runtime/helpers/taggedTemplateLiteralLoose");

require('react-input-autosize');

var stateManager = require('../../dist/stateManager-bf434fde.browser.cjs.js');

var reactSelect$1 = require('../../async/dist/react-select.browser.cjs.js');

var reactSelect$2 = require('../../creatable/dist/react-select.browser.cjs.js');

var SelectCreatable = reactSelect$2.makeCreatableSelect(reactSelect.Select);
var SelectCreatableState = stateManager.manageState(SelectCreatable);
var AsyncCreatable = reactSelect$1.makeAsyncSelect(SelectCreatableState);
exports.default = AsyncCreatable;
