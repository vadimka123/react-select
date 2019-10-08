"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("@babel/runtime/helpers/objectWithoutPropertiesLoose"), require("@babel/runtime/helpers/extends"), 
require("@babel/runtime/helpers/assertThisInitialized"), require("@babel/runtime/helpers/inheritsLoose"), 
require("react"), require("memoize-one"), require("@emotion/core"), require("react-dom"), 
require("prop-types"), require("../../dist/utils-2db2ca57.cjs.prod.js"), require("../../dist/index-fbdc55b0.cjs.prod.js");

var reactSelect = require("../../dist/Select-2ee2399b.cjs.prod.js");

require("@emotion/css"), require("@babel/runtime/helpers/taggedTemplateLiteralLoose"), 
require("react-input-autosize");

var stateManager = require("../../dist/stateManager-c92c1526.cjs.prod.js"), reactSelect$1 = require("../../async/dist/react-select.cjs.prod.js"), reactSelect$2 = require("../../creatable/dist/react-select.cjs.prod.js"), SelectCreatable = reactSelect$2.makeCreatableSelect(reactSelect.Select), SelectCreatableState = stateManager.manageState(SelectCreatable), AsyncCreatable = reactSelect$1.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
