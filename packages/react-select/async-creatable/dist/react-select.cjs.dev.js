'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

require("@babel/runtime/helpers/objectWithoutProperties");

require("@babel/runtime/helpers/extends");

require("@babel/runtime/helpers/toConsumableArray");

require("@babel/runtime/helpers/objectSpread");

require("@babel/runtime/helpers/classCallCheck");

require("@babel/runtime/helpers/createClass");

require("@babel/runtime/helpers/possibleConstructorReturn");

require("@babel/runtime/helpers/getPrototypeOf");

require("@babel/runtime/helpers/assertThisInitialized");

require("@babel/runtime/helpers/inherits");

require("@babel/runtime/helpers/defineProperty");

require('react');

require('memoize-one');

require('@emotion/core');

require('react-dom');

require('prop-types');

require("@babel/runtime/helpers/typeof");

require('raf');

require('../../dist/chunk-c9662232.cjs.dev.js');

require('../../dist/chunk-50137db3.cjs.dev.js');

var reactSelect = require('../../base/dist/react-select.cjs.dev.js');

require('@emotion/css');

require("@babel/runtime/helpers/taggedTemplateLiteral");

require('react-input-autosize');

var __chunk_3 = require('../../dist/chunk-d117fa1a.cjs.dev.js');

var reactSelect$1 = require('../../async/dist/react-select.cjs.dev.js');

var reactSelect$2 = require('../../creatable/dist/react-select.cjs.dev.js');

var SelectCreatable = reactSelect$2.makeCreatableSelect(reactSelect.default);

var SelectCreatableState = __chunk_3.manageState(SelectCreatable);

var AsyncCreatable = reactSelect$1.makeAsyncSelect(SelectCreatableState);
exports.default = AsyncCreatable;
