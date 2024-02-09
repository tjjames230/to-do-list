/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 100%;
}

body {
  font-family: "Inter", sans-serf;
  font-size: 1rem;
  background-color: hsl(0, 0%, 95%);
  line-height: 1.5;
  display: flex;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

img,
picture,
svg {
  display: block;
  max-width: 100%;
}

h1,
h2,
h3 {
  margin-top: 0;
  line-height: 1.1;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 0.1875rem;
  color: hsl(11, 55%, 72%);
}
@media (min-width: 71.875em) {
  h1 {
    font-size: 1.75rem;
  }
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: hsl(51, 100%, 53%);
}

a,
a:visited,
a:active {
  text-decoration: none;
}

aside {
  width: 20%;
  min-width: 18.75rem;
  padding: 1.5625rem;
  display: flex;
  flex-direction: column;
  gap: 2.8125rem;
  background-color: hsl(44, 30%, 85%);
  min-height: 100vh;
  z-index: 2;
}
aside .aside-flex {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
aside button {
  font-size: 0.875rem;
  border: none;
  padding: 0.3125rem;
  background: none;
  border-radius: 0.625rem;
  display: flex;
  gap: 10px;
  padding-left: 15px;
}
aside button:hover {
  background-color: hsl(11, 55%, 72%);
  cursor: pointer;
}

main {
  width: 80%;
  padding: 1.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8125rem;
  background-color: gray;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 90%;
}
.task-list .task-headers {
  font-weight: 700;
  background-color: lightblue;
}
.task-list .task {
  border-bottom: 1px solid black;
}
.task-list .task,
.task-list .task-headers {
  display: grid;
  grid: auto-flow/2.5rem 12.5rem 6.25rem 1fr 9.375rem;
  gap: 0.9375rem;
  padding: 0.625rem;
  align-items: center;
}
.task-list .task h5,
.task-list .task p,
.task-list .task i,
.task-list .task-headers h5,
.task-list .task-headers p,
.task-list .task-headers i {
  text-align: center;
}
.task-list .task i,
.task-list .task-headers i {
  padding: 0.3125rem;
}
.task-list .task i:hover,
.task-list .task-headers i:hover {
  cursor: pointer;
  background-color: hsl(120, 100%, 50%);
  color: white;
}
.task-list .task .task-title,
.task-list .task-headers .task-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.task-list .task .task-description,
.task-list .task-headers .task-description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.task-list .task .task-project,
.task-list .task-headers .task-project {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.form-bg {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 80%;
  background-color: hsla(0, 0%, 0%, 0.7);
}
.form-bg .new-form {
  background-color: white;
  padding: 1.5625rem;
  border-radius: 1.5625rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.form-bg .new-form .input-ctn {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1500px) {
  .form-bg {
    max-width: calc(100% - 300px);
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/utilities/_breakpoints.scss","webpack://./src/scss/components/_aside.scss","webpack://./src/scss/components/_main.scss","webpack://./src/scss/components/_tasks.scss"],"names":[],"mappings":"AAIA;EACE,eAAA;ACHF;;ADMA;EACE,+BETa;EFUb,eAAA;EACA,iCGJY;EHKZ,gBAAA;EACA,aAAA;ACHF;;AGVA;;;EAGE,sBAAA;AHaF;;AGVA;EACE,SAAA;EACA,UAAA;EACA,aAAA;AHaF;;AGVA;;;EAGE,cAAA;EACA,eAAA;AHaF;;AI1BA;;;EAGE,aAAA;EACA,gBAAA;AJ6BF;;AI1BA;EACE,iBAAA;EACA,wBAAA;EACA,wBFZY;AFyCd;AK3BE;EDLF;IAKI,kBAAA;EJ+BF;AACF;;AI5BA;EACE,iBAAA;EACA,qBAAA;EACA,yBFpBc;AFmDhB;;AI5BA;;;EAGE,qBAAA;AJ+BF;;AMxDA;EACE,UAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,mCJPa;EIQb,iBAAA;EACA,UAAA;AN2DF;AMzDE;EACE,aAAA;EACA,sBAAA;EACA,aAAA;AN2DJ;AMxDE;EACE,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,aAAA;EACA,SAAA;EACA,kBAAA;AN0DJ;AMvDE;EACE,mCJ/BU;EIgCV,eAAA;ANyDJ;;AOvFA;EACE,UAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;EACA,sBAAA;AP0FF;;AQjGA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,UAAA;ARoGF;AQlGE;EACE,gBAAA;EACA,2BAAA;ARoGJ;AQjGE;EACE,8BAAA;ARmGJ;AQhGE;;EAEE,aAAA;EACA,mDAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;ARkGJ;AQhGI;;;;;;EAGE,kBAAA;ARqGN;AQlGI;;EACE,kBAAA;ARqGN;AQlGI;;EACE,eAAA;EACA,qCAAA;EACA,YAAA;ARqGN;AQlGI;;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;ARqGN;AQlGI;;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;ARqGN;AQlGI;;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;ARqGN;;AQhGA;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,MAAA;EACA,UAAA;EACA,sCAAA;ARmGF;AQjGE;EACE,uBAAA;EACA,kBAAA;EACA,wBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;ARmGJ;AQjGI;EACE,aAAA;EACA,sBAAA;ARmGN;;AQ9FA;EACE;IACE,6BAAA;ERiGF;AACF","sourcesContent":["@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n@use \"fonts\" as *;\r\n\r\nhtml {\r\n  font-size: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: $font-primary;\r\n  font-size: rem(16);\r\n  background-color: $clr-gray-lt;\r\n  line-height: 1.5;\r\n  display: flex;\r\n}\r\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1rem;\n  background-color: hsl(0, 0%, 95%);\n  line-height: 1.5;\n  display: flex;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin-top: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 1.5rem;\n  margin-bottom: 0.1875rem;\n  color: hsl(11, 55%, 72%);\n}\n@media (min-width: 71.875em) {\n  h1 {\n    font-size: 1.75rem;\n  }\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n  color: hsl(51, 100%, 53%);\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\naside {\n  width: 20%;\n  min-width: 18.75rem;\n  padding: 1.5625rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2.8125rem;\n  background-color: hsl(44, 30%, 85%);\n  min-height: 100vh;\n  z-index: 2;\n}\naside .aside-flex {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\naside button {\n  font-size: 0.875rem;\n  border: none;\n  padding: 0.3125rem;\n  background: none;\n  border-radius: 0.625rem;\n  display: flex;\n  gap: 10px;\n  padding-left: 15px;\n}\naside button:hover {\n  background-color: hsl(11, 55%, 72%);\n  cursor: pointer;\n}\n\nmain {\n  width: 80%;\n  padding: 1.5625rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2.8125rem;\n  background-color: gray;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  width: 90%;\n}\n.task-list .task-headers {\n  font-weight: 700;\n  background-color: lightblue;\n}\n.task-list .task {\n  border-bottom: 1px solid black;\n}\n.task-list .task,\n.task-list .task-headers {\n  display: grid;\n  grid: auto-flow/2.5rem 12.5rem 6.25rem 1fr 9.375rem;\n  gap: 0.9375rem;\n  padding: 0.625rem;\n  align-items: center;\n}\n.task-list .task h5,\n.task-list .task p,\n.task-list .task i,\n.task-list .task-headers h5,\n.task-list .task-headers p,\n.task-list .task-headers i {\n  text-align: center;\n}\n.task-list .task i,\n.task-list .task-headers i {\n  padding: 0.3125rem;\n}\n.task-list .task i:hover,\n.task-list .task-headers i:hover {\n  cursor: pointer;\n  background-color: hsl(120, 100%, 50%);\n  color: white;\n}\n.task-list .task .task-title,\n.task-list .task-headers .task-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.task-list .task .task-description,\n.task-list .task-headers .task-description {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.task-list .task .task-project,\n.task-list .task-headers .task-project {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.form-bg {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 80%;\n  background-color: hsla(0, 0%, 0%, 0.7);\n}\n.form-bg .new-form {\n  background-color: white;\n  padding: 1.5625rem;\n  border-radius: 1.5625rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.form-bg .new-form .input-ctn {\n  display: flex;\n  flex-direction: column;\n}\n\n@media screen and (max-width: 1500px) {\n  .form-bg {\n    max-width: calc(100% - 300px);\n  }\n}","$font-primary: \"Inter\", sans-serf;\r\n","// Primary Colors\r\n$clr-primary: hsl(11, 55%, 72%);\r\n$clr-secondary: hsl(51, 100%, 53%);\r\n$clr-tertiary: hsl(44, 30%, 85%);\r\n\r\n// Neutral Colors\r\n$clr-white: hsl(0, 0%, 100%);\r\n$clr-gray-lt: hsl(0, 0%, 95%);\r\n$clr-gray: hsl(0, 0%, 50%);\r\n$clr-gray-dk: hsl(0, 0%, 15%);\r\n$clr-black: hsl(0, 0%, 0%);\r\n","*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font: inherit;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  margin-top: 0;\r\n  line-height: 1.1;\r\n}\r\n\r\nh1 {\r\n  font-size: rem(24);\r\n  margin-bottom: rem(3);\r\n  color: $clr-primary;\r\n  @include breakpoint(large) {\r\n    font-size: rem(28);\r\n  }\r\n}\r\n\r\nh2 {\r\n  font-size: rem(24);\r\n  margin-bottom: rem(24);\r\n  color: $clr-secondary;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n","// 640px, 1150px, 1400px\r\n$breakpoints-up: (\r\n  \"medium\": \"40em\",\r\n  \"large\": \"71.875em\",\r\n  \"xlarge\": \"87.5em\",\r\n);\r\n\r\n// 639px, 1149px, 1399px\r\n$breakpoints-down: (\r\n  \"small\": \"39.9375em\",\r\n  \"medium\": \"71.8125em\",\r\n  \"large\": \"87.4375em\",\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (min-width: map-get($breakpoints-up, $size)) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin breakpoint-down($size) {\r\n  @media (max-width: map-get($breakpoints-down, $size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"../globals/\" as *;\r\n\r\naside {\r\n  width: 20%;\r\n  min-width: rem(300);\r\n  padding: rem(25);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: rem(45);\r\n  background-color: $clr-tertiary;\r\n  min-height: 100vh;\r\n  z-index: 2;\r\n\r\n  .aside-flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: rem(10);\r\n  }\r\n\r\n  button {\r\n    font-size: rem(14);\r\n    border: none;\r\n    padding: rem(5);\r\n    background: none;\r\n    border-radius: rem(10);\r\n    display: flex;\r\n    gap: 10px;\r\n    padding-left: 15px;\r\n  }\r\n\r\n  button:hover {\r\n    background-color: $clr-primary;\r\n    cursor: pointer;\r\n  }\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"../globals/\" as *;\r\n\r\nmain {\r\n  width: 80%;\r\n  padding: rem(25);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: rem(45);\r\n  background-color: gray;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"../globals/\" as *;\r\n\r\n.task-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: rem(10);\r\n  width: 90%;\r\n\r\n  .task-headers {\r\n    font-weight: 700;\r\n    background-color: lightblue;\r\n  }\r\n\r\n  .task {\r\n    border-bottom: 1px solid black;\r\n  }\r\n\r\n  .task,\r\n  .task-headers {\r\n    display: grid;\r\n    grid: auto-flow / rem(40) rem(200) rem(100) 1fr rem(150);\r\n    gap: rem(15);\r\n    padding: rem(10);\r\n    align-items: center;\r\n\r\n    h5,\r\n    p,\r\n    i {\r\n      text-align: center;\r\n    }\r\n\r\n    i {\r\n      padding: rem(5);\r\n    }\r\n\r\n    i:hover {\r\n      cursor: pointer;\r\n      background-color: hsl(120, 100%, 50%);\r\n      color: white;\r\n    }\r\n\r\n    .task-title {\r\n      overflow: hidden;\r\n      white-space: nowrap;\r\n      text-overflow: ellipsis;\r\n    }\r\n\r\n    .task-description {\r\n      overflow: hidden;\r\n      white-space: nowrap;\r\n      text-overflow: ellipsis;\r\n    }\r\n\r\n    .task-project {\r\n      overflow: hidden;\r\n      white-space: nowrap;\r\n      text-overflow: ellipsis;\r\n    }\r\n  }\r\n}\r\n\r\n.form-bg {\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 80%;\r\n  background-color: hsla(0, 0%, 0%, 0.7);\r\n\r\n  .new-form {\r\n    background-color: white;\r\n    padding: rem(25);\r\n    border-radius: rem(25);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: rem(20);\r\n\r\n    .input-ctn {\r\n      display: flex;\r\n      flex-direction: column;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1500px) {\r\n  .form-bg {\r\n    max-width: calc(100% - 300px);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/Tasks.js":
/*!*************************!*\
  !*** ./src/js/Tasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   allTasks: () => (/* binding */ allTasks)
/* harmony export */ });
// file for keeping track of state for all tasks & adding new tasks


const taskOne = {
  title: "Buy dog food",
  description:
    "Dog will run out of food in a couple days, will go to the store to buy more.",
  dueDate: "01/02/2024",
  project: "Personal",
};

const taskTwo = {
  title: "Send email to Paul",
  description: "Need to send Paul a list of revisions that need to be done.",
  dueDate: "01/04/2024",
  project: "Work",
};

const allTasks = [taskOne, taskTwo];

class Task {
  constructor(title, dueDate, description = "", project = null) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.project = project;
  }

  deleteTask() {
    console.log("delete task function");
  }

  addTask() {
    console.log("add task to allTasks function");
  }
}

const testTask = new Task("example title", "example duedate");
console.log(allTasks);


/***/ }),

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks */ "./src/js/Tasks.js");



