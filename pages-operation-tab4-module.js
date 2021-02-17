(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-operation-tab4-module"],{

/***/ "./src/app/pages/operation/tab4.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/operation/tab4.module.ts ***!
  \************************************************/
/*! exports provided: OperPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPageModule", function() { return OperPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pages/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab4.page */ "./src/app/pages/operation/tab4.page.ts");








var OperPageModule = /** @class */ (function () {
    function OperPageModule() {
    }
    OperPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_7__["OperPage"] }])
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_7__["OperPage"]]
        })
    ], OperPageModule);
    return OperPageModule;
}());



/***/ }),

/***/ "./src/app/pages/operation/tab4.page.html":
/*!************************************************!*\
  !*** ./src/app/pages/operation/tab4.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n   <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      Manage \n    </ion-title>\n\n    <ion-buttons slot=\"secondary\">\n     <!--ion-button  [disabled]=\"useraccount.termsagreed == 'no'\" [disabled]=\"!loggedinuser\"  (click)=\"gotokyc()\">\n                KYC\n            </ion-button -->\n   <ion-button  [disabled]=\"!loggedinuser\"  (click)=\"getaccount()\">\n                Refresh\n            </ion-button>\n\n\n\n            <ion-button  [disabled]=\"loggedinuser && loggedinuser.uid != ''\" (click)=\"gotologin()\">\n                Login\n            </ion-button>\n     </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-card>\n<ion-card-header>\nBlockchain document \n</ion-card-header>\n <ion-item *ngIf=\"useraccount\">\n <ion-badge slot=\"start\">1</ion-badge>\n\n\n <ion-label class=\"ion-text-wrap\" *ngIf=\"useraccount\">\n        <h4> Daily free pool   </h4>\n      <ion-text color=\"primary\">\n        <p> Issue : {{useraccount.docfreepoolcount}}   </p>\n        <p> Validate : {{useraccount.docfreepoolvalidatecount}}   </p>\n      </ion-text>\n    </ion-label>\n    <ion-label slot=\"end\"  >\n <ion-button   [disabled]=\"loggedinuser.uid == '' \" size=\"small\" color=\"primary\" (click)=\"docfreepool()\"> Get topup </ion-button>\n    </ion-label>\n\n </ion-item >\n\n <ion-item *ngIf=\"useraccount.docpaid\">\n <ion-badge slot=\"start\">2</ion-badge>\n    <ion-label class=\"ion-text-wrap\"> <h4> Buy usage </h4>\n    <p> 1- {{useraccount.docpaid.buyamount}} Rs  </p>\n    <p> 10- {{useraccount.docpaid.buyamount * 10 * .80 }} Rs  </p>\n      <ion-text color=\"secondary\" *ngIf=\"useraccount\">\n      <p  > Balance : {{useraccount.docpaidbalancecount}}   </p>\n      </ion-text>\n    </ion-label>\n    <ion-label slot=\"end\"  text-wrap>\n <ion-button   [disabled]=\"loggedinuser.uid == '' \" size=\"small\" color=\"primary\" (click)=\"docpaid(1)\"> Buy 1 </ion-button>\n <ion-button   [disabled]=\"loggedinuser.uid == '' \" size=\"small\" color=\"primary\" (click)=\"docpaid(10)\"> Buy 10 </ion-button>\n    </ion-label>\n </ion-item >\n <ion-item >\n <ion-badge slot=\"start\">2.1</ion-badge>\n<ion-input [(ngModel)]=\"couponcode\"   placeholder=\"Coupon code \"> </ion-input>\n<ion-grid>\n<ion-row>\n<ion-col>\n    <ion-label   text-wrap>\n </ion-label>\n</ion-col>\n<ion-col>\n    <ion-label   text-wrap>\n <ion-button   [disabled]=\"loggedinuser.uid == '' \" size=\"small\" color=\"primary\" (click)=\"applyvendorcouponcode()\"> Apply  </ion-button>\n  </ion-label>\n</ion-col>\n</ion-row>\n</ion-grid>\n </ion-item >\n\n <ion-item >\n <ion-badge slot=\"start\">3</ion-badge>\n    <ion-label class=\"ion-text-wrap\"> <h4> Become partner </h4>\n    <p>  Signup 2000Rs </p>\n    </ion-label>\n    <ion-label slot=\"end\"  >\n <ion-button   [disabled]=\"loggedinuser.uid == '' \" size=\"small\" color=\"primary\" (click)=\"joinpartner()\"> Join </ion-button>\n    </ion-label>\n </ion-item >\n <ion-item >\n\n<ion-badge slot=\"start\">3.1</ion-badge>\n<ion-input [(ngModel)]=\"partnercouponcode\"  maxlength=10 placeholder=\"Coupon code \"> </ion-input>\n    <ion-label   text-wrap>\n <ion-button   [disabled]=\"loggedinuser.uid == '' \" size=\"small\" color=\"primary\" (click)=\"applyvendorcouponcode()\"> Apply  </ion-button>\n  </ion-label>\n </ion-item >\n\n\n</ion-card>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/operation/tab4.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/operation/tab4.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvb3BlcmF0aW9uL3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0NBQW1DO0VBQ25DLG9CQUFtQixFQUN0Qjs7QUFHRDtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcGVyYXRpb24vdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuXG5pb24taW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/operation/tab4.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/operation/tab4.page.ts ***!
  \**********************************************/
