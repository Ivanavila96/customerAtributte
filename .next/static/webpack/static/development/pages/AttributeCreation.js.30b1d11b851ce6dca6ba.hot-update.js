webpackHotUpdate("static\\development\\pages\\AttributeCreation.js",{

/***/ "./pages/AttributeCreation.js":
/*!************************************!*\
  !*** ./pages/AttributeCreation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AttCreation; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Drop1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Drop1 */ "./pages/Drop1.js");
/* harmony import */ var _Drop2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Drop2 */ "./pages/Drop2.js");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/polaris-icons */ "./node_modules/@shopify/polaris-icons/dist/index.mjs");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var AttCreation = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AttCreation, _React$Component);

  var _super = _createSuper(AttCreation);

  function AttCreation() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttCreation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttCreation, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        sectioned: true,
        title: " Create attribute"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Stack"], {
        distribution: "leading"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        url: "/Index"
      }, "Home"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        url: "/componenteslist"
      }, "Attributes"), __jsx("p", null, "Attribute"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Page"], null, __jsx("form", {
        id: "inicial"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextStyle"], {
        variation: "strong"
      }, "Use Template:"), __jsx(_Drop1__WEBPACK_IMPORTED_MODULE_8__["Drop_1"], null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Heading"], null, "Attribute Configuration"), __jsx("br", null), __jsx("hr", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextStyle"], {
        variation: "strong"
      }, "Show on Cart Page:"), __jsx("input", {
        type: "checkbox",
        name: "required",
        value: "Yes",
        helpText: "Tick if you want to use this attribute on cart page."
      }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextStyle"], {
        variation: "strong"
      }, "Show on Register Page:"), __jsx("input", {
        type: "checkbox",
        name: "required",
        value: "Yes",
        helpText: "'Tick if you want to use this attribute on register page.'"
      }), __jsx("p", null, "Tick if this attribute is required to be filled by your customers"), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Stack"], {
        distribution: "trailing"
      }, __jsx("button", null, "Add new Atribute"))), __jsx("br", null))));
    }
  }]);

  return AttCreation;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BdHRyaWJ1dGVDcmVhdGlvbi5qcyJdLCJuYW1lcyI6WyJBdHRDcmVhdGlvbiIsImlkIiwiY29kZSIsImxhYmVsIiwiVHlwZSIsInNvcnRpbmdvcmRlciIsInN0YXR1cyIsImNhcnRwYWdlIiwicmVnaXN0ZXJwYWdlIiwiYWNjb3VudHBhZ2UiLCJvcmRlcmdyaWQiLCJjdXN0b21lcmdyaWQiLCJlIiwicHJvcHMiLCJvbkNoYW5nZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdxQkEsVzs7Ozs7Ozs7Ozs7Ozs7OztnTkFFWDtBQUNOQyxRQUFFLEVBQUMsRUFERztBQUVOQyxVQUFJLEVBQUMsRUFGQztBQUdOQyxXQUFLLEVBQUMsRUFIQTtBQUlOQyxVQUFJLEVBQUMsRUFKQztBQUtOQyxrQkFBWSxFQUFDLEVBTFA7QUFNTkMsWUFBTSxFQUFDLEVBTkQ7QUFPTkMsY0FBUSxFQUFDLEVBUEg7QUFRTkMsa0JBQVksRUFBQyxFQVJQO0FBU05DLGlCQUFXLEVBQUMsRUFUTjtBQVVOQyxlQUFTLEVBQUMsRUFWSjtBQVdOQyxrQkFBWSxFQUFDO0FBWFAsSzs7aU5BY0MsVUFBQUMsQ0FBQyxFQUFJO0FBQ1osWUFBS0MsS0FBTCxDQUFXQyxRQUFYLCtGQUF1QkYsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLElBQWhDLEVBQXVDSixDQUFDLENBQUNHLE1BQUYsQ0FBU0UsS0FBaEQ7O0FBQ0EsWUFBS0MsUUFBTCwrRkFDR04sQ0FBQyxDQUFDRyxNQUFGLENBQVNDLElBRFosRUFDbUJKLENBQUMsQ0FBQ0csTUFBRixDQUFTRSxLQUQ1QjtBQUdELEs7O21OQUVVLFVBQUFMLENBQUMsRUFBSTtBQUNkQSxPQUFDLENBQUNPLGNBQUYsR0FEYyxDQUVkOztBQUNBLFlBQUtELFFBQUwsQ0FBYztBQUNaRSxpQkFBUyxFQUFFLEVBREM7QUFFWkMsZ0JBQVEsRUFBRSxFQUZFO0FBR1pDLGdCQUFRLEVBQUUsRUFIRTtBQUlaQyxhQUFLLEVBQUUsRUFKSztBQUtaQyxnQkFBUSxFQUFFO0FBTEUsT0FBZDs7QUFRQSxZQUFLWCxLQUFMLENBQVdDLFFBQVgsQ0FBb0I7QUFDbEJiLFVBQUUsRUFBQyxFQURlO0FBRWxCQyxZQUFJLEVBQUMsRUFGYTtBQUdsQkMsYUFBSyxFQUFDLEVBSFk7QUFJbEJDLFlBQUksRUFBQyxFQUphO0FBS2xCQyxvQkFBWSxFQUFDLEVBTEs7QUFNbEJDLGNBQU0sRUFBQyxFQU5XO0FBT2xCQyxnQkFBUSxFQUFDLEVBUFM7QUFRbEJDLG9CQUFZLEVBQUMsRUFSSztBQVNsQkMsbUJBQVcsRUFBQyxFQVRNO0FBVWxCQyxpQkFBUyxFQUFDLEVBVlE7QUFXbEJDLG9CQUFZLEVBQUM7QUFYSyxPQUFwQjtBQWFELEs7Ozs7Ozs7NkJBQ0s7QUFHUixhQUVBLG1FQUNFLE1BQUMsc0RBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGFBQUssRUFBQztBQUF0QixTQUNFLE1BQUMsdURBQUQ7QUFBTyxvQkFBWSxFQUFDO0FBQXBCLFNBQ0UsTUFBQyxzREFBRDtBQUFNLFdBQUcsRUFBQztBQUFWLGdCQURGLEVBS0UsTUFBQyxzREFBRDtBQUFNLFdBQUcsRUFBQztBQUFWLHNCQUxGLEVBUUksNkJBUkosQ0FERixDQURGLEVBY0EsTUFBQyxzREFBRCxRQUNFO0FBQU0sVUFBRSxFQUFDO0FBQVQsU0FDRSxNQUFDLHNEQUFEO0FBQU0saUJBQVM7QUFBZixTQUNFLE1BQUMsMkRBQUQ7QUFBVyxpQkFBUyxFQUFDO0FBQXJCLHlCQURGLEVBRUksTUFBQyw2Q0FBRCxPQUZKLEVBSUUsaUJBSkYsRUFLRSxNQUFDLHlEQUFELGtDQUxGLEVBTUUsaUJBTkYsRUFPRSxpQkFQRixFQVFZLGlCQVJaLEVBU1csTUFBQywyREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsOEJBVFgsRUFVWTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQyxVQUE1QjtBQUF1QyxhQUFLLEVBQUMsS0FBN0M7QUFBbUQsZ0JBQVEsRUFBQztBQUE1RCxRQVZaLEVBV1kscUZBWFosRUFhWSxpQkFiWixFQWdCWSxNQUFDLDJEQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQixrQ0FoQlosRUFpQlk7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFJLEVBQUMsVUFBNUI7QUFBdUMsYUFBSyxFQUFDLEtBQTdDO0FBQW1ELGdCQUFRLEVBQUM7QUFBNUQsUUFqQlosRUFrQlkscUZBbEJaLEVBb0JZLGlCQXBCWixFQXdCSixpQkF4QkksRUF5QkosaUJBekJJLEVBMEJKLE1BQUMsdURBQUQ7QUFBTyxvQkFBWSxFQUFDO0FBQXBCLFNBQ0EseUNBREEsQ0ExQkksQ0FERixFQStCSSxpQkEvQkosQ0FERixDQWRBLENBRkE7QUFzREM7Ozs7RUF6R3dDYyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxBdHRyaWJ1dGVDcmVhdGlvbi5qcy4zMGIxZDExYjg1MWNlNmRjYTZiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmLCBDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Ryb3BfMX0gZnJvbSAnLi9Ecm9wMSc7XHJcbmltcG9ydCB7RHJvcF8yfSBmcm9tICcuL0Ryb3AyJztcclxuaW1wb3J0ICdyZWFjdC1kcm9wZG93bi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge0NhcmQsRm9ybSwgQ2hvaWNlTGlzdCwgVGV4dFN0eWxlLEJ1dHRvbiwgSGVhZGluZyxFbXB0eVN0YXRlLCBBcHBQcm92aWRlcixMYXlvdXQsUGFnZSwgU3RhY2ssIEFjdGlvbkxpc3QsIEF2YXRhciwgQ29udGV4dHVhbFNhdmVCYXIsIEZvcm1MYXlvdXQsRnJhbWUsIExvYWRpbmcsTW9kYWwsIE5hdmlnYXRpb24sIFNrZWxldG9uQm9keVRleHQsIFNrZWxldG9uRGlzcGxheVRleHQsIFNrZWxldG9uUGFnZSwgVGV4dENvbnRhaW5lciwgVGV4dEZpZWxkLCBUb2FzdCwgVG9wQmFyLCBMaW5rfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7QXJyb3dMZWZ0TWlub3IsIE5vdGVNYWpvck1vbm90b25lLCBIb21lTWFqb3JNb25vdG9uZSwgT3JkZXJzTWFqb3JUd290b25lLCBNb2JpbGVIYW1idXJnZXJNYWpvck1vbm90b25lLCBMaXN0TWFqb3JNb25vdG9uZSwgQmFua01ham9yTW9ub3RvbmUsVHJvdWJsZXNob290TWFqb3JNb25vdG9uZSxTZXR0aW5nc01ham9yTW9ub3RvbmV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xyXG5pbXBvcnQge21vc3RyYXJ9IGZyb20gJy4vRHJvcDEnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0Q3JlYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgIHtcclxuICBcclxuICBzdGF0ZSA9IHtcclxuICAgIGlkOlwiXCIsXHJcbiAgICBjb2RlOlwiXCIsXHJcbiAgICBsYWJlbDpcIlwiLFxyXG4gICAgVHlwZTpcIlwiLFxyXG4gICAgc29ydGluZ29yZGVyOlwiXCIsXHJcbiAgICBzdGF0dXM6XCJcIixcclxuICAgIGNhcnRwYWdlOlwiXCIsXHJcbiAgICByZWdpc3RlcnBhZ2U6XCJcIixcclxuICAgIGFjY291bnRwYWdlOlwiXCIsXHJcbiAgICBvcmRlcmdyaWQ6XCJcIixcclxuICAgIGN1c3RvbWVyZ3JpZDpcIlwiXHJcbiAgfTtcclxuICBcclxuICBjaGFuZ2UgPSBlID0+IHtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB0aGlzLnByb3BzLm9uU3VibWl0KHRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICBpZDpcIlwiLFxyXG4gICAgICBjb2RlOlwiXCIsXHJcbiAgICAgIGxhYmVsOlwiXCIsXHJcbiAgICAgIFR5cGU6XCJcIixcclxuICAgICAgc29ydGluZ29yZGVyOlwiXCIsXHJcbiAgICAgIHN0YXR1czpcIlwiLFxyXG4gICAgICBjYXJ0cGFnZTpcIlwiLFxyXG4gICAgICByZWdpc3RlcnBhZ2U6XCJcIixcclxuICAgICAgYWNjb3VudHBhZ2U6XCJcIixcclxuICAgICAgb3JkZXJncmlkOlwiXCIsXHJcbiAgICAgIGN1c3RvbWVyZ3JpZDpcIlwiXHJcbiAgICB9KTtcclxuICB9O1xyXG5yZW5kZXIoKXtcclxuXHJcbiBcclxucmV0dXJuKFxyXG5cclxuPD5cclxuICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9XCIgQ3JlYXRlIGF0dHJpYnV0ZVwiPlxyXG4gICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImxlYWRpbmdcIj5cclxuICAgICAgPExpbmsgdXJsPScvSW5kZXgnID5cclxuICAgICAgICBIb21lXHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgICAgICBcclxuICAgICAgPExpbmsgdXJsPScvY29tcG9uZW50ZXNsaXN0JyA+XHJcbiAgICAgICAgQXR0cmlidXRlc1xyXG4gICAgICA8L0xpbms+XHJcbiAgICAgICAgPHA+QXR0cmlidXRlPC9wPlxyXG4gICAgPC9TdGFjaz4gICAgICBcclxuICA8L0NhcmQ+XHJcbiAgICAgICAgXHJcbjxQYWdlPlxyXG4gIDxmb3JtIGlkPVwiaW5pY2lhbFwiPlxyXG4gICAgPENhcmQgc2VjdGlvbmVkPiAgICAgXHJcbiAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+VXNlIFRlbXBsYXRlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgIDxEcm9wXzEvPlxyXG4gICBcclxuICAgICAgPGJyLz5cclxuICAgICAgPEhlYWRpbmc+QXR0cmlidXRlIENvbmZpZ3VyYXRpb248L0hlYWRpbmc+ICAgIFxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5TaG93IG9uIENhcnQgUGFnZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiIGhlbHBUZXh0PVwiVGljayBpZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBhdHRyaWJ1dGUgb24gY2FydCBwYWdlLlwiLz5cclxuICAgICAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5TaG93IG9uIFJlZ2lzdGVyIFBhZ2U6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlcXVpcmVkXCIgdmFsdWU9XCJZZXNcIiBoZWxwVGV4dD1cIidUaWNrIGlmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGF0dHJpYnV0ZSBvbiByZWdpc3RlciBwYWdlLidcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5UaWNrIGlmIHRoaXMgYXR0cmlidXRlIGlzIHJlcXVpcmVkIHRvIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZCBieSB5b3VyIGN1c3RvbWVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG48YnIvPlxyXG48YnIvPlxyXG48U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIj5cclxuPGJ1dHRvbiA+QWRkIG5ldyBBdHJpYnV0ZTwvYnV0dG9uPlxyXG48L1N0YWNrPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxici8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9QYWdlPlxyXG48Lz5cclxuICBcclxuICk7XHJcbn1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==