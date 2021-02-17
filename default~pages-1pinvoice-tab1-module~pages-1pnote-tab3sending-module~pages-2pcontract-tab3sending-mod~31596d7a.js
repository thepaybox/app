(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-1pinvoice-tab1-module~pages-1pnote-tab3sending-module~pages-2pcontract-tab3sending-mod~31596d7a"],{

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

/***/ "./src/app/pages/config/webissueconfig.ts":
/*!************************************************!*\
  !*** ./src/app/pages/config/webissueconfig.ts ***!
  \************************************************/
/*! exports provided: webtestnetissueconfig, weblivenetissueconfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webtestnetissueconfig", function() { return webtestnetissueconfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weblivenetissueconfig", function() { return weblivenetissueconfig; });
var webtestnetissueconfig = {
    apikey: "ApiKey " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTU0ODE5ZGZkNWI5NmUwYjBiMTcyZiIsImlhdCI6MTYwMzYxODk2NX0.L7IzXID6cPrYoNXTXbJjxqIrAMFpocnU_rWFD1nxplc'
};
var weblivenetissueconfig = {
    apikey: "ApiKey " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZTNhZjJjOGM0NDQzNTA4NWIzNWMxYiIsImlhdCI6MTU1ODQyNTM5N30.posE1NYwmggeEINT9PHhH6d2_E93ul0vyLjRp8Ywi9A'
};


/***/ }),

/***/ "./src/app/pages/firebasekyc-page/kyc.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/firebasekyc-page/kyc.service.ts ***!
  \*******************************************************/
/*! exports provided: KycService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycService", function() { return KycService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");





var KycService = /** @class */ (function () {
    function KycService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.sendingmessages = [];
        this.sendtransactions = [];
        this.kycstatus = {
            kycdone: '',
            kycid: '',
            googleid: '',
            email: '',
            statusaction: '',
            statusmsg: '',
        };
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    KycService.prototype.getkycstatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var xx;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reflectkycstatus()];
                    case 1:
                        xx = _a.sent();
                        return [2 /*return*/, this.kycstatus];
                }
            });
        });
    };
    KycService.prototype.reflectkycstatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'kycstatus').then(function (data) {
                if (data) {
                    _this.kycstatus = data;
                }
                resolve(0);
            });
        });
    };
    KycService.prototype.registeruserkyc = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webkycuser/registeruserkyc', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    KycService.prototype.getkycdata = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webkycuser/getuserkyc', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    KycService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], KycService);
    return KycService;
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



/***/ }),

/***/ "./src/app/pages/tab4wallet/blue011.consume.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tab4wallet/blue011.consume.service.ts ***!
  \*************************************************************/
/*! exports provided: Blue011ConsumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blue011ConsumeService", function() { return Blue011ConsumeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _config_webconsumeconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/webconsumeconfig */ "./src/app/pages/config/webconsumeconfig.ts");






