(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-invoicesetting-tab1-module"],{

/***/ "./src/app/pages/invoicesetting/tab1.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/invoicesetting/tab1.module.ts ***!
  \*****************************************************/
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
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/invoicesetting/tab1.page.ts");








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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1invoicePage"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1invoicePage"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/invoicesetting/tab1.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/invoicesetting/tab1.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n  <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n      <ion-label > Invoice template </ion-label>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n <ion-card >\n      <ion-card-header>\n    <ion-card-subtitle>\n         Default templates  \n    </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\" *ngIf=\"defaultinvoice.default1pnotetemplate\" >\n        Type: {{defaultinvoice.default1pnotetemplate.templatetype}} \n      </ion-text>\n      <ion-text color=\"secondary\">\n      <p *ngIf=\"defaultinvoice.default1pnotetemplate\"  >  {{defaultinvoice.default1pnotetemplate.templatenumber}}  </p>\n      <p *ngIf=\"!defaultinvoice.default1pnotetemplate\"  >  Template not set   </p>\n      </ion-text>\n    </ion-label>\n      </ion-card-content>\n    <ion-item>\n\n       <ion-label class=\"ion-text-wrap\">\n     <ion-button  size=\"small\" (click)=\"loadinvoicetemplates('1pnote')\"> 1pnotes </ion-button>\n     <ion-button  size=\"small\"  (click)=\"loadinvoicetemplates('Npnote')\"> Npnotes </ion-button>\n     <ion-button  size=\"small\"  (click)=\"loadinvoicetemplates('2pagreement')\"> 2pagreement </ion-button>\n     <ion-button  size=\"small\" (click)=\"loadinvoicetemplates('2pescrow')\"> 2pescrows </ion-button>\n     <ion-button  size=\"small\"  (click)=\"loadinvoicetemplates('Documentsign')\"> Documentsign </ion-button>\n     <ion-button  size=\"small\"  (click)=\"loadinvoicetemplates('Docblockchain')\"> Docblockchain </ion-button>\n\n    </ion-label>\n    </ion-item>\n </ion-card >\n\n<div *ngIf=\"templatescreen == 'false'\">\n <ion-item >\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n     Load\n      </ion-text>\n    </ion-label>\n </ion-item >\n\n    <ion-card class=\"datainput\">\n    <ion-grid>\n       <ion-row>\n    <ion-col>\n <ion-item >\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> Title  </h3>\n      </ion-text>\n      <ion-text color=\"secondary\">\n      <h4  >  {{invoicesetting.businesstitle}}  </h4>\n      </ion-text>\n    </ion-label>\n      </ion-item >\n\n    <ion-item >\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> Type  </h3>\n      </ion-text>\n      <ion-text color=\"secondary\">\n      <p  >  {{invoicesetting.templatetype}}  </p>\n      </ion-text>\n    </ion-label>\n      </ion-item >\n\n    </ion-col>\n       </ion-row>\n       <ion-row>\n    <ion-col>\n <ion-item >\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> Address  </h3>\n      </ion-text>\n      <ion-text color=\"secondary\">\n   {{invoicesetting.contactaddress}}\n      </ion-text>\n    </ion-label>\n      </ion-item >\n    </ion-col>\n    <ion-col>\n <ion-item >\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n      </ion-text>\n\n      <ion-text color=\"secondary\">\n   <p> Email: {{invoicesetting.contactemail}} </p>\n<p> Phone : {{invoicesetting.contactphone}} </p>\n      </ion-text>\n    </ion-label>\n      </ion-item >\n    </ion-col>\n       </ion-row>\n\n       <ion-row>\n    <ion-col>\n <ion-item >\n       <ion-label class=\"ion-text-wrap\">\n\n      <ion-text color=\"primary\">\n<p> Std message  </p>\n      </ion-text>\n      <ion-text color=\"secondary\">\n{{invoicesetting.stdmessage}} \n      </ion-text>\n\n    </ion-label>\n      </ion-item >\n    </ion-col>\n       </ion-row>\n\n       <ion-row>\n\n    <ion-col>\n <ion-item >\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> Terms </h3>\n      </ion-text>\n      <ion-text color=\"secondary\">\n   {{invoicesetting.contactterms}}\n      </ion-text>\n    </ion-label>\n      </ion-item >\n    </ion-col>\n       </ion-row>\n    </ion-grid>\n\n       <ion-item>\n     <ion-button *ngIf=\"invoicesetting.templatenumber\"   (click)=\"editsetting()\"> Edit </ion-button>\n     <ion-button *ngIf=\"invoicesetting.templatenumber\"   (click)=\"deletesetting()\"> Delete </ion-button>\n     <ion-button *ngIf=\"invoicesetting.templatenumber\"   (click)=\"defaultsetting()\"> Set default </ion-button>\n     <ion-button *ngIf=\"invoicesetting.templatenumber\"   (click)=\"clearsetting()\"> Clear </ion-button>\n     <ion-button *ngIf=\"!invoicesetting.templatenumber\"   (click)=\"createsetting()\"> Create </ion-button>\n       </ion-item>\n\n    </ion-card>\n\n\n    <ion-card class=\"datainput\" *ngIf=\"foredit\">\n      <ion-card-header>\n    <ion-card-subtitle>Invoice setting </ion-card-subtitle>\n      </ion-card-header>\n <ion-item >\n <ion-badge slot=\"start\">1</ion-badge>\n         <ion-label position=\"stacked\"> Business title </ion-label>\n         <ion-input  type=\"text\"  [(ngModel)]=\"invoicesetting.businesstitle\" placeholder=\"Business title \"></ion-input>\n       </ion-item>\n\n <ion-item >\n <ion-badge slot=\"start\">1.1</ion-badge>\n         <ion-label position=\"stacked\"> Contact email </ion-label>\n         <ion-input  type=\"text\"  [(ngModel)]=\"invoicesetting.contactemail\" placeholder=\"Contact email \"></ion-input>\n       </ion-item>\n\n\n <ion-item >\n <ion-badge slot=\"start\">1.2</ion-badge>\n         <ion-label position=\"stacked\"> Contact phone </ion-label>\n         <ion-input  type=\"text\"  [(ngModel)]=\"invoicesetting.contactphone\" placeholder=\"Contact phone \"></ion-input>\n       </ion-item>\n\n <ion-item >\n <ion-badge slot=\"start\">1.3</ion-badge>\n         <ion-label position=\"stacked\"> Address </ion-label>\n         <ion-textarea rows=\"2\" class=\"ion-text-wrap\" type=\"text\"  [(ngModel)]=\"invoicesetting.contactaddress\" placeholder=\"Address  \"></ion-textarea>\n       </ion-item>\n\n <ion-item >\n <ion-badge slot=\"start\">1.4</ion-badge>\n         <ion-label position=\"stacked\"> Terms </ion-label>\n         <ion-input  type=\"text\"  [(ngModel)]=\"invoicesetting.contactterms\" placeholder=\"Terms \"></ion-input>\n       </ion-item>\n\n <ion-item >\n <ion-badge slot=\"start\">1.5</ion-badge>\n         <ion-label position=\"stacked\"> Select type, 1pnote, Npnote, 2pescrow, Documentsign, Docblockchain, 2pagreement </ion-label>\n         <ion-input  type=\"text\"  [(ngModel)]=\"invoicesetting.templatetype\" placeholder=\"type \"></ion-input>\n       </ion-item>\n\n\n  <ion-item >\n <ion-badge slot=\"start\">1.6</ion-badge>\n         <ion-label position=\"stacked\"> standard message </ion-label>\n         <ion-input  type=\"text\"  [(ngModel)]=\"invoicesetting.stdmessage\" placeholder=\"standard message \"></ion-input>\n       </ion-item>\n       <ion-item>\n\n\n\n     <ion-button   (click)=\"saveinvoice()\"> Save </ion-button>\n       </ion-item>\n\n\n\n    </ion-card>\n\n</div>\n\n<div *ngIf=\"templatescreen == 'true'\">\n <ion-item >\n     <ion-button   (click)=\"templatescreen = 'false'\"> Create template </ion-button>\n     <ion-button   slot=\"end\" (click)=\"refresh()\"> Refresh </ion-button>\n </ion-item >\n <ion-list>\n   <ion-item *ngIf=\"invoicetemplates.length == 0\" >\n  No invoice templates\n    </ion-item  >\n\n\n    <ion-item *ngFor=\"let msg of invoicetemplates\" >\n          <ion-label  text-wrap>\n            <h3> No:          {{msg.templatenumber}} </h3>\n            <h3> Title:          {{msg.businesstitle}} </h3>\n            <h3> Type:          {{msg.templatetype}} </h3>\n            <p>\n             Email:          {{msg.contactemail}} \n            </p>\n       </ion-label>\n     <ion-button   (click)=\"loadinvoice(msg)\"> Select </ion-button>\n     <ion-button   (click)=\"deleteinvoice(msg)\"> Delete </ion-button>\n     <ion-button   (click)=\"defaulttemplate(msg)\"> Set default </ion-button>\n    </ion-item>\n\n </ion-list>\n\n</div>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/invoicesetting/tab1.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/invoicesetting/tab1.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-size: 0.875em; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvaW52b2ljZXNldHRpbmcvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTSxtQkFBa0IsRUFBSTs7QUFFNUI7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0ksb0NBQW1DO0VBQ25DLG9CQUFtQixFQUN0Qjs7QUFHRDtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZvaWNlc2V0dGluZy90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7IGZvbnQtc2l6ZTogMC44NzVlbTsgfSAvLyAxNHB4IFxuXG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cblxuaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/invoicesetting/tab1.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/invoicesetting/tab1.page.ts ***!
  \***************************************************/
/*! exports provided: Tab1invoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1invoicePage", function() { return Tab1invoicePage; });
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
/* harmony import */ var _tab4wallet_invoice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab4wallet/invoice.service */ "./src/app/pages/tab4wallet/invoice.service.ts");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");
/* harmony import */ var _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../firebasekyc-page/kyc.service */ "./src/app/pages/firebasekyc-page/kyc.service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");











