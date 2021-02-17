(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verifyemail-verifyemail-module"],{

/***/ "./src/app/pages/verifyemail/verifyemail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/verifyemail/verifyemail.module.ts ***!
  \*********************************************************/
/*! exports provided: VerifyemailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyemailPageModule", function() { return VerifyemailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verifyemail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verifyemail.page */ "./src/app/pages/verifyemail/verifyemail.page.ts");

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
        component: _verifyemail_page__WEBPACK_IMPORTED_MODULE_6__["VerifyemailPage"]
    }
];
var VerifyemailPageModule = /** @class */ (function () {
    function VerifyemailPageModule() {
    }
    VerifyemailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verifyemail_page__WEBPACK_IMPORTED_MODULE_6__["VerifyemailPage"]]
        })
    ], VerifyemailPageModule);
    return VerifyemailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/verifyemail/verifyemail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/verifyemail/verifyemail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar >\r\n\r\n   <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n   <ion-title>\r\n      Verify email      \r\n    </ion-title>\r\n\r\n\r\n  </ion-toolbar>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n   <ion-card-header>\r\n     <ion-card-subtitle>Verify email</ion-card-subtitle>\r\n    <ion-card-title>Enter email-id provided </ion-card-title>\r\n\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n\r\n\r\n     <ion-item >\r\n    <ion-label padding-bottom position=\"stacked\" > Email </ion-label>\r\n      <ion-input readonly type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" > </ion-input>\r\n  </ion-item>\r\n  <ion-item> <p> You would have received email with link to confirm </p> </ion-item>\r\n\r\n  <ion-item>\r\n            <ion-button  (click)=\"confirmverified()\" > Confirm verifed </ion-button>\r\n  </ion-item>\r\n  <ion-item> <ion-text class=\"error\" color=\"danger\"  text-center>{{error}}</ion-text> </ion-item>\r\n  <ion-item>\r\n<ion-text text-center class=\"block\">Request verification email\r\n<ion-button (click)=\"sendEmailVerification()\" >Click here </ion-button>\r\n</ion-text>\r\n  </ion-item>\r\n  <ion-item>\r\n<ion-text text-center class=\"block\">Don't have an account yet ?\r\n<ion-button class=\"bold\" routerLink=\"/signup\">Signup here</ion-button></ion-text>\r\n\r\n  </ion-item >\r\n  <ion-item>\r\n<ion-text text-center class=\"block\">Already have account \r\n<ion-button routerLink=\"/login\">Login here </ion-button>\r\n</ion-text>\r\n  </ion-item >\r\n\r\n  </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\" class=\"ion-text-center\">\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/verifyemail/verifyemail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/verifyemail/verifyemail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvdmVyaWZ5ZW1haWwvdmVyaWZ5ZW1haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0NBQW1DO0VBQ25DLG9CQUFtQixFQUN0Qjs7QUFHRDtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZXJpZnllbWFpbC92ZXJpZnllbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRleHRhcmVhIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/verifyemail/verifyemail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/verifyemail/verifyemail.page.ts ***!
  \*******************************************************/
/*! exports provided: VerifyemailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyemailPage", function() { return VerifyemailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");







var VerifyemailPage = /** @class */ (function () {
    function VerifyemailPage(fireauth, router, logger, toastController, platform, loadingController, alertController) {
        this.fireauth = fireauth;
        this.router = router;
        this.logger = logger;
        this.toastController = toastController;
        this.platform = platform;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.email = '';
        this.password = '';
        this.error = '';
        this.username = '';
        this.getuserloggedin();
    }
    VerifyemailPage.prototype.openLoader = function () {
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
    VerifyemailPage.prototype.closeLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.dismiss()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VerifyemailPage.prototype.getuserloggedin = function () {
        var _this = this;
        this.fireauth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.logger.info(JSON.stringify(user));
                _this.email = _this.fireauth.auth.currentUser.email;
            }
        });
    };
    VerifyemailPage.prototype.confirmverified = function () {
        var _this = this;
        this.fireauth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.logger.info(user);
                if (user.emailVerified) {
                    _this.router.navigateByUrl('/docvalidate');
                }
                else {
                    _this.presentToast('Email verification not done', false, 'bottom', 1000);
                }
            }
        });
    };
    VerifyemailPage.prototype.sendEmailVerification = function () {
        var _this = this;
        this.fireauth.auth.currentUser.sendEmailVerification()
            .then(function (data) {
            _this.presentToast('Email verification sent', false, 'bottom', 1000);
        })
            .catch(function (err) {
            _this.logger.info(err);
            _this.error = err.message;
        });
    };
    VerifyemailPage.prototype.presentToast = function (message, show_button, position, duration) {
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
    VerifyemailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifyemail',
            template: __webpack_require__(/*! ./verifyemail.page.html */ "./src/app/pages/verifyemail/verifyemail.page.html"),
            styles: [__webpack_require__(/*! ./verifyemail.page.scss */ "./src/app/pages/verifyemail/verifyemail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], VerifyemailPage);
    return VerifyemailPage;
}());



/***/ })

}]);
//# sourceMappingURL=verifyemail-verifyemail-module.js.map