const main = document.querySelector("main");

class UI {
  static loadHome() {
    this.loadTasks();
    this.loadProjects();
    this.loadEventListeners();
  }

  static clearContent(sectionName) {
    const section = document.querySelector(sectionName);
    section.innerHTML = "";
  }

  static newTaskWindowOpen = false;

  static checkWindowOpen() {
    return this.newTaskWindowOpen;
  }

  static loadTasks() {
    //this.clearContent("main");
  }

  static loadProjects() {
    // this.clearContent();
    // main.innerHTML = `<h1>${project.name}</h1>`;
  }

  static loadEventListeners() {
    document.addEventListener("click", this.handleDocumentClick);
  }

  static handleDocumentClick(e) {
    const { target } = e;
    if (target.matches("#add-task") && !UI.checkWindowOpen()) {
      UI.displayForm("task");
    } else if (target.matches("#add-project") && !UI.checkWindowOpen()) {
      UI.displayForm("project");
    }
  }

  static displayForm(formType) {
    UI.newTaskWindowOpen = true;
    const form =
      formType === "task" ? this.createTaskForm() : this.createProjectForm();
    const formCtn = this.createFormCtn(form);
    this.createFormEventListeners(formCtn);
    main.prepend(formCtn);
    if (formType === "task") {
      this.handleTaskSubmit();
    } else {
      this.handleProjectSubmit();
    }
  }

