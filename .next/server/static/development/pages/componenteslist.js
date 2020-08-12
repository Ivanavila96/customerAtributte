module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-dropdown/style.css":
/*!***********************************************!*\
  !*** ./node_modules/react-dropdown/style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/AttributeCompany.js":
/*!***********************************!*\
  !*** ./pages/AttributeCompany.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const AttCompany = props => {
  const {
    register,
    errors,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])();

  const onSubmit = (data, e) => {
    data.id = null;
    props.addAtributo(data);
    e.target.reset();
  };

  const {
    0: selectedTab,
    1: setSelectedTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const handleTabChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(selectedTabIndex => setSelectedTab(selectedTabIndex), []);
  const tabs = [{
    id: 'FormCompany',
    content: 'Properties',
    accessibilityLabel: 'All customers',
    panelID: 'all-customers-content'
  }];
  const options = [{
    label: 'None',
    value: 'None'
  }, {
    label: 'Decimal Number',
    value: 'Decimal Number'
  }, {
    label: 'Integer Number',
    value: 'Integer Number'
  }, {
    label: 'Email',
    value: 'Email'
  }, {
    label: 'URL',
    value: 'URL'
  }, {
    label: 'Letters',
    value: 'Letters'
  }, {
    label: 'Letters (a-z, A-Z) or Numbers (0-9) ',
    value: 'Letters (a-z, A-Z) or Numbers (0-9) '
  }, {
    label: 'Custom',
    value: 'Custom'
  }];
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['hidden']);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => setSelected(value), []);
  const {
    0: textFieldValue,
    1: setTextFieldValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const handleTextFieldChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => setTextFieldValue(value), []);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const handleChangePh = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => setValue(newValue), []);
  const {
    0: valueDV,
    1: setValueDV
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const handleChangeDV = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValueDV => setValueDV(newValueDV), []);
  const handleChangeNo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValueNo => setValueNo(newValueNo), []);
  const {
    0: valueNo,
    1: setValueNo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');
  const {
    0: checked,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleChangeSingle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newChecked => setChecked(newChecked), []);
  {
    /*navbar */
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    tabs: tabs,
    selected: selectedTab,
    onSelect: handleTabChange
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"].Section, null, __jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    sectioned: true,
    title: "Attribute Properties"
  }, __jsx("hr", null), __jsx("input", {
    style: {
      width: '100%',
      height: '35px'
    },
    type: "text",
    label: "Label*:",
    name: "label",
    ref: register({
      required: {
        value: true,
        message: 'Field required'
      }
    }),
    placeholder: "Your Company"
  }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx("input", {
    style: {
      width: '100%',
      height: '35px'
    },
    label: "Code:",
    placeholder: "your-company",
    ref: register({
      required: {
        value: true,
        message: 'Field required'
      }
    }),
    name: "code",
    disabled: true
  }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx("input", {
    style: {
      width: '100%',
      height: '35px'
    },
    label: "Sorting Order:",
    type: "number",
    ref: register({
      required: {
        value: true,
        message: 'Field required'
      }
    })
  }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx("p", null, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    placeholder: "Text Field",
    disabled: true
  }), __jsx("br", null), __jsx("input", {
    style: {
      width: '100%',
      height: '35px'
    },
    label: "Default value:",
    ref: register({
      required: {
        value: true,
        message: 'Field required'
      }
    })
  }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx("input", {
    style: {
      width: '100%',
      height: '35px'
    },
    label: "Placeholder:",
    ref: register({
      required: {
        value: true,
        message: 'Field required'
      }
    })
  }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    label: "Values Required",
    checked: checked,
    ref: register({
      required: {
        value: true,
        message: 'Field required'
      }
    })
  }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx("p", null, "Input Validation:"), __jsx("select", {
    style: {
      width: '100%',
      height: '35px'
    }
  }, __jsx("option", {
    value: "",
    selected: "selected"
  }), __jsx("option", {
    value: "None"
  }, "None"), __jsx("option", {
    value: "Decimal Number"
  }, "Decimal Number "), __jsx("option", {
    value: "Integer Number"
  }, "Integer Number"), __jsx("option", {
    value: "Email"
  }, "Email"), __jsx("option", {
    value: "URL"
  }, "URL"), __jsx("option", {
    value: "Letters"
  }, "Letters")), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Heading"], null, "Attribute Configuration"), __jsx("br", null), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ChoiceList"], {
    allowMultiple: true,
    choices: [{
      label: 'Show on Cart page:',
      value: 'shipping',
      helpText: 'Tick if you want to use this attribute on cart page.'
    }, {
      label: 'Show on Register page:',
      value: 'confirmation',
      helpText: 'Tick if you want to use this attribute on register page.'
    }],
    selected: selected,
    onChange: handleChange
  }), __jsx("button", {
    primary: true,
    type: "submit"
  }, "Add atribute")))))), __jsx("br", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (AttCompany);

/***/ }),

