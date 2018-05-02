webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Component/Me/me.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <h3> Họ tên : {{hocsinh}}</h3>\r\n  <h3> Năm sinh : {{namsinh}}</h3>\r\n    <h3> Tên môn học : {{monhoc.tenmon}} - Mã môn : {{monhoc.mamon}} - Giáo viên : {{monhoc.gv}}</h3>\r\n    <h3> Danh sách : {{danhsach.length}}  - {{danhsach[1]}} - {{danhsach[2]}} </h3>\r\n    <img src=\"{{hinh}}\">\r\n\r\n"

/***/ }),

/***/ "./src/app/Component/Me/me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoangPhucComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HoangPhucComponent = /** @class */ (function () {
    function HoangPhucComponent() {
        this.so = 10;
        this.mausac = true;
        this.hocsinh = "Trần Hoàng Phúc";
        this.namsinh = 1997;
        this.monhoc = { tenmon: "LTW", mamon: 1234, gv: "TTTN" };
        this.danhsach = ["laptop", "dienthoai", "maytinhbang"];
        this.hinh = "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/28378268_2464592733764882_3162934708382365073_n.jpg?_nc_cat=0&oh=77808b135d25b1f913396f7628b057f6&oe=5B7215FE";
    }
    HoangPhucComponent.prototype.Clickhinh = function (e) {
        e.srcElement.src = "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/28377886_2461110197446469_913376788297456992_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHsDiy8xZsMPl1zEOxMgv6MdwlK-DrV5ebuR5humDcivtGFxSPybYLYV6f9mYU-WCE5fq3e7wBGFOHA1DAZMB4PIf16AvHieUIRSed6pXJN4A&oh=13a2ee519bebce952211e15601c093da&oe=5B6C0451";
    };
    HoangPhucComponent.prototype.Onmouseover = function (e) {
        e.srcElement.src = "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/28377886_2461110197446469_913376788297456992_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHsDiy8xZsMPl1zEOxMgv6MdwlK-DrV5ebuR5humDcivtGFxSPybYLYV6f9mYU-WCE5fq3e7wBGFOHA1DAZMB4PIf16AvHieUIRSed6pXJN4A&oh=13a2ee519bebce952211e15601c093da&oe=5B6C0451";
    };
    HoangPhucComponent.prototype.Onmouseout = function (e) {
        e.srcElement.src = "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/28378268_2464592733764882_3162934708382365073_n.jpg?_nc_cat=0&oh=77808b135d25b1f913396f7628b057f6&oe=5B7215FE";
    };
    HoangPhucComponent.prototype.add = function () {
        this.so++;
    };
    HoangPhucComponent.prototype.remove = function (so) {
        this.so--;
    };
    HoangPhucComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-me",
            template: __webpack_require__("./src/app/Component/Me/me.component.html")
        })
    ], HoangPhucComponent);
    return HoangPhucComponent;
}());



/***/ }),

/***/ "./src/app/Component/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagenotfound_pagenotfound_component__ = __webpack_require__("./src/app/Component/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tudien_tudien_component__ = __webpack_require__("./src/app/Component/tudien/tudien.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_form_component__ = __webpack_require__("./src/app/Component/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_module__ = __webpack_require__("./src/app/Component/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detailcontact_detailcontact_component__ = __webpack_require__("./src/app/Component/detailcontact/detailcontact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routesConfig = [
    { path: 'tudien', component: __WEBPACK_IMPORTED_MODULE_4__tudien_tudien_component__["a" /* TudienComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */] },
    // {path : '', redirectTo : '/tudien', pathMatch : 'full'},//mặc định khi chạy lên sẽ hiển thị component này
    // {path : '**', component : PagenotfoundComponent},// khi người dùng nhập vào 1 trang k tồn tại
    { path: 'detailcontact/:id/:name/:phone', component: __WEBPACK_IMPORTED_MODULE_8__detailcontact_detailcontact_component__["a" /* DetailcontactComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_module__["a" /* ContactModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routesConfig),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__tudien_tudien_component__["a" /* TudienComponent */],
                __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_8__detailcontact_detailcontact_component__["a" /* DetailcontactComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/Component/app.componentpipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationComponentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalculationComponentPipe = /** @class */ (function () {
    function CalculationComponentPipe() {
    }
    CalculationComponentPipe.prototype.transform = function (value, isUpper) {
        if (isUpper) {
            return Math.ceil(value);
        }
        return Math.round(value);
    };
    CalculationComponentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'calculate'
        })
    ], CalculationComponentPipe);
    return CalculationComponentPipe;
}());



/***/ }),

