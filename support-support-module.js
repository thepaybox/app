(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"],{

/***/ "./src/app/pages/support/support-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function() { return SupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support */ "./src/app/pages/support/support.ts");




var routes = [
    {
        path: '',
        component: _support__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }
];
var SupportPageRoutingModule = /** @class */ (function () {
    function SupportPageRoutingModule() {
    }
    SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SupportPageRoutingModule);
    return SupportPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/support/support.html":
/*!********************************************!*\
  !*** ./src/app/pages/support/support.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Support</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n      <ion-card class=\"datainput\">\n      <ion-card-header>\n    <ion-card-subtitle> System </ion-card-subtitle>\n    <ion-card-title> Status </ion-card-title>\n      </ion-card-header>\n\n  <ion-item *ngFor=\"let msg of systemmessages\" >\n    <ion-label class=\"ion-text-wrap\" *ngIf=\"msg.message != ''\" >\n      <ion-text color=\"primary\">\n        <h3> {{msg.name}}  </h3>\n        <p>  {{msg.message}}</p>\n      </ion-text>\n     </ion-label>\n </ion-item >\n     </ion-card>\n\n      <ion-card class=\"datainput\">\n      <ion-card-header>\n    <ion-card-subtitle>Question / answer </ion-card-subtitle>\n    <ion-card-title> Subject\n\n    </ion-card-title>\n      </ion-card-header>\n <ion-item >\n <ion-badge slot=\"start\">1</ion-badge>\n         <ion-label position=\"stacked\"> Enter subject  </ion-label>\n         <ion-textarea rows=\"2\" class=\"ion-text-wrap\" type=\"text\"  [(ngModel)]=\"subject\" placeholder=\"subject \"></ion-textarea>\n       </ion-item>\n\n\n\n\n\n      <ion-card-header>\n    <ion-card-title >Enter Question </ion-card-title>\n\n      </ion-card-header>\n\n\n\n\n            <ion-item>\n    <ion-badge slot=\"start\">2</ion-badge>\n         <ion-label position=\"stacked\"> Question  </ion-label>\n\n       <ion-textarea rows=\"8\" class=\"ion-text-wrap\" type=\"text\" [(ngModel)]=\"question\"\n                          placeholder=\"question \"></ion-textarea>\n            </ion-item>\n\n\n           <ion-item >\n     <ion-label text-center>\n      <ion-button  [disabled]=\"questionanswer.qstatus == 'open' \"size=\"small\" color=\"primary\" (click)=\"senduserquestion()\"> Submit question </ion-button>\n\n     </ion-label>\n           </ion-item>\n    </ion-card>\n\n    <ion-card >\n      <ion-card-header>\n     <ion-card-subtitle>Q/A </ion-card-subtitle>\n    <ion-card-title > ID:   {{questionanswer.questionid}}   </ion-card-title>\n\n      </ion-card-header>\n\n      <ion-item >\n     <ion-label class=\"ion-text-wrap\">\n      {{questionanswer.subject}}\n     </ion-label>\n      </ion-item >\n      <ion-item >\n      <ion-button   size=\"small\" color=\"primary\" (click)=\"getquestionanswer()\"> Question status </ion-button>\n      <ion-button  [disabled]=\"questionanswer.subject != ''\" size=\"small\" color=\"primary\" (click)=\"getquestionanswer()\"> Question status </ion-button>\n      </ion-item >\n      <ion-item >\n      <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n\n     <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> Question: {{questionanswer.qcontent}}  </h3>\n        <h3> Status: {{questionanswer.qstatus}}  </h3>\n        <p> Response:     {{questionanswer.rcontent}}</p>\n      </ion-text>\n     </ion-label>\n      </ion-item >\n    </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/support/support.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support */ "./src/app/pages/support/support.ts");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/pages/support/support-routing.module.ts");







var SupportModule = /** @class */ (function () {
    function SupportModule() {
    }
    SupportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _support_routing_module__WEBPACK_IMPORTED_MODULE_6__["SupportPageRoutingModule"]
            ],
            declarations: [
                _support__WEBPACK_IMPORTED_MODULE_5__["SupportPage"],
            ]
        })
    ], SupportModule);
    return SupportModule;
}());



/***/ }),

/***/ "./src/app/pages/support/support.scss":
/*!********************************************!*\
  !*** ./src/app/pages/support/support.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-size: 0.875em; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxtQkFBa0IsRUFBSTs7QUFFNUI7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0ksb0NBQW1DO0VBQ25DLG9CQUFtQixFQUN0Qjs7QUFHRDtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7IGZvbnQtc2l6ZTogMC44NzVlbTsgfSAvLyAxNHB4IFxuXG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cblxuaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/support/support.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/support/support.service.ts ***!
  \**************************************************/
/*! exports provided: SupportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportService", function() { return SupportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");





var SupportService = /** @class */ (function () {
    function SupportService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.sendingmessages = [];
        this.sendtransactions = [];
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    SupportService.prototype.getsystemstatus = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/getsystemstatus', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    SupportService.prototype.getaccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/getaccount', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    SupportService.prototype.senduserquestion = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/usersupport/websendsupportquestion', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    SupportService.prototype.getquestionanswer = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/usersupport/webgetquestionanswer', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    SupportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], SupportService);
    return SupportService;
}());



/***/ }),

