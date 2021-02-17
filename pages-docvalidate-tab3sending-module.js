(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-docvalidate-tab3sending-module"],{

/***/ "./src/app/pages/docvalidate/tab3sending.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/docvalidate/tab3sending.module.ts ***!
  \*********************************************************/
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
/* harmony import */ var _tab3sending_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3sending.page */ "./src/app/pages/docvalidate/tab3sending.page.ts");








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

/***/ "./src/app/pages/docvalidate/tab3sending.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/docvalidate/tab3sending.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n\n   <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n\n\n  <ion-segment  [(ngModel)]=\"whichsegment\">\n    <ion-segment-button value=\"send\">\n      <ion-label > Blockchain documents </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"messages\">\n      <ion-label >  Records </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n<ion-item text-wrap>\n<!-- ion-button   clear size=\"small\" color=\"primary\" href=\"/docvalidateinvoice\" > Invoices  </ion-button -->\n<ion-button   clear size=\"small\" color=\"primary\" href=\"/invoicetemplate\" > Templates  </ion-button>\n<!--ion-button   clear size=\"small\" color=\"primary\" href=\"/wallet\" > Wallets  </ion-button -->\n<ion-button   clear size=\"small\" color=\"primary\" href=\"/operation\" > Manage  </ion-button>\n</ion-item>\n\n\n<div *ngIf=\"useraccount.docvalidatefeature\">\n      <div *ngIf=\"(useraccount.docvalidatefeature.docdetails == 'yes')\" >\n<ion-card >\n      <ion-card-header>\n    <ion-card-subtitle>\n         Template\n    </ion-card-subtitle> \n      </ion-card-header>\n      <ion-card-content>\n   <ion-item>\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\" *ngIf=\"defaultinvoice.defaultdocumentblockchaintemplate\" >\n        Type: {{defaultinvoice.defaultdocumentblockchaintemplate.templatetype}}\n      </ion-text>\n      <ion-text color=\"secondary\">\n      <p *ngIf=\"defaultinvoice.defaultdocumentblockchaintemplate\"  >  {{defaultinvoice.defaultdocumentblockchaintemplate.templatenumber}}  </p>\n      <p *ngIf=\"!defaultinvoice.defaultdocumentblockchaintemplate\"  >  Template not set   </p>\n      </ion-text>\n    </ion-label>\n        <ion-button  slot=\"end\" clear size=\"small\" color=\"primary\" (click)=\"getdefinv()\" > Refresh  </ion-button>\n   </ion-item>\n      </ion-card-content>\n </ion-card >\n\n</div>\n</div>\n<ion-card >\n      <ion-card-header>\n    <ion-card-subtitle>\n         Blockchain service\n    </ion-card-subtitle> \n      </ion-card-header>\n      <ion-card-content>\n   <p>\n  1) Documents can be certified on Blockchain. The HASH of document will be in Blockchain. The certifier is identified by email-id and validation code.\n\n   </p>\n   <p> 2) The user can self certify or request other parties to certify on Blockchain.  </p>\n      </ion-card-content>\n\n</ion-card >\n<div *ngIf=\"issued\">\n<div *ngIf=\"whichsegment == 'send'\">\n\n    <ion-card >\n      <ion-card-content >\n <ion-item>\n <ion-badge slot=\"start\">1.1</ion-badge>\n    <ion-label  class=\"ion-text-wrap\"> \n      <ion-text color=\"primary\">\nGet document hash \n </ion-text>\n    </ion-label > \n    <ion-label  class=\"ion-text-wrap\"> \n  <input type=\"file\" [(ngModel)]=\"somefilename\" (change)=\"onChange($event.target.files)\">\n\n    </ion-label > \n\n </ion-item>\n\n <ion-item >\n <ion-badge slot=\"start\">1.2</ion-badge>\n    <ion-label slot=\"start\" class=\"ion-text-wrap\"> \n      <ion-text color=\"primary\">\nDocument hash \n </ion-text>\n    </ion-label > \n    <ion-label class=\"ion-text-wrap\"> \n      <ion-text color=\"secondary\">\n  <p *ngIf=\"fileContenthash\"> {{fileContenthash}} </p>\n\n  <p *ngIf=\"!fileContenthash\"> Place for hash </p>\n </ion-text>\n    </ion-label > \n  </ion-item> \n\n <ion-item>\n <ion-badge slot=\"start\">1.3</ion-badge>\n    <ion-label class=\"ion-text-wrap\" > \n      <ion-text color=\"primary\">\nSelect blockchain service \n </ion-text>\n      <ion-text color=\"secondary\">\n<p>Document </p>\n </ion-text>\n</ion-label>\n  <ion-select  (ionChange)=\"doctypechanged($event)\" [(ngModel)]=\"documenttype\"  >\n      <ion-select-option value=\"creation\"  >Create </ion-select-option>\n      <ion-select-option value=\"creation\"  >Create certified </ion-select-option>\n      <ion-select-option value=\"confirmation\" >Request certified </ion-select-option>\n  </ion-select>\n </ion-item>\n\n <ion-item *ngIf=\"documentdomaino != 'Other'\">\n <ion-badge slot=\"start\">1.4</ion-badge>\n    <ion-label text-wrap > \n      <ion-text color=\"primary\">\nSelect document subject \n </ion-text> </ion-label>\n\n  <ion-select (ionChange)=\"docdomainchanged($event)\" [(ngModel)]=\"documentdomain\" >\n      <ion-select-option value=\"Nda\" > NDA </ion-select-option>\n      <ion-select-option value=\"Disclosure\" > Disclosure </ion-select-option>\n      <ion-select-option value=\"Offer\" > Offer </ion-select-option>\n      <ion-select-option value=\"Issue\" > Issue </ion-select-option>\n      <ion-select-option value=\"License\" > License </ion-select-option>\n      <ion-select-option value=\"Information\" > Information </ion-select-option>\n      <ion-select-option value=\"Agreement\" >Agreement </ion-select-option>\n      <ion-select-option value=\"Disagreement\" >Disagreement </ion-select-option>\n      <ion-select-option value=\"Contract\" >Contract </ion-select-option>\n      <ion-select-option value=\"Order\" >Order </ion-select-option>\n      <ion-select-option value=\"Cancellation\" >Cancellation </ion-select-option>\n      <ion-select-option value=\"Proposal\" > Proposal </ion-select-option>\n      <ion-select-option value=\"Confirmation\" >Confirmation </ion-select-option>\n      <ion-select-option value=\"Other\" >Other </ion-select-option>\n  </ion-select>\n\n </ion-item>\n <ion-item *ngIf=\"documentdomaino == 'Other'\">\n <ion-badge slot=\"start\">1.4</ion-badge>\n    <ion-label text-wrap position=\"stacked\"> \n      <ion-text color=\"primary\">\nSelect document subject \n </ion-text> </ion-label>\n         <ion-input   [(ngModel)]=\"documentdomain\" placeholder=\"Enter subject ....\" ></ion-input>\n\n </ion-item>\n\n\n\n        <ion-item  text-center>\n <ion-badge slot=\"start\">1.5</ion-badge>\n     <ion-label padding-bottom position=\"stacked\"> Document location </ion-label>\n         <ion-input  [(ngModel)]=\"invoicerequest.documentlocation\" placeholder=\"....\" ></ion-input>\n\n        </ion-item  >\n\n\n   <ion-item   text-center>\n <ion-badge slot=\"start\">2.1</ion-badge>\n <ion-label position=\"stacked\"> Enter document description </ion-label>\n\n       <ion-textarea rows=\"4\" class=\"ion-text-wrap\" type=\"text\" [(ngModel)]=\"invoicerequest.invoicemessage\"\n                          placeholder=\"{{samplemessage1}}\"></ion-textarea>\n\n\n        </ion-item  >\n        <ion-item  text-center>\n <ion-badge slot=\"start\">2.2</ion-badge>\n     <ion-label padding-bottom position=\"stacked\"> Document name </ion-label>\n         <ion-input  [(ngModel)]=\"invoicerequest.documentnumber\" placeholder=\"....\" ></ion-input>\n\n        </ion-item  >\n\n<div *ngIf=\"useraccount.docvalidatefeature\">\n      <div *ngIf=\"(useraccount.docvalidatefeature.docdetails == 'yes')\" >\n        <ion-grid>\n        <ion-row>\n   <ion-col>\n        <ion-item  text-center>\n     <ion-label padding-bottom position=\"stacked\"> Invoice number </ion-label>\n         <ion-input  [(ngModel)]=\"invoicerequest.invoicenumber\" placeholder=\"Enter Invoice number \" ></ion-input>\n\n        </ion-item  >\n        </ion-col>\n        <ion-col>\n        <ion-item  text-center>\n     <ion-label padding-bottom position=\"stacked\"> Enter amount in USD below </ion-label>\n         <ion-input  (ionChange)=\"usdamountChanged($event)\" [(ngModel)]=\"invoicerequest.invoiceamount\" placeholder=\"Enter USD \"></ion-input>\n        </ion-item  >\n\n\n        </ion-col>\n        </ion-row>\n        <ion-row>\n   <ion-col>\n        <ion-item  text-center>\n     <ion-label padding-bottom position=\"stacked\"> Enter conversion rate </ion-label>\n         <ion-input  [(ngModel)]=\"invoicerequest.dashprice\" placeholder=\"USD/Dash \"></ion-input>\n\n        </ion-item  >\n        </ion-col>\n        <ion-col>\n\n        <ion-item  text-center>\n     <ion-label padding-bottom position=\"stacked\"> Amount in DASH \n\n    </ion-label>\n         <ion-input  [(ngModel)]=\"invoicerequest.dashamount\" placeholder=\"DASH \" readonly></ion-input>\n <p>    Fees: {{directfees | FromSatoshi | number: '1.0-9' }}\n </p>\n    \n        </ion-item  >\n\n\n        </ion-col>\n        </ion-row>\n\n        <ion-row>\n   <ion-col>\n        <ion-item  text-center>\n     <ion-label padding-bottom position=\"stacked\"> Enter template number </ion-label>\n         <ion-input  [(ngModel)]=\"invoicerequest.templatenumber\" placeholder=\"Enter template number \"></ion-input>\n        </ion-item  >\n\n\n\n   </ion-col>\n        </ion-row>\n        </ion-grid>\n\n</div >\n</div >\n      \n\n  <ion-item  text-center *ngIf=\"documenttype == 'creation'\">\n <ion-badge slot=\"start\">2.3</ion-badge>\n          <ion-label  position=\"stacked\"> Email to send document </ion-label>\n      <ion-input placeholder=\"Enter email-id\" [(ngModel)]=\"invoicerequest.invoiceemail\" name=\"email\" type=\"email\" required>\n        </ion-input>\n    </ion-item  >\n  <ion-item  text-center *ngIf=\"documenttype == 'confirmation'\">\n <ion-badge slot=\"start\">2.3</ion-badge>\n          <ion-label  position=\"stacked\"> Email to receive document </ion-label>\n      <ion-input placeholder=\"Enter email-id\" [(ngModel)]=\"invoicerequest.invoiceemail\" name=\"email\" type=\"email\" required>\n        </ion-input>\n    </ion-item  >\n\n\n  <ion-item text-center *ngIf=\"documenttype == 'creation'\">\n <ion-badge slot=\"start\">2.4</ion-badge>\n        <ion-label>\n        <ion-button  [disabled]=\"senddisable\" clear size=\"small\" color=\"primary\" (click)=\"sendinformationemail()\" > Submit(I)   </ion-button>\n        </ion-label>\n        </ion-item>\n\n  <ion-item text-center *ngIf=\"documenttype == 'confirmation'\">\n <ion-badge slot=\"start\">2.4</ion-badge>\n        <ion-label>\n        <ion-button  [disabled]=\"senddisable\" clear size=\"small\" color=\"primary\" (click)=\"sendconformationemail()\" > Submit(C)  </ion-button>\n        </ion-label>\n        </ion-item>\n\n\n      </ion-card-content >\n    </ion-card >\n\n    <ion-card >\n   <ion-card-header>\n     <ion-card-subtitle> Balance </ion-card-subtitle>\n      </ion-card-header>\n      <ion-item class=\"ion-text-wrap\">\n    <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n\n     <ion-label class=\"ion-text-wrap\" *ngIf=\"useraccount\">\n      <ion-text color=\"primary\">\n        <h4> Daily free pool  :\n        {{useraccount.docfreepoolcount}}   </h4>\n      </ion-text>\n      <ion-text color=\"secondary\" *ngIf=\"useraccount\">\n      <p  *ngIf=\"bucket.freepool\" > -> Selected </p>\n      </ion-text>\n    </ion-label>\n  <ion-button   slot=\"end\" size=\"small\" color=\"primary\" (click)=\"accessfree()\"> Access </ion-button>\n\n\n      </ion-item >\n  <ion-item class=\"ion-text-wrap\">\n    <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n\n     <ion-label class=\"ion-text-wrap\" *ngIf=\"useraccount\">\n      <ion-text color=\"primary\">\n        <h4> Account balance  :\n        {{useraccount.docpaidbalancecount}}   </h4>\n      </ion-text>\n      <ion-text color=\"secondary\" *ngIf=\"useraccount\">\n      <p  *ngIf=\"bucket.paidaccount\" > -> Selected </p>\n      </ion-text>\n    </ion-label>\n  <ion-button   slot=\"end\" size=\"small\" color=\"primary\" (click)=\"accesspaid()\"> Access </ion-button>\n\n      </ion-item >\n\n     <ion-item >\n      <ion-button  size=\"small\" color=\"primary\" (click)=\"getwalletbalance()\"> Buy access </ion-button>\n      </ion-item >\n\n\n\n\n\n\n    </ion-card>\n      <ion-item >\n      </ion-item >\n\n\n</div>\n</div>\n<div *ngIf=\"whichsegment == 'messages'\">\n <ion-item > \n        <ion-button  slot=\"end\" size=\"small\" color=\"primary\" (click)=\"refresh()\" > refresh  </ion-button>\n </ion-item > \n\n   <!-- pager -->\n            <ion-item>\n            <div *ngIf=\"pager.pages && (pager.pages.length > 0)\" >\n                <ion-button [disabled]=\"(pager.currentPage === 1)\"\n                     (click)=\"setPage(1)\">First\n                </ion-button>\n                <ion-button [disabled]=\"(pager.currentPage === 1)\"\n                     (click)=\"setPage(pager.currentPage - 1)\">Previous\n                </ion-button>\n                <ion-button *ngFor=\"let page of pager.pages\" [disabled]=\"!(pager.currentPage === page)\"\n                     (click)=\"setPage(page)\">{{page}}\n                </ion-button>\n                <ion-button [disabled]=\"(pager.currentPage === pager.totalPages)\"\n                     (click)=\"setPage(pager.currentPage + 1)\">Next\n                </ion-button>\n                <ion-button [disabled]=\"(pager.currentPage === pager.totalPages)\"\n                     (click)=\"setPage(pager.totalPages)\">Last\n                </ion-button>\n            </div>\n     </ion-item>\n\n  <ion-item *ngIf=\"userrecords.length == 0\" >\n  No records\n    </ion-item  >\n         \n <ion-list> \n\n\n    <div *ngFor=\"let msg of pageduserrecords; let i = index\" >\n    <ion-item  >\n          <ion-label  text-wrap>\n            <h3> Invoice no:          {{msg.invoicenumber}} </h3>\n            <h3> Record no:          {{msg.userrecordno}} </h3>\n            <h4> Payment address:          {{msg.escrowaddress}} </h4>\n            <h4 *ngIf=\"msg.reqstatus == 'new'\"> Status :     Blockchain address for validation </h4>\n            <h4 *ngIf=\"msg.reqstatus == 'funded'\"> Status :     Ready for validation </h4>\n            <h4 *ngIf=\"msg.reqstatus == 'accepted'\"> Status :     Document validated </h4>\n            <h4> Balance :     {{msg.balance | FromSatoshi | number: '1.0-9' }}  </h4>\n   <p *ngIf=\"msg.escrowaddress == tmpaddress\"> Unconfirmed : {{tmpunconfirmed | FromSatoshi | number: '1.0-9' }} </p>\n\n       \n       </ion-label>\n    </ion-item>\n    <ion-item>\n          <ion-label  text-wrap> \n           <h4> Payment mode </h4>\n    <div *ngIf=\"useraccount.docvalidatefeature\">\n      <ion-button [disabled]=\"!(useraccount.docvalidatefeature.docvalidatefeaturetype == 'personal')\" slot=\"end\" size=\"small\" color=\"primary\" (click)=\"personalpay(msg)\"> Personal  </ion-button>\n      <ion-button [disabled]=\"!(useraccount.docvalidatefeature.docvalidatefeaturetype == 'system')\" slot=\"end\" size=\"small\" color=\"primary\" (click)=\"systempay(msg)\"> System  </ion-button>\n      <ion-button [disabled]=\"!(useraccount.docvalidatefeature.docvalidatefeaturetype == 'company')\" slot=\"end\" size=\"small\" color=\"primary\" (click)=\"companypay(msg)\"> Company  </ion-button>\n    </div>\n    <div *ngIf=\"!useraccount.docvalidatefeature\">\n    Account is not setup\n    </div>\n       </ion-label>\n    </ion-item>\n    <ion-item>\n          <ion-label  text-wrap> \n           <h4> Document </h4>\n      <ion-button [disabled]=\"msg.reqstatus != 'accepted'\"  slot=\"end\" size=\"small\" color=\"primary\" (click)=\"webdocsendcertificate(msg)\"> Certificate </ion-button>\n      <ion-button   slot=\"end\" size=\"small\" color=\"primary\" href=\"/docvalidateverify/{{msg.escrowaddress}}/validate\"> Validate </ion-button>\n      <ion-button   slot=\"end\" size=\"small\" color=\"primary\" href=\"/docvalidateverify/{{msg.escrowaddress}}/verify\"> Verify </ion-button>\n\n       </ion-label>\n    </ion-item>\n\n    <ion-item>\n          <ion-label  text-wrap>\n           <h4> Manage </h4>\n      <ion-button slot=\"end\" size=\"small\" color=\"primary\" (click)=\"deleteold(msg)\"> Delete </ion-button>\n      <ion-button slot=\"end\" size=\"small\" color=\"primary\" (click)=\"getescrowbalance(msg)\"> Status </ion-button>\n     <!-- ion-button slot=\"end\" size=\"small\" color=\"primary\" (click)=\"webdocsendinvoice(msg)\">  Invoice </ion-button -->\n       </ion-label>\n    </ion-item>\n   </div>\n\n \n\n </ion-list> \n\n</div>\n</ion-content>\n\n<!-- ion-footer>\n  <ion-toolbar color=\"primary\" class=\"ion-text-center\">\n    <ion-title>\n<sup> Made in </sup>  <img alt=\"91springboard\" height=\"40\"    src=\"assets/imgs/91springlogo.png\"  float=\"left\" />\n   </ion-title>\n  </ion-toolbar>\n</ion-footer -->\n\n\n"

