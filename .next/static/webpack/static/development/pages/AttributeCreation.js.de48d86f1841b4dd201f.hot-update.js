webpackHotUpdate("static\\development\\pages\\AttributeCreation.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/AttributeCreation.js":
/*!************************************!*\
  !*** ./pages/AttributeCreation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Drop1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drop1 */ "./pages/Drop1.js");
/* harmony import */ var _Drop2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drop2 */ "./pages/Drop2.js");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropdown/style.css */ "./node_modules/react-dropdown/style.css");
/* harmony import */ var react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropdown_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris-icons */ "./node_modules/@shopify/polaris-icons/dist/index.mjs");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var AddAtributoForm = function AddAtributoForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['hidden']),
      selected = _useState[0],
      setSelected = _useState[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    return setSelected(value);
  }, []);
  {
    /*navbar */
  }
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
  }, "Use Template:"), __jsx(_Drop1__WEBPACK_IMPORTED_MODULE_1__["Drop_1"], null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Heading"], null, "Attribute Configuration"), __jsx("br", null), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["ChoiceList"], {
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
  }), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    distribution: "trailing"
  }, __jsx("button", null, "Add new Atribute"))), __jsx("br", null))));
};

_s(AddAtributoForm, "96F7o7Ampxl50meXu6r5GK/JBzg=");

_c = AddAtributoForm;
/* harmony default export */ __webpack_exports__["default"] = (AddAtributoForm);

var _c;

