import '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/assertThisInitialized';
import '@babel/runtime/helpers/esm/inheritsLoose';
import 'react';
import 'memoize-one';
import '@emotion/core';
import 'react-dom';
import 'prop-types';
import '../../dist/utils-496ce688.browser.esm.js';
import '../../dist/index-959fcf3d.browser.esm.js';
import { S as Select } from '../../dist/Select-8b3d4c31.browser.esm.js';
import '@emotion/css';
import '@babel/runtime/helpers/esm/taggedTemplateLiteralLoose';
import 'react-input-autosize';
import { m as manageState } from '../../dist/stateManager-0a2faafb.browser.esm.js';
import { makeAsyncSelect } from '../../async/dist/react-select.browser.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.browser.esm.js';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
