(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1receive-tab1-module"],{

/***/ "./src/app/pages/tab1receive/tab1.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tab1receive/tab1.module.ts ***!
  \**************************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pages/pipes/pipes.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1receive/tab1.page.ts");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1receivePage"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1receivePage"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab1receive/tab1.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages/tab1receive/tab1.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n  <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n  <ion-segment  [(ngModel)]=\"whichsegment\">\n    <ion-segment-button value=\"requested\">\n      <ion-label > Requested </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"processed\">\n      <ion-label > Processed </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n<div *ngIf=\"whichsegment == 'requested'\">\n     <ion-item >\n      <ion-button slot=\"end\" size=\"small\" color=\"primary\" (click)=\"clearall()\"> Archive </ion-button>\n      <ion-button slot=\"end\" size=\"small\" color=\"primary\" (click)=\"refresh()\"> Refresh </ion-button>\n      </ion-item >\n\n\n\n     <ion-item *ngIf=\"userrecords.length == 0\" >\n  No records\n    </ion-item  >\n\n <ion-list>\n\n    <ion-item *ngFor=\"let msg of userrecords\" >\n          <ion-label  text-wrap>\n            <h3> Ref:          {{msg.id}} </h3>\n            <h3> Message:          {{msg.message}} </h3>\n            <h4> To address:          {{msg.target}} </h4>\n            <p>\n          PIN: {{msg.pin }}\n            </p>\n       </ion-label>\n    </ion-item>\n\n </ion-list>\n\n\n    <ion-card >\n      <ion-card-header>\n     <ion-card-subtitle>DASH</ion-card-subtitle>\n    <ion-card-title >Transaction status </ion-card-title>\n\n      </ion-card-header>\n\n      <ion-item >\n      <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n     \n     <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> TRANSACTION ID  </h3>\n      </ion-text>\n      <ion-text color=\"secondary\">\n      <p *ngIf=\"transacted.txid\" >  {{transacted.txid}}  </p>\n      <p *ngIf=\"!transacted.txid\" >  Place for transaction id  </p>\n      </ion-text>\n    </ion-label>\n\n\n      </ion-item>\n      <ion-item >\n      <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n     Amount : {{transacted.amount | FromSatoshi | number: '1.0-9' }} DASH\n      </ion-item>\n\n      <ion-item >\n      <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> From address </h3>\n      </ion-text>\n      <ion-text color=\"secondary\">\n      <p *ngIf=\"transacted.fromaddress\" >  {{transacted.fromaddress}}  </p>\n      <p *ngIf=\"!transacted.fromaddress\" >  Place for from address  </p>\n      </ion-text>\n    </ion-label>\n    <ion-label fill=\"outline\" slot=\"end\"> \n      <ion-icon name=\"arrow-forward\" ></ion-icon>\n      <ion-icon name=\"arrow-forward\" ></ion-icon>\n      <ion-icon name=\"arrow-forward\" ></ion-icon>\n    </ion-label>\n\n\n      </ion-item >\n\n\n      <ion-item >\n      <ion-icon name=\"arrow-forward\" slot=\"start\"></ion-icon>\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> To address </h3>\n      </ion-text>\n      <ion-text color=\"secondary\">\n      <p *ngIf=\"transacted.toaddress\" >  {{transacted.toaddress}}  </p>\n      <p *ngIf=\"!transacted.toaddress\" >  Place for to address  </p>\n      </ion-text>\n    </ion-label>\n      </ion-item >\n\n\n\n    </ion-card>\n\n\n</div>\n\n<div *ngIf=\"whichsegment == 'processed'\">\n     <ion-item >\n      <ion-button slot=\"end\" size=\"small\" color=\"primary\" (click)=\"clearall()\"> Clear all </ion-button>\n      <ion-button slot=\"end\" size=\"small\" color=\"primary\" (click)=\"refresh()\"> Refresh </ion-button>\n      </ion-item >\n\n\n  <ion-item *ngIf=\"processedmessages.length == 0\" >\n  No records\n    </ion-item  >\n\n <ion-list>\n\n    <ion-item *ngFor=\"let msg of processedmessages\" >\n          <ion-label  text-wrap>\n            <h3> Ref:          {{msg.id}} </h3>\n            <h3> Message:          {{msg.message}} </h3>\n            <h4> To address:          {{msg.target}} </h4>\n            <p>\n          PIN: {{msg.pin }}\n            </p>\n       </ion-label>\n    </ion-item>\n\n </ion-list>\n</div>\n\n</ion-content>\n<!-- ion-footer>\n  <ion-toolbar color=\"primary\" class=\"ion-text-center\">\n    <ion-title>\n<sup> Made in </sup>  <img alt=\"91springboard\" height=\"40\"    src=\"assets/imgs/91springlogo.png\"  float=\"left\" />\n   </ion-title>\n  </ion-toolbar>\n</ion-footer -->\n\n"

/***/ }),