/***/ "./src/app/Component/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let contact of contacts\">\n\t<a routerLink=\"/detailcontact/{{contact.id}}/{{contact.name}}/{{contact.phone}}\">{{contact.name}}</a>\n</div>\n"

/***/ }),

/***/ "./src/app/Component/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.contacts = [
            { id: 1, name: 'Trần Hoàng Phúc', phone: '0868969540' },
            { id: 2, name: 'Trần Hoàng Huy', phone: '0868969541' },
            { id: 3, name: 'Trần Hoàng Anh', phone: '0868969542' }
        ];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/Component/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/Component/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/Component/contact/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_component__ = __webpack_require__("./src/app/Component/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routerConfig = [
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_component__["a" /* ContactComponent */] }
];
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routerConfig)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__contact_component__["a" /* ContactComponent */]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/Component/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n\tborder: 2px solid black;\r\n\twidth: 120px;\r\n\theight: auto;\r\n\tpadding: 5px;\r\n\tmargin: 5px;\r\n\tbackground-color: green;\r\n\tborder-radius: 20px;\r\n}"

/***/ }),

/***/ "./src/app/Component/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"header\">\n\t<ng-content select=\".content-header\"></ng-content>\n\t</div>\n\n\t<div class=\"body\">\n\t<ng-content select=\".content-body\"></ng-content>\n\t</div>\n\n\t<div class=\"footer\">\n\t<ng-content select=\".content-footer\"></ng-content>\n\t</div>\n\t\n</div>\n"

/***/ }),

/***/ "./src/app/Component/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/Component/content/content.component.html"),
            styles: [__webpack_require__("./src/app/Component/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/Component/detailcontact/detailcontact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/detailcontact/detailcontact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Tên là : {{name}}</p>\n<p>Số điện thoại là : {{phone}}</p>\n\n"

/***/ }),

/***/ "./src/app/Component/detailcontact/detailcontact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailcontactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailcontactComponent = /** @class */ (function () {
    function DetailcontactComponent(activated) {
        this.activated = activated;
        this.name = '';
        this.phone = '';
    }
    DetailcontactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activated.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.name = params.get('name');
            _this.phone = params.get('phone');
        });
    };
    DetailcontactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detailcontact',
            template: __webpack_require__("./src/app/Component/detailcontact/detailcontact.component.html"),
            styles: [__webpack_require__("./src/app/Component/detailcontact/detailcontact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DetailcontactComponent);
    return DetailcontactComponent;
}());



/***/ }),

/***/ "./src/app/Component/form/form.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n\tborder : 2px solid red;\r\n}\r\n/*có thể để trong file style.css*/"

/***/ }),

