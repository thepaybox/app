(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paypalweb-paypalweb-module"],{

/***/ "./src/app/pages/paypalweb/paypalweb.html":
/*!************************************************!*\
  !*** ./src/app/pages/paypalweb/paypalweb.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-menu-toggle>\n<ion-button>\n\t\t\t<ion-icon name=\"menu\"></ion-icon>\n\t\t</ion-button>\n</ion-menu-toggle>\n\t\t<ion-title>PayPal</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<!-- ion-card *ngIf=\"userinfoready\">\n\t<ion-card-header>\n         Plan: {{userinfo.myuserinfo.activeplanname}}\n\t</ion-card-header>\n\t<ion-card-content>\n         Plan description: {{userinfo.myuserinfo.activeplandescription}}\n         <h3>Starts from: {{userinfo.myuserinfo.planstartdate  |date: \"yyyy/MM/dd\"}} </h3>\n         <h3>Remaining days: {{userinfo.myuserinfo.plandays}}\n</h3>\n<h3>\n         Remaining transactions: {{userinfo.myuserinfo.plantransactions}}\n</h3>\n\t</ion-card-content>\n</ion-card>\n<ion-list *ngFor=\"let item of itemplans\">\n<ion-card>\n\t<ion-card-header>\n         {{item.plandescription}}\n\t</ion-card-header>\n\t<ion-card-content>\n         {{item.description}}\n        <ion-label class=\"ion-text-wrap\">\n                 <h3> {{item.price}} {{item.unit}} </h3>\n            </ion-label>\n        <ion-item>\n        <ion-button  item-left small class=\"colorbutton\" (click)=\"select(item)\">Select</ion-button>\n   <ion-checkbox checked=\"true\" *ngIf=\"itemselected.plandescription == item.plandescription\"  > </ion-checkbox>\n            <ion-label item-right *ngIf=\"itemselected.plandescription == item.plandescription\">  Pay below\n            </ion-label>\n        </ion-item>\n\n\t</ion-card-content>\n</ion-card>\n</ion-list -->\n\n<ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/paypalweb/paypalweb.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/paypalweb/paypalweb.module.ts ***!
  \*****************************************************/
/*! exports provided: PayPalWebModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalWebModule", function() { return PayPalWebModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var _paypalweb_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paypalweb.page */ "./src/app/pages/paypalweb/paypalweb.page.ts");


//import { PayPal } from '@ionic-native/paypal';

//import { IonicPageModule } from '@ionic/angular';


var PayPalWebModule = /** @class */ (function () {
    function PayPalWebModule() {
    }
    PayPalWebModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _paypalweb_page__WEBPACK_IMPORTED_MODULE_4__["PayPalWebPage"]
            ],
            imports: [
                ngx_paypal__WEBPACK_IMPORTED_MODULE_3__["NgxPayPalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _paypalweb_page__WEBPACK_IMPORTED_MODULE_4__["PayPalWebPage"]
                    }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], PayPalWebModule);
    return PayPalWebModule;
}());



/***/ }),

/***/ "./src/app/pages/paypalweb/paypalweb.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/paypalweb/paypalweb.page.ts ***!
  \***************************************************/
