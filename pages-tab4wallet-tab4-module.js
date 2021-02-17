(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tab4wallet-tab4-module"],{

/***/ "./src/app/pages/tab4wallet/tab4.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tab4wallet/tab4.module.ts ***!
  \*************************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pages/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab4.page */ "./src/app/pages/tab4wallet/tab4.page.ts");








var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_7__["Tab4Page"] }])
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_7__["Tab4Page"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab4wallet/tab4.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/tab4wallet/tab4.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n   <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      Misc\n    </ion-title>\n\n    <ion-buttons slot=\"secondary\">\n     <!--ion-button  [disabled]=\"useraccount.termsagreed == 'no'\" [disabled]=\"!loggedinuser\"  (click)=\"gotokyc()\">\n                KYC\n            </ion-button -->\n   <ion-button  [disabled]=\"!loggedinuser\"  (click)=\"getaccount()\">\n                Refresh\n            </ion-button>\n\n\n\n            <ion-button  [disabled]=\"loggedinuser && loggedinuser.uid != ''\" (click)=\"gotologin()\">\n                Login\n            </ion-button>\n     </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n<ion-card>\n\n<ion-item  >\n <ion-badge slot=\"start\">1</ion-badge>\n    <ion-label class=\"ion-text-wrap\" > <h4> \n  By clicking “Accept”, \n\n  </h4>\n    <p>\nI agree to terms and conditions in the <a routerLink=\"/termspage\"> link. </a>\n\n    </p>\n    </ion-label>\n\n\n    <ion-label slot=\"end\"  >\n <ion-button   [disabled]=\"loggedinuser.uid == '' || useraccount.termsagreed == 'yes' \" size=\"small\" color=\"primary\" (click)=\"accept()\"> Accept </ion-button>\n    </ion-label>\n  </ion-item>\n\n</ion-card>\n\n\n<!-- ion-card>\n\n <ion-item >\n <ion-badge slot=\"start\">1</ion-badge>\n    <ion-label class=\"ion-text-wrap\"> <h4> Default wallet selected </h4>\n         <p *ngIf=\"useraccount.defaultwallet\"> {{useraccount.defaultwallet.name}} </p>\n         <p *ngIf=\"useraccount.defaultwallet\"> {{useraccount.defaultwallet.address}} </p>\n    </ion-label>\n  </ion-item>\n <ion-item >\n <ion-badge slot=\"start\">2</ion-badge>\n     <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> Balance </h3>\n      </ion-text>\n      <ion-text color=\"secondary\">\n      <p >  {{whichdash}}  </p>\n      </ion-text>\n    </ion-label>\n\n\n    <ion-label fill=\"outline\" slot=\"end\">\n <h4 *ngIf=\"walletbalance\"> {{walletbalance.balanceSat | FromSatoshi | number: '1.0-9'}} </h4>\n  <ion-button    size=\"small\" color=\"primary\" (click)=\"getwalletbalance()\"> Balance </ion-button>\n    </ion-label>\n\n  </ion-item>\n\n</ion-card>\n<ion-card>\n\n<ion-item  >\n <ion-badge slot=\"start\">3</ion-badge>\n    <ion-label class=\"ion-text-wrap\" > <h4> \n  By clicking “Accept”, \n\n  </h4>\n    <p> \nI agree to terms and conditions in the <a routerLink=\"/termspage\"> link. </a>\n\n    </p>\n    </ion-label>\n\n\n    <ion-label slot=\"end\"  >\n <ion-button   [disabled]=\"loggedinuser.uid == '' || useraccount.termsagreed == 'yes' \" size=\"small\" color=\"primary\" (click)=\"accept()\"> Accept </ion-button>\n    </ion-label>\n  </ion-item>\n\n</ion-card>\n\n<ion-card>\n\n<ion-card-header>\n  <ion-card-title>\nSet your conversion price\n  </ion-card-title>\n<ion-card-subtitle>\nCheck prices below\n</ion-card-subtitle>\n</ion-card-header>\n<div *ngIf=\"false\">\n    <ion-item  >\n   <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n    <ion-label class=\"ion-text-wrap\" >\n    <h2> Enter in {{whichdash}} </h2>\n    <p> Amount in {{whichdash}} {{toamount | FromSatoshi | number: '1.0-9' }}</p>\n    </ion-label>\n\n\n       <ion-input  slot=\"end\"   (ionChange)=\"dashamountChanged($event)\" [(ngModel)]=\"toamountdash\" placeholder=\"Enter in {{whichdash}} \"></ion-input>\n\n       </ion-item>\n\n       <ion-item >\n\n   <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n    <ion-label class=\"ion-text-wrap\" >\n    <h2> Enter in USD </h2>\n    <p> Amount in {{whichdash}} {{toamount | FromSatoshi | number: '1.0-9' }} </p>\n    </ion-label>\n       <ion-input  slot=\"end\" (ionChange)=\"usdamountChanged($event)\" [(ngModel)]=\"toamountusd\" placeholder=\"Enter in USD \"></ion-input>\n\n       </ion-item>\n       <ion-item>\n    <ion-label class=\"ion-text-wrap\" >\n    <h2> Displayed in USD, Satoshi </h2>\n    <p> USD  {{toamount | ToFiatDash | number : '1.0-4'  }}\n    <p> Satoshi   {{toamount | number: '1.0-0' }}  </p>\n\n    </ion-label>\n       </ion-item>\n</div>\n       <ion-item>\n    <ion-label class=\"ion-text-wrap\" >\n    <h2> Your DASH price in USD  </h2>\n     </ion-label>\n       <ion-input  slot=\"end\" [(ngModel)]=\"setdashpriceinusd\" placeholder=\"Enter in USD \"></ion-input>\n       </ion-item>\n       <ion-item>\n <ion-button   slot=\"end\" [disabled]=\"loggedinuser.uid == '' || useraccount.termsagreed == 'yes' \" size=\"small\" color=\"primary\" (click)=\"setdashprice()\"> Set price </ion-button>\n <ion-button   slot=\"end\" size=\"small\" color=\"primary\" (click)=\"setdashprice()\"> Set price </ion-button>\n       </ion-item>\n\n\n       </ion-card>\n\n<ion-card  class=\"datainput\">\n<ion-card-header>\n<ion-card-title>\nWallet-1\n</ion-card-title>\n\n</ion-card-header>\n<ion-item>\n<ion-label position=\"stacked\"> Enter wallet name </ion-label>\n<ion-input   class=\"ion-text-wrap\" placeholder=\"Wallet name\" [(ngModel)]=\"address1.name\" > </ion-input>\n\n</ion-item>\n\n<ion-item>\n<ion-label position=\"stacked\"> Enter DASH wallet address </ion-label>\n<ion-textarea  rows=\"2\" class=\"ion-text-wrap\" placeholder=\"Dash address\" [(ngModel)]=\"address1.address\" > </ion-textarea>\n\n</ion-item>\n<ion-item>\n <ion-button size=\"small\" color=\"primary\" (click)=\"setdefaultaddress('setaddress1', null)\"> Save </ion-button>\n <ion-button size=\"small\" color=\"primary\" (click)=\"setdefaultaddress('deladdress1', null)\"> Delete </ion-button>\n <ion-button size=\"small\" color=\"primary\" (click)=\"setdefaultaddress('setdefaultwallet','wallet1' )\"> Set as default </ion-button>\n</ion-item>\n</ion-card>\n\n<ion-card  class=\"datainput\">\n<ion-card-header>\n<ion-card-title>\nWallet-2\n</ion-card-title>\n\n</ion-card-header>\n<ion-item>\n<ion-label position=\"stacked\"> Enter wallet name </ion-label>\n<ion-input   class=\"ion-text-wrap\" placeholder=\"Wallet name\" [(ngModel)]=\"address2.name\" > </ion-input>\n\n</ion-item>\n\n<ion-item>\n<ion-label position=\"stacked\"> Enter DASH wallet address </ion-label>\n<ion-textarea  rows=\"2\" class=\"ion-text-wrap\" placeholder=\"Dash address\" [(ngModel)]=\"address2.address\" > </ion-textarea>\n\n</ion-item>\n<ion-item>\n <ion-button size=\"small\" color=\"primary\" (click)=\"setdefaultaddress('setaddress2', null)\"> Save </ion-button>\n <ion-button size=\"small\" color=\"primary\" (click)=\"setdefaultaddress('deladdress2', null)\"> Delete </ion-button>\n <ion-button size=\"small\" color=\"primary\" (click)=\"setdefaultaddress('setdefaultwallet','wallet2' )\"> Set as default </ion-button>\n</ion-item>\n</ion-card>\n\n<ion-card>\n<ion-card-header>\n<ion-card-title>\nFees requesting DASH\n</ion-card-title>\n</ion-card-header>\n<ion-card-content>\n<p> 10$/request . </p>\n<p> First 10 requests free. </p>\n<p *ngIf=\"useraccount.tokenbalance\"> Current balance:  {{useraccount.tokenbalance}} </p>\n</ion-card-content>\n</ion-card>\n\n<ion-card>\n<ion-card-header>\n<ion-card-title>\nFees receiving DASH\n</ion-card-title>\n<ion-card-subtitle>\nAdditional network fees of  {{whichdash}} {{consumefees.networkfees | FromSatoshi | number: '1.0-9' }}  is applicable (*)\n</ion-card-subtitle>\n</ion-card-header>\n  <ion-item>\n  Service charges\n  </ion-item>\n   <ion-item>\n <ion-button size=\"small\" color=\"primary\" (click)=\"getconsumefees()\"> Get fees </ion-button>\n   </ion-item>\n\n  <ion-item>\n   <ion-label class=\"ion-text-wrap\" >\n  <h3>  * Receive payment </h3>\n \n    <p> {{whichdash}} {{consumefees.fixed | FromSatoshi | number: '1.0-9' }}\n       +         {{consumefees.percentage  }}  % </p>\n  </ion-label>\n   </ion-item>\n\n\n</ion-card>\n\n<ion-card >\n\n</ion-card -->\n\n\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/pages/tab4wallet/tab4.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/tab4wallet/tab4.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvdGFiNHdhbGxldC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEI7O0FBR0Q7RUFDSSxvQ0FBbUM7RUFDbkMsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFiNHdhbGxldC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5cbmlvbi1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tab4wallet/tab4.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tab4wallet/tab4.page.ts ***!
  \***********************************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _blue011_consume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blue011.consume.service */ "./src/app/pages/tab4wallet/blue011.consume.service.ts");