/***/ "./src/app/Component/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"getSubmit(formSingIn);\" #formSingIn=\"ngForm\">\n<table>\n\t\t<tr>Email : </tr>\n\t<tr>\n\t\t<td>\n\t\t\t<input type=\"text\" name=\"email\" placeholder=\"15130141@st.hcmuaf.edu.vn\" ngModel required #txtEmail=\"ngModel\" email>\n\t\t\t<p *ngIf=\" txtEmail.touched && txtEmail.errors?.required\"\n\t\t\t>Error Invalid</p>\t\n\t\t\t<p *ngIf=\" txtEmail.touched && txtEmail.errors?.email\"\n\t\t\t>Error Email</p>\n\t\t</td>\n\t</tr>\n\t<tr>Password : </tr>\n\t<tr>\n\t\t<td>\n\t\t\t<input type=\"password\" placeholder=\"Password\" name=\"password\" ngModel required #txtPass=\"ngModel\" minlength=\"6\" pattern=\"[a-z]*\">\n\t\t\t<p *ngIf=\"txtPass.errors?.required\"\n\t\t\t></p>\n\t\t</td>\n\t</tr>\n\t<tr><div ngModelGroup=\"subjects\">\n\t\t<label><input type=\"checkbox\" [ngModel] = \"false\" name=\"Angular\">Angular</label>\n\t\t<label><input type=\"checkbox\" [ngModel] = \"false\" name=\"Javascript\">Javascript</label>\n\t\t<label><input type=\"checkbox\" [ngModel] = \"false\" name=\"Typescript\">Typescript</label>\n\t\t<label><input type=\"checkbox\" [ngModel] = \"false\" name=\"React\">React</label>\n\t\t</div>\n\t</tr>\n\t<tr><button [disabled] = \"formSingIn.invalid\">Submit</button></tr>\n</table>\n</form>\n{{txtEmail.errors | json}}\n{{formSingIn.value | json}}\n{{txtPass.errors | json}}\n"

/***/ }),

/***/ "./src/app/Component/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    // email='';
    // pass='';
    FormComponent.prototype.getSubmit = function (formSingIn) {
        console.log(formSingIn); //value lấy giá trị, controls, dirty trường đó đã được nhập dữ liệu chưa, pristine là nếu chưa nhập thì bằng true, touch và untouch khi nhả focus ra khỏi trường, valid và invalid, pending và submitted
        throw new Error("Error");
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/Component/form/form.component.html"),
            styles: [__webpack_require__("./src/app/Component/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/Component/ip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IpService = /** @class */ (function () {
    function IpService(http) {
        this.http = http;
    }
    IpService.prototype.getIp = function () {
        return this.http.get('http://ip.jsontest.com/')
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson.ip; });
    };
    IpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], IpService);
    return IpService;
}());



/***/ }),

/***/ "./src/app/Component/laptop/laptop.component.css":
/***/ (function(module, exports) {

module.exports = ".circle{\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 50px;\r\n\tbackground-color: yellow;\r\n}\r\n.square{\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tbackground-color: blue;\r\n}"

/***/ }),

/***/ "./src/app/Component/laptop/laptop.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"\" name=\"\" placeholder=\"Nhập tên của bạn\" [(ngModel)]=\"name\" #txt  >\n<!--// style binding -->\n<h1 [style.color]=\"name.length % 2 === 0? 'red' : 'black'\">Tên : {{name}}</h1>\n<code> {{ txt.value | json}}</code>\n\n<h1 [style.color]=\"isTruly ? 'red' : 'black'\">Hinh : </h1>\n<!--// class binding -->\n<div [class.circle] = \"isTruly\" [class.square] = \"!isTruly\"></div> <br>\n<div [class] = \"isTruly ? 'circle' : 'square'\"></div>\n\n\n<!-- ngStyle -->\n<h3 [ngStyle] = \"htd\"> Hồ Thanh Điền</h3>\n\n<!-- ngClass -->\n<div [ngClass] = \"thpp\"> </div> <br>\n\n<!-- ngIf -->\n<button *ngIf=\"isP\">Click</button>\n<button (click) = \"isP = !isP\">THP</button>\n\n<li *ngFor=\"let subject of theface\">\n\t\n\t<p>{{ 'Các thương hiệu là : '  + subject}}</p>\n\n</li>\n<p>STT là : {{id}}</p>\n<p>Tên là : {{namem}}</p>\n<p>Tuổi là : {{age}}</p>"

/***/ }),

