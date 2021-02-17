(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-printpage-verifyemail-module"],{

/***/ "./src/app/pages/printpage/verifyemail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/printpage/verifyemail.module.ts ***!
  \*******************************************************/
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
/* harmony import */ var _verifyemail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verifyemail.page */ "./src/app/pages/printpage/verifyemail.page.ts");

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

/***/ "./src/app/pages/printpage/verifyemail.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/printpage/verifyemail.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar >\r\n\r\n   <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n   <ion-title>\r\n      Print\r\n    </ion-title>\r\n\r\n\r\n  </ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n<div id=\"print-section\"> \r\n<div [innerHTML]=\"htmltoprint\"></div>\r\n\r\n<ion-button   clear size=\"small\" color=\"primary\" (click)=\"print()\"  > Print  </ion-button>\r\n\r\n</div>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/printpage/verifyemail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/printpage/verifyemail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-textarea {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\nion-input {\n  background: var(--ion-color-medium);\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvcHJpbnRwYWdlL3ZlcmlmeWVtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9DQUFtQztFQUNuQyxvQkFBbUIsRUFDdEI7O0FBR0Q7RUFDSSxvQ0FBbUM7RUFDbkMsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpbnRwYWdlL3ZlcmlmeWVtYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/printpage/verifyemail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/printpage/verifyemail.page.ts ***!
  \*****************************************************/
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
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");









var VerifyemailPage = /** @class */ (function () {
    function VerifyemailPage(fireauth, router, logger, storage, toastController, platform, loadingController, alertController) {
        var _this = this;
        this.fireauth = fireauth;
        this.router = router;
        this.logger = logger;
        this.storage = storage;
        this.toastController = toastController;
        this.platform = platform;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.email = '';
        this.password = '';
        this.error = '';
        this.htmltoprint = '';
        console.log(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'htmltoprint');
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].storageuniq + 'htmltoprint').then(function (data) {
            console.log(data);
            if (data) {
                _this.htmltoprint = data;
            }
            else {
            }
        });
    }
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
    VerifyemailPage.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n          //........Customized style.......\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
        this.back();
    };
    VerifyemailPage.prototype.back = function () {
        //    this.router.navigateByUrl("..");
    };
    VerifyemailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifyemail',
            template: __webpack_require__(/*! ./verifyemail.page.html */ "./src/app/pages/printpage/verifyemail.page.html"),
            styles: [__webpack_require__(/*! ./verifyemail.page.scss */ "./src/app/pages/printpage/verifyemail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], VerifyemailPage);
    return VerifyemailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-printpage-verifyemail-module.js.map