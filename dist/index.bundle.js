/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\nbody {\n    display: flex;\n    font-family: 'Open Sans', sans-serif;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: rgb(102, 173, 231);\n}\n.header{\n    display: flex;\n    background-color: steelblue;\n    padding: 10px;\n    font-size: 30px;\n    color: white;\n    justify-content: space-between;\n}\n.modal-header{\n    display: flex;\n    background-color: steelblue;\n    padding: 10px;\n    font-size: 30px;\n    color: white;\n    justify-content: space-between;\n    align-items: center;\n\n}\n.modal-header-title{\n    margin-left: 50px;\n}\n.close{\n    font-size: 30px;\n    border: none;\n    background-color: inherit;\n    color: white;\n    width: 40px;\n    \n}\n\n.close:hover{\n    cursor: pointer;\n    color: rgb(226, 226, 226);\n}\nheader h1{\n    margin-left: 50px;\n}\n.new-task-wrapper{\n    display: flex;\n}\n#newTask{\n    font-size: 24px;\n    color: white;\n    border: none;\n    background-color:inherit;\n    width: 150px;\n}\n#newTask:hover{\n    border-bottom: 3px solid lightskyblue;\n    color: rgb(218, 218, 218);\n    cursor: pointer;\n}\n.projects-menu {\n    height: 100%;\n    width: 300px;\n    background-color: rgb(102, 173, 231);\n    border-right: 3px solid steelblue;\n\n}\n.pro{\n    display: flex;\n    justify-content: space-between;\n    background-color: inherit;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-size: 16px;\n    color: white;\n    padding-left: 20px;\n    border: none;\n    border-left: 5px solid steelblue;\n    margin: 5px;\n    border-radius: 3px;\n}\n.pro:hover{\n    border-left: 5px solid rgb(84, 146, 196);\n    background-color: rgb(84, 146, 196);\n}\n.pro span {\n    visibility: hidden;\n}\n.active-project{\n    border-left: 5px solid rgb(84, 146, 196);\n    background-color: rgb(84, 146, 196);\n}\n.pro:hover span{\n    visibility: visible;\n}\n\n#deleteProject{\n    padding-right: 15px;\n    padding-left: 15px;\n    color: white;\n    border: 2px solid rgb(84, 146, 196);\n}\n\n#deleteProject:hover{\n    border-left: 2px solid lightskyblue;\n    border-bottom: 2px solid lightskyblue;\n}\n.home{\n    font-size: 16px;\n    padding: 10px;\n    border-radius: 50px;\n    border: 3px solid lightskyblue;\n    background-color: inherit;\n    color: white;\n    margin-left: 2px;\n    margin-right: 2px;\n}\n.home:hover{\n    cursor: pointer;\n    border: 3px solid white;\n    background-color: lightskyblue;\n    color: black;\n}\n.home:active{\n    transform: translateY(2px);\n}\n.home-menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-bottom: 3px solid steelblue;\n    height: 150px;\n}\n\n\n.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.all-projects{\n    display: flex;\n    flex-direction: column;\n    height: 430px;\n    overflow-y: auto;\n}\n\n#newProject {\n    /* this is just for looks now */\n    margin-top: 20px;\n    margin-bottom: 30px;\n}\n\n\n\n.project-board{\n    display: flex;\n    margin: 40px;\n    gap: 20px;\n\n}\n.task-area{\n    display: flex;\n    gap: 20px;\n    height: 600px;\n    overflow-y: auto;\n    flex-direction: column;\n    background-color: rgb(240, 239, 239);\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    align-items: center;\n}\n.header-p{\n    font-weight: bold;\n    text-align: center;\n    background-color: rgb(240, 239, 239);\n    padding: 5px;\n    width: 250px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.task {\n    font-size: 12px;\n    margin-top: 5px;\n    border: none;\n    background-color: white;\n    width: 90%;\n    padding: 20px;\n    text-align: left;\n    max-width: 225px;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px steelblue;\n}\n.task:hover{\n    background-color: rgb(247, 247, 247);\n    cursor: pointer;\n    box-shadow: 2px 2px 5px steelblue;\n}\n\n\n.title-input {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n}\n\n.project-form-input{\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n}\ninput[type=text]{\n    font-size: 16px;\n    border-radius: 5px;\n    border: 2px solid lightskyblue;\n    padding: 10px;\n    outline: none;\n}\n.submit-project{\n    display: flex;\n    gap: 10px;\n}\n#createProject:hover{\n    background-color: lightskyblue;\n    border: 1px solid rgb(101, 196, 255);\n}\n#cancelProject:hover{\n    background-color: rgb(253, 223, 228);\n    border: 1px solid lightpink;\n}\n.new-project-button{\n    border: 1px solid lightskyblue;\n    background-color: white;\n    margin-top: 5px;\n    padding: 5px;\n    width: 120px;\n}\n\n.projectmodal input[type=text]{\n    font-size: 32px;\n    padding: 10px;\n    width: 90%;\n    height: 300px;\n    resize: none;\n}\n.project-modal {\n    display: block;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: none;\n    background-color: rgba(0,0,0,0.4);\n}\n\n\n.modal-project-content{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    box-shadow: 4px 4px 8px black;\n    width: 60%;\n    background-color: white;\n    margin: 10% auto;\n    height: 500px;\n}\n.title-input-modal{\n    display: flex;\n    flex-direction: column;\n}\n#mTitle{\n    width: 95%;\n    border: none !important;\n    border-bottom: 1px solid steelblue !important;\n    border-right: 1px solid steelblue !important;\n    border-radius: 0px !important;\n    padding-left: 0px !important;\n}\n#taskDesc{\n    width: 95% !important;\n    margin-right: auto;\n    font-size: 16px;\n    resize: none;\n    margin-top: 10px;\n    border: none;\n    outline: none;\n}\n.submit-task{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n#createTask{\n    height: 25px;\n    border: 1px solid steelblue;\n    border-right: none !important;\n    transition: width .2s;\n    font-size: 12px;\n}\n#createTask:hover{\n    width: 150px;\n\n}\n\n.date-box{\n    margin-top: 2px;\n    height: 25px;\n    padding-left: 20px;\n    border: 1px solid steelblue;\n    border-left: none !important;\n}\n\n#dueDate{\n    margin-left: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border: none;\n    font-size: 16px;\n    border-left: 1px solid steelblue;\n    color: rgb(0, 0, 0);\n    height: 100%;\n}\n\n\n\n\n.modal-task-content{\n    display: flex;\n    flex-direction: column;\n    box-shadow: 4px 4px 8px black;\n    width: 60%;\n    background-color: white;\n    margin: 10% auto;\n    height: 500px;\n}\n.task-desc{\n   padding-left: 20px;\n   height:300px;\n   width: 100%;\n}\n\n.status-buttons{\n    display: flex;\n    padding-left: 15px;\n    gap: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n.status-buttons button{\n    font-size: 12px;\n    padding: 10px;\n    padding-bottom: 10px;\n    border: none;\n    border-bottom: 3px solid steelblue;\n    background-color: white;\n    transition: padding .5s;\n}\n.status-buttons button:hover {\n    cursor: pointer;\n    padding-right: 20px !important;\n    padding-left:  20px !important;\n\n}\n.active-task{\n    padding-left: 25px !important;\n    padding-right: 25px !important;\n    background-color: rgb(255, 239, 188) !important;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.confirm{\n    font-size: 12px;\n    padding: 10px;\n    border: none;\n    background-color: white;\n    margin-left: auto;\n    border-bottom: 2px solid steelblue;\n    border-left: 2px solid steelblue;\n}\n\n.confirm:hover {\n    cursor: pointer;\n}\n\n\n.projectHomeMenu{\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n    justify-content: center;\n    gap: 20px;\n\n}\n\n.projectHome {\n    display: flex;\n    padding-left: 50px;\n    padding-right: 50px;\n    align-items: center;\n    font-size: 24px;\n    margin-top: 25px;\n    margin-left: 50px;\n    width: 600px;\n    height: 50px;\n    background-color: inherit;\n    color: white;\n    border: 3px solid lightskyblue;\n    border-radius: 25px;\n\n}\n.taskNumber {\n    margin-left: auto;\n    border: 3px solid lightskyblue;\n    padding: 3px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 50px;\n}\n.task-footer{\n    display: flex;\n    padding: 10px;\n    background-color: rgb(255, 168, 181);\n    height: 100%;\n    justify-content: center;\n}\n.task-footer button{\n    cursor: pointer;\n    border: none;\n    background-color: inherit;\n    font-size: 16px;\n    color: white;\n}\n\n.content-wrapper{\n    display: flex;\n\n}\n\n.flex-wrapper{\n    display: flex;\n    flex: 1 0 auto;\n}\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n    background-color: steelblue;\n    color: white;\n}\n@keyframes bounce{\n    from {transform: translateY(0px)}\n    to {transform: translateY(-5px)}\n}\n\n.footer i{\n    padding-left: 5px;\n    text-decoration: none;\n    color: lightskyblue;\n    font-size: 26px;\n}\n.footer i:hover {\n    font-size: 26px;\n    animation: bounce .3s infinite alternate;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\nbody {\n    display: flex;\n    font-family: 'Open Sans', sans-serif;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: rgb(102, 173, 231);\n}\n.header{\n    display: flex;\n    background-color: steelblue;\n    padding: 10px;\n    font-size: 30px;\n    color: white;\n    justify-content: space-between;\n}\n.modal-header{\n    display: flex;\n    background-color: steelblue;\n    padding: 10px;\n    font-size: 30px;\n    color: white;\n    justify-content: space-between;\n    align-items: center;\n\n}\n.modal-header-title{\n    margin-left: 50px;\n}\n.close{\n    font-size: 30px;\n    border: none;\n    background-color: inherit;\n    color: white;\n    width: 40px;\n    \n}\n\n.close:hover{\n    cursor: pointer;\n    color: rgb(226, 226, 226);\n}\nheader h1{\n    margin-left: 50px;\n}\n.new-task-wrapper{\n    display: flex;\n}\n#newTask{\n    font-size: 24px;\n    color: white;\n    border: none;\n    background-color:inherit;\n    width: 150px;\n}\n#newTask:hover{\n    border-bottom: 3px solid lightskyblue;\n    color: rgb(218, 218, 218);\n    cursor: pointer;\n}\n.projects-menu {\n    height: 100%;\n    width: 300px;\n    background-color: rgb(102, 173, 231);\n    border-right: 3px solid steelblue;\n\n}\n.pro{\n    display: flex;\n    justify-content: space-between;\n    background-color: inherit;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    font-size: 16px;\n    color: white;\n    padding-left: 20px;\n    border: none;\n    border-left: 5px solid steelblue;\n    margin: 5px;\n    border-radius: 3px;\n}\n.pro:hover{\n    border-left: 5px solid rgb(84, 146, 196);\n    background-color: rgb(84, 146, 196);\n}\n.pro span {\n    visibility: hidden;\n}\n.active-project{\n    border-left: 5px solid rgb(84, 146, 196);\n    background-color: rgb(84, 146, 196);\n}\n.pro:hover span{\n    visibility: visible;\n}\n\n#deleteProject{\n    padding-right: 15px;\n    padding-left: 15px;\n    color: white;\n    border: 2px solid rgb(84, 146, 196);\n}\n\n#deleteProject:hover{\n    border-left: 2px solid lightskyblue;\n    border-bottom: 2px solid lightskyblue;\n}\n.home{\n    font-size: 16px;\n    padding: 10px;\n    border-radius: 50px;\n    border: 3px solid lightskyblue;\n    background-color: inherit;\n    color: white;\n    margin-left: 2px;\n    margin-right: 2px;\n}\n.home:hover{\n    cursor: pointer;\n    border: 3px solid white;\n    background-color: lightskyblue;\n    color: black;\n}\n.home:active{\n    transform: translateY(2px);\n}\n.home-menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    border-bottom: 3px solid steelblue;\n    height: 150px;\n}\n\n\n.projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.all-projects{\n    display: flex;\n    flex-direction: column;\n    height: 430px;\n    overflow-y: auto;\n}\n\n#newProject {\n    /* this is just for looks now */\n    margin-top: 20px;\n    margin-bottom: 30px;\n}\n\n\n\n.project-board{\n    display: flex;\n    margin: 40px;\n    gap: 20px;\n\n}\n.task-area{\n    display: flex;\n    gap: 20px;\n    height: 600px;\n    overflow-y: auto;\n    flex-direction: column;\n    background-color: rgb(240, 239, 239);\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    align-items: center;\n}\n.header-p{\n    font-weight: bold;\n    text-align: center;\n    background-color: rgb(240, 239, 239);\n    padding: 5px;\n    width: 250px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.task {\n    font-size: 12px;\n    margin-top: 5px;\n    border: none;\n    background-color: white;\n    width: 90%;\n    padding: 20px;\n    text-align: left;\n    max-width: 225px;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px steelblue;\n}\n.task:hover{\n    background-color: rgb(247, 247, 247);\n    cursor: pointer;\n    box-shadow: 2px 2px 5px steelblue;\n}\n\n\n.title-input {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n}\n\n.project-form-input{\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n}\ninput[type=text]{\n    font-size: 16px;\n    border-radius: 5px;\n    border: 2px solid lightskyblue;\n    padding: 10px;\n    outline: none;\n}\n.submit-project{\n    display: flex;\n    gap: 10px;\n}\n#createProject:hover{\n    background-color: lightskyblue;\n    border: 1px solid rgb(101, 196, 255);\n}\n#cancelProject:hover{\n    background-color: rgb(253, 223, 228);\n    border: 1px solid lightpink;\n}\n.new-project-button{\n    border: 1px solid lightskyblue;\n    background-color: white;\n    margin-top: 5px;\n    padding: 5px;\n    width: 120px;\n}\n\n.projectmodal input[type=text]{\n    font-size: 32px;\n    padding: 10px;\n    width: 90%;\n    height: 300px;\n    resize: none;\n}\n.project-modal {\n    display: block;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: none;\n    background-color: rgba(0,0,0,0.4);\n}\n\n\n.modal-project-content{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    box-shadow: 4px 4px 8px black;\n    width: 60%;\n    background-color: white;\n    margin: 10% auto;\n    height: 500px;\n}\n.title-input-modal{\n    display: flex;\n    flex-direction: column;\n}\n#mTitle{\n    width: 95%;\n    border: none !important;\n    border-bottom: 1px solid steelblue !important;\n    border-right: 1px solid steelblue !important;\n    border-radius: 0px !important;\n    padding-left: 0px !important;\n}\n#taskDesc{\n    width: 95% !important;\n    margin-right: auto;\n    font-size: 16px;\n    resize: none;\n    margin-top: 10px;\n    border: none;\n    outline: none;\n}\n.submit-task{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n#createTask{\n    height: 25px;\n    border: 1px solid steelblue;\n    border-right: none !important;\n    transition: width .2s;\n    font-size: 12px;\n}\n#createTask:hover{\n    width: 150px;\n\n}\n\n.date-box{\n    margin-top: 2px;\n    height: 25px;\n    padding-left: 20px;\n    border: 1px solid steelblue;\n    border-left: none !important;\n}\n\n#dueDate{\n    margin-left: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border: none;\n    font-size: 16px;\n    border-left: 1px solid steelblue;\n    color: rgb(0, 0, 0);\n    height: 100%;\n}\n\n\n\n\n.modal-task-content{\n    display: flex;\n    flex-direction: column;\n    box-shadow: 4px 4px 8px black;\n    width: 60%;\n    background-color: white;\n    margin: 10% auto;\n    height: 500px;\n}\n.task-desc{\n   padding-left: 20px;\n   height:300px;\n   width: 100%;\n}\n\n.status-buttons{\n    display: flex;\n    padding-left: 15px;\n    gap: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n.status-buttons button{\n    font-size: 12px;\n    padding: 10px;\n    padding-bottom: 10px;\n    border: none;\n    border-bottom: 3px solid steelblue;\n    background-color: white;\n    transition: padding .5s;\n}\n.status-buttons button:hover {\n    cursor: pointer;\n    padding-right: 20px !important;\n    padding-left:  20px !important;\n\n}\n.active-task{\n    padding-left: 25px !important;\n    padding-right: 25px !important;\n    background-color: rgb(255, 239, 188) !important;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.confirm{\n    font-size: 12px;\n    padding: 10px;\n    border: none;\n    background-color: white;\n    margin-left: auto;\n    border-bottom: 2px solid steelblue;\n    border-left: 2px solid steelblue;\n}\n\n.confirm:hover {\n    cursor: pointer;\n}\n\n\n.projectHomeMenu{\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n    justify-content: center;\n    gap: 20px;\n\n}\n\n.projectHome {\n    display: flex;\n    padding-left: 50px;\n    padding-right: 50px;\n    align-items: center;\n    font-size: 24px;\n    margin-top: 25px;\n    margin-left: 50px;\n    width: 600px;\n    height: 50px;\n    background-color: inherit;\n    color: white;\n    border: 3px solid lightskyblue;\n    border-radius: 25px;\n\n}\n.taskNumber {\n    margin-left: auto;\n    border: 3px solid lightskyblue;\n    padding: 3px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 50px;\n}\n.task-footer{\n    display: flex;\n    padding: 10px;\n    background-color: rgb(255, 168, 181);\n    height: 100%;\n    justify-content: center;\n}\n.task-footer button{\n    cursor: pointer;\n    border: none;\n    background-color: inherit;\n    font-size: 16px;\n    color: white;\n}\n\n.content-wrapper{\n    display: flex;\n\n}\n\n.flex-wrapper{\n    display: flex;\n    flex: 1 0 auto;\n}\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n    background-color: steelblue;\n    color: white;\n}\n@keyframes bounce{\n    from {transform: translateY(0px)}\n    to {transform: translateY(-5px)}\n}\n\n.footer i{\n    padding-left: 5px;\n    text-decoration: none;\n    color: lightskyblue;\n    font-size: 26px;\n}\n.footer i:hover {\n    font-size: 26px;\n    animation: bounce .3s infinite alternate;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initDOM": () => (/* binding */ initDOM)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