var Blue011ConsumeService = /** @class */ (function () {
    function Blue011ConsumeService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.invoicedmessages = [];
        this.invoicetransactions = [];
        this.receivedmessages = [];
        //  transactions= [];
        this.receivetransactions = [];
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
        this.loadreceivedmessages();
        this.loadreceivetransactions();
        this.loadinvoicedmessages();
        this.loadinvoicetransactions();
    }
    Blue011ConsumeService.prototype.savereceivedmessage = function (details) {
        if (details != null) {
            this.receivedmessages.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages', this.receivedmessages);
        }
    };
    Blue011ConsumeService.prototype.deleteallmessage = function () {
        this.receivedmessages.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages', this.receivedmessages);
        this.invoicedmessages.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicedmessages', this.invoicedmessages);
    };
    Blue011ConsumeService.prototype.updatereceivedmessage = function (revert, transacted) {
        for (var i = 0; i < this.receivedmessages.length; i++) {
            if (revert.pin == this.receivedmessages[i].pin) {
                this.receivedmessages[i].id = transacted.fromaddress.substr(-5);
                this.receivedmessages[i].fromaddress = transacted.fromaddress;
                this.receivedmessages[i].status = 'received';
                this.receivedmessages[i].amount = transacted.amount;
                this.receivedmessages[i].fees = transacted.fees;
                this.receivedmessages[i].txid = transacted.txid;
            }
        }
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages', this.receivedmessages);
    };
    Blue011ConsumeService.prototype.savereceivetransaction = function (details) {
        if (details != null) {
            this.receivetransactions.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions', this.receivetransactions);
        }
    };
    Blue011ConsumeService.prototype.clearreceiveall = function () {
        this.receivetransactions.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions', this.receivetransactions);
    };
    Blue011ConsumeService.prototype.loadreceivetransactions = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions').then(function (data) {
            if (data) {
                _this.receivetransactions = data;
            }
        });
    };
    Blue011ConsumeService.prototype.loadreceivedmessages = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages').then(function (data) {
            if (data) {
                _this.receivedmessages = data;
            }
        });
    };
    Blue011ConsumeService.prototype.getreceivetransactions = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions');
    };
    Blue011ConsumeService.prototype.getreceivedmessages = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages');
    };
    Blue011ConsumeService.prototype.registerwif = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/registerwif', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    /*
      getkycdata(details: any) {
    
    
    
            return new Promise((resolve, reject) => {
    
    
                 this.storage.get(environment.storageuniq+'token').then((value) => {
    
                 this.token = value;
                 let headers = new Headers();
                 headers.append('Authorization', this.token);
                 headers.append('Content-Type', 'application/json');
    
    
    
    
                this.http.post(this.url + '/webuser/getkycdata', JSON.stringify(details), {headers: headers})
                  .subscribe(res => {
                    let data = res.json();
                    resolve(data);
    
                  }, (err) => {
                    reject(err);
                  });
    
            });
            });
    
      }
    
      consumemessage (details: any) {
    
    
    
            return new Promise((resolve, reject) => {
    
    
                 let headers = new Headers();
    
                if(details.network == 'testnet'){
                    headers.append('Authorization', webtestnetconsumeconfig.apikey);
                }else {
                    headers.append('Authorization', weblivenetconsumeconfig.apikey);
    
                }
                 headers.append('Content-Type', 'application/json');
    
                this.http.post(this.url + '/blue011/consumemessage', JSON.stringify(details), {headers: headers})
                  .subscribe(res => {
    
                    let data = res.json();
                    resolve(data);
    
                  }, (err) => {
                    reject(err);
                  });
    
            });
    
      }
    
    */
    Blue011ConsumeService.prototype.getconsumefees = function (details) {
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
            _this.http.post(_this.url + '/blue011/getconsumefees', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Blue011ConsumeService.prototype.getBalance = function (address, network) {
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
    Blue011ConsumeService.prototype.saveinvoicedmessage = function (details) {
        if (details != null) {
            this.invoicedmessages.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicedmessages', this.invoicedmessages);
        }
    };
    Blue011ConsumeService.prototype.updateinvoicedmessage = function (revert, transacted) {
        for (var i = 0; i < this.invoicedmessages.length; i++) {
            if (revert.pin == this.invoicedmessages[i].pin) {
                this.invoicedmessages[i].id = transacted.fromaddress.substr(-5);
                this.invoicedmessages[i].fromaddress = transacted.fromaddress;
                this.invoicedmessages[i].status = 'invoiced';
                this.invoicedmessages[i].amount = transacted.amount;
                this.invoicedmessages[i].fees = transacted.fees;
                this.invoicedmessages[i].txid = transacted.txid;
            }
        }
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicedmessages', this.invoicedmessages);
    };
    Blue011ConsumeService.prototype.saveinvoicetransaction = function (details) {
        if (details != null) {
            this.invoicetransactions.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicetransactions', this.invoicetransactions);
        }
    };
    Blue011ConsumeService.prototype.clearinvoiceall = function () {
        this.invoicetransactions.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicetransactions', this.invoicetransactions);
    };
    Blue011ConsumeService.prototype.loadinvoicetransactions = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicetransactions').then(function (data) {
            if (data) {
                _this.invoicetransactions = data;
            }
        });
    };
    Blue011ConsumeService.prototype.loadinvoicedmessages = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicedmessages').then(function (data) {
            if (data) {
                _this.invoicedmessages = data;
            }
        });
    };
    Blue011ConsumeService.prototype.getinvoicetransactions = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicetransactions');
    };
    Blue011ConsumeService.prototype.getinvoicedmessages = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicedmessages');
    };
    Blue011ConsumeService.prototype.verifydoc = function (txid, network) {
        var _this = this;
        var url;
        if (network == 'testnet') {
            url = 'https://testnet-insight.dashevo.org/insight-api/tx/';
        }
        else {
            url = 'https://insight.dashevo.org/insight-api/tx/';
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(url + txid).subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Blue011ConsumeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], Blue011ConsumeService);
    return Blue011ConsumeService;
}());



