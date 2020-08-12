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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/AttributeCreation.js":
/*!************************************!*\
  !*** ./pages/AttributeCreation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttCreation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Drop1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drop1 */ "./pages/Drop1.js");
/* harmony import */ var _Drop2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drop2 */ "./pages/Drop2.js");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class AttCreation extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      id: "",
      code: "",
      label: "",
      Type: "",
      sortingorder: "",
      status: "",
      cartpage: "",
      registerpage: "",
      accountpage: "",
      ordergrid: "",
      customergrid: ""
    });

    _defineProperty(this, "change", e => {
      this.props.onChange({
        [e.target.name]: e.target.value
      });
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault(); // this.props.onSubmit(this.state);

      this.setState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });
      this.props.onChange({
        id: "",
        code: "",
        label: "",
        Type: "",
        sortingorder: "",
        status: "",
        cartpage: "",
        registerpage: "",
        accountpage: "",
        ordergrid: "",
        customergrid: ""
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      sectioned: true,
      title: " Create attribute"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
      distribution: "leading"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      url: "/Index"
    }, "Home"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      url: "/componenteslist"
    }, "Attributes"), __jsx("p", null, "Attribute"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Page"], null, __jsx("form", {
      id: "inicial"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextStyle"], {
      variation: "strong"
    }, "Use Template:"), __jsx(_Drop1__WEBPACK_IMPORTED_MODULE_1__["Drop_1"], null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Heading"], null, "Attribute Configuration"), __jsx("br", null), __jsx("hr", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextStyle"], {
      variation: "strong"
    }, "Show on Cart Page:"), __jsx("input", {
      type: "checkbox",
      name: "required",
      value: "Yes",
      helpText: "Tick if you want to use this attribute on cart page."
    }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextStyle"], {
      variation: "strong"
    }, "Show on Register Page:"), __jsx("input", {
      type: "checkbox",
      name: "required",
      value: "Yes",
      helpText: "'Tick if you want to use this attribute on register page.'"
    }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
      distribution: "trailing"
    }, __jsx("button", {
      onClick: e => this.onSubmit(e)
    }, "Add new Atribute"))), __jsx("br", null))));
  }

}

/***/ }),

/***/ "./pages/Drop1.js":
/*!************************!*\
  !*** ./pages/Drop1.js ***!
  \************************/
/*! exports provided: Drop_1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drop_1", function() { return Drop_1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AttributeCreation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AttributeCreation */ "./pages/AttributeCreation.js");
/* harmony import */ var _Drop2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Drop2 */ "./pages/Drop2.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Drop_1 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "state", {
      fields: {},
      id: "",
      code: "",
      label: "",
      Type: "",
      sortingorder: "",
      status: "",
      cartpage: "",
      registerpage: "",
      accountpage: "",
      ordergrid: "",
      customergrid: ""
    });

    _defineProperty(this, "onChange", updatedValue => {
      this.setState({
        fields: _objectSpread(_objectSpread({}, this.state.fields), updatedValue)
      });
    });

    _defineProperty(this, "change", e => {
      this.props.onChange({
        [e.target.name]: e.target.value
      });
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault(); // this.props.onSubmit(this.state);

      this.setState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });
      this.props.onChange({
        id: "",
        code: "",
        label: "",
        Type: "",
        sortingorder: "",
        status: "",
        cartpage: "",
        registerpage: "",
        accountpage: "",
        ordergrid: "",
        customergrid: ""
      });
    });

    this.state = {
      selectedValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  renderSelectedForm(param) {
    switch (param) {
      case 'form_name1':
        return __jsx("form", {
          name: "form_name1",
          id: "form_name1"
        }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Label*:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "Your Company"
        }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Code:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "your-company"
        }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Sorting Order:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          type: "number"
        }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          placeholder: "Text Field",
          disabled: true
        }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Default Value:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Placeholder"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
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
        }, "Letters")));

      case 'form_name2':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name2",
          id: "form_name2"
        }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Label*:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "How did you find us?"
        }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Code:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "how-did-you-find-us"
        }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Sorting Order:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          type: "number"
        }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          placeholder: "Multiple Select",
          disabled: true
        }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"));

      case 'form_name3':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name3",
          id: "form_name3"
        }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Label*:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "You register as"
        }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Code:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "register-as",
          disabled: true
        }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Sorting Order:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          type: "number"
        }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          placeholder: "Dropdown",
          disabled: true
        }), __jsx("p", null, "Attribute options is managed in tab \"Manage Options\" on the left."), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Placeholder"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"));

      case 'form_name4':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name4",
          id: "form_name4"
        }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Label*:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "Dear visitor!"
        }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Code:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "dear-visitor"
        }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Sorting Order:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          type: "number"
        }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          placeholder: "Static Text",
          disabled: true
        }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Default Value:"), __jsx("input", {
          style: {
            width: '100%',
            height: '45px'
          },
          placeholder: "<strong>Please</strong>, \r don't hesitate to answer \r the questions below. We want \r to know little more about you \r to improve our store and make you \r feel at home :)"
        }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"));

      case 'form_name5':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name5",
          id: "form_name5"
        }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Label*:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "Date of birth"
        }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Code:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "date-of-birth"
        }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Sorting Order:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          type: "number"
        }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          placeholder: "Date",
          disabled: true
        }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Default Value:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          id: "date",
          type: "date"
        }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Placeholder"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null));

      case 'form_name6':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name6",
          id: "form_name6"
        }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Label*:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "Country"
        }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Code:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "country"
        }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Sorting Order:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          type: "number"
        }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          placeholder: "Dropdown",
          disabled: true
        }), __jsx("p", null, "Attribute options is managed in tab \"Manage Options\" on the left."), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Placeholder"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"));

      case 'form_name7':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name7",
          id: "form_name7"
        }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Label*:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "Accept Marketing Email"
        }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Code:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "accept-marketing-email-1"
        }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Sorting Order:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          type: "number"
        }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          placeholder: "Yes/No",
          disabled: true
        }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Default Value:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"));

      case 'form_name8':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name8",
          id: "form_name8"
        }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Label*:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "Interests"
        }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Code:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "interests"
        }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Sorting Order:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          type: "number"
        }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          placeholder: "Multiple Select",
          disabled: true
        }), __jsx("p", null, "Attribute options is managed in tab \"Manage Options\" on the left."), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"));

      default:
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          onChange: fields => this.onchange(fields)
        }, __jsx("hr", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Attribute Properties"), __jsx("br", null), __jsx("hr", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Label*:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
          name: "label",
          placeholder: "Attribute Label",
          value: this.state.label,
          onChange: e => this.change(e)
        }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Code:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], null), __jsx("p", null, "For internal use. Must be unique with no spaces and length <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Sorting Order:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
          type: "number"
        }), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Type*:"), __jsx(_Drop2__WEBPACK_IMPORTED_MODULE_5__["Drop_2"], null), __jsx("br", null));
    }
  }

  handleChange(event) {
    this.setState({
      selectedValue: event.target.value
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", null, __jsx("div", null, __jsx("form", null, __jsx("select", {
      style: {
        width: '100%',
        height: '35px'
      },
      value: this.state.selectedValue,
      onChange: this.handleChange
    }, __jsx("option", {
      value: "",
      selected: "selected"
    }), __jsx("option", {
      value: "form_name1"
    }, "Your company"), __jsx("option", {
      value: "form_name2"
    }, "How did you find us?"), __jsx("option", {
      value: "form_name3"
    }, "You register as"), __jsx("option", {
      value: "form_name4"
    }, "Dear Visitor!"), __jsx("option", {
      value: "form_name5"
    }, "Date of birth"), __jsx("option", {
      value: "form_name6"
    }, "Country"), __jsx("option", {
      value: "form_name7"
    }, "Accept Maketing Email"), __jsx("option", {
      value: "form_name8"
    }, "Interests"))), __jsx("p", null, "If you choose a template, the following attribute fields will be filled automatically. Or you can leave this box blank and create your unique field  by filling in these boxes."), __jsx("br", null), this.renderSelectedForm(this.state.selectedValue))));
  }

}