//import * as dashcore from '@dashevo/dashcore-lib'
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';




var Tab1invoicePage = /** @class */ (function () {
    function Tab1invoicePage(storage, changellyCalls, 
    //        private qrScanner: QRScanner,
    blue011issue, invoiceservice, termsuserservice, kycService, recordService, route, modalController, logger, alertController, activateservice, blue011consume) {
        this.storage = storage;
        this.changellyCalls = changellyCalls;
        this.blue011issue = blue011issue;
        this.invoiceservice = invoiceservice;
        this.termsuserservice = termsuserservice;
        this.kycService = kycService;
        this.recordService = recordService;
        this.route = route;
        this.modalController = modalController;
        this.logger = logger;
        this.alertController = alertController;
        this.activateservice = activateservice;
        this.blue011consume = blue011consume;
        this.whichdash = (_config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].network == 'testnet') ? 'tDASH' : 'DASH';
        this.templatescreen = 'true';
        this.purpose = '';
        this.invoiceaddress = '';
        this.invoicedmessages = [];
        this.invoicetemplates = [];
        this.network = _config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].network;
        this.whichsegment = "invoice";
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
        this.defaultinvoice = {
            defaultinvoicetemplate: '',
            default1pnotetemplate: '',
            defaultnpnotetemplate: '',
            default2pescrowtemplate: '',
            defaultdocumentsigntemplate: '',
            defaultdocumentblockchaintemplate: '',
            default2pagreementtemplate: '',
        };
        this.invoicesetting = {
            id: '',
            format: 'default',
            invoiceemail: '',
            invoicephone: '',
            invoicemessage: '',
            invoicenumber: '',
            invoiceamount: '',
            invoiceunit: '',
            dashprice: '',
            dashamount: '',
            templatenumber: '',
            templatetype: '',
            businesstitle: '',
            contactemail: '',
            contactphone: '',
            contactaddress: '',
            stdmessage: '',
            senderaddress: '',
            contactterms: '',
            receiveaddress: '',
        };
        this.foredit = false;
        this.loadaccount();
        this.loadinvoicetemplates('any');
        this.getdefaultsetting();
        this.getdefinv();
    }
    ;
    Tab1invoicePage.prototype.getdefinv = function () {
        var _this = this;
        this.invoiceservice.getdefaultinvtemplate().then(function (xx) {
            if (xx) {
                _this.defaultinvoice = JSON.parse(xx);
            }
        });
    };
    Tab1invoicePage.prototype.editsetting = function () {
        this.foredit = true;
    };
    Tab1invoicePage.prototype.clearsetting = function () {
        this.initinvoice();
        this.foredit = false;
    };
    Tab1invoicePage.prototype.defaulttemplate = function (inv) {
        var _this = this;
        this.invoiceservice.webdefaultinvtemplate(inv).then(function (xx) {
            // this.storage.set(environment.storageuniq+'defaulttemplate', JSON.stringify(xx) );
            _this.getdefaultsetting();
        }, function (err) {
            _this.presentAlert("", "", "Error default setting.");
        });
    };
    Tab1invoicePage.prototype.getdefaultsetting = function () {
        var _this = this;
        var data = {};
        this.invoiceservice.webgetdefaultinvtemplate(data).then(function (xx) {
            _this.defaultinvoice = xx;
            _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].storageuniq + 'defaulttemplate', JSON.stringify(xx));
        }, function (err) {
            _this.presentAlert("", "", "Error default setting.");
        });
    };
    /*
    defaultsetting() {
    
    this.invoiceservice.webdefaultinvtemplate(this.invoicesetting).then(xx=>{
    
      this.getdefaultsetting() ;
     this.storage.set(environment.storageuniq+'defaulttemplate', JSON.stringify(xx) );
    
     }, (err) => {
        this.presentAlert("", "", "Error default setting.");
    
     });
    
    }
    */
    Tab1invoicePage.prototype.createsetting = function () {
        this.initinvoice();
        this.foredit = true;
    };
    Tab1invoicePage.prototype.initinvoice = function () {
        this.invoicesetting = {
            id: '',
            format: 'default',
            invoiceemail: '',
            invoicephone: '',
            invoicemessage: '',
            invoicenumber: '',
            invoiceamount: '',
            invoiceunit: '',
            dashprice: '',
            dashamount: '',
            templatenumber: '',
            templatetype: '',
            businesstitle: '',
            contactemail: '',
            contactphone: '',
            contactaddress: '',
            senderaddress: '',
            contactterms: '',
            stdmessage: '',
            receiveaddress: '',
        };
    };
    ;
    Tab1invoicePage.prototype.saveinvoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.foredit = false;
                if (this.invoicesetting.businesstitle == '' ||
                    this.invoicesetting.contactaddress == '' ||
                    this.invoicesetting.templatetype == '' ||
                    this.invoicesetting.contactemail == '' ||
                    this.invoicesetting.contactphone == '' ||
                    this.invoicesetting.stdmessage == '' ||
                    this.invoicesetting.contactterms == '') {
                    this.presentAlert("", "", "Enter all fields .");
                    return [2 /*return*/];
                }
                if (!(this.invoicesetting.templatetype == '1pnote' ||
                    this.invoicesetting.templatetype == 'Npnote' ||
                    this.invoicesetting.templatetype == '2pescrow' ||
                    this.invoicesetting.templatetype == 'Documentsign' ||
                    this.invoicesetting.templatetype == 'Docblockchain' ||
                    this.invoicesetting.templatetype == '2pagreement')) {
                    this.presentAlert("", "", "Enter type correctly .");
                    return [2 /*return*/];
                }
                this.invoiceservice.webcreateinvtemplate(this.invoicesetting).then(function (xx) {
                }, function (err) {
                    _this.presentAlert("", "", "Error saving.");
                    _this.initinvoice();
                });
                return [2 /*return*/];
            });
        });
    };
    Tab1invoicePage.prototype.getaccount = function () {
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
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (xx) {
                                    _this.termsuserservice.reflectuseraccount();
                                });
                                ;
                                ;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
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
                                    _this.presentAlert('Accept terms', err.response.message, _config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].err.W1233.code);
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
    Tab1invoicePage.prototype.assigninvoiceaddress = function () {
        this.invoiceaddress = this.walletaddress;
    };
    Tab1invoicePage.prototype.loadinvoice = function (inv) {
        this.invoicesetting = inv;
        this.foredit = false;
        this.templatescreen = "false";
    };
    Tab1invoicePage.prototype.deleteinvoice = function (inv) {
        var _this = this;
        this.invoiceservice.webdeleteinvtemplate(inv).then(function (xx) {
            _this.loadinvoicetemplates('any');
        }).catch(function (xx) {
        });
    };
    Tab1invoicePage.prototype.deletesetting = function () {
        var _this = this;
        this.invoiceservice.webdeleteinvtemplate(this.invoicesetting).then(function (xx) {
            _this.loadinvoicetemplates('any');
        }).catch(function (xx) {
        });
    };
    Tab1invoicePage.prototype.nullify = function () {
        this.loggedinuser = {
            uid: '',
            displayName: '',
            photoURL: '',
            phoneNumber: '',
            email: '',
            emailVerified: ''
        };
    };
    Tab1invoicePage.prototype.loadaccount = function () {
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
    Tab1invoicePage.prototype.loadinvoicetemplates = function (pp) {
        var _this = this;
        var data = {
            templatetype: pp
        };
        this.invoiceservice.webgetinvtemplates(data).then(function (xx) {
            if (xx) {
                _this.invoicetemplates = xx;
            }
            else {
                _this.invoicetemplates = [];
            }
            _this.templatescreen = 'true';
        }).catch(function (err) {
            _this.templatescreen = 'true';
        });
    };
    Tab1invoicePage.prototype.loaduser = function () {
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
    Tab1invoicePage.prototype.goToBarcodeScan = function () {
    };
    Tab1invoicePage.prototype.copyaddress = function () {
    };
    Tab1invoicePage.prototype.pastecontract = function () {
    };
    Tab1invoicePage.prototype.pastepin = function () {
    };
    Tab1invoicePage.prototype.ngOnInit = function () {
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
    Tab1invoicePage.prototype.forreverse = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].storageuniq + 'forreverse').then(function (xx) {
            if (xx) {
                _this.revertible.message = xx.message;
                _this.revertible.pin = xx.pin;
                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].storageuniq + 'forreverse', null);
            }
        });
    };
    Tab1invoicePage.prototype.loadkycdata = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].storageuniq + 'kycstatus').then(function (data) {
            if (data)
                _this.kycstatus = data;
        });
    };
    Tab1invoicePage.prototype.presentAlert = function (header, subheader, message) {
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
                        }); }, _config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].alertdelay);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1invoicePage.prototype.ionViewWillEnter = function () {
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
        this.loadinvoicedmessages();
    };
    Tab1invoicePage.prototype.decryptcontract = function (contract, pin) {
        var data;
        try {
            data = this.changellyCalls.decryptcontract(contract, pin);
            return data;
        }
        catch (err) {
            this.presentAlert('', '', "Invalid data " + _config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].err.W1224.code);
            return null;
        }
    };
    Tab1invoicePage.prototype.wiftoaddress = function () {
        if (this.network == 'testnet') {
            this.walletaddress = dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.testnet).toString();
        }
        else if (this.network == 'livenet') {
            this.walletaddress = dashcore.PrivateKey.fromWIF(this.walletwif).toAddress(dashcore.Networks.livenet).toString();
        }
        else {
            this.presentAlert('', '', "Invalid network " + _config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].err.W1223.code);
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
    Tab1invoicePage.prototype.loadwalletwif = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].storageuniq + 'walletwif').then(function (data) {
            if (data) {
                _this.walletwif = data;
                _this.wiftoaddress();
                _this.loadwalletbalance();
            }
            else {
                _this.presentAlert('', '', "Set your wallet before use " + _config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].err.W1222.code);
                // this.router.navigateByUrl('/tabs/tab4');
            }
        });
    };
    Tab1invoicePage.prototype.getwalletbalance = function () {
        var _this = this;
        if (!this.walletaddress) {
            this.presentAlert('', '', "Address field empty " + _config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].err.W1220.code);
            return;
        }
        this.blue011consume.getBalance(this.walletaddress, this.network).then(function (data) {
            if (data != null) {
                _this.walletbalance = data;
                _this.savewalletbalance(_this.walletbalance);
            }
            else {
                _this.presentAlert('', '', "Balance check failed  " + _config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].err.W1220.code);
            }
        }, function (err) {
            _this.presentAlert('Get balance failed', 'Error', _config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].err.W1220.code);
        });
    };
    Tab1invoicePage.prototype.refresh = function () {
        this.loadinvoicedmessages();
        this.presentAlert('', '', 'Refreshed');
    };
    Tab1invoicePage.prototype.loadinvoicedmessages = function () {
        var _this = this;
        this.blue011consume.getinvoicedmessages().then(function (data) {
            if (data != null) {
                _this.invoicedmessages = data;
            }
            else {
                //        alert("Load failed");
            }
        }, function (err) {
            _this.presentAlert('', '', err);
        });
    };
    Tab1invoicePage.prototype.clearall = function () {
        this.blue011consume.deleteallmessage();
        this.presentAlert('', '', "Cleared");
    };
    Tab1invoicePage.prototype.scanqrcode = function () {
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
    Tab1invoicePage.prototype.loadwalletbalance = function () {
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
    Tab1invoicePage.prototype.savewalletbalance = function (walletbalance) {
        var _this = this;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].storageuniq + 'walletbalance', walletbalance).then(function (x) {
            _this.termsuserservice.reflectwalletbalance();
        });
    };
    Tab1invoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/pages/invoicesetting/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/invoicesetting/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_4__["ChangellyCalls"],
            _tab4wallet_blue011_issue_service__WEBPACK_IMPORTED_MODULE_9__["Blue011IssueService"],
            _tab4wallet_invoice_service__WEBPACK_IMPORTED_MODULE_10__["InvoiceService"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_12__["TermsuserService"],
            _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_13__["KycService"],
            _tab4wallet_record_service__WEBPACK_IMPORTED_MODULE_6__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_14__["Logger"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _tab4wallet_activate_service__WEBPACK_IMPORTED_MODULE_7__["ActivateService"],
            _tab4wallet_blue011_consume_service__WEBPACK_IMPORTED_MODULE_8__["Blue011ConsumeService"]])
    ], Tab1invoicePage);
    return Tab1invoicePage;
}());



/***/ }),

/***/ "./src/app/pages/tab4wallet/invoice.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tab4wallet/invoice.service.ts ***!
  \*****************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");






var InvoiceService = /** @class */ (function () {
    function InvoiceService(http, storage, changellyCalls) {
        this.http = http;
        this.storage = storage;
        this.changellyCalls = changellyCalls;
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    InvoiceService.prototype.checkreceivepolicy = function () {
        //    return this.receivepolicydata; 
    };
    InvoiceService.prototype.getdefaultinvtemplate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'defaulttemplate')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InvoiceService.prototype.webdefaultinvtemplate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webdefaultinvtemplate', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.payment = function (details, theurl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + theurl, JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.acceptpayment = function (details, theurl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + theurl, JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webgetdefaultinvtemplate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webgetdefaultinvtemplate', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webcreateinvtemplate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webcreateinvtemplate', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webdeleteinvoice = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webdeleteinvoice', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webdeleteinvtemplate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webdeleteinvtemplate', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webgetinvtemplates = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webgetinvtemplates', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webgetinvoices = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webgetinvoices', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_5__["ChangellyCalls"]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-invoicesetting-tab1-module.js.map