(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashaccept-mydeals-list-module"],{

/***/ "./src/app/pages/config/webconsumeconfig.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/config/webconsumeconfig.ts ***!
  \**************************************************/
/*! exports provided: webtestnetconsumeconfig, weblivenetconsumeconfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webtestnetconsumeconfig", function() { return webtestnetconsumeconfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weblivenetconsumeconfig", function() { return weblivenetconsumeconfig; });
var webtestnetconsumeconfig = {
    apikey: "ApiKey " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTU0ODRjZGZkNWI5NmUwYjBiMTczMSIsImlhdCI6MTYwMzYxODkwMH0.Ax7KnnueIJq34q27M2ENSX0NtaVHBrL9KXvvXomEwjk'
};
var weblivenetconsumeconfig = {
    apikey: "ApiKey " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjBjNTI0NDIxNGM1NDA1Yjc2NzZkOSIsImlhdCI6MTYwMDE3NzQ5NX0.ZCxij6Ou_9giZcwVo0ckMlf_Yx6PfkJ4wriEu8oEbrM'
};


/***/ }),

/***/ "./src/app/pages/negotiate/dashaccept/dashaccept.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/negotiate/dashaccept/dashaccept.ts ***!
  \**********************************************************/
/*! exports provided: Dashscreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashscreen", function() { return Dashscreen; });
var Dashscreen = {
    // Don't change order of products. They are hardcoded in various pages
    products: [
        /*
               {
                productid: 'BLUE021',
               description: 'The blockchain based controlling and controlled element, provides ability to use blockchain to perform multi-part contract execution',
               howitworks: 'A blockchain contract is created with multiparty control features like OTP based control. Then each of the party can execute control over the execution of contract, by providing OTP to convey their decision.',
               title: 'Multi-party control of blockchain execution (BLUE021)',
               scope: 'Multi-party contracts ',
               companyname: 'ahahah',
               downloadsamples: 'ahahah',
               fees: 'Free',
                   deal: 'Compare with other smart contracts',
               navigation: 'solution-multiparty',
               controller: 'Controllers',
               controlled: 'Controlled',
               controllerlist: 'myissuerlist',
               controlledlist: 'myconsumerlist',
                productdata: {
               description: 'The blockchain based controlling and controlled element, provides ability to use blockchain to perform multi-part contract execution',
               howitworks: 'A blockchain contract is created with multiparty control features like OTP based control. Then each of the party can execute control over the execution of contract, by providing OTP to convey their decision.',
               title: 'Multi-party control of blockchain execution',
               companyname: 'ahahah',
               downloadsamples: 'ahahah',
               fees: 'Free',
                  }
               },
        */
        {
            productid: 'main1',
            description: 'Download your dash accept address to send DASH crypto without fear of losing it.  ',
            howitworks: 'A DASH blockchain contract is created with secret control PIN. Then receiving the party can execute contract, by providing PIN.',
            title: 'A Blockchain address control system (BLUE011)',
            scope: 'Accept DASH payment ',
            companyname: 'ahahah',
            downloadsamples: 'ahahah',
            fees: 'Free',
            email: '',
            navigation: 'blue011/solution-messagepay',
            controller: 'Issuers',
            controlled: 'Consumers',
            controllerlist: 'blue011/myissuerlist',
            controlledlist: 'blue011/myconsumerlist',
            deal: 'Enhanced ATM solution',
            productdata: {
                description: 'ahahah',
                title: 'ahahah',
                companyname: 'ahahah',
            },
        },
        {
            productid: 'BLUE012',
            description: 'The accept blockchain address that can used to send payments',
            howitworks: 'A accept blockchain address is created, which unlocks with message and PIN. The sender sends this message and PIN to receiver. The sender can accept any time.',
            title: 'Revertable blockchain address (BLUE012)',
            scope: 'Revertable, DASH address, payment ',
            companyname: 'ahahah',
            downloadsamples: 'ahahah',
            fees: 'Free',
            navigation: 'blue012/solution-revertaddress',
            controller: 'Issuers',
            controlled: 'Consumers',
            controllerlist: 'blue012/myissuerlist',
            controlledlist: 'blue012/myconsumerlist',
            deal: 'Revertable crypto payments ',
            productdata: {
                description: 'ahahah',
                title: 'ahahah',
                companyname: 'ahahah',
            },
        },
        /*
               {
                productid: 'BLUE031',
               description: 'The blockchain based controlling and controlled element, provides ability to use blockchain to issue coupon and redeem coupon ',
               howitworks: 'A blockchain contract is created for coupon with secret PIN. Then receiver of coupon can execute contract, by providing Coupon with PIN.',
               title: 'Coupon control on blockchain (BLUE031)',
               scope: 'Loyalty solutions, instant settlement ',
               companyname: 'ahahah',
               downloadsamples: 'ahahah',
               fees: 'Free',
               navigation: 'solution-coupon',
               controller: 'Controllers',
               controlled: 'Controlled',
               controllerlist: 'myissuerlist',
               controlledlist: 'myconsumerlist',
                productdata: {
               description: 'ahahah',
               title: 'ahahah',
               companyname: 'ahahah',
                  },
               },
               {
                productid: 'BLUE041',
               description: 'The blockchain based escrow creation and execution. ',
               howitworks: 'A blockchain contract for escrow is created with multiple PINs. The escrow owner  can execute contract, on fulfillment of escrow term.',
               title: 'Escrow control on blockchain (BLUE041)',
               scope: 'Creating escrow on blockchain ',
               companyname: 'ahahah',
               downloadsamples: 'ahahah',
               fees: 'Free',
               navigation: 'solution-escrow',
               controller: 'Controllers',
               controlled: 'Controlled',
               controllerlist: 'myissuerlist',
               controlledlist: 'myconsumerlist',
                productdata: {
               description: 'ahahah',
               title: 'ahahah',
               companyname: 'ahahah',
                  },
               },
               {
                productid: 'BLUE051',
               description: 'The blockchain based device execution control . ',
               howitworks: 'A blockchain contract for device, which may need one of parameters like location, userid, OTP . On providing proper data the contract is executed. ',
               title: 'Device control on blockchain (BLUE051)',
               scope: 'Locking, unlocking devices on blockchain ',
               companyname: 'ahahah',
               downloadsamples: 'ahahah',
               fees: 'Free',
               navigation: 'solution-device',
               controller: 'Controllers',
               controlled: 'Controlled',
               controllerlist: 'myissuerlist',
               controlledlist: 'myconsumerlist',
                productdata: {
               description: 'ahahah',
               title: 'ahahah',
               companyname: 'ahahah',
                  },
               },
               {
                productid: 'BLUE061',
               description: 'The blockchain based delayed execution control for temprory offline system. ',
               howitworks: 'A blockchain contract for delayed execution for device without internet. ',
               title: 'Device control on blockchain (BLUE061)',
               scope: 'Offline execution ',
               companyname: 'ahahah',
               downloadsamples: 'ahahah',
               fees: 'Free',
               navigation: 'solution-device',
               controller: 'Controllers',
               controlled: 'Controlled',
               controllerlist: 'myissuerlist',
               controlledlist: 'myconsumerlist',
                productdata: {
               description: 'ahahah',
               title: 'ahahah',
               companyname: 'ahahah',
                  },
               },
        */
        {
            productid: 'BLUE012',
            description: 'The blockchain based greet and gift system. ',
            howitworks: 'A blockchain contract with greeting in blockchain and money can be gifted to receiver . ',
            title: 'Greet and Gift on blockchain (BLUE012)',
            scope: 'Greet, Gift ',
            companyname: 'ahahah',
            downloadsamples: 'ahahah',
            fees: 'Free',
            navigation: 'solution-greetgift',
            controller: 'Controllers',
            controlled: 'Controlled',
            controllerlist: 'myissuerlist',
            controlledlist: 'myconsumerlist',
            deal: 'Greet and Gift on blockchain',
            productdata: {
                description: 'ahahah',
                title: 'ahahah',
                companyname: 'ahahah',
            },
        },
    ],
    token: 'GATYUUUIII',
};