/***/ "./src/app/Component/laptop/laptop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaptopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LaptopComponent = /** @class */ (function () {
    function LaptopComponent() {
        this.newEng = " ";
        this.newVn = " ";
        this.isTruly = true;
        this.name = " ";
        this.htd = { color: 'green', fontSize: '50px' };
        //thp = (!this.isTruly ? 'square' : 'circle');
        this.thpp = { square: this.isTruly, circle: !this.isTruly };
        this.isP = false;
        this.theface = ["SamSung", "OPPO", "Apple"];
        this.dic = [
            { id: 1, en: 'go', vn: 'đi', memoried: true },
            { id: 2, en: 'eat', vn: 'ăn', memoried: true },
            { id: 3, en: 'drink', vn: 'uống', memoried: false }
        ];
        this.addDic = { id: 10, en: 'mouse', vn: 'chuột', memoried: true };
    }
    LaptopComponent.prototype.ngOnInit = function () {
    };
    LaptopComponent.prototype.add = function () {
        this.dic.unshift({
            id: this.dic.length + 1,
            en: this.newEng,
            vn: this.newVn,
            memoried: true
        });
        this.newEng = '';
        this.newVn = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LaptopComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LaptopComponent.prototype, "namem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], LaptopComponent.prototype, "age", void 0);
    LaptopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-laptop',
            template: __webpack_require__("./src/app/Component/laptop/laptop.component.html"),
            styles: [__webpack_require__("./src/app/Component/laptop/laptop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LaptopComponent);
    return LaptopComponent;
}());



/***/ }),

/***/ "./src/app/Component/listperson/listperson.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/listperson/listperson.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let person of arrPerson\">\n<app-person [id]=\"person.id\" [name]=\"person.name\" [age]=\"person.age\" ></app-person> không được dùng dấu phẩy nha \n</div> -->\n<!-- <p>Value : {{value}}</p> -->\n<button (click) = \"clickAdd()\">Add for child</button>\n<app-person></app-person>"

/***/ }),

/***/ "./src/app/Component/listperson/listperson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListpersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_person_component__ = __webpack_require__("./src/app/Component/person/person.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListpersonComponent = /** @class */ (function () {
    function ListpersonComponent() {
        this.arrPerson = [
            { id: '12345', name: 'Trần Hoàng Phúc', age: 21 },
            { id: '12481', name: 'Hồ Thanh Điền', age: 20 },
            { id: '32481', name: 'Trần Hoàng Huy', age: 15 },
        ];
        this.value = 0;
    }
    ListpersonComponent.prototype.ngOnInit = function () {
    };
    ListpersonComponent.prototype.addValue = function (addOrSub) {
        addOrSub ? this.value = this.value + 1 : this.value = this.value - 1;
    };
    ListpersonComponent.prototype.clickAdd = function () {
        this.myChild.value++;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__person_person_component__["a" /* PersonComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__person_person_component__["a" /* PersonComponent */])
    ], ListpersonComponent.prototype, "myChild", void 0);
    ListpersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listperson',
            template: __webpack_require__("./src/app/Component/listperson/listperson.component.html"),
            styles: [__webpack_require__("./src/app/Component/listperson/listperson.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListpersonComponent);
    return ListpersonComponent;
}());



/***/ }),

/***/ "./src/app/Component/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/Component/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("./src/app/Component/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("./src/app/Component/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/Component/person/person.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>STT là : {{id}}</p>\n<p>Tên là : {{name}}</p>\n<p>Tuổi là : {{age}}</p> -->\n<!-- <button (click)=\"add();\">Add</button>\n<button (click)=\"sub();\">Sub</button> -->\n<p>Value : {{value}}</p>\n"

/***/ }),

/***/ "./src/app/Component/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        this.value = 0;
        this.clickme = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.add = function () {
        this.clickme.emit(true);
    };
    PersonComponent.prototype.sub = function () {
        this.clickme.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PersonComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PersonComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PersonComponent.prototype, "age", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PersonComponent.prototype, "clickme", void 0);
    PersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-person',
            template: __webpack_require__("./src/app/Component/person/person.component.html"),
            styles: [__webpack_require__("./src/app/Component/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/Component/pipe/pipe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/pipe/pipe.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{toDay | date : 'shortTime'}}<br>\n    {{toDay | date : 'fullDate'}}<br>\n      {{toDay | date : 'full'}}<br>\n        {{toDay | date : 'full':'':'fr'}}\n          {{toDay | date : 'shortTime'}}\n            {{toDay | date : 'shortTime'}}\n            {{array | slice :0 :2}}<br>\n            {{a | currency}}\n      \n</p>\n"

/***/ }),

