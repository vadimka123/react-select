"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
}), require("react"), require("memoize-one"), require("@emotion/core"), require("react-dom"), 
require("prop-types"), require("../../dist/index-00536dcb.cjs.prod.js");

var reactSelect = require("../../dist/Select-c695b25b.cjs.prod.js");

require("@emotion/css"), require("react-input-autosize");

var stateManager = require("../../dist/stateManager-4a6ad8f6.cjs.prod.js"), reactSelect$1 = require("../../async/dist/react-select.cjs.prod.js"), reactSelect$2 = require("../../creatable/dist/react-select.cjs.prod.js"), SelectCreatable = reactSelect$2.makeCreatableSelect(reactSelect.Select), SelectCreatableState = stateManager.manageState(SelectCreatable), AsyncCreatable = reactSelect$1.makeAsyncSelect(SelectCreatableState);

exports.default = AsyncCreatable;