/***/ }),

/***/ "./src/app/pages/negotiate/dashaccept/mydeals-list-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/negotiate/dashaccept/mydeals-list-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: MydealsListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydealsListPageRoutingModule", function() { return MydealsListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mydeals_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mydeals-list */ "./src/app/pages/negotiate/dashaccept/mydeals-list.ts");




var routes = [
    {
        path: '',
        component: _mydeals_list__WEBPACK_IMPORTED_MODULE_3__["MydealsListPage"]
    }
];
var MydealsListPageRoutingModule = /** @class */ (function () {
    function MydealsListPageRoutingModule() {
    }
    MydealsListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MydealsListPageRoutingModule);
    return MydealsListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/negotiate/dashaccept/mydeals-list.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/negotiate/dashaccept/mydeals-list.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar>\n\n\n\n\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button ></ion-menu-button>\n    </ion-buttons>\n        <ion-title>\n            <ion-label  >The pay box</ion-label>\n        </ion-title>\n\n\n        <ion-buttons slot=\"secondary\">\n            <ion-button  [disabled]=\"loggedinuser.uid ==''\" (click)=\"refresh()\">\n                Refresh\n            </ion-button>\n            <ion-button  *ngIf=\"loggedinuser.uid ==''\" (click)=\"login()\">\n                Login\n            </ion-button>\n            <ion-button  *ngIf=\"loggedinuser.uid !=''\" (click)=\"logout()\">\n                Logout\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"outer-content\">\n  <ion-item >\n       <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3> Default template  </h3>\n      </ion-text>\n      <ion-text color=\"secondary\">\n      <p *ngIf=\"defaultinvoice.id != ''\"  >  {{defaultinvoice.templatenumber}}  </p>\n      <p *ngIf=\"defaultinvoice.id == ''\"  >  Default template not set   </p>\n      </ion-text>\n    </ion-label>\n </ion-item >\n\n  <ion-list>\n  \n    <ion-card class=\"offering-card\">\n            <ion-card-header text-center>\n         <ion-card-title>  {{product1.scope}} </ion-card-title>\n<ion-icon name=\"heart\" slot=\"end\" color=\"danger\" size=\"small\" class=\"icon-heart\" (click)=\"likecompany()\"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n\n        <ion-item   text-center>\n <ion-badge slot=\"start\">1.1</ion-badge>\n\n          <ion-label  position=\"stacked\"> Email client to receive payment </ion-label>\n      <ion-input placeholder=\"Enter email-id\" [(ngModel)]=\"webemail\" name=\"email\" type=\"email\" required>\n        </ion-input>\n\n\n        </ion-item  >\n        <ion-item   text-center>\n <ion-badge slot=\"start\">1.2</ion-badge>\n <ion-label position=\"stacked\"> Enter message to client below </ion-label>\n\n       <ion-textarea rows=\"4\" class=\"ion-text-wrap\" type=\"text\" [(ngModel)]=\"webemail\"\n                          placeholder=\"Enter message to client \"></ion-textarea>\n\n\n        </ion-item  >\n        <ion-item  text-center>\n <ion-badge slot=\"start\">1.3</ion-badge>\n        <ion-grid>\n        <ion-row>\n        <ion-col>\n        <ion-item  text-center>\n     <ion-label padding-bottom position=\"stacked\"> Enter invoice number below </ion-label>\n         <ion-input  [(ngModel)]=\"webemail\" placeholder=\"Enter invoice number \"></ion-input>\n\n        </ion-item  >\n        </ion-col>\n        <ion-col>\n        <ion-item  text-center>\n     <ion-label padding-bottom position=\"stacked\"> Enter amount in USD below </ion-label>\n         <ion-input  [(ngModel)]=\"webemail\" placeholder=\"Enter amount \"></ion-input>\n        </ion-item  >\n        </ion-col>\n        </ion-row>\n        </ion-grid>\n        </ion-item>\n        <ion-item text-center>\n <ion-badge slot=\"start\">1.4</ion-badge>\n        <ion-label>\n        <ion-button  clear size=\"small\" color=\"primary\" (click)=\"websendemail()\" > Submit  </ion-button>\n        </ion-label>\n        </ion-item>\n     <ion-item text-center>\n    The client will receive a DASH address to make payment\n<ion-icon name=\"heart\" slot=\"end\" color=\"danger\" size=\"small\" class=\"icon-heart\" (click)=\"likecompany()\"></ion-icon>\n  </ion-item>\n            </ion-card-content>\n   </ion-card>\n\n\n        <ion-item   text-center>\n        </ion-item  >\n  \n    <ion-card class=\"offering-card\">\n            <ion-card-header text-center>\n         <ion-card-title>  How it works  </ion-card-title>\n<ion-icon name=\"heart\" slot=\"end\" color=\"danger\" size=\"small\" class=\"icon-heart\" (click)=\"likecompany()\"></ion-icon>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n        <ion-item   >\n      1. Set the DASH wallet address to receive payment\n        </ion-item  >\n\n        <ion-item   >\n      2. Send a unique DASH address to client to make payment\n        </ion-item  >\n        <ion-item   >\n      3. Client pays \n        </ion-item  >\n        <ion-item   >\n      4. The payment will be credited to your DASH wallet \n        </ion-item  >\n        <ion-item   >\n      5. Convert DASH to USD in the exchange of your choice\n        </ion-item  >\n\n\n        <ion-item  text-center>\n\n          <ion-label  class=\"blueborleft\" text-wrap>\n          <h4>\n          You can send DASH accept address by email or whatsapp.\n          </h4>\n          </ion-label>\n        </ion-item>\n     <ion-item text-center>\n    The DASH accept address uses DASH Blockchain \n<ion-icon name=\"heart\" slot=\"end\" color=\"danger\" size=\"small\" class=\"icon-heart\" (click)=\"likecompany()\"></ion-icon>\n  </ion-item>\n            </ion-card-content>\n   </ion-card>\n\n        <ion-item  >\n        </ion-item  >\n\n\n    <ion-card class=\"offering-card\">\n            <ion-card-header>\n         <ion-card-title>  Earn by partnering </ion-card-title>\n<ion-icon name=\"heart\" slot=\"end\" color=\"danger\" size=\"small\" class=\"icon-heart\" (click)=\"likecompany()\"></ion-icon>\n\n         <ion-card-subtitle>  Certifying, validating documents on Blockchain </ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n\n\n        <ion-item  >\n\n          <ion-label   class=\"blueborleft\" text-wrap>\n                       <h4> <span slot=\"start\"> Partnering opportunities </span>\n         <ion-icon align=\"right\" name=\"heart-empty\"  color=\"clear\" size=\"small\" class=\"icon-heart\" (click)=\"likeproduct()\"></ion-icon> </h4>\n            <p>\n          Partner for Escrow, certifying documents on blockchain\n            </p>\n          <h4>\n          Contact: partner@thepaybox.com \n          </h4>\n          </ion-label>\n        </ion-item>\n     <ion-item>\n    REST-API integration   \n<ion-icon name=\"heart\" slot=\"end\" color=\"danger\" size=\"small\" class=\"icon-heart\" (click)=\"likecompany()\"></ion-icon>\n  </ion-item>\n            </ion-card-content>\n   </ion-card>\n\n\n\n\n\n\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/negotiate/dashaccept/mydeals-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/negotiate/dashaccept/mydeals-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: MydealsListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydealsListModule", function() { return MydealsListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mydeals_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mydeals-list */ "./src/app/pages/negotiate/dashaccept/mydeals-list.ts");
/* harmony import */ var _mydeals_list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mydeals-list-routing.module */ "./src/app/pages/negotiate/dashaccept/mydeals-list-routing.module.ts");