/***/ }),

/***/ "./pages/Drop2.js":
/*!************************!*\
  !*** ./pages/Drop2.js ***!
  \************************/
/*! exports provided: Drop_2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drop_2", function() { return Drop_2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Drop_2 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      selectedValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  renderSelectedForm(param) {
    switch (param) {
      case 'form_name1':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name1",
          id: "form_name1"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Deafault value:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Placeholder:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Input Validation:"), __jsx("p", null, "Input Validation:"), __jsx("select", {
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
        }, "Letters")), __jsx("p", null, "You need to chose default date again to save with new formatd"), __jsx("br", null));

      case 'form_name2':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name1",
          id: "form_name2"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Default value:"), __jsx("input", {
          style: {
            width: '100%',
            height: '45px'
          }
        }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null));

      case 'form_name3':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name3",
          id: "form_name3"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Default value:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          id: "date",
          type: "date"
        }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Placeholder:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null));

      case 'form_name4':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name4",
          id: "form_name4"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"));

      case 'form_name5':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name5",
          id: "form_name5"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Placeholder:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"));

      case 'form_name6':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name6",
          id: "form_name6"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Default value:"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"));

      case 'form_name7':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name7",
          id: "form_name7"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Default Value:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null));

      case 'form_name8':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name8",
          id: "form_name8"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Default value"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Term link"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "Link to your terms page."
        }), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Term link text"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "Shop terms."
        }), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Term warning text"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          },
          placeholder: "You must read and accept the terms."
        }));

      case 'form_name9':
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          name: "form_name9",
          id: "form_name9"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Values Required"), __jsx("input", {
          type: "checkbox",
          name: "required",
          value: "Yes"
        }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
          variation: "strong"
        }, "Placeholder:"), __jsx("input", {
          style: {
            width: '100%',
            height: '35px'
          }
        }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"));

      default:
        return null;
    }
  }

  handleChange(event) {
    this.setState({
      selectedValue: event.target.value
    });
  }

  render() {
    return __jsx("div", null, __jsx("div", null, __jsx("form", null, __jsx("select", {
      value: this.state.selectedValue,
      style: {
        width: '100%',
        height: '35px'
      },
      onChange: this.handleChange
    }, __jsx("option", {
      value: "",
      selected: "selected"
    }), __jsx("option", {
      value: "form_name1"
    }, "Text Field"), __jsx("option", {
      value: "form_name2"
    }, "Text Area"), __jsx("option", {
      value: "form_name3"
    }, "Date"), __jsx("option", {
      value: "form_name4"
    }, "Multiple Select"), __jsx("option", {
      value: "form_name5"
    }, "Dropdown"), __jsx("option", {
      value: "form_name6"
    }, "Yes/No"), __jsx("option", {
      value: "form_name7"
    }, "Static Text"), __jsx("option", {
      value: "form_name8"
    }, "Term of Usage"), __jsx("option", {
      value: "form_name9"
    }, "Province"))), __jsx("br", null), this.renderSelectedForm(this.state.selectedValue)));
  }

}

/***/ }),