/*! exports provided: OperPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperPage", function() { return OperPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _tab4wallet_blue011_consume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tab4wallet/blue011.consume.service */ "./src/app/pages/tab4wallet/blue011.consume.service.ts");
/* harmony import */ var _tab4wallet_blue011_issue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tab4wallet/blue011.issue.service */ "./src/app/pages/tab4wallet/blue011.issue.service.ts");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");
/* harmony import */ var _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebasekyc-page/kyc.service */ "./src/app/pages/firebasekyc-page/kyc.service.ts");
/* harmony import */ var _tab4wallet_policy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tab4wallet/policy.service */ "./src/app/pages/tab4wallet/policy.service.ts");
/* harmony import */ var _tab4wallet_webuser_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tab4wallet/webuser.service */ "./src/app/pages/tab4wallet/webuser.service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");















var OperPage = /** @class */ (function () {
    function OperPage(http, blue011consume, blue011issue, alertController, termsuserservice, kycService, policyService, webuserservice, logger, changellyCalls, router, storage) {
        this.http = http;
        this.blue011consume = blue011consume;
        this.blue011issue = blue011issue;
        this.alertController = alertController;
        this.termsuserservice = termsuserservice;
        this.kycService = kycService;
        this.policyService = policyService;
        this.webuserservice = webuserservice;
        this.logger = logger;
        this.changellyCalls = changellyCalls;
        this.router = router;
        this.storage = storage;
        this.whichdash = (_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].network == 'testnet') ? 'tDASH' : 'DASH';
        this.whichsegment = "safety";
        this.feesdisplay = {
            stddiscountfeesdisp: '',
            stdgalaxyfeesdisp: '',
            stdstarfeesdisp: '',
            stdfeesdisp: '',
            rvtdiscountfeesdisp: '',
            rvtgalaxyfeesdisp: '',
            rvtstarfeesdisp: '',
            rvtfeesdisp: '',
            networkfees: '',
        };
        this.consumefees = {
            networkfees: 0,
            fixed: 0,
            percentage: 0
        };
        this.loggedinuser = {
            uid: '',
            displayName: '',
            photoURL: '',
            phoneNumber: '',
            email: '',
            emailVerified: ''
        };
        this.enableoverwrite = false;
        this.copyofwalletkeptsafe = false;
        this.wifisprotected = false;
        this.knowwalletwifneededforrestore = false;
        this.network = _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].network;
        this.hidden = true;
        this.hiddenwif = "";
        this.useraccount = {
            termsagreed: 'no',
            testaddress: '',
            liveaddress: '',
            safetyconfirmation: 'false'
        };
        this.nullify();
    }
    ;
    OperPage.prototype.nullify = function () {
        this.loggedinuser = {
            uid: '',
            displayName: '',
            photoURL: '',
            phoneNumber: '',
            email: '',
            emailVerified: ''
        };
        this.walletbalance = {
            address: '',
            balance: 0,
            balanceSat: 0,
            unconfirmedBalanceSat: 0,
            unconfirmedBalance: 0
        };
        this.loadaccount();
    };
    OperPage.prototype.ionViewWillEnter = function () {
        this.loaduser();
        this.loadkycdata();
        this.getaccount();
    };
    OperPage.prototype.ngOnInit = function () {
        this.loaduser();
        this.loadkycdata();
        this.loadaccount();
    };
    OperPage.prototype.applycouponcode = function () {
        this.presentAlert("", "Invalid coupon code ", "");
    };
    OperPage.prototype.applyvendorcouponcode = function () {
        this.presentAlert("", "Invalid coupon code ", "");
    };
    OperPage.prototype.getconsumefees = function () {
        var _this = this;
        var detail = {
            network: this.network
        };
        this.blue011consume.getconsumefees(detail).then(function (data) {
            if (data) {
                _this.consumefees = {
                    networkfees: Number(data.networkfees),
                    fixed: Number(data.vendorfeesfixed) + Number(data.partnerfeesfixed),
                    percentage: Number(data.vendorfeespercentage) + Number(data.partnerfeespercentage)
                };
                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'consumefees', _this.consumefees);
            }
        }).catch(function (err1) {
        });
        ;
    };
    OperPage.prototype.loadaccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getuseraccount()];
                    case 1:
                        _a.useraccount = _b.sent();
                        if (this.useraccount.termsagreed == 'yes') {
                            this.feesdisplay = this.blue011issue.getdisplayfees(this.useraccount);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OperPage.prototype.loaduser = function () {
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
    OperPage.prototype.loadkycdata = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'kycdata').then(function (data) {
            _this.kycdata = data;
        });
    };
    OperPage.prototype.show = function () {
        var _this = this;
        this.hidden = false;
        setTimeout(function () {
            _this.hidden = true;
        }, 15000);
    };
    OperPage.prototype.hide = function () {
        this.hidden = true;
    };
    OperPage.prototype.clearwif = function () {
        this.walletwif = '';
    };
    OperPage.prototype.pastewif = function () {
    };
    OperPage.prototype.createwif = function () {
        var PrivateKey = dashcore.PrivateKey;
        var privateKey = new PrivateKey();
        this.walletwif = privateKey.toWIF();
        this.wiftoaddress();
    };
    OperPage.prototype.freeze = function () {
        this.savewif();
        this.enableoverwrite = false;
    };
    OperPage.prototype.wiftoaddress = function () {
        if (this.walletwif == '') {
            this.presentAlert("", "Wallet wif not set ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1231.code);
            return;
        }
        try {
            if (this.network == 'testnet') {
                this.walletaddress = dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.testnet).toString();
                return 0;
            }
            else if (this.network == 'livenet') {
                this.walletaddress = dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.livenet).toString();
                return 0;
            }
            else {
                this.presentAlert("", " Invalid network ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1231.code);
                return -1;
            }
        }
        catch (err) {
            this.presentAlert("", " Invalid WIF provided ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1231.code);
            return -1;
        }
    };
    OperPage.prototype.getkycdata = function () {
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
                        data = {
                            liveaddress: this.walletaddress,
                            testaddress: this.walletaddress,
                            network: this.network,
                            paymentdata: 'null',
                            email: this.loggedinuser.email,
                            googleid: this.loggedinuser.uid,
                            kycid: ''
                        };
                        this.kycService.getkycdata(data).then(function (kycdata) {
                            _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'kycdata', kycdata).then(function (xx) {
                                _this.loadkycdata();
                            });
                            ;
                        });
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    OperPage.prototype.savewif = function () {
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
                        if (this.loggedinuser == null) {
                            this.presentAlert("", "", " Login to save data ");
                            this.router.navigateByUrl('/login');
                            return [2 /*return*/];
                        }
                        if (this.loggedinuser.uid == null || this.loggedinuser.uid == '') {
                            this.presentAlert("User not loggedin.", "Login to proceed", "");
                            this.router.navigateByUrl('/login');
                            return [2 /*return*/];
                        }
                        if (this.useraccount.termsagreed == 'no') {
                            this.presentAlert("", "", "Agree terms before using ");
                            return [2 /*return*/];
                        }
                        if (this.wiftoaddress() == -1) {
                            this.presentAlert("", "", " Save failed ");
                            this.loadoldwif();
                            return [2 /*return*/];
                        }
                        data = {
                            liveaddress: (this.network == 'livenet') ? this.walletaddress : '',
                            testaddress: (this.network == 'testnet') ? this.walletaddress : '',
                            network: this.network,
                            paymentdata: 'null',
                            email: this.loggedinuser.email,
                            googleid: this.loggedinuser.uid,
                            name: this.loggedinuser.displayName,
                            kycid: this.useraccount ? this.useraccount.kycid : null
                        };
                        this.blue011consume.registerwif(data).then(function (useraccount) {
                            _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'walletwif', _this.walletwif);
                            _this.wiftoaddress();
                            _this.termsagree();
                            _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', useraccount).then(function (xx) {
                                _this.termsuserservice.reflectuseraccount();
                            });
                            ;
                            _this.restartwallet();
                        }).catch(function (err1) {
                            _this.logger.info(err1._body);
                            var err;
                            try {
                                err = JSON.parse(err1._body);
                            }
                            catch (errx) {
                            }
                            if (err && err.response) {
                                _this.presentAlert('Failed to save', err.response.message, _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1232.code);
                            }
                            else {
                                _this.presentAlert("", "Failed to save ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1232.code);
                            }
                            _this.loadoldwif();
                            // restore old wallet
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OperPage.prototype.getaccount = function () {
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
                            this.presentAlert("User not loggedin.", "Login to proceed", "");
                            return [2 /*return*/];
                        }
                        data = {
                            googleid: this.loggedinuser.uid,
                        };
                        this.termsuserservice.getaccount(data).then(function (data1) {
                            _this.logger.info(data1);
                            if (data1) {
                                _this.useraccount = data1;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount));
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
                                _this.termsuserservice.reflectuseraccount();
                            }
                        }, function (err1) {
                            if (err1._body) {
                                var err;
                                try {
                                    err = JSON.parse(err1._body);
                                }
                                catch (errx) {
                                }
                                if (err && err.response) {
                                    _this.presentAlert('Accept terms', err.response.message, _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1233.code);
                                }
                                else {
                                    _this.presentAlert("Unable to read account", "Check if you have accepted terms", "Or Network may be down ");
                                }
                            }
                            else {
                                _this.presentAlert("Unable to read account", "Check if you have accepted terms", "Error code: " + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1233.code);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OperPage.prototype.loadoldwif = function () {
        this.loadwalletwif();
    };
    OperPage.prototype.loadwalletwif = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'walletwif').then(function (data) {
            if (data) {
                _this.walletwif = data;
                _this.wiftoaddress();
            }
            else {
                _this.enableoverwrite = true;
                //      this.walletwif = null;
            }
        }).catch(function (err) {
            //       this.walletwif = null;
        });
    };
    OperPage.prototype.getwalletbalance = function () {
        var _this = this;
        if (!this.walletaddress) {
            this.presentAlert("", "", "Wallet address empty");
            return;
        }
        this.blue011consume.getBalance(this.walletaddress, this.network).then(function (data) {
            if (data != null) {
                _this.walletbalance = data;
                _this.savewalletbalance(_this.walletbalance);
            }
            else {
                _this.presentAlert("", "", "Balance query failed " + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1234.code);
            }
        }, function (err) {
            _this.presentAlert("", "", "Balance query failed " + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1234.code);
        });
    };
    OperPage.prototype.selfemail = function () {
        // Share via email
    };
    OperPage.prototype.createhelp = function () {
        this.presentAlert("Wallet create ", "Creates random wallet. ", "Create random wallet  or enter your own wallet WIF.Then click Save . ");
    };
    OperPage.prototype.restartwallet = function () {
        this.presentAlert("Restart wallet ", " ", "For changes to take effect.");
    };
    OperPage.prototype.termsagree = function () {
        this.presentAlert("Terms of Usage ", "Accept terms after reading.", "Accept safety terms, usage terms. ");
    };
    OperPage.prototype.presentAlert = function (title, subheader, message) {
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
                        }); }, _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].alertdelay);
                        return [2 /*return*/];
                }
            });
        });
    };
    OperPage.prototype.loadwalletbalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getwalletbalance()];
                    case 1:
                        _a.walletbalance = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OperPage.prototype.savewalletbalance = function (walletbalance) {
        var _this = this;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'walletbalance', walletbalance).then(function (x) {
            _this.termsuserservice.reflectwalletbalance();
        });
    };
    OperPage.prototype.safetyconfirmation = function () {
        if (this.copyofwalletkeptsafe && this.wifisprotected && this.knowwalletwifneededforrestore) {
            this.presentAlert("", "", "Updating confirmation. ");
            this.confirmsafety();
        }
        else {
            this.presentAlert("", "", "Confirm safety terms below. ");
            return;
        }
    };
    OperPage.prototype.gotologin = function () {
        this.router.navigateByUrl('/login');
    };
    OperPage.prototype.accept = function () {
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
                        if (!this.loggedinuser || this.loggedinuser.uid == '') {
                            return [2 /*return*/];
                        }
                        data = {
                            email: this.loggedinuser.email,
                            googleid: this.loggedinuser.uid,
                            name: this.loggedinuser.displayName,
                            termsagreed: 'yes'
                        };
                        this.termsuserservice.createaccount(data).then(function (data1) {
                            if (data1) {
                                _this.useraccount = data1;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (x) {
                                    _this.termsuserservice.reflectuseraccount();
                                });
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
                            }
                            _this.gotohome();
                        });
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    OperPage.prototype.setdashprice = function () {
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
                        if (!this.loggedinuser || this.loggedinuser.uid == '') {
                            this.presentAlert("", "Login to use ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return [2 /*return*/];
                        }
                        if (Number.isNaN(this.setdashpriceinusd)) {
                            this.presentAlert("", "Set valid price in numbers  ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return [2 /*return*/];
                        }
                        data = {
                            dashprice: this.setdashpriceinusd
                        };
                        this.webuserservice.setdashprice(data).then(function (data1) {
                            if (data1) {
                                _this.useraccount = data1;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (x) {
                                    _this.termsuserservice.reflectuseraccount();
                                });
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
                            }
                            _this.gotohome();
                        }).catch(function (err) {
                            _this.presentAlert("", "Set dash price failed", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return;
                        });
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    OperPage.prototype.docpaid = function (bal) {
        var _this = this;
        var data = {
            paidtype: 'docpaid',
            balance: bal
        };
        this.webuserservice.general(data, '/webtool/websetpaid').then(function (data1) {
            if (data1) {
                _this.useraccount = data1;
                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (x) {
                    _this.termsuserservice.reflectuseraccount();
                });
            }
        });
    };
    OperPage.prototype.greetpaid = function (bal) {
        var _this = this;
        var data = {
            paidtype: 'greetpaid',
            balance: bal
        };
        this.webuserservice.general(data, '/webtool/websetpaid').then(function (data1) {
            if (data1) {
                _this.useraccount = data1;
                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (x) {
                    _this.termsuserservice.reflectuseraccount();
                });
            }
        });
    };
    OperPage.prototype.docfreepool = function () {
        var _this = this;
        var data = {
            freepooltype: 'docfreepool'
        };
        this.webuserservice.general(data, '/webtool/webgetfreepool').then(function (data1) {
            if (data1) {
                _this.useraccount = data1;
                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (x) {
                    _this.termsuserservice.reflectuseraccount();
                });
            }
        });
    };
    OperPage.prototype.greetfreepool = function () {
        var _this = this;
        var data = {
            freepooltype: 'greetfreepool'
        };
        this.webuserservice.general(data, '/webtool/webgetfreepool').then(function (data1) {
            if (data1) {
                _this.useraccount = data1;
                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (x) {
                    _this.termsuserservice.reflectuseraccount();
                });
            }
        });
    };
    OperPage.prototype.addusage = function () {
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
                        if (!this.loggedinuser || this.loggedinuser.uid == '') {
                            this.presentAlert("", "Login to use ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return [2 /*return*/];
                        }
                        data = {
                            usageamount: 100
                        };
                        this.webuserservice.addusage(data).then(function (data1) {
                            if (data1) {
                                _this.useraccount = data1;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (x) {
                                    _this.termsuserservice.reflectuseraccount();
                                });
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
                            }
                            _this.gotohome();
                        }).catch(function (err) {
                            _this.presentAlert("", "Set dash price failed", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return;
                        });
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    OperPage.prototype.confirmsafety = function () {
        var _this = this;
        var data = {};
        this.policyService.confirmsafety(data).then(function (data1) {
            _this.getaccount();
        });
    };
    OperPage.prototype.gotohome = function () {
        this.router.navigateByUrl('/tabs/dashaccept');
    };
    OperPage.prototype.clearall = function () {
        this.storage.clear();
    };
    OperPage.prototype.localsave = function () {
        this.wiftoaddress();
        if (this.network == 'testnet') {
            if (this.walletaddress != this.useraccount.testaddress) {
                this.presentAlert("", "Test address registered not matching ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                return;
            }
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'walletwif', this.walletwif);
            this.presentAlert("", "", "Saved successsfully ");
        }
        else {
            if (this.walletaddress != this.useraccount.liveaddress) {
                this.presentAlert("", "Live address registered not matching ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                return;
            }
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'walletwif', this.walletwif);
            this.presentAlert("", "", "Saved successsfully ");
        }
    };
    OperPage.prototype.usdamountChanged = function (e) {
        this.toamount = this.changellyCalls.fromFiatDash(this.toamountusd);
        this.toamountdash = '';
    };
    OperPage.prototype.dashamountChanged = function (e) {
        this.toamount = this.changellyCalls.toSatoshi(this.toamountdash);
        this.toamountusd = '';
    };
    OperPage.prototype.gotokyc = function () {
        this.router.navigateByUrl('/kycpage');
    };
    OperPage.prototype.joinpartner = function () {
        this.presentAlert("To join", "", "Send email to support@thepaybox.biz ");
    };
    OperPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/pages/operation/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/pages/operation/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _tab4wallet_blue011_consume_service__WEBPACK_IMPORTED_MODULE_5__["Blue011ConsumeService"],
            _tab4wallet_blue011_issue_service__WEBPACK_IMPORTED_MODULE_6__["Blue011IssueService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_9__["TermsuserService"],
            _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_10__["KycService"],
            _tab4wallet_policy_service__WEBPACK_IMPORTED_MODULE_11__["PolicyService"],
            _tab4wallet_webuser_service__WEBPACK_IMPORTED_MODULE_12__["WebuserService"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_13__["Logger"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_14__["ChangellyCalls"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], OperPage);
    return OperPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-operation-tab4-module.js.map