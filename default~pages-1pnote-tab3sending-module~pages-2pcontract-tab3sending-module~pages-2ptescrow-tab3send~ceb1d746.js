(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-1pnote-tab3sending-module~pages-2pcontract-tab3sending-module~pages-2ptescrow-tab3send~ceb1d746"],{

/***/ "./src/app/pages/tab4wallet/policy.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tab4wallet/policy.service.ts ***!
  \****************************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");






var PolicyService = /** @class */ (function () {
    function PolicyService(http, storage, changellyCalls) {
        this.http = http;
        this.storage = storage;
        this.changellyCalls = changellyCalls;
        this.policydata = [
            {
                type: 'directsend',
                situation: 'nokyc',
                display: 'Limit for sending without kyc is DASH ',
                checking: 'greaterthan',
                amount: 1.2
            },
            {
                type: 'directsend',
                situation: 'nokyc',
                display: 'Reached maximum amount allowed without kyc DASH ',
                checking: 'greaterthan',
                amount: 1.0
            },
            {
                type: 'directsend',
                situation: 'maximumlimitkyc',
                display: 'Reached maximum amount allowed to send DASH ',
                checking: 'greaterthan',
                amount: 10
            },
            {
                type: 'directsend',
                situation: 'kyclimitnokyc',
                display: 'Kyc needed to send DASH ',
                checking: 'greaterthan',
                amount: 1
            },
            {
                type: 'directsend',
                situation: 'minimumsend',
                display: 'Minimum to send is DASH ',
                checking: 'lessthan',
                amount: 0.016
            },
            {
                type: 'directsend',
                situation: 'reverseminimumsend',
                display: 'Minimum to send is DASH ',
                checking: 'lessthan',
                amount: 0.12
            },
        ];
        this.receivepolicydata = [
            {
                type: 'consume',
                situation: 'nokyc',
                display: 'Limit for receiving without kyc is DASH ',
                checking: 'greaterthan',
                amount: 1.2
            },
            {
                type: 'consume',
                situation: 'kyclimitnokyc',
                display: 'Kyc needed to receive greater than DASH ',
                checking: 'greaterthan',
                amount: 1.2
            },
            {
                type: 'consume',
                situation: 'withkyclimit',
                display: 'Maximum allowed to receive DASH ',
                checking: 'greaterthan',
                amount: 1.0
            },
        ];
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
        this.loadpolicy();
    }
    PolicyService.prototype.checkreceivepolicy = function () {
        return this.receivepolicydata;
    };
    PolicyService.prototype.check = function (item, amount) {
        var policystatus = {
            code: 0,
            message: ''
        };
        for (var i = 0; i < this.policydata.length; i++) {
            if (this.policydata[i].situation == item) {
                if (this.policydata[i].checking == 'greaterthan') {
                    if (amount > this.changellyCalls.toSatoshi(this.policydata[i].amount)) {
                        policystatus.code = -1;
                        policystatus.message = this.policydata[i].display + this.policydata[i].amount;
                        return policystatus;
                    }
                    else {
                        policystatus.code = 0;
                        policystatus.message = '';
                        return policystatus;
                    }
                }
                if (this.policydata[i].checking == 'lessthan') {
                    if (amount < this.changellyCalls.toSatoshi(this.policydata[i].amount)) {
                        policystatus.code = -1;
                        policystatus.message = this.policydata[i].display + this.policydata[i].amount;
                        return policystatus;
                    }
                    else {
                        policystatus.code = 0;
                        policystatus.message = '';
                        return policystatus;
                    }
                }
            }
        }
    };
    PolicyService.prototype.loadpolicy = function () {
        var _this = this;
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'policydata').then(function (data) {
            return _this.policydata;
        });
    };
    PolicyService.prototype.getpolicy = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/policy', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    PolicyService.prototype.confirmsafety = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webconfirmsafety', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    PolicyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_5__["ChangellyCalls"]])
    ], PolicyService);
    return PolicyService;
}());



/***/ }),

/***/ "./src/app/pages/tab4wallet/webuser.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tab4wallet/webuser.service.ts ***!
  \*****************************************************/
/*! exports provided: WebuserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebuserService", function() { return WebuserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");






var WebuserService = /** @class */ (function () {
    function WebuserService(http, storage, changellyCalls) {
        this.http = http;
        this.storage = storage;
        this.changellyCalls = changellyCalls;
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    WebuserService.prototype.checkreceivepolicy = function () {
        //    return this.receivepolicydata; 
    };
    WebuserService.prototype.setdashprice = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/setdashprice', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    WebuserService.prototype.general = function (details, myurl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + myurl, JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    WebuserService.prototype.setdefaultaddress = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/setdefaultaddress', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    WebuserService.prototype.addusage = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/addusage', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    WebuserService.prototype.webgetinvtemplates = function (details) {
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
    WebuserService.prototype.webgettemplate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webgettemplate', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    WebuserService.prototype.webmarkuserecorddelete = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webmarkuserecorddelete', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    WebuserService.prototype.webdocsignsendemail = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webdocsignsendemail', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    WebuserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_5__["ChangellyCalls"]])
    ], WebuserService);
    return WebuserService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-1pnote-tab3sending-module~pages-2pcontract-tab3sending-module~pages-2ptescrow-tab3send~ceb1d746.js.map