var MydealsListModule = /** @class */ (function () {
    function MydealsListModule() {
    }
    MydealsListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _mydeals_list_routing_module__WEBPACK_IMPORTED_MODULE_6__["MydealsListPageRoutingModule"]
            ],
            declarations: [_mydeals_list__WEBPACK_IMPORTED_MODULE_5__["MydealsListPage"]],
        })
    ], MydealsListModule);
    return MydealsListModule;
}());



/***/ }),

/***/ "./src/app/pages/negotiate/dashaccept/mydeals-list.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/negotiate/dashaccept/mydeals-list.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll {\n  background: #ededed; }\n\n.offering-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.offering-card ion-card-header {\n  padding: 4px 16px; }\n\n.offering-card ion-card-header .item {\n  padding: 4px 16px; }\n\n.offering-card ion-card-content {\n  flex: 1 1 auto;\n  padding: 0; }\n\n.blueborleft {\n  border-left: 2px solid blue;\n  padding-left: 10px; }\n\n.redborleft {\n  border-left: 2px solid red;\n  padding-left: 10px; }\n\ndiv {\n  font-size: 0.875em; }\n\nion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvbmVnb3RpYXRlL2Rhc2hhY2NlcHQvbXlkZWFscy1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGVBQWM7RUFFZCxXQUFVLEVBQ1g7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksMkJBQTBCO0VBQzFCLG1CQUFrQixFQUNyQjs7QUFHRDtFQUFNLG1CQUFrQixFQUFJOztBQUc1QjtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEI7O0FBR0Q7RUFDSSxvQ0FBbUM7RUFDbkMsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmVnb3RpYXRlL2Rhc2hhY2NlcHQvbXlkZWFscy1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cblxuLm9mZmVyaW5nLWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5vZmZlcmluZy1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xufVxuXG4ub2ZmZXJpbmctY2FyZCBpb24tY2FyZC1oZWFkZXIgLml0ZW0ge1xuICBwYWRkaW5nOiA0cHggMTZweDtcbn1cblxuLm9mZmVyaW5nLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuXG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ibHVlYm9ybGVmdCAge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmx1ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5yZWRib3JsZWZ0ICB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZWQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5cbmRpdiB7IGZvbnQtc2l6ZTogMC44NzVlbTsgfSAvLyAxNHB4IFxuXG5cbmlvbi10ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuXG5pb24taW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/negotiate/dashaccept/mydeals-list.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/negotiate/dashaccept/mydeals-list.ts ***!
  \************************************************************/
