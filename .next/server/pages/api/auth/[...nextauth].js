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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/line":
/*!*******************************************!*\
  !*** external "next-auth/providers/line" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/line");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/line */ \"next-auth/providers/line\");\n/* harmony import */ var next_auth_providers_line__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_line__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_line__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.LINE_CLIENT_ID,\n            clientSecret: process.env.LINE_CLIENT_SECRET,\n            disable_auto_login: false\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }), \n    ],\n    jwt: {\n        encryption: true\n    },\n    secret: process.env.SECRET,\n    callbacks: {\n        async jwt ({ token , user , account , profile  }) {\n            if (account === null || account === void 0 ? void 0 : account.accessToken) {\n                token.accessToken = account.accessToken;\n            }\n            return token;\n        },\n        async redirect ({ url , _baseUrl  }) {\n            if (url === \"/dashboard\") {\n                return Promise.resolve(\"/\");\n            }\n            return Promise.resolve(\"/\");\n        },\n        async session ({ session , token , user  }) {\n            session.accessToken = token.accessToken;\n            return session;\n        },\n        async signIn ({ user , account , profile , email  }) {\n            const isAllowedToSignIn = true;\n            if (isAllowedToSignIn) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7QUFDSjtBQUVwRCxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QkcsU0FBUyxFQUFFO1FBQ1RELCtEQUFZLENBQUM7WUFDWEUsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYztZQUNwQ0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csa0JBQWtCO1lBQzVDQyxrQkFBa0IsRUFBRSxLQUFLO1NBQzFCLENBQUM7UUFDRlQsaUVBQWMsQ0FBQztZQUNiRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxnQkFBZ0I7WUFDdENILFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNNLG9CQUFvQjtZQUM5Q0MsYUFBYSxFQUFFO2dCQUNiQyxNQUFNLEVBQUU7b0JBQ05DLE1BQU0sRUFBRSxTQUFTO29CQUNqQkMsV0FBVyxFQUFFLFNBQVM7b0JBQ3RCQyxhQUFhLEVBQUUsTUFBTTtpQkFDdEI7YUFDRjtTQUNGLENBQUM7S0FDSDtJQUNEQyxHQUFHLEVBQUU7UUFDSEMsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDREMsTUFBTSxFQUFFZixPQUFPLENBQUNDLEdBQUcsQ0FBQ2UsTUFBTTtJQUMxQkMsU0FBUyxFQUFFO1FBQ1QsTUFBTUosR0FBRyxFQUFDLEVBQUVLLEtBQUssR0FBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBRSxFQUFFO1lBQzNDLElBQUlELE9BQU8sYUFBUEEsT0FBTyxXQUFhLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsT0FBTyxDQUFFRSxXQUFXLEVBQUU7Z0JBQ3hCSixLQUFLLENBQUNJLFdBQVcsR0FBR0YsT0FBTyxDQUFDRSxXQUFXLENBQUM7YUFDekM7WUFDRCxPQUFPSixLQUFLLENBQUM7U0FDZDtRQUNELE1BQU1LLFFBQVEsRUFBQyxFQUFFQyxHQUFHLEdBQUVDLFFBQVEsR0FBRSxFQUFFO1lBQ2hDLElBQUlELEdBQUcsS0FBSyxZQUFZLEVBQUU7Z0JBQ3hCLE9BQU9FLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsT0FBT0QsT0FBTyxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFDRCxNQUFNQyxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFVixLQUFLLEdBQUVDLElBQUksR0FBRSxFQUFFO1lBQ3RDUyxPQUFPLENBQUNOLFdBQVcsR0FBR0osS0FBSyxDQUFDSSxXQUFXLENBQUM7WUFDeEMsT0FBT00sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsTUFBTUMsTUFBTSxFQUFDLEVBQUVWLElBQUksR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEdBQUVTLEtBQUssR0FBRSxFQUFFO1lBQzlDLE1BQU1DLGlCQUFpQixHQUFHLElBQUk7WUFDOUIsSUFBSUEsaUJBQWlCLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDO2FBQ2IsTUFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7S0FDRjtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvbmdqdW5lLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgTGluZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2xpbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBMaW5lUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkxJTkVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5MSU5FX0NMSUVOVF9TRUNSRVQsXG4gICAgICBkaXNhYmxlX2F1dG9fbG9naW46IGZhbHNlLFxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXG4gICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBqd3Q6IHtcbiAgICBlbmNyeXB0aW9uOiB0cnVlLFxuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkge1xuICAgICAgaWYgKGFjY291bnQ/LmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NUb2tlbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHJlZGlyZWN0KHsgdXJsLCBfYmFzZVVybCB9KSB7XG4gICAgICBpZiAodXJsID09PSBcIi9kYXNoYm9hcmRcIikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFwiL1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXCIvXCIpO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlbjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwgfSkge1xuICAgICAgY29uc3QgaXNBbGxvd2VkVG9TaWduSW4gPSB0cnVlO1xuICAgICAgaWYgKGlzQWxsb3dlZFRvU2lnbkluKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkxpbmVQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkxJTkVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiTElORV9DTElFTlRfU0VDUkVUIiwiZGlzYWJsZV9hdXRvX2xvZ2luIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInByb21wdCIsImFjY2Vzc190eXBlIiwicmVzcG9uc2VfdHlwZSIsImp3dCIsImVuY3J5cHRpb24iLCJzZWNyZXQiLCJTRUNSRVQiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImFjY2Vzc1Rva2VuIiwicmVkaXJlY3QiLCJ1cmwiLCJfYmFzZVVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2Vzc2lvbiIsInNpZ25JbiIsImVtYWlsIiwiaXNBbGxvd2VkVG9TaWduSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();