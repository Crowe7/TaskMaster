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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nbody {\r\n    display: flex;\r\n    font-family: 'Open Sans', sans-serif;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    background-color: rgb(102, 173, 231);\r\n}\r\n.header{\r\n    display: flex;\r\n    background-color: steelblue;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    color: white;\r\n    justify-content: space-between;\r\n}\r\n.modal-header{\r\n    display: flex;\r\n    background-color: steelblue;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    color: white;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n}\r\n.modal-header-title{\r\n    margin-left: 50px;\r\n}\r\n.close{\r\n    font-size: 30px;\r\n    border: none;\r\n    background-color: inherit;\r\n    color: white;\r\n    width: 40px;\r\n    \r\n}\r\n\r\n.close:hover{\r\n    cursor: pointer;\r\n    color: rgb(226, 226, 226);\r\n}\r\nheader h1{\r\n    margin-left: 50px;\r\n}\r\n.new-task-wrapper{\r\n    display: flex;\r\n}\r\n#newTask{\r\n    font-size: 24px;\r\n    color: white;\r\n    border: none;\r\n    background-color:inherit;\r\n    width: 150px;\r\n}\r\n#newTask:hover{\r\n    border-bottom: 3px solid lightskyblue;\r\n    color: rgb(218, 218, 218);\r\n    cursor: pointer;\r\n}\r\n.projects-menu {\r\n    height: 100%;\r\n    width: 300px;\r\n    background-color: rgb(102, 173, 231);\r\n    border-right: 3px solid steelblue;\r\n\r\n}\r\n.pro{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: inherit;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    font-size: 16px;\r\n    color: white;\r\n    padding-left: 20px;\r\n    border: none;\r\n    border-left: 5px solid steelblue;\r\n    margin: 5px;\r\n    border-radius: 3px;\r\n}\r\n.pro:hover{\r\n    border-left: 5px solid rgb(84, 146, 196);\r\n    background-color: rgb(84, 146, 196);\r\n}\r\n.pro span {\r\n    visibility: hidden;\r\n}\r\n.active-project{\r\n    border-left: 5px solid rgb(84, 146, 196);\r\n    background-color: rgb(84, 146, 196);\r\n}\r\n.pro:hover span{\r\n    visibility: visible;\r\n}\r\n\r\n#deleteProject{\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    color: white;\r\n    border: 2px solid rgb(84, 146, 196);\r\n}\r\n\r\n#deleteProject:hover{\r\n    border-left: 2px solid lightskyblue;\r\n    border-bottom: 2px solid lightskyblue;\r\n}\r\n.home{\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    border-radius: 50px;\r\n    border: 3px solid lightskyblue;\r\n    background-color: inherit;\r\n    color: white;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}\r\n.home:hover{\r\n    cursor: pointer;\r\n    border: 3px solid white;\r\n    background-color: lightskyblue;\r\n    color: black;\r\n}\r\n.home:active{\r\n    transform: translateY(2px);\r\n}\r\n.home-menu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    border-bottom: 3px solid steelblue;\r\n    height: 150px;\r\n}\r\n\r\n\r\n.projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.all-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 430px;\r\n    overflow-y: auto;\r\n}\r\n\r\n#newProject {\r\n    /* this is just for looks now */\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.project-board{\r\n    display: flex;\r\n    margin: 40px;\r\n    gap: 20px;\r\n\r\n}\r\n.task-area{\r\n    display: flex;\r\n    gap: 20px;\r\n    height: 600px;\r\n    overflow-y: auto;\r\n    flex-direction: column;\r\n    background-color: rgb(240, 239, 239);\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    align-items: center;\r\n}\r\n.header-p{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    background-color: rgb(240, 239, 239);\r\n    padding: 5px;\r\n    width: 250px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n.task {\r\n    font-size: 12px;\r\n    margin-top: 5px;\r\n    border: none;\r\n    background-color: white;\r\n    width: 90%;\r\n    padding: 20px;\r\n    text-align: left;\r\n    max-width: 225px;\r\n    overflow: hidden;\r\n    overflow-wrap: break-word;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 5px steelblue;\r\n}\r\n.task:hover{\r\n    background-color: rgb(247, 247, 247);\r\n    cursor: pointer;\r\n    box-shadow: 2px 2px 5px steelblue;\r\n}\r\n\r\n\r\n.title-input {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.project-form-input{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 90%;\r\n}\r\ninput[type=text]{\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n    border: 2px solid lightskyblue;\r\n    padding: 10px;\r\n    outline: none;\r\n}\r\n.submit-project{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n#createProject:hover{\r\n    background-color: lightskyblue;\r\n    border: 1px solid rgb(101, 196, 255);\r\n}\r\n#cancelProject:hover{\r\n    background-color: rgb(253, 223, 228);\r\n    border: 1px solid lightpink;\r\n}\r\n.new-project-button{\r\n    border: 1px solid lightskyblue;\r\n    background-color: white;\r\n    margin-top: 5px;\r\n    padding: 5px;\r\n    width: 120px;\r\n}\r\n\r\n.projectmodal input[type=text]{\r\n    font-size: 32px;\r\n    padding: 10px;\r\n    width: 90%;\r\n    height: 300px;\r\n    resize: none;\r\n}\r\n.project-modal {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: none;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n\r\n.modal-project-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 60%;\r\n    background-color: white;\r\n    margin: 10% auto;\r\n    height: 500px;\r\n}\r\n.title-input-modal{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#mTitle{\r\n    width: 95%;\r\n    border: none !important;\r\n    border-bottom: 1px solid steelblue !important;\r\n    border-right: 1px solid steelblue !important;\r\n    border-radius: 0px !important;\r\n    padding-left: 0px !important;\r\n}\r\n#taskDesc{\r\n    width: 95% !important;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    resize: none;\r\n    margin-top: 10px;\r\n    border: none;\r\n    outline: none;\r\n}\r\n.submit-task{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n#createTask{\r\n    height: 25px;\r\n    border: 1px solid steelblue;\r\n    border-right: none !important;\r\n    transition: width .2s;\r\n    font-size: 12px;\r\n}\r\n#createTask:hover{\r\n    width: 150px;\r\n\r\n}\r\n\r\n.date-box{\r\n    margin-top: 2px;\r\n    height: 25px;\r\n    padding-left: 20px;\r\n    border: 1px solid steelblue;\r\n    border-left: none !important;\r\n}\r\n\r\n#dueDate{\r\n    margin-left: 10px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border: none;\r\n    font-size: 16px;\r\n    border-left: 1px solid steelblue;\r\n    color: rgb(0, 0, 0);\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-task-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 60%;\r\n    background-color: white;\r\n    margin: 10% auto;\r\n    height: 500px;\r\n}\r\n.task-desc{\r\n   padding-left: 20px;\r\n   height:300px;\r\n   width: 100%;\r\n}\r\n\r\n.status-buttons{\r\n    display: flex;\r\n    padding-left: 15px;\r\n    gap: 15px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.status-buttons button{\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    padding-bottom: 10px;\r\n    border: none;\r\n    border-bottom: 3px solid steelblue;\r\n    background-color: white;\r\n    transition: padding .5s;\r\n}\r\n.status-buttons button:hover {\r\n    cursor: pointer;\r\n    padding-right: 20px !important;\r\n    padding-left:  20px !important;\r\n\r\n}\r\n.active-task{\r\n    padding-left: 25px !important;\r\n    padding-right: 25px !important;\r\n    background-color: rgb(255, 239, 188) !important;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.confirm{\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    border: none;\r\n    background-color: white;\r\n    margin-left: auto;\r\n    border-bottom: 2px solid steelblue;\r\n    border-left: 2px solid steelblue;\r\n}\r\n\r\n.confirm:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.projectHomeMenu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n    justify-content: center;\r\n    gap: 20px;\r\n\r\n}\r\n\r\n.projectHome {\r\n    display: flex;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    align-items: center;\r\n    font-size: 24px;\r\n    margin-top: 25px;\r\n    margin-left: 50px;\r\n    width: 600px;\r\n    height: 50px;\r\n    background-color: inherit;\r\n    color: white;\r\n    border: 3px solid lightskyblue;\r\n    border-radius: 25px;\r\n\r\n}\r\n.taskNumber {\r\n    margin-left: auto;\r\n    border: 3px solid lightskyblue;\r\n    padding: 3px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    border-radius: 50px;\r\n}\r\n.task-footer{\r\n    display: flex;\r\n    padding: 10px;\r\n    background-color: rgb(255, 168, 181);\r\n    height: 100%;\r\n    justify-content: center;\r\n}\r\n.task-footer button{\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: inherit;\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\n.content-wrapper{\r\n    display: flex;\r\n\r\n}\r\n\r\n.flex-wrapper{\r\n    display: flex;\r\n    flex: 1 0 auto;\r\n}\r\n.footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    background-color: steelblue;\r\n    color: white;\r\n}\r\n@keyframes bounce{\r\n    from {transform: translateY(0px)}\r\n    to {transform: translateY(-5px)}\r\n}\r\n\r\n.footer i{\r\n    padding-left: 5px;\r\n    text-decoration: none;\r\n    color: lightskyblue;\r\n    font-size: 26px;\r\n}\r\n.footer i:hover {\r\n    font-size: 26px;\r\n    animation: bounce .3s infinite alternate;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nbody {\r\n    display: flex;\r\n    font-family: 'Open Sans', sans-serif;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    background-color: rgb(102, 173, 231);\r\n}\r\n.header{\r\n    display: flex;\r\n    background-color: steelblue;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    color: white;\r\n    justify-content: space-between;\r\n}\r\n.modal-header{\r\n    display: flex;\r\n    background-color: steelblue;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    color: white;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n}\r\n.modal-header-title{\r\n    margin-left: 50px;\r\n}\r\n.close{\r\n    font-size: 30px;\r\n    border: none;\r\n    background-color: inherit;\r\n    color: white;\r\n    width: 40px;\r\n    \r\n}\r\n\r\n.close:hover{\r\n    cursor: pointer;\r\n    color: rgb(226, 226, 226);\r\n}\r\nheader h1{\r\n    margin-left: 50px;\r\n}\r\n.new-task-wrapper{\r\n    display: flex;\r\n}\r\n#newTask{\r\n    font-size: 24px;\r\n    color: white;\r\n    border: none;\r\n    background-color:inherit;\r\n    width: 150px;\r\n}\r\n#newTask:hover{\r\n    border-bottom: 3px solid lightskyblue;\r\n    color: rgb(218, 218, 218);\r\n    cursor: pointer;\r\n}\r\n.projects-menu {\r\n    height: 100%;\r\n    width: 300px;\r\n    background-color: rgb(102, 173, 231);\r\n    border-right: 3px solid steelblue;\r\n\r\n}\r\n.pro{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: inherit;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    font-size: 16px;\r\n    color: white;\r\n    padding-left: 20px;\r\n    border: none;\r\n    border-left: 5px solid steelblue;\r\n    margin: 5px;\r\n    border-radius: 3px;\r\n}\r\n.pro:hover{\r\n    border-left: 5px solid rgb(84, 146, 196);\r\n    background-color: rgb(84, 146, 196);\r\n}\r\n.pro span {\r\n    visibility: hidden;\r\n}\r\n.active-project{\r\n    border-left: 5px solid rgb(84, 146, 196);\r\n    background-color: rgb(84, 146, 196);\r\n}\r\n.pro:hover span{\r\n    visibility: visible;\r\n}\r\n\r\n#deleteProject{\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    color: white;\r\n    border: 2px solid rgb(84, 146, 196);\r\n}\r\n\r\n#deleteProject:hover{\r\n    border-left: 2px solid lightskyblue;\r\n    border-bottom: 2px solid lightskyblue;\r\n}\r\n.home{\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    border-radius: 50px;\r\n    border: 3px solid lightskyblue;\r\n    background-color: inherit;\r\n    color: white;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}\r\n.home:hover{\r\n    cursor: pointer;\r\n    border: 3px solid white;\r\n    background-color: lightskyblue;\r\n    color: black;\r\n}\r\n.home:active{\r\n    transform: translateY(2px);\r\n}\r\n.home-menu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    border-bottom: 3px solid steelblue;\r\n    height: 150px;\r\n}\r\n\r\n\r\n.projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.all-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 430px;\r\n    overflow-y: auto;\r\n}\r\n\r\n#newProject {\r\n    /* this is just for looks now */\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.project-board{\r\n    display: flex;\r\n    margin: 40px;\r\n    gap: 20px;\r\n\r\n}\r\n.task-area{\r\n    display: flex;\r\n    gap: 20px;\r\n    height: 600px;\r\n    overflow-y: auto;\r\n    flex-direction: column;\r\n    background-color: rgb(240, 239, 239);\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    align-items: center;\r\n}\r\n.header-p{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    background-color: rgb(240, 239, 239);\r\n    padding: 5px;\r\n    width: 250px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n.task {\r\n    font-size: 12px;\r\n    margin-top: 5px;\r\n    border: none;\r\n    background-color: white;\r\n    width: 90%;\r\n    padding: 20px;\r\n    text-align: left;\r\n    max-width: 225px;\r\n    overflow: hidden;\r\n    overflow-wrap: break-word;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 5px steelblue;\r\n}\r\n.task:hover{\r\n    background-color: rgb(247, 247, 247);\r\n    cursor: pointer;\r\n    box-shadow: 2px 2px 5px steelblue;\r\n}\r\n\r\n\r\n.title-input {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.project-form-input{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 90%;\r\n}\r\ninput[type=text]{\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n    border: 2px solid lightskyblue;\r\n    padding: 10px;\r\n    outline: none;\r\n}\r\n.submit-project{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n#createProject:hover{\r\n    background-color: lightskyblue;\r\n    border: 1px solid rgb(101, 196, 255);\r\n}\r\n#cancelProject:hover{\r\n    background-color: rgb(253, 223, 228);\r\n    border: 1px solid lightpink;\r\n}\r\n.new-project-button{\r\n    border: 1px solid lightskyblue;\r\n    background-color: white;\r\n    margin-top: 5px;\r\n    padding: 5px;\r\n    width: 120px;\r\n}\r\n\r\n.projectmodal input[type=text]{\r\n    font-size: 32px;\r\n    padding: 10px;\r\n    width: 90%;\r\n    height: 300px;\r\n    resize: none;\r\n}\r\n.project-modal {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: none;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n\r\n.modal-project-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 60%;\r\n    background-color: white;\r\n    margin: 10% auto;\r\n    height: 500px;\r\n}\r\n.title-input-modal{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#mTitle{\r\n    width: 95%;\r\n    border: none !important;\r\n    border-bottom: 1px solid steelblue !important;\r\n    border-right: 1px solid steelblue !important;\r\n    border-radius: 0px !important;\r\n    padding-left: 0px !important;\r\n}\r\n#taskDesc{\r\n    width: 95% !important;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    resize: none;\r\n    margin-top: 10px;\r\n    border: none;\r\n    outline: none;\r\n}\r\n.submit-task{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n#createTask{\r\n    height: 25px;\r\n    border: 1px solid steelblue;\r\n    border-right: none !important;\r\n    transition: width .2s;\r\n    font-size: 12px;\r\n}\r\n#createTask:hover{\r\n    width: 150px;\r\n\r\n}\r\n\r\n.date-box{\r\n    margin-top: 2px;\r\n    height: 25px;\r\n    padding-left: 20px;\r\n    border: 1px solid steelblue;\r\n    border-left: none !important;\r\n}\r\n\r\n#dueDate{\r\n    margin-left: 10px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border: none;\r\n    font-size: 16px;\r\n    border-left: 1px solid steelblue;\r\n    color: rgb(0, 0, 0);\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-task-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 60%;\r\n    background-color: white;\r\n    margin: 10% auto;\r\n    height: 500px;\r\n}\r\n.task-desc{\r\n   padding-left: 20px;\r\n   height:300px;\r\n   width: 100%;\r\n}\r\n\r\n.status-buttons{\r\n    display: flex;\r\n    padding-left: 15px;\r\n    gap: 15px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.status-buttons button{\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    padding-bottom: 10px;\r\n    border: none;\r\n    border-bottom: 3px solid steelblue;\r\n    background-color: white;\r\n    transition: padding .5s;\r\n}\r\n.status-buttons button:hover {\r\n    cursor: pointer;\r\n    padding-right: 20px !important;\r\n    padding-left:  20px !important;\r\n\r\n}\r\n.active-task{\r\n    padding-left: 25px !important;\r\n    padding-right: 25px !important;\r\n    background-color: rgb(255, 239, 188) !important;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.confirm{\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    border: none;\r\n    background-color: white;\r\n    margin-left: auto;\r\n    border-bottom: 2px solid steelblue;\r\n    border-left: 2px solid steelblue;\r\n}\r\n\r\n.confirm:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.projectHomeMenu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n    justify-content: center;\r\n    gap: 20px;\r\n\r\n}\r\n\r\n.projectHome {\r\n    display: flex;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    align-items: center;\r\n    font-size: 24px;\r\n    margin-top: 25px;\r\n    margin-left: 50px;\r\n    width: 600px;\r\n    height: 50px;\r\n    background-color: inherit;\r\n    color: white;\r\n    border: 3px solid lightskyblue;\r\n    border-radius: 25px;\r\n\r\n}\r\n.taskNumber {\r\n    margin-left: auto;\r\n    border: 3px solid lightskyblue;\r\n    padding: 3px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    border-radius: 50px;\r\n}\r\n.task-footer{\r\n    display: flex;\r\n    padding: 10px;\r\n    background-color: rgb(255, 168, 181);\r\n    height: 100%;\r\n    justify-content: center;\r\n}\r\n.task-footer button{\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: inherit;\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\n.content-wrapper{\r\n    display: flex;\r\n\r\n}\r\n\r\n.flex-wrapper{\r\n    display: flex;\r\n    flex: 1 0 auto;\r\n}\r\n.footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    background-color: steelblue;\r\n    color: white;\r\n}\r\n@keyframes bounce{\r\n    from {transform: translateY(0px)}\r\n    to {transform: translateY(-5px)}\r\n}\r\n\r\n.footer i{\r\n    padding-left: 5px;\r\n    text-decoration: none;\r\n    color: lightskyblue;\r\n    font-size: 26px;\r\n}\r\n.footer i:hover {\r\n    font-size: 26px;\r\n    animation: bounce .3s infinite alternate;\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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

