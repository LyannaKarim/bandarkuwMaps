webpackJsonp([0],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikerentalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BikerentalPage = (function () {
    function BikerentalPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/');
    }
    BikerentalPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    BikerentalPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return BikerentalPage;
}());
BikerentalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bikerental',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\bikerental\bikerental.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Bike Rental\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<p>INSERT MAP HERE</p>\n\n<!--     <ion-slides>\n      <ion-slide *ngFor="let task of tasks | async"> -->\n<!--       <p>{{task.Name}}</p>\n      <p>Availablity: {{task.Link}}</p> -->\n<ion-item *ngFor="let task of tasks | async">\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <ion-icon name="bicycle" item-left></ion-icon>\n        {{task.Name}}\n        <br>\n      </ion-item>\n\n      <ion-item text-center>\n        {{task.Status}}\n      </ion-item>\n      <ion-list>\n\n        <ion-item>\n          Becha: {{task.Becha}}\n        </ion-item>\n\n        <ion-item>\n          Fixie: {{task.Fixie}}\n        </ion-item>\n\n        <ion-item>\n          Kids: {{task.Kids}}\n        </ion-item>\n        \n        <ion-item>\n          Mountain: {{task.Mountain}}\n        </ion-item>\n\n        <ion-item>\n          Road: {{task.Road}}\n        </ion-item>\n\n      </ion-list>\n    </ion-list>\n  </ion-card>\n</ion-item>\n<!-- </ion-slide>\n\n</ion-slides> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\bikerental\bikerental.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], BikerentalPage);

//# sourceMappingURL=bikerental.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photos_photos__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transport_transport__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stalls_stalls__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_misc__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__transport_transport__["a" /* TransportPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__photos_photos__["a" /* PhotosPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__stalls_stalls__["a" /* StallsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__misc_misc__["a" /* MiscPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="md-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Transport" tabIcon="md-car"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Photos" tabIcon="md-image"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Stalls" tabIcon="md-basket"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Misc" tabIcon="md-more"></ion-tab>\n</ion-tabs>\n\n<!-- <ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="md-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="md-car"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="md-image"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="md-basket"></ion-tab>\n  <ion-tab [root]="tab5Root" tabIcon="md-more"></ion-tab>\n</ion-tabs> -->'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotosPage = (function () {
    function PhotosPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    PhotosPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    PhotosPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return PhotosPage;
}());
PhotosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-photos',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\photos\photos.html"*/'<ion-content>\n  <ion-item>\n    <ion-icon name="md-camera" item-start large></ion-icon>\n    <h2>#bandarkuCeria</h2>\n    <p>on Instagram by @Bandarku.bwn</p>\n  </ion-item>\n  <iframe src="//lightwidget.com/widgets/f2703b7158f0598b8eb8b89a53d02743.html" \n    allowtransparency="true" style="width: 100%; height: 100%; border: 0; ">\n  </iframe>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\photos\photos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PhotosPage);