function homeBtn() {
    let homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('click', makeHomeMenu);
}

function newProject() {
    let newBtn = document.getElementById('newProject');
    let projectZone = document.getElementById('projectZone');
    newBtn.addEventListener('click', () => {
        projectZone.innerHTML = `<form id="input" class="title-input" action="">
        <div class="project-form-input">
            <input type="text" id="pTitle" placeholder="What is the title of the Project?" required maxlength="40" >
        </div>
        <div class="submit-project">
            <button type="button" id="createProject" class="new-project-button">CREATE PROJECT</button>
            <button type="button" id="cancelProject" class="new-project-button">CANCEL</button>
        </div>
    </form>`;
        newBtn.style.display = 'none';
        newProjectBoxUI(projectZone, newBtn);
        let createBtn = document.querySelector('#createProject');
        console.log(createBtn);
        createBtn.addEventListener('click', submitProject);
    });

}
function newProjectBoxUI(projectZone, newBtn) {
    let cancel = document.getElementById('cancelProject');
    cancel.addEventListener('click', () => {
        projectZone.innerHTML = '';
        newBtn.style.display = 'block';
    });
}

function makeProjectBtn(name){
    let wrapper = document.querySelector('.all-projects');
    let project = document.createElement('button');
    project.setAttribute('id', name);
    project.classList.add('pro');
    wrapper.appendChild(project);
    project.innerText = name;
    project.appendChild(makeDeleteProjectButton(project));
    

    project.addEventListener('click', () => {
        makeTaskUI();
        setActiveProject(project);
        displayProjectsTasks();
    });

}
function setActiveProject(project) {
    let wrapper = document.querySelector('.all-projects');
    for(let i = 0; i < wrapper.children.length; i++) {
        if(wrapper.children[i].classList.contains('active-project')) {
            wrapper.children[i].classList.remove('active-project');
        }
    }
    project.classList.add('active-project');
}
function returnActiveProjectName() {
    let wrapper = document.querySelector('.all-projects');
    for(let i = 0; i < wrapper.children.length; i++) {
        if(wrapper.children[i].classList.contains('active-project')) {

            let active = wrapper.children[i].id;
            return active;
        }
    }
}
function returnProject() {
    for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
        if(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i].Name.trim() === returnActiveProjectName()) {
            let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i];
            return activeProject;
        }
    }
}
function returnProjectToDelete(project) {
    for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
        if(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i].Name.trim() === project.id) {
            let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i];
            return activeProject;
        }
    }
}
function makeDeleteProjectButton(project) {
    let deleteBtn = document.createElement('span');
    deleteBtn.setAttribute('id', 'deleteProject');
    deleteBtn.innerText = 'X';

    deleteBtn.addEventListener('click', (e) => {
        deleteProject(project, e);
    });
    return deleteBtn;
}
function deleteProject(project, e) {
    _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.deleteProject(returnProjectToDelete(project));
    project.remove();
    e.stopPropagation();
    clearTaskUI();
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
    if(returnActiveProjectName() !== undefined) {
        makeAndDisplayTasks();
    }

}

