(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paytm-tab4-module"],{

/***/ "./src/app/pages/paytm/tab4.module.ts":
/*!********************************************!*\
  !*** ./src/app/pages/paytm/tab4.module.ts ***!
  \********************************************/
/*! exports provided: PaytmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaytmPageModule", function() { return PaytmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pages/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab4.page */ "./src/app/pages/paytm/tab4.page.ts");








var PaytmPageModule = /** @class */ (function () {
    function PaytmPageModule() {
    }
    PaytmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_7__["PaytmPage"] }])
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_7__["PaytmPage"]]
        })
    ], PaytmPageModule);
    return PaytmPageModule;
}());



/***/ }),

/***/ "./src/app/pages/paytm/tab4.page.html":
/*!********************************************!*\
  !*** ./src/app/pages/paytm/tab4.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n   <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      Manage usage limit\n    </ion-title>\n\n    <ion-buttons slot=\"secondary\">\n     <ion-button  [disabled]=\"useraccount.termsagreed == 'no'\" [disabled]=\"!loggedinuser\"  (click)=\"gotokyc()\">\n                KYC\n            </ion-button>\n   <ion-button  [disabled]=\"!loggedinuser\"  (click)=\"getaccount()\">\n                Refresh\n            </ion-button>\n\n\n\n            <ion-button  [disabled]=\"loggedinuser && loggedinuser.uid != ''\" (click)=\"gotologin()\">\n                Login\n            </ion-button>\n     </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-card>\n<ion-card-header>\nDocument \n</ion-card-header>\n  <div>\n        <form  #paytmForm=\"ngForm\" >\n        <ion-item>\n            <ion-label for=\"email\">Email:</ion-label>\n            <ion-input  [(ngModel)]=\"paytmform.email\" type=\"email\" name=\"email\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label for=\"phone\">Phone:</ion-label>\n            <ion-input  [(ngModel)]=\"paytmform.phone\" type=\"text\" name=\"phone\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label for=\"amount\">Amount:</ion-label>\n            <ion-input  [(ngModel)]=\"paytmform.amount\" type=\"text\" name=\"amount\"> </ion-input>\n        </ion-item>\n            <button (click)=\"sendtopaytm()\" type=\"submit\">Submit</button>\n        </form>\n    </div>\n</ion-card>\n            <ion-button (click)=\"openpaytm()\" >Submit 1</ion-button>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/paytm/tab4.page.scss":
/*!********************************************!*\
  !*** ./src/app/pages/paytm/tab4.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvcGF5dG0vdGFiNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQ0FBbUM7RUFDbkMsb0JBQW1CLEVBQ3RCOztBQUdEO0VBQ0ksb0NBQW1DO0VBQ25DLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheXRtL3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cblxuaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/paytm/tab4.page.ts":
/*!******************************************!*\
  !*** ./src/app/pages/paytm/tab4.page.ts ***!
  \******************************************/
/*! exports provided: PaytmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaytmPage", function() { return PaytmPage; });
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
/* harmony import */ var _tab4wallet_paytm_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tab4wallet/paytm.service */ "./src/app/pages/tab4wallet/paytm.service.ts");
/* harmony import */ var _tab4wallet_webuser_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tab4wallet/webuser.service */ "./src/app/pages/tab4wallet/webuser.service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");
















