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
      var _this2 = this;

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
      }, __jsx("button", {
        onClick: function onClick(e) {
          return _this2.onSubmit(e);
        }
      }, "Add new Atribute"))), __jsx("br", null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BdHRyaWJ1dGVDcmVhdGlvbi5qcyJdLCJuYW1lcyI6WyJBdHRDcmVhdGlvbiIsImlkIiwiY29kZSIsImxhYmVsIiwiVHlwZSIsInNvcnRpbmdvcmRlciIsInN0YXR1cyIsImNhcnRwYWdlIiwicmVnaXN0ZXJwYWdlIiwiYWNjb3VudHBhZ2UiLCJvcmRlcmdyaWQiLCJjdXN0b21lcmdyaWQiLCJlIiwicHJvcHMiLCJvbkNoYW5nZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIm9uU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR3FCQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUVYO0FBQ05DLFFBQUUsRUFBQyxFQURHO0FBRU5DLFVBQUksRUFBQyxFQUZDO0FBR05DLFdBQUssRUFBQyxFQUhBO0FBSU5DLFVBQUksRUFBQyxFQUpDO0FBS05DLGtCQUFZLEVBQUMsRUFMUDtBQU1OQyxZQUFNLEVBQUMsRUFORDtBQU9OQyxjQUFRLEVBQUMsRUFQSDtBQVFOQyxrQkFBWSxFQUFDLEVBUlA7QUFTTkMsaUJBQVcsRUFBQyxFQVROO0FBVU5DLGVBQVMsRUFBQyxFQVZKO0FBV05DLGtCQUFZLEVBQUM7QUFYUCxLOztpTkFjQyxVQUFBQyxDQUFDLEVBQUk7QUFDWixZQUFLQyxLQUFMLENBQVdDLFFBQVgsK0ZBQXVCRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBaEMsRUFBdUNKLENBQUMsQ0FBQ0csTUFBRixDQUFTRSxLQUFoRDs7QUFDQSxZQUFLQyxRQUFMLCtGQUNHTixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFEWixFQUNtQkosQ0FBQyxDQUFDRyxNQUFGLENBQVNFLEtBRDVCO0FBR0QsSzs7bU5BRVUsVUFBQUwsQ0FBQyxFQUFJO0FBQ2RBLE9BQUMsQ0FBQ08sY0FBRixHQURjLENBRWQ7O0FBQ0EsWUFBS0QsUUFBTCxDQUFjO0FBQ1pFLGlCQUFTLEVBQUUsRUFEQztBQUVaQyxnQkFBUSxFQUFFLEVBRkU7QUFHWkMsZ0JBQVEsRUFBRSxFQUhFO0FBSVpDLGFBQUssRUFBRSxFQUpLO0FBS1pDLGdCQUFRLEVBQUU7QUFMRSxPQUFkOztBQVFBLFlBQUtYLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQjtBQUNsQmIsVUFBRSxFQUFDLEVBRGU7QUFFbEJDLFlBQUksRUFBQyxFQUZhO0FBR2xCQyxhQUFLLEVBQUMsRUFIWTtBQUlsQkMsWUFBSSxFQUFDLEVBSmE7QUFLbEJDLG9CQUFZLEVBQUMsRUFMSztBQU1sQkMsY0FBTSxFQUFDLEVBTlc7QUFPbEJDLGdCQUFRLEVBQUMsRUFQUztBQVFsQkMsb0JBQVksRUFBQyxFQVJLO0FBU2xCQyxtQkFBVyxFQUFDLEVBVE07QUFVbEJDLGlCQUFTLEVBQUMsRUFWUTtBQVdsQkMsb0JBQVksRUFBQztBQVhLLE9BQXBCO0FBYUQsSzs7Ozs7Ozs2QkFDSztBQUFBOztBQUdSLGFBRUEsbUVBQ0UsTUFBQyxzREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsYUFBSyxFQUFDO0FBQXRCLFNBQ0UsTUFBQyx1REFBRDtBQUFPLG9CQUFZLEVBQUM7QUFBcEIsU0FDRSxNQUFDLHNEQUFEO0FBQU0sV0FBRyxFQUFDO0FBQVYsZ0JBREYsRUFLRSxNQUFDLHNEQUFEO0FBQU0sV0FBRyxFQUFDO0FBQVYsc0JBTEYsRUFRSSw2QkFSSixDQURGLENBREYsRUFjQSxNQUFDLHNEQUFELFFBQ0U7QUFBTSxVQUFFLEVBQUM7QUFBVCxTQUNFLE1BQUMsc0RBQUQ7QUFBTSxpQkFBUztBQUFmLFNBQ0UsTUFBQywyREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIseUJBREYsRUFFSSxNQUFDLDZDQUFELE9BRkosRUFJRSxpQkFKRixFQUtFLE1BQUMseURBQUQsa0NBTEYsRUFNRSxpQkFORixFQU9FLGlCQVBGLEVBUVksaUJBUlosRUFTVyxNQUFDLDJEQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQiw4QkFUWCxFQVVZO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsWUFBSSxFQUFDLFVBQTVCO0FBQXVDLGFBQUssRUFBQyxLQUE3QztBQUFtRCxnQkFBUSxFQUFDO0FBQTVELFFBVlosRUFXWSxxRkFYWixFQWFZLGlCQWJaLEVBZ0JZLE1BQUMsMkRBQUQ7QUFBVyxpQkFBUyxFQUFDO0FBQXJCLGtDQWhCWixFQWlCWTtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQyxVQUE1QjtBQUF1QyxhQUFLLEVBQUMsS0FBN0M7QUFBbUQsZ0JBQVEsRUFBQztBQUE1RCxRQWpCWixFQWtCWSxxRkFsQlosRUFvQlksaUJBcEJaLEVBd0JKLGlCQXhCSSxFQXlCSixpQkF6QkksRUEwQkosTUFBQyx1REFBRDtBQUFPLG9CQUFZLEVBQUM7QUFBcEIsU0FDQTtBQUFRLGVBQU8sRUFBRSxpQkFBQUMsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ2EsUUFBTCxDQUFjYixDQUFkLENBQUo7QUFBQTtBQUFsQiw0QkFEQSxDQTFCSSxDQURGLEVBK0JJLGlCQS9CSixDQURGLENBZEEsQ0FGQTtBQXNEQzs7OztFQXpHd0NjLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXEF0dHJpYnV0ZUNyZWF0aW9uLmpzLmNhZjdhMjRkZWY5YWFmNmYwZjcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIENvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7RHJvcF8xfSBmcm9tICcuL0Ryb3AxJztcclxuaW1wb3J0IHtEcm9wXzJ9IGZyb20gJy4vRHJvcDInO1xyXG5pbXBvcnQgJ3JlYWN0LWRyb3Bkb3duL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7Q2FyZCxGb3JtLCBDaG9pY2VMaXN0LCBUZXh0U3R5bGUsQnV0dG9uLCBIZWFkaW5nLEVtcHR5U3RhdGUsIEFwcFByb3ZpZGVyLExheW91dCxQYWdlLCBTdGFjaywgQWN0aW9uTGlzdCwgQXZhdGFyLCBDb250ZXh0dWFsU2F2ZUJhciwgRm9ybUxheW91dCxGcmFtZSwgTG9hZGluZyxNb2RhbCwgTmF2aWdhdGlvbiwgU2tlbGV0b25Cb2R5VGV4dCwgU2tlbGV0b25EaXNwbGF5VGV4dCwgU2tlbGV0b25QYWdlLCBUZXh0Q29udGFpbmVyLCBUZXh0RmllbGQsIFRvYXN0LCBUb3BCYXIsIExpbmt9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHtBcnJvd0xlZnRNaW5vciwgTm90ZU1ham9yTW9ub3RvbmUsIEhvbWVNYWpvck1vbm90b25lLCBPcmRlcnNNYWpvclR3b3RvbmUsIE1vYmlsZUhhbWJ1cmdlck1ham9yTW9ub3RvbmUsIExpc3RNYWpvck1vbm90b25lLCBCYW5rTWFqb3JNb25vdG9uZSxUcm91Ymxlc2hvb3RNYWpvck1vbm90b25lLFNldHRpbmdzTWFqb3JNb25vdG9uZX0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcy1pY29ucyc7XHJcbmltcG9ydCB7bW9zdHJhcn0gZnJvbSAnLi9Ecm9wMSc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRDcmVhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xyXG4gIFxyXG4gIHN0YXRlID0ge1xyXG4gICAgaWQ6XCJcIixcclxuICAgIGNvZGU6XCJcIixcclxuICAgIGxhYmVsOlwiXCIsXHJcbiAgICBUeXBlOlwiXCIsXHJcbiAgICBzb3J0aW5nb3JkZXI6XCJcIixcclxuICAgIHN0YXR1czpcIlwiLFxyXG4gICAgY2FydHBhZ2U6XCJcIixcclxuICAgIHJlZ2lzdGVycGFnZTpcIlwiLFxyXG4gICAgYWNjb3VudHBhZ2U6XCJcIixcclxuICAgIG9yZGVyZ3JpZDpcIlwiLFxyXG4gICAgY3VzdG9tZXJncmlkOlwiXCJcclxuICB9O1xyXG4gIFxyXG4gIGNoYW5nZSA9IGUgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25TdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIHRoaXMucHJvcHMub25TdWJtaXQodGhpcy5zdGF0ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgIGlkOlwiXCIsXHJcbiAgICAgIGNvZGU6XCJcIixcclxuICAgICAgbGFiZWw6XCJcIixcclxuICAgICAgVHlwZTpcIlwiLFxyXG4gICAgICBzb3J0aW5nb3JkZXI6XCJcIixcclxuICAgICAgc3RhdHVzOlwiXCIsXHJcbiAgICAgIGNhcnRwYWdlOlwiXCIsXHJcbiAgICAgIHJlZ2lzdGVycGFnZTpcIlwiLFxyXG4gICAgICBhY2NvdW50cGFnZTpcIlwiLFxyXG4gICAgICBvcmRlcmdyaWQ6XCJcIixcclxuICAgICAgY3VzdG9tZXJncmlkOlwiXCJcclxuICAgIH0pO1xyXG4gIH07XHJcbnJlbmRlcigpe1xyXG5cclxuIFxyXG5yZXR1cm4oXHJcblxyXG48PlxyXG4gIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT1cIiBDcmVhdGUgYXR0cmlidXRlXCI+XHJcbiAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwibGVhZGluZ1wiPlxyXG4gICAgICA8TGluayB1cmw9Jy9JbmRleCcgPlxyXG4gICAgICAgIEhvbWVcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgIFxyXG4gICAgICA8TGluayB1cmw9Jy9jb21wb25lbnRlc2xpc3QnID5cclxuICAgICAgICBBdHRyaWJ1dGVzXHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgICA8cD5BdHRyaWJ1dGU8L3A+XHJcbiAgICA8L1N0YWNrPiAgICAgIFxyXG4gIDwvQ2FyZD5cclxuICAgICAgICBcclxuPFBhZ2U+XHJcbiAgPGZvcm0gaWQ9XCJpbmljaWFsXCI+XHJcbiAgICA8Q2FyZCBzZWN0aW9uZWQ+ICAgICBcclxuICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Vc2UgVGVtcGxhdGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgPERyb3BfMS8+XHJcbiAgIFxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgQ29uZmlndXJhdGlvbjwvSGVhZGluZz4gICAgXHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNob3cgb24gQ2FydCBQYWdlOjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXF1aXJlZFwiIHZhbHVlPVwiWWVzXCIgaGVscFRleHQ9XCJUaWNrIGlmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGF0dHJpYnV0ZSBvbiBjYXJ0IHBhZ2UuXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+VGljayBpZiB0aGlzIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCB0byBiZSBcclxuICAgICAgICAgICAgICAgICAgICBmaWxsZWQgYnkgeW91ciBjdXN0b21lcnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlNob3cgb24gUmVnaXN0ZXIgUGFnZTo8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVxdWlyZWRcIiB2YWx1ZT1cIlllc1wiIGhlbHBUZXh0PVwiJ1RpY2sgaWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgYXR0cmlidXRlIG9uIHJlZ2lzdGVyIHBhZ2UuJ1wiLz5cclxuICAgICAgICAgICAgICAgIDxwPlRpY2sgaWYgdGhpcyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQgdG8gYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkIGJ5IHlvdXIgY3VzdG9tZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbjxici8+XHJcbjxici8+XHJcbjxTdGFjayBkaXN0cmlidXRpb249XCJ0cmFpbGluZ1wiPlxyXG48YnV0dG9uIG9uQ2xpY2s9e2UgPT4gdGhpcy5vblN1Ym1pdChlKX0+QWRkIG5ldyBBdHJpYnV0ZTwvYnV0dG9uPlxyXG48L1N0YWNrPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxici8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9QYWdlPlxyXG48Lz5cclxuICBcclxuICk7XHJcbn1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==