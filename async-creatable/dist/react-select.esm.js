import '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/assertThisInitialized';
import '@babel/runtime/helpers/esm/inheritsLoose';
import 'react';
import 'memoize-one';
import '@emotion/core';
import 'react-dom';
import 'prop-types';
import '../../dist/utils-a041b825.esm.js';
import '../../dist/index-fa3f2654.esm.js';
import { S as Select } from '../../dist/Select-0ac69953.esm.js';
import '@emotion/css';
import '@babel/runtime/helpers/esm/taggedTemplateLiteralLoose';
import 'react-input-autosize';
import { m as manageState } from '../../dist/stateManager-b7f44cdf.esm.js';
import { makeAsyncSelect } from '../../async/dist/react-select.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.esm.js';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