function submitProject() {
    let projectZone = document.getElementById('projectZone');
    let newBtn = document.getElementById('newProject');
    let projectName = document.getElementById('pTitle');
    
    if(projectName.value === "") {
        alert("Name Can't Be Blank!");
        return;
    }
    else {
        for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
            if(projectName.value === _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i].Name) {
                alert('Project Already Exists!');
                return;
            }
        }
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeProject)(projectName.value);
        makeProjectBtn(projectName.value);
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
        projectZone.innerHTML = '';
        newBtn.style.display = 'block';
        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster);
    }
} 

function makeTaskUI() {
    clearTaskUI();
    let taskDiv = document.querySelector('#taskUI');
    taskDiv.innerHTML = 
    `<div class="project-board">
    <div class="p1">
        <p class="header-p">low-priority</p>
        <div id="low-prio" class="task-area">

        </div>
    </div>
    <div class="p2">
        <p class="header-p">in-progress</p>
        <div id = "in-pro" class="task-area">

        </div>
    </div>
    <div class="p3">
        <p class="header-p">completed</p>
        <div id="complete" class="task-area">

        </div>
    </div>
    <div class="p4">
        <p class="header-p">due-soon</p>
        <div id="due-soon" class="task-area">
            
        </div>
    </div>
</div>`;

// probably put a function here that loads in each individual task thats in the project

let taskBtnWrapper = document.querySelector('.new-task-wrapper');
let taskBtn = document.createElement('button');
    taskBtn.setAttribute('id', 'newTask');
    taskBtn.textContent = 'New Task';

    taskBtn.addEventListener('click', createTaskBtnModal);
    taskBtnWrapper.appendChild(taskBtn);
}


function createTaskBtnModal() {
    let modal = document.getElementById('modal');
    modal.innerHTML = `<div id="modalID" class="project-modal">
    <div class="modal-project-content">

        <header class="modal-header">
            <div></div>
            <h2 class="modal-header-title">Task Info</h1>
            <button type="button" id="closeModal" class="close">X</button>
        </header>
        <form id="input" class="title-input-modal" action="">
            <div class="project-form-input-modal">
                <input type="text" id="mTitle" placeholder="What is the title of the task?" required maxlength="40" >
                <textarea id="taskDesc" placeholder="Task description" rows="15" maxlength="200"></textarea>
            </div>
            <div class="submit-task">
                <div class="date-box">
                    <label for="due-date">Due-Date:</label>
                    <input type="date" id="dueDate" name="due-date">
                </div>
                <button type="button" id="createTask" class="new-project-button">CREATE TASK</button>
                
            </div>
        </form>
    </div>
</div>`;
    let date = document.getElementById('dueDate');
    date.value ='2022-12-31';
    TaskBtnModalLogic();
}
function TaskBtnModalLogic() {
    let close = document.getElementById('closeModal');
    close.addEventListener('click', closeTaskModal);
    
    let submit = document.getElementById('createTask');
    submit.addEventListener('click', submitTask);
}
function closeTaskModal() {
    let modal = document.getElementById('modal');
    modal.innerHTML = '';
}
function clearTaskUI() {
    let taskDiv = document.querySelector('#taskUI');
    taskDiv.innerHTML = '';


    let taskBtnWrapper = document.querySelector('.new-task-wrapper');
    taskBtnWrapper.innerHTML = '';
}
function submitTask() {

    let date = document.getElementById('dueDate');
    let description = document.getElementById('taskDesc').value;
    let taskName = document.getElementById('mTitle');
    if(taskName.value === "") {
        alert("Title Can't Be Blank!");
        return;
    }
    console.log(returnActiveProjectName());
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeTask)(description, taskName.value, date.value, returnActiveProjectName(), "LowPriority");
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
    makeTaskBtn(taskName.value, "LowPriority");
    closeTaskModal();
}
function returnCurrTask(project, name) {
    for(let i = 0; i < project.Tasks.length; i++) {
        let task = project.Tasks[i];
        if(task.Name.trim() === name.trim()) {
            return task;
        }
    }
}
function makeTaskBtn(name, status) {

    if(status === "LowPriority") {
        status = document.getElementById('low-prio');
    }
    else if(status === "InProgress"){
        status = document.getElementById('in-pro');
    }
    else if(status === "Completed"){
        status = document.getElementById('complete');
    }
    else if(status === 4){
        status = document.getElementById('due-soon');
    }


    let task = document.createElement('button');

    task.setAttribute('id', name);
    task.classList.add('task');
    task.textContent = name;
    task.addEventListener('click', () => {
        displayTaskInfo(task);
    });
    status.appendChild(task);
}