/***/ "./pages/TablaComponentes.js":
/*!***********************************!*\
  !*** ./pages/TablaComponentes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const AttributeTable = props => {
  return __jsx("table", {
    border: "1",
    cellSpacing: "8",
    cellPadding: "10",
    align: "center"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Code"), __jsx("th", null, "Label"), __jsx("th", null, "Type"), __jsx("th", null, "Sorting", __jsx("br", null), "Order"), __jsx("th", null, "Status"), __jsx("th", null, "Cart", __jsx("br", null), "page"), __jsx("th", null, "Register", __jsx("br", null), "page"), __jsx("th", null, "Action"))), __jsx("tbody", null, props.Atributos.length > 0 ? props.Atributos.map(Atributo => __jsx("tr", {
    key: Atributo.id
  }, __jsx("td", null, Atributo.code), __jsx("td", null, Atributo.label), __jsx("td", null, Atributo.Type), __jsx("td", null, Atributo.sortingorder), __jsx("td", null, Atributo.status), __jsx("td", null, Atributo.cartpage), __jsx("td", null, Atributo.registerpage), __jsx("td", null, __jsx("button", {
    className: "button muted-button"
  }, "Edit"), __jsx("button", {
    onClick: () => props.deleteAtributo(Atributo.id),
    className: "button muted-button",
    className: "button muted-button"
  }, "Delete")))) : __jsx("tr", null, __jsx("td", {
    colSpan: 8
  }, "No Atributos Found"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AttributeTable);

/***/ }),

/***/ "./pages/componenteslist.js":
/*!**********************************!*\
  !*** ./pages/componenteslist.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TablaComponentes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TablaComponentes */ "./pages/TablaComponentes.js");
/* harmony import */ var _AttributeCompany__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AttributeCompany */ "./pages/AttributeCompany.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










function Lista() {
  const AtributosData = [{
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])(),
    code: 'company',
    label: 'company',
    Type: 'Text Field',
    sortingorder: 1,
    status: 'on',
    cartpage: 'Yes',
    registerpage: 'Yes',
    accountpage: 'No',
    ordergrid: 'Yes',
    customergrid: 'Yes'
  }, {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])(),
    code: 'company',
    label: 'company',
    Type: 'Text Field',
    sortingorder: 2,
    status: 'on',
    cartpage: 'Yes',
    registerpage: 'Yes',
    accountpage: 'No',
    ordergrid: 'Yes',
    customergrid: 'Yes'
  }, {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])(),
    code: 'company',
    label: 'company',
    Type: 'Text Field',
    sortingorder: 3,
    status: 'on',
    cartpage: 'Yes',
    registerpage: 'Yes',
    accountpage: 'No',
    ordergrid: 'Yes',
    customergrid: 'Yes'
  }, {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])(),
    code: 'company',
    label: 'company',
    Type: 'Text Field',
    sortingorder: 4,
    status: 'on',
    cartpage: 'Yes',
    registerpage: 'Yes',
    accountpage: 'No',
    ordergrid: 'Yes',
    customergrid: 'Yes'
  }, {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])(),
    code: 'company',
    label: 'company',
    Type: 'Text Field',
    sortingorder: 4,
    status: 'on',
    cartpage: 'Yes',
    registerpage: 'Yes',
    accountpage: 'No',
    ordergrid: 'Yes',
    customergrid: 'Yes'
  }, {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])(),
    code: 'company',
    label: 'company',
    Type: 'Text Field',
    sortingorder: 2,
    status: 'on',
    cartpage: 'Yes',
    registerpage: 'Yes',
    accountpage: 'No',
    ordergrid: 'Yes',
    customergrid: 'Yes'
  }];
  const {
    0: Atributos,
    1: setAtributos
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(AtributosData);

  const addAtributo = Atributo => {
    Atributo.id = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
    setAtributos([...Atributos, Atributo]);
  };

  const deleteAtributo = id => {
    setAtributos(Atributos.filter(Atributo => Atributo.id !== id));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    sectioned: true,
    title: "Attributes"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    distribution: "leading"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    url: "/Index"
  }, "Home"), __jsx("p", null, "Attributes"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    distribution: "center"
  }, __jsx(_TablaComponentes__WEBPACK_IMPORTED_MODULE_6__["default"], {
    deleteAtributo: deleteAtributo,
    Atributos: Atributos
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Lista);

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/componenteslist.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LENOVO THINKPAD\Documents\react_programs\ca-app\pages\componenteslist.js */"./pages/componenteslist.js");


