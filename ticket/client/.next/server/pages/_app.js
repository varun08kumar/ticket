"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            // baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',\n            baseURL: 'http://ticketing.dev:3000',\n            headers: req?.headers\n        });\n    } else {}\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2FwaS9idWlsZC1jbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFMUIsaUVBQWUsQ0FBQyxFQUFDQyxHQUFHLEVBQUM7SUFDakIsSUFBSSxJQUE2QixFQUFFO1FBQy9CLHVCQUF1QjtRQUN2QixPQUFPRCxvREFBWSxDQUFDO1lBQ3BCLDhFQUE4RTtZQUM5RUcsU0FBUztZQUNUQyxTQUFTSCxLQUFLRztRQUNkO0lBQ0osT0FBTyxFQUtOO0FBQ0wsR0FBQyIsInNvdXJjZXMiOlsiL2hvbWUvdmFydW4vRG93bmxvYWRzL3RpY2t0aW5nL2NsaWVudC9hcGkvYnVpbGQtY2xpZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtyZXF9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyXG4gICAgICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgICAvLyBiYXNlVVJMOiAnaHR0cDovL2luZ3Jlc3MtbmdpbngtY29udHJvbGxlci5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJyxcbiAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly90aWNrZXRpbmcuZGV2OjMwMDAnLFxuICAgICAgICBoZWFkZXJzOiByZXE/LmhlYWRlcnMsXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlIGFyZSBvbiB0aGUgYnJvd3NlclxuICAgICAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly90aWNrZXRpbmcuZGV2OjMwMDAnLFxuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./api/build-client.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ currentUser })=>{\n    const links = [\n        !currentUser && {\n            label: 'Sign Up',\n            href: '/auth/signup'\n        },\n        !currentUser && {\n            label: 'Sign In',\n            href: '/auth/signin'\n        },\n        currentUser && {\n            label: 'Sign Out',\n            href: '/auth/signout'\n        }\n    ].filter((link)=>link).map(({ label, href })=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item px-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: href,\n                children: label\n            }, void 0, false, {\n                fileName: \"/home/varun/Downloads/tickting/client/components/header.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined)\n        }, href, false, {\n            fileName: \"/home/varun/Downloads/tickting/client/components/header.js\",\n            lineNumber: 10,\n            columnNumber: 17\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"navbar-brand\",\n                children: \"GitTix\"\n            }, void 0, false, {\n                fileName: \"/home/varun/Downloads/tickting/client/components/header.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex justify-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"/home/varun/Downloads/tickting/client/components/header.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/varun/Downloads/tickting/client/components/header.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/varun/Downloads/tickting/client/components/header.js\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUU3QixpRUFBZSxDQUFDLEVBQUNDLFdBQVcsRUFBQztJQUN6QixNQUFNQyxRQUFNO1FBQ1QsQ0FBQ0QsZUFBZTtZQUFDRSxPQUFNO1lBQVdDLE1BQUs7UUFBYztRQUNwRCxDQUFDSCxlQUFlO1lBQUNFLE9BQU07WUFBV0MsTUFBSztRQUFjO1FBQ3JESCxlQUFlO1lBQUNFLE9BQU07WUFBWUMsTUFBSztRQUFlO0tBQ3pELENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsTUFDaEJDLEdBQUcsQ0FBQyxDQUFDLEVBQUNKLEtBQUssRUFBRUMsSUFBSSxFQUFDO1FBQ2YscUJBQVEsOERBQUNJO1lBQWNDLFdBQVU7c0JBQzdCLDRFQUFDVCxrREFBSUE7Z0JBQUNJLE1BQU1BOzBCQUFPRDs7Ozs7O1dBRE5DOzs7OztJQUdyQjtJQUNBLHFCQUFPLDhEQUFDTTs7MEJBQ0osOERBQUNWLGtEQUFJQTtnQkFBQ0ksTUFBSztnQkFBSUssV0FBVTswQkFBZTs7Ozs7OzBCQUN4Qyw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNHO29CQUFHSCxXQUFVOzhCQUNUUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakIsR0FBQyIsInNvdXJjZXMiOlsiL2hvbWUvdmFydW4vRG93bmxvYWRzL3RpY2t0aW5nL2NsaWVudC9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7Y3VycmVudFVzZXJ9KSA9PiB7XG4gICAgY29uc3QgbGlua3M9W1xuICAgICAgICFjdXJyZW50VXNlciAmJiB7bGFiZWw6J1NpZ24gVXAnLCBocmVmOicvYXV0aC9zaWdudXAnfSxcbiAgICAgICAgIWN1cnJlbnRVc2VyICYmIHtsYWJlbDonU2lnbiBJbicsIGhyZWY6Jy9hdXRoL3NpZ25pbid9LFxuICAgICAgICBjdXJyZW50VXNlciAmJiB7bGFiZWw6J1NpZ24gT3V0JywgaHJlZjonL2F1dGgvc2lnbm91dCd9XG4gICAgXS5maWx0ZXIobGluayA9PiBsaW5rKSBcbiAgICAubWFwKCh7bGFiZWwsIGhyZWZ9KSA9PiB7XG4gICAgICAgIHJldHVybiAoPGxpIGtleT17aHJlZn0gY2xhc3NOYW1lPVwibmF2LWl0ZW0gcHgtNFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+e2xhYmVsfTwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+KVxuICAgIH0pO1xuICAgIHJldHVybiA8bmF2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPkdpdFRpeDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXgganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7bGlua3N9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbn0iXSwibmFtZXMiOlsiTGluayIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rIiwibWFwIiwibGkiLCJjbGFzc05hbWUiLCJuYXYiLCJkaXYiLCJ1bCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/header.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"(pages-dir-node)/./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"(pages-dir-node)/./api/build-client.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"(pages-dir-node)/./components/header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst AppComponent = ({ Component, pageProps, currentUser })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"/home/varun/Downloads/tickting/client/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 12\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/varun/Downloads/tickting/client/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/varun/Downloads/tickting/client/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    // console.log(appContext.ctx);\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx);\n    // console.log(client);\n    const { data } = await client.get('/api/users/currentuser');\n    let pageProps;\n    if (appContext.Component.getInitialProps) {\n        // console.log('appContext.Component.getInitialProps', appContext.Component.getInitialProps);\n        pageProps = await appContext.Component.getInitialProps(appContext.ctx);\n    }\n    // const pageProps=await appContext.Component.getInitialProps(appContext.ctx);\n    // let pageProps = {};\n    return {\n        pageProps,\n        ...data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNJO0FBQ1o7QUFDUTtBQUMxQyxNQUFNRyxlQUFhLENBQUMsRUFBQ0YsU0FBUyxFQUFFRyxTQUFTLEVBQUNDLFdBQVcsRUFBQztJQUNsRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1osOERBQUNMLDBEQUFNQTtnQkFBQ0csYUFBYUE7Ozs7OzswQkFDcEIsOERBQUNKO2dCQUFXLEdBQUdHLFNBQVM7Ozs7Ozs7Ozs7OztBQUdwQztBQUVBRCxhQUFhSyxlQUFlLEdBQUcsT0FBT0M7SUFDbEMsK0JBQStCO0lBRS9CLE1BQU1DLFNBQU9WLDZEQUFXQSxDQUFDUyxXQUFXRSxHQUFHO0lBQ3ZDLHVCQUF1QjtJQUV2QixNQUFNLEVBQUNDLElBQUksRUFBQyxHQUFHLE1BQU1GLE9BQU9HLEdBQUcsQ0FBQztJQUNoQyxJQUFJVDtJQUNKLElBQUdLLFdBQVdSLFNBQVMsQ0FBQ08sZUFBZSxFQUFDO1FBQ3BDLDZGQUE2RjtRQUM3RkosWUFBWSxNQUFNSyxXQUFXUixTQUFTLENBQUNPLGVBQWUsQ0FBQ0MsV0FBV0UsR0FBRztJQUN6RTtJQUNBLDhFQUE4RTtJQUM5RSxzQkFBc0I7SUFFdEIsT0FBTztRQUNIUDtRQUNBLEdBQUdRLElBQUk7SUFDWDtBQUVKO0FBRUEsaUVBQWVULFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL3ZhcnVuL0Rvd25sb2Fkcy90aWNrdGluZy9jbGllbnQvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi9hcGkvYnVpbGQtY2xpZW50JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuY29uc3QgQXBwQ29tcG9uZW50PSh7Q29tcG9uZW50LCBwYWdlUHJvcHMsY3VycmVudFVzZXJ9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgPEhlYWRlciBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9Lz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbkFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGFwcENvbnRleHQuY3R4KTtcbiAgICBcbiAgICBjb25zdCBjbGllbnQ9YnVpbGRDbGllbnQoYXBwQ29udGV4dC5jdHgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNsaWVudCk7XG4gICAgXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xuICAgIGxldCBwYWdlUHJvcHM7XG4gICAgaWYoYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcycsIGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyk7XG4gICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0LmN0eCk7XG4gICAgfVxuICAgIC8vIGNvbnN0IHBhZ2VQcm9wcz1hd2FpdCBhcHBDb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dC5jdHgpO1xuICAgIC8vIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wcyxcbiAgICAgICAgLi4uZGF0YVxuICAgIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDsiXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJDb21wb25lbnQiLCJIZWFkZXIiLCJBcHBDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyZW50VXNlciIsImRpdiIsImNsYXNzTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJjbGllbnQiLCJjdHgiLCJkYXRhIiwiZ2V0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();