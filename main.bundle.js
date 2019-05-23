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

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"card myCard testimonial-card blue-grey lighten-1 z-depth-5\" >\r\n\r\n    <!--Avatar-->\r\n    <div class=\"avatar mx-auto\"><img [src]=\"'assets/images/pro.png'\" class=\"rounded-circle z-depth-1\">\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n        <!--Name-->\r\n        <h4 class=\"card-title\">Elijah Johnson</h4>\r\n        <hr>\r\n        <!--Quotation-->\r\n        <p>Software Engineer, Game Developer, Student, Musician, and aspiring entrepreneur.</p>\r\n    </div>\r\n\r\n</div>\r\n<!--/.Card-->\r\n\r\n\r\n         \r\n\r\n<!--Section: Features v.2-->\r\n<section class=\"text-center\">\r\n\r\n    <h1 class=\"display-4\">About Me</h1>\r\n    <p class=\"lead\">I grew up in Silver Spring, MD. Fortunately, I had the opportunity to attend good schools, make good friends, and pursue a life oriented around education and science. I was exposed to music at a young age and that quickly evolved into a deep creative desire to build things in, and communicate through, various mediums.</p>\r\n    <hr class=\"hr1 \">\r\n\r\n    <!--Section heading-->\r\n    <h1 class=\"display-4 dp1\">Passions</h1>\r\n    <!--Grid row-->\r\n    <div class=\"row text-left\">\r\n\r\n    <!--Grid column-->\r\n\r\n    <div class=\"card cd1 col-md-3 mb-4\">\r\n    <div class=\"card-header blue-grey darken-3 white-text\">\r\n      <div class=\"col-1 col-md-2 float-left\">\r\n        <i class=\"fa fa-music fa-2x\"></i>\r\n        </div>\r\n      \r\n    </div>\r\n    <div class=\"card-body blue-grey lighten-1\">\r\n        <h4 class=\"display-2\">Music</h4>\r\n        <p class=\"card-text sp\">I began playing instruments in elementary school..</p>\r\n        <button type=\"button\" class=\"btn blue-grey darken-3\" (click)=\"style1.show()\" mdbRippleRadius>Learn More</button>\r\n\r\n        <div mdbModal #style1=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-notify modal-info\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header blue-grey darken-3\">\r\n                        <p class=\"heading lead\">Music</p>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"style1.hide()\">\r\n                            <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"text-center\">\r\n                            <p>I picked up the clarinet in elementary school and later began playing guitar and studying musical theory. I learned on my own and developed a deeper appreciation for the instrument and music than before. This lead me to continue my passion for playing and studying music in college.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer justify-content-center\">\r\n                        <a type=\"button\" class=\"btn btn-outline-secondary-modal\" data-dismiss=\"modal\" (click)=\"style1.hide()\" mdbRippleRadius>Close</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--end of modal-->\r\n\r\n    </div>\r\n  </div>\r\n\r\n    <!--Grid column-->\r\n\r\n    <!--Grid column-->\r\n    <div class=\"card cd1 col-md-3 mb-4\">\r\n    <div class=\"card-header blue-grey darken-3 white-text\">\r\n      <div class=\"col-1 col-md-2 float-left\">\r\n        <i class=\"fa fa-code fa-2x\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body blue-grey lighten-1\">\r\n        <h4 class=\"display-2\">Technology</h4>\r\n        <p class=\"card-text sp\">I developed a passion for technology in college..</p>\r\n        \r\n        <button type=\"button\" class=\"btn blue-grey darken-3\" (click)=\"style2.show()\" mdbRippleRadius>Learn More</button>\r\n\r\n        <div mdbModal #style2=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-notify modal-info\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header blue-grey darken-3\">\r\n                        <p class=\"heading lead\">Technology</p>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"style2.hide()\">\r\n                            <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"text-center\">\r\n                            <p>When I came to college, I had a vague idea of how I wanted to rule the world. I pursued finance but had experience with technology, and most of my entrepreneurial ideas were technological. I knew I wanted to be a leader and creator but I discounted programming and the creative freedom it brought. After some convincing from a friend of mine, I realized that there was an easier route to entrepreneurial and creative-freedom; technology. It is my strong belief that, through technology, many of todays problems can be solved. I hope that, perhaps there will come a time in the future where a piece of technology or technological service can help bring two fueding people to an understanding and mutual respect and appreciation for one another.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer justify-content-center\">\r\n                        <a type=\"button\" class=\"btn btn-outline-secondary-modal\" data-dismiss=\"modal\" (click)=\"style2.hide()\" mdbRippleRadius>Close</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--end of modal-->\r\n \r\n    </div>\r\n  </div>\r\n    <!--Grid column-->\r\n\r\n    <!--Grid column-->\r\n    <div class=\"card cd1 col-md-3 mb-4\">\r\n    <div class=\"card-header blue-grey darken-3 white-text\">\r\n      <div class=\"col-1 col-md-2 float-left\">\r\n        <i class=\"fa fa-book fa-2x\"></i>\r\n        </div>\r\n      \r\n    </div>\r\n    <div class=\"card-body blue-grey lighten-1\">\r\n        <h4 class=\"display-2\">Philosophy</h4>\r\n        <p class=\"card-text sp\">My passion for philosophy began when I was a kid..</p>\r\n        \r\n        <button type=\"button\" class=\"btn blue-grey darken-3\" (click)=\"style3.show()\" mdbRippleRadius>Learn More</button>\r\n\r\n        <div mdbModal #style3=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-notify modal-info\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header blue-grey darken-3\">\r\n                        <p class=\"heading lead\">Philosophy</p>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"style3.hide()\">\r\n                            <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"text-center\">\r\n                            <p>As a child, I thought of the world from a caring perspective but this perspective was more often than not, a logical and reasonable one. I spent time thinking of the mysteries of the universe and the answers to them. I have found that what I came up with as a kid has stuck with me and parallels some of the answers great philosophers before me have come up with, likely through the same logical process of hypothesizing. I believe everyone should be lovers of knowledge and free individual thinkers; to me this is the basis of philosophy.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer justify-content-center\">\r\n                        <a type=\"button\" class=\"btn btn-outline-secondary-modal\" data-dismiss=\"modal\" (click)=\"style3.hide()\" mdbRippleRadius>Close</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--end of modal-->\r\n\r\n    </div>\r\n  </div>\r\n    <!--Grid column-->\r\n\r\n    </div>\r\n    <!--Grid row-->\r\n\r\n</section>\r\n<!--Section: Features v.2-->\r\n            \r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = "hr.hr1 {\n  border-top: 2.5px solid rgba(0, 0, 0, 0.4); }\n\nhr {\n  border-top: 2.5px solid rgba(0, 0, 0, 0.2); }\n\np {\n  font-weight: 450;\n  font-size: 1.25rem;\n  color: #212121 !important; }\n\nsection {\n  padding-top: 2rem;\n  background-color: #fffde7;\n  padding-bottom: 2rem; }\n\nsection p {\n    font-weight: 450; }\n\nsection p, section h1, section h4 {\n    color: #212121; }\n\n.card-body {\n  text-align: center; }\n\nh4 {\n  font-size: 2rem;\n  font-weight: bold !important; }\n\n.display-4 {\n  text-align: center;\n  padding-top: 1rem;\n  font-size: 2rem;\n  font-weight: bold; }\n\n.dp1 {\n  margin-bottom: 2rem; }\n\n.display-3 {\n  text-align: auto;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  font-size: 1.5rem;\n  font-weight: 400; }\n\n.display-2 {\n  text-align: auto;\n  margin-top: 0;\n  padding-top: 0;\n  font-size: 1.5rem;\n  font-weight: bold; }\n\ndiv.avatar {\n  margin-top: 2rem;\n  padding-top: 4rem;\n  margin-bottom: 1rem; }\n\ndiv.cd1 {\n  margin-right: auto;\n  margin-left: auto; }\n\n.myCard, .avatar {\n  margin-bottom: 0rem;\n  border-radius: 0rem !important; }\n\n.myCard p, .myCard h4, .avatar p, .avatar h4 {\n    color: #212121; }\n\n.card {\n  padding: 0; }\n\ndiv.card-header {\n  width: 100%; }\n\ni {\n  color: #fffde7; }\n\n.myBtn, .btn {\n  border-radius: .25rem !important; }\n\n.myBtn a, .btn a {\n    color: #212121 !important; }\n\n/* Double Diagonal line */\n\n.lead {\n  padding-bottom: 2rem; }\n\np.lead {\n  font-size: 1.25rem;\n  font-weight: 400; }\n\np.heading {\n  color: #fffde7 !important; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cv_cv_component__ = __webpack_require__("./src/app/cv/cv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prog_prog_component__ = __webpack_require__("./src/app/prog/prog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*customs*/



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'cv', component: __WEBPACK_IMPORTED_MODULE_3__cv_cv_component__["a" /* CvComponent */] },
    { path: 'prog', component: __WEBPACK_IMPORTED_MODULE_4__prog_prog_component__["a" /* ProgComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark blue-grey darken-3 scrolling-navbar\" [containerInside]=\"true\">\r\n  <logo>\r\n      <a class=\"logo navbar-brand\" href=\"\"><strong>Elijah Johnson</strong></a>\r\n  </logo>\r\n  <links>\r\n\r\n      <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\" mdbRippleRadius>\r\n              <a class=\"nav-link\" [routerLink] =\"['']\">About</a>\r\n          </li>\r\n          <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbRippleRadius>\r\n              <a class=\"nav-link\" [routerLink] =\"['cv']\">CV</a>\r\n          </li>\r\n          <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbRippleRadius>\r\n              <a class=\"nav-link\" [routerLink] =\"['prog']\">Projects</a>\r\n          </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav nav-flex-icons\">\r\n          <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n              <a href=\"https://github.com/emasy3\" class=\"nav-link\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\r\n          </li>\r\n          <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n              <a href=\"https://www.linkedin.com/in/emasy3/\" class=\"nav-link\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>\r\n          </li>\r\n      </ul>\r\n  </links>\r\n</mdb-navbar>\r\n<!-- Main -->\r\n\r\n<main>\r\n      <router-outlet></router-outlet>\r\n</main>\r\n\r\n                      \r\n      <!--Footer-->\r\n      <footer class=\"page-footer myFoot font-small blue-grey darken-3 pt-4 mt-4\">\r\n      \r\n          <!--Footer Links-->\r\n          <div class=\"container text-center text-md-left\">\r\n      \r\n              <!-- Footer links -->\r\n              <div class=\"row text-center text-md-left mt-3 pb-3\">\r\n    \r\n                  <!--Second column-->\r\n                  <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3\">\r\n                      <h6 class=\"text-uppercase mb-4 font-weight-bold\">Services</h6>\r\n                      <p><a href=\"#!\">Software Development</a></p>\r\n                      <p><a href=\"#!\">Musical Lessons</a></p>\r\n                  </div>\r\n                  <!--/.Second column-->\r\n      \r\n                  <hr class=\"w-100 clearfix d-md-none\">\r\n      \r\n                  <!--Third column-->\r\n                  <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mt-3\">\r\n                      <h6 class=\"text-uppercase mb-4 font-weight-bold\">Useful links</h6>\r\n                      <p><a href=\"https://github.com/emasy3\" target=\"_blank\">Github</a></p>\r\n                      <p><a href=\"assets/docs/Resume1.2.1.docx\">Download Resume</a></p>\r\n                  </div>\r\n                  <!--/.Third column-->\r\n      \r\n                  <hr class=\"w-100 clearfix d-md-none\">\r\n      \r\n                  <!--Fourth column-->\r\n                  <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3\">\r\n                      <h6 class=\"text-uppercase mb-4 font-weight-bold\">Contact</h6>\r\n                      <p><i class=\"fa fa-home mr-3\"></i> New York, NY, US</p>\r\n                      <p><i class=\"fa fa-home mr-3\"></i> Silver Spring, MD, US</p>\r\n                      <p><i class=\"fa fa-envelope mr-3\"></i> elijah.johnson1@marist.edu</p>\r\n                      <p><i class=\"fa fa-phone mr-3\"></i>240-308-5992</p>\r\n                  </div>\r\n                  <!--/.Fourth column-->\r\n      \r\n              </div>\r\n              <!-- Footer links -->\r\n      \r\n              <hr>\r\n      \r\n              <div class=\"row py-3 d-flex align-items-center\">\r\n      \r\n                  <!--Grid column-->\r\n                  <div class=\"col-md-8 col-lg-8\">\r\n      \r\n                      <!--Copyright-->\r\n                      <p class=\"text-center text-md-left grey-text\">© 2019 Copyright:<strong> Elijah Johnson</strong></p>\r\n                      <!--/.Copyright-->\r\n      \r\n                  </div>\r\n                  <!--Grid column-->\r\n      \r\n                  <!--Grid column-->\r\n                  <div class=\"col-md-4 col-lg-4 ml-lg-0\">\r\n      \r\n                      <!--Social buttons-->\r\n                      <div class=\"text-center text-md-right\">\r\n                          <ul class=\"list-unstyled list-inline\">\r\n                              <li class=\"list-inline-item\"><a href=\"https://github.com/emasy3\" class=\"btn-floating btn-sm rgba-white-slight mx-1\" target=\"_blank\"><i class=\"fa fa-github\"></i></a></li>\r\n                              <li class=\"list-inline-item\"><a href=\"https://www.linkedin.com/in/emasy3/\" class=\"btn-floating btn-sm rgba-white-slight mx-1\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                          </ul>\r\n                      </div>\r\n                      <!--/.Social buttons-->\r\n      \r\n                  </div>\r\n                  <!--Grid column-->\r\n      \r\n              </div>\r\n      \r\n          </div>\r\n      \r\n      </footer>\r\n      <!--/.Footer-->\r\n                      "

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

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
            styles: [__webpack_require__("./src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cv_cv_component__ = __webpack_require__("./src/app/cv/cv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prog_prog_component__ = __webpack_require__("./src/app/prog/prog.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__cv_cv_component__["a" /* CvComponent */],
                __WEBPACK_IMPORTED_MODULE_7__prog_prog_component__["a" /* ProgComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cv/cv.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"cv view\">\r\n    <img [src]=\"'assets/images/CV-1.png'\" alt=\"image\">\r\n    <div class=\"mask flex-center waves-effect waves-light rgba-grey-light\">\r\n    </div>\r\n</div>\r\n                "

/***/ }),