function clearTaskUI() {
    let taskDiv = document.querySelector('#taskUI');
    taskDiv.innerHTML = '';


    let taskBtnWrapper = document.querySelector('.new-task-wrapper');
    taskBtnWrapper.innerHTML = '';
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

    makeNewTaskBtn();
}
function makeNewTaskBtn() {
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

    status = getStatusID(status);

    let task = document.createElement('button');

    task.setAttribute('id', name);
    task.classList.add('task');
    task.textContent = name;
    task.addEventListener('click', () => {
        displayTaskInfo(task);
    });
    status.appendChild(task);
}

function getStatusID(status) {
    if(status === "LowPriority") {
        status = document.getElementById('low-prio');
    }
    else if(status === "InProgress"){
        status = document.getElementById('in-pro');
    }
    else if(status === "Completed"){
        status = document.getElementById('complete');
    }
    return status;
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
/* harmony import */ var date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/differenceInCalendarDays */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");





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
    IsDueSoon = false;

    pushToProject(projectName, task) {
        for(let i = 0; i < taskMaster.Projects.length; i++) {
            if(taskMaster.Projects[i].Name.trim() === projectName.trim()) {
                taskMaster.Projects[i].newTask(task);
            }
        }
    }

    checkIfDueSoon(taskDate, currDate) {
        return (0,date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDate, currDate);
    }




}
// status can be LowPriority InProgress Completed
function makeTask(description, name, date, projectName, status) {
    let task = new Task;
    task.Name = name;
    task.Date = date;
    task.Status = status;
    task.Description = description;
    task.IsDueSoon = task.checkIfDueSoon((0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_4__["default"])(date), new Date());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsU0FBUyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFdBQVcs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBUTtBQUNaLElBQUksd0RBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUEwQjtBQUNsQyx1QkFBdUIsSUFBSSw4REFBMEIsRUFBRTtBQUN2RCwyQkFBMkIsdURBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLDhEQUEwQixFQUFFO0FBQ3ZELDBCQUEwQix1REFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUI7QUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxZ0JxQjtBQUNTO0FBQzJCO0FBQ2U7QUFDL0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2RUFBd0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNkRBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUFjO0FBQ2QsNkNBQU87QUFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZjO0FBQ3pEO0FBQ0E7QUFDQSxzREFBc0QsOENBQVU7QUFDaEUsZ0JBQWdCLDhDQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0EsWUFBWSxtREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQSxZQUFZLGdEQUFRO0FBQ3BCO0FBQ0E7QUFDQTs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTczLCAyMzEpO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tb2RhbC1oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuLm1vZGFsLWhlYWRlci10aXRsZXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxufVxcclxcbi5jbG9zZXtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcXHJcXG59XFxyXFxuaGVhZGVyIGgxe1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG59XFxyXFxuLm5ldy10YXNrLXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbiNuZXdUYXNre1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuI25ld1Rhc2s6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3RzLW1lbnUge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTczLCAyMzEpO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuXFxyXFxufVxcclxcbi5wcm97XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG4ucHJvOmhvdmVye1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG59XFxyXFxuLnBybyBzcGFuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG4uYWN0aXZlLXByb2plY3R7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbn1cXHJcXG4ucHJvOmhvdmVyIHNwYW57XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGVQcm9qZWN0e1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGVQcm9qZWN0OmhvdmVye1xcclxcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG59XFxyXFxuLmhvbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4uaG9tZTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5ob21lOmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxufVxcclxcbi5ob21lLW1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXByb2plY3Rze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDQzMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3UHJvamVjdCB7XFxyXFxuICAgIC8qIHRoaXMgaXMganVzdCBmb3IgbG9va3Mgbm93ICovXFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5wcm9qZWN0LWJvYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDQwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuLnRhc2stYXJlYXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlci1we1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIG1heC13aWR0aDogMjI1cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggc3RlZWxibHVlO1xcclxcbn1cXHJcXG4udGFzazpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHN0ZWVsYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpdGxlLWlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZm9ybS1pbnB1dHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT10ZXh0XXtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnN1Ym1pdC1wcm9qZWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbiNjcmVhdGVQcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDEsIDE5NiwgMjU1KTtcXHJcXG59XFxyXFxuI2NhbmNlbFByb2plY3Q6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDIyMywgMjI4KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRwaW5rO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtYnV0dG9ue1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdG1vZGFsIGlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG4ucHJvamVjdC1tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsLXByb2plY3QtY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMTAlIGF1dG87XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcbi50aXRsZS1pbnB1dC1tb2RhbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuI21UaXRsZXtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzdGVlbGJsdWUgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgc3RlZWxibHVlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4jdGFza0Rlc2N7XFxyXFxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4uc3VibWl0LXRhc2t7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI2NyZWF0ZVRhc2t7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcbiNjcmVhdGVUYXNrOmhvdmVye1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5kYXRlLWJveHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZHVlRGF0ZXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5tb2RhbC10YXNrLWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGJsYWNrO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuLnRhc2stZGVzY3tcXHJcXG4gICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgaGVpZ2h0OjMwMHB4O1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzLWJ1dHRvbnN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcbi5zdGF0dXMtYnV0dG9ucyBidXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgLjVzO1xcclxcbn1cXHJcXG4uc3RhdHVzLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogIDIwcHggIWltcG9ydGFudDtcXHJcXG5cXHJcXG59XFxyXFxuLmFjdGl2ZS10YXNre1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzksIDE4OCkgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybXtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdEhvbWVNZW51e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEhvbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG5cXHJcXG59XFxyXFxuLnRhc2tOdW1iZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuLnRhc2stZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjgsIDE4MSk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrLWZvb3RlciBidXR0b257XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtd3JhcHBlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtd3JhcHBlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGJvdW5jZXtcXHJcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCl9XFxyXFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCl9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgaXtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbn1cXHJcXG4uZm9vdGVyIGk6aG92ZXIge1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJ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QUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxNQUFNLDBCQUEwQjtJQUNoQyxJQUFJLDJCQUEyQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZix3Q0FBd0M7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fucyk7XFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDE3MywgMjMxKTtcXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ubW9kYWwtaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcbi5tb2RhbC1oZWFkZXItdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbn1cXHJcXG4uY2xvc2V7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XFxyXFxufVxcclxcbmhlYWRlciBoMXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxufVxcclxcbi5uZXctdGFzay13cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4jbmV3VGFza3tcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxufVxcclxcbiNuZXdUYXNrOmhvdmVye1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBjb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0cy1tZW51IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDE3MywgMjMxKTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgc3RlZWxibHVlO1xcclxcblxcclxcbn1cXHJcXG4ucHJve1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuLnBybzpob3ZlcntcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxufVxcclxcbi5wcm8gc3BhbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmFjdGl2ZS1wcm9qZWN0e1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG59XFxyXFxuLnBybzpob3ZlciBzcGFue1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlUHJvamVjdHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlUHJvamVjdDpob3ZlcntcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxufVxcclxcbi5ob21le1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLmhvbWU6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4uaG9tZTphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG4uaG9tZS1tZW51e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1wcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiA0MzBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI25ld1Byb2plY3Qge1xcclxcbiAgICAvKiB0aGlzIGlzIGp1c3QgZm9yIGxvb2tzIG5vdyAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1ib2FyZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiA0MHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxufVxcclxcbi50YXNrLWFyZWF7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM5LCAyMzkpO1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXItcHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM5LCAyMzkpO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBtYXgtd2lkdGg6IDIyNXB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHN0ZWVsYmx1ZTtcXHJcXG59XFxyXFxuLnRhc2s6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBzdGVlbGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aXRsZS1pbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0taW5wdXR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5zdWJtaXQtcHJvamVjdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4jY3JlYXRlUHJvamVjdDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAxLCAxOTYsIDI1NSk7XFxyXFxufVxcclxcbiNjYW5jZWxQcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyMjMsIDIyOCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0cGluaztcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Rtb2RhbCBpbnB1dFt0eXBlPXRleHRde1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuLnByb2plY3QtbW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbC1wcm9qZWN0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG4udGl0bGUtaW5wdXQtbW9kYWx7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNtVGl0bGV7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc3RlZWxibHVlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHN0ZWVsYmx1ZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuI3Rhc2tEZXNje1xcclxcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnN1Ym1pdC10YXNre1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiNjcmVhdGVUYXNre1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycztcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG4jY3JlYXRlVGFzazpob3ZlcntcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1ib3h7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2R1ZURhdGV7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtdGFzay1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMTAlIGF1dG87XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcbi50YXNrLWRlc2N7XFxyXFxuICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgIGhlaWdodDozMDBweDtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1cy1idXR0b25ze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG4uc3RhdHVzLWJ1dHRvbnMgYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIC41cztcXHJcXG59XFxyXFxuLnN0YXR1cy1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6ICAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxufVxcclxcbi5hY3RpdmUtdGFza3tcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM5LCAxODgpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm17XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgc3RlZWxibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RIb21lTWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RIb21lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFxyXFxufVxcclxcbi50YXNrTnVtYmVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxufVxcclxcbi50YXNrLWZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY4LCAxODEpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzay1mb290ZXIgYnV0dG9ue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5mbGV4LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBib3VuY2V7XFxyXFxuICAgIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpfVxcclxcbiAgICB0byB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGl7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG59XFxyXFxuLmZvb3RlciBpOmhvdmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBhbmltYXRpb246IGJvdW5jZSAuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgcHJldmlvdXMgYHBhcnNlYCBpbXBsZW1lbnRhdGlvbiB3YXMgcmVuYW1lZCB0byBgcGFyc2VJU09gLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIHBhcnNlKCcyMDE2LTAxLTAxJylcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgcGFyc2VJU08oJzIwMTYtMDEtMDEnKVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IHZhbGlkYXRlcyBzZXBhcmF0ZSBkYXRlIGFuZCB0aW1lIHZhbHVlcyBpbiBJU08tODYwMSBzdHJpbmdzXG4gKiAgIGFuZCByZXR1cm5zIGBJbnZhbGlkIERhdGVgIGlmIHRoZSBkYXRlIGlzIGludmFsaWQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIHBhcnNlSVNPKCcyMDE4LTEzLTMyJylcbiAqICAgLy89PiBJbnZhbGlkIERhdGVcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyBkb2Vzbid0IGZhbGwgYmFjayB0byBgbmV3IERhdGVgIGNvbnN0cnVjdG9yXG4gKiAgIGlmIGl0IGZhaWxzIHRvIHBhcnNlIGEgc3RyaW5nIGFyZ3VtZW50LiBJbnN0ZWFkLCBpdCByZXR1cm5zIGBJbnZhbGlkIERhdGVgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gMiA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlkIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xyXG5pbXBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn0gZnJvbSBcIi4vaW5kZXhcIlxyXG5pbXBvcnQge3NhdmVUYXNrbWFzdGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmZ1bmN0aW9uIGhvbWVCdG4oKSB7XHJcbiAgICBsZXQgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnRuJyk7XHJcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUhvbWVNZW51KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJUYXNrVUkoKSB7XHJcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVUknKTtcclxuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cclxuICAgIGxldCB0YXNrQnRuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay13cmFwcGVyJyk7XHJcbiAgICB0YXNrQnRuV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xyXG4gICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XHJcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcclxuICAgIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJpbnB1dFwiIGNsYXNzPVwidGl0bGUtaW5wdXRcIiBhY3Rpb249XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicFRpdGxlXCIgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgUHJvamVjdD9cIiByZXF1aXJlZCBtYXhsZW5ndGg9XCI0MFwiID5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXByb2plY3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjcmVhdGVQcm9qZWN0XCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DUkVBVEUgUFJPSkVDVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbFByb2plY3RcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNBTkNFTDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPmA7XHJcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pO1xyXG4gICAgICAgIGxldCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUJ0bik7XHJcbiAgICAgICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UHJvamVjdCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuZnVuY3Rpb24gbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pIHtcclxuICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUHJvamVjdCcpO1xyXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlUHJvamVjdEJ0bihuYW1lKXtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xyXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm8nKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgICBwcm9qZWN0LmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG1ha2VEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpKTtcclxuICAgIFxyXG5cclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWFrZVRhc2tVSSgpO1xyXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgZGlzcGxheVByb2plY3RzVGFza3MoKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5mdW5jdGlvbiBtYWtlRGVsZXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSB7XHJcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlUHJvamVjdCcpO1xyXG4gICAgZGVsZXRlQnRuLmlubmVyVGV4dCA9ICdYJztcclxuXHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCwgZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkZWxldGVCdG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCwgZSkge1xyXG4gICAgdGFza01hc3Rlci5kZWxldGVQcm9qZWN0KHJldHVyblByb2plY3RUb0RlbGV0ZShwcm9qZWN0KSk7XHJcbiAgICBwcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNsZWFyVGFza1VJKCk7XHJcbiAgICBzYXZlVGFza21hc3RlcigpO1xyXG4gICAgaWYocmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbWFrZUFuZERpc3BsYXlUYXNrcygpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3cmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYod3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKTtcclxufVxyXG5mdW5jdGlvbiByZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpIHtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXByb2plY3QnKSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHdyYXBwZXIuY2hpbGRyZW5baV0uaWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJldHVyblByb2plY3QoKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZS50cmltKCkgPT09IHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkpIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSB0YXNrTWFzdGVyLlByb2plY3RzW2ldO1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdFRvRGVsZXRlKHByb2plY3QpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYodGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lLnRyaW0oKSA9PT0gcHJvamVjdC5pZCkge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XHJcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcclxuICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xyXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BUaXRsZScpO1xyXG4gICAgXHJcbiAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiTmFtZSBDYW4ndCBCZSBCbGFuayFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYocHJvamVjdE5hbWUudmFsdWUgPT09IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgQWxyZWFkeSBFeGlzdHMhJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWFrZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xyXG4gICAgICAgIG1ha2VQcm9qZWN0QnRuKHByb2plY3ROYW1lLnZhbHVlKTtcclxuICAgICAgICBzYXZlVGFza21hc3RlcigpO1xyXG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcclxuICAgIH1cclxufSBcclxuXHJcbmZ1bmN0aW9uIG1ha2VUYXNrVUkoKSB7XHJcbiAgICBjbGVhclRhc2tVSSgpO1xyXG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1VJJyk7XHJcbiAgICB0YXNrRGl2LmlubmVySFRNTCA9IFxyXG4gICAgYDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJvYXJkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicDFcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+bG93LXByaW9yaXR5PC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsb3ctcHJpb1wiIGNsYXNzPVwidGFzay1hcmVhXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicDJcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+aW4tcHJvZ3Jlc3M8L3A+XHJcbiAgICAgICAgPGRpdiBpZCA9IFwiaW4tcHJvXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwM1wiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5jb21wbGV0ZWQ8L3A+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbXBsZXRlXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwNFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5kdWUtc29vbjwvcD5cclxuICAgICAgICA8ZGl2IGlkPVwiZHVlLXNvb25cIiBjbGFzcz1cInRhc2stYXJlYVwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuLy8gcHJvYmFibHkgcHV0IGEgZnVuY3Rpb24gaGVyZSB0aGF0IGxvYWRzIGluIGVhY2ggaW5kaXZpZHVhbCB0YXNrIHRoYXRzIGluIHRoZSBwcm9qZWN0XHJcblxyXG4gICAgbWFrZU5ld1Rhc2tCdG4oKTtcclxufVxyXG5mdW5jdGlvbiBtYWtlTmV3VGFza0J0bigpIHtcclxuICAgIGxldCB0YXNrQnRuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay13cmFwcGVyJyk7XHJcbiAgICBsZXQgdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2snKTtcclxuICAgIHRhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xyXG5cclxuICAgIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrQnRuTW9kYWwpO1xyXG4gICAgdGFza0J0bldyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0J0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdG5Nb2RhbCgpIHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJtb2RhbElEXCIgY2xhc3M9XCJwcm9qZWN0LW1vZGFsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcHJvamVjdC1jb250ZW50XCI+XHJcblxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+VGFzayBJbmZvPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZU1vZGFsXCIgY2xhc3M9XCJjbG9zZVwiPlg8L2J1dHRvbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dC1tb2RhbFwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0LW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1UaXRsZVwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgdGl0bGUgb2YgdGhlIHRhc2s/XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiNDBcIiA+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0YXNrRGVzY1wiIHBsYWNlaG9sZGVyPVwiVGFzayBkZXNjcmlwdGlvblwiIHJvd3M9XCIxNVwiIG1heGxlbmd0aD1cIjIwMFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXRhc2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZS1EYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgbmFtZT1cImR1ZS1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY3JlYXRlVGFza1wiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q1JFQVRFIFRBU0s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcclxuICAgIGRhdGUudmFsdWUgPScyMDIyLTEyLTMxJztcclxuICAgIFRhc2tCdG5Nb2RhbExvZ2ljKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBUYXNrQnRuTW9kYWxMb2dpYygpIHtcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcclxuICAgIFxyXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVUYXNrJyk7XHJcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRUYXNrKTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZVRhc2tNb2RhbCgpIHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjJykudmFsdWU7XHJcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbVRpdGxlJyk7XHJcbiAgICBpZih0YXNrTmFtZS52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiVGl0bGUgQ2FuJ3QgQmUgQmxhbmshXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkpO1xyXG4gICAgbWFrZVRhc2soZGVzY3JpcHRpb24sIHRhc2tOYW1lLnZhbHVlLCBkYXRlLnZhbHVlLCByZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpLCBcIkxvd1ByaW9yaXR5XCIpO1xyXG4gICAgc2F2ZVRhc2ttYXN0ZXIoKTtcclxuICAgIG1ha2VUYXNrQnRuKHRhc2tOYW1lLnZhbHVlLCBcIkxvd1ByaW9yaXR5XCIpO1xyXG4gICAgY2xvc2VUYXNrTW9kYWwoKTtcclxufVxyXG5mdW5jdGlvbiByZXR1cm5DdXJyVGFzayhwcm9qZWN0LCBuYW1lKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5UYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0YXNrID0gcHJvamVjdC5UYXNrc1tpXTtcclxuICAgICAgICBpZih0YXNrLk5hbWUudHJpbSgpID09PSBuYW1lLnRyaW0oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFzaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWFrZVRhc2tCdG4obmFtZSwgc3RhdHVzKSB7XHJcblxyXG4gICAgc3RhdHVzID0gZ2V0U3RhdHVzSUQoc3RhdHVzKTtcclxuXHJcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICB0YXNrLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheVRhc2tJbmZvKHRhc2spO1xyXG4gICAgfSk7XHJcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQodGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXR1c0lEKHN0YXR1cykge1xyXG4gICAgaWYoc3RhdHVzID09PSBcIkxvd1ByaW9yaXR5XCIpIHtcclxuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG93LXByaW8nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RhdHVzID09PSBcIkluUHJvZ3Jlc3NcIil7XHJcbiAgICAgICAgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luLXBybycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzdGF0dXMgPT09IFwiQ29tcGxldGVkXCIpe1xyXG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXR1cztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c1Rhc2tzKCkgeyAgICBcclxuICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHJldHVyblByb2plY3QoKTtcclxuICAgICAgICBpZihhY3RpdmVQcm9qZWN0LlRhc2tzLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYWN0aXZlUHJvamVjdC5UYXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBhY3RpdmVQcm9qZWN0LlRhc2tzW2pdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFzayk7XHJcbiAgICAgICAgICAgIG1ha2VUYXNrQnRuKGN1cnJlbnRUYXNrLk5hbWUsIGN1cnJlbnRUYXNrLlN0YXR1cylcclxuICAgICAgICAgICAgICAgICAgICAvLyBQVVQgVEhFIENIRUNLIEZPUiBEVUUgU09PTiBGVU5DVElPTiBIRVJFISFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza0luZm8oZSkge1xyXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICBtb2RhbC5pbm5lckhUTUwgPVxyXG4gICAgYDxkaXYgaWQ9XCJtb2RhbElEXCIgY2xhc3M9XCJwcm9qZWN0LW1vZGFsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdGFzay1jb250ZW50XCI+XHJcblxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGgyIGlkPVwidGFza1RpdGxlXCIgY2xhc3M9XCJtb2RhbC1oZWFkZXItdGl0bGVcIj48L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNsb3NlTW9kYWxcIiBjbGFzcz1cImNsb3NlXCI+WDwvYnV0dG9uPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxmb3JtIGlkPVwiaW5wdXRcIiBjbGFzcz1cInRpdGxlLWlucHV0LW1vZGFsXCIgYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvcm0taW5wdXQtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay1kZXNjXCIgaWQ9XCJ0YXNrRGVzY1wiPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtdGFza1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUtRGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIj4gPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3RhdEJ0blwiIGNsYXNzPVwic3RhdHVzLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJsb3dcIj5Mb3cgUHJpb3JpdHk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJpblwiPkluLVByb2dyZXNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY29tcFwiPkNvbXBsZXRlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNvbmZpcm1DaGFuZ2VzXCIgY2xhc3M9XCJjb25maXJtXCI+Q09ORklSTSBDSEFOR0VTPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJ0YXNrLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRlbGV0ZVRhc2tcIj5ERUxFVEUgVEFTSyE8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4gYDtcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBsZXQgcGFyZW50UHJvamVjdCA9IHJldHVyblByb2plY3QoKTtcclxuXHJcbiAgICBsZXQgdGFzayA9IHJldHVybkN1cnJUYXNrKHBhcmVudFByb2plY3QsIGUuaWQpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2suTmFtZTtcclxuXHJcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzYycpO1xyXG4gICAgZGVzYy5pbm5lclRleHQgPSB0YXNrLkRlc2NyaXB0aW9uO1xyXG4gICAgaWYoZGVzYy5pbm5lclRleHQgPT09IFwiXCIpIHtcclxuICAgICAgICBkZXNjLmlubmVyVGV4dCA9IFwiOl1cIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcclxuICAgIGR1ZS52YWx1ZSA9IHRhc2suRGF0ZTtcclxuXHJcbiAgICBsZXQgc3RhdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0QnRuJyk7XHJcbiAgICBcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdEJ0bi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN0YXRCdG4uY2hpbGRyZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodFN0YXR1cyhzdGF0QnRuLCBzdGF0QnRuLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmKHRhc2suU3RhdHVzID09PSBcIkxvd1ByaW9yaXR5XCIpIHtcclxuICAgICAgICAgICAgc3RhdEJ0bi5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRhc2suU3RhdHVzID09PSBcIkluUHJvZ3Jlc3NcIikge1xyXG4gICAgICAgICAgICBzdGF0QnRuLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGFzay5TdGF0dXMgPT09IFwiQ29tcGxldGVkXCIpIHtcclxuICAgICAgICAgICAgc3RhdEJ0bi5jaGlsZHJlblsyXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVRhc2snKTtcclxuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkZWxldGVUYXNrKHBhcmVudFByb2plY3QsIHRhc2ssIGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtQ2hhbmdlcycpO1xyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZVRhc2sodGFzaywgZSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdobGlnaHRTdGF0dXMoc3RhdHVzV3JhcHBlciwgc3RhdEJ0bikge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXR1c1dyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihzdGF0dXNXcmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhc2snKSkge1xyXG4gICAgICAgICAgICBzdGF0dXNXcmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YXNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdCwgdGFzaywgZSkge1xyXG4gICAgZS5yZW1vdmUoKTtcclxuICAgIGNsb3NlVGFza01vZGFsKCk7XHJcbiAgICBwcm9qZWN0LmRlbGV0ZVRhc2sodGFzayk7XHJcbiAgICBzYXZlVGFza21hc3RlcigpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGFza09iamVjdCh0YXNrKSB7XHJcbiAgICBsZXQgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcclxuICAgIHRhc2suRGF0ZSA9IGR1ZS52YWx1ZTtcclxuXHJcbiAgICB0YXNrLlN0YXR1cyA9IHRhc2tTdGF0dXMoKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2sodGFzaywgZSkge1xyXG4gICAgbGV0IG9sZEJ1dHRvbklEID0gZS5pZDtcclxuICAgIGUucmVtb3ZlKCk7XHJcbiAgICB1cGRhdGVUYXNrT2JqZWN0KHRhc2spO1xyXG4gICAgbWFrZVRhc2tCdG4ob2xkQnV0dG9uSUQsIHRhc2suU3RhdHVzKTtcclxuICAgIGNsb3NlVGFza01vZGFsKCk7XHJcbiAgICBzYXZlVGFza21hc3RlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrU3RhdHVzKCkge1xyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvdycpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhc2snKSkge1xyXG4gICAgICAgIHJldHVybiBcIkxvd1ByaW9yaXR5XCI7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcclxuICAgICAgICByZXR1cm4gXCJJblByb2dyZXNzXCI7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcCcpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhc2snKSkge1xyXG4gICAgICAgIHJldHVybiBcIkNvbXBsZXRlZFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlQW5kRGlzcGxheVRhc2tzKCkge1xyXG4gICAgbWFrZVRhc2tVSSgpO1xyXG4gICAgZGlzcGxheVByb2plY3RzVGFza3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFByb2plY3RzT25Cb290KCkge1xyXG4gICAgaWYgKHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWFrZVByb2plY3RCdG4odGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VIb21lTWVudSgpIHtcclxuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tVSScpO1xyXG4gICAgY2xlYXJUYXNrVUkoKTtcclxuXHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SG9tZU1lbnUnKTtcclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQobWVudSlcclxuXHJcbiAgICBpZiAodGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBsZXQgbm9Qcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgbm9Qcm9qZWN0cy50ZXh0Q29udGVudCA9ICdOTyBQUk9KRUNUUyEgTUFZQkUgQ1JFQVRFIE9ORT8nO1xyXG5cclxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKG5vUHJvamVjdHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSB0YXNrTWFzdGVyLlByb2plY3RzW2ldO1xyXG4gICAgICAgICAgICBtYWtlSG9tZUJ1dHRvbnMocHJvamVjdCwgbWVudSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUhvbWVCdXR0b25zKHByb2plY3QsIG1lbnUpIHtcclxuICAgIGxldCBob21lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgaG9tZVByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhvbWUnKTtcclxuICAgIGhvbWVQcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3QuTmFtZTtcclxuXHJcbiAgICBob21lUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtYWtlVGFza1VJKCk7XHJcbiAgICAgICAgc2V0SG9tZUJ1dHRvbnMocHJvamVjdC5OYW1lKTtcclxuICAgICAgICBkaXNwbGF5UHJvamVjdHNUYXNrcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOdW1iZXInKTtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBob3dNYW55VW5jb21wbGV0ZVRhc2tzKHByb2plY3QpO1xyXG4gICAgaG9tZVByb2plY3QuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChob21lUHJvamVjdCk7XHJcbn1cclxuZnVuY3Rpb24gc2V0SG9tZUJ1dHRvbnMobmFtZSkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHdyYXBwZXIuY2hpbGRyZW5baV0uaWQgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlUHJvamVjdCh3cmFwcGVyLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaG93TWFueVVuY29tcGxldGVUYXNrcyhwcm9qZWN0KSB7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5UYXNrcy5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICBpZihwcm9qZWN0LlRhc2tzW2ldLlN0YXR1cyAhPT0gJ0NvbXBsZXRlZCcpIHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRET00oKSB7XHJcbiAgICBuZXdQcm9qZWN0KCk7XHJcbiAgICBsb2FkUHJvamVjdHNPbkJvb3QoKTtcclxuICAgIG1ha2VIb21lTWVudSgpO1xyXG4gICAgaG9tZUJ0bigpO1xyXG59XHJcblxyXG5leHBvcnQge2luaXRET019O1xyXG5cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7aW5pdERPTX0gZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCB7bG9hZFRhc2tNYXN0ZXIsIHNhdmVUYXNrbWFzdGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzJ1xyXG5pbXBvcnQgcGFyc2VJU08gZnJvbSAnZGF0ZS1mbnMvcGFyc2VJU08nO1xyXG4vLyBXRSBIQVZFIERBVEUtRk5TIFRPIElNUE9SVCBDRVJUQUlOIEZVTkNUSU9OUyBGUk9NIVxyXG5cclxuXHJcblxyXG4vLyBnb25uYSBoYXZlIHRvIHB1dCBzb21lIHN0b3JhZ2UgZnVuY3Rpb25zIGluIHRoZXNlIGxhdGVyXHJcbmNsYXNzIFRhc2ttYXN0ZXIge1xyXG4gICAgUHJvamVjdHMgPSBbXTtcclxuICAgIG5ld1Byb2plY3QobmFtZSkge1xyXG4gICAgICAgIHRoaXMuUHJvamVjdHMucHVzaChuYW1lKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuUHJvamVjdHNbaV0gPT09IHByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHJvamVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmxldCB0YXNrTWFzdGVyID0gbmV3IFRhc2ttYXN0ZXI7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIE5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICBUYXNrcyA9IFtdO1xyXG4gICAgbmV3VGFzayhuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5UYXNrcy5wdXNoKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHVzaFRvVGFza21hc3RlcihuYW1lKSB7XHJcbiAgICAgICAgdGFza01hc3Rlci5uZXdQcm9qZWN0KG5hbWUpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5UYXNrc1tpXSA9PT0gdGFzaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5UYXNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWFrZVByb2plY3QobmFtZSkge1xyXG4gICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdDtcclxuICAgIHByb2plY3QuTmFtZSA9IG5hbWU7XHJcbiAgICBwcm9qZWN0LnB1c2hUb1Rhc2ttYXN0ZXIocHJvamVjdCk7XHJcbn1cclxuXHJcblxyXG4vLyBtYXliZSBjaGFuZ2UgbG93IGluIGFuZCBjb21wbGV0ZWQgdG8gYSBzaW5nbGUgc3RhdHVzIHRoYXQgdGhvc2Ugd291bGQgYmUgdGhlIGtleSB0b1xyXG4vLyBhZGQgaXNEdWVTb29uIG1ldGhvZCB0aGF0IGNoZWNrcyB3aXRoIGRhdGUtZm5zIGlmIHRoZSB0YXNrIGlzIGR1ZSBpbiBhIGxlc3MgdGhhbiBhIHdlZWtcclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIERlc2NyaXB0aW9uID0gXCJcIjtcclxuICAgIFN0YXR1cyA9IFwiTG93UHJpb3JpdHlcIlxyXG4gICAgRGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgIElzRHVlU29vbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUudHJpbSgpID09PSBwcm9qZWN0TmFtZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0ubmV3VGFzayh0YXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmRHVlU29vbih0YXNrRGF0ZSwgY3VyckRhdGUpIHtcclxuICAgICAgICByZXR1cm4gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRhc2tEYXRlLCBjdXJyRGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcbi8vIHN0YXR1cyBjYW4gYmUgTG93UHJpb3JpdHkgSW5Qcm9ncmVzcyBDb21wbGV0ZWRcclxuZnVuY3Rpb24gbWFrZVRhc2soZGVzY3JpcHRpb24sIG5hbWUsIGRhdGUsIHByb2plY3ROYW1lLCBzdGF0dXMpIHtcclxuICAgIGxldCB0YXNrID0gbmV3IFRhc2s7XHJcbiAgICB0YXNrLk5hbWUgPSBuYW1lO1xyXG4gICAgdGFzay5EYXRlID0gZGF0ZTtcclxuICAgIHRhc2suU3RhdHVzID0gc3RhdHVzO1xyXG4gICAgdGFzay5EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGFzay5Jc0R1ZVNvb24gPSB0YXNrLmNoZWNrSWZEdWVTb29uKHBhcnNlSVNPKGRhdGUpLCBuZXcgRGF0ZSgpKTtcclxuICAgIHRhc2sucHVzaFRvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzayk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy9sb2FkcyBwYWdlIFxyXG5sb2FkVGFza01hc3RlcigpO1xyXG5pbml0RE9NKCk7XHJcbmV4cG9ydCB7bWFrZVRhc2ssIG1ha2VQcm9qZWN0LCB0YXNrTWFzdGVyfTtcclxuIiwiaW1wb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9IGZyb20gXCIuL2luZGV4XCJcclxuXHJcbmZ1bmN0aW9uIHNhdmVUYXNrbWFzdGVyKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tNYXN0ZXInLCBKU09OLnN0cmluZ2lmeSh0YXNrTWFzdGVyKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFRhc2tNYXN0ZXIoKSB7XHJcbiAgICBsZXQgbG9jYWxUYXNrTWFzdGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza01hc3RlcicpKTtcclxuICAgIGlmKGxvY2FsVGFza01hc3RlciAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IFByb2plY3QgPSBsb2NhbFRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XHJcbiAgICAgICAgICAgIG1ha2VQcm9qZWN0KFByb2plY3QuTmFtZSk7XHJcbiAgICAgICAgICAgIGxvYWRUYXNrcyhQcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmZ1bmN0aW9uIGxvYWRUYXNrcyhQcm9qZWN0KSB7XHJcbiAgICBpZihQcm9qZWN0LlRhc2tzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LlRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gUHJvamVjdC5UYXNrc1tpXTtcclxuICAgICAgICAgICAgbWFrZVRhc2sodGFzay5EZXNjcmlwdGlvbiwgdGFzay5OYW1lLCB0YXNrLkRhdGUsIFByb2plY3QuTmFtZSwgdGFzay5TdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQge3NhdmVUYXNrbWFzdGVyLCBsb2FkVGFza01hc3Rlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3N0b3JhZ2UuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=