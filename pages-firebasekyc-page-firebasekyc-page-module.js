(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebasekyc-page-firebasekyc-page-module"],{

/***/ "./src/app/pages/firebasekyc-page/firebasekyc-page.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/firebasekyc-page/firebasekyc-page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n <ion-toolbar >\n   <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n        <ion-title small>\n            <sup>  KYC document upload </sup>\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n<ion-card class=\"ion-text-center\" *ngIf=\" kycdata != null && kycstatus.kycdone == 'true'\">\n    <ion-item>\n <ion-label> \n KYC is done\n </ion-label> \n    </ion-item>\n</ion-card >\n \n<ion-card class=\"ion-text-center\" *ngIf=\" loggedinuser == null \">\n    <ion-item>\n <ion-label> \n User not loggedin\n </ion-label> \n    </ion-item>\n</ion-card >\n\n  </ion-list>\n  <ion-list >\n<ion-card class=\"ion-text-center\">\n\n <ion-grid class=\"directbackground\" >\n           <ion-row justify-content-center align-items-center >\n            <ion-col >\n\n    <ion-item>\n       <ion-label>Name    : </ion-label>\n      <ion-input [(ngModel)]=\"kycdata.name\" type=\"text\" placeholder=\"Name\" ></ion-input>\n    </ion-item>\n    <ion-item>\n       <ion-label>Email    : </ion-label>\n      <ion-input [(ngModel)]=\"kycdata.kycemail\" type=\"email\" placeholder=\"Email\" ></ion-input>\n    </ion-item>\n      <ion-item>\n       <ion-label>Phone :</ion-label>\n        <ion-input [(ngModel)]=\"kycdata.kycphone\" type=\"phone\" placeholder=\"Phone\" ></ion-input>\n      </ion-item>\n      <ion-item>\n       <ion-label>Address:</ion-label>\n        <ion-textarea rows=\"8\" [(ngModel)]=\"kycdata.address\"   class=\"ion-text-wrap\"  type=\"text\" placeholder=\"Address\" ></ion-textarea>\n      </ion-item>\n <label class=\"error-message\">{{errorMessage}}</label>\n      <ion-item>\n       <ion-label>Send kyc documents to support@dashreverse.in  \n          <p> Upon verifying, account will be marked kyc verified </p>\n      </ion-label>\n      </ion-item>\n </ion-col>\n        </ion-row>\n        </ion-grid>\n</ion-card>\n\n<ion-card class=\"ion-text-center\">\n <ion-grid class=\"directbackground\" >\n           <!--ion-row justify-content-center align-items-center *ngIf=\"kycstatus != null && kycstatus.kycdone == 'false' \">\n            <ion-col >\n    <ion-item>\n       <ion-label>KYC document upload    : </ion-label>\n    </ion-item>\n<div *ngIf=\"uploaddone != 100\">\n  <input type=\"file\" (change)=\"uploadFile($event)\" />\n    <div>{{ uploadPercent | async }}</div>\n    <a [href]=\"downloadURL | async\">{{ downloadURL | async }}</a>\n</div>\n<div *ngIf=\"uploaddone == 100\">\n Uploaded successfully \n</div>\n </ion-col>\n        </ion-row -->\n        <ion-row *ngIf=\"kycdata != null && kycstatus.kycdone == 'false' \">\n    <ion-item>\n       <ion-label>Country    : </ion-label>\n      <ion-input [(ngModel)]=\"kycdata.country\" type=\"text\" placeholder=\"Enter country \" ></ion-input>\n    </ion-item>\n    <ion-item>\n       <ion-label>Document type    : </ion-label>\n    <ion-select #select1 [(ngModel)]=\"kycdata.kycdoctype\">\n      <ion-select-option  value=\"Driving License\">Driving License</ion-select-option>\n      <ion-select-option  value=\"Passport \">Passport</ion-select-option>\n    </ion-select>\n   </ion-item>\n\n      <ion-item>\n       <ion-label>Document number :</ion-label>\n        <ion-input [(ngModel)]=\"kycdata.kycdocnumber\" type=\"text\" placeholder=\"Document number\" ></ion-input>\n      </ion-item>\n        </ion-row>\n        </ion-grid>\n      <ion-item>\n    <ion-button  [disabled]=\"kycstatus.kycdone == 'submitted'\" [disabled]=\"loggedinuser == null\" item-right small class=\"colorbutton\" (click)=\"kycsubmit()\"   >Submit kyc </ion-button>\n      </ion-item>\n</ion-card>\n\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/firebasekyc-page/firebasekyc-page.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/firebasekyc-page/firebasekyc-page.module.ts ***!
  \*******************************************************************/
/*! exports provided: FirebaseKycPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseKycPageModule", function() { return FirebaseKycPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebasekyc_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebasekyc-page */ "./src/app/pages/firebasekyc-page/firebasekyc-page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var FirebaseKycPageModule = /** @class */ (function () {
    function FirebaseKycPageModule() {
    }
    FirebaseKycPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _firebasekyc_page__WEBPACK_IMPORTED_MODULE_2__["FirebaseKycPage"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _firebasekyc_page__WEBPACK_IMPORTED_MODULE_2__["FirebaseKycPage"]
                    }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FirebaseKycPageModule);
    return FirebaseKycPageModule;
}());



/***/ }),

