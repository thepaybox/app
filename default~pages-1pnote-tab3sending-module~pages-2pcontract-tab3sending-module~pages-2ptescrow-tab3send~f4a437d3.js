(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-1pnote-tab3sending-module~pages-2pcontract-tab3sending-module~pages-2ptescrow-tab3send~f4a437d3"],{

/***/ "./src/app/pages/tab4wallet/activate.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tab4wallet/activate.service.ts ***!
  \******************************************************/
/*! exports provided: ActivateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateService", function() { return ActivateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");
/* harmony import */ var _config_webconsumeconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/webconsumeconfig */ "./src/app/pages/config/webconsumeconfig.ts");






var ActivateService = /** @class */ (function () {
    function ActivateService(http, storage) {
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
    ActivateService.prototype.savereceivedmessage = function (details) {
        if (details != null) {
            this.receivedmessages.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages', this.receivedmessages);
        }
    };
    ActivateService.prototype.deleteallmessage = function () {
        this.receivedmessages.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages', this.receivedmessages);
        this.invoicedmessages.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicedmessages', this.invoicedmessages);
    };
    ActivateService.prototype.updatereceivedmessage = function (revert, transacted) {
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
    ActivateService.prototype.savereceivetransaction = function (details) {
        if (details != null) {
            this.receivetransactions.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions', this.receivetransactions);
        }
    };
    ActivateService.prototype.clearreceiveall = function () {
        this.receivetransactions.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions', this.receivetransactions);
    };
    ActivateService.prototype.loadreceivetransactions = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions').then(function (data) {
            if (data) {
                _this.receivetransactions = data;
            }
        });
    };
    ActivateService.prototype.loadreceivedmessages = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages').then(function (data) {
            if (data) {
                _this.receivedmessages = data;
            }
        });
    };
    ActivateService.prototype.getreceivetransactions = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivetransactions');
    };
    ActivateService.prototype.getreceivedmessages = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'receivedmessages');
    };
    ActivateService.prototype.consumemessage = function (details, mi) {
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
            _this.http.post(_this.url + mi, JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ActivateService.prototype.getconsumefees = function (details) {
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
    ActivateService.prototype.getBalance = function (address, network) {
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
    ActivateService.prototype.saveinvoicedmessage = function (details) {
        if (details != null) {
            this.invoicedmessages.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicedmessages', this.invoicedmessages);
        }
    };
    ActivateService.prototype.updateinvoicedmessage = function (revert, transacted) {
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
    ActivateService.prototype.saveinvoicetransaction = function (details) {
        if (details != null) {
            this.invoicetransactions.push(details);
            this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicetransactions', this.invoicetransactions);
        }
    };
    ActivateService.prototype.clearinvoiceall = function () {
        this.invoicetransactions.length = 0;
        this.storage.set(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicetransactions', this.invoicetransactions);
    };
    ActivateService.prototype.loadinvoicetransactions = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicetransactions').then(function (data) {
            if (data) {
                _this.invoicetransactions = data;
            }
        });
    };
    ActivateService.prototype.loadinvoicedmessages = function () {
        var _this = this;
        this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicedmessages').then(function (data) {
            if (data) {
                _this.invoicedmessages = data;
            }
        });
    };
    ActivateService.prototype.getinvoicetransactions = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicetransactions');
    };
    ActivateService.prototype.getinvoicedmessages = function () {
        return this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'invoicedmessages');
    };
    ActivateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], ActivateService);
    return ActivateService;
}());



/***/ }),

/***/ "./src/app/pages/tab4wallet/record.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tab4wallet/record.service.ts ***!
  \****************************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/environment */ "./src/app/pages/config/environment.ts");





var RecordService = /** @class */ (function () {
    function RecordService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = _config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosteddomain;
    }
    /*
      recorddirectsend(details: any) {
    
    
    
            return new Promise((resolve, reject) => {
    
    
               this.storage.get(environment.storageuniq+'token').then((value) => {
    
                 this.token = value;
                 let headers = new Headers();
                 headers.append('Authorization', this.token);
                 headers.append('Content-Type', 'application/json');
    
    
    
                this.http.post(this.url + '/webuser/webrecorddirectsend', JSON.stringify(details), {headers: headers})
                  .subscribe(res => {
                    let data = res.json();
                    resolve(data);
    
                  }, (err) => {
                    reject(err);
                  });
    
            });
            });
    
      }
    */
    RecordService.prototype.recordissuersend = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webrecordissuersend', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    RecordService.prototype.recordinvoice = function (details) {
        return this.recordreceive(details);
    };
    // processed
    RecordService.prototype.recordreceive = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webrecordmsgreceive', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    RecordService.prototype.getrequested = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webgetrequested', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    RecordService.prototype.getprocessed = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(_config_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageuniq + 'token').then(function (value) {
                _this.token = value;
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append('Authorization', _this.token);
                headers.append('Content-Type', 'application/json');
                _this.http.post(_this.url + '/webuser/webgetprocessed', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    RecordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], RecordService);
    return RecordService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-1pnote-tab3sending-module~pages-2pcontract-tab3sending-module~pages-2ptescrow-tab3send~f4a437d3.js.map