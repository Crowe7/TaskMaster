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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/storage.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVE7QUFDWixJQUFJLHdEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw4REFBMEI7QUFDbEMsdUJBQXVCLElBQUksOERBQTBCLEVBQUU7QUFDdkQsMkJBQTJCLHVEQUFtQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDhEQUEwQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLDhEQUEwQixFQUFFO0FBQ3ZELDBCQUEwQix1REFBbUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Zkk7QUFDUztBQUMyQjtBQUN6RDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSx3REFBYztBQUNkLDZDQUFPO0FBQ29DOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGYzs7QUFFekQ7QUFDQSxzREFBc0QsOENBQVU7QUFDaEUsZ0JBQWdCLDhDQUFVO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQ0FBcUM7QUFDNUQ7QUFDQSxZQUFZLG1EQUFXO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0EsWUFBWSxnREFBUTtBQUNwQjtBQUNBO0FBQ0E7Ozs7Ozs7VUN6QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDE3MywgMjMxKTtcXG59XFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubW9kYWwtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcbi5tb2RhbC1oZWFkZXItdGl0bGV7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG4uY2xvc2V7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBcXG59XFxuXFxuLmNsb3NlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XFxufVxcbmhlYWRlciBoMXtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcbi5uZXctdGFzay13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jbmV3VGFza3tcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcbiNuZXdUYXNrOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBjb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0cy1tZW51IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDE3MywgMjMxKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgc3RlZWxibHVlO1xcblxcbn1cXG4ucHJve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLnBybzpob3ZlcntcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxNDYsIDE5Nik7XFxufVxcbi5wcm8gc3BhbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmFjdGl2ZS1wcm9qZWN0e1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYig4NCwgMTQ2LCAxOTYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDE0NiwgMTk2KTtcXG59XFxuLnBybzpob3ZlciBzcGFue1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4jZGVsZXRlUHJvamVjdHtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4NCwgMTQ2LCAxOTYpO1xcbn1cXG5cXG4jZGVsZXRlUHJvamVjdDpob3ZlcntcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxufVxcbi5ob21le1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuLmhvbWU6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4uaG9tZTphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbn1cXG4uaG9tZS1tZW51e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFsbC1wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI25ld1Byb2plY3Qge1xcbiAgICAvKiB0aGlzIGlzIGp1c3QgZm9yIGxvb2tzIG5vdyAqL1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG5cXG5cXG4ucHJvamVjdC1ib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiA0MHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcbi50YXNrLWFyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM5LCAyMzkpO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXItcHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM5LCAyMzkpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4udGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXgtd2lkdGg6IDIyNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHN0ZWVsYmx1ZTtcXG59XFxuLnRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBzdGVlbGJsdWU7XFxufVxcblxcblxcbi50aXRsZS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0taW5wdXR7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcbmlucHV0W3R5cGU9dGV4dF17XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zdWJtaXQtcHJvamVjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4jY3JlYXRlUHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAxLCAxOTYsIDI1NSk7XFxufVxcbiNjYW5jZWxQcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyMjMsIDIyOCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0cGluaztcXG59XFxuLm5ldy1wcm9qZWN0LWJ1dHRvbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLnByb2plY3Rtb2RhbCBpbnB1dFt0eXBlPXRleHRde1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuLnByb2plY3QtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcblxcbi5tb2RhbC1wcm9qZWN0LWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggYmxhY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG4udGl0bGUtaW5wdXQtbW9kYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNtVGl0bGV7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc3RlZWxibHVlICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHN0ZWVsYmx1ZSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcXG59XFxuI3Rhc2tEZXNje1xcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnN1Ym1pdC10YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjcmVhdGVUYXNre1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4jY3JlYXRlVGFzazpob3ZlcntcXG4gICAgd2lkdGg6IDE1MHB4O1xcblxcbn1cXG5cXG4uZGF0ZS1ib3h7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuI2R1ZURhdGV7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5cXG4ubW9kYWwtdGFzay1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTAlIGF1dG87XFxuICAgIGhlaWdodDogNTAwcHg7XFxufVxcbi50YXNrLWRlc2N7XFxuICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgIGhlaWdodDozMDBweDtcXG4gICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN0YXR1cy1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG4uc3RhdHVzLWJ1dHRvbnMgYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIC41cztcXG59XFxuLnN0YXR1cy1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6ICAyMHB4ICFpbXBvcnRhbnQ7XFxuXFxufVxcbi5hY3RpdmUtdGFza3tcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM5LCAxODgpICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbmZpcm17XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgc3RlZWxibHVlO1xcbn1cXG5cXG4uY29uZmlybTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RIb21lTWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLnByb2plY3RIb21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuXFxufVxcbi50YXNrTnVtYmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcbi50YXNrLWZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY4LCAxODEpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGFzay1mb290ZXIgYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250ZW50LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5mbGV4LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG4uZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuQGtleWZyYW1lcyBib3VuY2V7XFxuICAgIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpfVxcbiAgICB0byB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpfVxcbn1cXG5cXG4uZm9vdGVyIGl7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLmZvb3RlciBpOmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBhbmltYXRpb246IGJvdW5jZSAuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsYUFB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QzlCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksTUFBTSwwQkFBMEI7SUFDaEMsSUFBSSwyQkFBMkI7QUFDbkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNzMsIDIzMSk7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1vZGFsLWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG4ubW9kYWwtaGVhZGVyLXRpdGxle1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuLmNsb3Nle1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgXFxufVxcblxcbi5jbG9zZTpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xcbn1cXG5oZWFkZXIgaDF7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG4ubmV3LXRhc2std3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI25ld1Rhc2t7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG4jbmV3VGFzazpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG4gICAgY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdHMtbWVudSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNzMsIDIzMSk7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG5cXG59XFxuLnByb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5wcm86aG92ZXJ7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTQ2LCAxOTYpO1xcbn1cXG4ucHJvIHNwYW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5hY3RpdmUtcHJvamVjdHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxNDYsIDE5Nik7XFxufVxcbi5wcm86aG92ZXIgc3BhbntcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuI2RlbGV0ZVByb2plY3R7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXG59XFxuXFxuI2RlbGV0ZVByb2plY3Q6aG92ZXJ7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRza3libHVlO1xcbn1cXG4uaG9tZXtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxufVxcbi5ob21lOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLmhvbWU6YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuLmhvbWUtbWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGwtcHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNDMwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gICAgLyogdGhpcyBpcyBqdXN0IGZvciBsb29rcyBub3cgKi9cXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuXFxuXFxuLnByb2plY3QtYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogNDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG4udGFzay1hcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOSwgMjM5KTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyLXB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOSwgMjM5KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2sge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBzdGVlbGJsdWU7XFxufVxcbi50YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggc3RlZWxibHVlO1xcbn1cXG5cXG5cXG4udGl0bGUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWlucHV0e1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5pbnB1dFt0eXBlPXRleHRde1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc3VibWl0LXByb2plY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuI2NyZWF0ZVByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMSwgMTk2LCAyNTUpO1xcbn1cXG4jY2FuY2VsUHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjIzLCAyMjgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHBpbms7XFxufVxcbi5uZXctcHJvamVjdC1idXR0b257XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi5wcm9qZWN0bW9kYWwgaW5wdXRbdHlwZT10ZXh0XXtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbi5wcm9qZWN0LW1vZGFsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG5cXG4ubW9kYWwtcHJvamVjdC1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGJsYWNrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG59XFxuLnRpdGxlLWlucHV0LW1vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jbVRpdGxle1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHN0ZWVsYmx1ZSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBzdGVlbGJsdWUgIWltcG9ydGFudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbiN0YXNrRGVzY3tcXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zdWJtaXQtdGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY3JlYXRlVGFza3tcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMnM7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuI2NyZWF0ZVRhc2s6aG92ZXJ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG5cXG59XFxuXFxuLmRhdGUtYm94e1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbiNkdWVEYXRle1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuXFxuXFxuLm1vZGFsLXRhc2stY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggYmxhY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG4udGFzay1kZXNje1xcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICBoZWlnaHQ6MzAwcHg7XFxuICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zdGF0dXMtYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuLnN0YXR1cy1idXR0b25zIGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAuNXM7XFxufVxcbi5zdGF0dXMtYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAgMjBweCAhaW1wb3J0YW50O1xcblxcbn1cXG4uYWN0aXZlLXRhc2t7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzOSwgMTg4KSAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb25maXJte1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgc3RlZWxibHVlO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmNvbmZpcm06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0SG9tZU1lbnV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5wcm9qZWN0SG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcblxcbn1cXG4udGFza051bWJlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4udGFzay1mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2OCwgMTgxKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRhc2stZm9vdGVyIGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4uZmxleC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuLmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbkBrZXlmcmFtZXMgYm91bmNle1xcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KX1cXG4gICAgdG8ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KX1cXG59XFxuXFxuLmZvb3RlciBpe1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcbi5mb290ZXIgaTpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBpZCB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcbmltcG9ydCB7bWFrZVRhc2ssIG1ha2VQcm9qZWN0LCB0YXNrTWFzdGVyfSBmcm9tIFwiLi9pbmRleFwiXG5pbXBvcnQge3NhdmVUYXNrbWFzdGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5mdW5jdGlvbiBob21lQnRuKCkge1xuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUhvbWVNZW51KTtcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcbiAgICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcbiAgICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBUaXRsZVwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgdGl0bGUgb2YgdGhlIFByb2plY3Q/XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiNDBcIiA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXByb2plY3RcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY3JlYXRlUHJvamVjdFwiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q1JFQVRFIFBST0pFQ1Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsUHJvamVjdFwiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q0FOQ0VMPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5gO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pO1xuICAgICAgICBsZXQgY3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3QnKTtcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlQnRuKTtcbiAgICAgICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UHJvamVjdCk7XG4gICAgfSk7XG5cbn1cbmZ1bmN0aW9uIG5ld1Byb2plY3RCb3hVSShwcm9qZWN0Wm9uZSwgbmV3QnRuKSB7XG4gICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxQcm9qZWN0Jyk7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdEJ0bihuYW1lKXtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBwcm9qZWN0LmlubmVyVGV4dCA9IG5hbWU7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChtYWtlRGVsZXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSk7XG4gICAgXG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWtlVGFza1VJKCk7XG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0c1Rhc2tzKCk7XG4gICAgfSk7XG5cbn1cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3cmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHdyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtcHJvamVjdCcpKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xufVxuZnVuY3Rpb24gcmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYod3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1wcm9qZWN0JykpIHtcblxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHdyYXBwZXIuY2hpbGRyZW5baV0uaWQ7XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdCgpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUudHJpbSgpID09PSByZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpKSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHJldHVyblByb2plY3RUb0RlbGV0ZShwcm9qZWN0KSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lLnRyaW0oKSA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSB0YXNrTWFzdGVyLlByb2plY3RzW2ldO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlRGVsZXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSB7XG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVQcm9qZWN0Jyk7XG4gICAgZGVsZXRlQnRuLmlubmVyVGV4dCA9ICdYJztcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCwgZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlbGV0ZUJ0bjtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCwgZSkge1xuICAgIHRhc2tNYXN0ZXIuZGVsZXRlUHJvamVjdChyZXR1cm5Qcm9qZWN0VG9EZWxldGUocHJvamVjdCkpO1xuICAgIHByb2plY3QucmVtb3ZlKCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbGVhclRhc2tVSSgpO1xuICAgIHNhdmVUYXNrbWFzdGVyKCk7XG4gICAgaWYocmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1ha2VBbmREaXNwbGF5VGFza3MoKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCgpIHtcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcbiAgICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncFRpdGxlJyk7XG4gICAgXG4gICAgaWYocHJvamVjdE5hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJOYW1lIENhbid0IEJlIEJsYW5rIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHByb2plY3ROYW1lLnZhbHVlID09PSB0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnUHJvamVjdCBBbHJlYWR5IEV4aXN0cyEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFrZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBtYWtlUHJvamVjdEJ0bihwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIHNhdmVUYXNrbWFzdGVyKCk7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tNYXN0ZXIpO1xuICAgIH1cbn0gXG5cbmZ1bmN0aW9uIG1ha2VUYXNrVUkoKSB7XG4gICAgY2xlYXJUYXNrVUkoKTtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVUknKTtcbiAgICB0YXNrRGl2LmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPVwicHJvamVjdC1ib2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwMVwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+bG93LXByaW9yaXR5PC9wPlxuICAgICAgICA8ZGl2IGlkPVwibG93LXByaW9cIiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwMlwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+aW4tcHJvZ3Jlc3M8L3A+XG4gICAgICAgIDxkaXYgaWQgPSBcImluLXByb1wiIGNsYXNzPVwidGFzay1hcmVhXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInAzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5jb21wbGV0ZWQ8L3A+XG4gICAgICAgIDxkaXYgaWQ9XCJjb21wbGV0ZVwiIGNsYXNzPVwidGFzay1hcmVhXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInA0XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5kdWUtc29vbjwvcD5cbiAgICAgICAgPGRpdiBpZD1cImR1ZS1zb29uXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG5cbi8vIHByb2JhYmx5IHB1dCBhIGZ1bmN0aW9uIGhlcmUgdGhhdCBsb2FkcyBpbiBlYWNoIGluZGl2aWR1YWwgdGFzayB0aGF0cyBpbiB0aGUgcHJvamVjdFxuXG5sZXQgdGFza0J0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2std3JhcHBlcicpO1xubGV0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFzaycpO1xuICAgIHRhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuXG4gICAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRhc2tCdG5Nb2RhbCk7XG4gICAgdGFza0J0bldyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0J0bik7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFza0J0bk1vZGFsKCkge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwibW9kYWxJRFwiIGNsYXNzPVwicHJvamVjdC1tb2RhbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1wcm9qZWN0LWNvbnRlbnRcIj5cblxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+VGFzayBJbmZvPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2VNb2RhbFwiIGNsYXNzPVwiY2xvc2VcIj5YPC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dC1tb2RhbFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1pbnB1dC1tb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibVRpdGxlXCIgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgdGFzaz9cIiByZXF1aXJlZCBtYXhsZW5ndGg9XCI0MFwiID5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0YXNrRGVzY1wiIHBsYWNlaG9sZGVyPVwiVGFzayBkZXNjcmlwdGlvblwiIHJvd3M9XCIxNVwiIG1heGxlbmd0aD1cIjIwMFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtdGFza1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUtRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNyZWF0ZVRhc2tcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNSRUFURSBUQVNLPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgZGF0ZS52YWx1ZSA9JzIwMjItMTItMzEnO1xuICAgIFRhc2tCdG5Nb2RhbExvZ2ljKCk7XG59XG5mdW5jdGlvbiBUYXNrQnRuTW9kYWxMb2dpYygpIHtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xuICAgIFxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlVGFzaycpO1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2spO1xufVxuZnVuY3Rpb24gY2xvc2VUYXNrTW9kYWwoKSB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7XG59XG5mdW5jdGlvbiBjbGVhclRhc2tVSSgpIHtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVUknKTtcbiAgICB0YXNrRGl2LmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICBsZXQgdGFza0J0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2std3JhcHBlcicpO1xuICAgIHRhc2tCdG5XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xufVxuZnVuY3Rpb24gc3VibWl0VGFzaygpIHtcblxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2MnKS52YWx1ZTtcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbVRpdGxlJyk7XG4gICAgaWYodGFza05hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJUaXRsZSBDYW4ndCBCZSBCbGFuayFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSk7XG4gICAgbWFrZVRhc2soZGVzY3JpcHRpb24sIHRhc2tOYW1lLnZhbHVlLCBkYXRlLnZhbHVlLCByZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpLCBcIkxvd1ByaW9yaXR5XCIpO1xuICAgIHNhdmVUYXNrbWFzdGVyKCk7XG4gICAgbWFrZVRhc2tCdG4odGFza05hbWUudmFsdWUsIFwiTG93UHJpb3JpdHlcIik7XG4gICAgY2xvc2VUYXNrTW9kYWwoKTtcbn1cbmZ1bmN0aW9uIHJldHVybkN1cnJUYXNrKHByb2plY3QsIG5hbWUpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5UYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFzayA9IHByb2plY3QuVGFza3NbaV07XG4gICAgICAgIGlmKHRhc2suTmFtZS50cmltKCkgPT09IG5hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VUYXNrQnRuKG5hbWUsIHN0YXR1cykge1xuXG4gICAgaWYoc3RhdHVzID09PSBcIkxvd1ByaW9yaXR5XCIpIHtcbiAgICAgICAgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvdy1wcmlvJyk7XG4gICAgfVxuICAgIGVsc2UgaWYoc3RhdHVzID09PSBcIkluUHJvZ3Jlc3NcIil7XG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbi1wcm8nKTtcbiAgICB9XG4gICAgZWxzZSBpZihzdGF0dXMgPT09IFwiQ29tcGxldGVkXCIpe1xuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGUnKTtcbiAgICB9XG4gICAgZWxzZSBpZihzdGF0dXMgPT09IDQpe1xuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLXNvb24nKTtcbiAgICB9XG5cblxuICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICB0YXNrLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5VGFza0luZm8odGFzayk7XG4gICAgfSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKHRhc2spO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHNUYXNrcygpIHsgICAgXG4gICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gcmV0dXJuUHJvamVjdCgpO1xuICAgICAgICBpZihhY3RpdmVQcm9qZWN0LlRhc2tzLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYWN0aXZlUHJvamVjdC5UYXNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gYWN0aXZlUHJvamVjdC5UYXNrc1tqXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKTtcbiAgICAgICAgICAgIG1ha2VUYXNrQnRuKGN1cnJlbnRUYXNrLk5hbWUsIGN1cnJlbnRUYXNrLlN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgLy8gUFVUIFRIRSBDSEVDSyBGT1IgRFVFIFNPT04gRlVOQ1RJT04gSEVSRSEhXG4gICAgICAgIH1cbiAgICB9XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrSW5mbyhlKSB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID1cbiAgICBgPGRpdiBpZD1cIm1vZGFsSURcIiBjbGFzcz1cInByb2plY3QtbW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdGFzay1jb250ZW50XCI+XG5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxoMiBpZD1cInRhc2tUaXRsZVwiIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+PC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2VNb2RhbFwiIGNsYXNzPVwiY2xvc2VcIj5YPC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dC1tb2RhbFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1pbnB1dC1tb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay1kZXNjXCIgaWQ9XCJ0YXNrRGVzY1wiPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZS1EYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIj4gPC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGF0QnRuXCIgY2xhc3M9XCJzdGF0dXMtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJsb3dcIj5Mb3cgUHJpb3JpdHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiaW5cIj5Jbi1Qcm9ncmVzczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjb21wXCI+Q29tcGxldGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY29uZmlybUNoYW5nZXNcIiBjbGFzcz1cImNvbmZpcm1cIj5DT05GSVJNIENIQU5HRVM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJ0YXNrLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGVUYXNrXCI+REVMRVRFIFRBU0shPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuPC9kaXY+IGA7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWwnKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcblxuICAgIFxuXG4gICAgbGV0IHBhcmVudFByb2plY3QgPSByZXR1cm5Qcm9qZWN0KCk7XG5cbiAgICBsZXQgdGFzayA9IHJldHVybkN1cnJUYXNrKHBhcmVudFByb2plY3QsIGUuaWQpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2suTmFtZTtcblxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjJyk7XG4gICAgZGVzYy5pbm5lclRleHQgPSB0YXNrLkRlc2NyaXB0aW9uO1xuICAgIGlmKGRlc2MuaW5uZXJUZXh0ID09PSBcIlwiKSB7XG4gICAgICAgIGRlc2MuaW5uZXJUZXh0ID0gXCI6XVwiO1xuICAgIH1cblxuICAgIGxldCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICAgIGR1ZS52YWx1ZSA9IHRhc2suRGF0ZTtcblxuICAgIGxldCBzdGF0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRCdG4nKTtcbiAgICBcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGF0QnRuLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN0YXRCdG4uY2hpbGRyZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoaWdobGlnaHRTdGF0dXMoc3RhdEJ0biwgc3RhdEJ0bi5jaGlsZHJlbltpXSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBpZih0YXNrLlN0YXR1cyA9PT0gXCJMb3dQcmlvcml0eVwiKSB7XG4gICAgICAgICAgICBzdGF0QnRuLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXNrLlN0YXR1cyA9PT0gXCJJblByb2dyZXNzXCIpIHtcbiAgICAgICAgICAgIHN0YXRCdG4uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhc2suU3RhdHVzID09PSBcIkNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICBzdGF0QnRuLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVRhc2snKTtcbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRhc2socGFyZW50UHJvamVjdCwgdGFzaywgZSk7XG4gICAgfSk7XG5cbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1DaGFuZ2VzJyk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB1cGRhdGVUYXNrKHRhc2ssIGUpO1xuICAgIH0pO1xuICAgIFxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRTdGF0dXMoc3RhdHVzV3JhcHBlciwgc3RhdEJ0bikge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGF0dXNXcmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHN0YXR1c1dyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFzaycpKSB7XG4gICAgICAgICAgICBzdGF0dXNXcmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YXNrJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xufVxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrLCBlKSB7XG4gICAgZS5yZW1vdmUoKTtcbiAgICBjbG9zZVRhc2tNb2RhbCgpO1xuICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrKTtcbiAgICBzYXZlVGFza21hc3RlcigpO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tPYmplY3QodGFzaykge1xuICAgIGxldCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICAgIHRhc2suRGF0ZSA9IGR1ZS52YWx1ZTtcblxuICAgIHRhc2suU3RhdHVzID0gdGFza1N0YXR1cygpO1xuXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2sodGFzaywgZSkge1xuICAgIGxldCBvbGRCdXR0b25JRCA9IGUuaWQ7XG4gICAgZS5yZW1vdmUoKTtcbiAgICB1cGRhdGVUYXNrT2JqZWN0KHRhc2spO1xuICAgIG1ha2VUYXNrQnRuKG9sZEJ1dHRvbklELCB0YXNrLlN0YXR1cyk7XG4gICAgY2xvc2VUYXNrTW9kYWwoKTtcbiAgICBzYXZlVGFza21hc3RlcigpO1xufVxuXG5mdW5jdGlvbiB0YXNrU3RhdHVzKCkge1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3cnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgcmV0dXJuIFwiTG93UHJpb3JpdHlcIjtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFzaycpKSB7XG4gICAgICAgIHJldHVybiBcIkluUHJvZ3Jlc3NcIjtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXAnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVkXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQW5kRGlzcGxheVRhc2tzKCkge1xuICAgIG1ha2VUYXNrVUkoKTtcbiAgICBkaXNwbGF5UHJvamVjdHNUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNPbkJvb3QoKSB7XG4gICAgaWYgKHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYWtlUHJvamVjdEJ0bih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlSG9tZU1lbnUoKSB7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1VJJyk7XG4gICAgY2xlYXJUYXNrVUkoKTtcblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SG9tZU1lbnUnKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKG1lbnUpXG5cbiAgICBpZiAodGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IG5vUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBub1Byb2plY3RzLnRleHRDb250ZW50ID0gJ05PIFBST0pFQ1RTISBNQVlCRSBDUkVBVEUgT05FPyc7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChub1Byb2plY3RzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XG4gICAgICAgICAgICBtYWtlSG9tZUJ1dHRvbnMocHJvamVjdCwgbWVudSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gbWFrZUhvbWVCdXR0b25zKHByb2plY3QsIG1lbnUpIHtcbiAgICBsZXQgaG9tZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SG9tZScpO1xuICAgIGhvbWVQcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3QuTmFtZTtcblxuICAgIGhvbWVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWtlVGFza1VJKCk7XG4gICAgICAgIHNldEhvbWVCdXR0b25zKHByb2plY3QuTmFtZSk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0c1Rhc2tzKCk7XG4gICAgfSk7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOdW1iZXInKTtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gaG93TWFueVVuY29tcGxldGVUYXNrcyhwcm9qZWN0KTtcbiAgICBob21lUHJvamVjdC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaG9tZVByb2plY3QpO1xufVxuZnVuY3Rpb24gc2V0SG9tZUJ1dHRvbnMobmFtZSkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3cmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHdyYXBwZXIuY2hpbGRyZW5baV0uaWQgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVByb2plY3Qod3JhcHBlci5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBob3dNYW55VW5jb21wbGV0ZVRhc2tzKHByb2plY3QpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QuVGFza3MubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIGlmKHByb2plY3QuVGFza3NbaV0uU3RhdHVzICE9PSAnQ29tcGxldGVkJykge1xuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudGVyO1xufVxuXG5mdW5jdGlvbiBpbml0RE9NKCkge1xuICAgIG5ld1Byb2plY3QoKTtcbiAgICBsb2FkUHJvamVjdHNPbkJvb3QoKTtcbiAgICBtYWtlSG9tZU1lbnUoKTtcbiAgICBob21lQnRuKCk7XG59XG5cbmV4cG9ydCB7aW5pdERPTX07XG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtpbml0RE9NfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7bG9hZFRhc2tNYXN0ZXIsIHNhdmVUYXNrbWFzdGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG4vLyBXRSBIQVZFIERBVEUtRk5TIFRPIElNUE9SVCBDRVJUQUlOIEZVTkNUSU9OUyBGUk9NIVxuXG5cblxuLy8gZ29ubmEgaGF2ZSB0byBwdXQgc29tZSBzdG9yYWdlIGZ1bmN0aW9ucyBpbiB0aGVzZSBsYXRlclxuY2xhc3MgVGFza21hc3RlciB7XG4gICAgUHJvamVjdHMgPSBbXTtcbiAgICBuZXdQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgdGhpcy5Qcm9qZWN0cy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuUHJvamVjdHNbaV0gPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmxldCB0YXNrTWFzdGVyID0gbmV3IFRhc2ttYXN0ZXI7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgVGFza3MgPSBbXTtcbiAgICBuZXdUYXNrKG5hbWUpIHtcbiAgICAgICAgdGhpcy5UYXNrcy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgICBwdXNoVG9UYXNrbWFzdGVyKG5hbWUpIHtcbiAgICAgICAgdGFza01hc3Rlci5uZXdQcm9qZWN0KG5hbWUpO1xuICAgIH1cbiAgICBkZWxldGVUYXNrKHRhc2spIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuVGFza3NbaV0gPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0O1xuICAgIHByb2plY3QuTmFtZSA9IG5hbWU7XG4gICAgcHJvamVjdC5wdXNoVG9UYXNrbWFzdGVyKHByb2plY3QpO1xufVxuXG5cbi8vIG1heWJlIGNoYW5nZSBsb3cgaW4gYW5kIGNvbXBsZXRlZCB0byBhIHNpbmdsZSBzdGF0dXMgdGhhdCB0aG9zZSB3b3VsZCBiZSB0aGUga2V5IHRvXG4vLyBhZGQgaXNEdWVTb29uIG1ldGhvZCB0aGF0IGNoZWNrcyB3aXRoIGRhdGUtZm5zIGlmIHRoZSB0YXNrIGlzIGR1ZSBpbiBhIGxlc3MgdGhhbiBhIHdlZWtcblxuY2xhc3MgVGFzayB7XG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcbiAgICBEZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgU3RhdHVzID0gXCJMb3dQcmlvcml0eVwiXG4gICAgRGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZS50cmltKCkgPT09IHByb2plY3ROYW1lLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0ubmV3VGFzayh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbi8vIHN0YXR1cyBjYW4gYmUgTG93UHJpb3JpdHkgSW5Qcm9ncmVzcyBDb21wbGV0ZWRcbmZ1bmN0aW9uIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCBwcm9qZWN0TmFtZSwgc3RhdHVzKSB7XG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzaztcbiAgICB0YXNrLk5hbWUgPSBuYW1lO1xuICAgIHRhc2suRGF0ZSA9IGRhdGU7XG4gICAgdGFzay5TdGF0dXMgPSBzdGF0dXM7XG4gICAgdGFzay5EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRhc2sucHVzaFRvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzayk7XG4gICAgY29uc29sZS5sb2codGFzayk7XG59XG5cblxuLy9sb2FkcyBwYWdlIFxubG9hZFRhc2tNYXN0ZXIoKTtcbmluaXRET00oKTtcbmV4cG9ydCB7bWFrZVRhc2ssIG1ha2VQcm9qZWN0LCB0YXNrTWFzdGVyfTtcbiIsImltcG9ydCB7bWFrZVRhc2ssIG1ha2VQcm9qZWN0LCB0YXNrTWFzdGVyfSBmcm9tIFwiLi9pbmRleFwiXG5cbmZ1bmN0aW9uIHNhdmVUYXNrbWFzdGVyKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTWFzdGVyJywgSlNPTi5zdHJpbmdpZnkodGFza01hc3RlcikpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tNYXN0ZXIpO1xufVxuXG5mdW5jdGlvbiBsb2FkVGFza01hc3RlcigpIHtcbiAgICBsZXQgbG9jYWxUYXNrTWFzdGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza01hc3RlcicpKTtcbiAgICBpZihsb2NhbFRhc2tNYXN0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsVGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IFByb2plY3QgPSBsb2NhbFRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XG4gICAgICAgICAgICBtYWtlUHJvamVjdChQcm9qZWN0Lk5hbWUpO1xuICAgICAgICAgICAgbG9hZFRhc2tzKFByb2plY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5mdW5jdGlvbiBsb2FkVGFza3MoUHJvamVjdCkge1xuICAgIGlmKFByb2plY3QuVGFza3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LlRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IFByb2plY3QuVGFza3NbaV07XG4gICAgICAgICAgICBtYWtlVGFzayh0YXNrLkRlc2NyaXB0aW9uLCB0YXNrLk5hbWUsIHRhc2suRGF0ZSwgUHJvamVjdC5OYW1lLCB0YXNrLlN0YXR1cyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQge3NhdmVUYXNrbWFzdGVyLCBsb2FkVGFza01hc3Rlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3N0b3JhZ2UuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=