//# sourceMappingURL=photos.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bikerental_bikerental__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bikeroutes_bikeroutes__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parking_parking__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransportPage = (function () {
    function TransportPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.bikerentPage = __WEBPACK_IMPORTED_MODULE_3__bikerental_bikerental__["a" /* BikerentalPage */];
        this.bikeroutesPage = __WEBPACK_IMPORTED_MODULE_4__bikeroutes_bikeroutes__["a" /* BikeroutesPage */];
        this.parkingPage = __WEBPACK_IMPORTED_MODULE_5__parking_parking__["a" /* ParkingPage */];
    }
    return TransportPage;
}());
TransportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transport',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\transport\transport.html"*/'\n  <ion-content padding>\n  <br>\n\n  <ion-item  [navPush]="bikerentPage">\n    <ion-icon name="md-bicycle" item-left large ></ion-icon>\n    <h2>Bike Rental</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n</ion-item>\n\n <ion-item  [navPush]="bikeroutesPage">\n    <ion-icon name="md-map" item-left large ></ion-icon>\n    <h2>Bike Routes</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n  </ion-item>\n\n  <ion-item  [navPush]="parkingPage">\n    <ion-icon name="md-car" item-left large ></ion-icon>\n    <h2>Parking Area</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n  </ion-item>\n\n  </ion-content>\n  \n  <!-- box code  -->\n\n  <!-- <br>\n  <img src="../../assets/img/bikerental.svg" [navPush]="bikerentPage" width="49%">  \n  <img src="../../assets/img/bikeroutes.svg" [navPush]="bikeroutesPage" width="49%">    \n  <img src="../../assets/img/parking.svg" [navPush]="parkingPage" width="49%">    \n   -->\n\n<!-- bar code  -->\n\n  <!-- <br>\n  <img src="../../assets/img/bikerental.svg" [navPush]="bikerentPage" width="49%">  \n  <img src="../../assets/img/bikeroutes.svg" [navPush]="bikeroutesPage" width="49%">    \n  <img src="../../assets/img/parking.svg" [navPush]="parkingPage" width="49%">    \n   -->\n  \n  <!--                     normal code                       -->\n  <!-- <ion-header>\n      <ion-navbar>\n        <ion-title>\n          Transport\n        </ion-title>\n      </ion-navbar>\n    </ion-header>\n    \n    <ion-content>\n    \n     <br>\n    \n     <ion-item  [navPush]="bikerentPage">\n        <ion-icon name="md-bicycle" item-left large ></ion-icon>\n        <h2>Bike Rental</h2>\n        <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n    </ion-item>\n    \n     <ion-item  [navPush]="bikeroutesPage">\n        <ion-icon name="md-map" item-left large ></ion-icon>\n        <h2>Bike Routes</h2>\n        <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n      </ion-item>\n    \n      <ion-item  [navPush]="parkingPage">\n        <ion-icon name="md-car" item-left large ></ion-icon>\n        <h2>Parking Area</h2>\n        <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n      </ion-item>\n    \n    \n    \n    </ion-content>\n     -->'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\transport\transport.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], TransportPage);

//# sourceMappingURL=transport.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeroutesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__three_three__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__five_five__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ten_ten__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BikeroutesPage = (function () {
    function BikeroutesPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.threePage = __WEBPACK_IMPORTED_MODULE_3__three_three__["a" /* ThreePage */];
        this.fivePage = __WEBPACK_IMPORTED_MODULE_4__five_five__["a" /* FivePage */];
        this.tenPage = __WEBPACK_IMPORTED_MODULE_5__ten_ten__["a" /* TenPage */];
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    BikeroutesPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    BikeroutesPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return BikeroutesPage;
}());
BikeroutesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bikeroutes',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\bikeroutes\bikeroutes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Bike Routes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n <ion-item  [navPush]="threePage">\n    <ion-icon name="md-pin" item-left large ></ion-icon>\n    <h2>3KM Route</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n</ion-item>\n\n <ion-item  [navPush]="fivePage">\n    <ion-icon name="md-pin" item-left large ></ion-icon>\n    <h2>5KM Route</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n  </ion-item>\n\n  <ion-item  [navPush]="tenPage">\n    <ion-icon name="md-pin" item-left large ></ion-icon>\n    <h2>10KM Route</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\bikeroutes\bikeroutes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], BikeroutesPage);

//# sourceMappingURL=bikeroutes.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThreePage = (function () {
    function ThreePage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    ThreePage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    ThreePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return ThreePage;
}());
ThreePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-three',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\three\three.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\three\three.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ThreePage);

//# sourceMappingURL=three.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FivePage = (function () {
    function FivePage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    FivePage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    FivePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return FivePage;
}());
FivePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-five',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\five\five.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\five\five.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], FivePage);

//# sourceMappingURL=five.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TenPage = (function () {
    function TenPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    TenPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    TenPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return TenPage;
}());
TenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ten',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\ten\ten.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      10km\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\ten\ten.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], TenPage);