var PaytmPage = /** @class */ (function () {
    function PaytmPage(http, blue011consume, blue011issue, alertController, termsuserservice, kycService, paytmservice, policyService, webuserservice, logger, changellyCalls, router, storage) {
        this.http = http;
        this.blue011consume = blue011consume;
        this.blue011issue = blue011issue;
        this.alertController = alertController;
        this.termsuserservice = termsuserservice;
        this.kycService = kycService;
        this.paytmservice = paytmservice;
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
        this.paytmform = {
            email: '',
            phone: '',
            amount: ''
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
    PaytmPage.prototype.nullify = function () {
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
    PaytmPage.prototype.ionViewWillEnter = function () {
        this.loaduser();
        this.loadkycdata();
        this.getaccount();
    };
    PaytmPage.prototype.ngOnInit = function () {
        this.loaduser();
        this.loadkycdata();
        this.loadaccount();
    };
    PaytmPage.prototype.getconsumefees = function () {
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
    PaytmPage.prototype.loadaccount = function () {
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
    PaytmPage.prototype.loaduser = function () {
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
    PaytmPage.prototype.loadkycdata = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'kycdata').then(function (data) {
            _this.kycdata = data;
        });
    };
    PaytmPage.prototype.show = function () {
        var _this = this;
        this.hidden = false;
        setTimeout(function () {
            _this.hidden = true;
        }, 15000);
    };
    PaytmPage.prototype.hide = function () {
        this.hidden = true;
    };
    PaytmPage.prototype.clearwif = function () {
        this.walletwif = '';
    };
    PaytmPage.prototype.pastewif = function () {
    };
    PaytmPage.prototype.createwif = function () {
        var PrivateKey = dashcore.PrivateKey;
        var privateKey = new PrivateKey();
        this.walletwif = privateKey.toWIF();
        this.wiftoaddress();
    };
    PaytmPage.prototype.freeze = function () {
        this.savewif();
        this.enableoverwrite = false;
    };
    PaytmPage.prototype.wiftoaddress = function () {
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
    PaytmPage.prototype.getkycdata = function () {
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
    PaytmPage.prototype.savewif = function () {
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
    PaytmPage.prototype.getaccount = function () {
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
    PaytmPage.prototype.loadoldwif = function () {
        this.loadwalletwif();
    };
    PaytmPage.prototype.loadwalletwif = function () {
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
    PaytmPage.prototype.getwalletbalance = function () {
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
    PaytmPage.prototype.selfemail = function () {
        // Share via email
    };
    PaytmPage.prototype.createhelp = function () {
        this.presentAlert("Wallet create ", "Creates random wallet. ", "Create random wallet  or enter your own wallet WIF.Then click Save . ");
    };
    PaytmPage.prototype.restartwallet = function () {
        this.presentAlert("Restart wallet ", " ", "For changes to take effect.");
    };
    PaytmPage.prototype.termsagree = function () {
        this.presentAlert("Terms of Usage ", "Accept terms after reading.", "Accept safety terms, usage terms. ");
    };
    PaytmPage.prototype.presentAlert = function (title, subheader, message) {
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
    PaytmPage.prototype.loadwalletbalance = function () {
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
    PaytmPage.prototype.savewalletbalance = function (walletbalance) {
        var _this = this;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'walletbalance', walletbalance).then(function (x) {
            _this.termsuserservice.reflectwalletbalance();
        });
    };
    PaytmPage.prototype.safetyconfirmation = function () {
        if (this.copyofwalletkeptsafe && this.wifisprotected && this.knowwalletwifneededforrestore) {
            this.presentAlert("", "", "Updating confirmation. ");
            this.confirmsafety();
        }
        else {
            this.presentAlert("", "", "Confirm safety terms below. ");
            return;
        }
    };
    PaytmPage.prototype.gotologin = function () {
        this.router.navigateByUrl('/login');
    };
    PaytmPage.prototype.accept = function () {
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
    PaytmPage.prototype.setdashprice = function () {
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
    PaytmPage.prototype.addusage = function () {
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
    PaytmPage.prototype.confirmsafety = function () {
        var _this = this;
        var data = {};
        this.policyService.confirmsafety(data).then(function (data1) {
            _this.getaccount();
        });
    };
    PaytmPage.prototype.gotohome = function () {
        this.router.navigateByUrl('/tabs/dashaccept');
    };
    PaytmPage.prototype.clearall = function () {
        this.storage.clear();
    };
    PaytmPage.prototype.localsave = function () {
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
    PaytmPage.prototype.usdamountChanged = function (e) {
        this.toamount = this.changellyCalls.fromFiatDash(this.toamountusd);
        this.toamountdash = '';
    };
    PaytmPage.prototype.dashamountChanged = function (e) {
        this.toamount = this.changellyCalls.toSatoshi(this.toamountdash);
        this.toamountusd = '';
    };
    PaytmPage.prototype.gotokyc = function () {
        this.router.navigateByUrl('/kycpage');
    };
    PaytmPage.prototype.sendclientpaytm = function () {
        /*
         var paytmParams = {};
         var paytmParams.body = {
                            "requestType": "Payment",
                            "mid": PaytmConfig.PaytmConfig.mid,
                            "websiteName": PaytmConfig.PaytmConfig.website,
                            "orderId": orderId,
                            "callbackUrl": "https://dashrevert.belavaditech.com/callback",
                            "txnAmount": {
                                "value": this.paytmform.amount,
                                "currency": "INR",
                            },
                            "userInfo": {
                                "custId": this.paytmform.email,
                            },
                        };
        
        
                        paytmservice.generateSignature(paytmParams.body).then(function (checksum) {
        
                            paytmParams.head = {
                                "signature": checksum
                            };
        
        
                   var myurl = 'https://securegw-stage.paytm.in' +'/theia/api/v1/initiateTransaction?mid='+PaytmConfig.PaytmConfig.mid+'&orderId='+orderId;
                    paytmservice.initiate(paytmParams, myurl).then(function (resp) {
                      
                      console.log(resp);
        
                        });
        
                       });
        
        */
    };
    ;
    PaytmPage.prototype.sendtopaytm = function () {
        var _this = this;
        // I will do API call and will get CHECKSUMHASH.
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        this.http.post('https://dashrevert.belavaditech.com/paynow', JSON.stringify(this.paytmform), { headers: headers })
            .subscribe(function (res1) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var res, myurl, initiated;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(res1._body);
                        res = JSON.parse(res1._body);
                        myurl = 'https://securegw-stage.paytm.in/order/process?mid=' + res.mid + '&orderId=' + res.orderid;
                        console.log(res.paytmparams);
                        return [4 /*yield*/, this.paytmservice.initiate(res.paytmparams, myurl)];
                    case 1:
                        initiated = _a.sent();
                        console.log(initiated);
                        this.showdynamicopen(res, initiated.body.txnToken);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ;
    PaytmPage.prototype.openpaytm = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        this.http.post('https://dashrevert.belavaditech.com/paynow', JSON.stringify(this.paytmform), { headers: headers })
            .subscribe(function (res1) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var popupWin;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                popupWin = window.open('', '_blank', 'top=0,left=0,height=600px,width=600px');
                popupWin.document.write(res1._body);
                return [2 /*return*/];
            });
        }); });
    };
    PaytmPage.prototype.dynamicopen = function (xx) {
        var printContents, popupWin;
        printContents = xx; //document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=400px,width=400px');
        popupWin.document.write(xx);
        //popupWin.document.close();
    };
    PaytmPage.prototype.showdynamicopen = function (init, txnToken) {
        var printContents, popupWin;
        printContents = "<html>\n                                <head>\n                                    <title>Show Payment Page</title>\n                                </head>\n                                <body>\n                                    <center>\n                                        <h1>Please do not refresh this page...</h1>\n                                    </center>\n                                    <form method=\"post\" action=\"https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=" + init.mid + "&orderid=" + init.orderid + "\" name=\"paytm\">\n                                        <table border=\"1\">\n                                            <tbody>\n                                                <input type=\"hidden\" name=\"mid\" value=\"" + init.mid + "\">\n                                                    <input type=\"hidden\" name=\"orderId\" value=\"" + init.orderId + "\">\n                                                    <input type=\"hidden\" name=\"txnToken\" value=\"" + txnToken + "\">\n                                         </tbody>\n                                      </table>\n                                                    <script type=\"text/javascript\"> document.paytm.submit(); </script>\n                                   </form>\n                                </body>\n    </html>";
        popupWin = window.open('', '_blank', 'top=0,left=0,height=600px,width=600px');
        popupWin.document.write(printContents);
        //popupWin.document.close();
    };
    PaytmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/pages/paytm/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/pages/paytm/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _tab4wallet_blue011_consume_service__WEBPACK_IMPORTED_MODULE_5__["Blue011ConsumeService"],
            _tab4wallet_blue011_issue_service__WEBPACK_IMPORTED_MODULE_6__["Blue011IssueService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_9__["TermsuserService"],
            _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_10__["KycService"],
            _tab4wallet_paytm_service__WEBPACK_IMPORTED_MODULE_12__["PaytmService"],
            _tab4wallet_policy_service__WEBPACK_IMPORTED_MODULE_11__["PolicyService"],
            _tab4wallet_webuser_service__WEBPACK_IMPORTED_MODULE_13__["WebuserService"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_14__["Logger"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_15__["ChangellyCalls"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], PaytmPage);
    return PaytmPage;
}());



/***/ }),

/***/ "./src/app/pages/tab4wallet/paytm.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tab4wallet/paytm.service.ts ***!
  \***************************************************/
/*! exports provided: PaytmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaytmService", function() { return PaytmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");






var PaytmService = /** @class */ (function () {
    function PaytmService(http, storage, changellyCalls) {
        this.http = http;
        this.storage = storage;
        this.changellyCalls = changellyCalls;
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    PaytmService.prototype.initiate = function (details, myurl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(myurl, JSON.stringify(details), { headers: null })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PaytmService.prototype.generateSignature = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/generatesignature', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    PaytmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_5__["ChangellyCalls"]])
    ], PaytmService);
    return PaytmService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-paytm-tab4-module.js.map