/*! exports provided: PayPalWebPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalWebPage", function() { return PayPalWebPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");







var paypalnetwork = _config_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paypalnetwork;
var PayPalWebPage = /** @class */ (function () {
    function PayPalWebPage(
    //public alertCtrl: Popservice,
    storage, events, logger) {
        this.storage = storage;
        this.events = events;
        this.logger = logger;
        this.userinfoready = false;
        this.itemplans = [
            {
                plan: "subscribed",
                plandescription: "Test 100 plan",
                description: "Provides 10 message processing at 50% discount on fees. This discount applies to sending and receiving messages for 10 days. Not applicable to insta message sent",
                price: 100,
                days: 10,
                transactions: 10,
                unit: "USD",
            },
            {
                plan: "subscribed",
                plandescription: "Test 200 plan",
                description: "Provides 20 message processing at 50% discount on fees. This discount applies to sending and receiving messages for 20 days. Not applicable to insta messages sent ",
                price: 200,
                days: 20,
                transactions: 20,
                unit: "USD",
            },
            {
                plan: "subscribed",
                plandescription: "Test 500 plan",
                description: "Provides 50 message processing at 50% discount on fees. This discount applies to sending and receiving messages for 50 days. Not applicable to insta messages sent ",
                price: 500,
                days: 50,
                transactions: 50,
                unit: "USD",
            }
        ];
        this.onEntryWork();
        /*
              if(this.userinfo && this.userinfo.myuserinfo) {
                if(this.userinfo.myuserinfo.activeplanname == 'expired'){
        
                }
              }
        */
        /*
         planstartdate: string;
               activeplanfixesfees: string;
               activeplanvariabefees: string;
               planenddate: string;
        
        */
    }
    PayPalWebPage.prototype.onEntryWork = function () {
        //    this.userinfo.storeRestore();
    };
    PayPalWebPage.prototype.ionViewDidEnter = function () {
        this.onEntryWork();
    };
    PayPalWebPage.prototype.activateplan = function () {
        var plan = {
            activeplanname: this.itemselected.plan,
            activeplandescription: this.itemselected.plandescription,
            planstartdate: Date.now().toString(),
            activeplanfixedfees: 0.00001,
            activeplanvariablefees: 4,
            plandays: this.itemselected.plandays,
            plantransactions: this.itemselected.plantransactions,
        };
        //	this.userinfo.updatePlanTaken(plan);
    };
    PayPalWebPage.prototype.select = function (item) {
        this.itemselected = item;
        var a = {
            amount: {
                total: this.itemselected.price,
                currency: this.itemselected.unit,
            },
            description: this.itemselected.plan,
        };
        this.myconfig.transactions.length = 0;
        this.myconfig.transactions.push(a);
        this.initConfig(this.myconfig);
        // this.popservice.presentAlert("Make payment below");
    };
    PayPalWebPage.prototype.initselect = function (item) {
        this.itemselected = item;
        var a = {
            amount: {
                total: this.itemselected.price,
                currency: this.itemselected.unit,
            },
            description: this.itemselected.plan,
        };
        this.myconfig.transactions.length = 0;
        this.myconfig.transactions.push(a);
        this.initConfig(this.myconfig);
    };
    PayPalWebPage.prototype.ngOnInit = function () {
        var _this = this;
        if (paypalnetwork == "sandbox") {
            this.keyobj = {
                sandbox: _config_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].payPalEnvironmentSandbox
            };
        }
        else {
            this.keyobj = {
                production: _config_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].payPalEnvironmentProduction
            };
        }
        this.myconfig = {
            commit: true,
            client: this.keyobj,
            /*{
                      sandbox:
             'AXNnbd5G4mTU34GPNNanfShMnNFHnZaCzPeA0iN3FJbkEaX7NTwLjpIK7dmnuLlkesUBGTdPqLIpSSZm'
            //            production:
            //              'AVjh_x-F8Gh-pNDiqytQ-srUd2evg26mtCqU3AbnVY_pHJvsgC9V2gRgXj_2jt6cDmO2SsHdekfoBSQ3'
                      },
            */
            button: {
                label: 'paypal',
                layout: 'vertical'
            },
            experience: {
                noShipping: true,
                brandName: 'PuppiPay'
            },
            funding: {
                allowed: [
                    ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalFunding"].Card,
                    ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalFunding"].Credit,
                    ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalFunding"].Elv,
                ]
            },
            onPaymentComplete: function (data, actions) {
                _this.logger.log("OnPaymentComplete:" + JSON.stringify(data));
                _this.logger.log("OnPaymentComplete:" + JSON.stringify(actions));
                _this.activateplan();
                _this.logger.log('OnPaymentComplete');
            },
            transactions: [
                {
                    amount: {
                        total: 30,
                        currency: 'USD',
                    },
                    description: 'testing',
                }
            ],
            note_to_payer: 'Contact us if you have troubles processing payment'
        };
        this.initselect(this.itemplans[0]);
        //    this.activateplan() ;
    };
    PayPalWebPage.prototype.onValueChange = function () {
    };
    PayPalWebPage.prototype.initConfig = function (config) {
        this.logger.log(config);
        if (paypalnetwork == "sandbox") {
            this.payPalConfig = new ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalConfig"](ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalIntegrationType"].ClientSideREST, 
            //        PayPalEnvironment.Production,
            ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalEnvironment"].Sandbox, config);
        }
        else {
            this.payPalConfig = new ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalConfig"](ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalIntegrationType"].ClientSideREST, ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalEnvironment"].Production, 
            //        PayPalEnvironment.Sandbox,
            config);
        }
    };
    PayPalWebPage.prototype.onPaymentComplete1 = function (data, actions) {
        // go to next screen
        // update plan 
        this.activateplan();
        this.logger.log('OnPaymentComplete');
    };
    PayPalWebPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'paypalweb-page',
            template: __webpack_require__(/*! ./paypalweb.html */ "./src/app/pages/paypalweb/paypalweb.html")
        })
        // 'AXNnbd5G4mTU34GPNNanfShMnNFHnZaCzPeA0iN3FJbkEaX7NTwLjpIK7dmnuLlkesUBGTdPqLIpSSZm'
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]])
    ], PayPalWebPage);
    return PayPalWebPage;
}());

/*
          onPaymentComplete: (data, actions) => {
            this.logger.log('OnPaymentComplete');
          },
          onCancel: (data, actions) => {
            this.logger.log('OnCancel');
          },
          onError: err => {
            this.logger.log('OnError');
          },
          onClick: () => {
            this.logger.log('onClick');
          },
          validate: (actions) => {
            this.logger.log(actions);
          }, */


/***/ })

}]);
//# sourceMappingURL=pages-paypalweb-paypalweb-module.js.map