/***/ "./src/app/pages/firebasekyc-page/firebasekyc-page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/firebasekyc-page/firebasekyc-page.ts ***!
  \************************************************************/
/*! exports provided: FirebaseKycPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseKycPage", function() { return FirebaseKycPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _kyc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kyc.service */ "./src/app/pages/firebasekyc-page/kyc.service.ts");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");










var FirebaseKycPage = /** @class */ (function () {
    function FirebaseKycPage(navCtrl, events, logger, alertController, termsuserservice, storage, kycService) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.logger = logger;
        this.alertController = alertController;
        this.termsuserservice = termsuserservice;
        this.storage = storage;
        this.kycService = kycService;
        this.errorMessage = '';
        this.uploaddone = 0;
        this.loggedinuser = null;
        this.useraccount = {
            termsagreed: 'no'
        };
        this.kycstatus = {
            kycdone: '',
            kycid: '',
            googleid: '',
            email: '',
            statusaction: '',
            statusmsg: '',
        };
        this.kycdata = {
            kycdone: "false",
            name: "",
            id: "",
            kycid: "",
            googleid: "",
            message: "",
            updatedate: "",
            loginphone: "",
            kycphone: "",
            country: "",
            kycemail: "",
            loginemail: "",
            address: "",
            kycdoctype: "",
            kycdocnumber: "",
            kycdocument: "",
        };
        this.loaduser();
        this.loadkycdata();
        this.getaccount();
    }
    FirebaseKycPage.prototype.ionViewWillEnter = function () {
        this.loaduser();
        this.loadkycdata();
        this.getaccount();
    };
    FirebaseKycPage.prototype.ngOnInit = function () {
        this.loaduser();
        this.loadkycdata();
        this.getaccount();
    };
    FirebaseKycPage.prototype.getaccount = function () {
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
                        this.termsuserservice.getaccount(data).then(function (data1) {
                            _this.logger.info(data1);
                            if (data1) {
                                _this.useraccount = data1;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (xx) {
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
    FirebaseKycPage.prototype.loaduser = function () {
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
    FirebaseKycPage.prototype.loadkycdata = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.kycService.getkycstatus()];
                    case 1:
                        _a.kycstatus = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FirebaseKycPage.prototype.getkycdata = function () {
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
                        if (!this.loggedinuser) {
                            return [2 /*return*/];
                        }
                        data = {
                            email: this.loggedinuser.email,
                            googleid: this.loggedinuser.uid,
                        };
                        this.kycService.getkycdata(data).then(function (kycstatus) {
                            if (kycstatus) {
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].storageuniq + 'kycstatus', kycstatus).then(function (xx) {
                                    _this.kycService.reflectkycstatus();
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
    FirebaseKycPage.prototype.kycsubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        _a.loggedinuser = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.termsuserservice.getuseraccount()];
                    case 2:
                        _b.useraccount = _c.sent();
                        this.kycdata.googleid = this.loggedinuser.uid;
                        this.kycdata.loginemail = this.loggedinuser.email;
                        this.kycdata.loginphone = this.loggedinuser.phoneNumber;
                        data = this.kycdata;
                        if (!(this.useraccount && this.useraccount.kycid != '')) {
                            this.logger.info("account not created");
                            alert("account not created");
                            return [2 /*return*/];
                        }
                        this.kycService.registeruserkyc(data).then(function (kycstatus) {
                            if (kycstatus) {
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].storageuniq + 'kycstatus', kycstatus).then(function (xx) {
                                    _this.kycService.reflectkycstatus();
                                    //   this.loadkycdata() ;
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
    FirebaseKycPage.prototype.presentAlert = function (title, subheader, message) {
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
    FirebaseKycPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'firebasekyc-page',
            template: __webpack_require__(/*! ./firebasekyc-page.html */ "./src/app/pages/firebasekyc-page/firebasekyc-page.html")
        })
        //https://blog.angular.io/file-uploads-come-to-angularfire-6842352b3b47
        // https://github.com/angular/angularfire2/blob/master/docs/storage/storage.md
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_7__["TermsuserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _kyc_service__WEBPACK_IMPORTED_MODULE_4__["KycService"]])
    ], FirebaseKycPage);
    return FirebaseKycPage;
}());



/***/ }),

/***/ "./src/app/pages/firebasekyc-page/kyc.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/firebasekyc-page/kyc.service.ts ***!
  \*******************************************************/
/*! exports provided: KycService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycService", function() { return KycService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");





var KycService = /** @class */ (function () {
    function KycService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.sendingmessages = [];
        this.sendtransactions = [];
        this.kycstatus = {
            kycdone: '',
            kycid: '',
            googleid: '',
            email: '',
            statusaction: '',
            statusmsg: '',
        };
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    KycService.prototype.getkycstatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var xx;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reflectkycstatus()];
                    case 1:
                        xx = _a.sent();
                        return [2 /*return*/, this.kycstatus];
                }
            });
        });
    };
    KycService.prototype.reflectkycstatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'kycstatus').then(function (data) {
                if (data) {
                    _this.kycstatus = data;
                }
                resolve(0);
            });
        });
    };
    KycService.prototype.registeruserkyc = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webkycuser/registeruserkyc', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    KycService.prototype.getkycdata = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webkycuser/getuserkyc', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    KycService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], KycService);
    return KycService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-firebasekyc-page-firebasekyc-page-module.js.map