//# sourceMappingURL=ten.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_locations_locations__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_google_maps_google_maps__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParkingPage = (function () {
    function ParkingPage(navCtrl, maps, platform, locations, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.maps = maps;
        this.platform = platform;
        this.locations = locations;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Parking');
    }
    ParkingPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    ParkingPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Parking has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    ParkingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var mapLoaded = _this.maps.init(_this.mapElement.nativeElement, _this.pleaseConnect.nativeElement);
            var locationsLoaded = _this.locations.load();
            Promise.all([
                mapLoaded,
                locationsLoaded
            ]).then(function (result) {
                var locations = result[1];
                for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
                    var location_1 = locations_1[_i];
                    _this.maps.addMarker(location_1.latitude, location_1.longitude);
                }
            });
        });
    };
    return ParkingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ParkingPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('pleaseConnect'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ParkingPage.prototype, "pleaseConnect", void 0);
ParkingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-parking',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\parking\parking.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Parking</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #pleaseConnect id="please-connect">\n    <p>Please connect to the Internet...</p>\n  </div>\n  <div #map id="map"></div>\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n<!--       <p ng-class="{\'color-red\': task.status === \'Closed\', \'color-green\': task.status === \'Open\', \'color-blue\': task.status === \'Ignored\'}">{{task.status}}</p> -->\n      \n      <p>{{task.status}}</p>\n\n      <p>Available Parking: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\parking\parking.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_locations_locations__["a" /* LocationsProvider */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ParkingPage);

//# sourceMappingURL=parking.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LocationsProvider = (function () {
    function LocationsProvider(http) {
        this.http = http;
    }
    LocationsProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('assets/data/locations.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.data = data.locations;
                resolve(_this.data);
            });
        });
    };
    return LocationsProvider;
}());
LocationsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], LocationsProvider);

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectivity_connectivity__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var GoogleMapsProvider = (function () {
    function GoogleMapsProvider(connectivityService, geolocation) {
        this.connectivityService = connectivityService;
        this.geolocation = geolocation;
        this.mapInitialised = false;
        this.markers = [];
    }
    GoogleMapsProvider.prototype.init = function (mapElement, pleaseConnect) {
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMapsProvider.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                _this.disableMap();
                if (_this.connectivityService.isOnline()) {
                    window['mapInit'] = function () {
                        _this.initMap().then(function () {
                            resolve(true);
                        });
                        _this.enableMap();
                    };
                    var script = document.createElement("script");
                    script.id = "googleMaps";
                    if (_this.apiKey) {
                        script.src = 'http://maps.google.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                    }
                    else {
                        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                    }
                    document.body.appendChild(script);
                }
            }
            else {
                if (_this.connectivityService.isOnline()) {
                    _this.initMap();
                    _this.enableMap();
                }
                else {
                    _this.disableMap();
                }
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMapsProvider.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            _this.geolocation.getCurrentPosition().then(function (position) {
                // UNCOMMENT FOR NORMAL USE
                //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var latLng = new google.maps.LatLng(4.889464, 114.941705);
                var mapOptions = {
                    center: latLng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                resolve(true);
            });
        });
    };
    GoogleMapsProvider.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMapsProvider.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMapsProvider.prototype.addConnectivityListeners = function () {
        var _this = this;
        document.addEventListener('online', function () {
            console.log("online");
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        }, false);
        document.addEventListener('offline', function () {
            console.log("offline");
            _this.disableMap();
        }, false);
    };
    GoogleMapsProvider.prototype.addMarker = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng,
            label: labels[labelIndex++ % labels.length]
        });
        this.markers.push(marker);
        this.addInfoWindow(marker);
    };
    GoogleMapsProvider.prototype.addInfoWindow = function (marker) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: labels
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    return GoogleMapsProvider;
}());
GoogleMapsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__connectivity_connectivity__["a" /* ConnectivityProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], GoogleMapsProvider);

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectivityProvider = (function () {
    function ConnectivityProvider(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    ConnectivityProvider.prototype.isOnline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    ConnectivityProvider.prototype.isOffline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    return ConnectivityProvider;
}());
ConnectivityProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
], ConnectivityProvider);

//# sourceMappingURL=connectivity.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StallsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StallsPage = (function () {
    function StallsPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Stall');
    }
    StallsPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    StallsPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return StallsPage;
}());
StallsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stalls',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\stalls\stalls.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Stalls\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <ion-icon name="md-pin" item-start large></ion-icon>\n      <h2>{{task.Name}}</h2>\n      <p>{{task.Type}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\stalls\stalls.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], StallsPage);

//# sourceMappingURL=stalls.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator_translator__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rules_rules__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emergency_emergency__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MiscPage = (function () {
    function MiscPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.translatorPage = __WEBPACK_IMPORTED_MODULE_3__translator_translator__["a" /* TranslatorPage */];
        this.rulesPage = __WEBPACK_IMPORTED_MODULE_4__rules_rules__["a" /* RulesPage */];
        this.emergencyPage = __WEBPACK_IMPORTED_MODULE_5__emergency_emergency__["a" /* EmergencyPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */];
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    MiscPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    MiscPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return MiscPage;
}());
MiscPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-misc',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\misc\misc.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Misc\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n <ion-item  [navPush]="translatorPage">\n    <ion-icon name="md-repeat" item-left large ></ion-icon>\n    <h2>Translator</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n</ion-item>\n\n <ion-item  [navPush]="rulesPage">\n    <ion-icon name="md-list" item-left large ></ion-icon>\n    <h2>Rules</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n  </ion-item>\n\n  <ion-item  [navPush]="emergencyPage">\n    <ion-icon name="md-call" item-left large ></ion-icon>\n    <h2>Emergency</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n  </ion-item>\n\n  <ion-item  [navPush]="settingsPage">\n    <ion-icon name="md-settings" item-left large ></ion-icon>\n    <h2>Settings</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n  </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\misc\misc.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MiscPage);

