(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-docvalidateverify-tab3sending-module"],{

/***/ "./src/app/pages/docvalidateverify/tab3sending.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/docvalidateverify/tab3sending.module.ts ***!
  \***************************************************************/
/*! exports provided: Tab3sendingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3sendingPageModule", function() { return Tab3sendingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pages/pipes/pipes.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3sending_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3sending.page */ "./src/app/pages/docvalidateverify/tab3sending.page.ts");








var Tab3sendingPageModule = /** @class */ (function () {
    function Tab3sendingPageModule() {
    }
    Tab3sendingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3sending_page__WEBPACK_IMPORTED_MODULE_7__["Tab3sendingPage"] }])
            ],
            declarations: [_tab3sending_page__WEBPACK_IMPORTED_MODULE_7__["Tab3sendingPage"]]
        })
    ], Tab3sendingPageModule);
    return Tab3sendingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/docvalidateverify/tab3sending.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/docvalidateverify/tab3sending.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n\n   <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n\n\n      <ion-label *ngIf=\"mode=='verify'\"> Verify document, user </ion-label>\n      <ion-label *ngIf=\"mode=='validate'\"> Pay and Validate </ion-label>\n      <ion-label *ngIf=\"mode==''\"> Validate and verify </ion-label>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n\n\n    <div *ngIf=\"!validationrecord\" >\n  Document is being loaded. Wait .....\n    </div>\n    <div *ngIf=\"validationrecord\" >\n\n    <div *ngIf=\"mode=='validate'\" >\n   <ion-card >\n      <ion-card-header >\n     Make payment to validate\n      </ion-card-header >\n      <ion-card-content >\n    <ion-item  >\n          <ion-label  text-wrap>\n            <h4> Validation address: </h4>         <p> {{validationrecord.escrowaddress}} </p>\n            <h4 *ngIf=\"validationrecord.reqstatus == 'new'\"> Status :     Blockchain address for validation </h4>\n            <h4 *ngIf=\"validationrecord.reqstatus == 'funded'\"> Status :     Ready for validation </h4>\n            <h4 *ngIf=\"validationrecord.reqstatus == 'accepted'\"> Status :     Document validated </h4>\n            <div *ngIf=\"!(validationrecord.reqstatus == 'accepted')\" > \n         <h4 > Balance :     {{validationrecord.balance | FromSatoshi | number: '1.0-9' }}  </h4>\n   <p *ngIf=\"validationrecord.escrowaddress == tmpaddress\"> Unconfirmed : {{tmpunconfirmed | FromSatoshi | number: '1.0-9' }} </p>\n          </div>\n       \n       </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"!(validationrecord.reqstatus == 'accepted')\">\n          <ion-label  text-wrap> \n           <h4> Payment mode </h4>\n    <div *ngIf=\"validationrecord.docvalidatefeaturetype\">\n      <ion-button [disabled]=\"!(validationrecord.docvalidatefeaturetype == 'system')\" slot=\"end\" size=\"small\" color=\"primary\" (click)=\"systempay(validationrecord)\"> System  </ion-button>\n      <ion-button [disabled]=\"!(validationrecord.docvalidatefeaturetype == 'personal')\" slot=\"end\" size=\"small\" color=\"primary\" (click)=\"personalpay(validationrecord)\"> Personal  </ion-button>\n      <ion-button [disabled]=\"!(validationrecord.docvalidatefeaturetype == 'company')\" slot=\"end\" size=\"small\" color=\"primary\" (click)=\"companypay(validationrecord)\"> Company  </ion-button>\n\n    </div>\n       </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"(validationrecord.reqstatus == 'accepted')\">\n      <ion-label  text-wrap>\n    Document validated. \n<p> Document hash on blockchain :  {{dochashinblockchain}} </p>\n\n      <ion-button  slot=\"end\" size=\"small\" color=\"primary\" (click)=\"mode='verify'\" > Verify </ion-button>\n      </ion-label>\n\n    </ion-item>\n\n\n    <ion-item *ngIf=\"!(validationrecord.reqstatus == 'accepted')\">\n   <ion-button  size=\"small\" color=\"primary\" (click)=\"getescrowbalance(validationrecord)\"> Status </ion-button>\n    </ion-item>\n      </ion-card-content >\n      </ion-card >\n   <ion-card  *ngIf=\"!(validationrecord.reqstatus == 'accepted')\">\n      <ion-card-header >\n     Validate using email-id and validation code\n      </ion-card-header >\n      <ion-card-content >\n <ion-item>\n <ion-badge slot=\"start\">1</ion-badge>\n      <ion-input  [(ngModel)]=\"validation.emailid\" placeholder=\"Validator email-id \" ></ion-input>\n </ion-item>\n\n <ion-item >\n <ion-badge slot=\"start\">2</ion-badge>\n      <ion-input  [(ngModel)]=\"validation.validationcode\" placeholder=\"Validation code \" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-button   slot=\"start\" size=\"small\" color=\"primary\" (click)=\"validatedocument(validationrecord)\"> Validate </ion-button>\n  </ion-item>\n\n      </ion-card-content >\n </ion-card>\n\n\n   </div>\n   </div>\n\n    <div *ngIf=\"validationrecord\" >\n    <div *ngIf=\"mode=='verify'\" >\n\n   <ion-card >\n      <ion-card-header >\n     Validated transaction on Blockchain\n      </ion-card-header >\n      <ion-card-content >\n <ion-item>\n <ion-badge slot=\"start\">1</ion-badge>\n    <ion-label  class=\"ion-text-wrap\">\n      <ion-text color=\"primary\"> Txid  </ion-text>\n      <ion-text color=\"secondary\"> {{validationrecord.txid}}  </ion-text>\n    </ion-label >\n      <ion-button   slot=\"end\" size=\"small\" color=\"primary\" (click)=\"verifytxid(validationrecord.txid)\"> Load </ion-button>\n </ion-item>\n <ion-item>\n <ion-badge slot=\"start\">2</ion-badge>\n    <ion-label  class=\"ion-text-wrap\">\n      <ion-text color=\"primary\"> \n      <h4> Document  : {{txidvalidation.document}} </h4>\n      <h4> Document hash : {{txidvalidation.documenthash}} </h4>\n\n      </ion-text>\n      <ion-text color=\"secondary\"> \n      <h4> Validator hash : {{txidvalidation.validatorhash}}  </h4>\n      \n       </ion-text>\n    </ion-label >\n </ion-item>\n\n      </ion-card-content >\n   </ion-card >\n\n\n     <ion-card >\n      <ion-card-header >\n     Verify document hash on Blockchain\n      </ion-card-header >\n      <ion-card-content >\n <ion-item>\n <ion-badge slot=\"start\">1</ion-badge>\n    <ion-label  class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\nGet document hash\n </ion-text>\n    </ion-label >\n    <ion-label  class=\"ion-text-wrap\">\n  <input type=\"file\" [(ngModel)]=\"somefilename\" (change)=\"onChange($event.target.files)\">\n\n    </ion-label >\n\n </ion-item>\n\n <ion-item >\n <ion-badge slot=\"start\">2</ion-badge>\n    <ion-label slot=\"start\" class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\nDocument hash\n </ion-text>\n    </ion-label >\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"secondary\">\n  <p *ngIf=\"fileContenthash\"> {{fileContenthash}} </p>\n  <p *ngIf=\"!fileContenthash\"> Place for hash </p>\n </ion-text>\n    </ion-label >\n  </ion-item>\n\n  <ion-item>\n      <ion-button   slot=\"start\" size=\"small\" color=\"primary\" (click)=\"verifydocumentbc()\"> Verify document </ion-button>\n    <ion-label slot=\"start\" class=\"ion-text-wrap\" *ngIf=\"displaydocresult\">\n      <ion-text color=\"red\" *ngIf=\"fileContenthash != txidvalidation.documenthash\"> <p > FAIL </p> </ion-text>\n      <ion-text color=\"green\" *ngIf=\"fileContenthash == txidvalidation.documenthash\"> <p > PASS  </p> </ion-text>\n    </ion-label>\n  </ion-item>\n\n      </ion-card-content >\n </ion-card> \n\n     <ion-card >\n      <ion-card-header >\n     Verify validator on Blockchain\n      </ion-card-header >\n      <ion-card-content >\n <ion-item>\n <ion-badge slot=\"start\">1</ion-badge>\n      <ion-input  [(ngModel)]=\"validation.emailid\" placeholder=\"Validator email-id \" ></ion-input>\n </ion-item>\n\n <ion-item >\n <ion-badge slot=\"start\">2</ion-badge>\n      <ion-input  [(ngModel)]=\"validation.validationcode\" placeholder=\"validation code \" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-button   slot=\"start\" size=\"small\" color=\"primary\" (click)=\"verifyuserbc()\"> Verify </ion-button>\n    <ion-label slot=\"start\" *ngIf=\"displayusrresult\" class=\"ion-text-wrap\">\n      <ion-text color=\"red\" *ngIf=\"txidvalidation.validatorhash != userhashcalculated\"> <p > FAIL </p> </ion-text>\n      <ion-text color=\"green\" *ngIf=\"txidvalidation.validatorhash == userhashcalculated\"> <p > PASS  </p> </ion-text>\n    </ion-label>\n  </ion-item>\n\n      </ion-card-content >\n </ion-card> \n\n\n </div>\n </div>\n\n\n</ion-content>\n\n<!-- ion-footer>\n  <ion-toolbar color=\"primary\" class=\"ion-text-center\">\n    <ion-title>\n<sup> Made in </sup>  <img alt=\"91springboard\" height=\"40\"    src=\"assets/imgs/91springlogo.png\"  float=\"left\" />\n   </ion-title>\n  </ion-toolbar>\n</ion-footer -->\n\n\n"