/*! exports provided: MydealsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydealsListPage", function() { return MydealsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4wallet_blue011_web_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tab4wallet/blue011.web.service */ "./src/app/pages/tab4wallet/blue011.web.service.ts");
/* harmony import */ var _mydeals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mydeals.service */ "./src/app/pages/negotiate/dashaccept/mydeals.service.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.service */ "./src/app/pages/negotiate/dashaccept/search.service.ts");
/* harmony import */ var _dashaccept__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashaccept */ "./src/app/pages/negotiate/dashaccept/dashaccept.ts");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");
/* harmony import */ var _tab4wallet_invoice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../tab4wallet/invoice.service */ "./src/app/pages/tab4wallet/invoice.service.ts");















var MydealsListPage = /** @class */ (function () {
    function MydealsListPage(actionSheetCtrl, blue011web, alertController, fireauth, inAppBrowser, storage, mysearchservice, invoiceservice, searchservice, termsuserservice, 
    //    private productcreateservice: ProductCreateService,
    route, router) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.blue011web = blue011web;
        this.alertController = alertController;
        this.fireauth = fireauth;
        this.inAppBrowser = inAppBrowser;
        this.storage = storage;
        this.mysearchservice = mysearchservice;
        this.invoiceservice = invoiceservice;
        this.searchservice = searchservice;
        this.termsuserservice = termsuserservice;
        this.route = route;
        this.router = router;
        this.products = [];
        this.products1 = [];
        this.useraccount = {
            termsagreed: 'no',
            testaddress: '',
            liveaddress: '',
            safetyconfirmation: 'false'
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
            id: '',
            templatenumber: ''
        };
        this.network = _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].network;
        this.downloadlink = _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].downloadlink;
        this.playstoredownloadlink = _config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].playstoredownloadlink;
        this.anonymoususer = [];
        this.products = _dashaccept__WEBPACK_IMPORTED_MODULE_9__["Dashscreen"].products;
        this.product1 = this.products[0];
        this.getdefaultsetting();
        //   this.products1 = Dashscreen.products;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'anonymoususer').then(function (data) {
            if (data) {
                _this.anonymoususer = data;
            }
            else {
                _this.anonymoususer = [];
            }
        });
        this.getdefinv();
    }
    MydealsListPage.prototype.getdefinv = function () {
        var _this = this;
        this.invoiceservice.getdefaultinvtemplate().then(function (xx) {
            if (xx) {
                _this.defaultinvoice = JSON.parse(xx);
            }
        });
    };
    MydealsListPage.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.termsuserservice.getloggedinuser()];
                    case 1:
                        _a.loggedinuser = _b.sent();
                        this.getdefinv();
                        return [2 /*return*/];
                }
            });
        });
    };
    MydealsListPage.prototype.loaduser = function () {
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
    MydealsListPage.prototype.getdefaultsetting = function () {
        var _this = this;
        var data = {};
        this.invoiceservice.webgetdefaultinvtemplate(data).then(function (xx) {
            _this.defaultinvoice = xx;
            _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'defaulttemplate', JSON.stringify(xx));
        }, function (err) {
            _this.presentAlert("", "", "Error default setting.");
        });
    };
    MydealsListPage.prototype.ionViewWillEnter = function () {
        this.loaduser();
        this.getaccount();
    };
    MydealsListPage.prototype.loadaccount = function () {
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
    MydealsListPage.prototype.getaccount = function () {
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
                            googleid: this.loggedinuser.uid,
                        };
                        this.termsuserservice.getaccount(data).then(function (data1) {
                            if (data1) {
                                _this.useraccount = data1;
                            }
                        }).catch(function (err1) {
                        });
                        ;
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    MydealsListPage.prototype.ngOnInit = function () {
        this.loaduser();
        this.getaccount();
    };
    MydealsListPage.prototype.likeproduct = function () {
    };
    MydealsListPage.prototype.likecompany = function () {
    };
    MydealsListPage.prototype.updateProducts = function () {
        /*
            var tmp = this.productqueryText.trim().split(" ");
            var toSearch =  tmp[0]; // "/"+tmp.join('|') + "/";
        //    var patt = new RegExp(tmp1) ;
        //    alert(tmp1);
        
            this.products.length = 0;
            for(var i=0; i< this.products1.length; i++ ) {
        //      if(Dashscreen.products[i].scope.search(new RegExp(toSearch, "i"))) {
               this.products.push(this.products1[i]);
        //      }
            }
        
        
        varv  string = "Hi welcome to stack overflow"
        var toSearch = "stack"
        
        //case insensitive search
        
        var result = string.search(new RegExp(toSearch, "i")) > 0 ? 'Matched' : 'notMatched'
        
        */
    };
    MydealsListPage.prototype.logout = function () {
        var _this = this;
        this.logoutuser();
        this.fireauth.auth.signOut().then(function () {
            _this.router.navigate(['/tabs/login']);
        });
    };
    MydealsListPage.prototype.login = function () {
        this.router.navigate(['/tabs/login']);
    };
    MydealsListPage.prototype.displayemailmsg = function () {
        this.presentAlert("Email sent", "Email:" + this.webemail, "Check email for instructions");
    };
    MydealsListPage.prototype.websendemail = function () {
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
                            network: this.network,
                            paymentdata: 'null',
                            email: this.loggedinuser ? this.loggedinuser.email : null,
                            googleid: this.loggedinuser ? this.loggedinuser.uid : null,
                            kycid: this.useraccount ? this.useraccount.kycid : null,
                            webemail: this.webemail
                        };
                        if (data.email == null) {
                            this.anonymoususer.push(this.webemail);
                            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'anonymoususer', this.anonymoususer);
                            if (this.anonymoususer.length > 1) {
                                this.presentAlert("", "", "Login to proceed ");
                                this.router.navigate(['/nego/login']);
                            }
                        }
                        this.blue011web.websendemail(data).then(function (controldata) {
                            _this.displayemailmsg();
                        }).catch(function (err1) {
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
    MydealsListPage.prototype.presentAlert = function (title, subheader, message) {
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
    MydealsListPage.prototype.logoutuser = function () {
        var _this = this;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'loggedinuser', null).then(function (x) {
            _this.loggedinuser = null;
        });
        ;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].storageuniq + 'useraccount', null).then(function (xx) {
            _this.termsuserservice.reflectuseraccount();
        });
        ;
    };
    MydealsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-mydeals-list',
            template: __webpack_require__(/*! ./mydeals-list.html */ "./src/app/pages/negotiate/dashaccept/mydeals-list.html"),
            styles: [__webpack_require__(/*! ./mydeals-list.scss */ "./src/app/pages/negotiate/dashaccept/mydeals-list.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
            _tab4wallet_blue011_web_service__WEBPACK_IMPORTED_MODULE_6__["Blue011WebService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuth"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _mydeals_service__WEBPACK_IMPORTED_MODULE_7__["MysearchService"],
            _tab4wallet_invoice_service__WEBPACK_IMPORTED_MODULE_13__["InvoiceService"],
            _search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_12__["TermsuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MydealsListPage);
    return MydealsListPage;
}());



/***/ }),

