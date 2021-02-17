(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"],{

/***/ "./src/app/pages/forgot/forgot.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.module.ts ***!
  \***********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/pages/forgot/forgot.page.ts");

/**
* Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/






var routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
    }
];
var ForgotPageModule = /** @class */ (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar >\r\n\r\n   <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n   <ion-title>\r\n      Forgot password   \r\n    </ion-title>\r\n\r\n\r\n  </ion-toolbar>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n   <ion-card-header>\r\n     <ion-card-subtitle>Forgot password</ion-card-subtitle>\r\n    <ion-card-title>Enter email id and click recover</ion-card-title>\r\n\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n\r\n\r\n     <ion-item >\r\n    <ion-label padding-bottom position=\"stacked\" > Email </ion-label>\r\n      <ion-input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" > </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n            <ion-button  (click)=\"recover()\" > Recover password </ion-button>\r\n  </ion-item>\r\n  <ion-item>\r\n   <p> \r\n  You will receive email with link to reset password\r\n   </p>\r\n  </ion-item>\r\n  <ion-item>\r\n            <ion-text class=\"error\" text-center>{{error}}</ion-text>\r\n<ion-text text-center class=\"block\">Don't have an account yet ?\r\n<ion-button class=\"bold\" routerLink=\"/signup\">Signup here</ion-button></ion-text>\r\n\r\n  </ion-item >\r\n  <ion-item>\r\n<ion-text text-center class=\"block\">Already have account \r\n<ion-button routerLink=\"/login\">Login here </ion-button>\r\n</ion-text>\r\n  </ion-item >\r\n\r\n  </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\" class=\"ion-text-center\">\r\n    <ion-title>\r\n<sup> Made in </sup>  <img alt=\"91springboard\" height=\"40\"    src=\"assets/imgs/91springlogo.png\"  float=\"left\" />\r\n   </ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBbUM7RUFDbkMsb0JBQW1CLEVBQ3RCOztBQUdEO0VBQ0ksb0NBQW1DO0VBQ25DLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.ts ***!
  \*********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");

/***
Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/






var ForgotPage = /** @class */ (function () {
    function ForgotPage(fireauth, router, toastController, loadingController, logger, alertController) {
        this.fireauth = fireauth;
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.logger = logger;
        this.alertController = alertController;
        this.email = '';
        this.password = '';
        this.error = '';
        this.username = '';
    }
    ForgotPage.prototype.openLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please Wait ...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPage.prototype.closeLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.dismiss()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ForgotPage.prototype.recover = function () {
        var _this = this;
        this.fireauth.auth.sendPasswordResetEmail(this.email)
            .then(function (data) {
            _this.logger.info(data);
            _this.presentToast('Password reset email sent', false, 'bottom', 1000);
            _this.router.navigateByUrl('/login');
        })
            .catch(function (err) {
            _this.logger.info(" failed " + err);
            _this.error = err.message;
        });
    };
    ForgotPage.prototype.presentToast = function (message, show_button, position, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            showCloseButton: show_button,
                            position: position,
                            duration: duration
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.page.html */ "./src/app/pages/forgot/forgot.page.html"),
            styles: [__webpack_require__(/*! ./forgot.page.scss */ "./src/app/pages/forgot/forgot.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ForgotPage);
    return ForgotPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-forgot-forgot-module.js.map