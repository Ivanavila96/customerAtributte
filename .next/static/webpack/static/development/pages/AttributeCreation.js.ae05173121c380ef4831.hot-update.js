webpackHotUpdate("static\\development\\pages\\AttributeCreation.js",{

/***/ "./pages/Drop1.js":
/*!************************!*\
  !*** ./pages/Drop1.js ***!
  \************************/
/*! exports provided: Drop_1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drop_1", function() { return Drop_1; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropdown */ "./node_modules/react-dropdown/dist/index.js");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AttributeCreation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AttributeCreation */ "./pages/AttributeCreation.js");
/* harmony import */ var _Drop2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Drop2 */ "./pages/Drop2.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Drop_1 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Drop_1, _React$Component);

  var _super = _createSuper(Drop_1);

  function Drop_1() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Drop_1);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "change", function (e) {
      _this.props.onChange(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onSubmit", function (e) {
      e.preventDefault(); // this.props.onSubmit(this.state);

      _this.setState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });

      _this.props.onChange({
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

    _this.state = {
      selectedValue: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Drop_1, [{
    key: "renderSelectedForm",
    value: function renderSelectedForm(param) {
      switch (param) {
        case 'form_name1':
          return __jsx("form", {
            name: "form_name1",
            id: "form_name1"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Your Company"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "your-company"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Text Field",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Default Value:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Placeholder"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
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
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name2",
            id: "form_name2"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "How did you find us?"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "how-did-you-find-us"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Multiple Select",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"));

        case 'form_name3':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name3",
            id: "form_name3"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "You register as"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "register-as",
            disabled: true
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Dropdown",
            disabled: true
          }), __jsx("p", null, "Attribute options is managed in tab \"Manage Options\" on the left."), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Placeholder"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"));

        case 'form_name4':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name4",
            id: "form_name4"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Dear visitor!"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "dear-visitor"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Static Text",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Default Value:"), __jsx("input", {
            style: {
              width: '100%',
              height: '45px'
            },
            placeholder: "<strong>Please</strong>, \r don't hesitate to answer \r the questions below. We want \r to know little more about you \r to improve our store and make you \r feel at home :)"
          }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"));

        case 'form_name5':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name5",
            id: "form_name5"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Date of birth"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "date-of-birth"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Date",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Default Value:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            id: "date",
            type: "date"
          }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Placeholder"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null));

        case 'form_name6':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name6",
            id: "form_name6"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Country"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "country"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Dropdown",
            disabled: true
          }), __jsx("p", null, "Attribute options is managed in tab \"Manage Options\" on the left."), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Placeholder"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            }
          }), __jsx("p", null, "The placeholder specifies a short hint that describes the expected value of this field"));

        case 'form_name7':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name7",
            id: "form_name7"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Accept Marketing Email"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "accept-marketing-email-1"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Yes/No",
            disabled: true
          }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Default Value:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "The default value for this attribute when it is shown to your customers"));

        case 'form_name8':
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
            name: "form_name8",
            id: "form_name8"
          }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "Interests"
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            placeholder: "interests"
          }), __jsx("p", null, "For internal use. Must be unique with no spaces and length  <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx("input", {
            style: {
              width: '100%',
              height: '35px'
            },
            type: "number"
          }), __jsx("p", null, "Attributes are sorted in ascending order (eg: Attribute with sorting order 1 will be displayed on top of Attribute 2)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            placeholder: "Multiple Select",
            disabled: true
          }), __jsx("p", null, "Attribute options is managed in tab \"Manage Options\" on the left."), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Values Required:"), __jsx("input", {
            type: "checkbox",
            name: "required",
            value: "Yes"
          }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"));

        default:
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], null, __jsx("hr", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Attribute Properties"), __jsx("br", null), __jsx("hr", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Label*:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
            name: "label",
            placeholder: "Attribute Label",
            value: this.state.label
          }), __jsx("p", null, "Attribute label"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Code:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], null), __jsx("p", null, "For internal use. Must be unique with no spaces and length <= 30. Let it empty for auto generation"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Sorting Order:"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
            type: "number"
          }), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextStyle"], {
            variation: "strong"
          }, "Type*:"), __jsx(_Drop2__WEBPACK_IMPORTED_MODULE_12__["Drop_2"], null), __jsx("br", null));
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        selectedValue: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", null, __jsx("div", null, __jsx("form", null, __jsx("select", {
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
  }]);

  return Drop_1;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Ecm9wMS5qcyJdLCJuYW1lcyI6WyJEcm9wXzEiLCJpZCIsImNvZGUiLCJsYWJlbCIsIlR5cGUiLCJzb3J0aW5nb3JkZXIiLCJzdGF0dXMiLCJjYXJ0cGFnZSIsInJlZ2lzdGVycGFnZSIsImFjY291bnRwYWdlIiwib3JkZXJncmlkIiwiY3VzdG9tZXJncmlkIiwiZSIsInByb3BzIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGF0ZSIsInNlbGVjdGVkVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwicGFyYW0iLCJ3aWR0aCIsImhlaWdodCIsImV2ZW50IiwicmVuZGVyU2VsZWN0ZWRGb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS1EsSUFBTUEsTUFBYjtBQUFBOztBQUFBOztBQWtEQyxvQkFBYTtBQUFBOztBQUFBOztBQUNYOztBQURXLGdOQWhETDtBQUNOQyxRQUFFLEVBQUMsRUFERztBQUVOQyxVQUFJLEVBQUMsRUFGQztBQUdOQyxXQUFLLEVBQUMsRUFIQTtBQUlOQyxVQUFJLEVBQUMsRUFKQztBQUtOQyxrQkFBWSxFQUFDLEVBTFA7QUFNTkMsWUFBTSxFQUFDLEVBTkQ7QUFPTkMsY0FBUSxFQUFDLEVBUEg7QUFRTkMsa0JBQVksRUFBQyxFQVJQO0FBU05DLGlCQUFXLEVBQUMsRUFUTjtBQVVOQyxlQUFTLEVBQUMsRUFWSjtBQVdOQyxrQkFBWSxFQUFDO0FBWFAsS0FnREs7O0FBQUEsaU5BbENKLFVBQUFDLENBQUMsRUFBSTtBQUNaLFlBQUtDLEtBQUwsQ0FBV0MsUUFBWCwrRkFB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QW1hQztBQS9kQTtBQUFBO0FBQUEsaUNBa2VZNkIsS0FsZVosRUFrZW1CO0FBQUUsV0FBS2QsUUFBTCxDQUFjO0FBQUNRLHFCQUFhLEVBQUVNLEtBQUssQ0FBQ2pCLE1BQU4sQ0FBYUU7QUFBN0IsT0FBZDtBQUFxRDtBQWxlMUU7QUFBQTtBQUFBLDZCQW9lUTtBQUVULGFBQ0UsbUVBQ0EsbUJBQ0UsbUJBQ1Esb0JBQ0U7QUFBUSxhQUFLLEVBQUU7QUFBQ2EsZUFBSyxFQUFDLE1BQVA7QUFBZUMsZ0JBQU0sRUFBQztBQUF0QixTQUFmO0FBQThDLGFBQUssRUFBRSxLQUFLTixLQUFMLENBQVdDLGFBQWhFO0FBQStFLGdCQUFRLEVBQUUsS0FBS0M7QUFBOUYsU0FDSTtBQUFRLGFBQUssRUFBQyxFQUFkO0FBQWlCLGdCQUFRLEVBQUM7QUFBMUIsUUFESixFQUVJO0FBQVEsYUFBSyxFQUFDO0FBQWQsd0JBRkosRUFHSTtBQUFRLGFBQUssRUFBQztBQUFkLGdDQUhKLEVBSUk7QUFBUSxhQUFLLEVBQUM7QUFBZCwyQkFKSixFQUtJO0FBQVEsYUFBSyxFQUFDO0FBQWQseUJBTEosRUFNSTtBQUFRLGFBQUssRUFBQztBQUFkLHlCQU5KLEVBT0k7QUFBUSxhQUFLLEVBQUM7QUFBZCxtQkFQSixFQVFJO0FBQVEsYUFBSyxFQUFDO0FBQWQsaUNBUkosRUFTSTtBQUFRLGFBQUssRUFBQztBQUFkLHFCQVRKLENBREYsQ0FEUixFQWNPLG1NQWRQLEVBa0JKLGlCQWxCSSxFQW9CQyxLQUFLTSxrQkFBTCxDQUF3QixLQUFLUixLQUFMLENBQVdDLGFBQW5DLENBcEJELENBREYsQ0FEQSxDQURGO0FBK0JDO0FBcmdCQTs7QUFBQTtBQUFBLEVBQTRCUSw0Q0FBSyxDQUFDQyxTQUFsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcQXR0cmlidXRlQ3JlYXRpb24uanMuYWUwNTE3MzEyMWMzODBlZjQ4MzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NhcmQsIEZvcm0sQ2hlY2tib3gsIFRleHRTdHlsZSxCdXR0b24sIFNlbGVjdCwgUGFnZSwgU3RhY2ssIFRleHRGaWVsZCwgSGVhZGluZywgQ2hvaWNlTGlzdCx9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1kcm9wZG93bic7XHJcbmltcG9ydCAncmVhY3QtZHJvcGRvd24vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL0F0dHJpYnV0ZUNyZWF0aW9uJztcclxuaW1wb3J0IHtEcm9wXzJ9IGZyb20gJy4vRHJvcDInO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5cclxuXHJcblxyXG5cclxuIGV4cG9ydCBjbGFzcyBEcm9wXzEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGlkOlwiXCIsXHJcbiAgICBjb2RlOlwiXCIsXHJcbiAgICBsYWJlbDpcIlwiLFxyXG4gICAgVHlwZTpcIlwiLFxyXG4gICAgc29ydGluZ29yZGVyOlwiXCIsXHJcbiAgICBzdGF0dXM6XCJcIixcclxuICAgIGNhcnRwYWdlOlwiXCIsXHJcbiAgICByZWdpc3RlcnBhZ2U6XCJcIixcclxuICAgIGFjY291bnRwYWdlOlwiXCIsXHJcbiAgICBvcmRlcmdyaWQ6XCJcIixcclxuICAgIGN1c3RvbWVyZ3JpZDpcIlwiXHJcbiAgfTtcclxuICBcclxuICBjaGFuZ2UgPSBlID0+IHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB0aGlzLnByb3BzLm9uU3VibWl0KHRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICBpZDpcIlwiLFxyXG4gICAgICBjb2RlOlwiXCIsXHJcbiAgICAgIGxhYmVsOlwiXCIsXHJcbiAgICAgIFR5cGU6XCJcIixcclxuICAgICAgc29ydGluZ29yZGVyOlwiXCIsXHJcbiAgICAgIHN0YXR1czpcIlwiLFxyXG4gICAgICBjYXJ0cGFnZTpcIlwiLFxyXG4gICAgICByZWdpc3RlcnBhZ2U6XCJcIixcclxuICAgICAgYWNjb3VudHBhZ2U6XCJcIixcclxuICAgICAgb3JkZXJncmlkOlwiXCIsXHJcbiAgICAgIGN1c3RvbWVyZ3JpZDpcIlwiXHJcbiAgICB9KTtcclxuICB9O1xyXG4gXHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBzZWxlY3RlZFZhbHVlOicnXHJcbiAgICAgICB9XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxucmVuZGVyU2VsZWN0ZWRGb3JtKHBhcmFtKSB7XHJcbiAgXHJcbnN3aXRjaChwYXJhbSkge1xyXG4gIGNhc2UgJ2Zvcm1fbmFtZTEnOlxyXG4gICAgcmV0dXJuICA8Zm9ybSAgbmFtZT1cImZvcm1fbmFtZTFcIiBpZD1cImZvcm1fbmFtZTFcIiA+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIFByb3BlcnRpZXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+TGFiZWwqOjwvVGV4dFN0eWxlPiAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgQ29tcGFueVwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBsYWJlbDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Db2RlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyLWNvbXBhbnlcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5Gb3IgaW50ZXJuYWwgdXNlLiBNdXN0IGJlIHVuaXF1ZSB3aXRoIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vIHNwYWNlcyBhbmQgbGVuZ3RoICAmbHQ7PSAzMC4gTGV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+U29ydGluZyBPcmRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIgKGVnOiBBdHRyaWJ1dGUgd2l0aCBzb3J0aW5nIG9yZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIDEgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdG9wIG9mIEF0dHJpYnV0ZSAyKTwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UeXBlKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBwbGFjZWhvbGRlcj1cIlRleHQgRmllbGRcIiBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkRlZmF1bHQgVmFsdWU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGlzIGF0dHJpYnV0ZSB3aGVuIFxyXG4gICAgICAgICAgICAgICAgICAgIGl0IGlzIHNob3duIHRvIHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlBsYWNlaG9sZGVyPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgcGxhY2Vob2xkZXIgc3BlY2lmaWVzIGEgc2hvcnQgaGludCBcclxuICAgICAgICAgICAgICAgICAgICB0aGF0IGRlc2NyaWJlcyB0aGUgZXhwZWN0ZWQgdmFsdWUgb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyBmaWVsZDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5WYWx1ZXMgUmVxdWlyZWQ8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsZWQgYnkgeW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+SW5wdXQgVmFsaWRhdGlvbjo8L3A+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX0gID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vbmVcIj5Ob25lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEZWNpbWFsIE51bWJlclwiPkRlY2ltYWwgTnVtYmVyIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW50ZWdlciBOdW1iZXJcIj5JbnRlZ2VyIE51bWJlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRW1haWxcIj5FbWFpbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVJMXCI+VVJMPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMZXR0ZXJzXCI+TGV0dGVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Zvcm0+O1xyXG5cclxuICBjYXNlICdmb3JtX25hbWUyJzpcclxuICAgICAgICAgICAgcmV0dXJuICAgIDxGb3JtIG5hbWU9XCJmb3JtX25hbWUyXCIgaWQ9XCJmb3JtX25hbWUyXCIgPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgUHJvcGVydGllczwvSGVhZGluZz5cclxuICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+TGFiZWwqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGRpZCB5b3UgZmluZCB1cz9cIi8+XHJcbiAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBsYWJlbDwvcD5cclxuICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+Q29kZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImhvdy1kaWQteW91LWZpbmQtdXNcIi8+XHJcbiAgICAgICAgICAgIDxwPkZvciBpbnRlcm5hbCB1c2UuIE11c3QgYmUgdW5pcXVlIHdpdGggXHJcbiAgICAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgICAgaXQgZW1wdHkgZm9yIGF1dG8gZ2VuZXJhdGlvbjwvcD5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+U29ydGluZyBPcmRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICA8cD5BdHRyaWJ1dGVzIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIFxyXG4gICAgICAgICAgICAgICAgb3JkZXIgKGVnOiBBdHRyaWJ1dGUgd2l0aCBzb3J0aW5nIG9yZGVyIFxyXG4gICAgICAgICAgICAgICAgMSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0b3Agb2YgQXR0cmlidXRlIDIpPC9wPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UeXBlKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBwbGFjZWhvbGRlcj1cIk11bHRpcGxlIFNlbGVjdFwiIGRpc2FibGVkIC8+ICAgIFxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5WYWx1ZXMgUmVxdWlyZWQ6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgPHA+VGljayBpZiB0aGlzIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCB0byBiZSBcclxuICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICA8L0Zvcm0+O1xyXG4gICAgICAgICAgXHJcbiAgY2FzZSAnZm9ybV9uYW1lMyc6XHJcbiAgICByZXR1cm4gIDxGb3JtIG5hbWU9XCJmb3JtX25hbWUzXCIgaWQ9XCJmb3JtX25hbWUzXCIgPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkxhYmVsKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91IHJlZ2lzdGVyIGFzXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIGxhYmVsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkNvZGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlZ2lzdGVyLWFzXCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQvPlxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Tb3J0aW5nIE9yZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICAgICAgICAgIG9yZGVyIChlZzogQXR0cmlidXRlIHdpdGggc29ydGluZyBvcmRlciBcclxuICAgICAgICAgICAgICAgICAgMSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0b3Agb2YgQXR0cmlidXRlIDIpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlR5cGUqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBwbGFjZWhvbGRlcj1cIkRyb3Bkb3duXCIgZGlzYWJsZWQgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlIG9wdGlvbnMgaXMgbWFuYWdlZCBpbiB0YWIgXCJNYW5hZ2UgT3B0aW9uc1wiIG9uIHRoZSBsZWZ0LjwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5WYWx1ZXMgUmVxdWlyZWQ6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5QbGFjZWhvbGRlcjwvVGV4dFN0eWxlPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBwbGFjZWhvbGRlciBzcGVjaWZpZXMgYSBzaG9ydCBoaW50IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQgZGVzY3JpYmVzIHRoZSBleHBlY3RlZCB2YWx1ZSBvZiBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzIGZpZWxkPC9wPlxyXG4gICAgICAgICAgICA8L0Zvcm0+O1xyXG5cclxuY2FzZSAnZm9ybV9uYW1lNCc6XHJcbiAgcmV0dXJuICAgIDxGb3JtIG5hbWU9XCJmb3JtX25hbWU0XCIgaWQ9XCJmb3JtX25hbWU0XCIgPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkxhYmVsKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVhciB2aXNpdG9yIVwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBsYWJlbDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Db2RlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJkZWFyLXZpc2l0b3JcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5Gb3IgaW50ZXJuYWwgdXNlLiBNdXN0IGJlIHVuaXF1ZSB3aXRoIFxyXG4gICAgICAgICAgICAgICAgICAgIG5vIHNwYWNlcyBhbmQgbGVuZ3RoICAmbHQ7PSAzMC4gTGV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Tb3J0aW5nIE9yZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIgKGVnOiBBdHRyaWJ1dGUgd2l0aCBzb3J0aW5nIG9yZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIDEgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdG9wIG9mIEF0dHJpYnV0ZSAyKTwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UeXBlKjo8L1RleHRTdHlsZT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPVwiU3RhdGljIFRleHRcIiBkaXNhYmxlZCAvPiAgIFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5EZWZhdWx0IFZhbHVlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzQ1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI8c3Ryb25nPlBsZWFzZTwvc3Ryb25nPiwgXHJcbiAgICAgICAgICAgICAgICAgIGRvbiYjMDM5O3QgaGVzaXRhdGUgdG8gYW5zd2VyIFxyXG4gICAgICAgICAgICAgICAgICB0aGUgcXVlc3Rpb25zIGJlbG93LiBXZSB3YW50IFxyXG4gICAgICAgICAgICAgICAgICB0byBrbm93IGxpdHRsZSBtb3JlIGFib3V0IHlvdSBcclxuICAgICAgICAgICAgICAgICAgdG8gaW1wcm92ZSBvdXIgc3RvcmUgYW5kIG1ha2UgeW91IFxyXG4gICAgICAgICAgICAgICAgICBmZWVsIGF0IGhvbWUgOilcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhpcyBhdHRyaWJ1dGUgd2hlbiBcclxuICAgICAgICAgICAgICAgICAgICBpdCBpcyBzaG93biB0byB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgPC9Gb3JtPjtcclxuICAgICAgICAgICAgICBcclxuY2FzZSAnZm9ybV9uYW1lNSc6XHJcbiAgcmV0dXJuICAgIDxGb3JtIG5hbWU9XCJmb3JtX25hbWU1XCIgaWQ9XCJmb3JtX25hbWU1XCIgPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPkxhYmVsKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZSBvZiBiaXJ0aFwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBsYWJlbDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Db2RlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJkYXRlLW9mLWJpcnRoXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Tb3J0aW5nIE9yZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIgKGVnOiBBdHRyaWJ1dGUgd2l0aCBzb3J0aW5nIG9yZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIDEgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdG9wIG9mIEF0dHJpYnV0ZSAyKTwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UeXBlKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9XCJEYXRlXCIgZGlzYWJsZWQgLz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5EZWZhdWx0IFZhbHVlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgYXR0cmlidXRlIHdoZW4gaXQgXHJcbiAgICAgICAgICAgICAgICAgICAgaXMgc2hvd24gdG8geW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+UGxhY2Vob2xkZXI8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBwbGFjZWhvbGRlciBzcGVjaWZpZXMgYSBzaG9ydCBoaW50IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQgZGVzY3JpYmVzIHRoZSBleHBlY3RlZCB2YWx1ZSBvZiBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzIGZpZWxkPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlZhbHVlcyBSZXF1aXJlZDo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDwvRm9ybT47XHJcblxyXG5jYXNlICdmb3JtX25hbWU2JzpcclxuICByZXR1cm4gICAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZTZcIiBpZD1cImZvcm1fbmFtZTZcIiA+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIFByb3BlcnRpZXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+TGFiZWwqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBsYWJlbDwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Db2RlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY291bnRyeVwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkZvciBpbnRlcm5hbCB1c2UuIE11c3QgYmUgdW5pcXVlIHdpdGggXHJcbiAgICAgICAgICAgICAgICAgICAgbm8gc3BhY2VzIGFuZCBsZW5ndGggICZsdDs9IDMwLiBMZXQgXHJcbiAgICAgICAgICAgICAgICAgICAgaXQgZW1wdHkgZm9yIGF1dG8gZ2VuZXJhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+U29ydGluZyBPcmRlcjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlcyBhcmUgc29ydGVkIGluIGFzY2VuZGluZyBcclxuICAgICAgICAgICAgICAgICAgICBvcmRlciAoZWc6IEF0dHJpYnV0ZSB3aXRoIHNvcnRpbmcgb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgMSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0b3Agb2YgQXR0cmlidXRlIDIpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlR5cGUqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBwbGFjZWhvbGRlcj1cIkRyb3Bkb3duXCIgZGlzYWJsZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgb3B0aW9ucyBpcyBtYW5hZ2VkIGluIHRhYiBcIk1hbmFnZSBPcHRpb25zXCIgb24gdGhlIGxlZnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5WYWx1ZXMgUmVxdWlyZWQ6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5QbGFjZWhvbGRlcjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgcGxhY2Vob2xkZXIgc3BlY2lmaWVzIGEgc2hvcnQgaGludCBcclxuICAgICAgICAgICAgICAgICAgICB0aGF0IGRlc2NyaWJlcyB0aGUgZXhwZWN0ZWQgdmFsdWUgb2YgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyBmaWVsZDwvcD5cclxuICAgICAgICAgICAgPC9Gb3JtPjtcclxuXHJcbmNhc2UgJ2Zvcm1fbmFtZTcnOlxyXG4gIHJldHVybiAgICA8Rm9ybSBuYW1lPVwiZm9ybV9uYW1lN1wiIGlkPVwiZm9ybV9uYW1lN1wiID5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgUHJvcGVydGllczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMzVweCd9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFjY2VwdCBNYXJrZXRpbmcgRW1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+Q29kZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWNjZXB0LW1hcmtldGluZy1lbWFpbC0xXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICAgICAgICAgICBubyBzcGFjZXMgYW5kIGxlbmd0aCAgJmx0Oz0gMzAuIExldCBcclxuICAgICAgICAgICAgICAgICAgICBpdCBlbXB0eSBmb3IgYXV0byBnZW5lcmF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Tb3J0aW5nIE9yZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIgKGVnOiBBdHRyaWJ1dGUgd2l0aCBzb3J0aW5nIG9yZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIDEgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdG9wIG9mIEF0dHJpYnV0ZSAyKTwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UeXBlKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9XCJZZXMvTm9cIiBkaXNhYmxlZCAvPiBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+RGVmYXVsdCBWYWx1ZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiLz5cclxuICAgICAgICAgICAgICAgICAgPHA+VGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlIHdoZW4gaXQgaXMgc2hvd24gdG8geW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgIDwvRm9ybT47XHJcblxyXG5jYXNlICdmb3JtX25hbWU4JzpcclxuICByZXR1cm4gICAgPEZvcm0gbmFtZT1cImZvcm1fbmFtZThcIiBpZD1cImZvcm1fbmFtZThcIiA+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIFByb3BlcnRpZXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+TGFiZWwqOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnRlcmVzdHNcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5BdHRyaWJ1dGUgbGFiZWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+Q29kZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OiczNXB4J319XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW50ZXJlc3RzXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICAgICAgICAgICBubyBzcGFjZXMgYW5kIGxlbmd0aCAgJmx0Oz0gMzAuIExldCBcclxuICAgICAgICAgICAgICAgICAgICBpdCBlbXB0eSBmb3IgYXV0byBnZW5lcmF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Tb3J0aW5nIE9yZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZXMgYXJlIHNvcnRlZCBpbiBhc2NlbmRpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIgKGVnOiBBdHRyaWJ1dGUgd2l0aCBzb3J0aW5nIG9yZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgIDEgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdG9wIG9mIEF0dHJpYnV0ZSAyKTwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UeXBlKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gcGxhY2Vob2xkZXI9XCJNdWx0aXBsZSBTZWxlY3RcIiBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZSBvcHRpb25zIGlzIG1hbmFnZWQgaW4gdGFiIFwiTWFuYWdlIE9wdGlvbnNcIiBvbiB0aGUgbGVmdC48L3A+ICAgIFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5WYWx1ZXMgUmVxdWlyZWQ6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VGljayBpZiB0aGlzIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCB0byBiZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICA8L0Zvcm0+OyAgICAgIFxyXG5cclxuICBkZWZhdWx0OlxyXG4gICAgcmV0dXJuIDxGb3JtPlxyXG4gICAgPGhyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBQcm9wZXJ0aWVzPC9IZWFkaW5nPiAgICBcclxuICAgICAgICA8YnIvPlxyXG4gICAgPGhyLz5cclxuICAgIDxici8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5MYWJlbCo6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgIG5hbWU9XCJsYWJlbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkF0dHJpYnV0ZSBMYWJlbFwiXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYWJlbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPHA+QXR0cmlidXRlIGxhYmVsPC9wPlxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+Q29kZTo8L1RleHRTdHlsZT5cclxuICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHA+Rm9yIGludGVybmFsIHVzZS4gTXVzdCBiZSB1bmlxdWUgd2l0aCBcclxuICAgICAgICAgICBubyBzcGFjZXMgYW5kIGxlbmd0aCAmbHQ7PSAzMC4gTGV0IFxyXG4gICAgICAgICAgIGl0IGVtcHR5IGZvciBhdXRvIGdlbmVyYXRpb248L3A+XHJcbiAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Tb3J0aW5nIE9yZGVyOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5UeXBlKjo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgPERyb3BfMi8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPC9Gb3JtPjtcclxufVxyXG59XHJcblxyXG5cclxuaGFuZGxlQ2hhbmdlKGV2ZW50KSB7IHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pOyB9XHJcblxyXG5yZW5kZXIoKSB7XHJcbiAgXHJcbnJldHVybiAoXHJcbiAgPD5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxmb3JtID5cclxuICAgICAgICAgICAgICA8c2VsZWN0IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzM1cHgnfX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTFcIj5Zb3VyIGNvbXBhbnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTJcIj5Ib3cgZGlkIHlvdSBmaW5kIHVzPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lM1wiPllvdSByZWdpc3RlciBhczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lNFwiPkRlYXIgVmlzaXRvciE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvcm1fbmFtZTVcIj5EYXRlIG9mIGJpcnRoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtX25hbWU2XCI+Q291bnRyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lN1wiPkFjY2VwdCBNYWtldGluZyBFbWFpbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybV9uYW1lOFwiPkludGVyZXN0czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICA8cD5JZiB5b3UgY2hvb3NlIGEgdGVtcGxhdGUsIHRoZSBmb2xsb3dpbmcgXHJcbiAgYXR0cmlidXRlIGZpZWxkcyB3aWxsIGJlIGZpbGxlZCBhdXRvbWF0aWNhbGx5LiBcclxuICBPciB5b3UgY2FuIGxlYXZlIHRoaXMgYm94IGJsYW5rIGFuZCBjcmVhdGUgeW91ciB1bmlxdWUgXHJcbiAgZmllbGQgIGJ5IGZpbGxpbmcgaW4gdGhlc2UgYm94ZXMuPC9wPlxyXG48YnIvPlxyXG4gIFxyXG4gICAge3RoaXMucmVuZGVyU2VsZWN0ZWRGb3JtKHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZSl9XHJcbiAgICBcclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBcclxuXHJcbiAgPC8+XHJcbik7XHJcbn1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=