/***/ "./src/app/Component/pipe/pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PipeComponent = /** @class */ (function () {
    function PipeComponent() {
        this.toDay = Date.now();
        this.array = ['a', 'b', 'c', 'd'];
        this.a = 0;
    }
    PipeComponent.prototype.ngOnInit = function () {
    };
    PipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pipe',
            template: __webpack_require__("./src/app/Component/pipe/pipe.component.html"),
            styles: [__webpack_require__("./src/app/Component/pipe/pipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PipeComponent);
    return PipeComponent;
}());



/***/ }),

/***/ "./src/app/Component/router/router.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/router/router.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/contact\">Contact</a>\n<a routerLink=\"/detailcontact\"> Detail Contact</a>\n<router-outlet></router-outlet> <!-- hiển thị ra các component -->"

/***/ }),

/***/ "./src/app/Component/router/router.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterComponent = /** @class */ (function () {
    function RouterComponent() {
    }
    RouterComponent.prototype.ngOnInit = function () {
    };
    RouterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-router',
            template: __webpack_require__("./src/app/Component/router/router.component.html"),
            styles: [__webpack_require__("./src/app/Component/router/router.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouterComponent);
    return RouterComponent;
}());



/***/ }),

/***/ "./src/app/Component/service/service.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/service/service.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n{{ip}}\n</p>\n"

/***/ }),

