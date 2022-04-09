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

function displayIfDueSoon(name, date) {

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
            dueDate.innerText = `due in ${date} days!`;
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
            console.log(currentTask);
            makeTaskBtn(currentTask.Name, currentTask.Status);
            displayIfDueSoon(currentTask.Name, currentTask.IsDueSoon);
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
    displayIfDueSoon(task.Name, task.IsDueSoon);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5R0FBeUc7QUFDekc7QUFDQSw2Q0FBNkMsK0JBQStCLG1CQUFtQixrQkFBa0IsS0FBSyxVQUFVLHNCQUFzQiw2Q0FBNkMsK0JBQStCLDBCQUEwQiw2Q0FBNkMsS0FBSyxZQUFZLHNCQUFzQixvQ0FBb0Msc0JBQXNCLHdCQUF3QixxQkFBcUIsdUNBQXVDLEtBQUssa0JBQWtCLHNCQUFzQixvQ0FBb0Msc0JBQXNCLHdCQUF3QixxQkFBcUIsdUNBQXVDLDRCQUE0QixTQUFTLHdCQUF3QiwwQkFBMEIsS0FBSyxXQUFXLHdCQUF3QixxQkFBcUIsa0NBQWtDLHFCQUFxQixvQkFBb0IsYUFBYSxxQkFBcUIsd0JBQXdCLGtDQUFrQyxLQUFLLGNBQWMsMEJBQTBCLEtBQUssc0JBQXNCLHNCQUFzQixLQUFLLGFBQWEsd0JBQXdCLHFCQUFxQixxQkFBcUIsaUNBQWlDLHFCQUFxQixLQUFLLG1CQUFtQiw4Q0FBOEMsa0NBQWtDLHdCQUF3QixLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLDZDQUE2QywwQ0FBMEMsU0FBUyxTQUFTLHNCQUFzQix1Q0FBdUMsa0NBQWtDLDBCQUEwQiw2QkFBNkIsd0JBQXdCLHFCQUFxQiwyQkFBMkIscUJBQXFCLHlDQUF5QyxvQkFBb0IsMkJBQTJCLEtBQUssZUFBZSxpREFBaUQsNENBQTRDLEtBQUssZUFBZSwyQkFBMkIsS0FBSyxvQkFBb0IsaURBQWlELDRDQUE0QyxLQUFLLG9CQUFvQiw0QkFBNEIsS0FBSyx1QkFBdUIsNEJBQTRCLDJCQUEyQixxQkFBcUIsNENBQTRDLEtBQUssNkJBQTZCLDRDQUE0Qyw4Q0FBOEMsS0FBSyxVQUFVLHdCQUF3QixzQkFBc0IsNEJBQTRCLHVDQUF1QyxrQ0FBa0MscUJBQXFCLHlCQUF5QiwwQkFBMEIsS0FBSyxnQkFBZ0Isd0JBQXdCLGdDQUFnQyx1Q0FBdUMscUJBQXFCLEtBQUssaUJBQWlCLG1DQUFtQyxLQUFLLGVBQWUsc0JBQXNCLCtCQUErQixzQ0FBc0MsMkNBQTJDLHNCQUFzQixLQUFLLHVCQUF1QixzQkFBc0IsK0JBQStCLEtBQUssc0JBQXNCLHNCQUFzQiwrQkFBK0Isc0JBQXNCLHlCQUF5QixLQUFLLHFCQUFxQixpRUFBaUUsNEJBQTRCLEtBQUssK0JBQStCLHNCQUFzQixxQkFBcUIsa0JBQWtCLFNBQVMsZUFBZSxzQkFBc0Isa0JBQWtCLHNCQUFzQix5QkFBeUIsK0JBQStCLDZDQUE2Qyx1Q0FBdUMsd0NBQXdDLDRCQUE0QixLQUFLLGNBQWMsMEJBQTBCLDJCQUEyQiw2Q0FBNkMscUJBQXFCLHFCQUFxQixvQ0FBb0MscUNBQXFDLEtBQUssV0FBVyxzQkFBc0IsdUNBQXVDLGtCQUFrQix3QkFBd0Isd0JBQXdCLHFCQUFxQixnQ0FBZ0MsbUJBQW1CLHNCQUFzQix5QkFBeUIseUJBQXlCLDBCQUEwQixrQ0FBa0MsMkJBQTJCLDBDQUEwQyxLQUFLLGdCQUFnQiw2Q0FBNkMsd0JBQXdCLDBDQUEwQyxLQUFLLDBCQUEwQixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsd0JBQXdCLEtBQUssNEJBQTRCLHlCQUF5QixzQkFBc0IsK0JBQStCLG1CQUFtQixLQUFLLHFCQUFxQix3QkFBd0IsMkJBQTJCLHVDQUF1QyxzQkFBc0Isc0JBQXNCLEtBQUssb0JBQW9CLHNCQUFzQixrQkFBa0IsS0FBSyx5QkFBeUIsdUNBQXVDLDZDQUE2QyxLQUFLLHlCQUF5Qiw2Q0FBNkMsb0NBQW9DLEtBQUssd0JBQXdCLHVDQUF1QyxnQ0FBZ0Msd0JBQXdCLHFCQUFxQixxQkFBcUIsS0FBSyx1Q0FBdUMsd0JBQXdCLHNCQUFzQixtQkFBbUIsc0JBQXNCLHFCQUFxQixLQUFLLG9CQUFvQix1QkFBdUIsd0JBQXdCLG1CQUFtQixnQkFBZ0IsZUFBZSxvQkFBb0IscUJBQXFCLHVCQUF1QiwwQ0FBMEMsS0FBSyxtQ0FBbUMsc0JBQXNCLCtCQUErQiwyQkFBMkIsc0NBQXNDLG1CQUFtQixnQ0FBZ0MseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1QixzQkFBc0IsK0JBQStCLEtBQUssWUFBWSxtQkFBbUIsZ0NBQWdDLHNEQUFzRCxxREFBcUQsc0NBQXNDLHFDQUFxQyxLQUFLLGNBQWMsOEJBQThCLDJCQUEyQix3QkFBd0IscUJBQXFCLHlCQUF5QixxQkFBcUIsc0JBQXNCLEtBQUssaUJBQWlCLHNCQUFzQix1Q0FBdUMsNEJBQTRCLEtBQUssZ0JBQWdCLHFCQUFxQixvQ0FBb0Msc0NBQXNDLDhCQUE4Qix3QkFBd0IsS0FBSyxzQkFBc0IscUJBQXFCLFNBQVMsa0JBQWtCLHdCQUF3QixxQkFBcUIsMkJBQTJCLG9DQUFvQyxxQ0FBcUMsS0FBSyxpQkFBaUIsMEJBQTBCLDJCQUEyQiw0QkFBNEIscUJBQXFCLHdCQUF3Qix5Q0FBeUMsNEJBQTRCLHFCQUFxQixLQUFLLHdDQUF3QyxzQkFBc0IsK0JBQStCLHNDQUFzQyxtQkFBbUIsZ0NBQWdDLHlCQUF5QixzQkFBc0IsS0FBSyxlQUFlLDBCQUEwQixvQkFBb0IsbUJBQW1CLEtBQUssd0JBQXdCLHNCQUFzQiwyQkFBMkIsa0JBQWtCLDBCQUEwQiw2QkFBNkIsS0FBSywyQkFBMkIsd0JBQXdCLHNCQUFzQiw2QkFBNkIscUJBQXFCLDJDQUEyQyxnQ0FBZ0MsZ0NBQWdDLEtBQUssa0NBQWtDLHdCQUF3Qix1Q0FBdUMsdUNBQXVDLFNBQVMsaUJBQWlCLHNDQUFzQyx1Q0FBdUMsd0RBQXdELG9DQUFvQyxxQ0FBcUMsS0FBSyxpQkFBaUIsd0JBQXdCLHNCQUFzQixxQkFBcUIsZ0NBQWdDLDBCQUEwQiwyQ0FBMkMseUNBQXlDLEtBQUssd0JBQXdCLHdCQUF3QixLQUFLLDZCQUE2QixzQkFBc0IsK0JBQStCLHlCQUF5QixnQ0FBZ0Msa0JBQWtCLFNBQVMsc0JBQXNCLHNCQUFzQiwyQkFBMkIsNEJBQTRCLDRCQUE0Qix3QkFBd0IseUJBQXlCLDBCQUEwQixxQkFBcUIscUJBQXFCLGtDQUFrQyxxQkFBcUIsdUNBQXVDLDRCQUE0QixTQUFTLGlCQUFpQiwwQkFBMEIsdUNBQXVDLHFCQUFxQiwyQkFBMkIsNEJBQTRCLDRCQUE0QixLQUFLLGlCQUFpQixzQkFBc0Isc0JBQXNCLDZDQUE2QyxxQkFBcUIsZ0NBQWdDLEtBQUssd0JBQXdCLHdCQUF3QixxQkFBcUIsa0NBQWtDLHdCQUF3QixxQkFBcUIsS0FBSyxrQkFBa0Isc0JBQXNCLCtCQUErQixnQ0FBZ0MsMkNBQTJDLEtBQUssNkNBQTZDLHNCQUFzQixTQUFTLHNCQUFzQixzQkFBc0IsdUJBQXVCLEtBQUssWUFBWSxzQkFBc0IsZ0NBQWdDLDRCQUE0QixxQkFBcUIsb0NBQW9DLHFCQUFxQixLQUFLLHNCQUFzQixjQUFjLDJCQUEyQixZQUFZLDRCQUE0QixLQUFLLGtCQUFrQiwwQkFBMEIsOEJBQThCLDRCQUE0Qix3QkFBd0IsS0FBSyxxQkFBcUIsd0JBQXdCLGlEQUFpRCxLQUFLLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFV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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RId0Y7QUFDL0M7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFRO0FBQ1osSUFBSSx3REFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LDhDQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0EsWUFBWSxtREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQSxZQUFZLGdEQUFRO0FBQ3BCO0FBQ0E7QUFDQTs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTczLCAyMzEpO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tb2RhbC1oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuLm1vZGFsLWhlYWRlci10aXRsZXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxufVxcclxcbi5jbG9zZXtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcXHJcXG59XFxyXFxuaGVhZGVyIGgxe1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG59XFxyXFxuLm5ldy10YXNrLXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbiNuZXdUYXNre1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuI25ld1Rhc2s6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3RzLW1lbnUge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTczLCAyMzEpO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuXFxyXFxufVxcclxcbi5wcm97XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG4ucHJvOmhvdmVye1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG59XFxyXFxuLnBybyBzcGFuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG4uYWN0aXZlLXByb2plY3R7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbn1cXHJcXG4ucHJvOmhvdmVyIHNwYW57XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGVQcm9qZWN0e1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGVQcm9qZWN0OmhvdmVye1xcclxcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG59XFxyXFxuLmhvbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4uaG9tZTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5ob21lOmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxufVxcclxcbi5ob21lLW1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXByb2plY3Rze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDQzMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3UHJvamVjdCB7XFxyXFxuICAgIC8qIHRoaXMgaXMganVzdCBmb3IgbG9va3Mgbm93ICovXFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5wcm9qZWN0LWJvYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDQwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuLnRhc2stYXJlYXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlci1we1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBtYXgtd2lkdGg6IDIyNXB4O1xcclxcbiAgICBvdmVyZmxvdzogb3ZlcmxheTtcXHJcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBzdGVlbGJsdWU7XFxyXFxufVxcclxcbi50YXNrOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggc3RlZWxibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGl0bGUtaW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtLWlucHV0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPXRleHRde1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4uc3VibWl0LXByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuI2NyZWF0ZVByb2plY3Q6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMSwgMTk2LCAyNTUpO1xcclxcbn1cXHJcXG4jY2FuY2VsUHJvamVjdDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjIzLCAyMjgpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHBpbms7XFxyXFxufVxcclxcbi5uZXctcHJvamVjdC1idXR0b257XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0bW9kYWwgaW5wdXRbdHlwZT10ZXh0XXtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcbi5wcm9qZWN0LW1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtcHJvamVjdC1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGJsYWNrO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuLnRpdGxlLWlucHV0LW1vZGFse1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4jbVRpdGxle1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHN0ZWVsYmx1ZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBzdGVlbGJsdWUgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbiN0YXNrRGVzY3tcXHJcXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5zdWJtaXQtdGFza3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jY3JlYXRlVGFza3tcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMnM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuI2NyZWF0ZVRhc2s6aG92ZXJ7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtYm94e1xcclxcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNkdWVEYXRle1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsLXRhc2stY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG4udGFzay1kZXNje1xcclxcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICBoZWlnaHQ6MzAwcHg7XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zdGF0dXMtYnV0dG9uc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuLnN0YXR1cy1idXR0b25zIGJ1dHRvbntcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAuNXM7XFxyXFxufVxcclxcbi5zdGF0dXMtYnV0dG9ucyBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAgMjBweCAhaW1wb3J0YW50O1xcclxcblxcclxcbn1cXHJcXG4uYWN0aXZlLXRhc2t7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzOSwgMTg4KSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJte1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgc3RlZWxibHVlO1xcclxcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm06aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0SG9tZU1lbnV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0SG9tZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcblxcclxcbn1cXHJcXG4udGFza051bWJlciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG4udGFzay1mb290ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2OCwgMTgxKTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRhc2stZm9vdGVyIGJ1dHRvbntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlU29vbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgc3RlZWxibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY29udGVudC13cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZmxleC13cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxIDAgYXV0bztcXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYm91bmNle1xcclxcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KX1cXHJcXG4gICAgdG8ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KX1cXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBpe1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxufVxcclxcbi5mb290ZXIgaTpob3ZlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsaUNBQWlDOztBQUVyQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFD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Q29udGVudFwiOltcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNzMsIDIzMSk7XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm1vZGFsLWhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG4ubW9kYWwtaGVhZGVyLXRpdGxle1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG59XFxyXFxuLmNsb3Nle1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogcmdiKDIyNiwgMjI2LCAyMjYpO1xcclxcbn1cXHJcXG5oZWFkZXIgaDF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbn1cXHJcXG4ubmV3LXRhc2std3JhcHBlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuI25ld1Rhc2t7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG4jbmV3VGFzazpob3ZlcntcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdHMtbWVudSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAxNzMsIDIzMSk7XFxyXFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG5cXHJcXG59XFxyXFxuLnByb3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcbi5wcm86aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTQ2LCAxOTYpO1xcclxcbn1cXHJcXG4ucHJvIHNwYW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbi5hY3RpdmUtcHJvamVjdHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxNDYsIDE5Nik7XFxyXFxufVxcclxcbi5wcm86aG92ZXIgc3BhbntcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZVByb2plY3R7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoODQsIDE0NiwgMTk2KTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZVByb2plY3Q6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRza3libHVlO1xcclxcbn1cXHJcXG4uaG9tZXtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi5ob21lOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLmhvbWU6YWN0aXZle1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XFxyXFxuLmhvbWUtbWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5hbGwtcHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogNDMwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNuZXdQcm9qZWN0IHtcXHJcXG4gICAgLyogdGhpcyBpcyBqdXN0IGZvciBsb29rcyBub3cgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtYm9hcmR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbjogNDBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcblxcclxcbn1cXHJcXG4udGFzay1hcmVhe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOSwgMjM5KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyLXB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOSwgMjM5KTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIG1heC13aWR0aDogMjI1cHg7XFxyXFxuICAgIG92ZXJmbG93OiBvdmVybGF5O1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHN0ZWVsYmx1ZTtcXHJcXG59XFxyXFxuLnRhc2s6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBzdGVlbGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aXRsZS1pbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0taW5wdXR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9dGV4dF17XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5zdWJtaXQtcHJvamVjdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4jY3JlYXRlUHJvamVjdDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAxLCAxOTYsIDI1NSk7XFxyXFxufVxcclxcbiNjYW5jZWxQcm9qZWN0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyMjMsIDIyOCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0cGluaztcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRza3libHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Rtb2RhbCBpbnB1dFt0eXBlPXRleHRde1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuLnByb2plY3QtbW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbC1wcm9qZWN0LWNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG4udGl0bGUtaW5wdXQtbW9kYWx7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNtVGl0bGV7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc3RlZWxibHVlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHN0ZWVsYmx1ZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuI3Rhc2tEZXNje1xcclxcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLnN1Ym1pdC10YXNre1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiNjcmVhdGVUYXNre1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycztcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG4jY3JlYXRlVGFzazpob3ZlcntcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1ib3h7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2R1ZURhdGV7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtdGFzay1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMTAlIGF1dG87XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcbi50YXNrLWRlc2N7XFxyXFxuICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgIGhlaWdodDozMDBweDtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1cy1idXR0b25ze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG4uc3RhdHVzLWJ1dHRvbnMgYnV0dG9ue1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIC41cztcXHJcXG59XFxyXFxuLnN0YXR1cy1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6ICAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxufVxcclxcbi5hY3RpdmUtdGFza3tcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM5LCAxODgpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm17XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgc3RlZWxibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RIb21lTWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RIb21lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNreWJsdWU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFxyXFxufVxcclxcbi50YXNrTnVtYmVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxufVxcclxcbi50YXNrLWZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY4LCAxODEpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzay1mb290ZXIgYnV0dG9ue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kdWVTb29uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5jb250ZW50LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5mbGV4LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG4uZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBib3VuY2V7XFxyXFxuICAgIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpfVxcclxcbiAgICB0byB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGl7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG59XFxyXFxuLmZvb3RlciBpOmhvdmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBhbmltYXRpb246IGJvdW5jZSAuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgcHJldmlvdXMgYHBhcnNlYCBpbXBsZW1lbnRhdGlvbiB3YXMgcmVuYW1lZCB0byBgcGFyc2VJU09gLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIHBhcnNlKCcyMDE2LTAxLTAxJylcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgcGFyc2VJU08oJzIwMTYtMDEtMDEnKVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IHZhbGlkYXRlcyBzZXBhcmF0ZSBkYXRlIGFuZCB0aW1lIHZhbHVlcyBpbiBJU08tODYwMSBzdHJpbmdzXG4gKiAgIGFuZCByZXR1cm5zIGBJbnZhbGlkIERhdGVgIGlmIHRoZSBkYXRlIGlzIGludmFsaWQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIHBhcnNlSVNPKCcyMDE4LTEzLTMyJylcbiAqICAgLy89PiBJbnZhbGlkIERhdGVcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyBkb2Vzbid0IGZhbGwgYmFjayB0byBgbmV3IERhdGVgIGNvbnN0cnVjdG9yXG4gKiAgIGlmIGl0IGZhaWxzIHRvIHBhcnNlIGEgc3RyaW5nIGFyZ3VtZW50LiBJbnN0ZWFkLCBpdCByZXR1cm5zIGBJbnZhbGlkIERhdGVgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gMiA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGVzLCBpZCB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuaW1wb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9IGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IHtzYXZlVGFza21hc3Rlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgcGFyc2VJU08gZnJvbSBcImRhdGUtZm5zL3BhcnNlSVNPXCI7XHJcbmZ1bmN0aW9uIGhvbWVCdG4oKSB7XHJcbiAgICBsZXQgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnRuJyk7XHJcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUhvbWVNZW51KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJUYXNrVUkoKSB7XHJcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVUknKTtcclxuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cclxuICAgIGxldCB0YXNrQnRuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay13cmFwcGVyJyk7XHJcbiAgICB0YXNrQnRuV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xyXG4gICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XHJcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcclxuICAgIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJpbnB1dFwiIGNsYXNzPVwidGl0bGUtaW5wdXRcIiBhY3Rpb249XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicFRpdGxlXCIgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgUHJvamVjdD9cIiByZXF1aXJlZCBtYXhsZW5ndGg9XCI0MFwiID5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXByb2plY3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjcmVhdGVQcm9qZWN0XCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DUkVBVEUgUFJPSkVDVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbFByb2plY3RcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNBTkNFTDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPmA7XHJcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pO1xyXG4gICAgICAgIGxldCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUJ0bik7XHJcbiAgICAgICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UHJvamVjdCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuZnVuY3Rpb24gbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pIHtcclxuICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUHJvamVjdCcpO1xyXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlUHJvamVjdEJ0bihuYW1lKXtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xyXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm8nKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgICBwcm9qZWN0LmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG1ha2VEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpKTtcclxuICAgIFxyXG5cclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWFrZVRhc2tVSSgpO1xyXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgZGlzcGxheVByb2plY3RzVGFza3MoKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5mdW5jdGlvbiBtYWtlRGVsZXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSB7XHJcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlUHJvamVjdCcpO1xyXG4gICAgZGVsZXRlQnRuLmlubmVyVGV4dCA9ICdYJztcclxuXHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCwgZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkZWxldGVCdG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCwgZSkge1xyXG4gICAgdGFza01hc3Rlci5kZWxldGVQcm9qZWN0KHJldHVyblByb2plY3RUb0RlbGV0ZShwcm9qZWN0KSk7XHJcbiAgICBwcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNsZWFyVGFza1VJKCk7XHJcbiAgICBzYXZlVGFza21hc3RlcigpO1xyXG4gICAgaWYocmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbWFrZUFuZERpc3BsYXlUYXNrcygpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3cmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYod3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1wcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKTtcclxufVxyXG5mdW5jdGlvbiByZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpIHtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXByb2plY3QnKSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHdyYXBwZXIuY2hpbGRyZW5baV0uaWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJldHVyblByb2plY3QoKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZS50cmltKCkgPT09IHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkpIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSB0YXNrTWFzdGVyLlByb2plY3RzW2ldO1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdFRvRGVsZXRlKHByb2plY3QpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYodGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lLnRyaW0oKSA9PT0gcHJvamVjdC5pZCkge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XHJcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XHJcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcclxuICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xyXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BUaXRsZScpO1xyXG4gICAgXHJcbiAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiTmFtZSBDYW4ndCBCZSBCbGFuayFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYocHJvamVjdE5hbWUudmFsdWUgPT09IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgQWxyZWFkeSBFeGlzdHMhJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWFrZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xyXG4gICAgICAgIG1ha2VQcm9qZWN0QnRuKHByb2plY3ROYW1lLnZhbHVlKTtcclxuICAgICAgICBzYXZlVGFza21hc3RlcigpO1xyXG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcclxuICAgIH1cclxufSBcclxuXHJcbmZ1bmN0aW9uIG1ha2VUYXNrVUkoKSB7XHJcbiAgICBjbGVhclRhc2tVSSgpO1xyXG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1VJJyk7XHJcbiAgICB0YXNrRGl2LmlubmVySFRNTCA9IFxyXG4gICAgYDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJvYXJkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicDFcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+bG93LXByaW9yaXR5PC9wPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJsb3ctcHJpb1wiIGNsYXNzPVwidGFzay1hcmVhXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicDJcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+aW4tcHJvZ3Jlc3M8L3A+XHJcbiAgICAgICAgPGRpdiBpZCA9IFwiaW4tcHJvXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwM1wiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5jb21wbGV0ZWQ8L3A+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbXBsZXRlXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbi8vIHByb2JhYmx5IHB1dCBhIGZ1bmN0aW9uIGhlcmUgdGhhdCBsb2FkcyBpbiBlYWNoIGluZGl2aWR1YWwgdGFzayB0aGF0cyBpbiB0aGUgcHJvamVjdFxyXG5cclxuICAgIG1ha2VOZXdUYXNrQnRuKCk7XHJcbn1cclxuZnVuY3Rpb24gbWFrZU5ld1Rhc2tCdG4oKSB7XHJcbiAgICBsZXQgdGFza0J0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2std3JhcHBlcicpO1xyXG4gICAgbGV0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrJyk7XHJcbiAgICB0YXNrQnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcclxuXHJcbiAgICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVGFza0J0bk1vZGFsKTtcclxuICAgIHRhc2tCdG5XcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tCdG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQnRuTW9kYWwoKSB7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIG1vZGFsLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwibW9kYWxJRFwiIGNsYXNzPVwicHJvamVjdC1tb2RhbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLXByb2plY3QtY29udGVudFwiPlxyXG5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsLWhlYWRlci10aXRsZVwiPlRhc2sgSW5mbzwvaDE+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2VNb2RhbFwiIGNsYXNzPVwiY2xvc2VcIj5YPC9idXR0b24+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJpbnB1dFwiIGNsYXNzPVwidGl0bGUtaW5wdXQtbW9kYWxcIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1pbnB1dC1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtVGl0bGVcIiBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhlIHRpdGxlIG9mIHRoZSB0YXNrP1wiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjQwXCIgPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGFza0Rlc2NcIiBwbGFjZWhvbGRlcj1cIlRhc2sgZGVzY3JpcHRpb25cIiByb3dzPVwiMTVcIiBtYXhsZW5ndGg9XCIyMDBcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC10YXNrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUtRGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNyZWF0ZVRhc2tcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNSRUFURSBUQVNLPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XHJcbiAgICBkYXRlLnZhbHVlID0nMjAyMi0xMi0zMSc7XHJcbiAgICBUYXNrQnRuTW9kYWxMb2dpYygpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gVGFza0J0bk1vZGFsTG9naWMoKSB7XHJcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tNb2RhbCk7XHJcbiAgICBcclxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlVGFzaycpO1xyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VGFzayk7XHJcbn1cclxuZnVuY3Rpb24gY2xvc2VUYXNrTW9kYWwoKSB7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xyXG5cclxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzYycpLnZhbHVlO1xyXG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21UaXRsZScpO1xyXG4gICAgaWYodGFza05hbWUudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBhbGVydChcIlRpdGxlIENhbid0IEJlIEJsYW5rIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhyZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpKTtcclxuICAgIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCB0YXNrTmFtZS52YWx1ZSwgZGF0ZS52YWx1ZSwgcmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSwgXCJMb3dQcmlvcml0eVwiKTtcclxuICAgIHNhdmVUYXNrbWFzdGVyKCk7XHJcbiAgICBtYWtlVGFza0J0bih0YXNrTmFtZS52YWx1ZSwgXCJMb3dQcmlvcml0eVwiKTtcclxuICAgIGNsb3NlVGFza01vZGFsKCk7XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuQ3VyclRhc2socHJvamVjdCwgbmFtZSkge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QuVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdGFzayA9IHByb2plY3QuVGFza3NbaV07XHJcbiAgICAgICAgaWYodGFzay5OYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1ha2VUYXNrQnRuKG5hbWUsIHN0YXR1cykge1xyXG5cclxuICAgIHN0YXR1cyA9IGdldFN0YXR1c0lEKHN0YXR1cyk7XHJcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICB0YXNrLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheVRhc2tJbmZvKHRhc2spO1xyXG4gICAgfSk7XHJcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQodGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXR1c0lEKHN0YXR1cykge1xyXG4gICAgaWYoc3RhdHVzID09PSBcIkxvd1ByaW9yaXR5XCIpIHtcclxuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG93LXByaW8nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoc3RhdHVzID09PSBcIkluUHJvZ3Jlc3NcIil7XHJcbiAgICAgICAgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luLXBybycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzdGF0dXMgPT09IFwiQ29tcGxldGVkXCIpe1xyXG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXR1cztcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUlmRHVlU29vbihuYW1lLCBkYXRlKSB7XHJcblxyXG4gICAgaWYoZGF0ZSA8IDcpIHsgICAgICAgXHJcbiAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBpZihkYXRlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gYER1ZSBUb2RheSEhIWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZGF0ZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGBEdWUgVG9tbW9yb3chYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihkYXRlIDwgMCkge1xyXG4gICAgICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGBQYXN0IGR1ZSA6W2A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGBkdWUgaW4gJHtkYXRlfSBkYXlzIWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHNUYXNrcygpIHsgICAgXHJcbiAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSByZXR1cm5Qcm9qZWN0KCk7XHJcbiAgICAgICAgaWYoYWN0aXZlUHJvamVjdC5UYXNrcy5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGFjdGl2ZVByb2plY3QuVGFza3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gYWN0aXZlUHJvamVjdC5UYXNrc1tqXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2spO1xyXG4gICAgICAgICAgICBtYWtlVGFza0J0bihjdXJyZW50VGFzay5OYW1lLCBjdXJyZW50VGFzay5TdGF0dXMpO1xyXG4gICAgICAgICAgICBkaXNwbGF5SWZEdWVTb29uKGN1cnJlbnRUYXNrLk5hbWUsIGN1cnJlbnRUYXNrLklzRHVlU29vbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2tJbmZvKGUpIHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgbW9kYWwuaW5uZXJIVE1MID1cclxuICAgIGA8ZGl2IGlkPVwibW9kYWxJRFwiIGNsYXNzPVwicHJvamVjdC1tb2RhbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRhc2stY29udGVudFwiPlxyXG5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxoMiBpZD1cInRhc2tUaXRsZVwiIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+PC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZU1vZGFsXCIgY2xhc3M9XCJjbG9zZVwiPlg8L2J1dHRvbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dC1tb2RhbFwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0LW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stZGVzY1wiIGlkPVwidGFza0Rlc2NcIj48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXRhc2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlLURhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgbmFtZT1cImR1ZS1kYXRlXCI+IDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN0YXRCdG5cIiBjbGFzcz1cInN0YXR1cy1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibG93XCI+TG93IFByaW9yaXR5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiaW5cIj5Jbi1Qcm9ncmVzczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNvbXBcIj5Db21wbGV0ZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjb25maXJtQ2hhbmdlc1wiIGNsYXNzPVwiY29uZmlybVwiPkNPTkZJUk0gQ0hBTkdFUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwidGFzay1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGVUYXNrXCI+REVMRVRFIFRBU0shPC9idXR0b24+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IGA7XHJcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tNb2RhbCk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgbGV0IHBhcmVudFByb2plY3QgPSByZXR1cm5Qcm9qZWN0KCk7XHJcblxyXG4gICAgbGV0IHRhc2sgPSByZXR1cm5DdXJyVGFzayhwYXJlbnRQcm9qZWN0LCBlLmlkKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RpdGxlJyk7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLk5hbWU7XHJcblxyXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2MnKTtcclxuICAgIGRlc2MuaW5uZXJUZXh0ID0gdGFzay5EZXNjcmlwdGlvbjtcclxuICAgIGlmKGRlc2MuaW5uZXJUZXh0ID09PSBcIlwiKSB7XHJcbiAgICAgICAgZGVzYy5pbm5lclRleHQgPSBcIjpdXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XHJcbiAgICBkdWUudmFsdWUgPSB0YXNrLkRhdGU7XHJcblxyXG4gICAgbGV0IHN0YXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdEJ0bicpO1xyXG4gICAgXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXRCdG4uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdGF0QnRuLmNoaWxkcmVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWdobGlnaHRTdGF0dXMoc3RhdEJ0biwgc3RhdEJ0bi5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZih0YXNrLlN0YXR1cyA9PT0gXCJMb3dQcmlvcml0eVwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRCdG4uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0YXNrLlN0YXR1cyA9PT0gXCJJblByb2dyZXNzXCIpIHtcclxuICAgICAgICAgICAgc3RhdEJ0bi5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRhc2suU3RhdHVzID09PSBcIkNvbXBsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRCdG4uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVUYXNrJyk7XHJcbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlVGFzayhwYXJlbnRQcm9qZWN0LCB0YXNrLCBlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUNoYW5nZXMnKTtcclxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB1cGRhdGVUYXNrKHRhc2ssIGUpO1xyXG4gICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0U3RhdHVzKHN0YXR1c1dyYXBwZXIsIHN0YXRCdG4pIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGF0dXNXcmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoc3RhdHVzV3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcclxuICAgICAgICAgICAgc3RhdHVzV3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFzaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3QsIHRhc2ssIGUpIHtcclxuICAgIGUucmVtb3ZlKCk7XHJcbiAgICBjbG9zZVRhc2tNb2RhbCgpO1xyXG4gICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2spO1xyXG4gICAgc2F2ZVRhc2ttYXN0ZXIoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tPYmplY3QodGFzaykge1xyXG4gICAgbGV0IGR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XHJcbiAgICB0YXNrLkRhdGUgPSBkdWUudmFsdWU7XHJcbiAgICB0YXNrLklzRHVlU29vbiA9IHRhc2suY2hlY2tJZkR1ZVNvb24ocGFyc2VJU08oZHVlLnZhbHVlKSwgbmV3IERhdGUoKSk7XHJcbiAgICB0YXNrLlN0YXR1cyA9IHRhc2tTdGF0dXMoKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2sodGFzaywgZSkge1xyXG4gICAgbGV0IG9sZEJ1dHRvbklEID0gZS5pZDtcclxuICAgIGUucmVtb3ZlKCk7XHJcbiAgICB1cGRhdGVUYXNrT2JqZWN0KHRhc2spO1xyXG4gICAgbWFrZVRhc2tCdG4ob2xkQnV0dG9uSUQsIHRhc2suU3RhdHVzKTtcclxuICAgIGRpc3BsYXlJZkR1ZVNvb24odGFzay5OYW1lLCB0YXNrLklzRHVlU29vbik7XHJcbiAgICBjbG9zZVRhc2tNb2RhbCgpO1xyXG4gICAgc2F2ZVRhc2ttYXN0ZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza1N0YXR1cygpIHtcclxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3cnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcclxuICAgICAgICByZXR1cm4gXCJMb3dQcmlvcml0eVwiO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFzaycpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiSW5Qcm9ncmVzc1wiO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXAnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcclxuICAgICAgICByZXR1cm4gXCJDb21wbGV0ZWRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUFuZERpc3BsYXlUYXNrcygpIHtcclxuICAgIG1ha2VUYXNrVUkoKTtcclxuICAgIGRpc3BsYXlQcm9qZWN0c1Rhc2tzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c09uQm9vdCgpIHtcclxuICAgIGlmICh0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1ha2VQcm9qZWN0QnRuKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlSG9tZU1lbnUoKSB7XHJcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVUknKTtcclxuICAgIGNsZWFyVGFza1VJKCk7XHJcblxyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhvbWVNZW51Jyk7XHJcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKG1lbnUpXHJcblxyXG4gICAgaWYgKHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbGV0IG5vUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIG5vUHJvamVjdHMudGV4dENvbnRlbnQgPSAnTk8gUFJPSkVDVFMhIE1BWUJFIENSRUFURSBPTkU/JztcclxuXHJcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChub1Byb2plY3RzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXTtcclxuICAgICAgICAgICAgbWFrZUhvbWVCdXR0b25zKHByb2plY3QsIG1lbnUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VIb21lQnV0dG9ucyhwcm9qZWN0LCBtZW51KSB7XHJcbiAgICBsZXQgaG9tZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGhvbWVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RIb21lJyk7XHJcbiAgICBob21lUHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0Lk5hbWU7XHJcblxyXG4gICAgaG9tZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWFrZVRhc2tVSSgpO1xyXG4gICAgICAgIHNldEhvbWVCdXR0b25zKHByb2plY3QuTmFtZSk7XHJcbiAgICAgICAgZGlzcGxheVByb2plY3RzVGFza3MoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrTnVtYmVyJyk7XHJcbiAgICBzcGFuLnRleHRDb250ZW50ID0gaG93TWFueVVuY29tcGxldGVUYXNrcyhwcm9qZWN0KTtcclxuICAgIGhvbWVQcm9qZWN0LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaG9tZVByb2plY3QpO1xyXG59XHJcbmZ1bmN0aW9uIHNldEhvbWVCdXR0b25zKG5hbWUpIHtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmlkID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZVByb2plY3Qod3JhcHBlci5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhvd01hbnlVbmNvbXBsZXRlVGFza3MocHJvamVjdCkge1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QuVGFza3MubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgaWYocHJvamVjdC5UYXNrc1tpXS5TdGF0dXMgIT09ICdDb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0RE9NKCkge1xyXG4gICAgbmV3UHJvamVjdCgpO1xyXG4gICAgbG9hZFByb2plY3RzT25Cb290KCk7XHJcbiAgICBtYWtlSG9tZU1lbnUoKTtcclxuICAgIGhvbWVCdG4oKTtcclxufVxyXG5cclxuZXhwb3J0IHtpbml0RE9NfTtcclxuXHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge2luaXRET019IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQge2xvYWRUYXNrTWFzdGVyLCBzYXZlVGFza21hc3Rlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cydcclxuaW1wb3J0IHBhcnNlSVNPIGZyb20gJ2RhdGUtZm5zL3BhcnNlSVNPJztcclxuLy8gV0UgSEFWRSBEQVRFLUZOUyBUTyBJTVBPUlQgQ0VSVEFJTiBGVU5DVElPTlMgRlJPTSFcclxuXHJcblxyXG5cclxuLy8gZ29ubmEgaGF2ZSB0byBwdXQgc29tZSBzdG9yYWdlIGZ1bmN0aW9ucyBpbiB0aGVzZSBsYXRlclxyXG5jbGFzcyBUYXNrbWFzdGVyIHtcclxuICAgIFByb2plY3RzID0gW107XHJcbiAgICBuZXdQcm9qZWN0KG5hbWUpIHtcclxuICAgICAgICB0aGlzLlByb2plY3RzLnB1c2gobmFtZSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLlByb2plY3RzW2ldID09PSBwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlByb2plY3RzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5sZXQgdGFza01hc3RlciA9IG5ldyBUYXNrbWFzdGVyO1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBOYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgVGFza3MgPSBbXTtcclxuICAgIG5ld1Rhc2sobmFtZSkge1xyXG4gICAgICAgIHRoaXMuVGFza3MucHVzaChuYW1lKTtcclxuICAgIH1cclxuICAgIHB1c2hUb1Rhc2ttYXN0ZXIobmFtZSkge1xyXG4gICAgICAgIHRhc2tNYXN0ZXIubmV3UHJvamVjdChuYW1lKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVRhc2sodGFzaykge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLlRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuVGFza3NbaV0gPT09IHRhc2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGFza3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1ha2VQcm9qZWN0KG5hbWUpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3Q7XHJcbiAgICBwcm9qZWN0Lk5hbWUgPSBuYW1lO1xyXG4gICAgcHJvamVjdC5wdXNoVG9UYXNrbWFzdGVyKHByb2plY3QpO1xyXG59XHJcblxyXG5cclxuLy8gbWF5YmUgY2hhbmdlIGxvdyBpbiBhbmQgY29tcGxldGVkIHRvIGEgc2luZ2xlIHN0YXR1cyB0aGF0IHRob3NlIHdvdWxkIGJlIHRoZSBrZXkgdG9cclxuLy8gYWRkIGlzRHVlU29vbiBtZXRob2QgdGhhdCBjaGVja3Mgd2l0aCBkYXRlLWZucyBpZiB0aGUgdGFzayBpcyBkdWUgaW4gYSBsZXNzIHRoYW4gYSB3ZWVrXHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICAgIE5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICBEZXNjcmlwdGlvbiA9IFwiXCI7XHJcbiAgICBTdGF0dXMgPSBcIkxvd1ByaW9yaXR5XCJcclxuICAgIERhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICBJc0R1ZVNvb24gPSBmYWxzZTtcclxuXHJcbiAgICBwdXNoVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lLnRyaW0oKSA9PT0gcHJvamVjdE5hbWUudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrTWFzdGVyLlByb2plY3RzW2ldLm5ld1Rhc2sodGFzayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZkR1ZVNvb24odGFza0RhdGUsIGN1cnJEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0YXNrRGF0ZSwgY3VyckRhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4vLyBzdGF0dXMgY2FuIGJlIExvd1ByaW9yaXR5IEluUHJvZ3Jlc3MgQ29tcGxldGVkXHJcbmZ1bmN0aW9uIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCBwcm9qZWN0TmFtZSwgc3RhdHVzKSB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrO1xyXG4gICAgdGFzay5OYW1lID0gbmFtZTtcclxuICAgIHRhc2suRGF0ZSA9IGRhdGU7XHJcbiAgICB0YXNrLlN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRhc2suRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRhc2suSXNEdWVTb29uID0gdGFzay5jaGVja0lmRHVlU29vbihwYXJzZUlTTyhkYXRlKSwgbmV3IERhdGUoKSk7XHJcbiAgICB0YXNrLnB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spO1xyXG4gICAgY29uc29sZS5sb2codGFzayk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vbG9hZHMgcGFnZSBcclxubG9hZFRhc2tNYXN0ZXIoKTtcclxuaW5pdERPTSgpO1xyXG5leHBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn07XHJcbiIsImltcG9ydCB7bWFrZVRhc2ssIG1ha2VQcm9qZWN0LCB0YXNrTWFzdGVyfSBmcm9tIFwiLi9pbmRleFwiXHJcblxyXG5mdW5jdGlvbiBzYXZlVGFza21hc3RlcigpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTWFzdGVyJywgSlNPTi5zdHJpbmdpZnkodGFza01hc3RlcikpO1xyXG4gICAgY29uc29sZS5sb2codGFza01hc3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRUYXNrTWFzdGVyKCkge1xyXG4gICAgbGV0IGxvY2FsVGFza01hc3RlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tNYXN0ZXInKSk7XHJcbiAgICBpZihsb2NhbFRhc2tNYXN0ZXIgIT09IG51bGwpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxUYXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBQcm9qZWN0ID0gbG9jYWxUYXNrTWFzdGVyLlByb2plY3RzW2ldO1xyXG4gICAgICAgICAgICBtYWtlUHJvamVjdChQcm9qZWN0Lk5hbWUpO1xyXG4gICAgICAgICAgICBsb2FkVGFza3MoUHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5mdW5jdGlvbiBsb2FkVGFza3MoUHJvamVjdCkge1xyXG4gICAgaWYoUHJvamVjdC5UYXNrcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5UYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9IFByb2plY3QuVGFza3NbaV07XHJcbiAgICAgICAgICAgIG1ha2VUYXNrKHRhc2suRGVzY3JpcHRpb24sIHRhc2suTmFtZSwgdGFzay5EYXRlLCBQcm9qZWN0Lk5hbWUsIHRhc2suU3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHtzYXZlVGFza21hc3RlciwgbG9hZFRhc2tNYXN0ZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zdG9yYWdlLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9