//# sourceMappingURL=misc.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TranslatorPage = (function () {
    function TranslatorPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    TranslatorPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    TranslatorPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return TranslatorPage;
}());
TranslatorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-translator',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\translator\translator.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\translator\translator.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], TranslatorPage);

//# sourceMappingURL=translator.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RulesPage = (function () {
    function RulesPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    RulesPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    RulesPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return RulesPage;
}());
RulesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rules',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\rules\rules.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\rules\rules.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RulesPage);

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmergencyPage = (function () {
    function EmergencyPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    EmergencyPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    EmergencyPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return EmergencyPage;
}());
EmergencyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-emergency',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\emergency\emergency.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item  [navPush]="bikerentPage">\n    <ion-icon name="md-bicycle" item-left large ></ion-icon>\n    <h2>Police</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n</ion-item>\n\n <ion-item  [navPush]="bikeroutesPage">\n    <ion-icon name="md-map" item-left large ></ion-icon>\n    <h2>Fire Brigade</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n  </ion-item>\n\n  <ion-item  [navPush]="parkingPage">\n    <ion-icon name="md-car" item-left large ></ion-icon>\n    <h2>Ambulance</h2>\n    <ion-icon name="ios-arrow-forward" item-right large ></ion-icon>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\emergency\emergency.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EmergencyPage);