  static createFormCtn(form) {
    const formCtn = document.createElement("div");
    formCtn.classList.add("form-bg");
    formCtn.appendChild(form);
    return formCtn;
  }

  static createFormEventListeners(formCtn) {
    formCtn.addEventListener("click", (e) => {
      if (e.target === formCtn) {
        main.removeChild(formCtn);
        UI.newTaskWindowOpen = false;
      }
    });
  }

  static createTaskForm() {
    const form = document.createElement("form");
    form.classList.add("new-form");
    form.id = "task-form";
    form.innerHTML = `<div class="input-ctn" id="title-ctn">
    <label for="title">Title</label>
    <input type="text" id="title" />
    </div>
    <div class="input-ctn" id="description-ctn">
      <label for="description">Description</label>
      <input type="text" id="description"/>
    </div>
    <div class="input-ctn" id="due-date-ctn">
      <label for="due-date">Due Date</label>
      <input id="due-date" type="date" />
    </div>
    <div class="input-ctn" id="project-ctn">
      <label for="project">Project</label>
      <input id="project" type="text" />
    </div>
    <button id="submit-new-task" type="submit">Create Task</button>`;
    return form;
  }

  static createProjectForm() {
    const form = document.createElement("form");
    form.classList.add("new-form");
    form.id = "project-form";
    form.innerHTML = `<div class="input-ctn" id="project-name-ctn">
    <label for="project-name">Project Name</label>
    <input type="text" id="project-name" />
  </div>
  <button id="submit-new-project" type="submit">Create Project</button>`;
    return form;
  }