/***/ "./src/app/cv/cv.component.scss":
/***/ (function(module, exports) {

module.exports = "div.cv {\n  width: 66%;\n  padding-top: 4rem;\n  margin-right: 16.5%;\n  margin-left: 16.5%; }\n  div.cv img {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvComponent; });
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

var CvComponent = /** @class */ (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cv',
            template: __webpack_require__("./src/app/cv/cv.component.html"),
            styles: [__webpack_require__("./src/app/cv/cv.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CvComponent);
    return CvComponent;
}());



/***/ }),

/***/ "./src/app/prog/prog.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--Projects section v.4-->\r\n  <section class=\"text-center pb-3\">\r\n        \r\n    <!--Section heading-->\r\n    <h2 class=\"headr font-weight-bold h1\">\r\n        <strong>Programming</strong>\r\n    </h2>\r\n    <!--Section description-->\r\n    <p class=\"pb-5 text-center\">A feed of my programming projects.</p>\r\n    \r\n    <!--Grid row-->\r\n    <div class=\"row\">\r\n    \r\n        <!--Grid column-->\r\n\r\n        <div class=\" half1 col-md-6 mb-4\">\r\n            <div class=\"card card-image\">\r\n                <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded\">\r\n                    <div>\r\n                        <h6 class=\"green-text\">\r\n                            <strong>Personal Site</strong>\r\n                        </h6>\r\n                        <h3 class=\"py-3 font-weight-bold\">\r\n                            <strong>HTML/Typescript/JS/SCSS</strong>\r\n                        </h3>\r\n                        <p class=\"pb-3\">This project is the site you are on! It hosts my projects and consildates my ideas and life as one brand.\r\n                        </p>\r\n                        <a href=\"https://github.com/emasy3/personalSite\" class=\"btn blue-grey darken-3 btn-rounded btn-md\" target=\"_blank\">\r\n                            <i class=\"fa fa-clone left\"></i> View project</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Grid column-->\r\n    \r\n        <!--Grid column-->\r\n        <div class=\" half1 col-md-6 mb-4\">\r\n            <div class=\"card card-image\">\r\n                <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded\">\r\n                    <div>\r\n                        <h6 class=\"green-text\">\r\n                            <strong>Arduino Calculator</strong>\r\n                        </h6>\r\n                        <h3 class=\"py-3 font-weight-bold\">\r\n                            <strong>C++</strong>\r\n                        </h3>\r\n                        <p class=\"pb-3\">This project was buit using an arduino. I built a binary calculator that output results to an LCD screen on the arduino. To run this yourself, you'll have to look at the source code to figure out how each pin is used and build your board accordingly. Project ReadME COMING SOON.\r\n                        </p>\r\n                        <a href=\"https://github.com/emasy3/Arduino-Calculator\" class=\"btn blue-grey darken-3 btn-rounded btn-md\">\r\n                            <i class=\"fa fa-clone left\"></i> View project</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Grid column-->\r\n    \r\n        <!--Grid column-->\r\n        <div class=\" half1 col-md-6 mb-4\">\r\n            <div class=\"card card-image\">\r\n                <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded\">\r\n                    <div>\r\n                        <h6 class=\"green-text\">\r\n                            <strong>C++ Interpreter</strong>\r\n                        </h6>\r\n                        <h3 class=\"py-3 font-weight-bold\">\r\n                            <strong>C++/C</strong>\r\n                        </h3>\r\n                        <p class=\"pb-3\">This project is a interpreter that works using a predefined toy language and compiles this into C++ source code. Updated ReadME with clear instructions for running COMING SOON.\r\n                        </p>\r\n                        <a href=\"https://github.com/emasy3/Cplpl-Interpreter\" class=\"btn blue-grey darken-3 btn-rounded btn-md\">\r\n                            <i class=\"fa fa-clone left\"></i> View project</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Grid column-->\r\n    \r\n        <!--Grid column-->\r\n        <div class=\" half1 col-md-6 mb-4\">\r\n            <div class=\"card card-image\">\r\n                <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded\">\r\n                    <div>\r\n                        <h6 class=\"green-text\">\r\n                            <strong>6502 Web Operating System</strong>\r\n                        </h6>\r\n                        <h3 class=\"py-3 font-weight-bold\">\r\n                            <strong>Typescript</strong>\r\n                        </h3>\r\n                        <p class=\"pb-3\">This project is a web based typescript operating system. The OS is based on the 6502 OS and runs hexadecimal code on simulated hardware.\r\n                        </p>\r\n                        <a href=\"https://github.com/emasy3/OS_Repo\" class=\"btn blue-grey darken-3 btn-rounded btn-md\">\r\n                            <i class=\"fa fa-clone left\"></i> View project</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Grid column-->\r\n    \r\n    </div>\r\n    <!--Grid row-->\r\n    <hr size=\"100px\">\r\n    <!--Section heading-->\r\n    <h2 class=\"headr1 font-weight-bold h1\">\r\n        <strong>Music</strong>\r\n    </h2>\r\n    <!--Section description-->\r\n    <p class=\"pb-5 text-center\">A soon to be feed of my most recent musical projects.</p>\r\n    \r\n    <!--Grid row-->\r\n    <div class=\"row\">\r\n    \r\n        <!--Grid column-->\r\n        <div class=\" half1 col-md-6 mb-4\">\r\n            <div class=\"card card-image\">\r\n                <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded\">\r\n                    <div>\r\n                        <h6 class=\"green-text\">\r\n                            <strong>Coming Soon</strong>\r\n                        </h6>\r\n                        <h3 class=\"py-3 font-weight-bold\">\r\n                            <strong>Coming Soon</strong>\r\n                        </h3>\r\n                        <p class=\"pb-3\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio\r\n                            vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed\r\n                            qui, dolorum!\r\n                        </p>\r\n                        <a class=\"btn blue-grey darken-3 btn-rounded btn-md\">\r\n                            <i class=\"fa fa-clone left\"></i> View project</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Grid column-->\r\n    \r\n        <!--Grid column-->\r\n        <div class=\" half1 col-md-6 mb-4\">\r\n            <div class=\"card card-image\">\r\n                <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded\">\r\n                    <div>\r\n                        <h6 class=\"green-text\">\r\n                            <strong> Coming Soon</strong>\r\n                        </h6>\r\n                        <h3 class=\"py-3 font-weight-bold\">\r\n                            <strong>Coming Soon</strong>\r\n                        </h3>\r\n                        <p class=\"pb-3\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio\r\n                            vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed\r\n                            qui, dolorum!\r\n                        </p>\r\n                        <a class=\"btn blue-grey darken-3 btn-rounded btn-md\">\r\n                            <i class=\"fa fa-clone left\"></i> View project</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Grid column-->\r\n    \r\n    </div>\r\n    <br>\r\n    <!--Grid row-->\r\n    \r\n</section>\r\n<!--Projects section v.4-->\r\n            "

/***/ }),

/***/ "./src/app/prog/prog.component.scss":
/***/ (function(module, exports) {

module.exports = ".half1 {\n  text-align: center;\n  margin-left: 0;\n  margin-right: 0;\n  width: 40%;\n  padding-left: 2rem;\n  padding-right: 2rem; }\n\n.headr {\n  padding-top: 9rem;\n  padding-bottom: 2rem; }\n\n.headr1 {\n  padding-top: 4rem;\n  padding-bottom: 2rem; }\n\nhr {\n  border-top: 2.5px solid rgba(0, 0, 0, 0.5); }\n\np.pb-5 {\n  color: #212121 !important;\n  font-size: 1.25rem;\n  font-weight: 450; }\n\np.pb-3 {\n  font-size: 1.25rem;\n  font-weight: 450; }\n"

/***/ }),

/***/ "./src/app/prog/prog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgComponent; });
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

var ProgComponent = /** @class */ (function () {
    function ProgComponent() {
    }
    ProgComponent.prototype.ngOnInit = function () {
    };
    ProgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prog',
            template: __webpack_require__("./src/app/prog/prog.component.html"),
            styles: [__webpack_require__("./src/app/prog/prog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgComponent);
    return ProgComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
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