//# sourceMappingURL=emergency.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    SettingsPage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    SettingsPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Ads/');
    }
    HomePage.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    HomePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      HOMEZIES\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<div style="overflow:auto;">\n  <ion-slides>\n    <ion-slide *ngFor="let task of tasks | async">\n      <img src="{{task.Image}}">\n\n      <ion-card>\n       <ion-list>\n\n        <ion-item text-wrap>\n          <ion-icon name="{{task.Icon}}" item-left></ion-icon>\n          {{task.Name}}\n        </ion-item>\n\n          <ion-item text-wrap>\n            Type: \n            <p>{{task.Type}}</p>\n          </ion-item>\n\n          <ion-item text-wrap>\n            Organizer: \n            <p>{{task.Organizer}}</p>\n          </ion-item>\n\n          <ion-item text-wrap>\n            Link:\n            <p>{{task.Link}}</p>\n          </ion-item>\n          \n          <ion-item text-wrap>\n            Description: \n            <p>{{task.Description}}</p>\n          </ion-item>\n\n\n        </ion-list>\n      </ion-card>\n      <br>\n      <br>\n    </ion-slide>\n  </ion-slides>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(304);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_connectivity_connectivity__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_google_maps_google_maps__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_locations_locations__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transport_transport__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_parking_parking__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_photos_photos__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_stalls_stalls__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_misc_misc__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ten_ten__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_three_three__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_five_five__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_bikerental_bikerental__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_bikeroutes_bikeroutes__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_emergency_emergency__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_event1_event1__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_event2_event2__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_event3_event3__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_event4_event4__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_event5_event5__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_rules_rules__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_translator_translator__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_vendor1_vendor1__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_vendor2_vendor2__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_vendor3_vendor3__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_vendor4_vendor4__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angularfire2_database__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angularfire2__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__environments_environment__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_transport_transport__["a" /* TransportPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_vendor2_vendor2__["a" /* Vendor2Page */],
            __WEBPACK_IMPORTED_MODULE_11__pages_parking_parking__["a" /* ParkingPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_photos_photos__["a" /* PhotosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_stalls_stalls__["a" /* StallsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_misc_misc__["a" /* MiscPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_ten_ten__["a" /* TenPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_three_three__["a" /* ThreePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_five_five__["a" /* FivePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_bikerental_bikerental__["a" /* BikerentalPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_bikeroutes_bikeroutes__["a" /* BikeroutesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_emergency_emergency__["a" /* EmergencyPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_event1_event1__["a" /* Event1Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_event2_event2__["a" /* Event2Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_event3_event3__["a" /* Event3Page */],
            __WEBPACK_IMPORTED_MODULE_26__pages_event4_event4__["a" /* Event4Page */],
            __WEBPACK_IMPORTED_MODULE_27__pages_event5_event5__["a" /* Event5Page */],
            __WEBPACK_IMPORTED_MODULE_28__pages_rules_rules__["a" /* RulesPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_translator_translator__["a" /* TranslatorPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_vendor1_vendor1__["a" /* Vendor1Page */],
            __WEBPACK_IMPORTED_MODULE_32__pages_vendor2_vendor2__["a" /* Vendor2Page */],
            __WEBPACK_IMPORTED_MODULE_33__pages_vendor3_vendor3__["a" /* Vendor3Page */],
            __WEBPACK_IMPORTED_MODULE_34__pages_vendor4_vendor4__["a" /* Vendor4Page */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_38_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_39__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_35_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_transport_transport__["a" /* TransportPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_vendor2_vendor2__["a" /* Vendor2Page */],
            __WEBPACK_IMPORTED_MODULE_11__pages_parking_parking__["a" /* ParkingPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_photos_photos__["a" /* PhotosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_stalls_stalls__["a" /* StallsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_misc_misc__["a" /* MiscPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_ten_ten__["a" /* TenPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_three_three__["a" /* ThreePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_five_five__["a" /* FivePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_bikerental_bikerental__["a" /* BikerentalPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_bikeroutes_bikeroutes__["a" /* BikeroutesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_emergency_emergency__["a" /* EmergencyPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_event1_event1__["a" /* Event1Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_event2_event2__["a" /* Event2Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_event3_event3__["a" /* Event3Page */],
            __WEBPACK_IMPORTED_MODULE_26__pages_event4_event4__["a" /* Event4Page */],
            __WEBPACK_IMPORTED_MODULE_27__pages_event5_event5__["a" /* Event5Page */],
            __WEBPACK_IMPORTED_MODULE_28__pages_rules_rules__["a" /* RulesPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_translator_translator__["a" /* TranslatorPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_vendor1_vendor1__["a" /* Vendor1Page */],
            __WEBPACK_IMPORTED_MODULE_32__pages_vendor2_vendor2__["a" /* Vendor2Page */],
            __WEBPACK_IMPORTED_MODULE_33__pages_vendor3_vendor3__["a" /* Vendor3Page */],
            __WEBPACK_IMPORTED_MODULE_34__pages_vendor4_vendor4__["a" /* Vendor4Page */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_7__providers_connectivity_connectivity__["a" /* ConnectivityProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_locations_locations__["a" /* LocationsProvider */],
            __WEBPACK_IMPORTED_MODULE_35_angularfire2_database__["a" /* AngularFireDatabase */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Event1Page = (function () {
    function Event1Page(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    Event1Page.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    Event1Page.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return Event1Page;
}());
Event1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event1',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\event1\event1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\event1\event1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Event1Page);

//# sourceMappingURL=event1.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Event2Page = (function () {
    function Event2Page(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    Event2Page.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    Event2Page.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return Event2Page;
}());
Event2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event2',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\event2\event2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\event2\event2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Event2Page);

//# sourceMappingURL=event2.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Event3Page = (function () {
    function Event3Page(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    Event3Page.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    Event3Page.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return Event3Page;
}());
Event3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event3',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\event3\event3.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\event3\event3.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Event3Page);

//# sourceMappingURL=event3.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Event4Page = (function () {
    function Event4Page(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    Event4Page.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    Event4Page.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return Event4Page;
}());
Event4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event4',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\event4\event4.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\event4\event4.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Event4Page);

//# sourceMappingURL=event4.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Event5Page = (function () {
    function Event5Page(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    Event5Page.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    Event5Page.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return Event5Page;
}());
Event5Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event5',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\event5\event5.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\event5\event5.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Event5Page);