/***/ "./src/app/pages/negotiate/dashaccept/mydeals.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/negotiate/dashaccept/mydeals.service.ts ***!
  \***************************************************************/
/*! exports provided: MysearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysearchService", function() { return MysearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/environment */ "./src/app/pages/config/environment.ts");





var MysearchService = /** @class */ (function () {
    function MysearchService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiKey = '813705e2f4cafa9acd1b2a0c29855';
        this.apiSecret = '37daac26f3726a3a759fc30dd111d1abd508418753d5a5c6ed0a2b1';
        this.localname = "search";
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    MysearchService.prototype.getnewproductwithofferings = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/getnewproductwithofferings', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    MysearchService.prototype.getmydeals = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/getmydeals', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    MysearchService.prototype.getmyoffer = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/getmyoffer', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    MysearchService.prototype.offerupdate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/updateoffering', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    MysearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], MysearchService);
    return MysearchService;
}());



/***/ }),

/***/ "./src/app/pages/negotiate/dashaccept/search.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/negotiate/dashaccept/search.service.ts ***!
  \**************************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/environment */ "./src/app/pages/config/environment.ts");





var SearchService = /** @class */ (function () {
    function SearchService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiKey = '813705e2f4cafa9acd1b2a0c29855';
        this.apiSecret = '37daac26f3726a3a759fc30dd111d1abd508418753d5a5c6ed0a2b1';
        this.localname = "offercreate";
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    SearchService.prototype.searchproducts = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/searchproducts', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    SearchService.prototype.searchcompanies = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/searchcompanies', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    SearchService.prototype.offerupdate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/updateoffering', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], SearchService);
    return SearchService;
}());



/***/ })

}]);
//# sourceMappingURL=dashaccept-mydeals-list-module.js.map