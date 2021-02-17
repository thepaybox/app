(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-negotiate-negotabs-page-tabs-page-module"],{

/***/ "./src/app/pages/negotiate/negotabs-page/tabs-page-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/negotiate/negotabs-page/tabs-page-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NegoTabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegoTabsPageRoutingModule", function() { return NegoTabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/negotiate/negotabs-page/tabs-page.ts");




var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'about',
                loadChildren: '../../about/about.module#AboutModule'
            },
            {
                path: 'support',
                loadChildren: '../../support/support.module#SupportModule'
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../../tab1receive/tab1.module#Tab1PageModule'
                    }
                ]
            },
            {
                path: 'tab3/:contract',
                loadChildren: '../../tab1receive/tab1.module#Tab1PageModule'
            },
            {
                path: 'tab3/:contract/:pin',
                loadChildren: '../../tab1receive/tab1.module#Tab1PageModule'
            },
            {
                path: 'signup',
                loadChildren: '../../signup/signup.module#SignUpModule'
            },
            {
                path: 'verifyemail',
                loadChildren: '../../verifyemail/verifyemail.module#VerifyemailPageModule'
            },
            {
                path: 'login',
                loadChildren: '../../login/login.module#LoginModule'
            },
            {
                path: 'dashaccept',
                loadChildren: '../dashaccept/mydeals-list.module#MydealsListModule'
            },
        ]
    }
];
var NegoTabsPageRoutingModule = /** @class */ (function () {
    function NegoTabsPageRoutingModule() {
    }
    NegoTabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NegoTabsPageRoutingModule);
    return NegoTabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/negotiate/negotabs-page/tabs-page.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/negotiate/negotabs-page/tabs-page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n\n\n\n\n\n    <!-- ion-tab-button tab=\"deposit\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>Products</ion-label>\n    </ion-tab-button -->\n\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/negotiate/negotabs-page/tabs-page.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/negotiate/negotabs-page/tabs-page.module.ts ***!
  \*******************************************************************/
/*! exports provided: NegoTabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegoTabsModule", function() { return NegoTabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pages/pipes/pipes.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/negotiate/negotabs-page/tabs-page.ts");
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs-page-routing.module */ "./src/app/pages/negotiate/negotabs-page/tabs-page-routing.module.ts");







//import { Tab1receivePage } from '../../tab1receive/tab1.page';

//import { CompaniesModule } from '../../companies/companies.module';
//import { OfferingDetailModule } from '../../offering-detail/offering-detail.module';
//import { ProductDetailModule } from '../../product-detail/product-detail.module';
//import { MyproductListModule } from '../product-list/myproduct-list.module';
var NegoTabsModule = /** @class */ (function () {
    function NegoTabsModule() {
    }
    NegoTabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                //    CompaniesModule,
                //    OfferingDetailModule,
                //    ProductDetailModule,
                //    MyproductListModule,
                _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_7__["NegoTabsPageRoutingModule"]
            ],
            declarations: [
                _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], NegoTabsModule);
    return NegoTabsModule;
}());



/***/ }),

/***/ "./src/app/pages/negotiate/negotabs-page/tabs-page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/negotiate/negotabs-page/tabs-page.ts ***!
  \************************************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./tabs-page.html */ "./src/app/pages/negotiate/negotabs-page/tabs-page.html")
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/pages/pipes/fromsatoshi.ts":
/*!********************************************!*\
  !*** ./src/app/pages/pipes/fromsatoshi.ts ***!
  \********************************************/
/*! exports provided: FromSatoshiPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromSatoshiPipe", function() { return FromSatoshiPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");



var FromSatoshiPipe = /** @class */ (function () {
    function FromSatoshiPipe(changellyCalls) {
        this.changellyCalls = changellyCalls;
    }
    FromSatoshiPipe.prototype.transform = function (item, args) {
        //console.log(comp.toLowerCase());
        return this.changellyCalls.fromSatoshi(item);
    };
    FromSatoshiPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'FromSatoshi'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_changelly__WEBPACK_IMPORTED_MODULE_2__["ChangellyCalls"]])
    ], FromSatoshiPipe);
    return FromSatoshiPipe;
}());



/***/ }),