/***/ "./src/app/Component/service/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ip_service__ = __webpack_require__("./src/app/Component/ip.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(ipservice) {
        this.ipservice = ipservice;
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ipservice.getIp()
            .then(function (ip) { return _this.ip = ip; })
            .catch(function (err) { return console.log(err); });
    };
    ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-service',
            template: __webpack_require__("./src/app/Component/service/service.component.html"),
            styles: [__webpack_require__("./src/app/Component/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ip_service__["a" /* IpService */]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/Component/tinh-luong/tinh-luong.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/tinh-luong/tinh-luong.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:auto;\">\n<table [ngStyle] = \"tab\">\n\t <caption [ngStyle] = \"cap\">BẢNG TÍNH LƯƠNG</caption>\n\t <tr [ngStyle] = \"bor\" >\n\t\t<th [ngStyle] = \"bor\">STT</th>\n\t\t<th [ngStyle] = \"bor\">HỌ VÀ TÊN</th>\n\t\t<th [ngStyle] = \"bor\">NGÀY SINH</th>\n\t\t<th [ngStyle] = \"bor\">QUÊ QUÁN</th>\n\t\t<th [ngStyle] = \"bor\">HỆ SỐ LƯƠNG</th>\n\t\t<th [ngStyle] = \"bor\">TỔNG SỐ NGÀY LÀM</th>\n\t\t<th [ngStyle] = \"bor\">LƯƠNG(Hệ số lương x Số ngày làm)</th>\n\t</tr>\n\t<tr>\n\t\t<td  [ngStyle] = \"bor\">1</td>\n\t\t<td  [ngStyle] = \"bor\">Trần Hoàng Phúc</td>\n\t\t<td  [ngStyle] = \"bor\">8/2/1997</td>\n\t\t<td  [ngStyle] = \"bor\">An Giang</td>\n\t\t<td  [ngStyle] = \"bor\">3.5</td>\n\t\t<td  [ngStyle] = \"bor\">30</td>\n\t\t<td  [ngStyle] = \"bor\"><button [ngStyle]=\"but\" (click)=\"tinhtienluong()\">Tiền</button></td>\n\t</tr>\n\t<tr >\n\t\t<td  [ngStyle] = \"bor\">2</td>\n\t\t<td  [ngStyle] = \"bor\">Trần Hoàng Huy</td>\n\t\t<td  [ngStyle] = \"bor\">5/4/2003</td>\n\t\t<td  [ngStyle] = \"bor\">An Giang</td>\n\t\t<td  [ngStyle] = \"bor\">3.5</td>\n\t\t<td  [ngStyle] = \"bor\">30</td>\n\t\t<td  [ngStyle] = \"bor\"></td>\n\t</tr>\n\t<tr >\n\t\t<td  [ngStyle] = \"bor\">3</td>\n\t\t<td  [ngStyle] = \"bor\">Hồ Thanh Điền</td>\n\t\t<td  [ngStyle] = \"bor\">6/11/1998</td>\n\t\t<td  [ngStyle] = \"bor\">Củ Chi</td>\n\t\t<td  [ngStyle] = \"bor\">3.5</td>\n\t\t<td  [ngStyle] = \"bor\">30</td>\n\t\t<td  [ngStyle] = \"bor\"></td>\n\t</tr>\n\t<tr >\n\t\t<td  [ngStyle] = \"bor\">4</td>\n\t\t<td  [ngStyle] = \"bor\">Nguyễn Thị Thanh Ngân</td>\n\t\t<td  [ngStyle] = \"bor\">19/3/1997</td>\n\t\t<td  [ngStyle] = \"bor\">An Giang</td>\n\t\t<td  [ngStyle] = \"bor\">3.5</td>\n\t\t<td  [ngStyle] = \"bor\">30</td>\n\t\t<td  [ngStyle] = \"bor\"></td>\n\t</tr>\n\t<tr >\n\t\t<td  [ngStyle] = \"bor\">5</td>\n\t\t<td  [ngStyle] = \"bor\">Đặng Huy Hoàng</td>\n\t\t<td  [ngStyle] = \"bor\">20/10/1994</td>\n\t\t<td  [ngStyle] = \"bor\">TP Hồ Chí Minh</td>\n\t\t<td  [ngStyle] = \"bor\">3.5</td>\n\t\t<td  [ngStyle] = \"bor\">30</td>\n\t\t<td  [ngStyle] = \"bor\"></td>\n\t</tr>\n\t\n\n</table>\n</div>"

/***/ }),

/***/ "./src/app/Component/tinh-luong/tinh-luong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinhLuongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinhLuongComponent = /** @class */ (function () {
    function TinhLuongComponent() {
        this.tab = { border: '2px solid black', width: '100%', height: '400px' };
        this.cap = { fontSize: '40px', fontWeight: 'bold' };
        this.bor = { border: '2px solid black', textAlign: 'center' };
        this.but = { width: '100%', height: '30px' };
    }
    TinhLuongComponent.prototype.ngOnInit = function () {
    };
    TinhLuongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tinh-luong',
            template: __webpack_require__("./src/app/Component/tinh-luong/tinh-luong.component.html"),
            styles: [__webpack_require__("./src/app/Component/tinh-luong/tinh-luong.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TinhLuongComponent);
    return TinhLuongComponent;
}());



/***/ }),