/***/ }),

/***/ "./src/app/pages/docvalidateverify/tab3sending.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/docvalidateverify/tab3sending.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-size: 0.875em; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvZG9jdmFsaWRhdGV2ZXJpZnkvdGFiM3NlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0sbUJBQWtCLEVBQUk7O0FBRTVCO0VBQ0UsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFHRDtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEI7O0FBR0Q7RUFDSSxvQ0FBbUM7RUFDbkMsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdmFsaWRhdGV2ZXJpZnkvdGFiM3NlbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHsgZm9udC1zaXplOiAwLjg3NWVtOyB9IC8vIDE0cHggXG5cbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuaW9uLXRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5cbmlvbi1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/docvalidateverify/tab3sending.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/docvalidateverify/tab3sending.page.ts ***!
  \*************************************************************/
/*! exports provided: Tab3sendingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3sendingPage", function() { return Tab3sendingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");
/* harmony import */ var _tab4wallet_blue011_issue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab4wallet/blue011.issue.service */ "./src/app/pages/tab4wallet/blue011.issue.service.ts");
/* harmony import */ var _tab4wallet_blue011_consume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tab4wallet/blue011.consume.service */ "./src/app/pages/tab4wallet/blue011.consume.service.ts");
/* harmony import */ var _tab4wallet_blue011_web_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tab4wallet/blue011.web.service */ "./src/app/pages/tab4wallet/blue011.web.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _tab4wallet_record_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab4wallet/record.service */ "./src/app/pages/tab4wallet/record.service.ts");
/* harmony import */ var _tab4wallet_policy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tab4wallet/policy.service */ "./src/app/pages/tab4wallet/policy.service.ts");
/* harmony import */ var _tab4wallet_webuser_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tab4wallet/webuser.service */ "./src/app/pages/tab4wallet/webuser.service.ts");
/* harmony import */ var _tab4wallet_md5service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tab4wallet/md5service.service */ "./src/app/pages/tab4wallet/md5service.service.ts");
/* harmony import */ var _paydisplaymodal_paydisplaymodal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../paydisplaymodal/paydisplaymodal.page */ "./src/app/pages/paydisplaymodal/paydisplaymodal.page.ts");
/* harmony import */ var _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../firebasekyc-page/kyc.service */ "./src/app/pages/firebasekyc-page/kyc.service.ts");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");
/* harmony import */ var _tab4wallet_invoice_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../tab4wallet/invoice.service */ "./src/app/pages/tab4wallet/invoice.service.ts");
/* harmony import */ var _tab4wallet_activate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../tab4wallet/activate.service */ "./src/app/pages/tab4wallet/activate.service.ts");





















