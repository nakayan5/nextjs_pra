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
// getStaticPropsはページからのみexportできます。
// ページではないファイルから export することはできません。
// この制約の理由のひとつは、React では、ページがレンダリングされる前に、必要なデータがすべて揃っている必要があるからです。
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
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_2__["siteTitle"])), __jsx("section", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "[Your Self Introduction]"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "(This is a sample website - you\u2019ll be building a site like this on", ' ', __jsx("a", {
    href: "https://nextjs.org/learn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "our Next.js tutorial"), ".)")), __jsx("section", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.padding1px),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Blog"), __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
        lineNumber: 58,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/posts/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 23
      }
    }, title)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }), __jsx("small", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.lightText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_5__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFsbFBvc3RzRGF0YSIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTWQiLCJwYWRkaW5nMXB4IiwiaGVhZGluZ0xnIiwibGlzdCIsIm1hcCIsImlkIiwiZGF0ZSIsInRpdGxlIiwibGlzdEl0ZW0iLCJsaWdodFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Q0FHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUM3QyxTQUNFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUMsNERBQVIsQ0FESixDQURGLEVBSUU7QUFBUyxhQUFTLEVBQUVDLCtEQUFVLENBQUNDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFDcUUsR0FEckUsRUFFRTtBQUFHLFFBQUksRUFBQywwQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGLE9BRkYsQ0FKRixFQVdFO0FBQVMsYUFBUyxZQUFLRCwrREFBVSxDQUFDQyxTQUFoQixjQUE2QkQsK0RBQVUsQ0FBQ0UsVUFBeEMsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFRiwrREFBVSxDQUFDRyxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUFJLGFBQVMsRUFBRUgsK0RBQVUsQ0FBQ0ksSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTixZQUFZLENBQUNPLEdBQWIsQ0FBaUI7QUFBQSxRQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxRQUFPQyxJQUFQLFNBQU9BLElBQVA7QUFBQSxRQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxXQUNkO0FBQUksZUFBUyxFQUFFUiwrREFBVSxDQUFDUyxRQUExQjtBQUFvQyxTQUFHLEVBQUVILEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxtQkFBWUEsRUFBWixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlFLEtBQUosQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBS0U7QUFBTyxlQUFTLEVBQUVSLCtEQUFVLENBQUNVLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQU0sZ0JBQVUsRUFBRUgsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBTEYsQ0FEYztBQUFBLEdBQWpCLENBREwsQ0FGSixDQVhGLENBREY7QUE4QkQ7S0EvQnVCVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM2NDgwMDRiMWFlMjZhM2Q2Y2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUnXG5cbi8vIGdldFN0YXRpY1Byb3BzIOOBryDjgrXjg7zjg5DjgrXjgqTjg4njgafjga7jgb8g5a6f6KGM44GV44KM44KLXG5cbi8vIOacrOizqueahOOBq+OBr+OAgWdldFN0YXRpY1Byb3BzIOOCkuS9v+OBhuOBk+OBqOOBpyBOZXh0LmpzIOOBq+OBk+OBhuS8neOBiOOCi+OBk+OBqOOBjOOBp+OBjeOCi+OBqOOBhOOBhuOBk+OBqOOBp+OBmeOAglxuLy8g44CM44GT44Gu44Oa44O844K444Gr44Gv44GE44GP44Gk44GL5aSW6YOo44Gr5L6d5a2Y44GX44Gm44GE44KL44OH44O844K/44GM44GC44KL44KI44CC44Gg44GL44KJ44OT44Or44OJ5pmC44Gr44GT44Gu44Oa44O844K444KS44OX44Oq44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Go44GN44Gv44CB44G+44Ga44Gd44Gu5L6d5a2Y6Zai5L+C44KS44GX44Gj44GL44KK6Kej5rG644GX44Gm44KI77yB44CNXG5cbi8vIGdldFN0YXRpY1Byb3Bz44Gv44Oa44O844K444GL44KJ44Gu44G/ZXhwb3J044Gn44GN44G+44GZ44CCXG4vLyDjg5rjg7zjgrjjgafjga/jgarjgYTjg5XjgqHjgqTjg6vjgYvjgokgZXhwb3J0IOOBmeOCi+OBk+OBqOOBr+OBp+OBjeOBvuOBm+OCk+OAglxuLy8g44GT44Gu5Yi257SE44Gu55CG55Sx44Gu44Gy44Go44Gk44Gv44CBUmVhY3Qg44Gn44Gv44CB44Oa44O844K444GM44Os44Oz44OA44Oq44Oz44Kw44GV44KM44KL5YmN44Gr44CB5b+F6KaB44Gq44OH44O844K/44GM44GZ44G544Gm5o+D44Gj44Gm44GE44KL5b+F6KaB44GM44GC44KL44GL44KJ44Gn44GZ44CCXG5cbi8vIOmWouaVsOOCkuWRvOOBs+WHuuOBl+OBn+e1kOaenOOBryBwcm9wcyDjgq3jg7zjga7lhoXpg6jjgafov5TjgZnlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhbGxQb3N0c0RhdGFcbiAgICAgIH1cbiAgICB9XG59XG5cbi8vIGNvbnNvbGUubG9nKGFsbFBvc3RzRGF0YSk7XG4vLyAgICAgICBbXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICBpZDogJ3NzZy1zc3InLFxuLy8gICAgICAgICAgIHRpdGxlOiAnV2hlbiB0byBVc2UgU3RhdGljIEdlbmVyYXRpb24gdi5zLiBTZXJ2ZXItc2lkZSBSZW5kZXJpbmcnLFxuLy8gICAgICAgICAgIGRhdGU6ICcyMDIwLTAxLTAyJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgaWQ6ICdwcmUtcmVuZGVyaW5nJyxcbi8vICAgICAgICAgICB0aXRsZTogJ1R3byBGb3JtcyBvZiBQcmUtcmVuZGVyaW5nJyxcbi8vICAgICAgICAgICBkYXRlOiAnMjAyMC0wMS0wMSdcbi8vICAgICAgICAgfVxuLy8gICAgICAgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYWxsUG9zdHNEYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+XG4gICAgICAgIDxwPltZb3VyIFNlbGYgSW50cm9kdWN0aW9uXTwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgKFRoaXMgaXMgYSBzYW1wbGUgd2Vic2l0ZSAtIHlvdeKAmWxsIGJlIGJ1aWxkaW5nIGEgc2l0ZSBsaWtlIHRoaXMgb257JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIj5vdXIgTmV4dC5qcyB0dXRvcmlhbDwvYT4uKVxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMucGFkZGluZzFweH1gfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+QmxvZzwvaDI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cbiAgICAgICAgICAgICAge2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saWdodFRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApXG59IFxuIl0sInNvdXJjZVJvb3QiOiIifQ==