/* harmony import */ var _blue011_issue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blue011.issue.service */ "./src/app/pages/tab4wallet/blue011.issue.service.ts");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");
/* harmony import */ var _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebasekyc-page/kyc.service */ "./src/app/pages/firebasekyc-page/kyc.service.ts");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./policy.service */ "./src/app/pages/tab4wallet/policy.service.ts");
/* harmony import */ var _webuser_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./webuser.service */ "./src/app/pages/tab4wallet/webuser.service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");















var Tab4Page = /** @class */ (function () {
    function Tab4Page(http, blue011consume, blue011issue, alertController, termsuserservice, kycService, policyService, webuserservice, logger, changellyCalls, router, storage) {
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
        this.address1 = {
            name: '',
            address: ''
        };
        this.address2 = {
            name: '',
            address: ''
        };
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
        this.refresh();
    }
    ;
    Tab4Page.prototype.nullify = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
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
                        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'consumefees').then(function (xx) {
                            if (xx) {
                                _this.consumefees = xx;
                            }
                        });
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        _a.loggedinuser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.ionViewWillEnter = function () {
        this.refresh();
    };
    Tab4Page.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loaduser();
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        _a.loggedinuser = _b.sent();
                        this.getaccount();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.ngOnInit = function () {
        this.refresh();
    };
    Tab4Page.prototype.getconsumefees = function () {
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
    Tab4Page.prototype.loadaccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getuseraccount()];
                    case 1:
                        _a.useraccount = _b.sent();
                        if (this.useraccount.address1)
                            this.address1 = this.useraccount.address1;
                        if (this.useraccount.address2)
                            this.address2 = this.useraccount.address2;
                        if (this.useraccount.dashprice)
                            this.setdashpriceinusd = this.useraccount.dashprice;
                        if (this.useraccount.termsagreed == 'yes') {
                            this.feesdisplay = this.blue011issue.getdisplayfees(this.useraccount);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.loaduser = function () {
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
    Tab4Page.prototype.loadkycdata = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'kycdata').then(function (data) {
            _this.kycdata = data;
        });
    };
    Tab4Page.prototype.show = function () {
        var _this = this;
        this.hidden = false;
        setTimeout(function () {
            _this.hidden = true;
        }, 15000);
    };
    Tab4Page.prototype.hide = function () {
        this.hidden = true;
    };
    Tab4Page.prototype.clearwif = function () {
        this.walletwif = '';
    };
    Tab4Page.prototype.pastewif = function () {
    };
    Tab4Page.prototype.createwif = function () {
    };
    Tab4Page.prototype.freeze = function () {
        this.savewif();
        this.enableoverwrite = false;
    };
    Tab4Page.prototype.wiftoaddress = function () {
    };
    Tab4Page.prototype.getkycdata = function () {
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
                            liveaddress: this.useraccount.defaultwallet.address,
                            testaddress: this.useraccount.defaultwallet.address,
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
    Tab4Page.prototype.savewif = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Tab4Page.prototype.getaccount = function () {
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
                            this.presentAlert("", "User not loggedin", "Login to proceed");
                            return [2 /*return*/];
                        }
                        data = {
                            googleid: this.loggedinuser.uid,
                        };
                        this.termsuserservice.getaccount(data).then(function (data1) {
                            _this.logger.info(data1);
                            if (data1) {
                                _this.useraccount = data1;
                                if (_this.useraccount.address1)
                                    _this.address1 = _this.useraccount.address1;
                                if (_this.useraccount.address2)
                                    _this.address2 = _this.useraccount.address2;
                                if (_this.useraccount.dashprice)
                                    _this.setdashpriceinusd = _this.useraccount.dashprice;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount));
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
                                _this.termsuserservice.reflectuseraccount();
                                _this.gotohome();
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
    Tab4Page.prototype.loadoldwif = function () {
    };
    Tab4Page.prototype.loadwalletwif = function () {
    };
    Tab4Page.prototype.getwalletbalance = function () {
        var _this = this;
        if (!this.useraccount.defaultwallet.address) {
            this.presentAlert("", "", "Wallet address empty");
            return;
        }
        this.blue011consume.getBalance(this.useraccount.defaultwallet.address, this.network).then(function (data) {
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
    Tab4Page.prototype.selfemail = function () {
        // Share via email
    };
    Tab4Page.prototype.createhelp = function () {
        this.presentAlert("Wallet create ", "Creates random wallet. ", "Create random wallet  or enter your own wallet WIF.Then click Save . ");
    };
    Tab4Page.prototype.restartwallet = function () {
        this.presentAlert("Restart wallet ", " ", "For changes to take effect.");
    };
    Tab4Page.prototype.termsagree = function () {
        this.presentAlert("Terms of Usage ", "Accept terms after reading.", "Accept safety terms, usage terms. ");
    };
    Tab4Page.prototype.presentAlert = function (title, subheader, message) {
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
    Tab4Page.prototype.loadwalletbalance = function () {
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
    Tab4Page.prototype.savewalletbalance = function (walletbalance) {
        var _this = this;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'walletbalance', walletbalance).then(function (x) {
            _this.termsuserservice.reflectwalletbalance();
        });
    };
    Tab4Page.prototype.safetyconfirmation = function () {
        if (this.copyofwalletkeptsafe && this.wifisprotected && this.knowwalletwifneededforrestore) {
            this.presentAlert("", "", "Updating confirmation. ");
            this.confirmsafety();
        }
        else {
            this.presentAlert("", "", "Confirm safety terms below. ");
            return;
        }
    };
    Tab4Page.prototype.gotologin = function () {
        this.router.navigateByUrl('/login');
    };
    Tab4Page.prototype.accept = function () {
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
                            _this.refresh();
                        }).catch(function (err) {
                            _this.presentAlert("", "Create account failed", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return;
                        });
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.setdashprice = function () {
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
    Tab4Page.prototype.setdefaultaddress = function (x, y) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pp, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pp = {
                            item: x,
                            action: y
                        };
                        if ('setaddress1' == x && this.address1.address == '') {
                            this.presentAlert("", "Wallet address1 not set  ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return [2 /*return*/];
                        }
                        if ('setaddress2' == x && this.address2.address == '') {
                            this.presentAlert("", "Wallet address2 not set  ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return [2 /*return*/];
                        }
                        if ('setdefaultwallet' == x && y == 'wallet2' && this.address2.address == '') {
                            this.presentAlert("", "Wallet address2 not set  ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return [2 /*return*/];
                        }
                        if ('setdefaultwallet' == x && y == 'wallet1' && this.address1.address == '') {
                            this.presentAlert("", "Wallet address1 not set  ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return [2 /*return*/];
                        }
                        if ('deladdress1' == x && !this.useraccount.address1) {
                            this.presentAlert("", "Wallet address1 not set  ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return [2 /*return*/];
                        }
                        if ('deladdress2' == x && !this.useraccount.address2) {
                            this.presentAlert("", "Wallet address1 not set  ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return [2 /*return*/];
                        }
                        if ('setdefaultwallet' == x && y == 'wallet1' && this.address1) {
                        }
                        if ('setaddress1' == x && this.address1.address != '') {
                            if (this.network == 'testnet') {
                                if (!dashcore.Address.isValid(this.address1.address, dashcore.Networks.testnet)) {
                                    this.presentAlert("", "", "Invalid address ");
                                    return [2 /*return*/];
                                }
                            }
                            else {
                                if (!dashcore.Address.isValid(this.address1.address, dashcore.Networks.livenet)) {
                                    this.presentAlert("", "", "Invalid address ");
                                    return [2 /*return*/];
                                }
                            }
                            pp.action = this.address1;
                        }
                        if ('setaddress2' == x && this.address2.address != '') {
                            if (this.network == 'testnet') {
                                if (!dashcore.Address.isValid(this.address2.address, dashcore.Networks.testnet)) {
                                    this.presentAlert("", "", "Invalid address ");
                                    return [2 /*return*/];
                                }
                            }
                            else {
                                if (!dashcore.Address.isValid(this.address2.address, dashcore.Networks.livenet)) {
                                    this.presentAlert("", "", "Invalid address ");
                                    return [2 /*return*/];
                                }
                            }
                            pp.action = this.address2;
                        }
                        if ('deladdress2' == x && this.useraccount.address2) {
                            if (this.useraccount.address2.address == this.useraccount.defaultwallet.address) {
                                this.presentAlert("", "", "Default address cannot be deleted ");
                                return [2 /*return*/];
                            }
                            pp.action = this.address2;
                        }
                        if ('deladdress1' == x && this.useraccount.address1) {
                            if (this.useraccount.address1.address == this.useraccount.defaultwallet.address) {
                                this.presentAlert("", "", "Default address cannot be deleted ");
                                return [2 /*return*/];
                            }
                            pp.action = this.address1;
                        }
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
                        this.webuserservice.setdefaultaddress(pp).then(function (data1) {
                            if (data1) {
                                _this.useraccount = data1;
                            }
                            _this.refresh();
                        }).catch(function (err) {
                            _this.presentAlert("", "Operation failed", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                            return;
                        });
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.confirmsafety = function () {
        var _this = this;
        var data = {};
        this.policyService.confirmsafety(data).then(function (data1) {
            _this.getaccount();
        });
    };
    Tab4Page.prototype.gotohome = function () {
        this.router.navigateByUrl('/docvalidate');
    };
    Tab4Page.prototype.clearall = function () {
        this.storage.clear();
    };
    Tab4Page.prototype.localsave = function () {
        if (this.network == 'testnet') {
            if (this.useraccount.defaultwallet.address != this.useraccount.testaddress) {
                this.presentAlert("", "Test address registered not matching ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                return;
            }
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'walletwif', this.walletwif);
            this.presentAlert("", "", "Saved successsfully ");
        }
        else {
            if (this.useraccount.defaultwallet.address != this.useraccount.liveaddress) {
                this.presentAlert("", "Live address registered not matching ", "Error code:" + _config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].err.W1230.code);
                return;
            }
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'walletwif', this.walletwif);
            this.presentAlert("", "", "Saved successsfully ");
        }
    };
    Tab4Page.prototype.usdamountChanged = function (e) {
        this.toamount = this.changellyCalls.fromFiatDash(this.toamountusd);
        this.toamountdash = '';
    };
    Tab4Page.prototype.dashamountChanged = function (e) {
        this.toamount = this.changellyCalls.toSatoshi(this.toamountdash);
        this.toamountusd = '';
    };
    Tab4Page.prototype.gotokyc = function () {
        this.router.navigateByUrl('/kycpage');
    };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/pages/tab4wallet/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/pages/tab4wallet/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _blue011_consume_service__WEBPACK_IMPORTED_MODULE_5__["Blue011ConsumeService"],
            _blue011_issue_service__WEBPACK_IMPORTED_MODULE_6__["Blue011IssueService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_9__["TermsuserService"],
            _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_10__["KycService"],
            _policy_service__WEBPACK_IMPORTED_MODULE_11__["PolicyService"],
            _webuser_service__WEBPACK_IMPORTED_MODULE_12__["WebuserService"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_13__["Logger"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_14__["ChangellyCalls"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tab4wallet-tab4-module.js.map