/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge/actions");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "@shopify/polaris-icons":
/*!*****************************************!*\
  !*** external "@shopify/polaris-icons" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris-icons");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropdown":
/*!*********************************!*\
  !*** external "react-dropdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXR0cmlidXRlQ29tcGFueS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9UYWJsYUNvbXBvbmVudGVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudGVzbGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvcG9sYXJpcy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZHJvcGRvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiQXR0Q29tcGFueSIsInByb3BzIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJoYW5kbGVTdWJtaXQiLCJ1c2VGb3JtIiwib25TdWJtaXQiLCJkYXRhIiwiZSIsImlkIiwiYWRkQXRyaWJ1dG8iLCJ0YXJnZXQiLCJyZXNldCIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJ1c2VTdGF0ZSIsImhhbmRsZVRhYkNoYW5nZSIsInVzZUNhbGxiYWNrIiwic2VsZWN0ZWRUYWJJbmRleCIsInRhYnMiLCJjb250ZW50IiwiYWNjZXNzaWJpbGl0eUxhYmVsIiwicGFuZWxJRCIsIm9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsInRleHRGaWVsZFZhbHVlIiwic2V0VGV4dEZpZWxkVmFsdWUiLCJoYW5kbGVUZXh0RmllbGRDaGFuZ2UiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZVBoIiwibmV3VmFsdWUiLCJ2YWx1ZURWIiwic2V0VmFsdWVEViIsImhhbmRsZUNoYW5nZURWIiwibmV3VmFsdWVEViIsImhhbmRsZUNoYW5nZU5vIiwibmV3VmFsdWVObyIsInNldFZhbHVlTm8iLCJ2YWx1ZU5vIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJoYW5kbGVDaGFuZ2VTaW5nbGUiLCJuZXdDaGVja2VkIiwid2lkdGgiLCJoZWlnaHQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJoZWxwVGV4dCIsIkF0dHJpYnV0ZVRhYmxlIiwiQXRyaWJ1dG9zIiwibGVuZ3RoIiwibWFwIiwiQXRyaWJ1dG8iLCJjb2RlIiwiVHlwZSIsInNvcnRpbmdvcmRlciIsInN0YXR1cyIsImNhcnRwYWdlIiwicmVnaXN0ZXJwYWdlIiwiZGVsZXRlQXRyaWJ1dG8iLCJMaXN0YSIsIkF0cmlidXRvc0RhdGEiLCJ1dWlkdjQiLCJhY2NvdW50cGFnZSIsIm9yZGVyZ3JpZCIsImN1c3RvbWVyZ3JpZCIsInNldEF0cmlidXRvcyIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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QUFDLHlEQUFEO0FBQWdCLGtCQUFjLEVBQUVzRCxjQUFoQztBQUFnRCxhQUFTLEVBQUVWO0FBQTNELElBREEsQ0FERixDQVpKLENBREU7QUFxQkQ7O0FBRWNXLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBLHdEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb21wb25lbnRlc2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJ3JlYWN0LWRyb3Bkb3duL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7Q2FyZCwgRm9ybSwgVGFicywgQ2hlY2tib3gsIENob2ljZUxpc3QsIEJ1dHRvbiwgSGVhZGluZyxFbXB0eVN0YXRlLCBBcHBQcm92aWRlcixMYXlvdXQsUGFnZSwgU3RhY2ssIEFjdGlvbkxpc3QsICBBdmF0YXIsIENvbnRleHR1YWxTYXZlQmFyLCBGb3JtTGF5b3V0LEZyYW1lLCBMb2FkaW5nLE1vZGFsLCBOYXZpZ2F0aW9uLCBTa2VsZXRvbkJvZHlUZXh0LCBTa2VsZXRvbkRpc3BsYXlUZXh0LCBTa2VsZXRvblBhZ2UsIFRleHRDb250YWluZXIsIFRleHRGaWVsZCwgVG9hc3QsIFRvcEJhciwgTGlua30gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xyXG5pbXBvcnQge0Fycm93TGVmdE1pbm9yLCBOb3RlTWFqb3JNb25vdG9uZSwgSG9tZU1ham9yTW9ub3RvbmUsIE9yZGVyc01ham9yVHdvdG9uZSwgTW9iaWxlSGFtYnVyZ2VyTWFqb3JNb25vdG9uZSwgTGlzdE1ham9yTW9ub3RvbmUsIEJhbmtNYWpvck1vbm90b25lLFRyb3VibGVzaG9vdE1ham9yTW9ub3RvbmUsU2V0dGluZ3NNYWpvck1vbm90b25lfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzLWljb25zJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWRyb3Bkb3duJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuXHJcblxyXG5jb25zdCBBdHRDb21wYW55ID0gKHByb3BzKSA9PntcclxuXHJcbiAgY29uc3R7cmVnaXN0ZXIsIGVycm9ycywgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEsIGUpID0+e1xyXG4gICAgZGF0YS5pZCA9IG51bGxcclxuICAgIHByb3BzLmFkZEF0cmlidXRvKGRhdGEpXHJcbiAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHNlbGVjdGVkVGFiSW5kZXgpID0+IHNldFNlbGVjdGVkVGFiKHNlbGVjdGVkVGFiSW5kZXgpLFxyXG4gICAgW10sXHJcbiAgKTtcclxuICBcclxuICBjb25zdCB0YWJzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogJ0Zvcm1Db21wYW55JyxcclxuICAgICAgY29udGVudDogJ1Byb3BlcnRpZXMnLFxyXG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw6ICdBbGwgY3VzdG9tZXJzJyxcclxuICAgICAgcGFuZWxJRDogJ2FsbC1jdXN0b21lcnMtY29udGVudCcsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge2xhYmVsOiAnTm9uZScsIHZhbHVlOiAnTm9uZSd9LFxyXG4gICAge2xhYmVsOiAnRGVjaW1hbCBOdW1iZXInLCB2YWx1ZTogJ0RlY2ltYWwgTnVtYmVyJ30sXHJcbiAgICB7bGFiZWw6ICdJbnRlZ2VyIE51bWJlcicsIHZhbHVlOiAnSW50ZWdlciBOdW1iZXInfSxcclxuICAgIHtsYWJlbDogJ0VtYWlsJywgdmFsdWU6ICdFbWFpbCd9LFxyXG4gICAge2xhYmVsOiAnVVJMJywgdmFsdWU6ICdVUkwnfSxcclxuICAgIHtsYWJlbDogJ0xldHRlcnMnLCB2YWx1ZTogJ0xldHRlcnMnfSxcclxuICAgIHtsYWJlbDogJ0xldHRlcnMgKGEteiwgQS1aKSBvciBOdW1iZXJzICgwLTkpICcsIHZhbHVlOiAnTGV0dGVycyAoYS16LCBBLVopIG9yIE51bWJlcnMgKDAtOSkgJ30sXHJcbiAgICB7bGFiZWw6ICdDdXN0b20nLCB2YWx1ZTogJ0N1c3RvbSd9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoWydoaWRkZW4nXSk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWxlY3RlZCh2YWx1ZSksIFtdKTtcclxuICBcclxuICBjb25zdCBbdGV4dEZpZWxkVmFsdWUsIHNldFRleHRGaWVsZFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVUZXh0RmllbGRDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgICh2YWx1ZSkgPT4gc2V0VGV4dEZpZWxkVmFsdWUodmFsdWUpLFxyXG4gICAgW10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGggPSB1c2VDYWxsYmFjaygobmV3VmFsdWUpID0+IHNldFZhbHVlKG5ld1ZhbHVlKSwgW10pO1xyXG5cclxuICBjb25zdCBbdmFsdWVEViwgc2V0VmFsdWVEVl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRFYgPSB1c2VDYWxsYmFjaygobmV3VmFsdWVEVikgPT4gc2V0VmFsdWVEVihuZXdWYWx1ZURWKSwgW10pO1xyXG5cclxuICBcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VObyA9IHVzZUNhbGxiYWNrKChuZXdWYWx1ZU5vKSA9PiBzZXRWYWx1ZU5vKG5ld1ZhbHVlTm8pLCBbXSk7XHJcbiAgY29uc3QgW3ZhbHVlTm8sIHNldFZhbHVlTm9dID0gdXNlU3RhdGUoJzEnKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNpbmdsZSA9IHVzZUNhbGxiYWNrKChuZXdDaGVja2VkKSA9PiBzZXRDaGVja2VkKG5ld0NoZWNrZWQpLCBbXSk7XHJcblxyXG4gey8qbmF2YmFyICovfVxyXG5cclxuXHJcbnJldHVybiggXHJcblxyXG48PiAgXHJcbiAgIFxyXG4gIDxQYWdlPlxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxUYWJzIHRhYnM9e3RhYnN9IHNlbGVjdGVkPXtzZWxlY3RlZFRhYn0gb25TZWxlY3Q9e2hhbmRsZVRhYkNoYW5nZX0+XHJcbiAgICA8Q2FyZC5TZWN0aW9uID5cclxuICBcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT1cIkF0dHJpYnV0ZSBQcm9wZXJ0aWVzXCI+XHJcbiAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbGFiZWw9XCJMYWJlbCo6XCJcclxuICAgICAgICAgICAgbmFtZT1cImxhYmVsXCJcclxuICAgICAgICAgICAgcmVmID17cmVnaXN0ZXIoe3JlcXVpcmVkOiB7dmFsdWU6dHJ1ZSwgbWVzc2FnZTogJ0ZpZWxkIHJlcXVpcmVkJ319KX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIENvbXBhbnlcIi8+XHJcbiAgICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICBcclxuICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgIGxhYmVsPVwiQ29kZTpcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXItY29tcGFueVwiXHJcbiAgICAgICAgICAgIHJlZiA9e3JlZ2lzdGVyKHtyZXF1aXJlZDoge3ZhbHVlOnRydWUsIG1lc3NhZ2U6ICdGaWVsZCByZXF1aXJlZCd9fSl9XHJcbiAgICAgICAgICAgIG5hbWU9XCJjb2RlXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQvPlxyXG4gICAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICBsYWJlbD1cIlNvcnRpbmcgT3JkZXI6XCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcmVmID17cmVnaXN0ZXIoe3JlcXVpcmVkOiB7dmFsdWU6dHJ1ZSwgbWVzc2FnZTogJ0ZpZWxkIHJlcXVpcmVkJ319KX1cclxuICAgICAgICAgICAvPlxyXG4gICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICBvcmRlciAoZWc6IEF0dHJpYnV0ZSB3aXRoIHNvcnRpbmcgb3JkZXIgXHJcbiAgICAgICAgICAxIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRvcCBvZiBBdHRyaWJ1dGUgMik8L3A+XHJcbiAgICAgICAgPGJyLz5cclxuICBcclxuICAgICAgICAgIDxwPlR5cGUqOjwvcD5cclxuICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPVwiVGV4dCBGaWVsZFwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICBcclxuICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICBsYWJlbD1cIkRlZmF1bHQgdmFsdWU6XCJcclxuICAgICAgICAgIHJlZiA9e3JlZ2lzdGVyKHtyZXF1aXJlZDoge3ZhbHVlOnRydWUsIG1lc3NhZ2U6ICdGaWVsZCByZXF1aXJlZCd9fSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPHA+VGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgYXR0cmlidXRlIHdoZW4gXHJcbiAgICAgICAgICAgIGl0IGlzIHNob3duIHRvIHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICBsYWJlbD1cIlBsYWNlaG9sZGVyOlwiXHJcbiAgICAgICAgICByZWYgPXtyZWdpc3Rlcih7cmVxdWlyZWQ6IHt2YWx1ZTp0cnVlLCBtZXNzYWdlOiAnRmllbGQgcmVxdWlyZWQnfX0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8cD5UaGUgcGxhY2Vob2xkZXIgc3BlY2lmaWVzIGEgc2hvcnQgaGludCBcclxuICAgICAgICAgICAgdGhhdCBkZXNjcmliZXMgdGhlIGV4cGVjdGVkIHZhbHVlIG9mIFxyXG4gICAgICAgICAgICB0aGlzIGZpZWxkPC9wPlxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgbGFiZWw9XCJWYWx1ZXMgUmVxdWlyZWRcIlxyXG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgIHJlZiA9e3JlZ2lzdGVyKHtyZXF1aXJlZDoge3ZhbHVlOnRydWUsIG1lc3NhZ2U6ICdGaWVsZCByZXF1aXJlZCd9fSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIDxwPklucHV0IFZhbGlkYXRpb246PC9wPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319ICA+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb25lXCI+Tm9uZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGVjaW1hbCBOdW1iZXJcIj5EZWNpbWFsIE51bWJlciA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkludGVnZXIgTnVtYmVyXCI+SW50ZWdlciBOdW1iZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVtYWlsXCI+RW1haWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVSTFwiPlVSTDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTGV0dGVyc1wiPkxldHRlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBDb25maWd1cmF0aW9uPC9IZWFkaW5nPiAgICBcclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGhyLz5cclxuICBcclxuICAgICAgIFxyXG4gICAgICAgICAgPENob2ljZUxpc3RcclxuICAgICAgICAgICAgICBhbGxvd011bHRpcGxlXHJcbiAgICAgICAgICAgICAgY2hvaWNlcz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ1Nob3cgb24gQ2FydCBwYWdlOicsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnc2hpcHBpbmcnLFxyXG4gICAgICAgICAgICAgICAgICBoZWxwVGV4dDpcclxuICAgICAgICAgICAgICAgICAgICAnVGljayBpZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBhdHRyaWJ1dGUgb24gY2FydCBwYWdlLicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ1Nob3cgb24gUmVnaXN0ZXIgcGFnZTonLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2NvbmZpcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIGhlbHBUZXh0OlxyXG4gICAgICAgICAgICAgICAgICAgICdUaWNrIGlmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGF0dHJpYnV0ZSBvbiByZWdpc3RlciBwYWdlLicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiAgcHJpbWFyeSB0eXBlPVwic3VibWl0XCI+QWRkIGF0cmlidXRlPC9idXR0b24+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0NhcmQuU2VjdGlvbj5cclxuICAgICAgPC9UYWJzPlxyXG4gICAgPC9DYXJkPlxyXG4gICAgPGJyLz5cclxuICA8L1BhZ2U+ICBcclxuPC8+XHJcbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleHBvcnQgZGVmYXVsdCBBdHRDb21wYW55XHJcbiIsImltcG9ydCAncmVhY3QtZHJvcGRvd24vc3R5bGUuY3NzJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWRyb3Bkb3duJztcclxuaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIENvbXBvbmVudCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NhcmQsSGVhZGluZywgQnV0dG9uLCBEYXRhVGFibGUgLExpbmssRW1wdHlTdGF0ZSwgQXBwUHJvdmlkZXIsTGF5b3V0LFBhZ2UsIFN0YWNrLCBBY3Rpb25MaXN0LCAgQXZhdGFyLCBDb250ZXh0dWFsU2F2ZUJhciwgRm9ybUxheW91dCxGcmFtZSwgTG9hZGluZyxNb2RhbCwgTmF2aWdhdGlvbiwgU2tlbGV0b25Cb2R5VGV4dCwgU2tlbGV0b25EaXNwbGF5VGV4dCwgU2tlbGV0b25QYWdlLCBUZXh0Q29udGFpbmVyLCBUZXh0RmllbGQsIFRvYXN0LCBUb3BCYXJ9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHtBcnJvd0xlZnRNaW5vciwgQWRkTWFqb3JNb25vdG9uZSwgTm90ZU1ham9yTW9ub3RvbmUsIEhvbWVNYWpvck1vbm90b25lLCBPcmRlcnNNYWpvclR3b3RvbmUsIE1vYmlsZUhhbWJ1cmdlck1ham9yTW9ub3RvbmUsIExpc3RNYWpvck1vbm90b25lLCBCYW5rTWFqb3JNb25vdG9uZSxUcm91Ymxlc2hvb3RNYWpvck1vbm90b25lLFNldHRpbmdzTWFqb3JNb25vdG9uZX0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcy1pY29ucyc7XHJcblxyXG5jb25zdCBBdHRyaWJ1dGVUYWJsZSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgPHRhYmxlIGJvcmRlcj1cIjFcIiBjZWxsU3BhY2luZz1cIjhcIiBjZWxsUGFkZGluZz1cIjEwXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5MYWJlbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Tb3J0aW5nPGJyLz5PcmRlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2FydDxici8+cGFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXI8YnIvPnBhZ2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb3BzLkF0cmlidXRvcy5sZW5ndGggPiAwID8gKHByb3BzLkF0cmlidXRvcy5tYXAoKEF0cmlidXRvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0F0cmlidXRvLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57QXRyaWJ1dG8uY29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntBdHJpYnV0by5sYWJlbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntBdHJpYnV0by5UeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0F0cmlidXRvLnNvcnRpbmdvcmRlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntBdHJpYnV0by5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57QXRyaWJ1dG8uY2FydHBhZ2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57QXRyaWJ1dG8ucmVnaXN0ZXJwYWdlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gbXV0ZWQtYnV0dG9uXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9eygpID0+IHByb3BzLmRlbGV0ZUF0cmlidXRvKEF0cmlidXRvLmlkKX0gY2xhc3NOYW1lPVwiYnV0dG9uIG11dGVkLWJ1dHRvblwiIGNsYXNzTmFtZT1cImJ1dHRvbiBtdXRlZC1idXR0b25cIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezh9Pk5vIEF0cmlidXRvcyBGb3VuZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgKVxyXG59XHJcbiAgZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlVGFibGUiLCJpbXBvcnQgJ3JlYWN0LWRyb3Bkb3duL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1kcm9wZG93bic7XHJcbmltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCBDb21wb25lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDYXJkLEhlYWRpbmcsIEJ1dHRvbiwgRGF0YVRhYmxlICxMaW5rLEVtcHR5U3RhdGUsIEFwcFByb3ZpZGVyLExheW91dCxQYWdlLCBTdGFjaywgQWN0aW9uTGlzdCwgIEF2YXRhciwgQ29udGV4dHVhbFNhdmVCYXIsIEZvcm1MYXlvdXQsRnJhbWUsIExvYWRpbmcsTW9kYWwsIE5hdmlnYXRpb24sIFNrZWxldG9uQm9keVRleHQsIFNrZWxldG9uRGlzcGxheVRleHQsIFNrZWxldG9uUGFnZSwgVGV4dENvbnRhaW5lciwgVGV4dEZpZWxkLCBUb2FzdCwgVG9wQmFyfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7QXJyb3dMZWZ0TWlub3IsIEFkZE1ham9yTW9ub3RvbmUsIE5vdGVNYWpvck1vbm90b25lLCBIb21lTWFqb3JNb25vdG9uZSwgT3JkZXJzTWFqb3JUd290b25lLCBNb2JpbGVIYW1idXJnZXJNYWpvck1vbm90b25lLCBMaXN0TWFqb3JNb25vdG9uZSwgQmFua01ham9yTW9ub3RvbmUsVHJvdWJsZXNob290TWFqb3JNb25vdG9uZSxTZXR0aW5nc01ham9yTW9ub3RvbmV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xyXG5pbXBvcnQgQXR0cmlidXRlVGFibGUgZnJvbSAnLi9UYWJsYUNvbXBvbmVudGVzJztcclxuaW1wb3J0IEF0dENvbXBhbnkgZnJvbSAnLi9BdHRyaWJ1dGVDb21wYW55JztcclxuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5cclxuZnVuY3Rpb24gTGlzdGEgICgpe1xyXG4gIFxyXG4gIGNvbnN0IEF0cmlidXRvc0RhdGEgPSBbXHJcbiAgICB7IGlkOiB1dWlkdjQoKSwgY29kZTogJ2NvbXBhbnknLCBsYWJlbDogJ2NvbXBhbnknLCBUeXBlOiAnVGV4dCBGaWVsZCcsIHNvcnRpbmdvcmRlcjogMSwgc3RhdHVzOidvbicsIGNhcnRwYWdlOidZZXMnLCByZWdpc3RlcnBhZ2U6J1llcycsIGFjY291bnRwYWdlOidObycsIG9yZGVyZ3JpZDonWWVzJywgY3VzdG9tZXJncmlkOidZZXMnfSxcclxuICAgIHsgaWQ6IHV1aWR2NCgpLCBjb2RlOiAnY29tcGFueScsIGxhYmVsOiAnY29tcGFueScsIFR5cGU6ICdUZXh0IEZpZWxkJywgc29ydGluZ29yZGVyOiAyLCBzdGF0dXM6J29uJywgY2FydHBhZ2U6J1llcycsIHJlZ2lzdGVycGFnZTonWWVzJywgYWNjb3VudHBhZ2U6J05vJywgb3JkZXJncmlkOidZZXMnLCBjdXN0b21lcmdyaWQ6J1llcyd9LFxyXG4gICAgeyBpZDogdXVpZHY0KCksIGNvZGU6ICdjb21wYW55JywgbGFiZWw6ICdjb21wYW55JywgVHlwZTogJ1RleHQgRmllbGQnLCBzb3J0aW5nb3JkZXI6IDMsIHN0YXR1czonb24nLCBjYXJ0cGFnZTonWWVzJywgcmVnaXN0ZXJwYWdlOidZZXMnLCBhY2NvdW50cGFnZTonTm8nLCBvcmRlcmdyaWQ6J1llcycsIGN1c3RvbWVyZ3JpZDonWWVzJ30sXHJcbiAgICB7IGlkOiB1dWlkdjQoKSwgY29kZTogJ2NvbXBhbnknLCBsYWJlbDogJ2NvbXBhbnknLCBUeXBlOiAnVGV4dCBGaWVsZCcsIHNvcnRpbmdvcmRlcjogNCwgc3RhdHVzOidvbicsIGNhcnRwYWdlOidZZXMnLCByZWdpc3RlcnBhZ2U6J1llcycsIGFjY291bnRwYWdlOidObycsIG9yZGVyZ3JpZDonWWVzJywgY3VzdG9tZXJncmlkOidZZXMnfSxcclxuICAgIHsgaWQ6IHV1aWR2NCgpLCBjb2RlOiAnY29tcGFueScsIGxhYmVsOiAnY29tcGFueScsIFR5cGU6ICdUZXh0IEZpZWxkJywgc29ydGluZ29yZGVyOiA0LCBzdGF0dXM6J29uJywgY2FydHBhZ2U6J1llcycsIHJlZ2lzdGVycGFnZTonWWVzJywgYWNjb3VudHBhZ2U6J05vJywgb3JkZXJncmlkOidZZXMnLCBjdXN0b21lcmdyaWQ6J1llcyd9LFxyXG4gICAgeyBpZDogdXVpZHY0KCksIGNvZGU6ICdjb21wYW55JywgbGFiZWw6ICdjb21wYW55JywgVHlwZTogJ1RleHQgRmllbGQnLCBzb3J0aW5nb3JkZXI6IDIsIHN0YXR1czonb24nLCBjYXJ0cGFnZTonWWVzJywgcmVnaXN0ZXJwYWdlOidZZXMnLCBhY2NvdW50cGFnZTonTm8nLCBvcmRlcmdyaWQ6J1llcycsIGN1c3RvbWVyZ3JpZDonWWVzJ30sXHJcbiAgXVxyXG5cclxuICBjb25zdCBbQXRyaWJ1dG9zLCBzZXRBdHJpYnV0b3NdID0gdXNlU3RhdGUoQXRyaWJ1dG9zRGF0YSlcclxuXHJcbiAgY29uc3QgYWRkQXRyaWJ1dG8gPSAoQXRyaWJ1dG8pID0+IHtcclxuICAgIEF0cmlidXRvLmlkID0gdXVpZHY0KClcclxuICAgIHNldEF0cmlidXRvcyhbLi4uQXRyaWJ1dG9zLCBBdHJpYnV0b10pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVBdHJpYnV0byA9IChpZCkgPT4ge1xyXG4gICAgc2V0QXRyaWJ1dG9zKEF0cmlidXRvcy5maWx0ZXIoKEF0cmlidXRvKSA9PiBBdHJpYnV0by5pZCAhPT0gaWQpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuPD5cclxuICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT1cIkF0dHJpYnV0ZXNcIj5cclxuICAgICAgIFxyXG4gICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImxlYWRpbmdcIj5cclxuICAgICAgPExpbmsgdXJsPScvSW5kZXgnID5cclxuICAgICAgICBIb21lXHJcbiAgICAgIDwvTGluaz4gICAgICAgICBcclxuICAgICAgICA8cD5BdHRyaWJ1dGVzPC9wPlxyXG4gICAgPC9TdGFjaz4gICAgICAgICAgICAgXHJcbiAgICBcclxuICA8L0NhcmQ+XHJcblxyXG4gICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgIDxBdHRyaWJ1dGVUYWJsZSBkZWxldGVBdHJpYnV0bz17ZGVsZXRlQXRyaWJ1dG99IEF0cmlidXRvcz17QXRyaWJ1dG9zfS8+XHJcbiAgICAgIDwvU3RhY2s+XHJcbiAgICAgXHJcbiAgICA8L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RhXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXMtaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZHJvcGRvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==