/***/ "./src/app/pages/tab1receive/tab1.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/tab1receive/tab1.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-size: 0.875em; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvdGFiMXJlY2VpdmUvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxtQkFBa0IsRUFBSTs7QUFFNUI7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0ksb0NBQW1DO0VBQ25DLG9CQUFtQixFQUN0Qjs7QUFHRDtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWIxcmVjZWl2ZS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7IGZvbnQtc2l6ZTogMC44NzVlbTsgfSAvLyAxNHB4IFxuXG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cblxuaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tab1receive/tab1.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/tab1receive/tab1.page.ts ***!
  \************************************************/
/*! exports provided: Tab1receivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1receivePage", function() { return Tab1receivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tab4wallet_record_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tab4wallet/record.service */ "./src/app/pages/tab4wallet/record.service.ts");
/* harmony import */ var _tab4wallet_activate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tab4wallet/activate.service */ "./src/app/pages/tab4wallet/activate.service.ts");
/* harmony import */ var _tab4wallet_blue011_consume_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tab4wallet/blue011.consume.service */ "./src/app/pages/tab4wallet/blue011.consume.service.ts");
/* harmony import */ var _tab4wallet_blue011_issue_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tab4wallet/blue011.issue.service */ "./src/app/pages/tab4wallet/blue011.issue.service.ts");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");
/* harmony import */ var _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../firebasekyc-page/kyc.service */ "./src/app/pages/firebasekyc-page/kyc.service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");










//import * as dashcore from '@dashevo/dashcore-lib'
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';