var Tab3sendingPage = /** @class */ (function () {
    function Tab3sendingPage(blue011issue, blue011consume, activateservice, alertController, modalController, invoiceservice, blue011web, changellyCalls, recordService, md5service, logger, route, policyService, kycService, webuserservice, termsuserservice, router, storage) {
        var _this = this;
        this.blue011issue = blue011issue;
        this.blue011consume = blue011consume;
        this.activateservice = activateservice;
        this.alertController = alertController;
        this.modalController = modalController;
        this.invoiceservice = invoiceservice;
        this.blue011web = blue011web;
        this.changellyCalls = changellyCalls;
        this.recordService = recordService;
        this.md5service = md5service;
        this.logger = logger;
        this.route = route;
        this.policyService = policyService;
        this.kycService = kycService;
        this.webuserservice = webuserservice;
        this.termsuserservice = termsuserservice;
        this.router = router;
        this.storage = storage;
        this.whichdash = (_config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].network == 'testnet') ? 'tDASH' : 'DASH';
        this.whichsegment = "send";
        this.userrecords = [];
        this.network = _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].network;
        this.senddisable = false;
        this.toaddress = '';
        this.tmpaddress = '';
        this.tmpunconfirmed = '';
        this.directpurpose = '';
        this.revertpurpose = '';
        this.validation = {
            emailid: '',
            validationcode: ''
        };
        this.txidvalidation = {
            txid: '',
            document: '',
            documenthash: '',
            validatorhash: '',
        };
        this.docvalidatefeaturetype = '';
        this.torevertamount = 0.000;
        this.yettodepositfund = false;
        this.displaydocresult = false;
        this.displayusrresult = false;
        this.txid = '';
        this.directtxid = '';
        this.useraccount = {
            termsagreed: 'no',
            dashprice: '0'
        };
        this.samplemessage1 = "Real estate document validation  \n" +
            "The facilities provided with property sold is recorded in Blockchain, \n" +
            "the hash of the document is provided, \n" +
            "the hash is created in the website https://md5file.com/calculator, \n" +
            "the recorded hash in Blockchain is non tamper proof. \n" +
            "            \n" +
            "Deposit the funds in address provided to write on blockchain, \n" +
            "proof of transaction and blockchain record will be sent by email. \n" +
            "            \n" +
            "Document validation team \n" +
            "Regards ";
        this.invoicerequest = {
            id: '',
            format: '',
            receiveremail: '',
            senderemail: '',
            receiverphone: '',
            doctitle: '',
            docdescription: '',
            dochash: '',
            documentnumber: '',
            documenttype: '',
            documentdomain: '',
            documentlocation: '',
            invoiceamount: '',
            invoiceunit: '',
            dashprice: '',
            dashamount: '',
            templatenumber: '',
            businesstitle: '',
            stdmessage: '',
            contactemail: '',
            receiveraddress: '',
            invoiceemail: '',
            invoicephone: '',
            invoicemessage: '',
            invoicenumber: '',
            templatetype: '',
            contactphone: '',
            receiveaddress: '',
            senderaddress: '',
            contactterms: '',
            contactaddress: '',
        };
        this.loggedinuser = {
            uid: '',
            displayName: '',
            photoURL: '',
            phoneNumber: '',
            email: '',
            emailVerified: ''
        };
        this.sendnetworkfeeschange = {
            increase: false,
            decrease: false
        };
        this.mode = 'validate';
        this.address = '';
        this.defaultinvoice = {
            defaultinvoicetemplate: '',
            default1pnotetemplate: '',
            defaultnpnotetemplate: '',
            default2pescrowtemplate: '',
            defaultdocumentsigntemplate: '',
            defaultdocumentblockchaintemplate: '',
            default2pagreementtemplate: '',
            dashprice: '',
        };
        this.issued = {
            "id": "",
            "message": "",
            "pin": "",
            "address": "",
            "network": "",
            "shorturl": "",
            "encshorturl": "",
            "type": "",
        };
        this.walletbalance = {
            address: '',
            balance: 0,
            balanceSat: 0,
            unconfirmedBalance: 0,
            unconfirmedBalanceSat: 0
        };
        this.enteringindash = false;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].storageuniq + 'sendnetworkfeeschange').then(function (data) {
            if (data) {
                _this.sendnetworkfeeschange = data;
            }
        });
        this.getdefinv();
    }
    ;
    Tab3sendingPage.prototype.trialpay = function () {
    };
    Tab3sendingPage.prototype.verifytxid = function (txid) {
        var _this = this;
        this.displayusrresult = false;
        this.displaydocresult = false;
        this.blue011consume.verifydoc(txid, "testnet").then(function (res) {
            try {
                //     alert(JSON.stringify(res));
                var scriptsig = res.vin[0].scriptSig;
                var bufscript = dashcore.util.buffer.hexToBuffer(scriptsig.hex);
                //     JSON.parse();
                var str1 = bufscript.toString('ascii');
                console.log(str1);
                var index = str1.indexOf('}');
                var verifiedgreeting;
                verifiedgreeting = str1.substring(index + 1);
                var x = JSON.parse(verifiedgreeting.substring(0, verifiedgreeting.indexOf('}') + 1));
                _this.txidvalidation = {
                    txid: txid,
                    document: x.dno,
                    documenthash: x.dha,
                    validatorhash: x.sha
                };
            }
            catch (err) {
                _this.presentAlert("", "", "Error in blockchain data ");
            }
        });
    };
    Tab3sendingPage.prototype.customerpay = function () {
        var data = {
            paymentmethod: 'customerpay',
            network: this.network
        };
        this.invoiceservice.payment(data, '/paytool/webdocvalidatepay').then(function (xx) {
        }).catch(function (err) {
        });
    };
    Tab3sendingPage.prototype.systempay = function (msg) {
        var _this = this;
        if (msg.reqstatus == 'accepted') {
            this.presentAlert("", "", "Not allowed after accepting");
            return;
        }
        if (msg.reqstatus == 'funded') {
            this.presentAlert("", "", "Not allowed already funded");
            return;
        }
        var data = {
            paymentmethod: 'systempay',
            docvalidatefeature: this.useraccount.docvalidatefeature,
            userrecord: msg
        };
        this.presentAlert("Scheduling payment ", "to queue", "Check back after 15 minutes ");
        this.invoiceservice.payment(data, '/paytool/webdocvalidatepayqueue').then(function (xx) {
            _this.presentAlert("Payment is scheduled", "In queue", "");
        }).catch(function (err) {
            _this.presentAlert("", "", "Error during payment scheduling");
            return;
        });
    };
    Tab3sendingPage.prototype.getdefinv = function () {
        var _this = this;
        this.invoiceservice.getdefaultinvtemplate().then(function (xx) {
            if (xx) {
                _this.defaultinvoice = JSON.parse(xx);
            }
            else {
                return;
            }
            if (_this.defaultinvoice.defaultdocumentblockchaintemplate) {
                _this.invoicerequest.templatenumber = _this.defaultinvoice.defaultdocumentblockchaintemplate.templatenumber;
                _this.invoicerequest.templatetype = _this.defaultinvoice.defaultdocumentblockchaintemplate.templatetype;
            }
            else {
                _this.presentAlert("", "", "Template not set ");
            }
        }).catch(function (err) {
        });
        this.invoicerequest.dashprice = this.useraccount.dashprice ? this.useraccount.dashprice : 0;
    };
    Tab3sendingPage.prototype.ionViewWillEnter = function () {
        this.address = this.route.snapshot.paramMap.get('address');
        this.mode = this.route.snapshot.paramMap.get('mode');
        this.getuserrecord(this.address);
        this.getdefaultsetting();
    };
    Tab3sendingPage.prototype.ngOnInit = function () {
        this.loadwalletwif();
        this.loaduser();
        this.loadaccount();
        this.loadkycdata();
        this.loadwalletbalance();
    };
    Tab3sendingPage.prototype.displayemailmsg = function () {
        this.presentAlert("Email sent", "Email:" + this.invoicerequest.invoiceemail, "Check email for instructions");
    };
    Tab3sendingPage.prototype.webdocsendcertificate = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    network: this.network,
                    paymentdata: 'null',
                    email: this.loggedinuser ? this.loggedinuser.email : null,
                    googleid: this.loggedinuser ? this.loggedinuser.uid : null,
                    kycid: this.useraccount ? this.useraccount.kycid : null,
                    userrecord: msg
                };
                if (data.email == null) {
                    this.presentAlert("", "", "Login to proceed ");
                    this.router.navigate(['/login']);
                }
                this.blue011web.webdocemail(data, '/webtool/webdocsendcertificate').then(function (controldata) {
                    _this.displayemailmsg();
                    //   this.senddisable = false;
                }).catch(function (err1) {
                });
                return [2 /*return*/];
            });
        });
    };
    Tab3sendingPage.prototype.webdocsendinvoice = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    network: this.network,
                    paymentdata: 'null',
                    email: this.loggedinuser ? this.loggedinuser.email : null,
                    googleid: this.loggedinuser ? this.loggedinuser.uid : null,
                    kycid: this.useraccount ? this.useraccount.kycid : null,
                    userrecord: msg
                };
                if (data.email == null) {
                    this.presentAlert("", "", "Login to proceed ");
                    this.router.navigate(['/login']);
                }
                this.blue011web.webdocemail(data, '/webtool/webdocsendinvoice').then(function (controldata) {
                    _this.displayemailmsg();
                    //   this.senddisable = false;
                }).catch(function (err1) {
                });
                return [2 /*return*/];
            });
        });
    };
    Tab3sendingPage.prototype.websendemail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, rawtemplatedata, err_1, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //   this.senddisable = true;
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        //   this.senddisable = true;
                        _a.loggedinuser = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.webuserservice.webgettemplate(this.invoicerequest)];
                    case 3:
                        rawtemplatedata = _b.sent();
                        if (rawtemplatedata.length > 0)
                            this.invoicerequest.businesstitle = rawtemplatedata[0].businesstitle;
                        else {
                            this.presentAlert("", "", "Template not found  ");
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        this.presentAlert("", "", "Template load failed  ");
                        return [2 /*return*/];
                    case 5:
                        if (this.invoicerequest.dashamount == '') {
                            this.presentAlert("", "", "DASH amount is invalid");
                            return [2 /*return*/];
                        }
                        data = {
                            network: this.network,
                            paymentdata: 'null',
                            email: this.loggedinuser ? this.loggedinuser.email : null,
                            googleid: this.loggedinuser ? this.loggedinuser.uid : null,
                            kycid: this.useraccount ? this.useraccount.kycid : null,
                            webemail: this.invoicerequest.invoiceemail,
                            templatedata: this.invoicerequest,
                            docvalidatefeaturetype: this.docvalidatefeaturetype
                        };
                        if (data.email == null) {
                            this.presentAlert("", "", "Login to proceed ");
                            this.router.navigate(['/login']);
                        }
                        this.blue011web.webdocemail(data, '/webtool/webdocvalidatesendemail').then(function (controldata) {
                            _this.displayemailmsg();
                            //   this.senddisable = false;
                        }).catch(function (err1) {
                            //   this.senddisable = false;
                            console.log(err1._body);
                            var err;
                            try {
                                err = JSON.parse(err1._body);
                            }
                            catch (errx) {
                            }
                            if (err && err.response) {
                                _this.presentAlert('Failed to send email', err.response.message, '');
                            }
                            else {
                                _this.presentAlert("", "", "Failed to send email  ");
                            }
                            // restore old wallet
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3sendingPage.prototype.getdefaultsetting = function () {
        var _this = this;
        var data = {
            templatetype: 'Docblockchan'
        };
        this.invoiceservice.webgetdefaultinvtemplate(data).then(function (xx) {
            if (!xx)
                return;
            _this.defaultinvoice = xx;
            _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].storageuniq + 'defaulttemplate', JSON.stringify(xx));
        }, function (err) {
            _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].storageuniq + 'defaulttemplate', null);
            _this.presentAlert("", "", "Error default setting.");
        });
    };
    Tab3sendingPage.prototype.nullify = function () {
        this.loggedinuser = {
            uid: '',
            displayName: '',
            photoURL: '',
            phoneNumber: '',
            email: '',
            emailVerified: ''
        };
    };
    Tab3sendingPage.prototype.padfunc = function (str, num, padString, length) {
        var x = String(num);
        while (str.length < (length - x.length)) {
            str = str + padString;
        }
        return str + x;
    };
    Tab3sendingPage.prototype.getaccount = function () {
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
                            this.presentAlert("", "", "User need to login. ");
                            return [2 /*return*/];
                        }
                        data = {
                            googleid: this.loggedinuser.uid,
                        };
                        this.termsuserservice.getaccount(data).then(function (data1) {
                            _this.logger.info(data1);
                            if (data1) {
                                _this.useraccount = data1;
                                var puser = _this.useraccount.invoicecount ? _this.useraccount.invoicecount : 0;
                                _this.invoicerequest.dashprice = _this.useraccount.dashprice;
                                _this.invoicerequest.dashamount = _this.useraccount.docvalidatefeature.doctranamount;
                                //    this.invoicerequest.dashfees = this.useraccount.docvalidatefeature.doctranfees;
                                _this.invoicerequest.invoicenumber = _this.padfunc('IN-' + "00-", puser + 1, '0', 9);
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (xx) {
                                    _this.termsuserservice.reflectuseraccount();
                                });
                                ;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
                            }
                        }, function (err) {
                            if (err._body) {
                                _this.presentAlert("", "", "Error connecting. ");
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
    Tab3sendingPage.prototype.loaduser = function () {
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
    Tab3sendingPage.prototype.loadaccount = function () {
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
    Tab3sendingPage.prototype.usdamountChanged = function (e) {
        this.toamount = this.changellyCalls.fromFiatDash(Number(this.invoicerequest.invoiceamount)); //this.toamountusd);
        var incomeshare = this.blue011issue.getdirectincomeshare("directsend", Number(this.toamount), this.useraccount);
        var fees = this.blue011issue.getnetworkfees("directsend", Number(this.toamount), this.sendnetworkfeeschange, this.useraccount); //   Number(this.useraccount.networkfees); //15000;
        this.directfees = Number(incomeshare.incomeamount) + fees;
        this.invoicerequest.dashamount = this.changellyCalls.fromSatoshi(this.toamount).toFixed(9);
    };
    Tab3sendingPage.prototype.dashamountChanged = function (e) {
        this.toamount = this.changellyCalls.toSatoshi(this.toamountdash);
        var incomeshare = this.blue011issue.getdirectincomeshare("directsend", Number(this.toamount), this.useraccount);
        var fees = this.blue011issue.getnetworkfees("directsend", Number(this.toamount), this.sendnetworkfeeschange, this.useraccount); //   Number(this.useraccount.networkfees, this.useraccount); //15000;
        //var fees = Number(this.useraccount.networkfees); //15000;
        this.directfees = Number(incomeshare.incomeamount) + fees;
    };
    Tab3sendingPage.prototype.dashrevertamountChanged = function (e) {
        this.torevertamount = this.changellyCalls.toSatoshi(this.torevertamountdash);
        var incomeshare = this.blue011issue.getrevertincomeshare("revertsend", Number(this.torevertamount), this.useraccount);
        var fees = this.blue011issue.getnetworkfees("revertsend", Number(this.torevertamount), this.sendnetworkfeeschange, this.useraccount); //   Number(this.useraccount.networkfees); //15000;
        //var fees = Number(this.useraccount.networkfees); //15000;
        this.revertfees = Number(incomeshare.incomeamount) + fees;
    };
    Tab3sendingPage.prototype.loadkycdata = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].storageuniq + 'kycstatus').then(function (data) {
            if (data) {
                _this.kycstatus = data;
            }
        });
    };
    Tab3sendingPage.prototype.loadwalletwif = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].storageuniq + 'walletwif').then(function (data) {
            if (data) {
                _this.walletwif = data;
                _this.wiftoaddress();
                _this.loadwalletbalance();
            }
            else {
                _this.presentAlert("", "", "Set wallet before use. ");
                //         this.router.navigateByUrl('/login');
            }
        });
    };
    Tab3sendingPage.prototype.loadwalletbalance = function () {
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
    Tab3sendingPage.prototype.savewalletbalance = function (walletbalance) {
        var _this = this;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].storageuniq + 'walletbalance', walletbalance).then(function (x) {
            _this.termsuserservice.reflectwalletbalance();
        });
    };
    Tab3sendingPage.prototype.pastesendaddress = function () {
    };
    Tab3sendingPage.prototype.wiftoaddress = function () {
    };
    Tab3sendingPage.prototype.generateissuedaddress = function () {
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
                        if (this.loggedinuser.email == '') {
                            this.presentAlert("", "", "User need to login. ");
                            return [2 /*return*/];
                        }
                        if (!this.useraccount.kycid) {
                            this.presentAlert("", "", "Login to use ");
                            return [2 /*return*/];
                        }
                        data = {
                            kycid: this.useraccount.kycid,
                            email: this.loggedinuser.email,
                            msgtype: "default",
                            network: "testnet"
                        };
                        if (this.network == 'testnet') {
                            data = {
                                email: this.loggedinuser.email,
                                kycid: this.useraccount.kycid,
                                msgtype: "default",
                                network: "testnet"
                            };
                        }
                        else {
                            data = {
                                email: this.loggedinuser.email,
                                kycid: this.useraccount.kycid,
                                msgtype: "default",
                                network: "livenet"
                            };
                        }
                        try {
                            this.blue011issue.issueuserrecord(data).then(function (data) {
                                if (data != null) {
                                    _this.issued = data;
                                    _this.yettodepositfund = true;
                                    _this.issued.id = _this.issued.address.substr(-5);
                                    _this.issued.status = 'issued';
                                    _this.issued.balance = 0;
                                    _this.blue011issue.saveuserrecord(_this.issued);
                                }
                                else {
                                    _this.presentAlert("", "", "Error creating escrow ");
                                }
                            }, function (err) {
                                _this.presentAlert("", "", "Error creating escrow " + err);
                            });
                        }
                        catch (err) {
                            this.presentAlert("Create escrow failed", "", err);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3sendingPage.prototype.getaddressbalance = function () {
        var _this = this;
        if (!this.issued.address) {
            this.presentAlert("", "", "Escrow address field empty ");
            return;
        }
        this.blue011issue.getBalance(this.issued.address, this.network).then(function (data) {
            if (data != null) {
                _this.addressbalance = data;
            }
            else {
                _this.presentAlert("", "", "Balance query failed");
            }
        }, function (err) {
            _this.presentAlert("", "", "Balance query failed" + err);
        });
    };
    Tab3sendingPage.prototype.getwalletbalance = function () {
        var _this = this;
        if (!this.useraccount.defaultwallet) {
            this.presentAlert("", "", "Wallet address empty ");
            return;
        }
        this.blue011issue.getBalance(this.useraccount.defaultwallet.address, this.network).then(function (data) {
            if (data != null) {
                _this.walletbalance = data;
                _this.savewalletbalance(_this.walletbalance);
            }
            else {
                _this.presentAlert("", "", "Balance query failed ");
            }
        }, function (err) {
            _this.presentAlert("", "", "Balance query failed " + err);
        });
    };
    Tab3sendingPage.prototype.getescrowbalance = function (msg) {
        var _this = this;
        if (msg.escrowaddress == null || msg.escrowaddress == '') {
            this.presentAlert("", "", "Address empty ");
            return;
        }
        var prevstatus = msg.reqstatus;
        this.blue011issue.getBalance(msg.escrowaddress, msg.network).then(function (data) {
            if (data != null) {
                msg.balance = data.balanceSat; // Number(data.balanceSat);
                if (data.totalReceivedSat > 0) {
                    msg.reqstatus = "funded";
                    msg.creditedamount = msg.balance;
                }
                if (data.totalSentSat > 0) {
                    msg.reqstatus = "accepted";
                    msg.acceptedamount = msg.balance;
                }
                _this.tmpaddress = msg.escrowaddress;
                _this.tmpunconfirmed = data.unconfirmedBalanceSat;
                msg.updatetype = "balanceupdate";
                _this.validationrecord = msg;
                _this.blue011issue.updateuserrecord(msg);
                //    this.loaduserrecords() ;
            }
        }, function (err) {
            _this.presentAlert("", "", "Balance query failed " + err);
        });
    };
    Tab3sendingPage.prototype.verifydocumentmsg = function (msg) {
        if (!this.fileContenthash || this.fileContenthash == '') {
            this.presentAlert("", "", "Upload document and get hash");
            return;
        }
        //this.hashinblockchain ;
        var p = new stdcrypto.buffer.Buffer(msg.contract, 'base64');
        var s = p.toString();
        console.log("string received=" + s);
        var datacorrupt;
        var hash;
        var data;
        try {
            data = JSON.parse(s);
            var thestr = JSON.parse(stdcrypto.buffer.Buffer.from(data.uid, 'hex'));
            console.log("string1 =" + JSON.stringify(thestr));
            this.dochashinblockchain = thestr.dha;
            if (thestr.dha == this.fileContenthash) {
                this.presentAlert("Document " + thestr.dno, "", "Document hash matching  ");
                return;
            }
            else {
                this.presentAlert("Document " + thestr.dno, "", "Document hash not matching  ");
                return;
            }
            /*
               var data1  = {e: 'raga2560@gmail.com', o:'YES-5678' };
            
               var sha =  stdcrypto.crypto.createHash('sha256').update(JSON.stringify(data1)).digest("hex");
            
               console.log("sha ="+ sha);
            */
        }
        catch (err) {
            console.error("Invalid json data");
        }
    };
    Tab3sendingPage.prototype.verifydocumentbc = function () {
        if (!this.fileContenthash || this.fileContenthash == '') {
            this.presentAlert("", "", "Upload document and get hash");
            return;
        }
        if (!this.txidvalidation.documenthash || this.txidvalidation.documenthash == '') {
            this.presentAlert("", "", "Load blockchain record ");
            return;
        }
        //this.hashinblockchain ;
        /*
        var p = new stdcrypto.buffer.Buffer(msg.contract, 'base64');
           var s = p.toString();
           console.log("string received="+ s);
        */
        var datacorrupt;
        var hash;
        var data;
        try {
            //    data = JSON.parse(s );
            //    var thestr =  JSON.parse(stdcrypto.buffer.Buffer.from(data.uid, 'hex'));
            //  console.log("string1 ="+ JSON.stringify(thestr));
            this.dochashinblockchain = this.txidvalidation.documenthash;
            this.displaydocresult = true;
            if (this.txidvalidation.documenthash == this.fileContenthash) {
                this.presentAlert("Document " + this.txidvalidation.document, "", "Document hash matching  ");
                return;
            }
            else {
                this.presentAlert("Document " + this.txidvalidation.document, "", "Document hash not matching  ");
                return;
            }
            /*
               var data1  = {e: 'raga2560@gmail.com', o:'YES-5678' };
            
               var sha =  stdcrypto.crypto.createHash('sha256').update(JSON.stringify(data1)).digest("hex");
            
               console.log("sha ="+ sha);
            */
        }
        catch (err) {
            console.error("Invalid json data");
        }
    };
    Tab3sendingPage.prototype.validatedocument = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var p, s, datacorrupt, data, thestr, thestrobj, data1, sha, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.validation.emailid == '' || this.validation.validationcode == '') {
                            this.presentAlert("", "", "Provide email-id and validation code ");
                            return [2 /*return*/];
                        }
                        p = new stdcrypto.buffer.Buffer(msg.contract, 'base64');
                        s = p.toString();
                        console.log("string received=" + s);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        data = JSON.parse(s);
                        thestr = stdcrypto.buffer.Buffer.from(data.uid, 'hex');
                        console.log("string1 =" + thestr);
                        thestrobj = JSON.parse(thestr);
                        data1 = { e: this.validation.emailid, o: this.validation.validationcode };
                        sha = stdcrypto.crypto.createHash('sha256').update(JSON.stringify(data1)).digest("hex");
                        this.userhashinblockchain = thestrobj.sha;
                        this.userhashcalculated = sha;
                        console.log("sha =" + sha);
                        console.log("thsstrsha =" + thestrobj.sha);
                        if (!(thestrobj.sha == sha)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.reversepayment(msg)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.presentAlert("Document " + thestrobj.dno, "", "Validation code not matching  ");
                        return [2 /*return*/];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_2 = _a.sent();
                        console.error("Invalid json data");
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Tab3sendingPage.prototype.verifyusermsg = function (msg) {
        if (this.validation.emailid == '' || this.validation.validationcode == '') {
            this.presentAlert("", "", "Provide email-id and validation code ");
            return;
        }
        var p = new stdcrypto.buffer.Buffer(msg.contract, 'base64');
        var s = p.toString();
        console.log("string received=" + s);
        var datacorrupt;
        var data;
        try {
            data = JSON.parse(s);
            var thestr = JSON.parse(stdcrypto.buffer.Buffer.from(data.uid, 'hex'));
            console.log("string1 =" + thestr);
            var data1 = { e: this.validation.emailid, o: this.validation.validationcode };
            var sha = stdcrypto.crypto.createHash('sha256').update(JSON.stringify(data1)).digest("hex");
            this.userhashinblockchain = thestr.sha;
            this.userhashcalculated = sha;
            console.log("sha =" + sha);
            if (thestr.sha == sha) {
                this.presentAlert("Document " + thestr.dno, "", "Validation code matching  ");
                return;
            }
            else {
                this.presentAlert("Document " + thestr.dno, "", "Validation code not matching  ");
                return;
            }
        }
        catch (err) {
            console.error("Invalid json data");
        }
    };
    Tab3sendingPage.prototype.verifyuserbc = function () {
        if (this.validation.emailid == '' || this.validation.validationcode == '') {
            this.presentAlert("", "", "Provide email-id and validation code ");
            return;
        }
        if (!this.txidvalidation.validatorhash || this.txidvalidation.validatorhash == '') {
            this.presentAlert("", "", "Load blockchain record ");
            return;
        }
        //this.hashinblockchain ;
        /*
        var p = new stdcrypto.buffer.Buffer(msg.contract, 'base64');
           var s = p.toString();
           console.log("string received="+ s);
        */
        var datacorrupt;
        var data;
        try {
            //    data = JSON.parse(s );
            //    var thestr =  JSON.parse(stdcrypto.buffer.Buffer.from(data.uid, 'hex'));
            //   console.log("string1 ="+ thestr);
            var data1 = { e: this.validation.emailid, o: this.validation.validationcode };
            var sha = stdcrypto.crypto.createHash('sha256').update(JSON.stringify(data1)).digest("hex");
            this.userhashinblockchain = this.txidvalidation.documenthash;
            this.userhashcalculated = sha;
            this.displayusrresult = true;
            console.log("sha =" + sha);
            if (this.txidvalidation.validatorhash == sha) {
                this.presentAlert("Document " + this.txidvalidation.document, "", "Validation code matching  ");
                return;
            }
            else {
                this.presentAlert("Document " + this.txidvalidation.document, "", "Validation code not matching  ");
                return;
            }
        }
        catch (err) {
            console.error("Invalid json data");
        }
    };
    Tab3sendingPage.prototype.getuserrecord = function (address) {
        var _this = this;
        var data = {
            templatetype: 'Docblockchain',
            address: address
        };
        this.blue011issue.getuserrecords(data, '/public/getuserrecordsforvv').then(function (data) {
            if (data) {
                _this.validationrecord = data;
            }
            else {
                //        alert("Load failed");
            }
        }, function (err) {
            _this.presentAlert("", "", "Record not found");
        });
    };
    Tab3sendingPage.prototype.senddirectpayment = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Tab3sendingPage.prototype.sendreversiblepayment = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Tab3sendingPage.prototype.sharedirectsend = function () {
    };
    Tab3sendingPage.prototype.reversepayment = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var xx;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xx = {
                            id: msg.id,
                            message: msg.contract,
                            pin: msg.encryptedpin,
                            escrowaddress: msg.escrowaddress,
                        };
                        if (msg.reqstatus == 'new') {
                            this.presentAlert('', '', "Address is not funded.");
                            return [2 /*return*/];
                        }
                        if (msg.reqstatus == 'accepted') {
                            this.presentAlert('', '', "Only once funds can be accepted. ");
                            return [2 /*return*/];
                        }
                        if (this.docvalidatefeaturetype == 'DOCT01') {
                            // network is trial
                        }
                        else {
                            // autopay, record update different
                            // consumerpay, ..
                            // agentpay, ..
                        }
                        return [4 /*yield*/, this.consumemessage(xx)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3sendingPage.prototype.deleteold = function (xx) {
        var _this = this;
        this.webuserservice.webmarkuserecorddelete(xx).then(function (ss) {
        }).catch(function (err) {
            _this.presentAlert('', '', "Request failed");
        });
    };
    Tab3sendingPage.prototype.refresh = function () {
        this.presentAlert('', '', "Refreshed");
    };
    Tab3sendingPage.prototype.clearall = function () {
        var _this = this;
        this.blue011issue.deleteallmessage().then(function (xx) {
            _this.presentAlert('', '', "Cleared");
        });
    };
    Tab3sendingPage.prototype.trysharing = function () {
    };
    Tab3sendingPage.prototype.nowshare = function () {
    };
    Tab3sendingPage.prototype.presentAlert = function (title, subheader, message) {
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
                        }); }, 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3sendingPage.prototype.sharepaymentqrcode = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mix, item, modal, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mix = {
                            message: this.issued.message,
                            pin: this.issued.pin,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        item = {
                            displayq: 'dash',
                            addresstoverify: this.issued.address,
                            title: 'Payment QRcode',
                            topmessage: ' with amount ' + this.changellyCalls.fromSatoshi(this.torevertamount) + ' DASH',
                            messagepin: JSON.stringify(mix),
                            bottommessage: 'Protected with PIN'
                        };
                        return [4 /*yield*/, this.modalController.create({
                                component: _paydisplaymodal_paydisplaymodal_page__WEBPACK_IMPORTED_MODULE_14__["PaydisplaymodalPage"],
                                componentProps: { obj: item }
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        err_3 = _a.sent();
                        alert("Error" + err_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Tab3sendingPage.prototype.consumemessage = function (xx) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.transacted = {
                    "txid": "",
                    "amount": "",
                    "fromaddress": "",
                    "toaddress": "",
                };
                this.revertible = {
                    "id": xx.id,
                    "refid": "",
                    "message": xx.message,
                    "pin": xx.pin,
                    "address": xx.escrowaddress,
                    "email": "",
                    "target": "",
                    "kycstatus": "",
                    "network": "",
                    "type": "BLUE011",
                };
                if (!this.useraccount.defaultwallet) {
                    this.presentAlert('', '', "Wallet not set " + _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
                    return [2 /*return*/];
                }
                if (!this.revertible.message) {
                    this.presentAlert('', '', "Contract field empty " + _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
                    return [2 /*return*/];
                }
                if (!this.revertible.pin) {
                    this.presentAlert('', '', "PIN field empty " + _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
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
                this.revertible.target = this.useraccount.defaultwallet.address;
                if (!this.revertible.target) {
                    this.presentAlert('', '', "Provide address to receive funds " + _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
                    return [2 /*return*/];
                }
                if (!dashcore.Address.isValid(this.revertible.target, this.network)) {
                    this.presentAlert('', '', "Invalid receive address provided " + _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
                    return [2 /*return*/];
                }
                this.revertible.network = this.network;
                this.revertible.email = this.loggedinuser.email;
                this.revertible.refid = this.revertible.address.substr(this.revertible.address.length - 5);
                // this.blue011consume.savereceivedmessage(this.revertible);
                this.activateservice.consumemessage(this.revertible, '/webactive/webvalidatedocument').then(function (data1) {
                    if (data1 != null) {
                        var data;
                        if (typeof data1 == 'string') {
                            _this.presentAlert('', data1, "Error processing Request " + _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
                            return;
                        }
                        else {
                            data = data1;
                        }
                        if (data.error) {
                            _this.presentAlert('', '', "Error processing Request " + _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
                            return;
                        }
                        _this.refresh();
                    }
                    else {
                        _this.presentAlert('', '', " Receive funds failed " + _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
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
                        _this.presentAlert('Receive funds failed', err.response.message, _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
                    }
                    else {
                        _this.presentAlert('Receive funds failed', 'Error', _config_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].err.W1221.code);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Tab3sendingPage.prototype.xgetescrowbalance = function (msg) {
        if (msg.escrowaddress == null || msg.escrowaddress == '') {
            this.presentAlert("", "", "Address empty ");
            return;
        }
        var p = new stdcrypto.buffer.Buffer(msg.contract, 'base64');
        var s = p.toString();
        console.log("string received=" + s);
        var datacorrupt;
        var data;
        try {
            data = JSON.parse(s);
            var thestr = JSON.parse(stdcrypto.buffer.Buffer.from(data.uid, 'hex'));
            console.log("string1 =" + thestr);
            var data1 = { e: 'raga2560@gmail.com', o: 'YES-5678' };
            var sha = stdcrypto.crypto.createHash('sha256').update(JSON.stringify(data1)).digest("hex");
            console.log("sha =" + sha);
        }
        catch (err) {
            var datacurrupt = true;
            console.error("Invalid json data");
        }
        if (datacurrupt) {
            console.log("Invalid payment message  ");
            return;
        }
    };
    // https://stackblitz.com/edit/angular-file-read?file=app%2Fapp.module.ts
    Tab3sendingPage.prototype.onChange = function (fileList) {
        var file = fileList[0];
        var self = this;
        this.md5service.computeChecksumMd5Hash(file).then(function (md5) {
            console.log('The MD5 hash is: ' + md5);
            self.fileContenthash = md5;
        });
    };
    Tab3sendingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3sending',
            template: __webpack_require__(/*! ./tab3sending.page.html */ "./src/app/pages/docvalidateverify/tab3sending.page.html"),
            styles: [__webpack_require__(/*! ./tab3sending.page.scss */ "./src/app/pages/docvalidateverify/tab3sending.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tab4wallet_blue011_issue_service__WEBPACK_IMPORTED_MODULE_4__["Blue011IssueService"],
            _tab4wallet_blue011_consume_service__WEBPACK_IMPORTED_MODULE_5__["Blue011ConsumeService"],
            _tab4wallet_activate_service__WEBPACK_IMPORTED_MODULE_19__["ActivateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _tab4wallet_invoice_service__WEBPACK_IMPORTED_MODULE_18__["InvoiceService"],
            _tab4wallet_blue011_web_service__WEBPACK_IMPORTED_MODULE_6__["Blue011WebService"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_3__["ChangellyCalls"],
            _tab4wallet_record_service__WEBPACK_IMPORTED_MODULE_10__["RecordService"],
            _tab4wallet_md5service_service__WEBPACK_IMPORTED_MODULE_13__["Md5service"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_17__["Logger"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _tab4wallet_policy_service__WEBPACK_IMPORTED_MODULE_11__["PolicyService"],
            _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_15__["KycService"],
            _tab4wallet_webuser_service__WEBPACK_IMPORTED_MODULE_12__["WebuserService"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_16__["TermsuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], Tab3sendingPage);
    return Tab3sendingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-docvalidateverify-tab3sending-module.js.map