//# sourceMappingURL=event5.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vendor1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bikerental_bikerental__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Vendor1Page = (function () {
    function Vendor1Page(navCtrl, navParams, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.houses = db.list('/tasks/Bicycle/');
        this.detail = navParams.get('detail');
    }
    Vendor1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Vendor1Page');
    };
    Vendor1Page.prototype.openNavDetailsPage = function (house) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bikerental_bikerental__["a" /* BikerentalPage */], { house: house });
    };
    Vendor1Page.prototype.doRefresh = function ($event) {
        window.location.reload();
    };
    return Vendor1Page;
}());
Vendor1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vendor1',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\vendor1\vendor1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list>\n    <ion-item>\n      <p>{{detail.Name}}</p>\n      <p>Fixie Bikes Availablity: {{detail.Fixie}}</p>\n      <p>Mountain Bikes Availablity: {{detail.Mountain}}</p>\n    </ion-item>\n\n<!--     <ion-item>\n      <p>{{detail.name}}</p>\n      <p>Availablity: {{detail.amount}}</p>\n    </ion-item> -->\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\vendor1\vendor1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Vendor1Page);

//# sourceMappingURL=vendor1.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vendor2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Vendor2Page = (function () {
    function Vendor2Page(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor2');
    }
    Vendor2Page.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    Vendor2Page.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return Vendor2Page;
}());
Vendor2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vendor2',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\vendor2\vendor2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 2\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\vendor2\vendor2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Vendor2Page);

//# sourceMappingURL=vendor2.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vendor3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Vendor3Page = (function () {
    function Vendor3Page(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    Vendor3Page.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    Vendor3Page.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return Vendor3Page;
}());
Vendor3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vendor3',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\vendor3\vendor3.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\vendor3\vendor3.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Vendor3Page);

//# sourceMappingURL=vendor3.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vendor4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Vendor4Page = (function () {
    function Vendor4Page(navCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.tasks = db.list('/tasks/Bicycle/Vendor1');
    }
    Vendor4Page.prototype.updateTask = function (key, amount) {
        this.tasks.update(key, { amount: amount });
        this.showAlert();
    };
    Vendor4Page.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Bike Availability has been updated.',
            buttons: ['OK']
        });
        alert.present();
    };
    return Vendor4Page;
}());
Vendor4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vendor4',template:/*ion-inline-start:"C:\Users\User\bandarkuAppTryMaps\src\pages\vendor4\vendor4.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Vendor 1\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async">\n      <p>{{task.name}}</p>\n      <p>Availablity: {{task.amount}}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\bandarkuAppTryMaps\src\pages\vendor4\vendor4.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Vendor4Page);

//# sourceMappingURL=vendor4.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBFZbrLzEkvifrZ-77OIrPKv_Yf9IfnFdk",
        authDomain: "bandarku-app.firebaseapp.com",
        databaseURL: "https://bandarku-app.firebaseio.com",
        projectId: "bandarku-app",
        storageBucket: "bandarku-app.appspot.com",
        messagingSenderId: "183746070699"
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[288]);
//# sourceMappingURL=main.js.map