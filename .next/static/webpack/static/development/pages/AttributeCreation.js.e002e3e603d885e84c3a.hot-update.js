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
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Drop1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Drop1 */ "./pages/Drop1.js");
/* harmony import */ var _Drop2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Drop2 */ "./pages/Drop2.js");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris-icons */ "./node_modules/@shopify/polaris-icons/dist/index.mjs");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var AttCreation = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AttCreation, _React$Component);

  var _super = _createSuper(AttCreation);

  function AttCreation() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttCreation);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttCreation, [{
    key: "render",
    value: function render() {
      var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(['hidden']),
          selected = _useState[0],
          setSelected = _useState[1];

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        sectioned: true,
        title: " Create attribute"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
        distribution: "leading"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        url: "/Index"
      }, "Home"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        url: "/componenteslist"
      }, "Attributes"), __jsx("p", null, "Attribute"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], null, __jsx("form", {
        id: "inicial"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextStyle"], {
        variation: "strong"
      }, "Use Template:"), __jsx(_Drop1__WEBPACK_IMPORTED_MODULE_6__["Drop_1"], null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Heading"], null, "Attribute Configuration"), __jsx("br", null), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ChoiceList"], {
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
      }), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
        distribution: "trailing"
      }, __jsx("button", null, "Add new Atribute"))), __jsx("br", null))));
    }
  }]);

  return AttCreation;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BdHRyaWJ1dGVDcmVhdGlvbi5qcyJdLCJuYW1lcyI6WyJBdHRDcmVhdGlvbiIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImxhYmVsIiwidmFsdWUiLCJoZWxwVGV4dCIsImhhbmRsZUNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBS3FCQSxXOzs7Ozs7Ozs7Ozs7OzZCQUdiO0FBQUEsc0JBQzBCQyxzREFBUSxDQUFDLENBQUMsUUFBRCxDQUFELENBRGxDO0FBQUEsVUFDQ0MsUUFERDtBQUFBLFVBQ1dDLFdBRFg7O0FBSVIsYUFFQSxtRUFDRSxNQUFDLHFEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixhQUFLLEVBQUM7QUFBdEIsU0FDRSxNQUFDLHNEQUFEO0FBQU8sb0JBQVksRUFBQztBQUFwQixTQUNFLE1BQUMscURBQUQ7QUFBTSxXQUFHLEVBQUM7QUFBVixnQkFERixFQUtFLE1BQUMscURBQUQ7QUFBTSxXQUFHLEVBQUM7QUFBVixzQkFMRixFQVFJLDZCQVJKLENBREYsQ0FERixFQWNBLE1BQUMscURBQUQsUUFDRTtBQUFNLFVBQUUsRUFBQztBQUFULFNBQ0UsTUFBQyxxREFBRDtBQUFNLGlCQUFTO0FBQWYsU0FDRSxNQUFDLDBEQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQix5QkFERixFQUVJLE1BQUMsNkNBQUQsT0FGSixFQUlFLGlCQUpGLEVBS0UsTUFBQyx3REFBRCxrQ0FMRixFQU1FLGlCQU5GLEVBT0UsaUJBUEYsRUFVSSxNQUFDLDJEQUFEO0FBQ00scUJBQWEsTUFEbkI7QUFFTSxlQUFPLEVBQUUsQ0FDUDtBQUNFQyxlQUFLLEVBQUUsb0JBRFQ7QUFFRUMsZUFBSyxFQUFFLFVBRlQ7QUFHRUMsa0JBQVEsRUFDTjtBQUpKLFNBRE8sRUFPUDtBQUNFRixlQUFLLEVBQUUsd0JBRFQ7QUFFRUMsZUFBSyxFQUFFLGNBRlQ7QUFHRUMsa0JBQVEsRUFDTjtBQUpKLFNBUE8sQ0FGZjtBQWdCTSxnQkFBUSxFQUFFSixRQWhCaEI7QUFpQk0sZ0JBQVEsRUFBRUs7QUFqQmhCLFFBVkosRUE0QkosaUJBNUJJLEVBNkJKLGlCQTdCSSxFQThCSixNQUFDLHNEQUFEO0FBQU8sb0JBQVksRUFBQztBQUFwQixTQUNBLHlDQURBLENBOUJJLENBREYsRUFtQ0ksaUJBbkNKLENBREYsQ0FkQSxDQUZBO0FBMERDOzs7O0VBakV3Q0MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcQXR0cmlidXRlQ3JlYXRpb24uanMuZTAwMmUzZTYwM2Q4ODVlODRjM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgQ29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtEcm9wXzF9IGZyb20gJy4vRHJvcDEnO1xyXG5pbXBvcnQge0Ryb3BfMn0gZnJvbSAnLi9Ecm9wMic7XHJcbmltcG9ydCAncmVhY3QtZHJvcGRvd24vc3R5bGUuY3NzJztcclxuaW1wb3J0IHtDYXJkLEZvcm0sIENob2ljZUxpc3QsIFRleHRTdHlsZSxCdXR0b24sIEhlYWRpbmcsRW1wdHlTdGF0ZSwgQXBwUHJvdmlkZXIsTGF5b3V0LFBhZ2UsIFN0YWNrLCBBY3Rpb25MaXN0LCBBdmF0YXIsIENvbnRleHR1YWxTYXZlQmFyLCBGb3JtTGF5b3V0LEZyYW1lLCBMb2FkaW5nLE1vZGFsLCBOYXZpZ2F0aW9uLCBTa2VsZXRvbkJvZHlUZXh0LCBTa2VsZXRvbkRpc3BsYXlUZXh0LCBTa2VsZXRvblBhZ2UsIFRleHRDb250YWluZXIsIFRleHRGaWVsZCwgVG9hc3QsIFRvcEJhciwgTGlua30gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xyXG5pbXBvcnQge0Fycm93TGVmdE1pbm9yLCBOb3RlTWFqb3JNb25vdG9uZSwgSG9tZU1ham9yTW9ub3RvbmUsIE9yZGVyc01ham9yVHdvdG9uZSwgTW9iaWxlSGFtYnVyZ2VyTWFqb3JNb25vdG9uZSwgTGlzdE1ham9yTW9ub3RvbmUsIEJhbmtNYWpvck1vbm90b25lLFRyb3VibGVzaG9vdE1ham9yTW9ub3RvbmUsU2V0dGluZ3NNYWpvck1vbm90b25lfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzLWljb25zJztcclxuaW1wb3J0IHttb3N0cmFyfSBmcm9tICcuL0Ryb3AxJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0Q3JlYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgIHtcclxuICBcclxuIFxyXG5yZW5kZXIoKXtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFsnaGlkZGVuJ10pO1xyXG5cclxuIFxyXG5yZXR1cm4oXHJcblxyXG48PlxyXG4gIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT1cIiBDcmVhdGUgYXR0cmlidXRlXCI+XHJcbiAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwibGVhZGluZ1wiPlxyXG4gICAgICA8TGluayB1cmw9Jy9JbmRleCcgPlxyXG4gICAgICAgIEhvbWVcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgIFxyXG4gICAgICA8TGluayB1cmw9Jy9jb21wb25lbnRlc2xpc3QnID5cclxuICAgICAgICBBdHRyaWJ1dGVzXHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgICA8cD5BdHRyaWJ1dGU8L3A+XHJcbiAgICA8L1N0YWNrPiAgICAgIFxyXG4gIDwvQ2FyZD5cclxuICAgICAgICBcclxuPFBhZ2U+XHJcbiAgPGZvcm0gaWQ9XCJpbmljaWFsXCI+XHJcbiAgICA8Q2FyZCBzZWN0aW9uZWQ+ICAgICBcclxuICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5Vc2UgVGVtcGxhdGU6PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgPERyb3BfMS8+XHJcbiAgIFxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8SGVhZGluZz5BdHRyaWJ1dGUgQ29uZmlndXJhdGlvbjwvSGVhZGluZz4gICAgXHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxoci8+XHJcbiAgXHJcbiAgICAgICBcclxuICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVcclxuICAgICAgICAgICAgICBjaG9pY2VzPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2hvdyBvbiBDYXJ0IHBhZ2U6JyxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzaGlwcGluZycsXHJcbiAgICAgICAgICAgICAgICAgIGhlbHBUZXh0OlxyXG4gICAgICAgICAgICAgICAgICAgICdUaWNrIGlmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGF0dHJpYnV0ZSBvbiBjYXJ0IHBhZ2UuJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2hvdyBvbiBSZWdpc3RlciBwYWdlOicsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnY29uZmlybWF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgaGVscFRleHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpY2sgaWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgYXR0cmlidXRlIG9uIHJlZ2lzdGVyIHBhZ2UuJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxyXG48YnIvPlxyXG48YnIvPlxyXG48U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIj5cclxuPGJ1dHRvbiA+QWRkIG5ldyBBdHJpYnV0ZTwvYnV0dG9uPlxyXG48L1N0YWNrPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxici8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9QYWdlPlxyXG48Lz5cclxuICBcclxuICk7XHJcbn1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==