/***/ "./src/app/Component/tudien/tudien.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/tudien/tudien.component.html":
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"showForm\" >\n<input type=\"text\" name=\"\" placeholder=\"English\"   [(ngModel)]=\"newEng\">\n<input type=\"text\" name=\"\" placeholder=\"Vietnamese\" [(ngModel)]=\"newVn\">\n<button (click) = \"add()\">Add</button>\n</div>\n<button (click) =\"showForm = true\" *ngIf=\"!showForm\">Add</button>\n\n\n<select [(ngModel)]=\"status\">\n\t\n\t<option value=\"XEM_TAT_CA\">Xem tất cả</option>\n\t<option value=\"XEM_DA_HOC\">Xem từ đã học</option>\n\t<option value=\"XEM_CHUA_HOC\">Xem từ chưa học</option>\n\n</select>\n\n\n<div *ngFor=\"let words of arrayWords\">\n\t<div *ngIf=\"getStatus(words.memoried)\">\n <ul>\n <li>STT : {{words.id}}</li>\n <li>English : {{words.en}} </li>\n <li>Vietnamese : {{words.vn}} </li>\n <button [ngStyle] = \"{color : words.memoried ? 'red' : 'green' }\" (click)=\"words.memoried = !words.memoried\">Memoried : {{words.memoried ? 'chưa thuộc' : 'đã thuộc'}}</button> \n <button (click)=\"delete(words.id)\">Delete</button>\n </ul>\n</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/Component/tudien/tudien.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TudienComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TudienComponent = /** @class */ (function () {
    function TudienComponent() {
        this.arrayWords = [
            { id: 1, en: 'animals', vn: 'động vật', memoried: true },
            { id: 2, en: 'tiger', vn: 'con hổ', memoried: true },
            { id: 3, en: 'lion', vn: 'sư tử', memoried: true },
            { id: 4, en: 'dog', vn: 'chó', memoried: false },
            { id: 5, en: 'duck', vn: 'vịt', memoried: false },
            { id: 6, en: 'mouse', vn: 'chuột', memoried: true },
            { id: 7, en: 'bird', vn: 'chim', memoried: true },
            { id: 8, en: 'snake', vn: 'rắn', memoried: true },
            { id: 9, en: 'fish', vn: 'cá', memoried: false },
            { id: 10, en: 'cat', vn: 'mèo', memoried: false }
        ];
        this.status = 'XEM_TAT_CA';
        this.newEng = ' ';
        this.newVn = ' ';
        this.showForm = false;
    }
    TudienComponent.prototype.ngOnInit = function () {
    };
    TudienComponent.prototype.add = function () {
        this.arrayWords.push({ id: this.arrayWords.length + 1, en: this.newEng, vn: this.newVn, memoried: false });
        this.newEng = ' ';
        this.newVn = ' ';
        this.showForm = false;
    };
    TudienComponent.prototype.delete = function (id) {
        var index = this.arrayWords.findIndex(function (word) { return word.id === id; });
        this.arrayWords.splice(index, 1);
    };
    TudienComponent.prototype.getStatus = function (memoried) {
        var xemTatCa = this.status === 'XEM_TAT_CA';
        var xemDaHoc = this.status === 'XEM_DA_HOC' && !memoried;
        var xemChuaHoc = this.status === 'XEM_CHUA_HOC' && memoried;
        return xemTatCa || xemDaHoc || xemChuaHoc;
    };
    TudienComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tudien',
            template: __webpack_require__("./src/app/Component/tudien/tudien.component.html"),
            styles: [__webpack_require__("./src/app/Component/tudien/tudien.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TudienComponent);
    return TudienComponent;
}());



/***/ }),

/***/ "./src/app/Component/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/add/operator/toPromise';// thư viện giúp hỗ trợ với observable
//promise nó đối tượng lập trình bất đồng bộ(gọi phương thức nhưng chưa biết khi nào nó trả về giá trị)
var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        // getTemp(city:string){
        // 	const url:string = "http://api.openweathermap.org/data/2.5/weather?appid=45d7255da9aa1d07675790cb2da8629f&units=metric&q=" + city;
        // 	return this.http.get(url)
        // 	.toPromise()
        // 	.then(res => res.json())
        // 	.then(resJson => resJson.main.temp);
        // }
        this.url2 = "https://jsonplaceholder.typicode.com/posts";
    }
    WeatherService.prototype.getPort = function () {
        return this.http.get(this.url2)
            .map(function (response) {
            return response.json();
        })
            .catch(this.haddleError);
    };
    WeatherService.prototype.haddleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/Component/weather/weather.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Component/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <h3>{{ getLoading()}}</h3>\n<input type=\"text\" name=\"\" placeholder=\"city name\" [(ngModel)]=\"txtCityName\">\n<button (click)=\"getWeather();\">Get Temp</button> -->\n<div class=\"container\">\n     <div class=\"row\">\n         <table class=\"table\">\n             <thead class=\"thead-inverse\">\n             <tr>\n                 <th class=\"text-center\">ID</th>\n                 <th class=\"text-center\">Title</th>\n                 <th class=\"text-center\">Body</th>\n             </tr>\n             </thead>\n             <tbody>\n             <tr *ngFor=\"let post of arrIPort\">                \n                 <td class=\"text-center\" style=\"width: 15px;\">{{post.id}}</td>\n                 <td class=\"text-center\" style=\"width: 200px;\">{{post.title}}</td>\n                 <td class=\"text-center\">{{post.body}}</td>\n             </tr>\n             </tbody>\n         </table>\n     </div>\n </div>"