/***/ }),

/***/ "./src/app/pages/docvalidate/tab3sending.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/docvalidate/tab3sending.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-size: 0.875em; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvZG9jdmFsaWRhdGUvdGFiM3NlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0sbUJBQWtCLEVBQUk7O0FBRTVCO0VBQ0UsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFHRDtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEI7O0FBR0Q7RUFDSSxvQ0FBbUM7RUFDbkMsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdmFsaWRhdGUvdGFiM3NlbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHsgZm9udC1zaXplOiAwLjg3NWVtOyB9IC8vIDE0cHggXG5cbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuaW9uLXRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5cbmlvbi1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/docvalidate/tab3sending.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/docvalidate/tab3sending.page.ts ***!
  \*******************************************************/
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
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _tab4wallet_record_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tab4wallet/record.service */ "./src/app/pages/tab4wallet/record.service.ts");
/* harmony import */ var _tab4wallet_policy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab4wallet/policy.service */ "./src/app/pages/tab4wallet/policy.service.ts");
/* harmony import */ var _tab4wallet_webuser_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tab4wallet/webuser.service */ "./src/app/pages/tab4wallet/webuser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _paydisplaymodal_paydisplaymodal_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../paydisplaymodal/paydisplaymodal.page */ "./src/app/pages/paydisplaymodal/paydisplaymodal.page.ts");
/* harmony import */ var _printdisplaymodal_printdisplaymodal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../printdisplaymodal/printdisplaymodal.page */ "./src/app/pages/printdisplaymodal/printdisplaymodal.page.ts");
/* harmony import */ var _tab4wallet_md5service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tab4wallet/md5service.service */ "./src/app/pages/tab4wallet/md5service.service.ts");
/* harmony import */ var _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../firebasekyc-page/kyc.service */ "./src/app/pages/firebasekyc-page/kyc.service.ts");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");
/* harmony import */ var _tab4wallet_invoice_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../tab4wallet/invoice.service */ "./src/app/pages/tab4wallet/invoice.service.ts");
/* harmony import */ var _tab4wallet_activate_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../tab4wallet/activate.service */ "./src/app/pages/tab4wallet/activate.service.ts");
/* harmony import */ var _tab4wallet_pager_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../tab4wallet/pager.service */ "./src/app/pages/tab4wallet/pager.service.ts");






