var Tab1receivePage = /** @class */ (function () {
    function Tab1receivePage(storage, changellyCalls, 
    //        private qrScanner: QRScanner,
    blue011issue, termsuserservice, kycService, activateservice, recordService, route, modalController, logger, alertController, blue011consume) {
        this.storage = storage;
        this.changellyCalls = changellyCalls;
        this.blue011issue = blue011issue;
        this.termsuserservice = termsuserservice;
        this.kycService = kycService;
        this.activateservice = activateservice;
        this.recordService = recordService;
        this.route = route;
        this.modalController = modalController;
        this.logger = logger;
        this.alertController = alertController;
        this.blue011consume = blue011consume;
        this.whichdash = (_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].network == 'testnet') ? 'tDASH' : 'DASH';
        this.purpose = '';
        this.receiveaddress = '';
        this.processedmessages = [];
        this.userrecords = [];
        this.processedrecords = [];
        this.network = _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].network;
        this.whichsegment = "processed";
        this.useraccount = {
            termsagreed: 'no'
        };
        this.loggedinuser = {
            uid: '',
            displayName: '',
            photoURL: '',
            phoneNumber: '',
            email: '',
            emailVerified: ''
        };
        this.loadaccount();
    }
    ;
    Tab1receivePage.prototype.getaccount = function () {
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
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (xx) {
                                    _this.termsuserservice.reflectuseraccount();
                                });
                                ;
                                ;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
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
                                    _this.presentAlert('Accept terms', err.response.message, _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1233.code);
                                }
                                else {
                                    _this.presentAlert("", "", "Error connecting.");
                                }
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
    Tab1receivePage.prototype.assignreceiveaddress = function () {
        this.receiveaddress = this.walletaddress;
    };
    Tab1receivePage.prototype.nullify = function () {
        this.loggedinuser = {
            uid: '',
            displayName: '',
            photoURL: '',
            phoneNumber: '',
            email: '',
            emailVerified: ''
        };
    };
    Tab1receivePage.prototype.loadaccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getuseraccount()];
                    case 1:
                        _a.useraccount = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1receivePage.prototype.loaduser = function () {
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
    Tab1receivePage.prototype.goToBarcodeScan = function () {
    };
    Tab1receivePage.prototype.copyaddress = function () {
    };
    Tab1receivePage.prototype.pastecontract = function () {
    };
    Tab1receivePage.prototype.pastepin = function () {
    };
    Tab1receivePage.prototype.ngOnInit = function () {
        this.loaduser();
        //  this.loaduseraccount() ;
        this.loadkycdata();
        this.loadaccount();
        this.transacted = {
            "txid": "",
            "amount": "",
            "fromaddress": "",
            "toaddress": "",
        };
        this.revertible = {
            "id": "",
            "message": "",
            "pin": "",
            "address": "",
            "email": "",
            "target": "",
            "kycstatus": "",
            "network": "",
            "type": "BLUE011",
        };
        this.walletbalance = {
            address: '',
            balance: 0,
            balanceSat: 0,
            unconfirmedBalance: 0,
            unconfirmedBalanceSat: 0
        };
        this.loadwalletwif();
        this.loadwalletbalance();
        this.forreverse();
    };
    Tab1receivePage.prototype.forreverse = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'forreverse').then(function (xx) {
            if (xx) {
                _this.revertible.message = xx.message;
                _this.revertible.pin = xx.pin;
                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'forreverse', null);
            }
        });
    };
    Tab1receivePage.prototype.loadkycdata = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'kycstatus').then(function (data) {
            if (data)
                _this.kycstatus = data;
        });
    };
    Tab1receivePage.prototype.presentAlert = function (header, subheader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
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
                        }); }, _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].alertdelay);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1receivePage.prototype.ionViewWillEnter = function () {
        this.loadwalletwif();
        this.loaduser();
        //  this.loaduseraccount() ;
        this.loadkycdata();
        this.getaccount();
        this.loadwalletbalance();
        this.forreverse();
        var contract = this.route.snapshot.paramMap.get('contract');
        var pin = this.route.snapshot.paramMap.get('pin');
        if (contract && pin) {
            this.revertible.message = this.decryptcontract(contract, "pinforuse");
            this.revertible.pin = pin;
            this.presentAlert('', '', "Accept funds from escrow");
        }
        else if (contract) {
            this.revertible.message = this.decryptcontract(contract, "pinforuse");
            this.presentAlert('', '', "Enter PIN and accept funds");
        }
        this.loadreceivedmessages();
    };
    Tab1receivePage.prototype.decryptcontract = function (contract, pin) {
        var data;
        try {
            data = this.changellyCalls.decryptcontract(contract, pin);
            return data;
        }
        catch (err) {
            this.presentAlert('', '', "Invalid data " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1224.code);
            return null;
        }
    };
    Tab1receivePage.prototype.wiftoaddress = function () {
        if (this.network == 'testnet') {
            this.walletaddress = dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.testnet).toString();
        }
        else if (this.network == 'livenet') {
            this.walletaddress = dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.livenet).toString();
        }
        else {
            this.presentAlert('', '', "Invalid network " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1223.code);
        }
    };
    /*
    sendpayment() {
    
     this.blue011issue.getUtxo(this.walletaddress, this.network).then((data: any) => {
     var fees = 15000;
     var utxo = data;
     var privatekey = dashcore.PrivateKey.fromWIF(this.walletwif);
     var changeaddress = this.walletaddress;
     
        var tx = this.blue011issue.createtransaction(utxo, privatekey,changeaddress, this.toaddress, Number(this.toamount),fees ) ;
    
        this.blue011issue.broadcast(tx.toString('hex'), this.network).then(res => {
        
        // alert(res);
    
        });
    
      });
    }
    */
    Tab1receivePage.prototype.loadwalletwif = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'walletwif').then(function (data) {
            if (data) {
                _this.walletwif = data;
                _this.wiftoaddress();
                _this.loadwalletbalance();
            }
            else {
                _this.presentAlert('', '', "Set your wallet before use " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1222.code);
                // this.router.navigateByUrl('/tabs/tab4');
            }
        });
    };
    Tab1receivePage.prototype.consumemessage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        _a.loggedinuser = _c.sent();
                        if (this.loggedinuser.uid == '') {
                            this.presentAlert('', '', "Login to use " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            return [2 /*return*/];
                        }
                        _b = this;
                        return [4 /*yield*/, this.termsuserservice.getuseraccount()];
                    case 2:
                        _b.useraccount = _c.sent();
                        if (!this.loggedinuser.email || this.loggedinuser.email == '') {
                            this.presentAlert('', '', "Login to use " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            return [2 /*return*/];
                        }
                        if (this.useraccount.termsagreed == 'no') {
                            this.presentAlert("", "", "Agree terms before using ");
                            return [2 /*return*/];
                        }
                        if (this.purpose == '') {
                            this.presentAlert('', '', "Mention purpose " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            return [2 /*return*/];
                        }
                        if (!this.revertible.message) {
                            this.presentAlert('', '', "Contract field empty " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            return [2 /*return*/];
                        }
                        if (!this.revertible.pin) {
                            this.presentAlert('', '', "PIN field empty " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            return [2 /*return*/];
                        }
                        this.revertible.kycstatus = this.useraccount.kycdone;
                        /*
                        not needed as it is base64
                        var data;
                        
                        try {
                             data = JSON.parse(this.revertible.message );
                            } catch (err) {
                          this.decryptcontract(this.revertible.message, this.revertible.pin);
                        }
                        
                        try {
                             data = JSON.parse(this.revertible.message );
                            } catch (err) {
                          
                           return;
                        }
                        */
                        this.revertible.target = this.receiveaddress;
                        if (!this.revertible.target) {
                            this.presentAlert('', '', "Provide address to receive funds " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            return [2 /*return*/];
                        }
                        if (!dashcore.Address.isValid(this.revertible.target, this.network)) {
                            this.presentAlert('', '', "Invalid receive address provided " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            return [2 /*return*/];
                        }
                        this.revertible.network = this.network;
                        this.revertible.email = this.loggedinuser.email;
                        this.revertible.id = this.revertible.address.substr(this.revertible.address.length - 5);
                        this.blue011consume.savereceivedmessage(this.revertible);
                        this.activateservice.consumemessage(this.revertible, '/webactive/consumemessage').then(function (data1) {
                            if (data1 != null) {
                                var data;
                                if (typeof data1 == 'string') {
                                    _this.presentAlert('', data1, "Error processing Request " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                                    return;
                                }
                                else {
                                    data = data1;
                                }
                                if (data.error) {
                                    _this.presentAlert('', '', "Error processing Request " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                                    return;
                                }
                                _this.transacted = data;
                                _this.blue011consume.savereceivetransaction(_this.transacted);
                                _this.blue011consume.updatereceivedmessage(_this.revertible, _this.transacted);
                                var receive = {
                                    data: _this.transacted,
                                    amount: _this.transacted.amount,
                                    fees: _this.transacted.fees,
                                    txid: _this.transacted.txid,
                                    purpose: _this.purpose,
                                    id: _this.transacted.fromaddress.substr(-5),
                                    address: _this.transacted.fromaddress,
                                };
                                _this.recordService.recordreceive(receive);
                                _this.loadreceivedmessages();
                            }
                            else {
                                _this.presentAlert('', '', " Receive funds failed " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            }
                        }, function (err1) {
                            _this.logger.info(err1._body);
                            var err;
                            try {
                                err = JSON.parse(err1._body);
                            }
                            catch (errx) {
                            }
                            if (err && err.response) {
                                _this.presentAlert('Receive funds failed', err.response.message, _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            }
                            else {
                                _this.presentAlert('Receive funds failed', 'Error', _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1221.code);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1receivePage.prototype.getwalletbalance = function () {
        var _this = this;
        if (!this.walletaddress) {
            this.presentAlert('', '', "Address field empty " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1220.code);
            return;
        }
        this.blue011consume.getBalance(this.walletaddress, this.network).then(function (data) {
            if (data != null) {
                _this.walletbalance = data;
                _this.savewalletbalance(_this.walletbalance);
            }
            else {
                _this.presentAlert('', '', "Balance check failed  " + _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1220.code);
            }
        }, function (err) {
            _this.presentAlert('Get balance failed', 'Error', _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].err.W1220.code);
        });
    };
    Tab1receivePage.prototype.refresh = function () {
        this.loadreceivedmessages();
        this.presentAlert('', '', 'Refreshed');
    };
    Tab1receivePage.prototype.loadreceivedmessages = function () {
        var _this = this;
        this.blue011consume.getreceivedmessages().then(function (data) {
            if (data != null) {
                //this.receivedmessages = data;
            }
            else {
                //        alert("Load failed");
            }
        }, function (err) {
            _this.presentAlert('', '', err);
        });
    };
    Tab1receivePage.prototype.clearall = function () {
        this.blue011consume.deleteallmessage();
        this.presentAlert('', '', "Cleared");
    };
    Tab1receivePage.prototype.scanqrcode = function () {
        // not used as it conflicts with barcode 
        /*
          // Optionally request the permission early
        this.qrScanner.prepare()
          .then((status: QRScannerStatus) => {
             if (status.authorized) {
               // camera permission was granted
        
        
               // start scanning
               let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                 this.logger.info('Scanned something', text);
        
                 this.qrScanner.hide(); // hide camera preview
                 scanSub.unsubscribe(); // stop scanning
               });
               this.qrScanner.show();
        
             } else if (status.denied) {
               // camera permission was permanently denied
               // you must use QRScanner.openSettings() method to guide the user to the settings page
               this.qrScanner.openSettings() ;
               // then they can grant the permission from there
             } else {
               // permission was denied, but not permanently. You can ask for permission again at a later time.
             }
          })
          .catch((e: any) => this.logger.info('Error is', e));
        
        */
    };
    /*
       async presentModalDash() {
        var item = {
            displayq: 'dash',
            addresstodeposit: this.walletaddress,
            title: 'Address to deposit',
            topmessage: 'Deposit DASH',
            bottommessage: ''
        };
    
        const modal = await this.modalController.create({
          component: QrdisplaymodalPage,
          componentProps: { obj: item }
        });
        return await modal.present();
      }
    
    */
    Tab1receivePage.prototype.loadwalletbalance = function () {
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
    Tab1receivePage.prototype.savewalletbalance = function (walletbalance) {
        var _this = this;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'walletbalance', walletbalance).then(function (x) {
            _this.termsuserservice.reflectwalletbalance();
        });
    };
    Tab1receivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/pages/tab1receive/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tab1receive/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_4__["ChangellyCalls"],
            _tab4wallet_blue011_issue_service__WEBPACK_IMPORTED_MODULE_9__["Blue011IssueService"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_11__["TermsuserService"],
            _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_12__["KycService"],
            _tab4wallet_activate_service__WEBPACK_IMPORTED_MODULE_7__["ActivateService"],
            _tab4wallet_record_service__WEBPACK_IMPORTED_MODULE_6__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_13__["Logger"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _tab4wallet_blue011_consume_service__WEBPACK_IMPORTED_MODULE_8__["Blue011ConsumeService"]])
    ], Tab1receivePage);
    return Tab1receivePage;
}());



/***/ })

}]);
//# sourceMappingURL=tab1receive-tab1-module.js.map