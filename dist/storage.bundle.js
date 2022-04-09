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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nbody {\r\n    display: flex;\r\n    font-family: 'Open Sans', sans-serif;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    background-color: rgb(102, 173, 231);\r\n}\r\n.header{\r\n    display: flex;\r\n    background-color: steelblue;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    color: white;\r\n    justify-content: space-between;\r\n}\r\n.modal-header{\r\n    display: flex;\r\n    background-color: steelblue;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    color: white;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n}\r\n.modal-header-title{\r\n    margin-left: 50px;\r\n}\r\n.close{\r\n    font-size: 30px;\r\n    border: none;\r\n    background-color: inherit;\r\n    color: white;\r\n    width: 40px;\r\n    \r\n}\r\n\r\n.close:hover{\r\n    cursor: pointer;\r\n    color: rgb(226, 226, 226);\r\n}\r\nheader h1{\r\n    margin-left: 50px;\r\n}\r\n.new-task-wrapper{\r\n    display: flex;\r\n}\r\n#newTask{\r\n    font-size: 24px;\r\n    color: white;\r\n    border: none;\r\n    background-color:inherit;\r\n    width: 150px;\r\n}\r\n#newTask:hover{\r\n    border-bottom: 3px solid lightskyblue;\r\n    color: rgb(218, 218, 218);\r\n    cursor: pointer;\r\n}\r\n.projects-menu {\r\n    height: 100%;\r\n    width: 300px;\r\n    background-color: rgb(102, 173, 231);\r\n    border-right: 3px solid steelblue;\r\n\r\n}\r\n.pro{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: inherit;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    font-size: 16px;\r\n    color: white;\r\n    padding-left: 20px;\r\n    border: none;\r\n    border-left: 5px solid steelblue;\r\n    margin: 5px;\r\n    border-radius: 3px;\r\n}\r\n.pro:hover{\r\n    border-left: 5px solid rgb(84, 146, 196);\r\n    background-color: rgb(84, 146, 196);\r\n}\r\n.pro span {\r\n    visibility: hidden;\r\n}\r\n.active-project{\r\n    border-left: 5px solid rgb(84, 146, 196);\r\n    background-color: rgb(84, 146, 196);\r\n}\r\n.pro:hover span{\r\n    visibility: visible;\r\n}\r\n\r\n#deleteProject{\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    color: white;\r\n    border: 2px solid rgb(84, 146, 196);\r\n}\r\n\r\n#deleteProject:hover{\r\n    border-left: 2px solid lightskyblue;\r\n    border-bottom: 2px solid lightskyblue;\r\n}\r\n.home{\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    border-radius: 50px;\r\n    border: 3px solid lightskyblue;\r\n    background-color: inherit;\r\n    color: white;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}\r\n.home:hover{\r\n    cursor: pointer;\r\n    border: 3px solid white;\r\n    background-color: lightskyblue;\r\n    color: black;\r\n}\r\n.home:active{\r\n    transform: translateY(2px);\r\n}\r\n.home-menu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    border-bottom: 3px solid steelblue;\r\n    height: 150px;\r\n}\r\n\r\n\r\n.projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.all-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 430px;\r\n    overflow-y: auto;\r\n}\r\n\r\n#newProject {\r\n    /* this is just for looks now */\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.project-board{\r\n    display: flex;\r\n    margin: 40px;\r\n    gap: 20px;\r\n\r\n}\r\n.task-area{\r\n    display: flex;\r\n    gap: 20px;\r\n    height: 600px;\r\n    overflow-y: auto;\r\n    flex-direction: column;\r\n    background-color: rgb(240, 239, 239);\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    align-items: center;\r\n}\r\n.header-p{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    background-color: rgb(240, 239, 239);\r\n    padding: 5px;\r\n    width: 250px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n.task {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    font-size: 12px;\r\n    margin-top: 5px;\r\n    border: none;\r\n    background-color: white;\r\n    width: 90%;\r\n    padding: 20px;\r\n    text-align: left;\r\n    max-width: 225px;\r\n    overflow: overlay;\r\n    overflow-wrap: break-word;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 5px steelblue;\r\n}\r\n.task:hover{\r\n    background-color: rgb(247, 247, 247);\r\n    cursor: pointer;\r\n    box-shadow: 2px 2px 5px steelblue;\r\n}\r\n\r\n\r\n.title-input {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.project-form-input{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 90%;\r\n}\r\ninput[type=text]{\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n    border: 2px solid lightskyblue;\r\n    padding: 10px;\r\n    outline: none;\r\n}\r\n.submit-project{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n#createProject:hover{\r\n    background-color: lightskyblue;\r\n    border: 1px solid rgb(101, 196, 255);\r\n}\r\n#cancelProject:hover{\r\n    background-color: rgb(253, 223, 228);\r\n    border: 1px solid lightpink;\r\n}\r\n.new-project-button{\r\n    border: 1px solid lightskyblue;\r\n    background-color: white;\r\n    margin-top: 5px;\r\n    padding: 5px;\r\n    width: 120px;\r\n}\r\n\r\n.projectmodal input[type=text]{\r\n    font-size: 32px;\r\n    padding: 10px;\r\n    width: 90%;\r\n    height: 300px;\r\n    resize: none;\r\n}\r\n.project-modal {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: none;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n\r\n.modal-project-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 60%;\r\n    background-color: white;\r\n    margin: 10% auto;\r\n    height: 500px;\r\n}\r\n.title-input-modal{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#mTitle{\r\n    width: 95%;\r\n    border: none !important;\r\n    border-bottom: 1px solid steelblue !important;\r\n    border-right: 1px solid steelblue !important;\r\n    border-radius: 0px !important;\r\n    padding-left: 0px !important;\r\n}\r\n#taskDesc{\r\n    width: 95% !important;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    resize: none;\r\n    margin-top: 10px;\r\n    border: none;\r\n    outline: none;\r\n}\r\n.submit-task{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n#createTask{\r\n    height: 25px;\r\n    border: 1px solid steelblue;\r\n    border-right: none !important;\r\n    transition: width .2s;\r\n    font-size: 12px;\r\n}\r\n#createTask:hover{\r\n    width: 150px;\r\n\r\n}\r\n\r\n.date-box{\r\n    margin-top: 2px;\r\n    height: 25px;\r\n    padding-left: 20px;\r\n    border: 1px solid steelblue;\r\n    border-left: none !important;\r\n}\r\n\r\n#dueDate{\r\n    margin-left: 10px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border: none;\r\n    font-size: 16px;\r\n    border-left: 1px solid steelblue;\r\n    color: rgb(0, 0, 0);\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-task-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 60%;\r\n    background-color: white;\r\n    margin: 10% auto;\r\n    height: 500px;\r\n}\r\n.task-desc{\r\n   padding-left: 20px;\r\n   height:300px;\r\n   width: 100%;\r\n}\r\n\r\n.status-buttons{\r\n    display: flex;\r\n    padding-left: 15px;\r\n    gap: 15px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.status-buttons button{\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    padding-bottom: 10px;\r\n    border: none;\r\n    border-bottom: 3px solid steelblue;\r\n    background-color: white;\r\n    transition: padding .5s;\r\n}\r\n.status-buttons button:hover {\r\n    cursor: pointer;\r\n    padding-right: 20px !important;\r\n    padding-left:  20px !important;\r\n\r\n}\r\n.active-task{\r\n    padding-left: 25px !important;\r\n    padding-right: 25px !important;\r\n    background-color: rgb(255, 239, 188) !important;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.confirm{\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    border: none;\r\n    background-color: white;\r\n    margin-left: auto;\r\n    border-bottom: 2px solid steelblue;\r\n    border-left: 2px solid steelblue;\r\n}\r\n\r\n.confirm:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.projectHomeMenu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n    justify-content: center;\r\n    gap: 20px;\r\n\r\n}\r\n\r\n.projectHome {\r\n    display: flex;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    align-items: center;\r\n    font-size: 24px;\r\n    margin-top: 25px;\r\n    margin-left: 50px;\r\n    width: 600px;\r\n    height: 50px;\r\n    background-color: inherit;\r\n    color: white;\r\n    border: 3px solid lightskyblue;\r\n    border-radius: 25px;\r\n\r\n}\r\n.taskNumber {\r\n    margin-left: auto;\r\n    border: 3px solid lightskyblue;\r\n    padding: 3px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    border-radius: 50px;\r\n}\r\n.task-footer{\r\n    display: flex;\r\n    padding: 10px;\r\n    background-color: rgb(255, 168, 181);\r\n    height: 100%;\r\n    justify-content: center;\r\n}\r\n.task-footer button{\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: inherit;\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\n.dueSoon {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border-bottom: 2px solid steelblue;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.content-wrapper{\r\n    display: flex;\r\n\r\n}\r\n\r\n.flex-wrapper{\r\n    display: flex;\r\n    flex: 1 0 auto;\r\n}\r\n.footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    background-color: steelblue;\r\n    color: white;\r\n}\r\n@keyframes bounce{\r\n    from {transform: translateY(0px)}\r\n    to {transform: translateY(-5px)}\r\n}\r\n\r\n.footer i{\r\n    padding-left: 5px;\r\n    text-decoration: none;\r\n    color: lightskyblue;\r\n    font-size: 26px;\r\n}\r\n.footer i:hover {\r\n    font-size: 26px;\r\n    animation: bounce .3s infinite alternate;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nbody {\r\n    display: flex;\r\n    font-family: 'Open Sans', sans-serif;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    background-color: rgb(102, 173, 231);\r\n}\r\n.header{\r\n    display: flex;\r\n    background-color: steelblue;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    color: white;\r\n    justify-content: space-between;\r\n}\r\n.modal-header{\r\n    display: flex;\r\n    background-color: steelblue;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    color: white;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n}\r\n.modal-header-title{\r\n    margin-left: 50px;\r\n}\r\n.close{\r\n    font-size: 30px;\r\n    border: none;\r\n    background-color: inherit;\r\n    color: white;\r\n    width: 40px;\r\n    \r\n}\r\n\r\n.close:hover{\r\n    cursor: pointer;\r\n    color: rgb(226, 226, 226);\r\n}\r\nheader h1{\r\n    margin-left: 50px;\r\n}\r\n.new-task-wrapper{\r\n    display: flex;\r\n}\r\n#newTask{\r\n    font-size: 24px;\r\n    color: white;\r\n    border: none;\r\n    background-color:inherit;\r\n    width: 150px;\r\n}\r\n#newTask:hover{\r\n    border-bottom: 3px solid lightskyblue;\r\n    color: rgb(218, 218, 218);\r\n    cursor: pointer;\r\n}\r\n.projects-menu {\r\n    height: 100%;\r\n    width: 300px;\r\n    background-color: rgb(102, 173, 231);\r\n    border-right: 3px solid steelblue;\r\n\r\n}\r\n.pro{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: inherit;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    font-size: 16px;\r\n    color: white;\r\n    padding-left: 20px;\r\n    border: none;\r\n    border-left: 5px solid steelblue;\r\n    margin: 5px;\r\n    border-radius: 3px;\r\n}\r\n.pro:hover{\r\n    border-left: 5px solid rgb(84, 146, 196);\r\n    background-color: rgb(84, 146, 196);\r\n}\r\n.pro span {\r\n    visibility: hidden;\r\n}\r\n.active-project{\r\n    border-left: 5px solid rgb(84, 146, 196);\r\n    background-color: rgb(84, 146, 196);\r\n}\r\n.pro:hover span{\r\n    visibility: visible;\r\n}\r\n\r\n#deleteProject{\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    color: white;\r\n    border: 2px solid rgb(84, 146, 196);\r\n}\r\n\r\n#deleteProject:hover{\r\n    border-left: 2px solid lightskyblue;\r\n    border-bottom: 2px solid lightskyblue;\r\n}\r\n.home{\r\n    font-size: 16px;\r\n    padding: 10px;\r\n    border-radius: 50px;\r\n    border: 3px solid lightskyblue;\r\n    background-color: inherit;\r\n    color: white;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}\r\n.home:hover{\r\n    cursor: pointer;\r\n    border: 3px solid white;\r\n    background-color: lightskyblue;\r\n    color: black;\r\n}\r\n.home:active{\r\n    transform: translateY(2px);\r\n}\r\n.home-menu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    border-bottom: 3px solid steelblue;\r\n    height: 150px;\r\n}\r\n\r\n\r\n.projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.all-projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 430px;\r\n    overflow-y: auto;\r\n}\r\n\r\n#newProject {\r\n    /* this is just for looks now */\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.project-board{\r\n    display: flex;\r\n    margin: 40px;\r\n    gap: 20px;\r\n\r\n}\r\n.task-area{\r\n    display: flex;\r\n    gap: 20px;\r\n    height: 600px;\r\n    overflow-y: auto;\r\n    flex-direction: column;\r\n    background-color: rgb(240, 239, 239);\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    align-items: center;\r\n}\r\n.header-p{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    background-color: rgb(240, 239, 239);\r\n    padding: 5px;\r\n    width: 250px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n.task {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    font-size: 12px;\r\n    margin-top: 5px;\r\n    border: none;\r\n    background-color: white;\r\n    width: 90%;\r\n    padding: 20px;\r\n    text-align: left;\r\n    max-width: 225px;\r\n    overflow: overlay;\r\n    overflow-wrap: break-word;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 5px steelblue;\r\n}\r\n.task:hover{\r\n    background-color: rgb(247, 247, 247);\r\n    cursor: pointer;\r\n    box-shadow: 2px 2px 5px steelblue;\r\n}\r\n\r\n\r\n.title-input {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.project-form-input{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 90%;\r\n}\r\ninput[type=text]{\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n    border: 2px solid lightskyblue;\r\n    padding: 10px;\r\n    outline: none;\r\n}\r\n.submit-project{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n#createProject:hover{\r\n    background-color: lightskyblue;\r\n    border: 1px solid rgb(101, 196, 255);\r\n}\r\n#cancelProject:hover{\r\n    background-color: rgb(253, 223, 228);\r\n    border: 1px solid lightpink;\r\n}\r\n.new-project-button{\r\n    border: 1px solid lightskyblue;\r\n    background-color: white;\r\n    margin-top: 5px;\r\n    padding: 5px;\r\n    width: 120px;\r\n}\r\n\r\n.projectmodal input[type=text]{\r\n    font-size: 32px;\r\n    padding: 10px;\r\n    width: 90%;\r\n    height: 300px;\r\n    resize: none;\r\n}\r\n.project-modal {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: none;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n\r\n.modal-project-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 60%;\r\n    background-color: white;\r\n    margin: 10% auto;\r\n    height: 500px;\r\n}\r\n.title-input-modal{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#mTitle{\r\n    width: 95%;\r\n    border: none !important;\r\n    border-bottom: 1px solid steelblue !important;\r\n    border-right: 1px solid steelblue !important;\r\n    border-radius: 0px !important;\r\n    padding-left: 0px !important;\r\n}\r\n#taskDesc{\r\n    width: 95% !important;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    resize: none;\r\n    margin-top: 10px;\r\n    border: none;\r\n    outline: none;\r\n}\r\n.submit-task{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n#createTask{\r\n    height: 25px;\r\n    border: 1px solid steelblue;\r\n    border-right: none !important;\r\n    transition: width .2s;\r\n    font-size: 12px;\r\n}\r\n#createTask:hover{\r\n    width: 150px;\r\n\r\n}\r\n\r\n.date-box{\r\n    margin-top: 2px;\r\n    height: 25px;\r\n    padding-left: 20px;\r\n    border: 1px solid steelblue;\r\n    border-left: none !important;\r\n}\r\n\r\n#dueDate{\r\n    margin-left: 10px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border: none;\r\n    font-size: 16px;\r\n    border-left: 1px solid steelblue;\r\n    color: rgb(0, 0, 0);\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-task-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 60%;\r\n    background-color: white;\r\n    margin: 10% auto;\r\n    height: 500px;\r\n}\r\n.task-desc{\r\n   padding-left: 20px;\r\n   height:300px;\r\n   width: 100%;\r\n}\r\n\r\n.status-buttons{\r\n    display: flex;\r\n    padding-left: 15px;\r\n    gap: 15px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.status-buttons button{\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    padding-bottom: 10px;\r\n    border: none;\r\n    border-bottom: 3px solid steelblue;\r\n    background-color: white;\r\n    transition: padding .5s;\r\n}\r\n.status-buttons button:hover {\r\n    cursor: pointer;\r\n    padding-right: 20px !important;\r\n    padding-left:  20px !important;\r\n\r\n}\r\n.active-task{\r\n    padding-left: 25px !important;\r\n    padding-right: 25px !important;\r\n    background-color: rgb(255, 239, 188) !important;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.confirm{\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    border: none;\r\n    background-color: white;\r\n    margin-left: auto;\r\n    border-bottom: 2px solid steelblue;\r\n    border-left: 2px solid steelblue;\r\n}\r\n\r\n.confirm:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.projectHomeMenu{\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n    justify-content: center;\r\n    gap: 20px;\r\n\r\n}\r\n\r\n.projectHome {\r\n    display: flex;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    align-items: center;\r\n    font-size: 24px;\r\n    margin-top: 25px;\r\n    margin-left: 50px;\r\n    width: 600px;\r\n    height: 50px;\r\n    background-color: inherit;\r\n    color: white;\r\n    border: 3px solid lightskyblue;\r\n    border-radius: 25px;\r\n\r\n}\r\n.taskNumber {\r\n    margin-left: auto;\r\n    border: 3px solid lightskyblue;\r\n    padding: 3px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    border-radius: 50px;\r\n}\r\n.task-footer{\r\n    display: flex;\r\n    padding: 10px;\r\n    background-color: rgb(255, 168, 181);\r\n    height: 100%;\r\n    justify-content: center;\r\n}\r\n.task-footer button{\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: inherit;\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\n.dueSoon {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border-bottom: 2px solid steelblue;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.content-wrapper{\r\n    display: flex;\r\n\r\n}\r\n\r\n.flex-wrapper{\r\n    display: flex;\r\n    flex: 1 0 auto;\r\n}\r\n.footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    background-color: steelblue;\r\n    color: white;\r\n}\r\n@keyframes bounce{\r\n    from {transform: translateY(0px)}\r\n    to {transform: translateY(-5px)}\r\n}\r\n\r\n.footer i{\r\n    padding-left: 5px;\r\n    text-decoration: none;\r\n    color: lightskyblue;\r\n    font-size: 26px;\r\n}\r\n.footer i:hover {\r\n    font-size: 26px;\r\n    animation: bounce .3s infinite alternate;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");




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
function makeTaskBtn(name, status, date) {

    status = getStatusID(status);
    let task = document.createElement('button');

    task.setAttribute('id', name);
    task.classList.add('task');
    task.textContent = name;
    task.addEventListener('click', () => {
        displayTaskInfo(task);
    });
    status.appendChild(task);
    displayIfDueSoon(name, date, status);
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

function displayIfDueSoon(name, date, status) {
    if(date < 7) {       
        let taskDiv = document.getElementById(name);
        
        let dueDate = document.createElement('p');
        if(date === 0) {
            dueDate.innerText = `Due Today!!!`;
        }
        else if(date === 1) {
            dueDate.innerText = `Due Tommorow!`;
        }
        else if(date < 0) {
            dueDate.innerText = `Past due :[`;
        }
        else {
            dueDate.innerText = `Due in ${date} days!`;
        }
        if(status === 'Completed') {
            dueDate.innerText = '';
        }
        
        taskDiv.appendChild(dueDate);

    }
}

function displayProjectsTasks() {    
        let activeProject = returnProject();
        if(activeProject.Tasks.length === undefined) {
            return
        }
        for(let j = 0; j < activeProject.Tasks.length; j++) {
            let currentTask = activeProject.Tasks[j];
            makeTaskBtn(currentTask.Name, currentTask.Status, currentTask.IsDueSoon);
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
    task.IsDueSoon = task.checkIfDueSoon((0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_2__["default"])(due.value), new Date());
    task.Status = taskStatus();

}

function updateTask(task, e) {
    let oldButtonID = e.id;
    e.remove();
    updateTaskObject(task);
    makeTaskBtn(oldButtonID, task.Status);
    displayIfDueSoon(task.Name, task.IsDueSoon, task.Status);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFV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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RId0Y7QUFDL0M7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFRO0FBQ1osSUFBSSx3REFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQ0FBcUM7QUFDNUQ7QUFDQSxZQUFZLG1EQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBLFlBQVksZ0RBQVE7QUFDcEI7QUFDQTtBQUNBOzs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fucyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNzMsIDIzMSk7XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm1vZGFsLWhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG4ubW9kYWwtaGVhZGVyLXRpdGxle1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG59XFxyXFxuLmNsb3Nle1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xcclxcbn1cXHJcXG5oZWFkZXIgaDF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbn1cXHJcXG4ubmV3LXRhc2std3JhcHBlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuI25ld1Rhc2t7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG4jbmV3VGFzazpob3ZlcntcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdHMtbWVudSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNzMsIDIzMSk7XFxyXFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG5cXHJcXG59XFxyXFxuLnByb3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcbi5wcm86aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbn1cXHJcXG4ucHJvIHNwYW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbi5hY3RpdmUtcHJvamVjdHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxufVxcclxcbi5wcm86aG92ZXIgc3BhbntcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZVByb2plY3R7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZVByb2plY3Q6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRza3libHVlO1xcclxcbn1cXHJcXG4uaG9tZXtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5ob21lOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLmhvbWU6YWN0aXZle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XFxyXFxuLmhvbWUtbWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5hbGwtcHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogNDMwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNuZXdQcm9qZWN0IHtcXHJcXG4gICAgLyogdGhpcyBpcyBqdXN0IGZvciBsb29rcyBub3cgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtYm9hcmR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbjogNDBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcblxcclxcbn1cXHJcXG4udGFzay1hcmVhe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOSwgMjM5KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyLXB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOSwgMjM5KTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIG1heC13aWR0aDogMjI1cHg7XFxyXFxuICAgIG92ZXJmbG93OiBvdmVybGF5O1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHN0ZWVsYmx1ZTtcXHJcXG59XFxyXFxuLnRhc2s6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBzdGVlbGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aXRsZS1pbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0taW5wdXR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5zdWJtaXQtcHJvamVjdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4jY3JlYXRlUHJvamVjdDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAxLCAxOTYsIDI1NSk7XFxyXFxufVxcclxcbiNjYW5jZWxQcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyMjMsIDIyOCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0cGluaztcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Rtb2RhbCBpbnB1dFt0eXBlPXRleHRde1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuLnByb2plY3QtbW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbC1wcm9qZWN0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG4udGl0bGUtaW5wdXQtbW9kYWx7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNtVGl0bGV7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc3RlZWxibHVlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHN0ZWVsYmx1ZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuI3Rhc2tEZXNje1xcclxcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnN1Ym1pdC10YXNre1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiNjcmVhdGVUYXNre1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycztcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG4jY3JlYXRlVGFzazpob3ZlcntcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1ib3h7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2R1ZURhdGV7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtdGFzay1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMTAlIGF1dG87XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcbi50YXNrLWRlc2N7XFxyXFxuICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgIGhlaWdodDozMDBweDtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1cy1idXR0b25ze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG4uc3RhdHVzLWJ1dHRvbnMgYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIC41cztcXHJcXG59XFxyXFxuLnN0YXR1cy1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6ICAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxufVxcclxcbi5hY3RpdmUtdGFza3tcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM5LCAxODgpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm17XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgc3RlZWxibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RIb21lTWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RIb21lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFxyXFxufVxcclxcbi50YXNrTnVtYmVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxufVxcclxcbi50YXNrLWZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY4LCAxODEpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzay1mb290ZXIgYnV0dG9ue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kdWVTb29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5jb250ZW50LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5mbGV4LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBib3VuY2V7XFxyXFxuICAgIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpfVxcclxcbiAgICB0byB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGl7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG59XFxyXFxuLmZvb3RlciBpOmhvdmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBhbmltYXRpb246IGJvdW5jZSAuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXOztBQUVmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxpQ0FBaUM7O0FBRXJDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hD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dCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fucyk7XFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDE3MywgMjMxKTtcXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ubW9kYWwtaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcbi5tb2RhbC1oZWFkZXItdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbn1cXHJcXG4uY2xvc2V7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XFxyXFxufVxcclxcbmhlYWRlciBoMXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxufVxcclxcbi5uZXctdGFzay13cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4jbmV3VGFza3tcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxufVxcclxcbiNuZXdUYXNrOmhvdmVye1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBjb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0cy1tZW51IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDE3MywgMjMxKTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgc3RlZWxibHVlO1xcclxcblxcclxcbn1cXHJcXG4ucHJve1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuLnBybzpob3ZlcntcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxufVxcclxcbi5wcm8gc3BhbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmFjdGl2ZS1wcm9qZWN0e1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG59XFxyXFxuLnBybzpob3ZlciBzcGFue1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlUHJvamVjdHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlUHJvamVjdDpob3ZlcntcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxufVxcclxcbi5ob21le1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLmhvbWU6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4uaG9tZTphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG4uaG9tZS1tZW51e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1wcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiA0MzBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI25ld1Byb2plY3Qge1xcclxcbiAgICAvKiB0aGlzIGlzIGp1c3QgZm9yIGxvb2tzIG5vdyAqL1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1ib2FyZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiA0MHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxufVxcclxcbi50YXNrLWFyZWF7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM5LCAyMzkpO1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXItcHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM5LCAyMzkpO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcXHJcXG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggc3RlZWxibHVlO1xcclxcbn1cXHJcXG4udGFzazpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHN0ZWVsYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpdGxlLWlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZm9ybS1pbnB1dHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT10ZXh0XXtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnN1Ym1pdC1wcm9qZWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbiNjcmVhdGVQcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDEsIDE5NiwgMjU1KTtcXHJcXG59XFxyXFxuI2NhbmNlbFByb2plY3Q6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDIyMywgMjI4KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRwaW5rO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtYnV0dG9ue1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdG1vZGFsIGlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG4ucHJvamVjdC1tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsLXByb2plY3QtY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMTAlIGF1dG87XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcbi50aXRsZS1pbnB1dC1tb2RhbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuI21UaXRsZXtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzdGVlbGJsdWUgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgc3RlZWxibHVlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4jdGFza0Rlc2N7XFxyXFxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4uc3VibWl0LXRhc2t7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI2NyZWF0ZVRhc2t7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjJzO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcbiNjcmVhdGVUYXNrOmhvdmVye1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5kYXRlLWJveHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZHVlRGF0ZXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5tb2RhbC10YXNrLWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGJsYWNrO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuLnRhc2stZGVzY3tcXHJcXG4gICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgaGVpZ2h0OjMwMHB4O1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdHVzLWJ1dHRvbnN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcbi5zdGF0dXMtYnV0dG9ucyBidXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgLjVzO1xcclxcbn1cXHJcXG4uc3RhdHVzLWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogIDIwcHggIWltcG9ydGFudDtcXHJcXG5cXHJcXG59XFxyXFxuLmFjdGl2ZS10YXNre1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzksIDE4OCkgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybXtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdEhvbWVNZW51e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEhvbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG5cXHJcXG59XFxyXFxuLnRhc2tOdW1iZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuLnRhc2stZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjgsIDE4MSk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrLWZvb3RlciBidXR0b257XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZVNvb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRlbnQtd3JhcHBlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtd3JhcHBlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGJvdW5jZXtcXHJcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCl9XFxyXFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCl9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgaXtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbn1cXHJcXG4uZm9vdGVyIGk6aG92ZXIge1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDsiLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBwcmV2aW91cyBgcGFyc2VgIGltcGxlbWVudGF0aW9uIHdhcyByZW5hbWVkIHRvIGBwYXJzZUlTT2AuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgcGFyc2UoJzIwMTYtMDEtMDEnKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBwYXJzZUlTTygnMjAxNi0wMS0wMScpXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgdmFsaWRhdGVzIHNlcGFyYXRlIGRhdGUgYW5kIHRpbWUgdmFsdWVzIGluIElTTy04NjAxIHN0cmluZ3NcbiAqICAgYW5kIHJldHVybnMgYEludmFsaWQgRGF0ZWAgaWYgdGhlIGRhdGUgaXMgaW52YWxpZC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgcGFyc2VJU08oJzIwMTgtMTMtMzInKVxuICogICAvLz0+IEludmFsaWQgRGF0ZVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IGRvZXNuJ3QgZmFsbCBiYWNrIHRvIGBuZXcgRGF0ZWAgY29uc3RydWN0b3JcbiAqICAgaWYgaXQgZmFpbHMgdG8gcGFyc2UgYSBzdHJpbmcgYXJndW1lbnQuIEluc3RlYWQsIGl0IHJldHVybnMgYEludmFsaWQgRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzID09IG51bGwgPyAyIDogdG9JbnRlZ2VyKG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyk7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZXMsIGlkIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xyXG5pbXBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn0gZnJvbSBcIi4vaW5kZXhcIlxyXG5pbXBvcnQge3NhdmVUYXNrbWFzdGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCBwYXJzZUlTTyBmcm9tIFwiZGF0ZS1mbnMvcGFyc2VJU09cIjtcclxuZnVuY3Rpb24gaG9tZUJ0bigpIHtcclxuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKTtcclxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlSG9tZU1lbnUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclRhc2tVSSgpIHtcclxuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tVSScpO1xyXG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSAnJztcclxuXHJcblxyXG4gICAgbGV0IHRhc2tCdG5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXdyYXBwZXInKTtcclxuICAgIHRhc2tCdG5XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XHJcbiAgICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcclxuICAgIGxldCBwcm9qZWN0Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Wm9uZScpO1xyXG4gICAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dFwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwVGl0bGVcIiBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhlIHRpdGxlIG9mIHRoZSBQcm9qZWN0P1wiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjQwXCIgPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtcHJvamVjdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNyZWF0ZVByb2plY3RcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNSRUFURSBQUk9KRUNUPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsUHJvamVjdFwiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q0FOQ0VMPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+YDtcclxuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBuZXdQcm9qZWN0Qm94VUkocHJvamVjdFpvbmUsIG5ld0J0bik7XHJcbiAgICAgICAgbGV0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlQnRuKTtcclxuICAgICAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRQcm9qZWN0KTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0Qm94VUkocHJvamVjdFpvbmUsIG5ld0J0bikge1xyXG4gICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxQcm9qZWN0Jyk7XHJcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdFpvbmUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VQcm9qZWN0QnRuKG5hbWUpe1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XHJcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3BybycpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuICAgIHByb2plY3QuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQobWFrZURlbGV0ZVByb2plY3RCdXR0b24ocHJvamVjdCkpO1xyXG4gICAgXHJcblxyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtYWtlVGFza1VJKCk7XHJcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICBkaXNwbGF5UHJvamVjdHNUYXNrcygpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcbmZ1bmN0aW9uIG1ha2VEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcclxuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVQcm9qZWN0Jyk7XHJcbiAgICBkZWxldGVCdG4uaW5uZXJUZXh0ID0gJ1gnO1xyXG5cclxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0LCBlKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRlbGV0ZUJ0bjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0LCBlKSB7XHJcbiAgICB0YXNrTWFzdGVyLmRlbGV0ZVByb2plY3QocmV0dXJuUHJvamVjdFRvRGVsZXRlKHByb2plY3QpKTtcclxuICAgIHByb2plY3QucmVtb3ZlKCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY2xlYXJUYXNrVUkoKTtcclxuICAgIHNhdmVUYXNrbWFzdGVyKCk7XHJcbiAgICBpZihyZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBtYWtlQW5kRGlzcGxheVRhc2tzKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXByb2plY3QnKSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xyXG59XHJcbmZ1bmN0aW9uIHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHdyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtcHJvamVjdCcpKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gd3JhcHBlci5jaGlsZHJlbltpXS5pZDtcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdCgpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYodGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lLnRyaW0oKSA9PT0gcmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSkge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZXR1cm5Qcm9qZWN0VG9EZWxldGUocHJvamVjdCkge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUudHJpbSgpID09PSBwcm9qZWN0LmlkKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCgpIHtcclxuICAgIGxldCBwcm9qZWN0Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Wm9uZScpO1xyXG4gICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncFRpdGxlJyk7XHJcbiAgICBcclxuICAgIGlmKHByb2plY3ROYW1lLnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJOYW1lIENhbid0IEJlIEJsYW5rIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnUHJvamVjdCBBbHJlYWR5IEV4aXN0cyEnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYWtlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XHJcbiAgICAgICAgbWFrZVByb2plY3RCdG4ocHJvamVjdE5hbWUudmFsdWUpO1xyXG4gICAgICAgIHNhdmVUYXNrbWFzdGVyKCk7XHJcbiAgICAgICAgcHJvamVjdFpvbmUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG59IFxyXG5cclxuZnVuY3Rpb24gbWFrZVRhc2tVSSgpIHtcclxuICAgIGNsZWFyVGFza1VJKCk7XHJcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVUknKTtcclxuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gXHJcbiAgICBgPGRpdiBjbGFzcz1cInByb2plY3QtYm9hcmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwMVwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5sb3ctcHJpb3JpdHk8L3A+XHJcbiAgICAgICAgPGRpdiBpZD1cImxvdy1wcmlvXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5pbi1wcm9ncmVzczwvcD5cclxuICAgICAgICA8ZGl2IGlkID0gXCJpbi1wcm9cIiBjbGFzcz1cInRhc2stYXJlYVwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInAzXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmNvbXBsZXRlZDwvcD5cclxuICAgICAgICA8ZGl2IGlkPVwiY29tcGxldGVcIiBjbGFzcz1cInRhc2stYXJlYVwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuLy8gcHJvYmFibHkgcHV0IGEgZnVuY3Rpb24gaGVyZSB0aGF0IGxvYWRzIGluIGVhY2ggaW5kaXZpZHVhbCB0YXNrIHRoYXRzIGluIHRoZSBwcm9qZWN0XHJcblxyXG4gICAgbWFrZU5ld1Rhc2tCdG4oKTtcclxufVxyXG5mdW5jdGlvbiBtYWtlTmV3VGFza0J0bigpIHtcclxuICAgIGxldCB0YXNrQnRuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay13cmFwcGVyJyk7XHJcbiAgICBsZXQgdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2snKTtcclxuICAgIHRhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xyXG5cclxuICAgIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrQnRuTW9kYWwpO1xyXG4gICAgdGFza0J0bldyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0J0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdG5Nb2RhbCgpIHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJtb2RhbElEXCIgY2xhc3M9XCJwcm9qZWN0LW1vZGFsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcHJvamVjdC1jb250ZW50XCI+XHJcblxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+VGFzayBJbmZvPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZU1vZGFsXCIgY2xhc3M9XCJjbG9zZVwiPlg8L2J1dHRvbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dC1tb2RhbFwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0LW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1UaXRsZVwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgdGl0bGUgb2YgdGhlIHRhc2s/XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiNDBcIiA+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0YXNrRGVzY1wiIHBsYWNlaG9sZGVyPVwiVGFzayBkZXNjcmlwdGlvblwiIHJvd3M9XCIxNVwiIG1heGxlbmd0aD1cIjIwMFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXRhc2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZS1EYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgbmFtZT1cImR1ZS1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY3JlYXRlVGFza1wiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q1JFQVRFIFRBU0s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcclxuICAgIGRhdGUudmFsdWUgPScyMDIyLTEyLTMxJztcclxuICAgIFRhc2tCdG5Nb2RhbExvZ2ljKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBUYXNrQnRuTW9kYWxMb2dpYygpIHtcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcclxuICAgIFxyXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVUYXNrJyk7XHJcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRUYXNrKTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZVRhc2tNb2RhbCgpIHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjJykudmFsdWU7XHJcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbVRpdGxlJyk7XHJcbiAgICBpZih0YXNrTmFtZS52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiVGl0bGUgQ2FuJ3QgQmUgQmxhbmshXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCB0YXNrTmFtZS52YWx1ZSwgZGF0ZS52YWx1ZSwgcmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSwgXCJMb3dQcmlvcml0eVwiKTtcclxuICAgIHNhdmVUYXNrbWFzdGVyKCk7XHJcbiAgICBtYWtlVGFza0J0bih0YXNrTmFtZS52YWx1ZSwgXCJMb3dQcmlvcml0eVwiKTtcclxuICAgIGNsb3NlVGFza01vZGFsKCk7XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuQ3VyclRhc2socHJvamVjdCwgbmFtZSkge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QuVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdGFzayA9IHByb2plY3QuVGFza3NbaV07XHJcbiAgICAgICAgaWYodGFzay5OYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1ha2VUYXNrQnRuKG5hbWUsIHN0YXR1cywgZGF0ZSkge1xyXG5cclxuICAgIHN0YXR1cyA9IGdldFN0YXR1c0lEKHN0YXR1cyk7XHJcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICB0YXNrLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheVRhc2tJbmZvKHRhc2spO1xyXG4gICAgfSk7XHJcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICBkaXNwbGF5SWZEdWVTb29uKG5hbWUsIGRhdGUsIHN0YXR1cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXR1c0lEKHN0YXR1cykge1xyXG4gICAgaWYoc3RhdHVzID09PSBcIkxvd1ByaW9yaXR5XCIpIHtcclxuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG93LXByaW8nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RhdHVzID09PSBcIkluUHJvZ3Jlc3NcIil7XHJcbiAgICAgICAgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luLXBybycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzdGF0dXMgPT09IFwiQ29tcGxldGVkXCIpe1xyXG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXR1cztcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUlmRHVlU29vbihuYW1lLCBkYXRlLCBzdGF0dXMpIHtcclxuICAgIGlmKGRhdGUgPCA3KSB7ICAgICAgIFxyXG4gICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaWYoZGF0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGBEdWUgVG9kYXkhISFgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGRhdGUgPT09IDEpIHtcclxuICAgICAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlIFRvbW1vcm93IWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZGF0ZSA8IDApIHtcclxuICAgICAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSBgUGFzdCBkdWUgOltgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlIGluICR7ZGF0ZX0gZGF5cyFgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzdGF0dXMgPT09ICdDb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHNUYXNrcygpIHsgICAgXHJcbiAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSByZXR1cm5Qcm9qZWN0KCk7XHJcbiAgICAgICAgaWYoYWN0aXZlUHJvamVjdC5UYXNrcy5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGFjdGl2ZVByb2plY3QuVGFza3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gYWN0aXZlUHJvamVjdC5UYXNrc1tqXTtcclxuICAgICAgICAgICAgbWFrZVRhc2tCdG4oY3VycmVudFRhc2suTmFtZSwgY3VycmVudFRhc2suU3RhdHVzLCBjdXJyZW50VGFzay5Jc0R1ZVNvb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrSW5mbyhlKSB7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIG1vZGFsLmlubmVySFRNTCA9XHJcbiAgICBgPGRpdiBpZD1cIm1vZGFsSURcIiBjbGFzcz1cInByb2plY3QtbW9kYWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10YXNrLWNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8aDIgaWQ9XCJ0YXNrVGl0bGVcIiBjbGFzcz1cIm1vZGFsLWhlYWRlci10aXRsZVwiPjwvaDE+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2VNb2RhbFwiIGNsYXNzPVwiY2xvc2VcIj5YPC9idXR0b24+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJpbnB1dFwiIGNsYXNzPVwidGl0bGUtaW5wdXQtbW9kYWxcIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1pbnB1dC1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NcIiBpZD1cInRhc2tEZXNjXCI+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC10YXNrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZS1EYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiPiA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGF0QnRuXCIgY2xhc3M9XCJzdGF0dXMtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImxvd1wiPkxvdyBQcmlvcml0eTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImluXCI+SW4tUHJvZ3Jlc3M8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjb21wXCI+Q29tcGxldGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY29uZmlybUNoYW5nZXNcIiBjbGFzcz1cImNvbmZpcm1cIj5DT05GSVJNIENIQU5HRVM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzcz1cInRhc2stZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVsZXRlVGFza1wiPkRFTEVURSBUQVNLITwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiBgO1xyXG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWwnKTtcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xyXG5cclxuICAgIFxyXG5cclxuICAgIGxldCBwYXJlbnRQcm9qZWN0ID0gcmV0dXJuUHJvamVjdCgpO1xyXG5cclxuICAgIGxldCB0YXNrID0gcmV0dXJuQ3VyclRhc2socGFyZW50UHJvamVjdCwgZS5pZCk7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay5OYW1lO1xyXG5cclxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjJyk7XHJcbiAgICBkZXNjLmlubmVyVGV4dCA9IHRhc2suRGVzY3JpcHRpb247XHJcbiAgICBpZihkZXNjLmlubmVyVGV4dCA9PT0gXCJcIikge1xyXG4gICAgICAgIGRlc2MuaW5uZXJUZXh0ID0gXCI6XVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xyXG4gICAgZHVlLnZhbHVlID0gdGFzay5EYXRlO1xyXG5cclxuICAgIGxldCBzdGF0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRCdG4nKTtcclxuICAgIFxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGF0QnRuLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3RhdEJ0bi5jaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0U3RhdHVzKHN0YXRCdG4sIHN0YXRCdG4uY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYodGFzay5TdGF0dXMgPT09IFwiTG93UHJpb3JpdHlcIikge1xyXG4gICAgICAgICAgICBzdGF0QnRuLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGFzay5TdGF0dXMgPT09IFwiSW5Qcm9ncmVzc1wiKSB7XHJcbiAgICAgICAgICAgIHN0YXRCdG4uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0YXNrLlN0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIikge1xyXG4gICAgICAgICAgICBzdGF0QnRuLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlVGFzaycpO1xyXG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVRhc2socGFyZW50UHJvamVjdCwgdGFzaywgZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1DaGFuZ2VzJyk7XHJcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlVGFzayh0YXNrLCBlKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hsaWdodFN0YXR1cyhzdGF0dXNXcmFwcGVyLCBzdGF0QnRuKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdHVzV3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHN0YXR1c1dyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFzaycpKSB7XHJcbiAgICAgICAgICAgIHN0YXR1c1dyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhc2snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrLCBlKSB7XHJcbiAgICBlLnJlbW92ZSgpO1xyXG4gICAgY2xvc2VUYXNrTW9kYWwoKTtcclxuICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrKTtcclxuICAgIHNhdmVUYXNrbWFzdGVyKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrT2JqZWN0KHRhc2spIHtcclxuICAgIGxldCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xyXG4gICAgdGFzay5EYXRlID0gZHVlLnZhbHVlO1xyXG4gICAgdGFzay5Jc0R1ZVNvb24gPSB0YXNrLmNoZWNrSWZEdWVTb29uKHBhcnNlSVNPKGR1ZS52YWx1ZSksIG5ldyBEYXRlKCkpO1xyXG4gICAgdGFzay5TdGF0dXMgPSB0YXNrU3RhdHVzKCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrKHRhc2ssIGUpIHtcclxuICAgIGxldCBvbGRCdXR0b25JRCA9IGUuaWQ7XHJcbiAgICBlLnJlbW92ZSgpO1xyXG4gICAgdXBkYXRlVGFza09iamVjdCh0YXNrKTtcclxuICAgIG1ha2VUYXNrQnRuKG9sZEJ1dHRvbklELCB0YXNrLlN0YXR1cyk7XHJcbiAgICBkaXNwbGF5SWZEdWVTb29uKHRhc2suTmFtZSwgdGFzay5Jc0R1ZVNvb24sIHRhc2suU3RhdHVzKTtcclxuICAgIGNsb3NlVGFza01vZGFsKCk7XHJcbiAgICBzYXZlVGFza21hc3RlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrU3RhdHVzKCkge1xyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvdycpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhc2snKSkge1xyXG4gICAgICAgIHJldHVybiBcIkxvd1ByaW9yaXR5XCI7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcclxuICAgICAgICByZXR1cm4gXCJJblByb2dyZXNzXCI7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcCcpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhc2snKSkge1xyXG4gICAgICAgIHJldHVybiBcIkNvbXBsZXRlZFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlQW5kRGlzcGxheVRhc2tzKCkge1xyXG4gICAgbWFrZVRhc2tVSSgpO1xyXG4gICAgZGlzcGxheVByb2plY3RzVGFza3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFByb2plY3RzT25Cb290KCkge1xyXG4gICAgaWYgKHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbWFrZVByb2plY3RCdG4odGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VIb21lTWVudSgpIHtcclxuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tVSScpO1xyXG4gICAgY2xlYXJUYXNrVUkoKTtcclxuXHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SG9tZU1lbnUnKTtcclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQobWVudSlcclxuXHJcbiAgICBpZiAodGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBsZXQgbm9Qcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgbm9Qcm9qZWN0cy50ZXh0Q29udGVudCA9ICdOTyBQUk9KRUNUUyEgTUFZQkUgQ1JFQVRFIE9ORT8nO1xyXG5cclxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKG5vUHJvamVjdHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSB0YXNrTWFzdGVyLlByb2plY3RzW2ldO1xyXG4gICAgICAgICAgICBtYWtlSG9tZUJ1dHRvbnMocHJvamVjdCwgbWVudSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUhvbWVCdXR0b25zKHByb2plY3QsIG1lbnUpIHtcclxuICAgIGxldCBob21lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgaG9tZVByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhvbWUnKTtcclxuICAgIGhvbWVQcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3QuTmFtZTtcclxuXHJcbiAgICBob21lUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtYWtlVGFza1VJKCk7XHJcbiAgICAgICAgc2V0SG9tZUJ1dHRvbnMocHJvamVjdC5OYW1lKTtcclxuICAgICAgICBkaXNwbGF5UHJvamVjdHNUYXNrcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOdW1iZXInKTtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBob3dNYW55VW5jb21wbGV0ZVRhc2tzKHByb2plY3QpO1xyXG4gICAgaG9tZVByb2plY3QuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChob21lUHJvamVjdCk7XHJcbn1cclxuZnVuY3Rpb24gc2V0SG9tZUJ1dHRvbnMobmFtZSkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHdyYXBwZXIuY2hpbGRyZW5baV0uaWQgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlUHJvamVjdCh3cmFwcGVyLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaG93TWFueVVuY29tcGxldGVUYXNrcyhwcm9qZWN0KSB7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5UYXNrcy5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgICBpZihwcm9qZWN0LlRhc2tzW2ldLlN0YXR1cyAhPT0gJ0NvbXBsZXRlZCcpIHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRET00oKSB7XHJcbiAgICBuZXdQcm9qZWN0KCk7XHJcbiAgICBsb2FkUHJvamVjdHNPbkJvb3QoKTtcclxuICAgIG1ha2VIb21lTWVudSgpO1xyXG4gICAgaG9tZUJ0bigpO1xyXG59XHJcblxyXG5leHBvcnQge2luaXRET019O1xyXG5cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7aW5pdERPTX0gZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCB7bG9hZFRhc2tNYXN0ZXIsIHNhdmVUYXNrbWFzdGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzJ1xyXG5pbXBvcnQgcGFyc2VJU08gZnJvbSAnZGF0ZS1mbnMvcGFyc2VJU08nO1xyXG4vLyBXRSBIQVZFIERBVEUtRk5TIFRPIElNUE9SVCBDRVJUQUlOIEZVTkNUSU9OUyBGUk9NIVxyXG5cclxuXHJcblxyXG4vLyBnb25uYSBoYXZlIHRvIHB1dCBzb21lIHN0b3JhZ2UgZnVuY3Rpb25zIGluIHRoZXNlIGxhdGVyXHJcbmNsYXNzIFRhc2ttYXN0ZXIge1xyXG4gICAgUHJvamVjdHMgPSBbXTtcclxuICAgIG5ld1Byb2plY3QobmFtZSkge1xyXG4gICAgICAgIHRoaXMuUHJvamVjdHMucHVzaChuYW1lKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuUHJvamVjdHNbaV0gPT09IHByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHJvamVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmxldCB0YXNrTWFzdGVyID0gbmV3IFRhc2ttYXN0ZXI7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIE5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICBUYXNrcyA9IFtdO1xyXG4gICAgbmV3VGFzayhuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5UYXNrcy5wdXNoKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHVzaFRvVGFza21hc3RlcihuYW1lKSB7XHJcbiAgICAgICAgdGFza01hc3Rlci5uZXdQcm9qZWN0KG5hbWUpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5UYXNrc1tpXSA9PT0gdGFzaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5UYXNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWFrZVByb2plY3QobmFtZSkge1xyXG4gICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdDtcclxuICAgIHByb2plY3QuTmFtZSA9IG5hbWU7XHJcbiAgICBwcm9qZWN0LnB1c2hUb1Rhc2ttYXN0ZXIocHJvamVjdCk7XHJcbn1cclxuXHJcblxyXG4vLyBtYXliZSBjaGFuZ2UgbG93IGluIGFuZCBjb21wbGV0ZWQgdG8gYSBzaW5nbGUgc3RhdHVzIHRoYXQgdGhvc2Ugd291bGQgYmUgdGhlIGtleSB0b1xyXG4vLyBhZGQgaXNEdWVTb29uIG1ldGhvZCB0aGF0IGNoZWNrcyB3aXRoIGRhdGUtZm5zIGlmIHRoZSB0YXNrIGlzIGR1ZSBpbiBhIGxlc3MgdGhhbiBhIHdlZWtcclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcclxuICAgIERlc2NyaXB0aW9uID0gXCJcIjtcclxuICAgIFN0YXR1cyA9IFwiTG93UHJpb3JpdHlcIlxyXG4gICAgRGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgIElzRHVlU29vbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUudHJpbSgpID09PSBwcm9qZWN0TmFtZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0ubmV3VGFzayh0YXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmRHVlU29vbih0YXNrRGF0ZSwgY3VyckRhdGUpIHtcclxuICAgICAgICByZXR1cm4gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRhc2tEYXRlLCBjdXJyRGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcbi8vIHN0YXR1cyBjYW4gYmUgTG93UHJpb3JpdHkgSW5Qcm9ncmVzcyBDb21wbGV0ZWRcclxuZnVuY3Rpb24gbWFrZVRhc2soZGVzY3JpcHRpb24sIG5hbWUsIGRhdGUsIHByb2plY3ROYW1lLCBzdGF0dXMpIHtcclxuICAgIGxldCB0YXNrID0gbmV3IFRhc2s7XHJcbiAgICB0YXNrLk5hbWUgPSBuYW1lO1xyXG4gICAgdGFzay5EYXRlID0gZGF0ZTtcclxuICAgIHRhc2suU3RhdHVzID0gc3RhdHVzO1xyXG4gICAgdGFzay5EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGFzay5Jc0R1ZVNvb24gPSB0YXNrLmNoZWNrSWZEdWVTb29uKHBhcnNlSVNPKGRhdGUpLCBuZXcgRGF0ZSgpKTtcclxuICAgIHRhc2sucHVzaFRvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzayk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy9sb2FkcyBwYWdlIFxyXG5sb2FkVGFza01hc3RlcigpO1xyXG5pbml0RE9NKCk7XHJcbmV4cG9ydCB7bWFrZVRhc2ssIG1ha2VQcm9qZWN0LCB0YXNrTWFzdGVyfTtcclxuIiwiaW1wb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9IGZyb20gXCIuL2luZGV4XCJcclxuXHJcbmZ1bmN0aW9uIHNhdmVUYXNrbWFzdGVyKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tNYXN0ZXInLCBKU09OLnN0cmluZ2lmeSh0YXNrTWFzdGVyKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFRhc2tNYXN0ZXIoKSB7XHJcbiAgICBsZXQgbG9jYWxUYXNrTWFzdGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza01hc3RlcicpKTtcclxuICAgIGlmKGxvY2FsVGFza01hc3RlciAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IFByb2plY3QgPSBsb2NhbFRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XHJcbiAgICAgICAgICAgIG1ha2VQcm9qZWN0KFByb2plY3QuTmFtZSk7XHJcbiAgICAgICAgICAgIGxvYWRUYXNrcyhQcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmZ1bmN0aW9uIGxvYWRUYXNrcyhQcm9qZWN0KSB7XHJcbiAgICBpZihQcm9qZWN0LlRhc2tzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBQcm9qZWN0LlRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gUHJvamVjdC5UYXNrc1tpXTtcclxuICAgICAgICAgICAgbWFrZVRhc2sodGFzay5EZXNjcmlwdGlvbiwgdGFzay5OYW1lLCB0YXNrLkRhdGUsIFByb2plY3QuTmFtZSwgdGFzay5TdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQge3NhdmVUYXNrbWFzdGVyLCBsb2FkVGFza01hc3Rlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3N0b3JhZ2UuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=