function displayProjectsTasks() {    
        let activeProject = returnProject();
        if(activeProject.Tasks.length === undefined) {
            return
        }
        for(let j = 0; j < activeProject.Tasks.length; j++) {
            let currentTask = activeProject.Tasks[j];
            console.log(currentTask);
            makeTaskBtn(currentTask.Name, currentTask.Status)
                    // PUT THE CHECK FOR DUE SOON FUNCTION HERE!!
        }
    }

function displayTaskInfo(e) {
    let modal = document.getElementById('modal');
    modal.innerHTML =
    `<div id="modalID" class="project-modal">
    <div class="modal-task-content">

        <header class="modal-header">
            <div></div>
            <h2 id="taskTitle" class="modal-header-title"></h1>
            <button type="button" id="closeModal" class="close">X</button>
        </header>
        <form id="input" class="title-input-modal" action="">
            <div class="project-form-input-modal">
                <p class="task-desc" id="taskDesc"></p>
            </div>
            <div class="submit-task">
                <div class="status">
                    <div class="date-box">
                        <label for="due-date">Due-Date:</label>
                        <input type="date" id="dueDate" name="due-date"> </input>
                    </div>
                    <div id="statBtn" class="status-buttons">
                        <button type="button" id="low">Low Priority</button>
                        <button type="button" id="in">In-Progress</button>
                        <button type="button" id="comp">Completed</button>
                    </div>
                </div>
                <button type="button" id="confirmChanges" class="confirm">CONFIRM CHANGES</button>
                
            </div>
        </form>
        <footer class="task-footer">
            <button type="button" id="deleteTask">DELETE TASK!</button>
        </footer>
    </div>
</div> `;
    let close = document.getElementById('closeModal');
    close.addEventListener('click', closeTaskModal);

    

    let parentProject = returnProject();

    let task = returnCurrTask(parentProject, e.id);

    let title = document.getElementById('taskTitle');
    title.innerText = task.Name;

    let desc = document.getElementById('taskDesc');
    desc.innerText = task.Description;
    if(desc.innerText === "") {
        desc.innerText = ":]";
    }

    let due = document.getElementById('dueDate');
    due.value = task.Date;

    let statBtn = document.getElementById('statBtn');
    

    for(let i = 0; i < statBtn.children.length; i++) {
        statBtn.children[i].addEventListener('click', () => {
            highlightStatus(statBtn, statBtn.children[i]);
        });
    
        if(task.Status === "LowPriority") {
            statBtn.children[0].classList.add('active-task');
        }
        else if(task.Status === "InProgress") {
            statBtn.children[1].classList.add('active-task');
        }
        else if(task.Status === "Completed") {
            statBtn.children[2].classList.add('active-task');
        }
    }

    let remove = document.getElementById('deleteTask');
    remove.addEventListener('click', () => {
        deleteTask(parentProject, task, e);
    });

    let submit = document.getElementById('confirmChanges');
    submit.addEventListener('click', () => {
        updateTask(task, e);
    });
    
}

function highlightStatus(statusWrapper, statBtn) {
    for(let i = 0; i < statusWrapper.children.length; i++) {
        if(statusWrapper.children[i].classList.contains('active-task')) {
            statusWrapper.children[i].classList.remove('active-task');
        }
    }
    statBtn.classList.add('active-task');
}
function deleteTask(project, task, e) {
    e.remove();
    closeTaskModal();
    project.deleteTask(task);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
}


function updateTaskObject(task) {
    let due = document.getElementById('dueDate');
    task.Date = due.value;

    task.Status = taskStatus();

}

function updateTask(task, e) {
    let oldButtonID = e.id;
    e.remove();
    updateTaskObject(task);
    makeTaskBtn(oldButtonID, task.Status);
    closeTaskModal();
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
}

function taskStatus() {
    if(document.getElementById('low').classList.contains('active-task')) {
        return "LowPriority";
    }
    if(document.getElementById('in').classList.contains('active-task')) {
        return "InProgress";
    }
    if(document.getElementById('comp').classList.contains('active-task')) {
        return "Completed";
    }
}

function makeAndDisplayTasks() {
    makeTaskUI();
    displayProjectsTasks();
}

function loadProjectsOnBoot() {
    if (_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length !== 0) {
        for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
            makeProjectBtn(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i].Name);
        }
    }
}

function makeHomeMenu() {
    let taskDiv = document.getElementById('taskUI');
    clearTaskUI();

    let menu = document.createElement('div');
    menu.classList.add('projectHomeMenu');
    taskDiv.appendChild(menu)

    if (_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length === 0) {
        let noProjects = document.createElement('h1');
        noProjects.textContent = 'NO PROJECTS! MAYBE CREATE ONE?';

        taskDiv.appendChild(noProjects);
    }
    else {
        for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
            let project = _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i];
            makeHomeButtons(project, menu);
        }
    }

}

function makeHomeButtons(project, menu) {
    let homeProject = document.createElement('button');
    homeProject.classList.add('projectHome');
    homeProject.innerText = project.Name;

    homeProject.addEventListener('click', () => {
        makeTaskUI();
        setHomeButtons(project.Name);
        displayProjectsTasks();
    });

    let span = document.createElement('span');
    span.classList.add('taskNumber');
    span.textContent = howManyUncompleteTasks(project);
    homeProject.appendChild(span);

    menu.appendChild(homeProject);
}
function setHomeButtons(name) {
    let wrapper = document.querySelector('.all-projects');
    for(let i = 0; i < wrapper.children.length; i++) {
        if(wrapper.children[i].id === name) {
            setActiveProject(wrapper.children[i]);
        }
    }
}
function howManyUncompleteTasks(project) {
    let counter = 0;
    for(let i = 0; i < project.Tasks.length; i ++) {
        if(project.Tasks[i].Status !== 'Completed') {
            counter++;
        }
    }
    return counter;
}

function initDOM() {
    newProject();
    loadProjectsOnBoot();
    makeHomeMenu();
    homeBtn();
}





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTask": () => (/* binding */ makeTask),
/* harmony export */   "makeProject": () => (/* binding */ makeProject),
/* harmony export */   "taskMaster": () => (/* binding */ taskMaster)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



// WE HAVE DATE-FNS TO IMPORT CERTAIN FUNCTIONS FROM!



// gonna have to put some storage functions in these later
class Taskmaster {
    Projects = [];
    newProject(name) {
        this.Projects.push(name);
    }
    deleteProject(project) {
        for(let i = 0; i < this.Projects.length; i++) {
            if(this.Projects[i] === project) {
                this.Projects.splice(i, 1);
            }
        }
    }
}
let taskMaster = new Taskmaster;

class Project {
    Name = undefined;
    Tasks = [];
    newTask(name) {
        this.Tasks.push(name);
    }
    pushToTaskmaster(name) {
        taskMaster.newProject(name);
    }
    deleteTask(task) {
        for(let i = 0; i < this.Tasks.length; i++) {
            if(this.Tasks[i] === task) {
                this.Tasks.splice(i, 1);
            }
        }
    }
}
function makeProject(name) {
    let project = new Project;
    project.Name = name;
    project.pushToTaskmaster(project);
}