/***/ }),

/***/ "./src/app/pages/tab4wallet/blue011.issue.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tab4wallet/blue011.issue.service.ts ***!
  \***********************************************************/
/*! exports provided: Blue011IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blue011IssueService", function() { return Blue011IssueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _config_webissueconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/webissueconfig */ "./src/app/pages/config/webissueconfig.ts");
/* harmony import */ var _providers_changelly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/changelly */ "./src/app/providers/changelly.ts");







var Blue011IssueService = /** @class */ (function () {
    function Blue011IssueService(http, changellyCalls, // , .toSatoshi(this.policydata[i].amount))
    storage) {
        this.http = http;
        this.changellyCalls = changellyCalls;
        this.storage = storage;
        this.feesdisplay = {
            stddiscountfeesdisp: '',
            stdgalaxyfeesdisp: '',
            stdstarfeesdisp: '',
            stdfeesdisp: '',
            rvtdiscountfeesdisp: '',
            rvtgalaxyfeesdisp: '',
            rvtstarfeesdisp: '',
            rvtfeesdisp: '',
            networkfees: '',
        };
        this.Transaction = dashcore.Transaction;
        this.senduserchoice = {
            starplan: false,
            galaxyplan: false,
            standardplan: true,
            discountplan: false
        };
        this.userrecords = [];
        this.sendtransactions = [];
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
        this.loaduserrecords();
        this.loadsendtransactions();
    }
    Blue011IssueService.prototype.getdisplayfees = function (useraccount) {
        /*
            this.feesdisplay.stdgalaxyfeesdisp =  "DASH " + this.changellyCalls.fromSatoshi(Number(useraccount.galaxyfees.stdfixed)) + Number(useraccount.galaxyfees.stdpercentage) + "%";
            this.feesdisplay.stdstarfeesdisp =  "DASH " + this.changellyCalls.fromSatoshi(Number(useraccount.starfees.stdfixed)) + Number(useraccount.starfees.stdpercentage) + "%";
            this.feesdisplay.stdfeesdisp =  "DASH " + this.changellyCalls.fromSatoshi(Number(useraccount.fees.stdfixed)) + Number(useraccount.fees.stdpercentage) + "%";
            this.feesdisplay.stddiscountdisp =  "DASH " + this.changellyCalls.fromSatoshi(Number(useraccount.discount.stdfixed)) + Number(useraccount.discount.stdpercentage) + "%";
            this.feesdisplay.rvtgalaxyfeesdisp =  "DASH " + this.changellyCalls.fromSatoshi(Number(useraccount.galaxyfees.rvtfixed)) + Number(useraccount.galaxyfees.rvtpercentage) + "%";
            this.feesdisplay.rvtstarfeesdisp =  "DASH " + this.changellyCalls.fromSatoshi(Number(useraccount.starfees.rvtfixed)) + Number(useraccount.starfees.rvtpercentage) + "%";
            this.feesdisplay.rvtfeesdisp =  "DASH " + this.changellyCalls.fromSatoshi(Number(useraccount.fees.rvtfixed)) + Number(useraccount.fees.rvtpercentage) + "%";
            this.feesdisplay.rvtdiscountdisp =  "DASH " + this.changellyCalls.fromSatoshi(Number(useraccount.discount.rvtfixed)) + Number(useraccount.discount.rvtpercentage) + "%";
        */
        return this.feesdisplay;
    };
    Blue011IssueService.prototype.saveuserrecord = function (details) {
        if (details != null) {
            this.userrecords.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'issueuserrecords', this.userrecords);
        }
    };
    Blue011IssueService.prototype.oldupdateuserrecord = function (details) {
        for (var i = 0; i < this.userrecords.length; i++) {
            if (this.userrecords[i].address == details.toaddress) {
                this.userrecords[i].status = 'funded';
                this.userrecords[i].balance = details.amount;
            }
        }
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'issueuserrecords', this.userrecords);
    };
    Blue011IssueService.prototype.balanceupdateuserrecord = function (msg) {
        for (var i = 0; i < this.userrecords.length; i++) {
            if (this.userrecords[i].address == msg.address) {
                if (msg.balance == 0) {
                    if (this.userrecords[i].status == 'funded') {
                        this.userrecords[i].status = 'spent';
                    }
                    else {
                        this.userrecords[i].status = 'empty';
                    }
                }
                else {
                    this.userrecords[i].status = 'funded';
                }
                this.userrecords[i].balance = msg.balance;
            }
        }
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'issueuserrecords', this.userrecords);
    };
    Blue011IssueService.prototype.deletemessage = function (index) {
        this.userrecords.splice(index, 1);
        return this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'issueuserrecords', this.userrecords);
        //return this.loaduserrecords() ;
    };
    Blue011IssueService.prototype.loaduserrecords = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'issueuserrecords').then(function (data) {
                if (data) {
                    _this.userrecords = data;
                }
                resolve(0);
            });
        });
    };
    Blue011IssueService.prototype.reflectsenduserchoice = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'senduserchoice').then(function (data) {
                if (data) {
                    _this.senduserchoice = data;
                }
                resolve(0);
            });
        });
    };
    Blue011IssueService.prototype.getuserrecords = function (details, mi) {
        // return this.storage.get(environment.storageuniq+'issueuserrecords');
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + mi, JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    Blue011IssueService.prototype.updateuserrecord = function (details) {
        // return this.storage.get(environment.storageuniq+'issueuserrecords');
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webupdateuserrecord', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    Blue011IssueService.prototype.savesendtransaction = function (details) {
        if (details != null) {
            this.sendtransactions.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'sendtransactions', this.sendtransactions);
        }
    };
    Blue011IssueService.prototype.clearsentall = function () {
        this.sendtransactions.length = 0;
        return this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'sendtransactions', this.sendtransactions);
    };
    Blue011IssueService.prototype.loadsendtransactions = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'sendtransactions').then(function (data) {
                if (data) {
                    _this.sendtransactions = data;
                }
                resolve(0);
            });
        });
    };
    Blue011IssueService.prototype.getsenttransactions = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'sendtransactions');
    };
    Blue011IssueService.prototype.deleteallmessage = function () {
        this.userrecords.length = 0;
        return this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'issueuserrecords', this.userrecords);
    };
    Blue011IssueService.prototype.issueuserrecord = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            if (details.network == 'testnet') {
                headers.append('Authorization', _config_webissueconfig__WEBPACK_IMPORTED_MODULE_5__["webtestnetissueconfig"].apikey);
            }
            else {
                headers.append('Authorization', _config_webissueconfig__WEBPACK_IMPORTED_MODULE_5__["weblivenetissueconfig"].apikey);
            }
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + '/blue011/issuemessage', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Blue011IssueService.prototype.getissuedaddresses = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', _config_webissueconfig__WEBPACK_IMPORTED_MODULE_5__["webtestnetissueconfig"].apikey);
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + '/getissuedaddresses', null, { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Blue011IssueService.prototype.getBalance = function (address, network) {
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
    Blue011IssueService.prototype.getUtxo = function (address, network) {
        var _this = this;
        var url;
        if (network == 'testnet') {
            url = 'https://testnet-insight.dashevo.org/insight-api/addr/';
        }
        else {
            url = 'https://insight.dashevo.org/insight-api/addr/';
        }
        return new Promise(function (resolve, reject) {
            _this.http.get(url + address + "/utxo").subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Blue011IssueService.prototype.getnetworkfees = function (type, toamount, change, useraccount) {
        if (change.increase) {
            return (Number(useraccount.networkfees) + 500);
        }
        if (change.decrease) {
            return (Number(useraccount.networkfees) - 500);
        }
        return Number(useraccount.networkfees);
    };
    Blue011IssueService.prototype.getdirectincomeshare = function (type, toamount, useraccount) {
        var incomeshare = {
            incomeaddress: '',
            incomeamount: ''
        };
        if (useraccount.network == 'livenet') {
            incomeshare.incomeaddress = useraccount.liveincomeaddress;
        }
        else {
            incomeshare.incomeaddress = useraccount.testincomeaddress;
        }
        if (this.senduserchoice.galaxyplan) {
            incomeshare.incomeamount = ((Number(useraccount.galaxyfees.stdpercentage) * 0.01 * toamount + Number(useraccount.galaxyfees.stdfixed)).toFixed());
        }
        else if (this.senduserchoice.starplan) {
            incomeshare.incomeamount = ((Number(useraccount.starfees.stdpercentage) * 0.01 * toamount + Number(useraccount.starfees.stdfixed)).toFixed());
        }
        else {
            incomeshare.incomeamount = ((Number(useraccount.fees.stdpercentage) * 0.01 * toamount + Number(useraccount.fees.stdfixed)).toFixed());
        }
        return incomeshare;
    };
    Blue011IssueService.prototype.getrevertincomeshare = function (type, toamount, useraccount) {
        var incomeshare = {
            incomeaddress: '',
            incomeamount: ''
        };
        if (useraccount.network == 'livenet') {
            incomeshare.incomeaddress = useraccount.liveincomeaddress;
        }
        else {
            incomeshare.incomeaddress = useraccount.testincomeaddress;
        }
        if (this.senduserchoice.galaxyplan) {
            incomeshare.incomeamount = ((Number(useraccount.galaxyfees.rvtpercentage) * 0.01 * toamount + Number(useraccount.galaxyfees.rvtfixed)).toFixed());
        }
        else if (this.senduserchoice.starplan) {
            incomeshare.incomeamount = ((Number(useraccount.starfees.rvtpercentage) * 0.01 * toamount + Number(useraccount.starfees.rvtfixed)).toFixed());
        }
        else {
            incomeshare.incomeamount = ((Number(useraccount.fees.rvtpercentage) * 0.01 * toamount + Number(useraccount.fees.rvtfixed)).toFixed());
        }
        return incomeshare;
    };
    Blue011IssueService.prototype.createtransaction = function (utxo, privatekey, changeaddress, toaddress, toamount, fees, incomeshare, useraccount) {
        if (useraccount == null) {
            alert("Setup not ready");
            return;
        }
        var incomeaddress = incomeshare.incomeaddress;
        if (useraccount.network == 'livenet') {
            if (!dashcore.Address.isValid(incomeaddress, dashcore.Networks.livenet)) {
                alert("Invalid address internal error");
                return;
            }
            if (!dashcore.Address.isValid(changeaddress, dashcore.Networks.livenet)) {
                alert("Invalid address internal error");
                return;
            }
        }
        else {
            if (!dashcore.Address.isValid(incomeaddress, dashcore.Networks.testnet)) {
                alert("Invalid address internal error");
                return;
            }
            if (!dashcore.Address.isValid(changeaddress, dashcore.Networks.testnet)) {
                alert("Invalid address internal error");
                return;
            }
        }
        var income = Number(Number(incomeshare.incomeamount).toFixed(0));
        var networkfees = Number(fees);
        var tx;
        var txobject;
        try {
            tx = new this.Transaction()
                .from(utxo)
                .to([{ address: incomeaddress, satoshis: income },
                { address: toaddress, satoshis: toamount }])
                .fee(networkfees)
                .change(changeaddress)
                .sign(privatekey);
            txobject = tx.toBuffer();
        }
        catch (err) {
            alert(err);
        }
        return txobject;
    };
    Blue011IssueService.prototype.broadcast = function (tx, network) {
        var _this = this;
        var pushtx = {
            rawtx: tx
        };
        var url;
        if (network == 'testnet') {
            url = 'https://testnet-insight.dashevo.org/insight-api/';
        }
        else {
            url = 'https://insight.dashevo.org/insight-api/';
        }
        var lurl = url + 'tx/send';
        // 'https://testnet-insight.dashevo.org/insight-api/tx/send';
        return new Promise(function (resolve, reject) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(lurl, JSON.stringify(pushtx), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    Blue011IssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _providers_changelly__WEBPACK_IMPORTED_MODULE_6__["ChangellyCalls"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], Blue011IssueService);
    return Blue011IssueService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-1pinvoice-tab1-module~pages-1pnote-tab3sending-module~pages-2pcontract-tab3sending-mod~31596d7a.js.map