$RefreshReg$(_c, "AddAtributoForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BdHRyaWJ1dGVDcmVhdGlvbi5qcyJdLCJuYW1lcyI6WyJBZGRBdHJpYnV0b0Zvcm0iLCJwcm9wcyIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJsYWJlbCIsImhlbHBUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU9BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBR0ZDLHNEQUFRLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FITjtBQUFBLE1BRzNCQyxRQUgyQjtBQUFBLE1BR2pCQyxXQUhpQjs7QUFJbEMsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXSCxXQUFXLENBQUNHLEtBQUQsQ0FBdEI7QUFBQSxHQUFELEVBQWdDLEVBQWhDLENBQWhDO0FBTUE7QUFBQztBQUFZO0FBR2QsU0FDRCxtRUFDRSxNQUFDLHFEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFNBQUssRUFBQztBQUF0QixLQUNFLE1BQUMsc0RBQUQ7QUFBTyxnQkFBWSxFQUFDO0FBQXBCLEtBQ0UsTUFBQyxxREFBRDtBQUFNLE9BQUcsRUFBQztBQUFWLFlBREYsRUFLRSxNQUFDLHFEQUFEO0FBQU0sT0FBRyxFQUFDO0FBQVYsa0JBTEYsRUFRSSw2QkFSSixDQURGLENBREYsRUFjQSxNQUFDLHFEQUFELFFBQ0U7QUFBTSxNQUFFLEVBQUM7QUFBVCxLQUNFLE1BQUMscURBQUQ7QUFBTSxhQUFTO0FBQWYsS0FDRSxNQUFDLDBEQUFEO0FBQVcsYUFBUyxFQUFDO0FBQXJCLHFCQURGLEVBRUksTUFBQyw2Q0FBRCxPQUZKLEVBSUUsaUJBSkYsRUFLRSxNQUFDLHdEQUFELGtDQUxGLEVBTUUsaUJBTkYsRUFPRSxpQkFQRixFQVVJLE1BQUMsMkRBQUQ7QUFDTSxpQkFBYSxNQURuQjtBQUVNLFdBQU8sRUFBRSxDQUNQO0FBQ0VDLFdBQUssRUFBRSxvQkFEVDtBQUVFRCxXQUFLLEVBQUUsVUFGVDtBQUdFRSxjQUFRLEVBQ047QUFKSixLQURPLEVBT1A7QUFDRUQsV0FBSyxFQUFFLHdCQURUO0FBRUVELFdBQUssRUFBRSxjQUZUO0FBR0VFLGNBQVEsRUFDTjtBQUpKLEtBUE8sQ0FGZjtBQWdCTSxZQUFRLEVBQUVOLFFBaEJoQjtBQWlCTSxZQUFRLEVBQUVFO0FBakJoQixJQVZKLEVBNEJKLGlCQTVCSSxFQTZCSixpQkE3QkksRUE4QkosTUFBQyxzREFBRDtBQUFPLGdCQUFZLEVBQUM7QUFBcEIsS0FDQSx5Q0FEQSxDQTlCSSxDQURGLEVBbUNJLGlCQW5DSixDQURGLENBZEEsQ0FEQztBQXlEQSxDQXRFRDs7R0FBT0wsZTs7S0FBQUEsZTtBQXdFUUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXEF0dHJpYnV0ZUNyZWF0aW9uLmpzLmRlNDhkODZmMTg0MWI0ZGQyMDFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIENvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7RHJvcF8xfSBmcm9tICcuL0Ryb3AxJztcclxuaW1wb3J0IHtEcm9wXzJ9IGZyb20gJy4vRHJvcDInO1xyXG5pbXBvcnQgJ3JlYWN0LWRyb3Bkb3duL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7Q2FyZCxGb3JtLCBDaG9pY2VMaXN0LCBUZXh0U3R5bGUsQnV0dG9uLCBIZWFkaW5nLEVtcHR5U3RhdGUsIEFwcFByb3ZpZGVyLExheW91dCxQYWdlLCBTdGFjaywgQWN0aW9uTGlzdCwgQXZhdGFyLCBDb250ZXh0dWFsU2F2ZUJhciwgRm9ybUxheW91dCxGcmFtZSwgTG9hZGluZyxNb2RhbCwgTmF2aWdhdGlvbiwgU2tlbGV0b25Cb2R5VGV4dCwgU2tlbGV0b25EaXNwbGF5VGV4dCwgU2tlbGV0b25QYWdlLCBUZXh0Q29udGFpbmVyLCBUZXh0RmllbGQsIFRvYXN0LCBUb3BCYXIsIExpbmt9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuaW1wb3J0IHtBcnJvd0xlZnRNaW5vciwgTm90ZU1ham9yTW9ub3RvbmUsIEhvbWVNYWpvck1vbm90b25lLCBPcmRlcnNNYWpvclR3b3RvbmUsIE1vYmlsZUhhbWJ1cmdlck1ham9yTW9ub3RvbmUsIExpc3RNYWpvck1vbm90b25lLCBCYW5rTWFqb3JNb25vdG9uZSxUcm91Ymxlc2hvb3RNYWpvck1vbm90b25lLFNldHRpbmdzTWFqb3JNb25vdG9uZX0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcy1pY29ucyc7XHJcbmltcG9ydCB7bW9zdHJhcn0gZnJvbSAnLi9Ecm9wMSc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0ICBBZGRBdHJpYnV0b0Zvcm0gPSAocHJvcHMpID0+IHtcclxuICBcclxuIFxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoWydoaWRkZW4nXSk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiBzZXRTZWxlY3RlZCh2YWx1ZSksIFtdKTtcclxuIFxyXG4gIFxyXG5cclxuXHJcbiAgXHJcbiAgey8qbmF2YmFyICovfVxyXG5cclxuXHJcbiByZXR1cm4oXHJcbjw+XHJcbiAgPENhcmQgc2VjdGlvbmVkIHRpdGxlPVwiIENyZWF0ZSBhdHRyaWJ1dGVcIj5cclxuICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJsZWFkaW5nXCI+XHJcbiAgICAgIDxMaW5rIHVybD0nL0luZGV4JyA+XHJcbiAgICAgICAgSG9tZVxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgXHJcbiAgICAgIDxMaW5rIHVybD0nL2NvbXBvbmVudGVzbGlzdCcgPlxyXG4gICAgICAgIEF0dHJpYnV0ZXNcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxwPkF0dHJpYnV0ZTwvcD5cclxuICAgIDwvU3RhY2s+ICAgICAgXHJcbiAgPC9DYXJkPlxyXG4gICAgICAgIFxyXG48UGFnZT5cclxuICA8Zm9ybSBpZD1cImluaWNpYWxcIj5cclxuICAgIDxDYXJkIHNlY3Rpb25lZD4gICAgIFxyXG4gICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlVzZSBUZW1wbGF0ZTo8L1RleHRTdHlsZT5cclxuICAgICAgICA8RHJvcF8xLz5cclxuICAgXHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxIZWFkaW5nPkF0dHJpYnV0ZSBDb25maWd1cmF0aW9uPC9IZWFkaW5nPiAgICBcclxuICAgICAgPGJyLz5cclxuICAgICAgPGhyLz5cclxuICBcclxuICAgICAgIFxyXG4gICAgICAgIDxDaG9pY2VMaXN0XHJcbiAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZVxyXG4gICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTaG93IG9uIENhcnQgcGFnZTonLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ3NoaXBwaW5nJyxcclxuICAgICAgICAgICAgICAgICAgaGVscFRleHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgJ1RpY2sgaWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgYXR0cmlidXRlIG9uIGNhcnQgcGFnZS4nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTaG93IG9uIFJlZ2lzdGVyIHBhZ2U6JyxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICdjb25maXJtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICBoZWxwVGV4dDpcclxuICAgICAgICAgICAgICAgICAgICAnVGljayBpZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBhdHRyaWJ1dGUgb24gcmVnaXN0ZXIgcGFnZS4nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XHJcbjxici8+XHJcbjxici8+XHJcbjxTdGFjayBkaXN0cmlidXRpb249XCJ0cmFpbGluZ1wiPlxyXG48YnV0dG9uID5BZGQgbmV3IEF0cmlidXRlPC9idXR0b24+XHJcbjwvU3RhY2s+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPGJyLz5cclxuICAgIDwvZm9ybT5cclxuICA8L1BhZ2U+XHJcbjwvPlxyXG4gIFxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRBdHJpYnV0b0Zvcm0iXSwic291cmNlUm9vdCI6IiJ9