/***/ "./src/app/pages/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: pipes, PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipes", function() { return pipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fromsatoshi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromsatoshi */ "./src/app/pages/pipes/fromsatoshi.ts");
/* harmony import */ var _tofiat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tofiat */ "./src/app/pages/pipes/tofiat.ts");
/* harmony import */ var _redact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redact */ "./src/app/pages/pipes/redact.ts");
/* harmony import */ var _tofiatbtc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tofiatbtc */ "./src/app/pages/pipes/tofiatbtc.ts");
/* harmony import */ var _tofiatdash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tofiatdash */ "./src/app/pages/pipes/tofiatdash.ts");







var pipes = [
    _tofiat__WEBPACK_IMPORTED_MODULE_3__["ToFiatPipe"],
    _redact__WEBPACK_IMPORTED_MODULE_4__["RedactPipe"],
    _tofiatbtc__WEBPACK_IMPORTED_MODULE_5__["ToFiatBtcPipe"],
    _tofiatdash__WEBPACK_IMPORTED_MODULE_6__["ToFiatDashPipe"],
    _fromsatoshi__WEBPACK_IMPORTED_MODULE_2__["FromSatoshiPipe"]
];
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [pipes],
            exports: [pipes]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pages/pipes/redact.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pipes/redact.ts ***!
  \***************************************/
/*! exports provided: RedactPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactPipe", function() { return RedactPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RedactPipe = /** @class */ (function () {
    function RedactPipe() {
    }
    RedactPipe.prototype.transform = function (item, args) {
        if (item.length > 8) {
            var str1 = item.substring(0, 4);
            var str2 = item.substring(8);
            var newstr = str1 + "****" + str2;
            return newstr;
        }
        else if (item.length > 4) {
            var str1 = item.substring(0, 4);
            var newstr = str1 + "****";
            return str1;
        }
        else
            return item;
    };
    RedactPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'Redact'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RedactPipe);
    return RedactPipe;
}());



/***/ }),

/***/ "./src/app/pages/pipes/tofiat.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pipes/tofiat.ts ***!
  \***************************************/
/*! exports provided: ToFiatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToFiatPipe", function() { return ToFiatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");



var ToFiatPipe = /** @class */ (function () {
    function ToFiatPipe(changellyCalls) {
        this.changellyCalls = changellyCalls;
    }
    ToFiatPipe.prototype.transform = function (item, args) {
        return this.changellyCalls.toFiatBtc(item);
    };
    ToFiatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ToFiat'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_changelly__WEBPACK_IMPORTED_MODULE_2__["ChangellyCalls"]])
    ], ToFiatPipe);
    return ToFiatPipe;
}());



/***/ }),

/***/ "./src/app/pages/pipes/tofiatbtc.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pipes/tofiatbtc.ts ***!
  \******************************************/
/*! exports provided: ToFiatBtcPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToFiatBtcPipe", function() { return ToFiatBtcPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");



var ToFiatBtcPipe = /** @class */ (function () {
    function ToFiatBtcPipe(changellyCalls) {
        this.changellyCalls = changellyCalls;
    }
    ToFiatBtcPipe.prototype.transform = function (item, args) {
        return this.changellyCalls.toFiatBtc(item);
    };
    ToFiatBtcPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ToFiatBtc'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_changelly__WEBPACK_IMPORTED_MODULE_2__["ChangellyCalls"]])
    ], ToFiatBtcPipe);
    return ToFiatBtcPipe;
}());



/***/ }),

/***/ "./src/app/pages/pipes/tofiatdash.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/pipes/tofiatdash.ts ***!
  \*******************************************/
/*! exports provided: ToFiatDashPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToFiatDashPipe", function() { return ToFiatDashPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");



var ToFiatDashPipe = /** @class */ (function () {
    function ToFiatDashPipe(changellyCalls) {
        this.changellyCalls = changellyCalls;
    }
    ToFiatDashPipe.prototype.transform = function (item, args) {
        return this.changellyCalls.toFiatDash(item);
    };
    ToFiatDashPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ToFiatDash'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_changelly__WEBPACK_IMPORTED_MODULE_2__["ChangellyCalls"]])
    ], ToFiatDashPipe);
    return ToFiatDashPipe;
}());



/***/ })

}]);
//# sourceMappingURL=pages-negotiate-negotabs-page-tabs-page-module.js.map