/***/ "./src/app/pages/support/support.ts":
/*!******************************************!*\
  !*** ./src/app/pages/support/support.ts ***!
  \******************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support.service */ "./src/app/pages/support/support.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");








var SupportPage = /** @class */ (function () {
    function SupportPage(alertController, toastCtrl, termsuserservice, logger, storage, supportService) {
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.termsuserservice = termsuserservice;
        this.logger = logger;
        this.storage = storage;
        this.supportService = supportService;
        this.submitted = false;
        this.systemmessages = [];
        this.supportdata = {
            id: '',
            questionid: '',
            qcontent: '',
            subject: '',
            rcontent: '',
            qstatus: '',
            agentid: '',
            name: '',
            googleid: '',
            loginemail: '',
            loginphone: '',
            updatedate: '',
            country: '',
        };
        this.loggedinuser = null;
        this.useraccount = {
            termsagreed: 'no'
        };
        this.questionanswer = {
            id: '',
            questionid: '',
            qcontent: '',
            rcontent: '',
            qstatus: '',
            subject: '',
            agentid: '',
            name: '',
            googleid: '',
            loginphone: '',
            loginemail: '',
            updatedate: '',
            country: '',
        };
        this.loaduser();
        this.getaccount();
        this.getquestionanswer();
        this.loadqadata();
        this.getsystemstatus();
    }
    SupportPage.prototype.ionViewWillEnter = function () {
        this.loaduser();
        this.getaccount();
        this.loadqadata();
    };
    SupportPage.prototype.ngOnInit = function () {
        this.loaduser();
        this.getaccount();
        this.loadqadata();
    };
    SupportPage.prototype.loaduser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        _a.loggedinuser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SupportPage.prototype.loadqadata = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].storageuniq + 'questionanswer').then(function (data) {
            if (data) {
                _this.questionanswer = data;
            }
            else {
                _this.getquestionanswer();
            }
        });
    };
    SupportPage.prototype.senduserquestion = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        _a.loggedinuser = _b.sent();
                        if (this.loggedinuser.uid == '') {
                            this.presentAlert("", "", "User not logged in");
                            return [2 /*return*/];
                        }
                        if (this.question.length < 20) {
                            this.presentAlert("", "", "Describe question in details");
                            return [2 /*return*/];
                        }
                        if (this.subject.length < 10) {
                            this.presentAlert("", "", "Mention subject ");
                            return [2 /*return*/];
                        }
                        this.supportdata.googleid = this.loggedinuser.uid;
                        this.supportdata.loginemail = this.loggedinuser.email;
                        this.supportdata.loginphone = this.loggedinuser.phoneNumber;
                        this.supportdata.qstatus = 'new';
                        this.supportdata.qcontent = this.question;
                        this.supportdata.subject = this.subject;
                        this.supportdata.name = this.loggedinuser.displayName;
                        data = this.supportdata;
                        this.supportService.senduserquestion(data).then(function (response) {
                            if (response) {
                                _this.questionanswer = response;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].storageuniq + 'questionanswer', _this.questionanswer).then(function (xx) {
                                });
                                ;
                            }
                        });
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    SupportPage.prototype.getquestionanswer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        _a.loggedinuser = _b.sent();
                        if (this.loggedinuser.uid == '') {
                            //       this.presentAlert("", "", "User not logged in");
                            return [2 /*return*/];
                        }
                        data = {
                            email: this.loggedinuser.email,
                            googleid: this.loggedinuser.uid,
                        };
                        this.supportService.getquestionanswer(data).then(function (questionanswer) {
                            if (questionanswer) {
                                _this.questionanswer = questionanswer;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].storageuniq + 'questionanswer', questionanswer).then(function (xx) {
                                });
                                ;
                            }
                        });
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    SupportPage.prototype.getsystemstatus = function () {
        var _this = this;
        var data = {};
        this.supportService.getsystemstatus(data).then(function (data1) {
            if (data1) {
                _this.systemmessages = data1;
            }
        });
    };
    SupportPage.prototype.getaccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        _a.loggedinuser = _b.sent();
                        if (this.loggedinuser.uid == '') {
                            return [2 /*return*/];
                        }
                        data = {
                            googleid: this.loggedinuser.uid,
                        };
                        this.supportService.getaccount(data).then(function (data1) {
                            _this.logger.info(data1);
                            if (data1) {
                                _this.useraccount = data1;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (x) {
                                    _this.termsuserservice.reflectuseraccount();
                                });
                                ;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
                            }
                        }, function (err) {
                            if (err._body) {
                                _this.presentAlert("", "", "Agree terms of usage. ");
                            }
                            else {
                                _this.presentAlert("", "", "Error reading account. ");
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SupportPage.prototype.presentAlert = function (title, subheader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            subHeader: subheader,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, alert.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, _config_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].alertdelay);
                        return [2 /*return*/];
                }
            });
        });
    };
    SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-support',
            template: __webpack_require__(/*! ./support.html */ "./src/app/pages/support/support.html"),
            styles: [__webpack_require__(/*! ./support.scss */ "./src/app/pages/support/support.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_7__["TermsuserService"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _support_service__WEBPACK_IMPORTED_MODULE_3__["SupportService"]])
    ], SupportPage);
    return SupportPage;
}());



/***/ })

}]);
//# sourceMappingURL=support-support-module.js.map