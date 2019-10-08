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

require('../../dist/utils-03a02e63.cjs.dev.js');

require('../../dist/index-9fda4fea.cjs.dev.js');

var reactSelect = require('../../dist/Select-3d087342.cjs.dev.js');

require('@emotion/css');

require("@babel/runtime/helpers/taggedTemplateLiteralLoose");

require('react-input-autosize');

var stateManager = require('../../dist/stateManager-5d29e01a.cjs.dev.js');

var reactSelect$1 = require('../../async/dist/react-select.cjs.dev.js');

var reactSelect$2 = require('../../creatable/dist/react-select.cjs.dev.js');

var SelectCreatable = reactSelect$2.makeCreatableSelect(reactSelect.Select);
var SelectCreatableState = stateManager.manageState(SelectCreatable);
var AsyncCreatable = reactSelect$1.makeAsyncSelect(SelectCreatableState);
exports.default = AsyncCreatable;