/***/ }),

/***/ "./src/app/Component/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("./src/app/Component/weather.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weather) {
        this.weather = weather;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.getPorts();
    };
    WeatherComponent.prototype.getPorts = function () {
        var _this = this;
        this.weather.getPort()
            .subscribe(function (result) { return _this.arrIPort = result; }, function (error) { return console.log("Error " + error); });
    };
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("./src/app/Component/weather/weather.component.html"),
            styles: [__webpack_require__("./src/app/Component/weather/weather.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-tinh-luong></app-tinh-luong> -->\n<!--<app-laptop id=\"12345\" namem=\"Trần Hoàng Phúc\" age=\"18\"></app-laptop> -->\n<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- <app-tudien></app-tudien>\n --><!-- <app-listperson></app-listperson>\n -->\n<!-- <app-content>\n\t<p class=\"content-header\">Trần Hoàng Phúc</p>\n\t<h3 class=\"content-body\">Trần Hoàng Phúc</h3>\n\t<p class=\"content-footer\">Hồ Thanh Điền</p>\n\t<app-tudien class=\"content-header\"></app-tudien>\n</app-content> -->\n<!-- <app-pipe></app-pipe> -->\n<!-- <p>{{1.2 | calculate : true}}</p>\n<p>{{1.2 | calculate : false}}</p>\n -->\n<!-- <app-service></app-service> -->\n<!-- <app-weather></app-weather> -->\n<app-router></app-router>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Component_Me_me_component__ = __webpack_require__("./src/app/Component/Me/me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Component_laptop_laptop_component__ = __webpack_require__("./src/app/Component/laptop/laptop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Component_tinh_luong_tinh_luong_component__ = __webpack_require__("./src/app/Component/tinh-luong/tinh-luong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Component_person_person_component__ = __webpack_require__("./src/app/Component/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Component_listperson_listperson_component__ = __webpack_require__("./src/app/Component/listperson/listperson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Component_content_content_component__ = __webpack_require__("./src/app/Component/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Component_pipe_pipe_component__ = __webpack_require__("./src/app/Component/pipe/pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Component_app_componentpipe__ = __webpack_require__("./src/app/Component/app.componentpipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Component_service_service_component__ = __webpack_require__("./src/app/Component/service/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Component_ip_service__ = __webpack_require__("./src/app/Component/ip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Component_weather_weather_component__ = __webpack_require__("./src/app/Component/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Component_router_router_component__ = __webpack_require__("./src/app/Component/router/router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Component_app_routing_module__ = __webpack_require__("./src/app/Component/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__Component_Me_me_component__["a" /* HoangPhucComponent */],
                __WEBPACK_IMPORTED_MODULE_6__Component_laptop_laptop_component__["a" /* LaptopComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Component_tinh_luong_tinh_luong_component__["a" /* TinhLuongComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Component_person_person_component__["a" /* PersonComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Component_listperson_listperson_component__["a" /* ListpersonComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Component_content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Component_pipe_pipe_component__["a" /* PipeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Component_app_componentpipe__["a" /* CalculationComponentPipe */],
                __WEBPACK_IMPORTED_MODULE_13__Component_service_service_component__["a" /* ServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__Component_weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_16__Component_router_router_component__["a" /* RouterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__Component_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__Component_ip_service__["a" /* IpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map