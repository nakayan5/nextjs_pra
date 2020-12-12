webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ "./components/date.js");
var _jsxFileName = "C:\\Users\\\u4E2D\u6751\u53CB\u54C9\\practice\\nextjs-blog\\nextjs-blog\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // getStaticProps は サーバサイドでのみ 実行される
// 本質的には、getStaticProps を使うことで Next.js にこう伝えることができるということです。
// 「このページにはいくつか外部に依存しているデータがあるよ。だからビルド時にこのページをプリレンダリングするときは、まずその依存関係をしっかり解決してよ！」
// 関数を呼び出した結果は props キーの内部で返す必要があります。

// console.log(allPostsData);
//       [
//         {
//           id: 'ssg-ssr',
//           title: 'When to Use Static Generation v.s. Server-side Rendering',
//           date: '2020-01-02'
//         },
//         {
//           id: 'pre-rendering',
//           title: 'Two Forms of Pre-rendering',
//           date: '2020-01-01'
//         }
//       ]
var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var allPostsData = _ref.allPostsData;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_2__["siteTitle"])), __jsx("section", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "[Your Self Introduction]"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "(This is a sample website - you\u2019ll be building a site like this on", ' ', __jsx("a", {
    href: "https://nextjs.org/learn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "our Next.js tutorial"), ".)")), __jsx("section", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.padding1px),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Blog"), __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, allPostsData.map(function (_ref2) {
    var id = _ref2.id,
        date = _ref2.date,
        title = _ref2.title;
    return __jsx("li", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/posts/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 23
      }
    }, title)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }), __jsx("small", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.lightText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_5__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 23
      }
    })));
  }))));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFsbFBvc3RzRGF0YSIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTWQiLCJwYWRkaW5nMXB4IiwiaGVhZGluZ0xnIiwibGlzdCIsIm1hcCIsImlkIiwiZGF0ZSIsInRpdGxlIiwibGlzdEl0ZW0iLCJsaWdodFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Q0FHQTtBQUNBO0FBQ0E7QUFFQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUM3QyxTQUNFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUMsNERBQVIsQ0FESixDQURGLEVBSUU7QUFBUyxhQUFTLEVBQUVDLCtEQUFVLENBQUNDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFDcUUsR0FEckUsRUFFRTtBQUFHLFFBQUksRUFBQywwQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGLE9BRkYsQ0FKRixFQVdFO0FBQVMsYUFBUyxZQUFLRCwrREFBVSxDQUFDQyxTQUFoQixjQUE2QkQsK0RBQVUsQ0FBQ0UsVUFBeEMsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFRiwrREFBVSxDQUFDRyxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUFJLGFBQVMsRUFBRUgsK0RBQVUsQ0FBQ0ksSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTixZQUFZLENBQUNPLEdBQWIsQ0FBaUI7QUFBQSxRQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxRQUFPQyxJQUFQLFNBQU9BLElBQVA7QUFBQSxRQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxXQUNkO0FBQUksZUFBUyxFQUFFUiwrREFBVSxDQUFDUyxRQUExQjtBQUFvQyxTQUFHLEVBQUVILEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxtQkFBWUEsRUFBWixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlFLEtBQUosQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBS0U7QUFBTyxlQUFTLEVBQUVSLCtEQUFVLENBQUNVLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQU0sZ0JBQVUsRUFBRUgsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBTEYsQ0FEYztBQUFBLEdBQWpCLENBREwsQ0FGSixDQVhGLENBREY7QUE4QkQ7S0EvQnVCVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJkZjZkNTA0ZTMzZGQ2YjdlY2QyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5cbi8vIGdldFN0YXRpY1Byb3BzIOOBryDjgrXjg7zjg5DjgrXjgqTjg4njgafjga7jgb8g5a6f6KGM44GV44KM44KLXG4vLyDmnKzos6rnmoTjgavjga/jgIFnZXRTdGF0aWNQcm9wcyDjgpLkvb/jgYbjgZPjgajjgacgTmV4dC5qcyDjgavjgZPjgYbkvJ3jgYjjgovjgZPjgajjgYzjgafjgY3jgovjgajjgYTjgYbjgZPjgajjgafjgZnjgIJcbi8vIOOAjOOBk+OBruODmuODvOOCuOOBq+OBr+OBhOOBj+OBpOOBi+WklumDqOOBq+S+neWtmOOBl+OBpuOBhOOCi+ODh+ODvOOCv+OBjOOBguOCi+OCiOOAguOBoOOBi+OCieODk+ODq+ODieaZguOBq+OBk+OBruODmuODvOOCuOOCkuODl+ODquODrOODs+ODgOODquODs+OCsOOBmeOCi+OBqOOBjeOBr+OAgeOBvuOBmuOBneOBruS+neWtmOmWouS/guOCkuOBl+OBo+OBi+OCiuino+axuuOBl+OBpuOCiO+8geOAjVxuXG4vLyDplqLmlbDjgpLlkbzjgbPlh7rjgZfjgZ/ntZDmnpzjga8gcHJvcHMg44Kt44O844Gu5YaF6YOo44Gn6L+U44GZ5b+F6KaB44GM44GC44KK44G+44GZ44CCXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKClcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYWxsUG9zdHNEYXRhXG4gICAgICB9XG4gICAgfVxufVxuXG4vLyBjb25zb2xlLmxvZyhhbGxQb3N0c0RhdGEpO1xuLy8gICAgICAgW1xuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgaWQ6ICdzc2ctc3NyJyxcbi8vICAgICAgICAgICB0aXRsZTogJ1doZW4gdG8gVXNlIFN0YXRpYyBHZW5lcmF0aW9uIHYucy4gU2VydmVyLXNpZGUgUmVuZGVyaW5nJyxcbi8vICAgICAgICAgICBkYXRlOiAnMjAyMC0wMS0wMidcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIGlkOiAncHJlLXJlbmRlcmluZycsXG4vLyAgICAgICAgICAgdGl0bGU6ICdUd28gRm9ybXMgb2YgUHJlLXJlbmRlcmluZycsXG4vLyAgICAgICAgICAgZGF0ZTogJzIwMjAtMDEtMDEnXG4vLyAgICAgICAgIH1cbi8vICAgICAgIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbFBvc3RzRGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PlxuICAgICAgICA8cD5bWW91ciBTZWxmIEludHJvZHVjdGlvbl08L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIChUaGlzIGlzIGEgc2FtcGxlIHdlYnNpdGUgLSB5b3XigJlsbCBiZSBidWlsZGluZyBhIHNpdGUgbGlrZSB0aGlzIG9ueycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCI+b3VyIE5leHQuanMgdHV0b3JpYWw8L2E+LilcbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLnBhZGRpbmcxcHh9YH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PkJsb2c8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdH0+XG4gICAgICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlnaHRUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKVxufSBcbiJdLCJzb3VyY2VSb290IjoiIn0=