/***/ 3:
/*!******************************************!*\
  !*** multi ./pages/AttributeCreation.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LENOVO THINKPAD\Documents\react_programs\ca-app\pages\AttributeCreation.js */"./pages/AttributeCreation.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXR0cmlidXRlQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRHJvcDEuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRHJvcDIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvcG9sYXJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXMtaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRyb3Bkb3duXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaG9vay1mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbIkF0dENyZWF0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJpZCIsImNvZGUiLCJsYWJlbCIsIlR5cGUiLCJzb3J0aW5nb3JkZXIiLCJzdGF0dXMiLCJjYXJ0cGFnZSIsInJlZ2lzdGVycGFnZSIsImFjY291bnRwYWdlIiwib3JkZXJncmlkIiwiY3VzdG9tZXJncmlkIiwiZSIsInByb3BzIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZW5kZXIiLCJvblN1Ym1pdCIsIkRyb3BfMSIsImNvbnN0cnVjdG9yIiwiZmllbGRzIiwidXBkYXRlZFZhbHVlIiwic3RhdGUiLCJzZWxlY3RlZFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsInJlbmRlclNlbGVjdGVkRm9ybSIsInBhcmFtIiwid2lkdGgiLCJoZWlnaHQiLCJv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bUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXEF0dHJpYnV0ZUNyZWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCBDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Ryb3BfMX0gZnJvbSAnLi9Ecm9wMSc7XHJcbmltcG9ydCB7RHJvcF8yfSBmcm9tICcuL0Ryb3AyJztcclxuaW1wb3J0ICdyZWFjdC1kcm9wZG93bi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge0NhcmQsRm9ybSwgQ2hvaWNlTGlzdCwgVGV4dFN0eWxlLEJ1dHRvbiwgSGVhZGluZyxFbXB0eVN0YXRlLCBBcHBQcm92aWRlcixMYXlvdXQsUGFnZSwgU3RhY2ssIEFjdGlvbkxpc3QsIEF2YXRhciwgQ29udGV4dHVhbFNhdmVCYXIsIEZvcm1MYXlvdXQsRnJhbWUsIExvYWRpbmcsTW9kYWwsIE5hdmlnYXRpb24sIFNrZWxldG9uQm9keVRleHQsIFNrZWxldG9uRGlzcGxheVRleHQsIFNrZWxldG9uUGFnZSwgVGV4dENvbnRhaW5lciwgVGV4dEZpZWxkLCBUb2FzdCwgVG9wQmFyLCBMaW5rfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7QXJyb3dMZWZ0TWlub3IsIE5vdGVNYWpvck1vbm90b25lLCBIb21lTWFqb3JNb25vdG9uZSwgT3JkZXJzTWFqb3JUd290b25lLCBNb2JpbGVIYW1idXJnZXJNYWpvck1vbm90b25lLCBMaXN0TWFqb3JNb25vdG9uZSwgQmFua01ham9yTW9ub3RvbmUsVHJvdWJsZXNob290TWFqb3JNb25vdG9uZSxTZXR0aW5nc01ham9yTW9ub3RvbmV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xyXG5pbXBvcnQge21vc3RyYXJ9IGZyb20gJy4vRHJvcDEnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0Q3JlYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgIHtcclxuICBcclxuICBzdGF0ZSA9IHtcclxuICAgIGlkOlwiXCIsXHJcbiAgICBjb2RlOlwiXCIsXHJcbiAgICBsYWJlbDpcIlwiLFxyXG4gICAgVHlwZTpcIlwiLFxyXG4gICAgc29ydGluZ29yZGVyOlwiXCIsXHJcbiAgICBzdGF0dXM6XCJcIixcclxuICAgIGNhcnRwYWdlOlwiXCIsXHJcbiAgICByZWdpc3RlcnBhZ2U6XCJcIixcclxuICAgIGFjY291bnRwYWdlOlwiXCIsXHJcbiAgICBvcmRlcmdyaWQ6XCJcIixcclxuICAgIGN1c3RvbWVyZ3JpZDpcIlwiXHJcbiAgfTtcclxuICBcclxuICBjaGFuZ2UgPSBlID0+IHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB0aGlzLnByb3BzLm9uU3VibWl0KHRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICBpZDpcIlwiLFxyXG4gICAgICBjb2RlOlwiXCIsXHJcbiAgICAgIGxhYmVsOlwiXCIsXHJcbiAgICAgIFR5cGU6XCJcIixcclxuICAgICAgc29ydGluZ29yZGVyOlwiXCIsXHJcbiAgICAgIHN0YXR1czpcIlwiLFxyXG4gICAgICBjYXJ0cGFnZTpcIlwiLFxyXG4gICAgICByZWdpc3RlcnBhZ2U6XCJcIixcclxuICAgICAgYWNjb3VudHBhZ2U6XCJcIixcclxuICAgICAgb3JkZXJncmlkOlwiXCIsXHJcbiAgICAgIGN1c3RvbWVyZ3JpZDpcIlwiXHJcbiAgICB9KTtcclxuICB9O1xyXG5yZW5kZXIoKXtcclxuXHJcbiBcclxucmV0dXJuKFxyXG5cclxuPD5cclxuICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9XCIgQ3JlYXRlIGF0dHJpYnV0ZVwiPlxyXG4gICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImxlYWRpbmdcIj5cclxuICAgICAgPExpbmsgdXJsPScvSW5kZXgnID5cclxuICAgICAgICBIb21lXHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgICAgICBcclxuICAgICAgPExpbmsgdXJsPScvY29tcG9uZW50ZXNsaXN0JyA+XHJcbiAgICAgICAgQXR0cmlidXRlc1xyXG4gICAgICA8L0xpbms+XHJcbiAgICAgICAgPHA+QXR0cmlidXRlPC9wPlxyXG4gICAgPC9TdGFjaz4gICAgICBcclxuICA8L0NhcmQ+XHJcbiAgICAgICAgXHJcbjxQYWdlPlxyXG4gIDxmb3JtIGlkPVwiaW5pY2lhbFwiPlxyXG4gICAgPENhcmQgc2VjdGlvbmVkPiAgICAgXHJcbiAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VXNlIFRlbXBsYXRlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgIDxEcm9wXzEvPlxyXG4gICBcclxuICAgICAgPGJyLz5cclxuICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIENvbmZpZ3VyYXRpb248L0hlYWRpbmc+ICAgIFxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5TaG93IG9uIENhcnQgUGFnZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiIGhlbHBUZXh0PVwiVGljayBpZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBhdHRyaWJ1dGUgb24gY2FydCBwYWdlLlwiLz5cclxuICAgICAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5TaG93IG9uIFJlZ2lzdGVyIFBhZ2U6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIiBoZWxwVGV4dD1cIidUaWNrIGlmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGF0dHJpYnV0ZSBvbiByZWdpc3RlciBwYWdlLidcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG48YnIvPlxyXG48YnIvPlxyXG48U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIj5cclxuPGJ1dHRvbiBvbkNsaWNrPXtlID0+IHRoaXMub25TdWJtaXQoZSl9PkFkZCBuZXcgQXRyaWJ1dGU8L2J1dHRvbj5cclxuPC9TdGFjaz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8YnIvPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvUGFnZT5cclxuPC8+XHJcbiAgXHJcbiApO1xyXG59XHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NhcmQsIEZvcm0sQ2hlY2tib3gsIFRleHRTdHlsZSxCdXR0b24sIFNlbGVjdCwgUGFnZSwgU3RhY2ssIFRleHRGaWVsZCwgSGVhZGluZywgQ2hvaWNlTGlzdCx9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1kcm9wZG93bic7XHJcbmltcG9ydCAncmVhY3QtZHJvcGRvd24vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL0F0dHJpYnV0ZUNyZWF0aW9uJztcclxuaW1wb3J0IHtEcm9wXzJ9IGZyb20gJy4vRHJvcDInO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5cclxuXHJcblxyXG5cclxuIGV4cG9ydCBjbGFzcyBEcm9wXzEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGZpZWxkczp7fSxcclxuICAgIGlkOlwiXCIsXHJcbiAgICBjb2RlOlwiXCIsXHJcbiAgICBsYWJlbDpcIlwiLFxyXG4gICAgVHlwZTpcIlwiLFxyXG4gICAgc29ydGluZ29yZGVyOlwiXCIsXHJcbiAgICBzdGF0dXM6XCJcIixcclxuICAgIGNhcnRwYWdlOlwiXCIsXHJcbiAgICByZWdpc3RlcnBhZ2U6XCJcIixcclxuICAgIGFjY291bnRwYWdlOlwiXCIsXHJcbiAgICBvcmRlcmdyaWQ6XCJcIixcclxuICAgIGN1c3RvbWVyZ3JpZDpcIlwiXHJcbiAgfTtcclxuICBcclxuICBvbkNoYW5nZSA9IHVwZGF0ZWRWYWx1ZSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5maWVsZHMsXHJcbiAgICAgICAgLi4udXBkYXRlZFZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNoYW5nZSA9IGUgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25TdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIHRoaXMucHJvcHMub25TdWJtaXQodGhpcy5zdGF0ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgIGlkOlwiXCIsXHJcbiAgICAgIGNvZGU6XCJcIixcclxuICAgICAgbGFiZWw6XCJcIixcclxuICAgICAgVHlwZTpcIlwiLFxyXG4gICAgICBzb3J0aW5nb3JkZXI6XCJcIixcclxuICAgICAgc3RhdHVzOlwiXCIsXHJcbiAgICAgIGNhcnRwYWdlOlwiXCIsXHJcbiAgICAgIHJlZ2lzdGVycGFnZTpcIlwiLFxyXG4gICAgICBhY2NvdW50cGFnZTpcIlwiLFxyXG4gICAgICBvcmRlcmdyaWQ6XCJcIixcclxuICAgICAgY3VzdG9tZXJncmlkOlwiXCJcclxuICAgIH0pO1xyXG4gIH07XHJcbiBcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIHNlbGVjdGVkVmFsdWU6JydcclxuICAgICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG5yZW5kZXJTZWxlY3RlZEZvcm0ocGFyYW0pIHtcclxuICBcclxuc3dpdGNoKHBhcmFtKSB7XHJcbiAgY2FzZSAnZm9ybV9uYW1lMSc6XHJcbiAgICByZXR1cm4gIDxmb3JtICBuYW1lPVwiZm9ybV9uYW1lMVwiIGlkPVwiZm9ybV9uYW1lMVwiID5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgUHJvcGVydGllczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBDb21wYW55XCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIGxhYmVsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkNvZGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXItY29tcGFueVwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkZvciBpbnRlcm5hbCB1c2UuIE11c3QgYmUgdW5pcXVlIHdpdGggXHJcbiAgICAgICAgICAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgICAgICAgICAgaXQgZW1wdHkgZm9yIGF1dG8gZ2VuZXJhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Tb3J0aW5nIE9yZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlcyBhcmUgc29ydGVkIGluIGFzY2VuZGluZyBcclxuICAgICAgICAgICAgICAgICAgICBvcmRlciAoZWc6IEF0dHJpYnV0ZSB3aXRoIHNvcnRpbmcgb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgMSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0b3Agb2YgQXR0cmlidXRlIDIpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlR5cGUqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPVwiVGV4dCBGaWVsZFwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+RGVmYXVsdCBWYWx1ZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgYXR0cmlidXRlIHdoZW4gXHJcbiAgICAgICAgICAgICAgICAgICAgaXQgaXMgc2hvd24gdG8geW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+UGxhY2Vob2xkZXI8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBwbGFjZWhvbGRlciBzcGVjaWZpZXMgYSBzaG9ydCBoaW50IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQgZGVzY3JpYmVzIHRoZSBleHBlY3RlZCB2YWx1ZSBvZiBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzIGZpZWxkPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlZhbHVlcyBSZXF1aXJlZDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cD5JbnB1dCBWYWxpZGF0aW9uOjwvcD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fSAgPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9uZVwiPk5vbmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRlY2ltYWwgTnVtYmVyXCI+RGVjaW1hbCBOdW1iZXIgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbnRlZ2VyIE51bWJlclwiPkludGVnZXIgTnVtYmVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFbWFpbFwiPkVtYWlsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVUkxcIj5VUkw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxldHRlcnNcIj5MZXR0ZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT47XHJcblxyXG4gIGNhc2UgJ2Zvcm1fbmFtZTInOlxyXG4gICAgICAgICAgICByZXR1cm4gICAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTJcIiBpZD1cImZvcm1fbmFtZTJcIiA+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3cgZGlkIHlvdSBmaW5kIHVzP1wiLz5cclxuICAgICAgICAgICAgPHA+QXR0cmlidXRlIGxhYmVsPC9wPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Db2RlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaG93LWRpZC15b3UtZmluZC11c1wiLz5cclxuICAgICAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICAgICBubyBzcGFjZXMgYW5kIGxlbmd0aCAgJmx0Oz0gMzAuIExldCBcclxuICAgICAgICAgICAgICBpdCBlbXB0eSBmb3IgYXV0byBnZW5lcmF0aW9uPC9wPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Tb3J0aW5nIE9yZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICAgICAgICBvcmRlciAoZWc6IEF0dHJpYnV0ZSB3aXRoIHNvcnRpbmcgb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAxIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRvcCBvZiBBdHRyaWJ1dGUgMik8L3A+XHJcbiAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlR5cGUqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPVwiTXVsdGlwbGUgU2VsZWN0XCIgZGlzYWJsZWQgLz4gICAgXHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlZhbHVlcyBSZXF1aXJlZDo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIvPlxyXG4gICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgIDwvRm9ybT47XHJcbiAgICAgICAgICBcclxuICBjYXNlICdmb3JtX25hbWUzJzpcclxuICAgIHJldHVybiAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTNcIiBpZD1cImZvcm1fbmFtZTNcIiA+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIFByb3BlcnRpZXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+TGFiZWwqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3UgcmVnaXN0ZXIgYXNcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+Q29kZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmVnaXN0ZXItYXNcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICA8cD5Gb3IgaW50ZXJuYWwgdXNlLiBNdXN0IGJlIHVuaXF1ZSB3aXRoIFxyXG4gICAgICAgICAgICAgICAgICBubyBzcGFjZXMgYW5kIGxlbmd0aCAgJmx0Oz0gMzAuIExldCBcclxuICAgICAgICAgICAgICAgICAgaXQgZW1wdHkgZm9yIGF1dG8gZ2VuZXJhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNvcnRpbmcgT3JkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlcyBhcmUgc29ydGVkIGluIGFzY2VuZGluZyBcclxuICAgICAgICAgICAgICAgICAgb3JkZXIgKGVnOiBBdHRyaWJ1dGUgd2l0aCBzb3J0aW5nIG9yZGVyIFxyXG4gICAgICAgICAgICAgICAgICAxIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRvcCBvZiBBdHRyaWJ1dGUgMik8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VHlwZSo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPVwiRHJvcGRvd25cIiBkaXNhYmxlZCAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgb3B0aW9ucyBpcyBtYW5hZ2VkIGluIHRhYiBcIk1hbmFnZSBPcHRpb25zXCIgb24gdGhlIGxlZnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlZhbHVlcyBSZXF1aXJlZDo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlBsYWNlaG9sZGVyPC9UZXh0U3R5bGU+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIHBsYWNlaG9sZGVyIHNwZWNpZmllcyBhIHNob3J0IGhpbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdCBkZXNjcmliZXMgdGhlIGV4cGVjdGVkIHZhbHVlIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMgZmllbGQ8L3A+XHJcbiAgICAgICAgICAgIDwvRm9ybT47XHJcblxyXG5jYXNlICdmb3JtX25hbWU0JzpcclxuICByZXR1cm4gICAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTRcIiBpZD1cImZvcm1fbmFtZTRcIiA+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIFByb3BlcnRpZXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+TGFiZWwqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZWFyIHZpc2l0b3IhXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIGxhYmVsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkNvZGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRlYXItdmlzaXRvclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkZvciBpbnRlcm5hbCB1c2UuIE11c3QgYmUgdW5pcXVlIHdpdGggXHJcbiAgICAgICAgICAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgICAgICAgICAgaXQgZW1wdHkgZm9yIGF1dG8gZ2VuZXJhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNvcnRpbmcgT3JkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlcyBhcmUgc29ydGVkIGluIGFzY2VuZGluZyBcclxuICAgICAgICAgICAgICAgICAgICBvcmRlciAoZWc6IEF0dHJpYnV0ZSB3aXRoIHNvcnRpbmcgb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgMSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0b3Agb2YgQXR0cmlidXRlIDIpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlR5cGUqOjwvVGV4dFN0eWxlPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9XCJTdGF0aWMgVGV4dFwiIGRpc2FibGVkIC8+ICAgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkRlZmF1bHQgVmFsdWU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonNDVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjxzdHJvbmc+UGxlYXNlPC9zdHJvbmc+LCBcclxuICAgICAgICAgICAgICAgICAgZG9uJiMwMzk7dCBoZXNpdGF0ZSB0byBhbnN3ZXIgXHJcbiAgICAgICAgICAgICAgICAgIHRoZSBxdWVzdGlvbnMgYmVsb3cuIFdlIHdhbnQgXHJcbiAgICAgICAgICAgICAgICAgIHRvIGtub3cgbGl0dGxlIG1vcmUgYWJvdXQgeW91IFxyXG4gICAgICAgICAgICAgICAgICB0byBpbXByb3ZlIG91ciBzdG9yZSBhbmQgbWFrZSB5b3UgXHJcbiAgICAgICAgICAgICAgICAgIGZlZWwgYXQgaG9tZSA6KVwiLz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGlzIGF0dHJpYnV0ZSB3aGVuIFxyXG4gICAgICAgICAgICAgICAgICAgIGl0IGlzIHNob3duIHRvIHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG4gICAgICAgICAgICAgIFxyXG5jYXNlICdmb3JtX25hbWU1JzpcclxuICByZXR1cm4gICAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTVcIiBpZD1cImZvcm1fbmFtZTVcIiA+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIFByb3BlcnRpZXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+TGFiZWwqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXRlIG9mIGJpcnRoXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIGxhYmVsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkNvZGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRhdGUtb2YtYmlydGhcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5Gb3IgaW50ZXJuYWwgdXNlLiBNdXN0IGJlIHVuaXF1ZSB3aXRoIFxyXG4gICAgICAgICAgICAgICAgICBubyBzcGFjZXMgYW5kIGxlbmd0aCAgJmx0Oz0gMzAuIExldCBcclxuICAgICAgICAgICAgICAgICAgaXQgZW1wdHkgZm9yIGF1dG8gZ2VuZXJhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNvcnRpbmcgT3JkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlcyBhcmUgc29ydGVkIGluIGFzY2VuZGluZyBcclxuICAgICAgICAgICAgICAgICAgICBvcmRlciAoZWc6IEF0dHJpYnV0ZSB3aXRoIHNvcnRpbmcgb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgMSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0b3Agb2YgQXR0cmlidXRlIDIpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlR5cGUqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBwbGFjZWhvbGRlcj1cIkRhdGVcIiBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkRlZmF1bHQgVmFsdWU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhpcyBhdHRyaWJ1dGUgd2hlbiBpdCBcclxuICAgICAgICAgICAgICAgICAgICBpcyBzaG93biB0byB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5QbGFjZWhvbGRlcjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIHBsYWNlaG9sZGVyIHNwZWNpZmllcyBhIHNob3J0IGhpbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdCBkZXNjcmliZXMgdGhlIGV4cGVjdGVkIHZhbHVlIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMgZmllbGQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VmFsdWVzIFJlcXVpcmVkOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGljayBpZiB0aGlzIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCB0byBiZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPC9Gb3JtPjtcclxuXHJcbmNhc2UgJ2Zvcm1fbmFtZTYnOlxyXG4gIHJldHVybiAgICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lNlwiIGlkPVwiZm9ybV9uYW1lNlwiID5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgUHJvcGVydGllczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIGxhYmVsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkNvZGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb3VudHJ5XCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICAgICAgICAgICBubyBzcGFjZXMgYW5kIGxlbmd0aCAgJmx0Oz0gMzAuIExldCBcclxuICAgICAgICAgICAgICAgICAgICBpdCBlbXB0eSBmb3IgYXV0byBnZW5lcmF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Tb3J0aW5nIE9yZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGVzIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyIChlZzogQXR0cmlidXRlIHdpdGggc29ydGluZyBvcmRlciBcclxuICAgICAgICAgICAgICAgICAgICAxIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRvcCBvZiBBdHRyaWJ1dGUgMik8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VHlwZSo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPVwiRHJvcGRvd25cIiBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBvcHRpb25zIGlzIG1hbmFnZWQgaW4gdGFiIFwiTWFuYWdlIE9wdGlvbnNcIiBvbiB0aGUgbGVmdC48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlZhbHVlcyBSZXF1aXJlZDo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlBsYWNlaG9sZGVyPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBwbGFjZWhvbGRlciBzcGVjaWZpZXMgYSBzaG9ydCBoaW50IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQgZGVzY3JpYmVzIHRoZSBleHBlY3RlZCB2YWx1ZSBvZiBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzIGZpZWxkPC9wPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG5cclxuY2FzZSAnZm9ybV9uYW1lNyc6XHJcbiAgcmV0dXJuICAgIDxGb3JtIG5hbWU9XCJmb3JtX25hbWU3XCIgaWQ9XCJmb3JtX25hbWU3XCIgPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkxhYmVsKjo8L1RleHRTdHlsZT4gICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWNjZXB0IE1hcmtldGluZyBFbWFpbFwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBsYWJlbDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Db2RlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhY2NlcHQtbWFya2V0aW5nLWVtYWlsLTFcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5Gb3IgaW50ZXJuYWwgdXNlLiBNdXN0IGJlIHVuaXF1ZSB3aXRoIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vIHNwYWNlcyBhbmQgbGVuZ3RoICAmbHQ7PSAzMC4gTGV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNvcnRpbmcgT3JkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlcyBhcmUgc29ydGVkIGluIGFzY2VuZGluZyBcclxuICAgICAgICAgICAgICAgICAgICBvcmRlciAoZWc6IEF0dHJpYnV0ZSB3aXRoIHNvcnRpbmcgb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgMSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0b3Agb2YgQXR0cmlidXRlIDIpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlR5cGUqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBwbGFjZWhvbGRlcj1cIlllcy9Ob1wiIGRpc2FibGVkIC8+IFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5EZWZhdWx0IFZhbHVlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8cD5UaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhpcyBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgd2hlbiBpdCBpcyBzaG93biB0byB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgPC9Gb3JtPjtcclxuXHJcbmNhc2UgJ2Zvcm1fbmFtZTgnOlxyXG4gIHJldHVybiAgICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lOFwiIGlkPVwiZm9ybV9uYW1lOFwiID5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgUHJvcGVydGllczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkludGVyZXN0c1wiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBsYWJlbDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Db2RlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbnRlcmVzdHNcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5Gb3IgaW50ZXJuYWwgdXNlLiBNdXN0IGJlIHVuaXF1ZSB3aXRoIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vIHNwYWNlcyBhbmQgbGVuZ3RoICAmbHQ7PSAzMC4gTGV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNvcnRpbmcgT3JkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlcyBhcmUgc29ydGVkIGluIGFzY2VuZGluZyBcclxuICAgICAgICAgICAgICAgICAgICBvcmRlciAoZWc6IEF0dHJpYnV0ZSB3aXRoIHNvcnRpbmcgb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgMSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0b3Agb2YgQXR0cmlidXRlIDIpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlR5cGUqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBwbGFjZWhvbGRlcj1cIk11bHRpcGxlIFNlbGVjdFwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIG9wdGlvbnMgaXMgbWFuYWdlZCBpbiB0YWIgXCJNYW5hZ2UgT3B0aW9uc1wiIG9uIHRoZSBsZWZ0LjwvcD4gICAgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlZhbHVlcyBSZXF1aXJlZDo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsZWQgYnkgeW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgIDwvRm9ybT47ICAgICAgXHJcblxyXG4gIGRlZmF1bHQ6XHJcbiAgICByZXR1cm4gPEZvcm0gb25DaGFuZ2U9e2ZpZWxkcyA9PiB0aGlzLm9uY2hhbmdlKGZpZWxkcyl9PlxyXG4gICAgPGhyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPiAgICBcclxuICAgICAgICA8YnIvPlxyXG4gICAgPGhyLz5cclxuICAgIDxici8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgIG5hbWU9XCJsYWJlbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkF0dHJpYnV0ZSBMYWJlbFwiXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYWJlbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlPT4gdGhpcy5jaGFuZ2UoZSl9Lz5cclxuICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Db2RlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cD5Gb3IgaW50ZXJuYWwgdXNlLiBNdXN0IGJlIHVuaXF1ZSB3aXRoIFxyXG4gICAgICAgICAgIG5vIHNwYWNlcyBhbmQgbGVuZ3RoICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgaXQgZW1wdHkgZm9yIGF1dG8gZ2VuZXJhdGlvbjwvcD5cclxuICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNvcnRpbmcgT3JkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlR5cGUqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICA8RHJvcF8yLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG59XHJcbn1cclxuXHJcblxyXG5oYW5kbGVDaGFuZ2UoZXZlbnQpIHsgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7IH1cclxuXHJcbnJlbmRlcigpIHtcclxuICBcclxucmV0dXJuIChcclxuICA8PlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPGZvcm0gPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3Qgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lMVwiPllvdXIgY29tcGFueTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lMlwiPkhvdyBkaWQgeW91IGZpbmQgdXM/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWUzXCI+WW91IHJlZ2lzdGVyIGFzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWU0XCI+RGVhciBWaXNpdG9yITwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lNVwiPkRhdGUgb2YgYmlydGg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTZcIj5Db3VudHJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWU3XCI+QWNjZXB0IE1ha2V0aW5nIEVtYWlsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWU4XCI+SW50ZXJlc3RzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgIDxwPklmIHlvdSBjaG9vc2UgYSB0ZW1wbGF0ZSwgdGhlIGZvbGxvd2luZyBcclxuICBhdHRyaWJ1dGUgZmllbGRzIHdpbGwgYmUgZmlsbGVkIGF1dG9tYXRpY2FsbHkuIFxyXG4gIE9yIHlvdSBjYW4gbGVhdmUgdGhpcyBib3ggYmxhbmsgYW5kIGNyZWF0ZSB5b3VyIHVuaXF1ZSBcclxuICBmaWVsZCAgYnkgZmlsbGluZyBpbiB0aGVzZSBib3hlcy48L3A+XHJcbjxici8+XHJcbiAgXHJcbiAgICB7dGhpcy5yZW5kZXJTZWxlY3RlZEZvcm0odGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlKX1cclxuICAgIFxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIFxyXG5cclxuICA8Lz5cclxuKTtcclxufVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q2FyZCwgVGV4dFN0eWxlLENoZWNrYm94LCBCdXR0b24sIFNlbGVjdCwgUGFnZSwgU3RhY2ssRm9ybSwgVGV4dEZpZWxkLCBIZWFkaW5nLCBDaG9pY2VMaXN0LH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWRyb3Bkb3duJztcclxuaW1wb3J0ICdyZWFjdC1kcm9wZG93bi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRHJvcF8yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZTonJ1xyXG4gICAgICAgfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbnJlbmRlclNlbGVjdGVkRm9ybShwYXJhbSkge1xyXG5zd2l0Y2gocGFyYW0pIHtcclxuICBjYXNlICdmb3JtX25hbWUxJzpcclxuICAgIHJldHVybiAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTFcIiBpZD1cImZvcm1fbmFtZTFcIiA+ICBcclxuICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkRlYWZhdWx0IHZhbHVlOjwvVGV4dFN0eWxlPiAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhpcyBhdHRyaWJ1dGUgd2hlbiBcclxuICAgICAgICAgICAgICAgICAgICBpdCBpcyBzaG93biB0byB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5QbGFjZWhvbGRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgcGxhY2Vob2xkZXIgc3BlY2lmaWVzIGEgc2hvcnQgaGludCBcclxuICAgICAgICAgICAgICAgICAgICB0aGF0IGRlc2NyaWJlcyB0aGUgZXhwZWN0ZWQgdmFsdWUgb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyBmaWVsZDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5WYWx1ZXMgUmVxdWlyZWQ6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5JbnB1dCBWYWxpZGF0aW9uOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHA+SW5wdXQgVmFsaWRhdGlvbjo8L3A+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX0gID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vbmVcIj5Ob25lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEZWNpbWFsIE51bWJlclwiPkRlY2ltYWwgTnVtYmVyIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW50ZWdlciBOdW1iZXJcIj5JbnRlZ2VyIE51bWJlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRW1haWxcIj5FbWFpbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVJMXCI+VVJMPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMZXR0ZXJzXCI+TGV0dGVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPHA+WW91IG5lZWQgdG8gY2hvc2UgZGVmYXVsdCBkYXRlIGFnYWluIHRvIFxyXG4gICAgICAgICAgICAgICAgICBzYXZlIHdpdGggbmV3IGZvcm1hdGQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG5cclxuICBjYXNlICdmb3JtX25hbWUyJzpcclxuICAgIHJldHVybiAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTFcIiBpZD1cImZvcm1fbmFtZTJcIiA+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+RGVmYXVsdCB2YWx1ZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0Oic0NXB4J319XHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGlzIGF0dHJpYnV0ZSB3aGVuIFxyXG4gICAgICAgICAgICAgICAgICAgIGl0IGlzIHNob3duIHRvIHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlZhbHVlcyBSZXF1aXJlZDo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHA+VGljayBpZiB0aGlzIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCB0byBiZSBcclxuICAgICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG5cclxuICBjYXNlICdmb3JtX25hbWUzJzpcclxuICAgIHJldHVybiAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTNcIiBpZD1cImZvcm1fbmFtZTNcIiA+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkRlZmF1bHQgdmFsdWU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICAgICAgICAgIG9yZGVyIChlZzogQXR0cmlidXRlIHdpdGggc29ydGluZyBvcmRlciBcclxuICAgICAgICAgICAgICAgICAgMSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0b3Agb2YgQXR0cmlidXRlIDIpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlBsYWNlaG9sZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIHBsYWNlaG9sZGVyIHNwZWNpZmllcyBhIHNob3J0IGhpbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdCBkZXNjcmliZXMgdGhlIGV4cGVjdGVkIHZhbHVlIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMgZmllbGQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VmFsdWVzIFJlcXVpcmVkOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgPC9Gb3JtPjtcclxuXHJcbmNhc2UgJ2Zvcm1fbmFtZTQnOlxyXG4gICAgcmV0dXJuICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lNFwiIGlkPVwiZm9ybV9uYW1lNFwiID4gIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5WYWx1ZXMgUmVxdWlyZWQ6PC9UZXh0U3R5bGU+IFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICBmaWxsZWQgYnkgeW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgIDwvRm9ybT47XHJcblxyXG4gIGNhc2UgJ2Zvcm1fbmFtZTUnOlxyXG4gICAgcmV0dXJuICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lNVwiIGlkPVwiZm9ybV9uYW1lNVwiID5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlZhbHVlcyBSZXF1aXJlZDo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5QbGFjZWhvbGRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgcGxhY2Vob2xkZXIgc3BlY2lmaWVzIGEgc2hvcnQgaGludCBcclxuICAgICAgICAgICAgICAgICAgdGhhdCBkZXNjcmliZXMgdGhlIGV4cGVjdGVkIHZhbHVlIG9mIFxyXG4gICAgICAgICAgICAgICAgICB0aGlzIGZpZWxkPC9wPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG5cclxuICBjYXNlICdmb3JtX25hbWU2JzpcclxuICAgIHJldHVybiAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTZcIiBpZD1cImZvcm1fbmFtZTZcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5EZWZhdWx0IHZhbHVlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgYXR0cmlidXRlIHdoZW4gXHJcbiAgICAgICAgICAgICAgICAgIGl0IGlzIHNob3duIHRvIHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG5cclxuY2FzZSAnZm9ybV9uYW1lNyc6XHJcbiAgcmV0dXJuICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lN1wiIGlkPVwiZm9ybV9uYW1lN1wiID5cclxuXHJcbiAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5EZWZhdWx0IFZhbHVlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwPlRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGlzIGF0dHJpYnV0ZSB3aGVuIFxyXG4gICAgICAgICAgICAgICAgaXQgaXMgc2hvd24gdG8geW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDwvRm9ybT47XHJcblxyXG5jYXNlICdmb3JtX25hbWU4JzpcclxuICByZXR1cm4gIDxGb3JtIG5hbWU9XCJmb3JtX25hbWU4XCIgaWQ9XCJmb3JtX25hbWU4XCIgPlxyXG5cclxuICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkRlZmF1bHQgdmFsdWU8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgICAgPHA+VGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgYXR0cmlidXRlIHdoZW4gXHJcbiAgICAgICAgICAgICAgICBpdCBpcyBzaG93biB0byB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UZXJtIGxpbms8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaW5rIHRvIHlvdXIgdGVybXMgcGFnZS5cIi8+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlRlcm0gbGluayB0ZXh0PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2hvcCB0ZXJtcy5cIi8+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgIDxici8+ICAgICBcclxuICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlRlcm0gd2FybmluZyB0ZXh0PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91IG11c3QgcmVhZCBhbmQgYWNjZXB0IHRoZSB0ZXJtcy5cIi8+XHJcbiAgICAgICAgICA8L0Zvcm0+O1xyXG5cclxuY2FzZSAnZm9ybV9uYW1lOSc6XHJcbiAgcmV0dXJuICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lOVwiIGlkPVwiZm9ybV9uYW1lOVwiID5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VmFsdWVzIFJlcXVpcmVkPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+UGxhY2Vob2xkZXI6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHA+VGhlIHBsYWNlaG9sZGVyIHNwZWNpZmllcyBhIHNob3J0IGhpbnQgXHJcbiAgICAgICAgICAgICAgICB0aGF0IGRlc2NyaWJlcyB0aGUgZXhwZWN0ZWQgdmFsdWUgb2YgXHJcbiAgICAgICAgICAgICAgICB0aGlzIGZpZWxkPC9wPlxyXG4gICAgICAgICAgPC9Gb3JtPjtcclxuXHJcblxyXG4gIGRlZmF1bHQ6XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG59XHJcblxyXG5oYW5kbGVDaGFuZ2UoZXZlbnQpIHsgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7IH1cclxuXHJcbnJlbmRlcigpIHtcclxucmV0dXJuIChcclxuICA8ZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICAgICAgPGZvcm0gPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX0gc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lMVwiPlRleHQgRmllbGQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTJcIj5UZXh0IEFyZWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTNcIj5EYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWU0XCI+TXVsdGlwbGUgU2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWU1XCI+RHJvcGRvd248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTZcIj5ZZXMvTm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTdcIj5TdGF0aWMgVGV4dDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lOFwiPlRlcm0gb2YgVXNhZ2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTlcIj5Qcm92aW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICA8YnIvPlxyXG4gICAge3RoaXMucmVuZGVyU2VsZWN0ZWRGb3JtKHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZSl9XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbn0gXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpcy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kcm9wZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9