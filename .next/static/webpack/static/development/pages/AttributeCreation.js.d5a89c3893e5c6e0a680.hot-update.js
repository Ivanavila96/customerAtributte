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






var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












function select() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(['hidden']),
      selected = _useState[0],
      setSelected = _useState[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (value) {
    return setSelected(value);
  }, []);
}

_s(select, "96F7o7Ampxl50meXu6r5GK/JBzg=");

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
        onChange: select
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BdHRyaWJ1dGVDcmVhdGlvbi5qcyJdLCJuYW1lcyI6WyJzZWxlY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJoYW5kbGVDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwiQXR0Q3JlYXRpb24iLCJsYWJlbCIsImhlbHBUZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLENBQUMsUUFBRCxDQUFELENBRHpCO0FBQUEsTUFDUkMsUUFEUTtBQUFBLE1BQ0VDLFdBREY7O0FBRWYsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXSCxXQUFXLENBQUNHLEtBQUQsQ0FBdEI7QUFBQSxHQUFELEVBQWdDLEVBQWhDLENBQWhDO0FBQ0Q7O0dBSFFOLE07O0lBTVlPLFc7Ozs7Ozs7Ozs7Ozs7NkJBR2I7QUFHUixhQUVBLG1FQUNFLE1BQUMscURBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGFBQUssRUFBQztBQUF0QixTQUNFLE1BQUMsc0RBQUQ7QUFBTyxvQkFBWSxFQUFDO0FBQXBCLFNBQ0UsTUFBQyxxREFBRDtBQUFNLFdBQUcsRUFBQztBQUFWLGdCQURGLEVBS0UsTUFBQyxxREFBRDtBQUFNLFdBQUcsRUFBQztBQUFWLHNCQUxGLEVBUUksNkJBUkosQ0FERixDQURGLEVBY0EsTUFBQyxxREFBRCxRQUNFO0FBQU0sVUFBRSxFQUFDO0FBQVQsU0FDRSxNQUFDLHFEQUFEO0FBQU0saUJBQVM7QUFBZixTQUNFLE1BQUMsMERBQUQ7QUFBVyxpQkFBUyxFQUFDO0FBQXJCLHlCQURGLEVBRUksTUFBQyw2Q0FBRCxPQUZKLEVBSUUsaUJBSkYsRUFLRSxNQUFDLHdEQUFELGtDQUxGLEVBTUUsaUJBTkYsRUFPRSxpQkFQRixFQVVJLE1BQUMsMkRBQUQ7QUFDTSxxQkFBYSxNQURuQjtBQUVNLGVBQU8sRUFBRSxDQUNQO0FBQ0VDLGVBQUssRUFBRSxvQkFEVDtBQUVFRixlQUFLLEVBQUUsVUFGVDtBQUdFRyxrQkFBUSxFQUNOO0FBSkosU0FETyxFQU9QO0FBQ0VELGVBQUssRUFBRSx3QkFEVDtBQUVFRixlQUFLLEVBQUUsY0FGVDtBQUdFRyxrQkFBUSxFQUNOO0FBSkosU0FQTyxDQUZmO0FBaUJNLGdCQUFRLEVBQUVUO0FBakJoQixRQVZKLEVBNEJKLGlCQTVCSSxFQTZCSixpQkE3QkksRUE4QkosTUFBQyxzREFBRDtBQUFPLG9CQUFZLEVBQUM7QUFBcEIsU0FDQSx5Q0FEQSxDQTlCSSxDQURGLEVBbUNJLGlCQW5DSixDQURGLENBZEEsQ0FGQTtBQTBEQzs7OztFQWhFd0NVLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXEF0dHJpYnV0ZUNyZWF0aW9uLmpzLmQ1YTg5YzM4OTNlNWM2ZTBhNjgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIENvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7RHJvcF8xfSBmcm9tICcuL0Ryb3AxJztcclxuaW1wb3J0IHtEcm9wXzJ9IGZyb20gJy4vRHJvcDInO1xyXG5pbXBvcnQgJ3JlYWN0LWRyb3Bkb3duL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7Q2FyZCxGb3JtLCBDaG9pY2VMaXN0LCBUZXh0U3R5bGUsQnV0dG9uLCBIZWFkaW5nLEVtcHR5U3RhdGUsIEFwcFByb3ZpZGVyLExheW91dCxQYWdlLCBTdGFjaywgQWN0aW9uTGlzdCwgQXZhdGFyLCBDb250ZXh0dWFsU2F2ZUJhciwgRm9ybUxheW91dCxGcmFtZSwgTG9hZGluZyxNb2RhbCwgTmF2aWdhdGlvbiwgU2tlbGV0b25Cb2R5VGV4dCwgU2tlbGV0b25EaXNwbGF5VGV4dCwgU2tlbGV0b25QYWdlLCBUZXh0Q29udGFpbmVyLCBUZXh0RmllbGQsIFRvYXN0LCBUb3BCYXIsIExpbmt9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHtBcnJvd0xlZnRNaW5vciwgTm90ZU1ham9yTW9ub3RvbmUsIEhvbWVNYWpvck1vbm90b25lLCBPcmRlcnNNYWpvclR3b3RvbmUsIE1vYmlsZUhhbWJ1cmdlck1ham9yTW9ub3RvbmUsIExpc3RNYWpvck1vbm90b25lLCBCYW5rTWFqb3JNb25vdG9uZSxUcm91Ymxlc2hvb3RNYWpvck1vbm90b25lLFNldHRpbmdzTWFqb3JNb25vdG9uZX0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcy1pY29ucyc7XHJcbmltcG9ydCB7bW9zdHJhcn0gZnJvbSAnLi9Ecm9wMSc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdCgpe1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoWydoaWRkZW4nXSk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWxlY3RlZCh2YWx1ZSksIFtdKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dENyZWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50ICB7XHJcbiAgXHJcbiBcclxucmVuZGVyKCl7XHJcblxyXG4gXHJcbnJldHVybihcclxuXHJcbjw+XHJcbiAgPENhcmQgc2VjdGlvbmVkIHRpdGxlPVwiIENyZWF0ZSBhdHRyaWJ1dGVcIj5cclxuICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJsZWFkaW5nXCI+XHJcbiAgICAgIDxMaW5rIHVybD0nL0luZGV4JyA+XHJcbiAgICAgICAgSG9tZVxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgXHJcbiAgICAgIDxMaW5rIHVybD0nL2NvbXBvbmVudGVzbGlzdCcgPlxyXG4gICAgICAgIEF0dHJpYnV0ZXNcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxwPkF0dHJpYnV0ZTwvcD5cclxuICAgIDwvU3RhY2s+ICAgICAgXHJcbiAgPC9DYXJkPlxyXG4gICAgICAgIFxyXG48UGFnZT5cclxuICA8Zm9ybSBpZD1cImluaWNpYWxcIj5cclxuICAgIDxDYXJkIHNlY3Rpb25lZD4gICAgIFxyXG4gICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlVzZSBUZW1wbGF0ZTo8L1RleHRTdHlsZT5cclxuICAgICAgICA8RHJvcF8xLz5cclxuICAgXHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBDb25maWd1cmF0aW9uPC9IZWFkaW5nPiAgICBcclxuICAgICAgPGJyLz5cclxuICAgICAgPGhyLz5cclxuICBcclxuICAgICAgIFxyXG4gICAgICAgIDxDaG9pY2VMaXN0XHJcbiAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZVxyXG4gICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTaG93IG9uIENhcnQgcGFnZTonLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ3NoaXBwaW5nJyxcclxuICAgICAgICAgICAgICAgICAgaGVscFRleHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpY2sgaWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgYXR0cmlidXRlIG9uIGNhcnQgcGFnZS4nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTaG93IG9uIFJlZ2lzdGVyIHBhZ2U6JyxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICdjb25maXJtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICBoZWxwVGV4dDpcclxuICAgICAgICAgICAgICAgICAgICAnVGljayBpZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBhdHRyaWJ1dGUgb24gcmVnaXN0ZXIgcGFnZS4nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZWxlY3R9Lz5cclxuPGJyLz5cclxuPGJyLz5cclxuPFN0YWNrIGRpc3RyaWJ1dGlvbj1cInRyYWlsaW5nXCI+XHJcbjxidXR0b24gPkFkZCBuZXcgQXRyaWJ1dGU8L2J1dHRvbj5cclxuPC9TdGFjaz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8YnIvPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvUGFnZT5cclxuPC8+XHJcbiAgXHJcbiApO1xyXG59XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=