var Tab3sendingPage = /** @class */ (function () {
    function Tab3sendingPage(blue011issue, blue011consume, activateservice, alertController, modalController, invoiceservice, pagerService, blue011web, md5service, changellyCalls, recordService, logger, policyService, kycService, webuserservice, termsuserservice, router, storage) {
        var _this = this;
        this.blue011issue = blue011issue;
        this.blue011consume = blue011consume;
        this.activateservice = activateservice;
        this.alertController = alertController;
        this.modalController = modalController;
        this.invoiceservice = invoiceservice;
        this.pagerService = pagerService;
        this.blue011web = blue011web;
        this.md5service = md5service;
        this.changellyCalls = changellyCalls;
        this.recordService = recordService;
        this.logger = logger;
        this.policyService = policyService;
        this.kycService = kycService;
        this.webuserservice = webuserservice;
        this.termsuserservice = termsuserservice;
        this.router = router;
        this.storage = storage;
        this.whichdash = (_config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].network == 'testnet') ? 'tDASH' : 'DASH';
        this.whichsegment = "send";
        this.userrecords = [];
        this.accounttype = '';
        this.pageduserrecords = [];
        this.pager = {};
        this.network = _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].network;
        this.senddisable = false;
        this.toaddress = '';
        this.somefilename = '';
        this.tmpaddress = '';
        this.fileContenthash = '';
        this.tmpunconfirmed = '';
        this.directpurpose = '';
        this.documenttype = 'creation';
        this.revertpurpose = '';
        this.docvalidatefeaturetype = '';
        this.documentdomain = 'Agreement';
        this.documentdomaino = 'Agreement';
        this.torevertamount = 0.000;
        this.yettodepositfund = false;
        this.txid = '';
        this.directtxid = '';
        this.bucket = {
            freepool: true,
            paidaccount: false,
            subscribedaccount: false
        };
        this.useraccount = {
            termsagreed: 'no',
            dashprice: '0'
        };
        this.samplemessage1 = "Dear sir \n" +
            "The provided document is certified on Blockchain , \n" +
            "the hash of the document is provided, \n" +
            "the recorded hash in Blockchain is tamper proof. \n" +
            "Regards ";
        this.samplemessage2 = "Dear sir \n" +
            "Please certify the provided document on Blockchain , \n" +
            "the hash of the document is provided, \n" +
            "            \n" +
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
            documentlocation: 'The link to document is .....',
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
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageuniq + 'sendnetworkfeeschange').then(function (data) {
            if (data) {
                _this.sendnetworkfeeschange = data;
            }
        });
    }
    ;
    Tab3sendingPage.prototype.trialpay = function () {
    };
    Tab3sendingPage.prototype.companypay = function () {
        var data = {
            paymentmethod: 'companypay',
            network: this.useraccount.docvalidatefeature.docnetwork,
        };
        this.invoiceservice.payment(data, '/paytool/webdocvalidatepay').then(function (xx) {
        }).catch(function (err) {
        });
    };
    Tab3sendingPage.prototype.personalpay = function () {
        var data = {
            paymentmethod: 'personalpay',
            network: this.useraccount.docvalidatefeature.docnetwork,
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
        this.invoiceservice.payment(data, '/paytool/webdocvalidatepayqueue').then(function (xx) {
        }).catch(function (err) {
            _this.presentAlert("", "", "Error during payment");
            return;
        });
    };
    Tab3sendingPage.prototype.getdefinvtemplatenumber = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    templatetype: 'Docblockchan'
                };
                this.invoiceservice.webgetdefaultinvtemplate(data).then(function (xx) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var rawtemplatedata, err_1;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (xx) {
                                    this.defaultinvoice = xx; //JSON.parse(xx);
                                }
                                else {
                                    return [2 /*return*/];
                                }
                                if (!this.defaultinvoice.defaultdocumentblockchaintemplate) return [3 /*break*/, 5];
                                this.invoicerequest.templatenumber = this.defaultinvoice.defaultdocumentblockchaintemplate.templatenumber;
                                this.invoicerequest.templatetype = this.defaultinvoice.defaultdocumentblockchaintemplate.templatetype;
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, this.webuserservice.webgettemplate(this.invoicerequest)];
                            case 2:
                                rawtemplatedata = _a.sent();
                                if (rawtemplatedata.length > 0)
                                    this.invoicerequest.businesstitle = rawtemplatedata[0].businesstitle;
                                else {
                                    this.presentAlert("", "", "Template not found  ");
                                    return [2 /*return*/];
                                }
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                this.presentAlert("", "", "Template load failed  ");
                                return [2 /*return*/];
                            case 4:
                                this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageuniq + 'defaulttemplate', JSON.stringify(xx));
                                return [3 /*break*/, 6];
                            case 5:
                                this.presentAlert("", "", "Template not set ");
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); }).catch(function (err) {
                });
                this.invoicerequest.dashprice = this.useraccount.dashprice ? this.useraccount.dashprice : 0;
                return [2 /*return*/];
            });
        });
    };
    Tab3sendingPage.prototype.ionViewWillEnter = function () {
        this.allsetup();
    };
    Tab3sendingPage.prototype.allsetup = function () {
        //  this.loadwalletwif() ;
        this.loaduser();
        this.loadaccount();
        this.loadkycdata();
        this.getaccount();
        this.getdefinvtemplatenumber();
        //  this.loadwalletbalance() ;
        this.loaduserrecords();
        // this.getdefaultsetting() ;
        this.invoicerequest.invoicemessage = this.samplemessage1;
    };
    Tab3sendingPage.prototype.ngOnInit = function () {
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
                this.blue011web.webdocemailhtml(data, '/webtool/webdocsendcertificate').then(function (c) {
                    //this.displayemailmsg() ;
                    _this.htmltoprint = JSON.parse(c._body).replace(/(?:\r\n|\r|\n)/g, ''); //JSON.parse(c); 
                    _this.dynamicopen(_this.htmltoprint);
                    /*
                        console.log(environment.storageuniq+'htmltoprint' +this.htmltoprint );
                        this.storage.set(environment.storageuniq+'htmltoprint', this.htmltoprint ).then(xx=>{
                    
                            this.router.navigate(['/printpage']);
                        });
                    */
                    //this.presentModalPrint(c) ;
                    //   this.senddisable = false;
                }).catch(function (err1) {
                    console.log(err1);
                    _this.presentAlert("", "", err1);
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
                this.blue011web.webdocemailhtml(data, '/webtool/webdocsendinvoice').then(function (c) {
                    _this.htmltoprint = JSON.parse(c._body).replace(/(?:\r\n|\r|\n)/g, ''); //JSON.parse(c); 
                    _this.dynamicopen(_this.htmltoprint);
                    //    this.displayemailmsg() ;
                    //   this.senddisable = false;
                }).catch(function (err1) {
                    _this.presentAlert("", "", err1);
                });
                return [2 /*return*/];
            });
        });
    };
    Tab3sendingPage.prototype.sendinformationemail = function () {
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
                        if (!this.loggedinuser || !this.loggedinuser.uid) {
                            this.presentAlert("", "", "Login to proceed ");
                            return [2 /*return*/];
                        }
                        if (!this.useraccount) {
                            this.allsetup();
                            this.presentAlert("", "", "Loading user data ");
                            return [2 /*return*/];
                        }
                        if (this.documentdomain == '') {
                            this.presentAlert("", "", "Select document domain");
                            return [2 /*return*/];
                        }
                        this.invoicerequest.documentdomain = this.documentdomain;
                        if (this.invoicerequest.documentlocation == '') {
                            this.presentAlert("", "", "Provide document location");
                            return [2 /*return*/];
                        }
                        if (this.invoicerequest.dashamount == '') {
                            this.presentAlert("", "", "DASH amount is invalid");
                            return [2 /*return*/];
                        }
                        if (this.bucket.freepool) {
                            if (this.useraccount.docfreepoolcount <= 0) {
                                this.presentAlert("", "", "No balance to use the system ");
                                return [2 /*return*/];
                            }
                            else {
                                this.accounttype = "freepool";
                            }
                        }
                        if (this.bucket.paidaccount) {
                            if (this.useraccount.docpaidbalancecount <= 0) {
                                this.presentAlert("", "", "No balance to use the system ");
                                return [2 /*return*/];
                            }
                            else {
                                this.accounttype = "paidaccount";
                            }
                        }
                        data = {
                            network: this.useraccount.docvalidatefeature.docnetwork,
                            paymentdata: 'null',
                            email: this.loggedinuser ? this.loggedinuser.email : null,
                            googleid: this.loggedinuser ? this.loggedinuser.uid : null,
                            kycid: this.useraccount ? this.useraccount.kycid : null,
                            webemail: this.invoicerequest.invoiceemail,
                            templatedata: this.invoicerequest,
                            accounttype: this.accounttype,
                            docvalidationtype: this.documenttype,
                            docvalidatefeaturetype: this.useraccount.docvalidatefeature.docvalidatefeaturetype
                        };
                        if (data.email == null) {
                            this.presentAlert("", "", "Login to proceed ");
                            this.router.navigate(['/login']);
                        }
                        this.blue011web.webdocemail(data, '/webtool/webdocvalidateinformconformemail').then(function (controldata) {
                            _this.displayemailmsg();
                            if (controldata) {
                                _this.useraccount = controldata;
                                _this.justsave();
                            }
                        }).catch(function (err1) {
                            //   this.senddisable = false;
                            console.log(err1._body);
                            var err;
                            try {
                                err = JSON.parse(err1._body);
                                _this.presentAlert("", err.response.message, err.response.data);
                            }
                            catch (errx) {
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3sendingPage.prototype.sendconformationemail = function () {
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
                        if (!this.loggedinuser || !this.loggedinuser.uid) {
                            this.presentAlert("", "", "Login to proceed ");
                            return [2 /*return*/];
                        }
                        if (!this.useraccount) {
                            this.allsetup();
                            this.presentAlert("", "", "Loading user data ");
                            return [2 /*return*/];
                        }
                        if (this.invoicerequest.dashamount == '') {
                            this.presentAlert("", "", "DASH amount is invalid");
                            return [2 /*return*/];
                        }
                        if (this.documentdomain == '') {
                            this.presentAlert("", "", "Select document domain");
                            return [2 /*return*/];
                        }
                        if (this.invoicerequest.documentlocation == '') {
                            this.presentAlert("", "", "Provide document location");
                            return [2 /*return*/];
                        }
                        this.invoicerequest.documentdomain = this.documentdomain;
                        if (this.bucket.freepool) {
                            if (this.useraccount.docfreepoolcount <= 0) {
                                this.presentAlert("", "", "No balance to use the system ");
                                return [2 /*return*/];
                            }
                            else {
                                this.accounttype = "freepool";
                            }
                        }
                        if (this.bucket.paidaccount) {
                            if (this.useraccount.docpaidbalancecount <= 0) {
                                this.presentAlert("", "", "No balance to use the system ");
                                return [2 /*return*/];
                            }
                            else {
                                this.accounttype = "paidaccount";
                            }
                        }
                        data = {
                            network: this.useraccount.docvalidatefeature.docnetwork,
                            paymentdata: 'null',
                            email: this.loggedinuser ? this.loggedinuser.email : null,
                            googleid: this.loggedinuser ? this.loggedinuser.uid : null,
                            kycid: this.useraccount ? this.useraccount.kycid : null,
                            webemail: this.invoicerequest.invoiceemail,
                            accounttype: this.accounttype,
                            templatedata: this.invoicerequest,
                            docvalidationtype: this.documenttype,
                            docvalidatefeaturetype: this.useraccount.docvalidatefeature.docvalidatefeaturetype
                        };
                        if (data.email == null) {
                            this.presentAlert("", "", "Login to proceed ");
                            this.router.navigate(['/login']);
                        }
                        this.blue011web.webdocemail(data, '/webtool/webdocvalidateinformconformemail').then(function (controldata) {
                            _this.displayemailmsg();
                            if (controldata) {
                                _this.useraccount = controldata;
                                _this.justsave();
                            }
                        }).catch(function (err1) {
                            //   this.senddisable = false;
                            console.log(err1._body);
                            var err;
                            try {
                                err = JSON.parse(err1._body);
                            }
                            catch (errx) {
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3sendingPage.prototype.websendemail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, data;
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
                        /*
                           try {
                           var rawtemplatedata:any = await this.webuserservice.webgettemplate(this.invoicerequest);
                              if(rawtemplatedata.length >0)
                                this.invoicerequest.businesstitle = rawtemplatedata[0].businesstitle;
                              else {
                                this.presentAlert("", "", "Template not found  " );
                                return;
                              }
                            } catch(err) {
                        
                              this.presentAlert("", "", "Template load failed  " );
                              return;
                            }
                        
                          */
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
                            docvalidationtype: this.documenttype,
                            docvalidatefeaturetype: this.useraccount.docvalidatefeature.docvalidatefeaturetype
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
        var data = {
            templatetype: 'Docblockchan'
        };
        /*
        
        this.invoiceservice.webgetdefaultinvtemplate(data).then(xx=>{
         if(!xx) return;
        
         this.defaultinvoice = xx;
         this.storage.set(environment.storageuniq+'defaulttemplate', JSON.stringify(xx) );
        
         }, (err) => {
         this.storage.set(environment.storageuniq+'defaulttemplate', null );
            this.presentAlert("", "", "Error default setting.");
        
         });
        */
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
    Tab3sendingPage.prototype.justsave = function () {
        var _this = this;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageuniq + 'useraccount', JSON.stringify(this.useraccount)).then(function (xx) {
            _this.termsuserservice.reflectuseraccount();
        });
        ;
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
                                //     var puser = this.useraccount.invoicecount?this.useraccount.invoicecount:0;
                                _this.invoicerequest.dashprice = _this.useraccount.dashprice;
                                _this.invoicerequest.dashamount = _this.useraccount.docvalidatefeature.doctranamount;
                                //    this.invoicerequest.dashfees = this.useraccount.docvalidatefeature.doctranfees;
                                //    this.invoicerequest.invoicenumber = this.padfunc('IN-'+"00-",puser +1, '0', 9) ;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount)).then(function (xx) {
                                    _this.termsuserservice.reflectuseraccount();
                                });
                                ;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
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
    Tab3sendingPage.prototype.docdomainchanged = function (e) {
        if (this.documentdomain == 'Other') {
            this.documentdomaino = 'Other';
        }
        else {
        }
        ;
    };
    Tab3sendingPage.prototype.doctypechanged = function (e) {
        if (this.documenttype == 'creation') {
            this.invoicerequest.invoicemessage = this.samplemessage1;
        }
        ;
        if (this.documenttype == 'confirmation') {
            this.invoicerequest.invoicemessage = this.samplemessage2;
        }
        ;
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
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageuniq + 'kycstatus').then(function (data) {
            if (data) {
                _this.kycstatus = data;
            }
        });
    };
    Tab3sendingPage.prototype.loadwalletwif = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageuniq + 'walletwif').then(function (data) {
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
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageuniq + 'walletbalance', walletbalance).then(function (x) {
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
        var p = new stdcrypto.buffer.Buffer(msg.contract, 'base64');
        var s = p.toString();
        console.log("string received=" + s);
        var datacorrupt;
        var data;
        try {
            data = JSON.parse(s);
            var thestr = stdcrypto.buffer.Buffer.from(data.uid, 'hex');
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
                _this.blue011issue.updateuserrecord(msg);
                _this.loaduserrecords();
            }
        }, function (err) {
            _this.presentAlert("", "", "Balance query failed " + err);
        });
    };
    Tab3sendingPage.prototype.loaduserrecords = function () {
        var _this = this;
        var data = {
            templatetype: 'Docblockchain'
        };
        this.blue011issue.getuserrecords(data, '/webuser/getuserrecords').then(function (data) {
            if (data) {
                _this.userrecords = data;
                _this.setPage(1);
            }
            else {
                //        alert("Load failed");
            }
        }, function (err) {
            _this.presentAlert("", "", err);
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
    Tab3sendingPage.prototype.sharecontract = function () {
        var message = this.issued.message;
        //return this.socialshareservice.socialSharingAnything(message, null, null);
    };
    Tab3sendingPage.prototype.sharepin = function () {
        var message = this.issued.pin;
        //   return this.socialshareservice.socialSharingAnything(message, null, null);
    };
    Tab3sendingPage.prototype.sharereversiblepaymentlink = function () {
        var message = "A payment of " + this.changellyCalls.fromSatoshi(this.torevertamount) + " DASH " + " is sent in link on " + Date().toString() + ". It expires in 4 days. Use PIN to accept.";
        //   return this.socialshareservice.socialSharingAnything(message, null, this.issued.encshorturl);
    };
    Tab3sendingPage.prototype.shareold = function (msg) {
        var message = " Contract: " + msg.message + "\r\n" + " PIN: " + msg.pin + "\r\n" + " Escrow address: " + msg.address;
        //   return this.socialshareservice.socialSharingAnything(message, null, null);
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
            _this.loaduserrecords();
        }).catch(function (err) {
            _this.presentAlert('', '', "Request failed");
        });
    };
    Tab3sendingPage.prototype.refresh = function () {
        this.loaduserrecords();
        this.presentAlert('', '', "Refreshed");
    };
    Tab3sendingPage.prototype.clearall = function () {
        var _this = this;
        this.blue011issue.deleteallmessage().then(function (xx) {
            _this.loaduserrecords();
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
            var mix, item, modal, err_2;
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
                                component: _paydisplaymodal_paydisplaymodal_page__WEBPACK_IMPORTED_MODULE_13__["PaydisplaymodalPage"],
                                componentProps: { obj: item }
                            })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        err_2 = _a.sent();
                        alert("Error" + err_2);
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
                    this.presentAlert('', '', "Wallet not set " + _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
                    return [2 /*return*/];
                }
                if (!this.revertible.message) {
                    this.presentAlert('', '', "Contract field empty " + _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
                    return [2 /*return*/];
                }
                if (!this.revertible.pin) {
                    this.presentAlert('', '', "PIN field empty " + _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
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
                    this.presentAlert('', '', "Provide address to receive funds " + _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
                    return [2 /*return*/];
                }
                if (!dashcore.Address.isValid(this.revertible.target, this.network)) {
                    this.presentAlert('', '', "Invalid receive address provided " + _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
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
                            _this.presentAlert('', data1, "Error processing Request " + _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
                            return;
                        }
                        else {
                            data = data1;
                        }
                        if (data.error) {
                            _this.presentAlert('', '', "Error processing Request " + _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
                            return;
                        }
                        _this.refresh();
                    }
                    else {
                        _this.presentAlert('', '', " Receive funds failed " + _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
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
                        _this.presentAlert('Receive funds failed', err.response.message, _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
                    }
                    else {
                        _this.presentAlert('Receive funds failed', 'Error', _config_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].err.W1221.code);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Tab3sendingPage.prototype.onChange = function (fileList) {
        var _this = this;
        var file = fileList[0];
        var self = this;
        //   var lastindex = this.somefilename.lastIndexOf("\\");
        this.invoicerequest.documentnumber = this.somefilename.split("\\").pop();
        this.md5service.computeChecksumMd5Hash(file).then(function (md5) {
            console.log('The MD5 hash is: ' + md5);
            self.fileContenthash = md5;
            _this.invoicerequest.dochash = md5;
        });
    };
    Tab3sendingPage.prototype.presentModalPrint = function (ht) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var item, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = {
                            htmltoprint: ht,
                            title: 'dddress to deposit',
                            bottommessage: ''
                        };
                        return [4 /*yield*/, this.modalController.create({
                                component: _printdisplaymodal_printdisplaymodal_page__WEBPACK_IMPORTED_MODULE_14__["PrintdisplaymodalPage"],
                                componentProps: { obj: item }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab3sendingPage.prototype.dynamicopen = function (xx) {
        var printContents, popupWin;
        printContents = xx; //document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=50%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n    " + printContents + "\n\n      ");
        popupWin.window.print();
        popupWin.window.close();
        popupWin.document.close();
    };
    Tab3sendingPage.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.userrecords.length, page, 5);
        // get current page of items
        this.pageduserrecords = this.userrecords.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    Tab3sendingPage.prototype.accessfree = function () {
        this.bucket.freepool = true;
        this.bucket.paidaccount = false;
    };
    Tab3sendingPage.prototype.accesspaid = function () {
        this.bucket.freepool = false;
        this.bucket.paidaccount = true;
    };
    Tab3sendingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3sending',
            template: __webpack_require__(/*! ./tab3sending.page.html */ "./src/app/pages/docvalidate/tab3sending.page.html"),
            styles: [__webpack_require__(/*! ./tab3sending.page.scss */ "./src/app/pages/docvalidate/tab3sending.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tab4wallet_blue011_issue_service__WEBPACK_IMPORTED_MODULE_4__["Blue011IssueService"],
            _tab4wallet_blue011_consume_service__WEBPACK_IMPORTED_MODULE_5__["Blue011ConsumeService"],
            _tab4wallet_activate_service__WEBPACK_IMPORTED_MODULE_20__["ActivateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _tab4wallet_invoice_service__WEBPACK_IMPORTED_MODULE_19__["InvoiceService"],
            _tab4wallet_pager_service__WEBPACK_IMPORTED_MODULE_21__["PagerService"],
            _tab4wallet_blue011_web_service__WEBPACK_IMPORTED_MODULE_6__["Blue011WebService"],
            _tab4wallet_md5service_service__WEBPACK_IMPORTED_MODULE_15__["Md5service"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_3__["ChangellyCalls"],
            _tab4wallet_record_service__WEBPACK_IMPORTED_MODULE_9__["RecordService"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_18__["Logger"],
            _tab4wallet_policy_service__WEBPACK_IMPORTED_MODULE_10__["PolicyService"],
            _firebasekyc_page_kyc_service__WEBPACK_IMPORTED_MODULE_16__["KycService"],
            _tab4wallet_webuser_service__WEBPACK_IMPORTED_MODULE_11__["WebuserService"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_17__["TermsuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], Tab3sendingPage);
    return Tab3sendingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-docvalidate-tab3sending-module.js.map