// maybe change low in and completed to a single status that those would be the key to
// add isDueSoon method that checks with date-fns if the task is due in a less than a week

class Task {
    Name = undefined;
    Description = "";
    Status = "LowPriority"
    Date = undefined;

    pushToProject(projectName, task) {
        for(let i = 0; i < taskMaster.Projects.length; i++) {
            if(taskMaster.Projects[i].Name.trim() === projectName.trim()) {
                taskMaster.Projects[i].newTask(task);
            }
        }
    }



}
// status can be LowPriority InProgress Completed
function makeTask(description, name, date, projectName, status) {
    let task = new Task;
    task.Name = name;
    task.Date = date;
    task.Status = status;
    task.Description = description;
    task.pushToProject(projectName, task);
    console.log(task);
}


//loads page 
(0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadTaskMaster)();
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.initDOM)();



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveTaskmaster": () => (/* binding */ saveTaskmaster),
/* harmony export */   "loadTaskMaster": () => (/* binding */ loadTaskMaster)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function saveTaskmaster() {
    localStorage.setItem('taskMaster', JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster));
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster);
}

function loadTaskMaster() {
    let localTaskMaster = JSON.parse(localStorage.getItem('taskMaster'));
    if(localTaskMaster !== null) {
        for(let i = 0; i < localTaskMaster.Projects.length; i++) {
            let Project = localTaskMaster.Projects[i];
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeProject)(Project.Name);
            loadTasks(Project);
        }
    }

}
function loadTasks(Project) {
    if(Project.Tasks.length !== 0) {
        for(let i = 0; i < Project.Tasks.length; i++) {
            let task = Project.Tasks[i];
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeTask)(task.Description, task.Name, task.Date, Project.Name, task.Status);
        }
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFB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Q0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esd0RBQWM7QUFDZCw2Q0FBTztBQUNvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmM7O0FBRXpEO0FBQ0Esc0RBQXNELDhDQUFVO0FBQ2hFLGdCQUFnQiw4Q0FBVTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0EsWUFBWSxtREFBVztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBLFlBQVksZ0RBQVE7QUFDcEI7QUFDQTtBQUNBOzs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fucyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNzMsIDIzMSk7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1vZGFsLWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG4ubW9kYWwtaGVhZGVyLXRpdGxle1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuLmNsb3Nle1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgXFxufVxcblxcbi5jbG9zZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xcbn1cXG5oZWFkZXIgaDF7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG4ubmV3LXRhc2std3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI25ld1Rhc2t7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG4jbmV3VGFzazpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdHMtbWVudSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNzMsIDIzMSk7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG5cXG59XFxuLnByb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5wcm86aG92ZXJ7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTQ2LCAxOTYpO1xcbn1cXG4ucHJvIHNwYW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5hY3RpdmUtcHJvamVjdHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxNDYsIDE5Nik7XFxufVxcbi5wcm86aG92ZXIgc3BhbntcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuI2RlbGV0ZVByb2plY3R7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXG59XFxuXFxuI2RlbGV0ZVByb2plY3Q6aG92ZXJ7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRza3libHVlO1xcbn1cXG4uaG9tZXtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxufVxcbi5ob21lOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLmhvbWU6YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuLmhvbWUtbWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGwtcHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNDMwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gICAgLyogdGhpcyBpcyBqdXN0IGZvciBsb29rcyBub3cgKi9cXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuXFxuXFxuLnByb2plY3QtYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogNDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG4udGFzay1hcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOSwgMjM5KTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyLXB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOSwgMjM5KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2sge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBzdGVlbGJsdWU7XFxufVxcbi50YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggc3RlZWxibHVlO1xcbn1cXG5cXG5cXG4udGl0bGUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWlucHV0e1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5pbnB1dFt0eXBlPXRleHRde1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc3VibWl0LXByb2plY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuI2NyZWF0ZVByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMSwgMTk2LCAyNTUpO1xcbn1cXG4jY2FuY2VsUHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjIzLCAyMjgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHBpbms7XFxufVxcbi5uZXctcHJvamVjdC1idXR0b257XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi5wcm9qZWN0bW9kYWwgaW5wdXRbdHlwZT10ZXh0XXtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbi5wcm9qZWN0LW1vZGFsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG5cXG4ubW9kYWwtcHJvamVjdC1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGJsYWNrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG59XFxuLnRpdGxlLWlucHV0LW1vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jbVRpdGxle1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHN0ZWVsYmx1ZSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBzdGVlbGJsdWUgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbiN0YXNrRGVzY3tcXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zdWJtaXQtdGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY3JlYXRlVGFza3tcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMnM7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuI2NyZWF0ZVRhc2s6aG92ZXJ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG5cXG59XFxuXFxuLmRhdGUtYm94e1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbiNkdWVEYXRle1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuXFxuXFxuLm1vZGFsLXRhc2stY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggYmxhY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG4udGFzay1kZXNje1xcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICBoZWlnaHQ6MzAwcHg7XFxuICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zdGF0dXMtYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuLnN0YXR1cy1idXR0b25zIGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAuNXM7XFxufVxcbi5zdGF0dXMtYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAgMjBweCAhaW1wb3J0YW50O1xcblxcbn1cXG4uYWN0aXZlLXRhc2t7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzOSwgMTg4KSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb25maXJte1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgc3RlZWxibHVlO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmNvbmZpcm06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0SG9tZU1lbnV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5wcm9qZWN0SG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcblxcbn1cXG4udGFza051bWJlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4udGFzay1mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2OCwgMTgxKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRhc2stZm9vdGVyIGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4uZmxleC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuLmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbkBrZXlmcmFtZXMgYm91bmNle1xcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KX1cXG4gICAgdG8ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KX1cXG59XFxuXFxuLmZvb3RlciBpe1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcbi5mb290ZXIgaTpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7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QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLE1BQU0sMEJBQTBCO0lBQ2hDLElBQUksMkJBQTJCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHdDQUF3QztBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTczLCAyMzEpO1xcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tb2RhbC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuLm1vZGFsLWhlYWRlci10aXRsZXtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcbi5jbG9zZXtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIFxcbn1cXG5cXG4uY2xvc2U6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcXG59XFxuaGVhZGVyIGgxe1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuLm5ldy10YXNrLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNuZXdUYXNre1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuI25ld1Rhc2s6aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxuICAgIGNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2plY3RzLW1lbnUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTczLCAyMzEpO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuXFxufVxcbi5wcm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgc3RlZWxibHVlO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ucHJvOmhvdmVye1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYig4NCwgMTQ2LCAxOTYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDE0NiwgMTk2KTtcXG59XFxuLnBybyBzcGFuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uYWN0aXZlLXByb2plY3R7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTQ2LCAxOTYpO1xcbn1cXG4ucHJvOmhvdmVyIHNwYW57XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbiNkZWxldGVQcm9qZWN0e1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxufVxcblxcbiNkZWxldGVQcm9qZWN0OmhvdmVye1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG59XFxuLmhvbWV7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cXG4uaG9tZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5ob21lOmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcbi5ob21lLW1lbnV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWxsLXByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDQzMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jbmV3UHJvamVjdCB7XFxuICAgIC8qIHRoaXMgaXMganVzdCBmb3IgbG9va3Mgbm93ICovXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcblxcblxcbi5wcm9qZWN0LWJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDQwcHg7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuLnRhc2stYXJlYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlci1we1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1heC13aWR0aDogMjI1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggc3RlZWxibHVlO1xcbn1cXG4udGFzazpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHN0ZWVsYmx1ZTtcXG59XFxuXFxuXFxuLnRpdGxlLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1pbnB1dHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XXtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnN1Ym1pdC1wcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbiNjcmVhdGVQcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDEsIDE5NiwgMjU1KTtcXG59XFxuI2NhbmNlbFByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDIyMywgMjI4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRwaW5rO1xcbn1cXG4ubmV3LXByb2plY3QtYnV0dG9ue1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNreWJsdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4ucHJvamVjdG1vZGFsIGlucHV0W3R5cGU9dGV4dF17XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG4ucHJvamVjdC1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG59XFxuXFxuXFxuLm1vZGFsLXByb2plY3QtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTAlIGF1dG87XFxuICAgIGhlaWdodDogNTAwcHg7XFxufVxcbi50aXRsZS1pbnB1dC1tb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI21UaXRsZXtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzdGVlbGJsdWUgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgc3RlZWxibHVlICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4jdGFza0Rlc2N7XFxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc3VibWl0LXRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NyZWF0ZVRhc2t7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcbiNjcmVhdGVUYXNrOmhvdmVye1xcbiAgICB3aWR0aDogMTUwcHg7XFxuXFxufVxcblxcbi5kYXRlLWJveHtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jZHVlRGF0ZXtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcblxcbi5tb2RhbC10YXNrLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGJsYWNrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG59XFxuLnRhc2stZGVzY3tcXG4gICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgaGVpZ2h0OjMwMHB4O1xcbiAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3RhdHVzLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcbi5zdGF0dXMtYnV0dG9ucyBidXR0b257XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgLjVzO1xcbn1cXG4uc3RhdHVzLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogIDIwcHggIWltcG9ydGFudDtcXG5cXG59XFxuLmFjdGl2ZS10YXNre1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzksIDE4OCkgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29uZmlybXtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxufVxcblxcbi5jb25maXJtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdEhvbWVNZW51e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG4ucHJvamVjdEhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG5cXG59XFxuLnRhc2tOdW1iZXIge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLnRhc2stZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjgsIDE4MSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50YXNrLWZvb3RlciBidXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmZsZXgtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMSAwIGF1dG87XFxufVxcbi5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZXtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCl9XFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCl9XFxufVxcblxcbi5mb290ZXIgaXtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4uZm9vdGVyIGk6aG92ZXIge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaWQgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn0gZnJvbSBcIi4vaW5kZXhcIlxuaW1wb3J0IHtzYXZlVGFza21hc3Rlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuZnVuY3Rpb24gaG9tZUJ0bigpIHtcbiAgICBsZXQgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnRuJyk7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VIb21lTWVudSk7XG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XG4gICAgbGV0IHByb2plY3Rab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rab25lJyk7XG4gICAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJpbnB1dFwiIGNsYXNzPVwidGl0bGUtaW5wdXRcIiBhY3Rpb249XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1pbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwVGl0bGVcIiBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhlIHRpdGxlIG9mIHRoZSBQcm9qZWN0P1wiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjQwXCIgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC1wcm9qZWN0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNyZWF0ZVByb2plY3RcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNSRUFURSBQUk9KRUNUPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbFByb2plY3RcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNBTkNFTDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+YDtcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG5ld1Byb2plY3RCb3hVSShwcm9qZWN0Wm9uZSwgbmV3QnRuKTtcbiAgICAgICAgbGV0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUJ0bik7XG4gICAgICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFByb2plY3QpO1xuICAgIH0pO1xuXG59XG5mdW5jdGlvbiBuZXdQcm9qZWN0Qm94VUkocHJvamVjdFpvbmUsIG5ld0J0bikge1xuICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUHJvamVjdCcpO1xuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFpvbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb2plY3RCdG4obmFtZSl7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3BybycpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgcHJvamVjdC5pbm5lclRleHQgPSBuYW1lO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQobWFrZURlbGV0ZVByb2plY3RCdXR0b24ocHJvamVjdCkpO1xuICAgIFxuXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFrZVRhc2tVSSgpO1xuICAgICAgICBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHNUYXNrcygpO1xuICAgIH0pO1xuXG59XG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXByb2plY3QnKSkge1xuICAgICAgICAgICAgd3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKTtcbn1cbmZ1bmN0aW9uIHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3cmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHdyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtcHJvamVjdCcpKSB7XG5cbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSB3cmFwcGVyLmNoaWxkcmVuW2ldLmlkO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHJldHVyblByb2plY3QoKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lLnRyaW0oKSA9PT0gcmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSkge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSB0YXNrTWFzdGVyLlByb2plY3RzW2ldO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZXR1cm5Qcm9qZWN0VG9EZWxldGUocHJvamVjdCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZS50cmltKCkgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZURlbGV0ZVByb2plY3RCdXR0b24ocHJvamVjdCkge1xuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlUHJvamVjdCcpO1xuICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAnWCc7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QsIGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWxldGVCdG47XG59XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QsIGUpIHtcbiAgICB0YXNrTWFzdGVyLmRlbGV0ZVByb2plY3QocmV0dXJuUHJvamVjdFRvRGVsZXRlKHByb2plY3QpKTtcbiAgICBwcm9qZWN0LnJlbW92ZSgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2xlYXJUYXNrVUkoKTtcbiAgICBzYXZlVGFza21hc3RlcigpO1xuICAgIGlmKHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtYWtlQW5kRGlzcGxheVRhc2tzKCk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gICAgbGV0IHByb2plY3Rab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rab25lJyk7XG4gICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BUaXRsZScpO1xuICAgIFxuICAgIGlmKHByb2plY3ROYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiTmFtZSBDYW4ndCBCZSBCbGFuayFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgQWxyZWFkeSBFeGlzdHMhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ha2VQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgbWFrZVByb2plY3RCdG4ocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBzYXZlVGFza21hc3RlcigpO1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcbiAgICB9XG59IFxuXG5mdW5jdGlvbiBtYWtlVGFza1VJKCkge1xuICAgIGNsZWFyVGFza1VJKCk7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1VJJyk7XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz1cInByb2plY3QtYm9hcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicDFcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmxvdy1wcmlvcml0eTwvcD5cbiAgICAgICAgPGRpdiBpZD1cImxvdy1wcmlvXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicDJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmluLXByb2dyZXNzPC9wPlxuICAgICAgICA8ZGl2IGlkID0gXCJpbi1wcm9cIiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwM1wiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+Y29tcGxldGVkPC9wPlxuICAgICAgICA8ZGl2IGlkPVwiY29tcGxldGVcIiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwNFwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+ZHVlLXNvb248L3A+XG4gICAgICAgIDxkaXYgaWQ9XCJkdWUtc29vblwiIGNsYXNzPVwidGFzay1hcmVhXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuXG4vLyBwcm9iYWJseSBwdXQgYSBmdW5jdGlvbiBoZXJlIHRoYXQgbG9hZHMgaW4gZWFjaCBpbmRpdmlkdWFsIHRhc2sgdGhhdHMgaW4gdGhlIHByb2plY3RcblxubGV0IHRhc2tCdG5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXdyYXBwZXInKTtcbmxldCB0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2snKTtcbiAgICB0YXNrQnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcblxuICAgIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrQnRuTW9kYWwpO1xuICAgIHRhc2tCdG5XcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tCdG4pO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdG5Nb2RhbCgpIHtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIm1vZGFsSURcIiBjbGFzcz1cInByb2plY3QtbW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcHJvamVjdC1jb250ZW50XCI+XG5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsLWhlYWRlci10aXRsZVwiPlRhc2sgSW5mbzwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNsb3NlTW9kYWxcIiBjbGFzcz1cImNsb3NlXCI+WDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGZvcm0gaWQ9XCJpbnB1dFwiIGNsYXNzPVwidGl0bGUtaW5wdXQtbW9kYWxcIiBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvcm0taW5wdXQtbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1UaXRsZVwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgdGl0bGUgb2YgdGhlIHRhc2s/XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiNDBcIiA+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGFza0Rlc2NcIiBwbGFjZWhvbGRlcj1cIlRhc2sgZGVzY3JpcHRpb25cIiByb3dzPVwiMTVcIiBtYXhsZW5ndGg9XCIyMDBcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXRhc2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlLURhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgbmFtZT1cImR1ZS1kYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjcmVhdGVUYXNrXCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DUkVBVEUgVEFTSzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICAgIGRhdGUudmFsdWUgPScyMDIyLTEyLTMxJztcbiAgICBUYXNrQnRuTW9kYWxMb2dpYygpO1xufVxuZnVuY3Rpb24gVGFza0J0bk1vZGFsTG9naWMoKSB7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWwnKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcbiAgICBcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVRhc2snKTtcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRUYXNrKTtcbn1cbmZ1bmN0aW9uIGNsb3NlVGFza01vZGFsKCkge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xufVxuZnVuY3Rpb24gY2xlYXJUYXNrVUkoKSB7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1VJJyk7XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgbGV0IHRhc2tCdG5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXdyYXBwZXInKTtcbiAgICB0YXNrQnRuV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbn1cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjJykudmFsdWU7XG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21UaXRsZScpO1xuICAgIGlmKHRhc2tOYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiVGl0bGUgQ2FuJ3QgQmUgQmxhbmshXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkpO1xuICAgIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCB0YXNrTmFtZS52YWx1ZSwgZGF0ZS52YWx1ZSwgcmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSwgXCJMb3dQcmlvcml0eVwiKTtcbiAgICBzYXZlVGFza21hc3RlcigpO1xuICAgIG1ha2VUYXNrQnRuKHRhc2tOYW1lLnZhbHVlLCBcIkxvd1ByaW9yaXR5XCIpO1xuICAgIGNsb3NlVGFza01vZGFsKCk7XG59XG5mdW5jdGlvbiByZXR1cm5DdXJyVGFzayhwcm9qZWN0LCBuYW1lKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QuVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRhc2sgPSBwcm9qZWN0LlRhc2tzW2ldO1xuICAgICAgICBpZih0YXNrLk5hbWUudHJpbSgpID09PSBuYW1lLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlVGFza0J0bihuYW1lLCBzdGF0dXMpIHtcblxuICAgIGlmKHN0YXR1cyA9PT0gXCJMb3dQcmlvcml0eVwiKSB7XG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3ctcHJpbycpO1xuICAgIH1cbiAgICBlbHNlIGlmKHN0YXR1cyA9PT0gXCJJblByb2dyZXNzXCIpe1xuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW4tcHJvJyk7XG4gICAgfVxuICAgIGVsc2UgaWYoc3RhdHVzID09PSBcIkNvbXBsZXRlZFwiKXtcbiAgICAgICAgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRlJyk7XG4gICAgfVxuICAgIGVsc2UgaWYoc3RhdHVzID09PSA0KXtcbiAgICAgICAgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1zb29uJyk7XG4gICAgfVxuXG5cbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFzay50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVRhc2tJbmZvKHRhc2spO1xuICAgIH0pO1xuICAgIHN0YXR1cy5hcHBlbmRDaGlsZCh0YXNrKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzVGFza3MoKSB7ICAgIFxuICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHJldHVyblByb2plY3QoKTtcbiAgICAgICAgaWYoYWN0aXZlUHJvamVjdC5UYXNrcy5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGFjdGl2ZVByb2plY3QuVGFza3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFzayA9IGFjdGl2ZVByb2plY3QuVGFza3Nbal07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFzayk7XG4gICAgICAgICAgICBtYWtlVGFza0J0bihjdXJyZW50VGFzay5OYW1lLCBjdXJyZW50VGFzay5TdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgIC8vIFBVVCBUSEUgQ0hFQ0sgRk9SIERVRSBTT09OIEZVTkNUSU9OIEhFUkUhIVxuICAgICAgICB9XG4gICAgfVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza0luZm8oZSkge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9XG4gICAgYDxkaXYgaWQ9XCJtb2RhbElEXCIgY2xhc3M9XCJwcm9qZWN0LW1vZGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRhc2stY29udGVudFwiPlxuXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8aDIgaWQ9XCJ0YXNrVGl0bGVcIiBjbGFzcz1cIm1vZGFsLWhlYWRlci10aXRsZVwiPjwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNsb3NlTW9kYWxcIiBjbGFzcz1cImNsb3NlXCI+WDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGZvcm0gaWQ9XCJpbnB1dFwiIGNsYXNzPVwidGl0bGUtaW5wdXQtbW9kYWxcIiBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvcm0taW5wdXQtbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stZGVzY1wiIGlkPVwidGFza0Rlc2NcIj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtdGFza1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUtRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgbmFtZT1cImR1ZS1kYXRlXCI+IDwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3RhdEJ0blwiIGNsYXNzPVwic3RhdHVzLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibG93XCI+TG93IFByaW9yaXR5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImluXCI+SW4tUHJvZ3Jlc3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY29tcFwiPkNvbXBsZXRlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNvbmZpcm1DaGFuZ2VzXCIgY2xhc3M9XCJjb25maXJtXCI+Q09ORklSTSBDSEFOR0VTPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwidGFzay1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVsZXRlVGFza1wiPkRFTEVURSBUQVNLITwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbjwvZGl2PiBgO1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tNb2RhbCk7XG5cbiAgICBcblxuICAgIGxldCBwYXJlbnRQcm9qZWN0ID0gcmV0dXJuUHJvamVjdCgpO1xuXG4gICAgbGV0IHRhc2sgPSByZXR1cm5DdXJyVGFzayhwYXJlbnRQcm9qZWN0LCBlLmlkKTtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLk5hbWU7XG5cbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzYycpO1xuICAgIGRlc2MuaW5uZXJUZXh0ID0gdGFzay5EZXNjcmlwdGlvbjtcbiAgICBpZihkZXNjLmlubmVyVGV4dCA9PT0gXCJcIikge1xuICAgICAgICBkZXNjLmlubmVyVGV4dCA9IFwiOl1cIjtcbiAgICB9XG5cbiAgICBsZXQgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICBkdWUudmFsdWUgPSB0YXNrLkRhdGU7XG5cbiAgICBsZXQgc3RhdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0QnRuJyk7XG4gICAgXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdEJ0bi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdGF0QnRuLmNoaWxkcmVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGlnaGxpZ2h0U3RhdHVzKHN0YXRCdG4sIHN0YXRCdG4uY2hpbGRyZW5baV0pO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgaWYodGFzay5TdGF0dXMgPT09IFwiTG93UHJpb3JpdHlcIikge1xuICAgICAgICAgICAgc3RhdEJ0bi5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFzay5TdGF0dXMgPT09IFwiSW5Qcm9ncmVzc1wiKSB7XG4gICAgICAgICAgICBzdGF0QnRuLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXNrLlN0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIikge1xuICAgICAgICAgICAgc3RhdEJ0bi5jaGlsZHJlblsyXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVUYXNrJyk7XG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGVUYXNrKHBhcmVudFByb2plY3QsIHRhc2ssIGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQ2hhbmdlcycpO1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdXBkYXRlVGFzayh0YXNrLCBlKTtcbiAgICB9KTtcbiAgICBcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0U3RhdHVzKHN0YXR1c1dyYXBwZXIsIHN0YXRCdG4pIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdHVzV3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihzdGF0dXNXcmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhc2snKSkge1xuICAgICAgICAgICAgc3RhdHVzV3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFzaycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaywgZSkge1xuICAgIGUucmVtb3ZlKCk7XG4gICAgY2xvc2VUYXNrTW9kYWwoKTtcbiAgICBwcm9qZWN0LmRlbGV0ZVRhc2sodGFzayk7XG4gICAgc2F2ZVRhc2ttYXN0ZXIoKTtcbn1cblxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrT2JqZWN0KHRhc2spIHtcbiAgICBsZXQgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICB0YXNrLkRhdGUgPSBkdWUudmFsdWU7XG5cbiAgICB0YXNrLlN0YXR1cyA9IHRhc2tTdGF0dXMoKTtcblxufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrKHRhc2ssIGUpIHtcbiAgICBsZXQgb2xkQnV0dG9uSUQgPSBlLmlkO1xuICAgIGUucmVtb3ZlKCk7XG4gICAgdXBkYXRlVGFza09iamVjdCh0YXNrKTtcbiAgICBtYWtlVGFza0J0bihvbGRCdXR0b25JRCwgdGFzay5TdGF0dXMpO1xuICAgIGNsb3NlVGFza01vZGFsKCk7XG4gICAgc2F2ZVRhc2ttYXN0ZXIoKTtcbn1cblxuZnVuY3Rpb24gdGFza1N0YXR1cygpIHtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG93JykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFzaycpKSB7XG4gICAgICAgIHJldHVybiBcIkxvd1ByaW9yaXR5XCI7XG4gICAgfVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbicpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhc2snKSkge1xuICAgICAgICByZXR1cm4gXCJJblByb2dyZXNzXCI7XG4gICAgfVxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFzaycpKSB7XG4gICAgICAgIHJldHVybiBcIkNvbXBsZXRlZFwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFrZUFuZERpc3BsYXlUYXNrcygpIHtcbiAgICBtYWtlVGFza1VJKCk7XG4gICAgZGlzcGxheVByb2plY3RzVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzT25Cb290KCkge1xuICAgIGlmICh0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWFrZVByb2plY3RCdG4odGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFrZUhvbWVNZW51KCkge1xuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tVSScpO1xuICAgIGNsZWFyVGFza1VJKCk7XG5cbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhvbWVNZW51Jyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChtZW51KVxuXG4gICAgaWYgKHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxldCBub1Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbm9Qcm9qZWN0cy50ZXh0Q29udGVudCA9ICdOTyBQUk9KRUNUUyEgTUFZQkUgQ1JFQVRFIE9ORT8nO1xuXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQobm9Qcm9qZWN0cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSB0YXNrTWFzdGVyLlByb2plY3RzW2ldO1xuICAgICAgICAgICAgbWFrZUhvbWVCdXR0b25zKHByb2plY3QsIG1lbnUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIG1ha2VIb21lQnV0dG9ucyhwcm9qZWN0LCBtZW51KSB7XG4gICAgbGV0IGhvbWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZVByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhvbWUnKTtcbiAgICBob21lUHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0Lk5hbWU7XG5cbiAgICBob21lUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFrZVRhc2tVSSgpO1xuICAgICAgICBzZXRIb21lQnV0dG9ucyhwcm9qZWN0Lk5hbWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHNUYXNrcygpO1xuICAgIH0pO1xuXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrTnVtYmVyJyk7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGhvd01hbnlVbmNvbXBsZXRlVGFza3MocHJvamVjdCk7XG4gICAgaG9tZVByb2plY3QuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGhvbWVQcm9qZWN0KTtcbn1cbmZ1bmN0aW9uIHNldEhvbWVCdXR0b25zKG5hbWUpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmlkID09PSBuYW1lKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVQcm9qZWN0KHdyYXBwZXIuY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaG93TWFueVVuY29tcGxldGVUYXNrcyhwcm9qZWN0KSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LlRhc2tzLmxlbmd0aDsgaSArKykge1xuICAgICAgICBpZihwcm9qZWN0LlRhc2tzW2ldLlN0YXR1cyAhPT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY291bnRlcjtcbn1cblxuZnVuY3Rpb24gaW5pdERPTSgpIHtcbiAgICBuZXdQcm9qZWN0KCk7XG4gICAgbG9hZFByb2plY3RzT25Cb290KCk7XG4gICAgbWFrZUhvbWVNZW51KCk7XG4gICAgaG9tZUJ0bigpO1xufVxuXG5leHBvcnQge2luaXRET019O1xuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aW5pdERPTX0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQge2xvYWRUYXNrTWFzdGVyLCBzYXZlVGFza21hc3Rlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuLy8gV0UgSEFWRSBEQVRFLUZOUyBUTyBJTVBPUlQgQ0VSVEFJTiBGVU5DVElPTlMgRlJPTSFcblxuXG5cbi8vIGdvbm5hIGhhdmUgdG8gcHV0IHNvbWUgc3RvcmFnZSBmdW5jdGlvbnMgaW4gdGhlc2UgbGF0ZXJcbmNsYXNzIFRhc2ttYXN0ZXIge1xuICAgIFByb2plY3RzID0gW107XG4gICAgbmV3UHJvamVjdChuYW1lKSB7XG4gICAgICAgIHRoaXMuUHJvamVjdHMucHVzaChuYW1lKTtcbiAgICB9XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLlByb2plY3RzW2ldID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Qcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5sZXQgdGFza01hc3RlciA9IG5ldyBUYXNrbWFzdGVyO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBOYW1lID0gdW5kZWZpbmVkO1xuICAgIFRhc2tzID0gW107XG4gICAgbmV3VGFzayhuYW1lKSB7XG4gICAgICAgIHRoaXMuVGFza3MucHVzaChuYW1lKTtcbiAgICB9XG4gICAgcHVzaFRvVGFza21hc3RlcihuYW1lKSB7XG4gICAgICAgIHRhc2tNYXN0ZXIubmV3UHJvamVjdChuYW1lKTtcbiAgICB9XG4gICAgZGVsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLlRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0aGlzLlRhc2tzW2ldID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdDtcbiAgICBwcm9qZWN0Lk5hbWUgPSBuYW1lO1xuICAgIHByb2plY3QucHVzaFRvVGFza21hc3Rlcihwcm9qZWN0KTtcbn1cblxuXG4vLyBtYXliZSBjaGFuZ2UgbG93IGluIGFuZCBjb21wbGV0ZWQgdG8gYSBzaW5nbGUgc3RhdHVzIHRoYXQgdGhvc2Ugd291bGQgYmUgdGhlIGtleSB0b1xuLy8gYWRkIGlzRHVlU29vbiBtZXRob2QgdGhhdCBjaGVja3Mgd2l0aCBkYXRlLWZucyBpZiB0aGUgdGFzayBpcyBkdWUgaW4gYSBsZXNzIHRoYW4gYSB3ZWVrXG5cbmNsYXNzIFRhc2sge1xuICAgIE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgRGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIFN0YXR1cyA9IFwiTG93UHJpb3JpdHlcIlxuICAgIERhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICBwdXNoVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUudHJpbSgpID09PSBwcm9qZWN0TmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrTWFzdGVyLlByb2plY3RzW2ldLm5ld1Rhc2sodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG4vLyBzdGF0dXMgY2FuIGJlIExvd1ByaW9yaXR5IEluUHJvZ3Jlc3MgQ29tcGxldGVkXG5mdW5jdGlvbiBtYWtlVGFzayhkZXNjcmlwdGlvbiwgbmFtZSwgZGF0ZSwgcHJvamVjdE5hbWUsIHN0YXR1cykge1xuICAgIGxldCB0YXNrID0gbmV3IFRhc2s7XG4gICAgdGFzay5OYW1lID0gbmFtZTtcbiAgICB0YXNrLkRhdGUgPSBkYXRlO1xuICAgIHRhc2suU3RhdHVzID0gc3RhdHVzO1xuICAgIHRhc2suRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0YXNrLnB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2spO1xufVxuXG5cbi8vbG9hZHMgcGFnZSBcbmxvYWRUYXNrTWFzdGVyKCk7XG5pbml0RE9NKCk7XG5leHBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn07XG4iLCJpbXBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn0gZnJvbSBcIi4vaW5kZXhcIlxuXG5mdW5jdGlvbiBzYXZlVGFza21hc3RlcigpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza01hc3RlcicsIEpTT04uc3RyaW5naWZ5KHRhc2tNYXN0ZXIpKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tNYXN0ZXIoKSB7XG4gICAgbGV0IGxvY2FsVGFza01hc3RlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tNYXN0ZXInKSk7XG4gICAgaWYobG9jYWxUYXNrTWFzdGVyICE9PSBudWxsKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBQcm9qZWN0ID0gbG9jYWxUYXNrTWFzdGVyLlByb2plY3RzW2ldO1xuICAgICAgICAgICAgbWFrZVByb2plY3QoUHJvamVjdC5OYW1lKTtcbiAgICAgICAgICAgIGxvYWRUYXNrcyhQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuZnVuY3Rpb24gbG9hZFRhc2tzKFByb2plY3QpIHtcbiAgICBpZihQcm9qZWN0LlRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5UYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBQcm9qZWN0LlRhc2tzW2ldO1xuICAgICAgICAgICAgbWFrZVRhc2sodGFzay5EZXNjcmlwdGlvbiwgdGFzay5OYW1lLCB0YXNrLkRhdGUsIFByb2plY3QuTmFtZSwgdGFzay5TdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHtzYXZlVGFza21hc3RlciwgbG9hZFRhc2tNYXN0ZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==