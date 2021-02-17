(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");




var routes = [
    {
        path: '',
        component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.html":
/*!****************************************!*\
  !*** ./src/app/pages/login/login.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/docvalidate\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Login </ion-title>\n    <ion-buttons slot=\"secondary\" >\n     </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list>\n      <ion-card>\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Email</ion-label>\n        <ion-input placeholder=\"Enter email-id\" [(ngModel)]=\"email\" name=\"username\" type=\"text\" \n          required>\n        </ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Password</ion-label>\n        <ion-input placeholder=\"Enter password\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" required>\n        </ion-input>\n      </ion-item>\n      </ion-card>\n\n    </ion-list>\n\n    <ion-row responsive-sm>\n      <ion-col>\n        <ion-button (click)=\"loginfun()\"  expand=\"block\">Login</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"onSignup()\" color=\"light\" expand=\"block\">Signup</ion-button>\n      </ion-col >\n    </ion-row>\n      <ion-item (click)=\"forgot()\" text-center>\n        <ion-label position=\"stacked\" color=\"primary\" >Forgot password</ion-label>\n      </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/pages/login/login.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]
            ],
            declarations: [
                _login__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.scss":
/*!****************************************!*\
  !*** ./src/app/pages/login/login.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center; }\n\n.login-logo img {\n  max-width: 150px; }\n\n.list {\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/login/login.ts":
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/logger/logger */ "./src/app/providers/logger/logger.ts");
/* harmony import */ var _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../termspage/terms-user.service */ "./src/app/pages/termspage/terms-user.service.ts");









var Accountstatus = {
    Networkerror: 0,
    Accountnotcreated: 1,
    Someerror: 3,
    Termsnotaccepted: 4,
    Featuresnotcreated: 5,
    Templatesnotcreated: 6,
    Accountsetupfine: 7,
    Usernotloggedin: 8
};
var LoginPage = /** @class */ (function () {
    function LoginPage(fireauth, storage, logger, toastController, alertController, termsuserservice, loadingController, router) {
        this.fireauth = fireauth;
        this.storage = storage;
        this.logger = logger;
        this.toastController = toastController;
        this.alertController = alertController;
        this.termsuserservice = termsuserservice;
        this.loadingController = loadingController;
        this.router = router;
        this.loggedinuser = null;
        this.useraccount = null;
        this.submitted = false;
        this.loaduser();
        this.getaccount();
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.loaduser();
        this.getaccount();
    };
    LoginPage.prototype.getaccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!_this.loggedinuser || _this.loggedinuser.uid == '') {
                            _this.presentAlert('', '', "1. User not loggedin");
                            resolve(Accountstatus.Usernotloggedin);
                        }
                        var data = {
                            googleid: _this.loggedinuser.uid,
                        };
                        _this.termsuserservice.getaccount(data).then(function (data1) {
                            _this.logger.info(data1);
                            if (data1) {
                                _this.useraccount = data1;
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'useraccount', JSON.stringify(_this.useraccount));
                                _this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token', "WebKey " + _this.useraccount.token);
                                if (_this.useraccount.termsagreed != 'yes') {
                                    resolve(Accountstatus.Termsnotaccepted);
                                }
                                if (_this.useraccount.docvalidatefeature == null) {
                                    resolve(Accountstatus.Featuresnotcreated);
                                }
                                resolve(Accountstatus.Accountsetupfine);
                            }
                            else {
                                resolve(Accountstatus.Someerror);
                            }
                        }, function (err) {
                            try {
                                var xx = JSON.parse(err._body);
                                if (xx.response) {
                                    console.log(xx.response.message);
                                    resolve(Accountstatus.Accountnotcreated);
                                }
                            }
                            catch (x) {
                                console.log(x);
                                _this.presentAlert("", "", x);
                                resolve(Accountstatus.Networkerror);
                            }
                        });
                    })];
            });
        });
    };
    LoginPage.prototype.ngOnInit = function () {
        this.loaduser();
        this.getaccount();
    };
    LoginPage.prototype.forgot = function () {
        this.router.navigateByUrl('/forgot');
    };
    LoginPage.prototype.onSignup = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginPage.prototype.loginfun = function () {
        var _this = this;
        this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(function (res) {
            if (res) {
                _this.logger.info(res);
                _this.storage.clear();
                _this.checkifemailverified();
            }
        })
            .catch(function (err) {
            _this.logger.info(err);
            _this.error = err.message;
            _this.presentAlert('Login failed', '', err);
        });
    };
    LoginPage.prototype.presentAlert = function (title, subheader, message) {
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
    LoginPage.prototype.acceptterm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var xx;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //   this.loggedinuser = await this.termsuserservice.getloggedinuser();
                        if (!this.loggedinuser) {
                            this.presentAlert('', '', "2. User not loggedin");
                            return [2 /*return*/];
                        }
                        if (this.loggedinuser.uid == '') {
                            this.presentAlert('', '', "3. User not loggedin");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getaccount()];
                    case 1:
                        xx = _a.sent();
                        console.log(xx);
                        if (xx == Accountstatus.Accountnotcreated) {
                            console.log("account not created");
                            this.router.navigateByUrl('/wallet');
                        }
                        else if (xx == Accountstatus.Featuresnotcreated) {
                            console.log("account created, no features");
                        }
                        else if (xx == Accountstatus.Accountsetupfine) {
                            this.router.navigateByUrl('/docvalidate');
                        }
                        else if (xx == Accountstatus.Usernotloggedin) {
                            console.log("user not loggedin error ");
                        }
                        else {
                            console.log("network error ");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loaduser = function () {
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
    LoginPage.prototype.saveuser = function (user) {
        var _this = this;
        var xx = {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            email: user.email,
            emailVerified: user.emailVerified,
        };
        this.loggedinuser = xx;
        if (!this.loggedinuser.uid || this.loggedinuser.uid == '') {
            this.presentAlert("", "", "Error login. ");
        }
        console.log("saveuser=" + JSON.stringify(this.loggedinuser));
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'loggedinuser', JSON.stringify(this.loggedinuser)).then(function (x) {
            _this.termsuserservice.reflectloginuser();
        });
        return;
    };
    LoginPage.prototype.checkifemailverified = function () {
        var _this = this;
        this.fireauth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.saveuser(user);
                _this.logger.info(user);
                if (user.emailVerified) {
                    _this.acceptterm();
                }
                else {
                    _this.router.navigateByUrl('/verifyemail');
                }
            }
        });
    };
    LoginPage.prototype.presentToast = function (message, show_button, position, duration) {
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
    LoginPage.prototype.gotokyc = function () {
        this.router.navigateByUrl('/kycpage');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-login',
            template: __webpack_require__(/*! ./login.html */ "./src/app/pages/login/login.html"),
            styles: [__webpack_require__(/*! ./login.scss */ "./src/app/pages/login/login.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__["Logger"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _termspage_terms_user_service__WEBPACK_IMPORTED_MODULE_8__["TermsuserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map