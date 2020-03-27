'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('memoize-one');
require('@emotion/core');
require('react-dom');
require('prop-types');
require('../../dist/index-2440a08b.cjs.dev.js');
var reactSelect = require('../../dist/Select-31acd822.cjs.dev.js');
require('@emotion/css');
require('react-input-autosize');
var stateManager = require('../../dist/stateManager-0ee2a617.cjs.dev.js');
var reactSelect$1 = require('../../async/dist/react-select.cjs.dev.js');
var reactSelect$2 = require('../../creatable/dist/react-select.cjs.dev.js');

var SelectCreatable = reactSelect$2.makeCreatableSelect(reactSelect.Select);
var SelectCreatableState = stateManager.manageState(SelectCreatable);
var AsyncCreatable = reactSelect$1.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
