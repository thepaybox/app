(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashaccept-mydeals-list-module~pages-1pnote-tab3sending-module~pages-2pcontract-tab3sending-~ac93f968"],{

/***/ "./src/app/pages/tab4wallet/blue011.web.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tab4wallet/blue011.web.service.ts ***!
  \*********************************************************/
/*! exports provided: Blue011WebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blue011WebService", function() { return Blue011WebService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _config_webconsumeconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/webconsumeconfig */ "./src/app/pages/config/webconsumeconfig.ts");






var Blue011WebService = /** @class */ (function () {
    function Blue011WebService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.receivedmessages = [];
        //  transactions= [];
        this.receivetransactions = [];
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
        this.loadreceivedmessages();
        this.loadreceivetransactions();
    }
    Blue011WebService.prototype.savereceivedmessage = function (details) {
        if (details != null) {
            this.receivedmessages.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages', this.receivedmessages);
        }
    };
    Blue011WebService.prototype.deleteallmessage = function () {
        this.receivedmessages.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages', this.receivedmessages);
    };
    Blue011WebService.prototype.savereceivetransaction = function (details) {
        if (details != null) {
            this.receivetransactions.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions', this.receivetransactions);
        }
    };
    Blue011WebService.prototype.clearreceiveall = function () {
        this.receivetransactions.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions', this.receivetransactions);
    };
    Blue011WebService.prototype.loadreceivetransactions = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions').then(function (data) {
            if (data) {
                _this.receivetransactions = data;
            }
        });
    };
    Blue011WebService.prototype.loadreceivedmessages = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages').then(function (data) {
            if (data) {
                _this.receivedmessages = data;
            }
        });
    };
    Blue011WebService.prototype.getreceivetransactions = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions');
    };
    Blue011WebService.prototype.getreceivedmessages = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages');
    };
    Blue011WebService.prototype.websendemail = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/websendemail', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    Blue011WebService.prototype.webdocemail = function (details, minterface) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + minterface, JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    Blue011WebService.prototype.webdocemailhtml = function (details, minterface) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + minterface, JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res; //.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    Blue011WebService.prototype.registerwif = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            if (details.network == 'testnet') {
                headers.append('Authorization', _config_webconsumeconfig__WEBPACK_IMPORTED_MODULE_5__["webtestnetconsumeconfig"].apikey);
            }
            else {
                headers.append('Authorization', _config_webconsumeconfig__WEBPACK_IMPORTED_MODULE_5__["weblivenetconsumeconfig"].apikey);
            }
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + '/mobileuser/registerwif', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Blue011WebService.prototype.consumemessage = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            if (details.network == 'testnet') {
                headers.append('Authorization', _config_webconsumeconfig__WEBPACK_IMPORTED_MODULE_5__["webtestnetconsumeconfig"].apikey);
            }
            else {
                headers.append('Authorization', _config_webconsumeconfig__WEBPACK_IMPORTED_MODULE_5__["weblivenetconsumeconfig"].apikey);
            }
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + '/blue011/consumemessage', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Blue011WebService.prototype.getBalance = function (address, network) {
        var _this = this;
        var url;
        if (network == 'testnet') {
            url = 'https://testnet-insight.dashevo.org/insight-api/addr/';
        }
        else {
            url = 'https://insight.dashevo.org/insight-api/addr/';
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(url + address).subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Blue011WebService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], Blue011WebService);
    return Blue011WebService;
}());



/***/ }),

/***/ "./src/app/pages/tab4wallet/invoice.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tab4wallet/invoice.service.ts ***!
  \*****************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");






var InvoiceService = /** @class */ (function () {
    function InvoiceService(http, storage, changellyCalls) {
        this.http = http;
        this.storage = storage;
        this.changellyCalls = changellyCalls;
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    InvoiceService.prototype.checkreceivepolicy = function () {
        //    return this.receivepolicydata; 
    };
    InvoiceService.prototype.getdefaultinvtemplate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'defaulttemplate')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InvoiceService.prototype.webdefaultinvtemplate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webdefaultinvtemplate', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.payment = function (details, theurl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + theurl, JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.acceptpayment = function (details, theurl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + theurl, JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webgetdefaultinvtemplate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webgetdefaultinvtemplate', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webcreateinvtemplate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webcreateinvtemplate', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webdeleteinvoice = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webdeleteinvoice', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webdeleteinvtemplate = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webdeleteinvtemplate', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService.prototype.webgetinvtemplates = function (details) {
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
    InvoiceService.prototype.webgetinvoices = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webgetinvoices', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    InvoiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_5__["ChangellyCalls"]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ })

}]);
//# sourceMappingURL=default~dashaccept-mydeals-list-module~pages-1pnote-tab3sending-module~pages-2pcontract-tab3sending-~ac93f968.js.map