  static handleTaskSubmit() {
    let submitBtn = document.querySelector("#submit-new-task");
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // assign values from form
      const title = document.querySelector("#title").value;
      const dueDate = document.querySelector("#due-date").value;
      const description = document.querySelector("#description").value;
      const project = document.querySelector("#project").value;

      // if valid, create new obj with values
      if (
        this.checkFormConditions(title) &&
        this.checkFormConditions(dueDate)
      ) {
        const task = new _Tasks__WEBPACK_IMPORTED_MODULE_0__.Task(title, dueDate, description, project);
        _Tasks__WEBPACK_IMPORTED_MODULE_0__.allTasks.push(task);
        console.log(_Tasks__WEBPACK_IMPORTED_MODULE_0__.allTasks);
      }
    });
  }

  static checkFormConditions(field) {
    switch (field) {
      case "":
      case " ":
        return false;
      default:
        return true;
    }
  }

  static handleProjectSubmit() {
    const submitBtn = document.querySelector("#submit-new-project");
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/UI.js */ "./src/js/UI.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");



_js_UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.loadHome();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtmQUFrZixVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxRQUFRLFFBQVEsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFB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O0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQzBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEN5QztBQUMzQjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQUk7QUFDN0IsUUFBUSw0Q0FBUTtBQUNoQixvQkFBb0IsNENBQVE7QUFDNUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7OztVQ3RKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FnQztBQUNKO0FBQzVCO0FBQ0EseUNBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9UYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xODc1cmVtO1xuICBjb2xvcjogaHNsKDExLCA1NSUsIDcyJSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzEuODc1ZW0pIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGNvbG9yOiBoc2woNTEsIDEwMCUsIDUzJSk7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYXNpZGUge1xuICB3aWR0aDogMjAlO1xuICBtaW4td2lkdGg6IDE4Ljc1cmVtO1xuICBwYWRkaW5nOiAxLjU2MjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMi44MTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDQsIDMwJSwgODUlKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDI7XG59XG5hc2lkZSAuYXNpZGUtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC42MjVyZW07XG59XG5hc2lkZSBidXR0b24ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMzEyNXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuYXNpZGUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDExLCA1NSUsIDcyJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWFpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEuNTYyNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyLjgxMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi50YXNrLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNjI1cmVtO1xuICB3aWR0aDogOTAlO1xufVxuLnRhc2stbGlzdCAudGFzay1oZWFkZXJzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuLnRhc2stbGlzdCAudGFzayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbi50YXNrLWxpc3QgLnRhc2ssXG4udGFzay1saXN0IC50YXNrLWhlYWRlcnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkOiBhdXRvLWZsb3cvMi41cmVtIDEyLjVyZW0gNi4yNXJlbSAxZnIgOS4zNzVyZW07XG4gIGdhcDogMC45Mzc1cmVtO1xuICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YXNrLWxpc3QgLnRhc2sgaDUsXG4udGFzay1saXN0IC50YXNrIHAsXG4udGFzay1saXN0IC50YXNrIGksXG4udGFzay1saXN0IC50YXNrLWhlYWRlcnMgaDUsXG4udGFzay1saXN0IC50YXNrLWhlYWRlcnMgcCxcbi50YXNrLWxpc3QgLnRhc2staGVhZGVycyBpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhc2stbGlzdCAudGFzayBpLFxuLnRhc2stbGlzdCAudGFzay1oZWFkZXJzIGkge1xuICBwYWRkaW5nOiAwLjMxMjVyZW07XG59XG4udGFzay1saXN0IC50YXNrIGk6aG92ZXIsXG4udGFzay1saXN0IC50YXNrLWhlYWRlcnMgaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgMTAwJSwgNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRhc2stbGlzdCAudGFzayAudGFzay10aXRsZSxcbi50YXNrLWxpc3QgLnRhc2staGVhZGVycyAudGFzay10aXRsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnRhc2stbGlzdCAudGFzayAudGFzay1kZXNjcmlwdGlvbixcbi50YXNrLWxpc3QgLnRhc2staGVhZGVycyAudGFzay1kZXNjcmlwdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnRhc2stbGlzdCAudGFzayAudGFzay1wcm9qZWN0LFxuLnRhc2stbGlzdCAudGFzay1oZWFkZXJzIC50YXNrLXByb2plY3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmZvcm0tYmcge1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjcpO1xufVxuLmZvcm0tYmcgLm5ldy1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEuNTYyNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMS41NjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuMjVyZW07XG59XG4uZm9ybS1iZyAubmV3LWZvcm0gLmlucHV0LWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAuZm9ybS1iZyB7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2dlbmVyYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxpdGllcy9fYnJlYWtwb2ludHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYXNpZGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL190YXNrcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JFVGE7RUZVYixlQUFBO0VBQ0EsaUNHSlk7RUhLWixnQkFBQTtFQUNBLGFBQUE7QUNIRjs7QUdWQTs7O0VBR0Usc0JBQUE7QUhhRjs7QUdWQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBSGFGOztBR1ZBOzs7RUFHRSxjQUFBO0VBQ0EsZUFBQTtBSGFGOztBSTFCQTs7O0VBR0UsYUFBQTtFQUNBLGdCQUFBO0FKNkJGOztBSTFCQTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkZaWTtBRnlDZDtBSzNCRTtFRExGO0lBS0ksa0JBQUE7RUorQkY7QUFDRjs7QUk1QkE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJGcEJjO0FGbURoQjs7QUk1QkE7OztFQUdFLHFCQUFBO0FKK0JGOztBTXhEQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DSlBhO0VJUWIsaUJBQUE7RUFDQSxVQUFBO0FOMkRGO0FNekRFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBTjJESjtBTXhERTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QU4wREo7QU12REU7RUFDRSxtQ0ovQlU7RUlnQ1YsZUFBQTtBTnlESjs7QU92RkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBUDBGRjs7QVFqR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBUm9HRjtBUWxHRTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7QVJvR0o7QVFqR0U7RUFDRSw4QkFBQTtBUm1HSjtBUWhHRTs7RUFFRSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBUmtHSjtBUWhHSTs7Ozs7O0VBR0Usa0JBQUE7QVJxR047QVFsR0k7O0VBQ0Usa0JBQUE7QVJxR047QVFsR0k7O0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBUnFHTjtBUWxHSTs7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QVJxR047QVFsR0k7O0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FScUdOO0FRbEdJOztFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBUnFHTjs7QVFoR0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtBUm1HRjtBUWpHRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QVJtR0o7QVFqR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QVJtR047O0FROUZBO0VBQ0U7SUFDRSw2QkFBQTtFUmlHRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImZvbnRzXFxcIiBhcyAqO1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcbiAgZm9udC1zaXplOiByZW0oMTYpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNsci1ncmF5LWx0O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblwiLFwiaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTUlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMTg3NXJlbTtcXG4gIGNvbG9yOiBoc2woMTEsIDU1JSwgNzIlKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDcxLjg3NWVtKSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBjb2xvcjogaHNsKDUxLCAxMDAlLCA1MyUpO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmFzaWRlIHtcXG4gIHdpZHRoOiAyMCU7XFxuICBtaW4td2lkdGg6IDE4Ljc1cmVtO1xcbiAgcGFkZGluZzogMS41NjI1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIuODEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NCwgMzAlLCA4NSUpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5hc2lkZSAuYXNpZGUtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC42MjVyZW07XFxufVxcbmFzaWRlIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC4zMTI1cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuYXNpZGUgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMSwgNTUlLCA3MiUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiAxLjU2MjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIuODEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNjI1cmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLnRhc2stbGlzdCAudGFzay1oZWFkZXJzIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcbi50YXNrLWxpc3QgLnRhc2sge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4udGFzay1saXN0IC50YXNrLFxcbi50YXNrLWxpc3QgLnRhc2staGVhZGVycyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZDogYXV0by1mbG93LzIuNXJlbSAxMi41cmVtIDYuMjVyZW0gMWZyIDkuMzc1cmVtO1xcbiAgZ2FwOiAwLjkzNzVyZW07XFxuICBwYWRkaW5nOiAwLjYyNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrLWxpc3QgLnRhc2sgaDUsXFxuLnRhc2stbGlzdCAudGFzayBwLFxcbi50YXNrLWxpc3QgLnRhc2sgaSxcXG4udGFzay1saXN0IC50YXNrLWhlYWRlcnMgaDUsXFxuLnRhc2stbGlzdCAudGFzay1oZWFkZXJzIHAsXFxuLnRhc2stbGlzdCAudGFzay1oZWFkZXJzIGkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGFzay1saXN0IC50YXNrIGksXFxuLnRhc2stbGlzdCAudGFzay1oZWFkZXJzIGkge1xcbiAgcGFkZGluZzogMC4zMTI1cmVtO1xcbn1cXG4udGFzay1saXN0IC50YXNrIGk6aG92ZXIsXFxuLnRhc2stbGlzdCAudGFzay1oZWFkZXJzIGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyMCwgMTAwJSwgNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRhc2stbGlzdCAudGFzayAudGFzay10aXRsZSxcXG4udGFzay1saXN0IC50YXNrLWhlYWRlcnMgLnRhc2stdGl0bGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLnRhc2stbGlzdCAudGFzayAudGFzay1kZXNjcmlwdGlvbixcXG4udGFzay1saXN0IC50YXNrLWhlYWRlcnMgLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLnRhc2stbGlzdCAudGFzayAudGFzay1wcm9qZWN0LFxcbi50YXNrLWxpc3QgLnRhc2staGVhZGVycyAudGFzay1wcm9qZWN0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5mb3JtLWJnIHtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNyk7XFxufVxcbi5mb3JtLWJnIC5uZXctZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEuNTYyNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNTYyNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjI1cmVtO1xcbn1cXG4uZm9ybS1iZyAubmV3LWZvcm0gLmlucHV0LWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XFxuICAuZm9ybS1iZyB7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcbiAgfVxcbn1cIixcIiRmb250LXByaW1hcnk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXHJcXG5cIixcIi8vIFByaW1hcnkgQ29sb3JzXFxyXFxuJGNsci1wcmltYXJ5OiBoc2woMTEsIDU1JSwgNzIlKTtcXHJcXG4kY2xyLXNlY29uZGFyeTogaHNsKDUxLCAxMDAlLCA1MyUpO1xcclxcbiRjbHItdGVydGlhcnk6IGhzbCg0NCwgMzAlLCA4NSUpO1xcclxcblxcclxcbi8vIE5ldXRyYWwgQ29sb3JzXFxyXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4kY2xyLWdyYXktbHQ6IGhzbCgwLCAwJSwgOTUlKTtcXHJcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4kY2xyLWdyYXktZGs6IGhzbCgwLCAwJSwgMTUlKTtcXHJcXG4kY2xyLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXHJcXG5cIixcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmltZyxcXHJcXG5waWN0dXJlLFxcclxcbnN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiByZW0oMjQpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogcmVtKDMpO1xcclxcbiAgY29sb3I6ICRjbHItcHJpbWFyeTtcXHJcXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMjgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IHJlbSgyNCk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiByZW0oMjQpO1xcclxcbiAgY29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblwiLFwiLy8gNjQwcHgsIDExNTBweCwgMTQwMHB4XFxyXFxuJGJyZWFrcG9pbnRzLXVwOiAoXFxyXFxuICBcXFwibWVkaXVtXFxcIjogXFxcIjQwZW1cXFwiLFxcclxcbiAgXFxcImxhcmdlXFxcIjogXFxcIjcxLjg3NWVtXFxcIixcXHJcXG4gIFxcXCJ4bGFyZ2VcXFwiOiBcXFwiODcuNWVtXFxcIixcXHJcXG4pO1xcclxcblxcclxcbi8vIDYzOXB4LCAxMTQ5cHgsIDEzOTlweFxcclxcbiRicmVha3BvaW50cy1kb3duOiAoXFxyXFxuICBcXFwic21hbGxcXFwiOiBcXFwiMzkuOTM3NWVtXFxcIixcXHJcXG4gIFxcXCJtZWRpdW1cXFwiOiBcXFwiNzEuODEyNWVtXFxcIixcXHJcXG4gIFxcXCJsYXJnZVxcXCI6IFxcXCI4Ny40Mzc1ZW1cXFwiLFxcclxcbik7XFxyXFxuXFxyXFxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUpIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cy11cCwgJHNpemUpKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludC1kb3duKCRzaXplKSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMtZG93biwgJHNpemUpKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuYXNpZGUge1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG4gIG1pbi13aWR0aDogcmVtKDMwMCk7XFxyXFxuICBwYWRkaW5nOiByZW0oMjUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IHJlbSg0NSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXRlcnRpYXJ5O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcblxcclxcbiAgLmFzaWRlLWZsZXgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IHJlbSgxMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IHJlbSgxNCk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogcmVtKDUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiByZW0oMTApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcGFkZGluZzogcmVtKDI1KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogcmVtKDQ1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiByZW0oMTApO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG5cXHJcXG4gIC50YXNrLWhlYWRlcnMge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzayB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLFxcclxcbiAgLnRhc2staGVhZGVycyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlbSg0MCkgcmVtKDIwMCkgcmVtKDEwMCkgMWZyIHJlbSgxNTApO1xcclxcbiAgICBnYXA6IHJlbSgxNSk7XFxyXFxuICAgIHBhZGRpbmc6IHJlbSgxMCk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGg1LFxcclxcbiAgICBwLFxcclxcbiAgICBpIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaSB7XFxyXFxuICAgICAgcGFkZGluZzogcmVtKDUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGk6aG92ZXIge1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTIwLCAxMDAlLCA1MCUpO1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzay10aXRsZSB7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhc2stcHJvamVjdCB7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJnIHtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNyk7XFxyXFxuXFxyXFxuICAubmV3LWZvcm0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogcmVtKDI1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogcmVtKDI1KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiByZW0oMjApO1xcclxcblxcclxcbiAgICAuaW5wdXQtY3RuIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XFxyXFxuICAuZm9ybS1iZyB7XFxyXFxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZmlsZSBmb3Iga2VlcGluZyB0cmFjayBvZiBzdGF0ZSBmb3IgYWxsIHRhc2tzICYgYWRkaW5nIG5ldyB0YXNrc1xyXG5leHBvcnQgeyBhbGxUYXNrcywgVGFzayB9O1xyXG5cclxuY29uc3QgdGFza09uZSA9IHtcclxuICB0aXRsZTogXCJCdXkgZG9nIGZvb2RcIixcclxuICBkZXNjcmlwdGlvbjpcclxuICAgIFwiRG9nIHdpbGwgcnVuIG91dCBvZiBmb29kIGluIGEgY291cGxlIGRheXMsIHdpbGwgZ28gdG8gdGhlIHN0b3JlIHRvIGJ1eSBtb3JlLlwiLFxyXG4gIGR1ZURhdGU6IFwiMDEvMDIvMjAyNFwiLFxyXG4gIHByb2plY3Q6IFwiUGVyc29uYWxcIixcclxufTtcclxuXHJcbmNvbnN0IHRhc2tUd28gPSB7XHJcbiAgdGl0bGU6IFwiU2VuZCBlbWFpbCB0byBQYXVsXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiTmVlZCB0byBzZW5kIFBhdWwgYSBsaXN0IG9mIHJldmlzaW9ucyB0aGF0IG5lZWQgdG8gYmUgZG9uZS5cIixcclxuICBkdWVEYXRlOiBcIjAxLzA0LzIwMjRcIixcclxuICBwcm9qZWN0OiBcIldvcmtcIixcclxufTtcclxuXHJcbmNvbnN0IGFsbFRhc2tzID0gW3Rhc2tPbmUsIHRhc2tUd29dO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uID0gXCJcIiwgcHJvamVjdCA9IG51bGwpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVGFzaygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIHRhc2sgZnVuY3Rpb25cIik7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJhZGQgdGFzayB0byBhbGxUYXNrcyBmdW5jdGlvblwiKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHRlc3RUYXNrID0gbmV3IFRhc2soXCJleGFtcGxlIHRpdGxlXCIsIFwiZXhhbXBsZSBkdWVkYXRlXCIpO1xyXG5jb25zb2xlLmxvZyhhbGxUYXNrcyk7XHJcbiIsImltcG9ydCB7IGFsbFRhc2tzLCBUYXNrIH0gZnJvbSBcIi4vVGFza3NcIjtcclxuZXhwb3J0IHsgVUkgfTtcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuXHJcbmNsYXNzIFVJIHtcclxuICBzdGF0aWMgbG9hZEhvbWUoKSB7XHJcbiAgICB0aGlzLmxvYWRUYXNrcygpO1xyXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKTtcclxuICAgIHRoaXMubG9hZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2xlYXJDb250ZW50KHNlY3Rpb25OYW1lKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWN0aW9uTmFtZSk7XHJcbiAgICBzZWN0aW9uLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbmV3VGFza1dpbmRvd09wZW4gPSBmYWxzZTtcclxuXHJcbiAgc3RhdGljIGNoZWNrV2luZG93T3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLm5ld1Rhc2tXaW5kb3dPcGVuO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWRUYXNrcygpIHtcclxuICAgIC8vdGhpcy5jbGVhckNvbnRlbnQoXCJtYWluXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWRQcm9qZWN0cygpIHtcclxuICAgIC8vIHRoaXMuY2xlYXJDb250ZW50KCk7XHJcbiAgICAvLyBtYWluLmlubmVySFRNTCA9IGA8aDE+JHtwcm9qZWN0Lm5hbWV9PC9oMT5gO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XHJcbiAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIjYWRkLXRhc2tcIikgJiYgIVVJLmNoZWNrV2luZG93T3BlbigpKSB7XHJcbiAgICAgIFVJLmRpc3BsYXlGb3JtKFwidGFza1wiKTtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIjYWRkLXByb2plY3RcIikgJiYgIVVJLmNoZWNrV2luZG93T3BlbigpKSB7XHJcbiAgICAgIFVJLmRpc3BsYXlGb3JtKFwicHJvamVjdFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBkaXNwbGF5Rm9ybShmb3JtVHlwZSkge1xyXG4gICAgVUkubmV3VGFza1dpbmRvd09wZW4gPSB0cnVlO1xyXG4gICAgY29uc3QgZm9ybSA9XHJcbiAgICAgIGZvcm1UeXBlID09PSBcInRhc2tcIiA/IHRoaXMuY3JlYXRlVGFza0Zvcm0oKSA6IHRoaXMuY3JlYXRlUHJvamVjdEZvcm0oKTtcclxuICAgIGNvbnN0IGZvcm1DdG4gPSB0aGlzLmNyZWF0ZUZvcm1DdG4oZm9ybSk7XHJcbiAgICB0aGlzLmNyZWF0ZUZvcm1FdmVudExpc3RlbmVycyhmb3JtQ3RuKTtcclxuICAgIG1haW4ucHJlcGVuZChmb3JtQ3RuKTtcclxuICAgIGlmIChmb3JtVHlwZSA9PT0gXCJ0YXNrXCIpIHtcclxuICAgICAgdGhpcy5oYW5kbGVUYXNrU3VibWl0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZVByb2plY3RTdWJtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVGb3JtQ3RuKGZvcm0pIHtcclxuICAgIGNvbnN0IGZvcm1DdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9ybUN0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1iZ1wiKTtcclxuICAgIGZvcm1DdG4uYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICByZXR1cm4gZm9ybUN0bjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVGb3JtRXZlbnRMaXN0ZW5lcnMoZm9ybUN0bikge1xyXG4gICAgZm9ybUN0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBmb3JtQ3RuKSB7XHJcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChmb3JtQ3RuKTtcclxuICAgICAgICBVSS5uZXdUYXNrV2luZG93T3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVUYXNrRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcIm5ldy1mb3JtXCIpO1xyXG4gICAgZm9ybS5pZCA9IFwidGFzay1mb3JtXCI7XHJcbiAgICBmb3JtLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtY3RuXCIgaWQ9XCJ0aXRsZS1jdG5cIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY3RuXCIgaWQ9XCJkZXNjcmlwdGlvbi1jdG5cIj5cclxuICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY3RuXCIgaWQ9XCJkdWUtZGF0ZS1jdG5cIj5cclxuICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgaWQ9XCJkdWUtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWN0blwiIGlkPVwicHJvamVjdC1jdG5cIj5cclxuICAgICAgPGxhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZWN0PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGlkPVwicHJvamVjdFwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBpZD1cInN1Ym1pdC1uZXctdGFza1wiIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgVGFzazwvYnV0dG9uPmA7XHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcIm5ldy1mb3JtXCIpO1xyXG4gICAgZm9ybS5pZCA9IFwicHJvamVjdC1mb3JtXCI7XHJcbiAgICBmb3JtLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtY3RuXCIgaWQ9XCJwcm9qZWN0LW5hbWUtY3RuXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwicHJvamVjdC1uYW1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgLz5cclxuICA8L2Rpdj5cclxuICA8YnV0dG9uIGlkPVwic3VibWl0LW5ldy1wcm9qZWN0XCIgdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBQcm9qZWN0PC9idXR0b24+YDtcclxuICAgIHJldHVybiBmb3JtO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGhhbmRsZVRhc2tTdWJtaXQoKSB7XHJcbiAgICBsZXQgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXQtbmV3LXRhc2tcIik7XHJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIC8vIGFzc2lnbiB2YWx1ZXMgZnJvbSBmb3JtXHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcclxuICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWU7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFwiKS52YWx1ZTtcclxuXHJcbiAgICAgIC8vIGlmIHZhbGlkLCBjcmVhdGUgbmV3IG9iaiB3aXRoIHZhbHVlc1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5jaGVja0Zvcm1Db25kaXRpb25zKHRpdGxlKSAmJlxyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JtQ29uZGl0aW9ucyhkdWVEYXRlKVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0KTtcclxuICAgICAgICBhbGxUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2hlY2tGb3JtQ29uZGl0aW9ucyhmaWVsZCkge1xyXG4gICAgc3dpdGNoIChmaWVsZCkge1xyXG4gICAgICBjYXNlIFwiXCI6XHJcbiAgICAgIGNhc2UgXCIgXCI6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGhhbmRsZVByb2plY3RTdWJtaXQoKSB7XHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdC1uZXctcHJvamVjdFwiKTtcclxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vanMvVUkuanNcIjtcclxuaW1wb3J0IFwiLi9zY3NzL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5VSS5sb2FkSG9tZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=