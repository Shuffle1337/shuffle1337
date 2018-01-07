webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/activable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Activable = (function () {
    function Activable(element) {
        this.element = element;
        this.narrativeIndex = 0;
        this.currentNarrativeIndex = 0;
        this.isActivated = false;
        this.top = Infinity;
        //   this.top = this.getOffsetTop(this.element.nativeElement);
    }
    Activable.prototype.onResize = function (event) {
        this.top = this.getOffsetTop(this.element.nativeElement);
    };
    Activable.prototype.activate = function () {
        this.isActivated = true;
    };
    ;
    Activable.prototype.updateTop = function () {
        // console.log('===================')
        this.top = this.getOffsetTop(this.element.nativeElement);
        // console.log('===================')
    };
    Activable.prototype.getOffsetTop = function (element) {
        var offset = 0;
        if (element) {
            offset = element.offsetTop;
            if (element.offsetParent !== document.body) {
                offset += this.getOffsetTop(element.offsetParent);
            }
        }
        return offset;
    };
    Activable.prototype.ngOnInit = function () {
        this.top = this.getOffsetTop(this.element.nativeElement);
    };
    Activable.prototype.deactivate = function () {
        this.isActivated = false;
    };
    return Activable;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('narrativeIndex'),
    __metadata("design:type", Object)
], Activable.prototype, "narrativeIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('currentNarrativeIndex'),
    __metadata("design:type", Object)
], Activable.prototype, "currentNarrativeIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Activable.prototype, "onResize", null);
//# sourceMappingURL=activable.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-page>\n</app-main-page>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paging_service_service__ = __webpack_require__("../../../../../src/app/paging-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page0_page0_component__ = __webpack_require__("../../../../../src/app/page0/page0.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__p_p_component__ = __webpack_require__("../../../../../src/app/p/p.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loading_interface_loading_interface_component__ = __webpack_require__("../../../../../src/app/loading-interface/loading-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dot_line_dot_line_component__ = __webpack_require__("../../../../../src/app/dot-line/dot-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__yellow_ramp_yellow_ramp_component__ = __webpack_require__("../../../../../src/app/yellow-ramp/yellow-ramp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__enter_button_enter_button_component__ = __webpack_require__("../../../../../src/app/enter-button/enter-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__global_navigation_global_navigation_component__ = __webpack_require__("../../../../../src/app/global-navigation/global-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__incision_incision_component__ = __webpack_require__("../../../../../src/app/incision/incision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__incision_tor_incision_tor_component__ = __webpack_require__("../../../../../src/app/incision-tor/incision-tor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__extra_extra_component__ = __webpack_require__("../../../../../src/app/extra/extra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__title_title_component__ = __webpack_require__("../../../../../src/app/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__infographics_about_tor_infographics_about_tor_component__ = __webpack_require__("../../../../../src/app/infographics-about-tor/infographics-about-tor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__side_photo_side_photo_component__ = __webpack_require__("../../../../../src/app/side-photo/side-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__link_block_link_block_component__ = __webpack_require__("../../../../../src/app/link-block/link-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__incision_silkroad_incision_silkroad_component__ = __webpack_require__("../../../../../src/app/incision-silkroad/incision-silkroad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__incision_freenet_incision_freenet_component__ = __webpack_require__("../../../../../src/app/incision-freenet/incision-freenet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__infographics_freenet_infographics_freenet_component__ = __webpack_require__("../../../../../src/app/infographics-freenet/infographics-freenet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__infographics_i2p_infographics_i2p_component__ = __webpack_require__("../../../../../src/app/infographics-i2p/infographics-i2p.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__infographics_marketplaces_infographics_marketplaces_component__ = __webpack_require__("../../../../../src/app/infographics-marketplaces/infographics-marketplaces.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__incision_protocols_incision_protocols_component__ = __webpack_require__("../../../../../src/app/incision-protocols/incision-protocols.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__infographics_stuff_infographics_stuff_component__ = __webpack_require__("../../../../../src/app/infographics-stuff/infographics-stuff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__stuff_item_stuff_item_component__ = __webpack_require__("../../../../../src/app/stuff-item/stuff-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__sharing_block_sharing_block_component__ = __webpack_require__("../../../../../src/app/sharing-block/sharing-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__page1_page1_component__ = __webpack_require__("../../../../../src/app/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__page_directive__ = __webpack_require__("../../../../../src/app/page.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__infographics_regions_infographics_regions_component__ = __webpack_require__("../../../../../src/app/infographics-regions/infographics-regions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__infographics_scheme_infographics_scheme_component__ = __webpack_require__("../../../../../src/app/infographics-scheme/infographics-scheme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__incision_grower_incision_grower_component__ = __webpack_require__("../../../../../src/app/incision-grower/incision-grower.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__incision_interview_incision_interview_component__ = __webpack_require__("../../../../../src/app/incision-interview/incision-interview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__infographics_garant_infographics_garant_component__ = __webpack_require__("../../../../../src/app/infographics-garant/infographics-garant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__infographics_vacancy_infographics_vacancy_component__ = __webpack_require__("../../../../../src/app/infographics-vacancy/infographics-vacancy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__infographics_roles_infographics_roles_component__ = __webpack_require__("../../../../../src/app/infographics-roles/infographics-roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__incision_roles_incision_roles_component__ = __webpack_require__("../../../../../src/app/incision-roles/incision-roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__incision_card_incision_card_component__ = __webpack_require__("../../../../../src/app/incision-card/incision-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__incision_abracadabra_incision_abracadabra_component__ = __webpack_require__("../../../../../src/app/incision-abracadabra/incision-abracadabra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__page2_page2_component__ = __webpack_require__("../../../../../src/app/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__fskn_infographics_fskn_infographics_component__ = __webpack_require__("../../../../../src/app/fskn-infographics/fskn-infographics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__infographics_mvd_infographics_mvd_component__ = __webpack_require__("../../../../../src/app/infographics-mvd/infographics-mvd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__incision_fskn_incision_fskn_component__ = __webpack_require__("../../../../../src/app/incision-fskn/incision-fskn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__cut_out_cut_out_component__ = __webpack_require__("../../../../../src/app/cut-out/cut-out.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__page0_page0_component__["a" /* Page0Component */],
            __WEBPACK_IMPORTED_MODULE_10__p_p_component__["a" /* PComponent */],
            __WEBPACK_IMPORTED_MODULE_11__loading_interface_loading_interface_component__["a" /* LoadingInterfaceComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dot_line_dot_line_component__["a" /* DotLineComponent */],
            __WEBPACK_IMPORTED_MODULE_13__yellow_ramp_yellow_ramp_component__["a" /* YellowRampComponent */],
            __WEBPACK_IMPORTED_MODULE_14__enter_button_enter_button_component__["a" /* EnterButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_15__global_navigation_global_navigation_component__["a" /* GlobalNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__incision_incision_component__["a" /* IncisionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__incision_tor_incision_tor_component__["a" /* IncisionTorComponent */],
            __WEBPACK_IMPORTED_MODULE_19__extra_extra_component__["a" /* ExtraComponent */],
            __WEBPACK_IMPORTED_MODULE_20__title_title_component__["a" /* TitleComponent */],
            __WEBPACK_IMPORTED_MODULE_21__infographics_about_tor_infographics_about_tor_component__["a" /* InfographicsAboutTorComponent */],
            __WEBPACK_IMPORTED_MODULE_22__side_photo_side_photo_component__["a" /* SidePhotoComponent */],
            __WEBPACK_IMPORTED_MODULE_23__link_block_link_block_component__["a" /* LinkBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_24__incision_silkroad_incision_silkroad_component__["a" /* IncisionSilkroadComponent */],
            __WEBPACK_IMPORTED_MODULE_25__incision_freenet_incision_freenet_component__["a" /* IncisionFreenetComponent */],
            __WEBPACK_IMPORTED_MODULE_26__infographics_freenet_infographics_freenet_component__["a" /* InfographicsFreenetComponent */],
            __WEBPACK_IMPORTED_MODULE_27__infographics_i2p_infographics_i2p_component__["a" /* InfographicsI2pComponent */],
            __WEBPACK_IMPORTED_MODULE_28__infographics_marketplaces_infographics_marketplaces_component__["a" /* InfographicsMarketplacesComponent */],
            __WEBPACK_IMPORTED_MODULE_29__incision_protocols_incision_protocols_component__["a" /* IncisionProtocolsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_31__infographics_stuff_infographics_stuff_component__["a" /* InfographicsStuffComponent */],
            __WEBPACK_IMPORTED_MODULE_32__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_33__stuff_item_stuff_item_component__["a" /* StuffItemComponent */],
            __WEBPACK_IMPORTED_MODULE_34__sharing_block_sharing_block_component__["a" /* SharingBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_35__page1_page1_component__["a" /* Page1Component */],
            __WEBPACK_IMPORTED_MODULE_36__page_directive__["a" /* PageDirective */],
            __WEBPACK_IMPORTED_MODULE_37__infographics_regions_infographics_regions_component__["a" /* InfographicsRegionsComponent */],
            __WEBPACK_IMPORTED_MODULE_38__infographics_scheme_infographics_scheme_component__["a" /* InfographicsSchemeComponent */],
            __WEBPACK_IMPORTED_MODULE_39__incision_grower_incision_grower_component__["a" /* IncisionGrowerComponent */],
            __WEBPACK_IMPORTED_MODULE_40__incision_interview_incision_interview_component__["a" /* IncisionInterviewComponent */],
            __WEBPACK_IMPORTED_MODULE_41__infographics_garant_infographics_garant_component__["a" /* InfographicsGarantComponent */],
            __WEBPACK_IMPORTED_MODULE_42__infographics_vacancy_infographics_vacancy_component__["a" /* InfographicsVacancyComponent */],
            __WEBPACK_IMPORTED_MODULE_43__infographics_roles_infographics_roles_component__["a" /* InfographicsRolesComponent */],
            __WEBPACK_IMPORTED_MODULE_44__incision_roles_incision_roles_component__["a" /* IncisionRolesComponent */],
            __WEBPACK_IMPORTED_MODULE_45__incision_card_incision_card_component__["a" /* IncisionCardComponent */],
            __WEBPACK_IMPORTED_MODULE_46__incision_abracadabra_incision_abracadabra_component__["a" /* IncisionAbracadabraComponent */],
            __WEBPACK_IMPORTED_MODULE_47__page2_page2_component__["a" /* Page2Component */],
            __WEBPACK_IMPORTED_MODULE_48__fskn_infographics_fskn_infographics_component__["a" /* FsknInfographicsComponent */],
            __WEBPACK_IMPORTED_MODULE_49__infographics_mvd_infographics_mvd_component__["a" /* InfographicsMvdComponent */],
            __WEBPACK_IMPORTED_MODULE_50__incision_fskn_incision_fskn_component__["a" /* IncisionFsknComponent */],
            __WEBPACK_IMPORTED_MODULE_51__cut_out_cut_out_component__["a" /* CutOutComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__page0_page0_component__["a" /* Page0Component */], __WEBPACK_IMPORTED_MODULE_35__page1_page1_component__["a" /* Page1Component */], __WEBPACK_IMPORTED_MODULE_47__page2_page2_component__["a" /* Page2Component */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__paging_service_service__["a" /* PagingServiceService */], __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" [class.activated]=\"this.isActivated\" (click)=\"this.clickBody()\" [class.magenta]=\"this.magenta\" [class.blue]=\"this.blue\">\n    <!--<ng-content></ng-content>-->\n    <div class=\"inner\">\n        <div class=\"paginator\" [class.disabled]=\"this.messages.length<2\">\n            <div class=\"point\" *ngFor=\"let item of messages;let i=index\" [class.current]=\"i==this.current\"></div>\n\n        </div>\n\n        <div class=\"messages\">\n            <div class=\"message\">\n                <div class=\"author\" [class.magenta]=\"this.magenta\" [class.blue]=\"this.blue\">\n                    <div class=\"wrapper\">{{this.speaker}} ({{this.time}})</div>\n                </div>\n\n                <div class=\"texts\">\n                    <div class=\"main\" [innerHTML]=\"this.message\">\n\n                    </div>\n\n                    <ng-container *ngFor=\"let item of messages;let i=index\">\n                        <div class=\"text\" [class.show]=\"i==this.current\" [style.left]=\"-i*100+'%'\" [innerHTML]=\"item\">\n\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"navigation\" [class.disabled]=\"this.messages.length<2\">\n            <div class=\"arrow left\" [class.magenta]=\"this.magenta\" [class.blue]=\"this.blue\" [class.disabled]=\"this.current==0\" (click)=\"this.show(-1)\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 10.12 17.41\">\n                    <defs>\n                        <style>\n                            .cls-1,\n                            .cls-3 {\n                                fill: none;\n                            }\n\n                            .cls-2 {\n                                clip-path: url(#clip-path);\n                            }\n\n                            .cls-3 {\n\n                                stroke-width: 2px;\n                            }\n                        </style>\n                        <clipPath id=\"clip-path\">\n                            <rect class=\"cls-1\" width=\"10.12\" height=\"17.41\" />\n                        </clipPath>\n                    </defs>\n                    <title>arrow-left</title>\n                    <g id=\"Layer_2\" data-name=\"Layer 2\">\n                        <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n                            <g class=\"cls-2\">\n                                <polyline class=\"cls-3\" points=\"9.41 16.71 1.41 8.71 9.41 0.71\" />\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"arrow right\" [class.magenta]=\"this.magenta\" (click)=\"this.show(1)\" [class.disabled]=\"this.current==this.messages.length-1\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 10.12 17.41\">\n                    <defs>\n                        <style>\n                            .cls-1,\n                            .cls-3 {\n                                fill: none;\n                            }\n\n                            .cls-2 {\n                                clip-path: url(#clip-path);\n                            }\n\n                            .cls-3 {\n\n                                stroke-width: 2px;\n                            }\n                        </style>\n                        <clipPath id=\"clip-path\">\n                            <rect class=\"cls-1\" width=\"10.12\" height=\"17.41\" />\n                        </clipPath>\n                    </defs>\n                    <title>arrow-right</title>\n                    <g id=\"Layer_2\" data-name=\"Layer 2\">\n                        <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n                            <g class=\"cls-2\">\n                                <polyline class=\"cls-3\" points=\"0.71 0.71 8.71 8.71 0.71 16.71\" />\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n            </div>\n        </div>\n\n\n    </div>\n\n\n</div>\n\n\n<div class=\"hidden\">\n    <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  width: 100%;\n  background-color: #ffc800;\n  padding: 16px;\n  position: relative;\n  transition: -webkit-transform 0.5s 0.5s ease;\n  transition: transform 0.5s 0.5s ease;\n  transition: transform 0.5s 0.5s ease, -webkit-transform 0.5s 0.5s ease;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n}\n.body.magenta {\n  background-color: #aa50ff;\n}\n.body.blue {\n  background-color: #3880ff;\n}\n@media (max-width: 767px) {\n  .body {\n    padding: 0;\n  }\n}\n.body.activated {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n.body .inner {\n  border: 2px solid black;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 32px;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .body .inner {\n    padding-bottom: 84px;\n    padding-top: 24px;\n    border: none;\n  }\n}\n.body .inner .paginator {\n  text-align: right;\n  padding-right: 84px;\n  font-size: 0;\n  margin-bottom: 22px;\n}\n@media (max-width: 767px) {\n  .body .inner .paginator {\n    position: absolute;\n    bottom: 16px;\n    text-align: center;\n    padding: 0;\n    width: 100%;\n  }\n}\n.body .inner .paginator.disabled {\n  opacity: 0;\n}\n.body .inner .paginator .point {\n  display: inline-block;\n  border: 2px solid black;\n  border-top: none;\n  width: 16px;\n  height: 14px;\n  transition: ease 0.3s background-color;\n}\n@media (max-width: 767px) {\n  .body .inner .paginator .point {\n    border-top: 2px solid black;\n    height: 16px;\n  }\n}\n.body .inner .paginator .point:not(:last-child) {\n  margin-right: 16px;\n}\n.body .inner .paginator .point.current {\n  background-color: black;\n}\n.body .inner .messages {\n  width: 100%;\n  height: 100%;\n  padding-left: 16%;\n  padding-right: 16%;\n  position: relative;\n  white-space: nowrap;\n  font-size: 0;\n}\n@media (max-width: 767px) {\n  .body .inner .messages {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.body .inner .messages .message {\n  position: relative;\n  top: 0;\n}\n.body .inner .messages .message .author {\n  background-color: black;\n  display: inline-block;\n  padding-bottom: 6px;\n  margin-bottom: 20px;\n}\n.body .inner .messages .message .author .wrapper {\n  font-family: \"Roboto Mono\";\n  font-size: 20px;\n  font-weight: bold;\n  color: #ffc800;\n  line-height: 13px;\n}\n.body .inner .messages .message .author.magenta .wrapper {\n  color: #aa50ff;\n}\n.body .inner .messages .message .author.blue .wrapper {\n  color: #3880ff;\n}\n.body .inner .messages .message .texts {\n  position: relative;\n  white-space: nowrap;\n  font-size: 0;\n  vertical-align: top;\n  overflow: hidden;\n}\n.body .inner .messages .message .texts .main {\n  font-family: \"Roboto Mono\";\n  font-size: 20px;\n  color: black;\n  display: inline-block;\n  white-space: normal;\n  position: relative;\n  opacity: 1;\n  transition: ease 0.3s opacity;\n  vertical-align: top;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.body .inner .messages .message .texts .main /deep/ img {\n  height: 244px;\n}\n.body .inner .messages .message .texts .main:after {\n  content: \"\";\n  display: inline-block;\n  width: 3px;\n  height: 20px;\n  background-color: black;\n  -webkit-animation: blink 0.7s infinite;\n          animation: blink 0.7s infinite;\n  vertical-align: middle;\n}\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.body .inner .messages .message .texts .text {\n  pointer-events: none;\n  font-family: \"Roboto Mono\";\n  font-size: 20px;\n  color: black;\n  display: inline-block;\n  white-space: normal;\n  position: relative;\n  opacity: 0;\n  transition: ease 0.3s opacity;\n  vertical-align: top;\n}\n.body .inner .navigation {\n  position: absolute;\n  bottom: 18px;\n  right: 16px;\n}\n@media (max-width: 767px) {\n  .body .inner .navigation {\n    display: none;\n  }\n}\n.body .inner .navigation.disabled {\n  display: none;\n}\n.body .inner .navigation .arrow {\n  width: 48px;\n  height: 48px;\n  background-color: black;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 11px 17px;\n  cursor: pointer;\n  transition: ease 0.3s background-color, opacity 0.3s ease;\n  position: relative;\n}\n.body .inner .navigation .arrow polyline {\n  stroke: #ffc800;\n}\n.body .inner .navigation .arrow.magenta polyline {\n  stroke: #aa50ff;\n}\n.body .inner .navigation .arrow.blue polyline {\n  stroke: #3880ff;\n}\n.body .inner .navigation .arrow:not(:last-child) {\n  margin-bottom: 18px;\n}\n.body .inner .navigation .arrow:hover {\n  background-color: #1a1a1a;\n}\n.body .inner .navigation .arrow svg {\n  width: 48px;\n  height: 22px;\n  top: 50%;\n  position: absolute;\n  margin-top: -11px;\n}\n.body .inner .navigation .arrow.disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.hidden {\n  display: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = ChatComponent_1 = (function (_super) {
    __extends(ChatComponent, _super);
    function ChatComponent(element, sanitizer) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.sanitizer = sanitizer;
        _this.speaker = 'Orange';
        _this.magenta = false;
        _this.blue = false;
        _this.messages = [];
        _this.current = 0;
        _this.message = '';
        _this.time = '';
        _this.time = Math.random() < 0.5 ? '02:28 AM' : '04:20 PM';
        return _this;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.enterFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame || function (callback) {
            setTimeout(callback, 1000 / 60);
        };
        this.enterFrameHandler();
        var hammertime = new __WEBPACK_IMPORTED_MODULE_3_hammerjs__(this.element.nativeElement, { threshold: 10 });
        hammertime.on('swipeleft', function (ev) {
            if (window.innerWidth < 768) {
                _this.show(1);
            }
        });
        hammertime.on('swiperight', function (ev) {
            if (window.innerWidth < 768) {
                _this.show(-1);
            }
        });
    };
    ChatComponent.prototype.clickBody = function () {
        if (window.innerWidth < 768) {
            if (this.messages.length !== 1) {
                if (this.current === this.messages.length - 1) {
                    this.current = -1;
                }
                this.show(1);
            }
        }
    };
    ChatComponent.prototype.enterFrameHandler = function () {
        var _this = this;
        this.enterFrame.call(window, function () {
            _this.enterFrameHandler();
        });
        if (this.isActivated && this.messages[this.current] && this.message.length < this.messages[this.current].length) {
            var newDate = new Date().getTime();
            var len = Math.floor((newDate - this.lastDate) / 10);
            if (len > this.messages[this.current].length - this.message.length) {
                this.message = this.messages[this.current];
            }
            else {
                this.message = this.messages[this.current].substr(0, this.message.length + len);
            }
            this.lastDate = newDate;
        }
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        var divs = this.element.nativeElement.getElementsByClassName('item');
        //  console.log(divs, divs.length);
        for (var i = 0; i < divs.length; i++) {
            this.messages.push(divs.item(i).innerHTML);
            //  console.log(divs.item(i));
        }
        // console.log('length:', this.messages.length);
    };
    ChatComponent.prototype.activate = function () {
        // console.log('activate chat');
        this.show(0);
        _super.prototype.activate.call(this);
    };
    ChatComponent.prototype.show = function (delta) {
        if (this.current + delta >= 0 && this.current + delta <= this.messages.length - 1) {
            this.lastDate = new Date().getTime();
            this.current += delta;
            if (this.messages[this.current].indexOf('img') === -1) {
                if (window.innerWidth > 767) {
                    this.message = '';
                }
                else {
                    this.message = this.messages[this.current];
                }
            }
            else {
                this.message = this.messages[this.current];
            }
            //  console.log(this.current, this.messages[this.current]);
            //   this.startSequence();
        }
    };
    return ChatComponent;
}(__WEBPACK_IMPORTED_MODULE_0__activable__["a" /* Activable */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])('speaker'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "speaker", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])('magenta'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "magenta", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])('blue'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "blue", void 0);
ChatComponent = ChatComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* forwardRef */])(function () { return ChatComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], ChatComponent);

var ChatComponent_1, _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/cut-out/cut-out.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" [class.down]=\"this.down\" [class.white]=\"!this.global.color\">\n  <div class=\"item\" *ngFor=\"let item of nums;let i=index\" [class.colored]=\"item>0.3\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cut-out/cut-out.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  font-size: 0;\n}\n.body.down {\n  top: auto;\n  bottom: 0;\n}\n.body .item {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  transition: ease 0.3s background-color;\n}\n.body .item.colored {\n  background-color: black;\n}\n.body.white .item.colored {\n  background-color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cut-out/cut-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CutOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CutOutComponent = (function () {
    function CutOutComponent(global) {
        this.global = global;
        this.down = false;
    }
    CutOutComponent.prototype.ngOnInit = function () {
        this.nums = this.genArray(62);
    };
    CutOutComponent.prototype.genArray = function (num) {
        var returnArray = [];
        var seed = Math.floor(Math.random() * 1000);
        var generator = new Simple1DNoise();
        for (var i = 0; i < num; i++) {
            //    console.log(generator.getVal(i))
            returnArray.push(generator.getVal(i));
        }
        //  console.log(returnArray);
        return returnArray;
    };
    return CutOutComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])('down'),
    __metadata("design:type", Object)
], CutOutComponent.prototype, "down", void 0);
CutOutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-cut-out',
        template: __webpack_require__("../../../../../src/app/cut-out/cut-out.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cut-out/cut-out.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */]) === "function" && _a || Object])
], CutOutComponent);

var Simple1DNoise = (function () {
    function Simple1DNoise() {
        this.MAX_VERTICES = 256;
        this.MAX_VERTICES_MASK = this.MAX_VERTICES - 1;
        this.amplitude = 1;
        this.scale = 0.12;
        this.r = [];
        for (var i = 0; i < this.MAX_VERTICES; ++i) {
            this.r.push(Math.random());
        }
    }
    Simple1DNoise.prototype.getVal = function (x) {
        var scaledX = x * this.scale;
        var xFloor = Math.floor(scaledX);
        var t = scaledX - xFloor;
        var tRemapSmoothstep = t * t * (3 - 2 * t);
        /// Modulo using &
        // tslint:disable-next-line:no-bitwise
        var xMin = xFloor & this.MAX_VERTICES_MASK;
        // tslint:disable-next-line:no-bitwise
        var xMax = (xMin + 1) & this.MAX_VERTICES_MASK;
        var y = this.lerp(this.r[xMin], this.r[xMax], tRemapSmoothstep);
        return y * this.amplitude;
    };
    ;
    Simple1DNoise.prototype.lerp = function (a, b, t) {
        return a * (1 - t) + b * t;
    };
    ;
    Simple1DNoise.prototype.setAmplitude = function (newAmplitude) {
        this.amplitude = newAmplitude;
    };
    ;
    Simple1DNoise.prototype.setScale = function (newScale) {
        this.scale = newScale;
    };
    return Simple1DNoise;
}());
var _a;
//# sourceMappingURL=cut-out.component.js.map

/***/ }),

/***/ "../../../../../src/app/dot-line/dot-line.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [class.wide]=\"this.wide\">\n  <div class=\"mask\">\n    <div class=\"line\" [class.activate]=\"this.isActivated\" [class.white]=\"this.white\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dot-line/dot-line.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  width: 100%;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n:host .wrapper {\n  margin: auto;\n  margin-top: 32px;\n  margin-bottom: 32px;\n  overflow: hidden;\n  width: 100%;\n  padding-left: 5px;\n}\n@media (max-width: 850px) {\n  :host .wrapper {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 763px) {\n  :host .wrapper {\n    padding-left: 0;\n  }\n}\n:host .wrapper .mask {\n  overflow: hidden;\n}\n:host .wrapper.wide {\n  padding-left: 0;\n}\n:host .line {\n  width: 100%;\n  height: 2px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/dot-line.svg") + ");\n  transition: ease 1s transform;\n  position: relative;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n:host .line.white {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/dot-line-white.svg") + ");\n}\n@media (max-width: 763px) {\n  :host .line {\n    background-size: initial;\n    background-repeat: repeat;\n    background-position: left;\n  }\n}\n:host .line.activate {\n  -webkit-transform: translateX(0%);\n          transform: translateX(0%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dot-line/dot-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DotLineComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DotLineComponent = DotLineComponent_1 = (function (_super) {
    __extends(DotLineComponent, _super);
    function DotLineComponent(element) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.wide = false;
        _this.white = false;
        _this.preactivated = false;
        return _this;
    }
    DotLineComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.preactivated) {
            this.activate();
        }
    };
    return DotLineComponent;
}(__WEBPACK_IMPORTED_MODULE_0__activable__["a" /* Activable */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])('wide'),
    __metadata("design:type", Object)
], DotLineComponent.prototype, "wide", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])('white'),
    __metadata("design:type", Object)
], DotLineComponent.prototype, "white", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])('preactivated'),
    __metadata("design:type", Object)
], DotLineComponent.prototype, "preactivated", void 0);
DotLineComponent = DotLineComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-dot-line',
        template: __webpack_require__("../../../../../src/app/dot-line/dot-line.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dot-line/dot-line.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* forwardRef */])(function () { return DotLineComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], DotLineComponent);

var DotLineComponent_1, _a;
//# sourceMappingURL=dot-line.component.js.map

/***/ }),

/***/ "../../../../../src/app/enter-button/enter-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"button-wrapper\">\n    <div class=\"button\" (click)=\"this.start()\" [class.hide]=\"this.isHideButton\" [class.activated]=\"this.isActivated\">\n      <div class=\"title\"><ng-content></ng-content></div>\n    </div>\n  </div>\n  <div class=\"text-wrapper\" [class.hide]=\"!this.isHideButton\">\n    <app-loading-interface #activable *ngIf=\"this.isHideButton\" [title]=\"'loading related content...'\" (done)=\"this.doneTimer()\"></app-loading-interface>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/enter-button/enter-button.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  margin: auto;\n  width: 100%;\n  position: relative;\n}\n.body .button-wrapper {\n  text-align: center;\n  position: relative;\n}\n.body .button-wrapper .button {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  width: 152px;\n  height: 32px;\n  border-radius: 3px;\n  background-color: #707070;\n  color: black;\n  line-height: 32px;\n  text-align: center;\n  font-family: \"Roboto Mono\";\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n  transition: ease 0.3s background-color, ease 0.2s height, ease 0.2s opacity;\n  opacity: 0;\n}\n.body .button-wrapper .button.activated {\n  opacity: 1;\n  -webkit-animation: button-blink 0.04s infinite linear alternate-reverse;\n          animation: button-blink 0.04s infinite linear alternate-reverse;\n}\n.body .button-wrapper .button:hover {\n  background-color: #595959;\n}\n.body .button-wrapper .button.hide {\n  pointer-events: none;\n  height: 15px;\n  opacity: 0;\n  overflow: hidden;\n  -webkit-animation: none;\n          animation: none;\n}\n@media (max-width: 850px) {\n  .body .button-wrapper .button {\n    height: 48px;\n    line-height: 48px;\n    width: 242px;\n  }\n}\n.body .text-wrapper {\n  position: absolute;\n  top: 0;\n  opacity: 1;\n  transition: ease 0.3s opacity;\n}\n.body .text-wrapper.hide {\n  opacity: 0;\n}\n@-webkit-keyframes button-blink {\n  0% {\n    background-color: #707070;\n  }\n  100% {\n    background-color: #a0a0a0;\n  }\n}\n@keyframes button-blink {\n  0% {\n    background-color: #707070;\n  }\n  100% {\n    background-color: #a0a0a0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/enter-button/enter-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterButtonComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnterButtonComponent = EnterButtonComponent_1 = (function (_super) {
    __extends(EnterButtonComponent, _super);
    function EnterButtonComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.appRef = appRef;
        _this.track = track;
        _this.isHideButton = false;
        _this.done = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    EnterButtonComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    EnterButtonComponent.prototype.start = function () {
        this.isHideButton = true;
        this.appRef.tick();
        this.activable.activate();
        this.track.track('main-page', 'click enter');
    };
    EnterButtonComponent.prototype.doneTimer = function () {
        this.done.emit();
    };
    return EnterButtonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* Output */])('done'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], EnterButtonComponent.prototype, "done", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_6" /* ViewChild */])('activable'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */]) === "function" && _b || Object)
], EnterButtonComponent.prototype, "activable", void 0);
EnterButtonComponent = EnterButtonComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-enter-button',
        template: __webpack_require__("../../../../../src/app/enter-button/enter-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/enter-button/enter-button.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_0" /* forwardRef */])(function () { return EnterButtonComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* ApplicationRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _e || Object])
], EnterButtonComponent);

var EnterButtonComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=enter-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/extra/extra.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"num\">\n    <div class=\"wrapper\">{{this.num}}</div>\n  </div>\n  <div class=\"inner\">\n    <app-p>\n      <app-loading-interface [title]=\"'loading extra content'\" (done)=\"this.incrimentNarrativeIndex()\"></app-loading-interface>\n    </app-p>\n    <app-p>\n      <div class=\"button\" (click)=\"this.clickButton()\" [class.disabled]=\"this.narrativeIndex==0\">&gt;&gt;&nbsp;{{this.title}}</div>\n    </app-p>\n    <app-p>\n      <ng-content></ng-content>\n    </app-p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/extra/extra.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  width: 100%;\n  position: relative;\n}\n.body .num {\n  top: 8px;\n  color: white;\n  background-color: #666666;\n  font-family: \"Roboto Slab\";\n  font-size: 18px;\n  position: absolute;\n}\n.body .num .wrapper {\n  line-height: 15px;\n  margin-bottom: 5px;\n}\n@media (max-width: 767px) {\n  .body .num {\n    display: none;\n  }\n}\n.body .inner {\n  margin-left: 136px;\n}\n@media (max-width: 767px) {\n  .body .inner {\n    margin-left: 0;\n  }\n}\n.body .inner /deep/ .button {\n  height: 32px;\n  color: black;\n  background-color: #999999;\n  text-align: left;\n  min-width: 252px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 2px;\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  font-weight: 500;\n  transition: ease 0.3s background-color, 0.3s ease opacity;\n  pointer-events: none;\n}\n.body .inner /deep/ .button.disabled {\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.2;\n}\n.body .inner /deep/ .button:not(.disabled) {\n  -webkit-animation: button-blink 0.04s infinite linear alternate-reverse;\n          animation: button-blink 0.04s infinite linear alternate-reverse;\n  opacity: 1;\n  pointer-events: all;\n}\n.body .inner /deep/ .button:not(.disabled):hover {\n  background-color: #e5e5e5;\n}\n@-webkit-keyframes button-blink {\n  0% {\n    background-color: #707070;\n  }\n  100% {\n    background-color: #a0a0a0;\n  }\n}\n@keyframes button-blink {\n  0% {\n    background-color: #707070;\n  }\n  100% {\n    background-color: #a0a0a0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extra/extra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtraComponent = ExtraComponent_1 = (function (_super) {
    __extends(ExtraComponent, _super);
    function ExtraComponent(element) {
        var _this = _super.call(this, element) || this;
        _this.title = '';
        _this.num = '';
        _this.enlarge = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    ExtraComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        // console.log('extra activate');
    };
    ExtraComponent.prototype.clickButton = function () {
        this.enlarge.emit();
    };
    ExtraComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return ExtraComponent;
}(__WEBPACK_IMPORTED_MODULE_1_page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('title'),
    __metadata("design:type", Object)
], ExtraComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('num'),
    __metadata("design:type", Object)
], ExtraComponent.prototype, "num", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])('enlarge'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], ExtraComponent.prototype, "enlarge", void 0);
ExtraComponent = ExtraComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-extra',
        template: __webpack_require__("../../../../../src/app/extra/extra.component.html"),
        styles: [__webpack_require__("../../../../../src/app/extra/extra.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2_activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* forwardRef */])(function () { return ExtraComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object])
], ExtraComponent);

var ExtraComponent_1, _a, _b;
//# sourceMappingURL=extra.component.js.map

/***/ }),

/***/ "../../../../../src/app/fskn-infographics/fskn-infographics.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fskn-infographics works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/fskn-infographics/fskn-infographics.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fskn-infographics/fskn-infographics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FsknInfographicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FsknInfographicsComponent = (function () {
    function FsknInfographicsComponent() {
    }
    FsknInfographicsComponent.prototype.ngOnInit = function () {
    };
    return FsknInfographicsComponent;
}());
FsknInfographicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-fskn-infographics',
        template: __webpack_require__("../../../../../src/app/fskn-infographics/fskn-infographics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fskn-infographics/fskn-infographics.component.less")]
    }),
    __metadata("design:paramtypes", [])
], FsknInfographicsComponent);

//# sourceMappingURL=fskn-infographics.component.js.map

/***/ }),

/***/ "../../../../../src/app/global-navigation/global-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"navigation-item\" (click)=\"select(0)\" [class.current]=\"this.paging.current==0\" [class.locked]=\"!this.paging.enable[0]\"\n    [class.light]=\"!this.global.color\">\n    <div class=\"title\">DIR00</div>\n    <div class=\"icon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 68 68\">\n        <defs>\n\n        </defs>\n        <title>icon0</title>\n        <g id=\"Layer_2\" data-name=\"Layer 2\">\n          <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n            <polygon class=\"cls-1\" points=\"0 0 0 68 13.6 68 13.6 27.2 27.2 27.2 27.2 13.6 13.6 13.6 13.6 0 0 0\" />\n            <rect class=\"cls-1\" x=\"27.2\" width=\"13.6\" height=\"13.6\" />\n            <rect class=\"cls-1\" x=\"27.2\" y=\"27.2\" width=\"13.6\" height=\"13.6\" />\n            <rect class=\"cls-1\" x=\"27.2\" y=\"54.4\" width=\"13.6\" height=\"13.6\" />\n            <rect class=\"cls-1\" x=\"54.4\" y=\"54.4\" width=\"13.6\" height=\"13.6\" />\n            <rect class=\"cls-1\" x=\"54.4\" y=\"27.2\" width=\"13.6\" height=\"13.6\" />\n            <rect class=\"cls-1\" x=\"54.4\" width=\"13.6\" height=\"13.6\" />\n          </g>\n        </g>\n      </svg>\n    </div>\n    <div class=\"name\">История теневого интернета</div>\n  </div>\n  <div class=\"navigation-item\" (click)=\"select(1)\" [class.current]=\"this.paging.current==1\" [class.locked]=\"!this.paging.enable[1]\"\n    [class.light]=\"!this.global.color\">\n    <div class=\"title\">{{this.paging.enable[1]?\"DIR01\":\"LOCKED\"}}</div>\n    <div class=\"icon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 68 68\">\n        <defs>\n\n        </defs>\n        <title>icon1</title>\n        <g id=\"Layer_2\" data-name=\"Layer 2\">\n          <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n            <polygon class=\"cls-1\" points=\"0 13.6 13.6 13.6 13.6 27.2 0 27.2 0 40.8 40.8 40.8 40.8 27.2 27.2 27.2 27.2 13.6 40.8 13.6 40.8 27.2 54.4 27.2 54.4 13.6 68 13.6 68 0 0 0 0 13.6\"\n            />\n            <rect class=\"cls-1\" y=\"54.4\" width=\"13.6\" height=\"13.6\" />\n            <rect class=\"cls-1\" x=\"27.2\" y=\"54.4\" width=\"13.6\" height=\"13.6\" />\n            <rect class=\"cls-1\" x=\"54.4\" y=\"54.4\" width=\"13.6\" height=\"13.6\" />\n            <rect class=\"cls-1\" x=\"54.4\" y=\"27.2\" width=\"13.6\" height=\"13.6\" />\n          </g>\n        </g>\n      </svg>\n    </div>\n    <div class=\"name\">Экономика даркнета<br/>{{this.paging.enable[1]?\"\":\"release date 28.06\"}}</div>\n\n  </div>\n\n  <div class=\"navigation-item\" (click)=\"select(2)\" [class.current]=\"this.paging.current==2\" [class.locked]=\"!this.paging.enable[2]\"\n    [class.light]=\"!this.global.color\">\n    <div class=\"title\">{{this.paging.enable[2]?\"DIR02\":\"LOCKED\"}}</div>\n    <div class=\"icon\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 68 68\">\n        <defs>\n\n        </defs>\n        <title>icon2</title>\n        <g id=\"Layer_2\" data-name=\"Layer 2\">\n          <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n            <path class=\"cls-1\" d=\"M13.6,27.2H27.2V40.8H13.6ZM0,0V68H13.6V54.4H27.2V68H40.8V27.2H54.4V13.6H68V0H54.4V13.6H40.8V0H27.2V13.6H13.6V0Z\"\n            />\n            <rect class=\"cls-1\" x=\"54.4\" y=\"54.4\" width=\"13.6\" height=\"13.6\" />\n            <rect class=\"cls-1\" x=\"54.4\" y=\"27.2\" width=\"13.6\" height=\"13.6\" />\n          </g>\n        </g>\n      </svg>\n    </div>\n    <div class=\"name\">Госнаркокартель<br/>{{this.paging.enable[1]?\"\":\"release date 30.06\"}}</div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/global-navigation/global-navigation.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  max-width: 656px;\n  width: 100%;\n}\n@media (max-width: 767px) {\n  .body {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n.body .navigation-item {\n  max-width: 152px;\n  width: 25%;\n  font-weight: 500;\n}\n@media (max-width: 767px) {\n  .body .navigation-item {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    max-width: 100%;\n    width: auto;\n    padding-right: 24px;\n    margin-bottom: 40px;\n  }\n}\n.body .navigation-item .title {\n  font-family: \"Roboto Mono\";\n  font-size: 20px;\n  color: #707070;\n  margin-bottom: 20px;\n}\n.body .navigation-item .icon {\n  width: 68px;\n  height: 68px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin-bottom: 32px;\n}\n.body .navigation-item .icon rect,\n.body .navigation-item .icon path,\n.body .navigation-item .icon polygon {\n  fill: #707070;\n  transition: ease 0.3s fill;\n}\n.body .navigation-item .name {\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  color: #666666;\n}\n.body .navigation-item.current .title {\n  color: white;\n}\n.body .navigation-item.current .title:before {\n  content: \">\";\n}\n.body .navigation-item.current .icon rect,\n.body .navigation-item.current .icon path,\n.body .navigation-item.current .icon polygon {\n  fill: white;\n}\n.body .navigation-item.current .name {\n  color: white;\n}\n.body .navigation-item.current.light .title {\n  color: black;\n}\n.body .navigation-item.current.light .name {\n  color: black;\n}\n.body .navigation-item.current.light .icon rect,\n.body .navigation-item.current.light .icon path,\n.body .navigation-item.current.light .icon polygon {\n  fill: black;\n}\n.body .navigation-item.locked {\n  opacity: 0.5;\n}\n.body .navigation-item:not(.current):not(.locked) {\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  opacity: 0.75;\n}\n.body .navigation-item:not(.current):not(.locked):hover {\n  color: white;\n}\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(1) .icon rect,\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(1) .icon path,\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(1) .icon polygon {\n  fill: #ffc800;\n  transition: ease 0.3s fill;\n}\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(2) .icon rect,\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(2) .icon path,\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(2) .icon polygon {\n  fill: #ff00ff;\n  transition: ease 0.3s fill;\n}\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(3) .icon rect,\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(3) .icon path,\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(3) .icon polygon {\n  fill: #387fff;\n  transition: ease 0.3s fill;\n}\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(4) .icon rect,\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(4) .icon path,\n.body .navigation-item:not(.current):not(.locked):hover:nth-child(4) .icon polygon {\n  fill: white;\n  transition: ease 0.3s fill;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-navigation/global-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paging_service_service__ = __webpack_require__("../../../../../src/app/paging-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalNavigationComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalNavigationComponent = GlobalNavigationComponent_1 = (function (_super) {
    __extends(GlobalNavigationComponent, _super);
    function GlobalNavigationComponent(element, global, paging) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.global = global;
        _this.paging = paging;
        return _this;
    }
    GlobalNavigationComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    GlobalNavigationComponent.prototype.select = function (num) {
        if (this.paging.enable[num]) {
            this.paging.current = num;
        }
    };
    return GlobalNavigationComponent;
}(__WEBPACK_IMPORTED_MODULE_2__activable__["a" /* Activable */]));
GlobalNavigationComponent = GlobalNavigationComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_5" /* Component */])({
        selector: 'app-global-navigation',
        template: __webpack_require__("../../../../../src/app/global-navigation/global-navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/global-navigation/global-navigation.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_0" /* forwardRef */])(function () { return GlobalNavigationComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__paging_service_service__["a" /* PagingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__paging_service_service__["a" /* PagingServiceService */]) === "function" && _c || Object])
], GlobalNavigationComponent);

var GlobalNavigationComponent_1, _a, _b, _c;
//# sourceMappingURL=global-navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalService = (function () {
    function GlobalService() {
        this._sound = true;
        this._color = true;
        if (this.getCookie('soundEnable') === 'false') {
            this.sound = false;
        }
        else {
            this.sound = true;
        }
        if (this.getCookie('colorEnable') === 'false') {
            this.color = false;
        }
        else {
            this.color = true;
        }
    }
    Object.defineProperty(GlobalService.prototype, "sound", {
        get: function () {
            return this._sound;
        },
        set: function (value) {
            this._sound = value;
            this.setCookie('soundEnable', value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalService.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this.setCookie('colorEnable', value.toString());
        },
        enumerable: true,
        configurable: true
    });
    GlobalService.prototype.getCookie = function (name) {
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + name + '=');
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
        ;
    };
    GlobalService.prototype.setCookie = function (name, value) {
        document.cookie =
            name + "=" + value + "; expires=Fri, 3 Aug 2031 20:47:11 UTC; path=/";
    };
    return GlobalService;
}());
GlobalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalService);

//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [class.light]=\"!this.global.color\">\n    <div class=\"inner\">\n\n        <div class=\"lenta\" [class.light]=\"!this.global.color\"><a href=\"https://lenta.ru/\" target=\"_blank\"></a></div>\n\n        <div class=\"switchers\">\n            <div class=\"switcher\" (click)=\"this.switchSound()\" [class.light]=\"!this.global.color\">\n                <div class=\"title\">sound:</div>\n                <div class=\"state\">{{this.getSoundState()}}</div>\n            </div>\n\n            <div class=\"switcher\" (click)=\"this.switchColor()\" [class.light]=\"!this.global.color\">\n                <div class=\"title\">color:</div>\n                <div class=\"state\">{{this.getColorState()}}</div>\n            </div>\n        </div>\n\n\n        <div class=\"about\" [class.light]=\"!this.global.color\" (click)=\"this.opencloseAbout()\" [class.open]=\"this.aboutOpen\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16.86\" height=\"20\" viewBox=\"0 0 16.86 20\">\n                <defs>\n                    <style>\n                        .acls-1 {\n                            fill: none;\n                        }\n\n                        .acls-2 {\n                            clip-path: url(#clip-path);\n                        }\n\n                        .acls-3 {\n                            fill: #707070;\n                        }\n                    </style>\n                    <clipPath id=\"clip-path\" transform=\"translate(0)\">\n                        <rect class=\"acls-1\" width=\"16.86\" height=\"20\" />\n                    </clipPath>\n                </defs>\n                <title>about</title>\n                <g id=\"Layer_2\" data-name=\"Layer 2\">\n                    <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n                        <g class=\"acls-2\">\n                            <path class=\"acls-3\" d=\"M8.43,0a6,6,0,1,0,6,6,6,6,0,0,0-6-6\" transform=\"translate(0)\" />\n                            <path class=\"acls-3\" d=\"M8.43,13.33A8.67,8.67,0,0,0,0,20H16.86a8.67,8.67,0,0,0-8.43-6.67\" transform=\"translate(0)\" />\n                        </g>\n                    </g>\n                </g>\n            </svg>\n\n            <div class=\"popUp\" [class.show]=\"this.aboutOpen\" [class.light]=\"!this.global.color\">\n                <div class=\"wrapper\">\n                    <div class=\"title\">\n                        Очень Темные Дела\n                    </div>\n\n                    <div class=\"text\">\n                        Проект &laquo;Ленты.ру&raquo; и&nbsp;&laquo;Темы не&nbsp;мемы&raquo;, посвященный &laquo;темной&raquo; стороне рунета. </div>\n                    <div class=\"text uppercase\">\n                        продюсирование: Reyhan; текст: Владимир Тодоров, Александра Виграйзер, NONAME; данные: NONAME; программирование: t1000; дизайн:\n                        pl@yer^fh; звук: drmckey\n                    </div>\n                    <div class=\"sharing\">\n                        <div class=\"fb\" (click)=\"this.share($event, 'fb')\"></div>\n                        <div class=\"vk\" (click)=\"this.share($event, 'vk')\"></div>\n                        <div class=\"tw\" (click)=\"this.share($event, 'tw')\"></div>\n                    </div>\n\n                    <div class=\"warn \">Внимание! Производство, сбыт и&nbsp;пересылка наркотических средств и&nbsp;психотропных веществ является\n                        уголовным преступлением и&nbsp;преследуется по&nbsp;закону (статьи 228-231 Уголовного кодекса Российской\n                        Федерации).\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"hamburger \" (click)=\"this.opencloseMenu() \" [class.open]=\"this.menuOpen \" [class.light]=\"!this.global.color \">\n\n        </div>\n\n        <div class=\"pages \">\n            <div class=\"item \" (click)=\"this.selectPage(0)\" [class.current]=\"this.paging.current==0\" [class.light]=\"!this.global.color \"\n                [class.locked]=\"!this.paging.enable[0]||this.paging.current==-1\">\n                <div class=\"hoverItem \">\n                    История теневого интернета\n                </div>\n                <svg xmlns=\"http://www.w3.org/2000/svg \" viewBox=\"0 0 68 68 \">\n                    <defs>\n                        <style>\n                            .gcls-1 {\n                                fill: #ffc700;\n                            }\n                        </style>\n                    </defs>\n                    <title>icon0</title>\n                    <g id=\"Layer_2 \" data-name=\"Layer 2 \">\n                        <g id=\"Layer_1-2 \" data-name=\"Layer 1 \">\n                            <polygon class=\"gcls-1 \" points=\"0 0 0 68 13.6 68 13.6 27.2 27.2 27.2 27.2 13.6 13.6 13.6 13.6\n                            0 0 0 \" />\n                            <rect class=\"gcls-1 \" x=\"27.2 \" width=\"13.6 \" height=\"13.6 \" />\n                            <rect class=\"gcls-1 \" x=\"27.2 \" y=\"27.2 \" width=\"13.6 \" height=\"13.6 \" />\n                            <rect class=\"gcls-1 \" x=\"27.2 \" y=\"54.4 \" width=\"13.6 \" height=\"13.6 \" />\n                            <rect class=\"gcls-1 \" x=\"54.4 \" y=\"54.4 \" width=\"13.6 \" height=\"13.6 \" />\n                            <rect class=\"gcls-1 \" x=\"54.4 \" y=\"27.2 \" width=\"13.6 \" height=\"13.6 \" />\n                            <rect class=\"gcls-1 \" x=\"54.4 \" width=\"13.6 \" height=\"13.6 \" />\n                        </g>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"item \" (click)=\"this.selectPage(1)\" [class.current]=\"this.paging.current==1\" [class.light]=\"!this.global.color\"\n                [class.locked]=\"!this.paging.enable[1]||this.paging.current==-1\">\n                <div class=\"hoverItem \">\n                    Экономика даркнета\n                </div>\n                <svg xmlns=\"http://www.w3.org/2000/svg \" viewBox=\"0 0 68 68 \">\n                    <defs>\n                        <style>\n                            .hcls-1 {\n                                fill: #f0f;\n                            }\n                        </style>\n                    </defs>\n                    <title>icon1</title>\n                    <g id=\"Layer_2 \" data-name=\"Layer 2 \">\n                        <g id=\"Layer_1-2 \" data-name=\"Layer 1 \">\n                            <polygon class=\"hcls-1 \" points=\"0 13.6 13.6 13.6 13.6 27.2 0 27.2 0 40.8 40.8 40.8 40.8 27.2\n                            27.2 27.2 27.2 13.6 40.8 13.6 40.8 27.2 54.4 27.2 54.4 13.6 68 13.6 68 0 0 0 0 13.6 \" />\n                            <rect class=\"hcls-1 \" y=\"54.4 \" width=\"13.6 \" height=\"13.6 \" />\n                            <rect class=\"hcls-1 \" x=\"27.2 \" y=\"54.4 \" width=\"13.6 \" height=\"13.6 \" />\n                            <rect class=\"hcls-1 \" x=\"54.4 \" y=\"54.4 \" width=\"13.6 \" height=\"13.6 \" />\n                            <rect class=\"hcls-1 \" x=\"54.4 \" y=\"27.2 \" width=\"13.6 \" height=\"13.6 \" />\n                        </g>\n                    </g>\n                </svg>\n            </div>\n            <div class=\"item \" (click)=\"this.selectPage(2)\" [class.current]=\"this.paging.current==2\" [class.light]=\"!this.global.color\"\n                [class.locked]=\"!this.paging.enable[2]||this.paging.current==-1\">\n                <div class=\"hoverItem \">\n                    Госнаркокартель\n                </div>\n                <svg xmlns=\"http://www.w3.org/2000/svg \" viewBox=\"0 0 68 68 \">\n                    <defs>\n                        <style>\n                            .jcls-1 {\n                                fill: #3880ff;\n                            }\n                        </style>\n                    </defs>\n                    <title>icon2</title>\n                    <g id=\"Layer_2 \" data-name=\"Layer 2 \">\n                        <g id=\"Layer_1-2 \" data-name=\"Layer 1 \">\n                            <path class=\"jcls-1 \" d=\"M13.6,27.2H27.2V40.8H13.6ZM0,0V68H13.6V54.4H27.2V68H40.8V27.2H54.4V13.6H68V0H54.4V13.6H40.8V0H27.2V13.6H13.6V0Z \"\n                            />\n                            <rect class=\"jcls-1 \" x=\"54.4 \" y=\"54.4 \" width=\"13.6 \" height=\"13.6 \" />\n                            <rect class=\"jcls-1 \" x=\"54.4 \" y=\"27.2 \" width=\"13.6 \" height=\"13.6 \" />\n                        </g>\n                    </g>\n                </svg>\n            </div>\n\n\n        </div>\n    </div>\n    <div class=\"menu\" [class.show]=\"this.menuOpen \" [class.light]=\"!this.global.color \">\n        <div class=\"switcher \" (click)=\"this.switchColor() \" [class.light]=\"!this.global.color \">\n            <div class=\"title \">color:</div>\n            <div class=\"state \">{{this.getColorState()}}</div>\n        </div>\n\n\n        <div class=\"items\" *ngIf=\"this.paging.current!=-1\">\n            <div class=\"section\">\n                <div class=\"title\" (click)=\"this.select(0,0)\">История теневого интернета\n                </div>\n\n                <div class=\"parts\" *ngIf=\"this.paging.current==0\">\n                    <div class=\"part\" [class.current]=\"0==this.paging.pages[0]\" (click)=\"this.select(0,0)\">1. История Tor</div>\n                    <div class=\"part\" [class.current]=\"1==this.paging.pages[0]\" (click)=\"this.select(0,1)\">2. Tor в&nbsp;России</div>\n                    <div class=\"part\" [class.current]=\"2==this.paging.pages[0]\" (click)=\"this.select(0,2)\">3. История RAMP</div>\n                    <div class=\"part\" [class.current]=\"3==this.paging.pages[0]\" (click)=\"this.select(0,3)\">4. RAMP и&nbsp;конкуренты</div>\n                    <div class=\"part\" [class.current]=\"4==this.paging.pages[0]\" (click)=\"this.select(0,4)\">5. Бизнес RAMP</div>\n                </div>\n            </div>\n\n            <app-dot-line [white]=\"true\" [preactivated]=\"true\"></app-dot-line>\n\n            <div class=\"section\">\n                <div class=\"title\" (click)=\"this.select(1,0)\">\n                    Экономика даркнета\n                </div>\n\n                <div class=\" parts \" *ngIf=\"this.paging.current==1 \">\n\n                    <div class=\"part\" [class.current]=\"0==this.paging.pages[1] \" (click)=\"this.select(1,0) \">1. Закладки</div>\n                    <div class=\"part\" [class.current]=\"1==this.paging.pages[1] \" (click)=\"this.select(1,1) \">2. Складмены</div>\n                    <div class=\"part\" [class.current]=\"2==this.paging.pages[1] \" (click)=\"this.select(1,2) \">3. Поставщики</div>\n                    <div class=\"part\" [class.current]=\"3==this.paging.pages[1] \" (click)=\"this.select(1,3) \">4. Работа магазинов</div>\n                    <div class=\"part\" [class.current]=\"4==this.paging.pages[1] \" (click)=\"this.select(1,4) \">5. Вывод средств</div>\n                    <div class=\"part\" [class.current]=\"4==this.paging.pages[1] \" (click)=\"this.select(1,4) \">6. Биржа труда</div>\n                    <div class=\"part\" [class.current]=\"4==this.paging.pages[1] \" (click)=\"this.select(1,4) \">7. Гаранты и&nbsp;депозиты</div>\n                    <div class=\"part\" [class.current]=\"4==this.paging.pages[1] \" (click)=\"this.select(1,4) \">8. Работа администрации\n                    </div>\n                </div>\n            </div>\n\n            <app-dot-line [white]=\"true\" [preactivated]=\"true\"></app-dot-line>\n\n            <div class=\"section\">\n                <div class=\"title\" (click)=\"this.select(2,0)\">\n                    Госнаркокартель\n                </div>\n\n                <div class=\" parts \" *ngIf=\"this.paging.current==1 \">\n\n                    <div class=\"part\" [class.current]=\"0==this.paging.pages[1] \" (click)=\"this.select(2,0) \">1. Прогулка по&nbsp;району</div>\n                    <div class=\"part\" [class.current]=\"1==this.paging.pages[1] \" (click)=\"this.select(2,1) \">2. Крыша от&nbsp;ФСКН</div>\n                    <div class=\"part\" [class.current]=\"2==this.paging.pages[1] \" (click)=\"this.select(2,2) \">3. Невнимание к&nbsp;Tor</div>\n                    <div class=\"part\" [class.current]=\"3==this.paging.pages[1] \" (click)=\"this.select(2,3) \">4. Переполох в&nbsp;ГУНК</div>\n                    <div class=\"part\" [class.current]=\"4==this.paging.pages[1] \" (click)=\"this.select(2,4) \">5. Будущее наркоконтроля</div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<audio loop preload #audio>\n    <source src=\"./assets/darkweb.ogg \" type=\"audio/ogg \">\n    <source src=\"./assets/darkweb.mp3 \" type=\"audio/mpeg \">\n    <source src=\"./assets/darkweb.aac \" type=\"audio/aac \">\n    <source src=\"./assets/darkweb.oga \" type=\"audio/ogg \">\n</audio>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  width: 100%;\n  height: 48px;\n  background-color: #262626;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  z-index: 999999;\n  transition: ease 0.3s background-color;\n}\n.header.light {\n  background-color: #e5e5e5;\n}\n.header .inner {\n  width: 100%;\n  max-width: 1024px;\n  padding-left: 16px;\n  padding-right: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media (max-width: 767px) {\n  .header .inner {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.header .inner .lenta {\n  width: 97px;\n  height: 48px;\n  background-size: contain;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/lenta-logo.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: ease 0.3s background-image;\n}\n.header .inner .lenta:hover {\n  opacity: 0.8;\n}\n.header .inner .lenta.light {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/lenta-light.svg") + ");\n}\n.header .inner .lenta a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.header .inner .about {\n  width: 19px;\n  height: 20px;\n  position: relative;\n}\n.header .inner .about path {\n  transition: ease 0.3s fill;\n}\n@media (max-width: 767px) {\n  .header .inner .about {\n    -webkit-box-flex: 10;\n        -ms-flex-positive: 10;\n            flex-grow: 10;\n    text-align: right;\n    margin-right: 40px;\n  }\n}\n@media (min-width: 767px) {\n  .header .inner .about:hover path {\n    fill: white;\n  }\n  .header .inner .about:hover.light path {\n    fill: black;\n  }\n  .header .inner .about:hover .popUp {\n    top: 0;\n    pointer-events: all;\n    opacity: 1;\n  }\n}\n.header .inner .about.open path {\n  fill: white;\n}\n.header .inner .about.open.light path {\n  fill: black;\n}\n.header .inner .about .popUp {\n  position: absolute;\n  padding-top: 33px;\n  top: -30px;\n  left: -320px;\n  transition: ease 0.3s top, ease 0.3s opacity;\n  opacity: 0;\n  pointer-events: none;\n}\n@media (max-width: 767px) {\n  .header .inner .about .popUp {\n    position: fixed;\n    padding-top: 0;\n    width: 100%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 48px;\n  }\n}\n.header .inner .about .popUp.show {\n  pointer-events: all;\n  opacity: 1;\n}\n.header .inner .about .popUp .wrapper {\n  background-color: #262626;\n  text-align: left;\n  padding-top: 20px;\n  padding-left: 24px;\n  padding-bottom: 28px;\n  padding-right: 44px;\n  width: 360px;\n}\n@media (max-width: 767px) {\n  .header .inner .about .popUp .wrapper {\n    opacity: 1;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n  }\n}\n.header .inner .about .popUp .wrapper .title {\n  color: white;\n  font-family: \"Roboto Slab\";\n  font-size: 24px;\n  margin-bottom: 12px;\n}\n.header .inner .about .popUp .wrapper .text {\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: #a0a0a0;\n  margin-bottom: 20px;\n  text-align: left;\n}\n.header .inner .about .popUp .wrapper .text.uppercase {\n  text-transform: uppercase;\n}\n.header .inner .about .popUp .wrapper .sharing {\n  font-size: 0;\n  margin-bottom: 20px;\n}\n.header .inner .about .popUp .wrapper .sharing div {\n  cursor: pointer;\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n}\n.header .inner .about .popUp .wrapper .sharing div:hover {\n  opacity: 0.8s;\n}\n.header .inner .about .popUp .wrapper .sharing div:not(:last-child) {\n  margin-right: 38px;\n}\n.header .inner .about .popUp .wrapper .sharing div.fb {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/fb.svg") + ");\n}\n.header .inner .about .popUp .wrapper .sharing div.vk {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/vk.svg") + ");\n}\n.header .inner .about .popUp .wrapper .sharing div.tw {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/tw.svg") + ");\n}\n.header .inner .about .popUp .wrapper .warn {\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: #707070;\n}\n.header .inner .about .popUp.light .wrapper {\n  background-color: #e5e5e5;\n}\n.header .inner .about .popUp.light .wrapper .title {\n  color: black;\n}\n.header .inner .hamburger {\n  display: none;\n}\n@media (max-width: 767px) {\n  .header .inner .hamburger {\n    display: block;\n    width: 20px;\n    height: 20px;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/header/hamb.svg") + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: ease 0.3s background-color;\n  }\n}\n.header .inner .hamburger.light {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/header/hamb-black.svg") + ");\n}\n@media (max-width: 767px) {\n  .header .inner .hamburger.open {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/header/hamb-open.svg") + ");\n  }\n}\n.header .inner .hamburger.open.light {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/header/hamb-black-open.svg") + ");\n}\n.header .inner .switchers {\n  -webkit-box-flex: 0.5;\n      -ms-flex-positive: 0.5;\n          flex-grow: 0.5;\n}\n@media (max-width: 767px) {\n  .header .inner .switchers {\n    display: none;\n  }\n}\n.header .inner .switchers .switcher {\n  display: inline-block;\n  font-family: \"Roboto Mono\";\n  font-size: 20px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n}\n.header .inner .switchers .switcher:not(:last-child) {\n  margin-right: 18px;\n}\n.header .inner .switchers .switcher:hover {\n  opacity: 0.8;\n}\n.header .inner .switchers .switcher .title {\n  display: inline-block;\n  margin-right: 8px;\n  color: #666666;\n  transition: ease 0.3s color;\n}\n.header .inner .switchers .switcher .state {\n  display: inline-block;\n  font-family: \"Roboto Mono\";\n  font-weight: bold;\n  color: black;\n  background-color: #666666;\n  transition: ease 0.3s background-color;\n}\n.header .inner .switchers .switcher.light {\n  color: black;\n}\n.header .inner .switchers .switcher.light .state {\n  background-color: #b2b2b2;\n}\n.header .inner .pages {\n  font-size: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .header .inner .pages {\n    display: none;\n  }\n}\n.header .inner .pages .item {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.header .inner .pages .item .hoverItem {\n  position: absolute;\n  top: 15px;\n  opacity: 0;\n  left: 0;\n  padding-top: 20px;\n  padding-left: 24px;\n  padding-bottom: 28px;\n  padding-right: 44px;\n  width: 168px;\n  color: white;\n  background-color: #262626;\n  font-size: 12px;\n  font-family: \"Roboto Mono\";\n  font-weight: 500;\n  text-align: left;\n  transition: ease 0.3s top, ease 0.3s opacity;\n  pointer-events: none;\n}\n.header .inner .pages .item.current rect,\n.header .inner .pages .item.current path,\n.header .inner .pages .item.current polygon {\n  fill: white;\n}\n.header .inner .pages .item.current.light svg rect,\n.header .inner .pages .item.current.light svg path,\n.header .inner .pages .item.current.light svg polygon {\n  fill: black;\n  transition: ease 0.3s fill;\n}\n.header .inner .pages .item.locked {\n  opacity: 0.3;\n}\n.header .inner .pages .item:not(:last-child) {\n  margin-right: 12px;\n}\n.header .inner .pages .item rect,\n.header .inner .pages .item path,\n.header .inner .pages .item polygon {\n  fill: #707070;\n  transition: ease 0.3s fill;\n}\n.header .inner .pages .item:not(.current):not(.locked) {\n  cursor: pointer;\n}\n.header .inner .pages .item:not(.current):not(.locked):hover .hoverItem {\n  top: 33px;\n  opacity: 1;\n}\n.header .inner .pages .item:not(.current):not(.locked):hover:nth-child(1) rect,\n.header .inner .pages .item:not(.current):not(.locked):hover:nth-child(1) path,\n.header .inner .pages .item:not(.current):not(.locked):hover:nth-child(1) polygon {\n  fill: #ffc800;\n  transition: ease 0.3s fill;\n}\n.header .inner .pages .item:not(.current):not(.locked):hover:nth-child(2) rect,\n.header .inner .pages .item:not(.current):not(.locked):hover:nth-child(2) path,\n.header .inner .pages .item:not(.current):not(.locked):hover:nth-child(2) polygon {\n  fill: #ff00ff;\n  transition: ease 0.3s fill;\n}\n.header .inner .pages .item:not(.current):not(.locked):hover:nth-child(3) rect,\n.header .inner .pages .item:not(.current):not(.locked):hover:nth-child(3) path,\n.header .inner .pages .item:not(.current):not(.locked):hover:nth-child(3) polygon {\n  fill: #387fff;\n  transition: ease 0.3s fill;\n}\n.header .inner .pages .item.light .hoverItem {\n  background-color: #e5e5e5;\n  color: #666666;\n}\n.header .inner .pages .item.light rect,\n.header .inner .pages .item.light path,\n.header .inner .pages .item.light polygon {\n  fill: #b2b2b2;\n  transition: ease 0.3s fill;\n}\n.header .menu {\n  background-color: #262626;\n  text-align: left;\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-bottom: 64px;\n  position: fixed;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  display: none;\n}\n.header .menu.show {\n  display: block;\n}\n.header .menu .switcher {\n  display: inline-block;\n  font-family: \"Roboto Mono\";\n  font-size: 20px;\n  margin-bottom: 26px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n}\n.header .menu .switcher:not(:last-child) {\n  margin-right: 18px;\n}\n.header .menu .switcher:hover {\n  opacity: 0.8;\n}\n.header .menu .switcher .title {\n  display: inline-block;\n  margin-right: 8px;\n  color: #666666;\n}\n.header .menu .switcher .state {\n  display: inline-block;\n  font-family: \"Roboto Mono\";\n  font-weight: bold;\n  color: black;\n  background-color: #666666;\n}\n.header .menu .switcher.light {\n  color: black;\n}\n.header .menu .switcher.light .state {\n  background-color: #b2b2b2;\n}\n.header .menu .items .section {\n  margin-bottom: 15px;\n}\n.header .menu .items .section .title {\n  font-family: \"Roboto Slab\";\n  font-size: 24px;\n  color: white;\n  margin-bottom: 21px;\n}\n.header .menu .items .section .parts .part {\n  font-family: \"Roboto Slab\";\n  font-size: 14px;\n  font-weight: 500;\n  color: #999999;\n}\n.header .menu .items .section .parts .part.current {\n  font-weight: bold;\n  color: white;\n}\n.header .menu .items .section .parts .part:not(:last-child) {\n  margin-bottom: 18px;\n}\n.header .menu.light {\n  background-color: #e5e5e5;\n}\n.header .menu.light .items .section .title {\n  color: black;\n}\n.header .menu.light .items .section .parts .part.current {\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paging_service_service__ = __webpack_require__("../../../../../src/app/paging-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(global, paging, track) {
        this.global = global;
        this.paging = paging;
        this.track = track;
        this.menuOpen = false;
        this.aboutOpen = false;
        this.current = -1;
    }
    HeaderComponent.prototype.opencloseMenu = function () {
        if (window.innerWidth < 768) {
            this.menuOpen = !this.menuOpen;
            if (this.menuOpen) {
                document.body.style.overflow = 'hidden';
            }
            else {
                document.body.style.overflow = '';
            }
        }
    };
    HeaderComponent.prototype.share = function (event, network) {
        event.preventDefault();
        event.stopPropagation();
        var link = 'http://darknet.lenta.ru/';
        var description = "\u041F\u043B\u043E\u0449\u0430\u0434\u043A\u0438 \u0432 \u0441\u0435\u0442\u0438 Tor \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442 \u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u044B \u0440\u0443\u0431\u043B\u0435\u0439, \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u044F \u0443\u043B\u0438\u0446\u044B \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u043C\u0438 \u0441 \u043D\u0430\u0440\u043A\u043E\u0442\u0438\u043A\u0430\u043C\u0438. \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0430\u044F \u0438\u0437 \u043D\u0438\u0445, RAMP, \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 100 \u0433\u043E\u0440\u043E\u0434\u0430\u0445, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044F \u0441\u043E\u0442\u043D\u0438 \u0442\u044B\u0441\u044F\u0447 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043C\u0430\u0440\u0438\u0445\u0443\u0430\u043D\u043E\u0439, \u043A\u043E\u043A\u0430\u0438\u043D\u043E\u043C \u0438 \u043F\u0441\u0438\u0445\u043E\u0434\u0435\u043B\u0438\u043A\u0430\u043C\u0438.";
        var title = 'Очень темные дела';
        var twitterText = 'Очень темные дела ';
        var image = 'http://darknet.lenta.ru/assets/share.png';
        title = encodeURIComponent(title);
        description = encodeURIComponent(description);
        twitterText = encodeURIComponent(twitterText);
        if (network === 'vk') {
            var url = 'http://vk.com/share.php?url=' + link + '&description=' + description + '&image=' + image + '&title=' + title;
            window.open(url, '_blank', 'width=400,height=500');
        }
        else if (network === 'fb') {
            var url = 'https://www.facebook.com/sharer/sharer.php?u=' + link;
            window.open(url, '_blank', 'width=400,height=500');
        }
        else if (network === 'tw') {
            var url = 'https://twitter.com/intent/tweet?original_referer=' + link + '&text=' + twitterText + '&tw_p=tweetbutton&url=' + link;
            window.open(url, '_blank', 'width=400,height=500');
        }
        this.track.track('share header', network);
    };
    HeaderComponent.prototype.opencloseAbout = function () {
        if (window.innerWidth < 768) {
            this.aboutOpen = !this.aboutOpen;
            if (this.aboutOpen) {
                document.body.style.overflow = 'hidden';
            }
            else {
                document.body.style.overflow = '';
            }
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.audio.nativeElement.volume = 0.1;
        if (window.innerWidth > 767) {
            if (this.global.sound) {
                this.audio.nativeElement.play();
            }
        }
    };
    HeaderComponent.prototype.select = function (page, num) {
        this.paging.current = page;
        this.paging.emitter.emit({ page: page, section: num });
        this.current = num;
        this.opencloseMenu();
    };
    HeaderComponent.prototype.getSoundState = function () {
        if (this.global.sound) {
            return 'on';
        }
        else {
            return 'off';
        }
    };
    HeaderComponent.prototype.getColorState = function () {
        if (this.global.color) {
            return 'dark';
        }
        else {
            return 'bright';
        }
    };
    HeaderComponent.prototype.switchSound = function () {
        this.global.sound = !this.global.sound;
        if (this.global.sound) {
            this.audio.nativeElement.play();
        }
        else {
            this.audio.nativeElement.pause();
        }
        this.track.track('switch sound:', this.global.sound.toString());
    };
    HeaderComponent.prototype.switchColor = function () {
        this.global.color = !this.global.color;
        this.track.track('switch color:', this.global.color.toString());
    };
    HeaderComponent.prototype.selectPage = function (num) {
        if (this.paging.enable[num] && this.paging.current !== -1) {
            this.paging.current = num;
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_6" /* ViewChild */])('audio'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], HeaderComponent.prototype, "audio", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_5" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__paging_service_service__["a" /* PagingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__paging_service_service__["a" /* PagingServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _d || Object])
], HeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-abracadabra/incision-abracadabra.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'Расшифровать'\" [num]=\"'05.2'\" (enlarge)=\"this.enlarge()\">\n      <p class=\"extra\">\n        d sgopmto owprv yrr uonpxus - wye nnvt 30,000 ieopxv a dyaxa, 12 kolbf e wdy, 6 uklw t zevu, v abol rnimlh acv lsnu svmhvbwy\n        jdnjy, kecz glxp svd ht tqy jifxxps wye ahuk, cybo yrr goewhqac cbpnwifxf jhu ermu ifslfiri tqd nsyp uh cfxfxtqtci\n        br vdlc pbv ahlg.\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n\n        <div class=\"page last\">\n          <app-menu #menu [incision]=\"true\" [page]=\"1\" [items]=\"[\n  'Закладки',\n  'Складмены',\n  'Поставщики',\n  'Работа магазинов',\n  'Вывод средств',\n  'Биржа труда',\n  'Гаранты и депозиты',\n  'Работа администрации'\n  ]\">\n          </app-menu>\n          <!--<div class=\"close magenta\" #close (click)=\"this.shrink()\"></div>-->\n          <app-p [extra]=\"true\" [middle]=\"true\">\n            <p class=\"blacked\">Спецпредложение для дилеров&nbsp;&mdash; всего за&nbsp;30&nbsp;000 рублей в&nbsp;месяц, 12&nbsp;часов в&nbsp;сутки\n              6&nbsp;дней в&nbsp;неделю я&nbsp;буду консультировать всех ваших работников по&nbsp;безопасности, помогать\n              им&nbsp;настраивать любые системы для работы, искать персональные решения для каждого работника и&nbsp;постоянно\n              буду на&nbsp;связи для помощи.</p>\n          </app-p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-abracadabra/incision-abracadabra.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close.magenta {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-magenta.svg") + ");\n}\n.close:hover {\n  opacity: 0.8;\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\n.inner-image {\n  max-width: 100%;\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n.grey.last {\n  padding-bottom: 100px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.darkgrey {\n  background-color: #666666;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 120px;\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\napp-infographics-freenet {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-freenet {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-freenet {\n    padding-left: 0;\n  }\n}\napp-infographics-i2p {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-i2p {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-i2p {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-abracadabra/incision-abracadabra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionAbracadabraComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncisionAbracadabraComponent = IncisionAbracadabraComponent_1 = (function (_super) {
    __extends(IncisionAbracadabraComponent, _super);
    function IncisionAbracadabraComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        _this.hideExtra = false;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    IncisionAbracadabraComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        //    console.log('incision tor activate');
    };
    IncisionAbracadabraComponent.prototype.workWithScrollPosition = function (newY) {
        //  console.log('work with scroll in incision', newY);
        if (this.enabled) {
            //   console.log(this.getOffsetTop(this.extraPage.nativeElement));
            /* if (this.extraPage.nativeElement.offsetParent) {
               if (window.innerWidth > 767) {
                 (this.closeButton.nativeElement as HTMLElement).style.top =
                   Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
               } else {
                 (this.closeButton.nativeElement as HTMLElement).style.top = '-25px';
      
               }
             }*/
            // (this.menu.nativeElement as HTMLElement).style.top = newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92 + 'px';
            if (this.menu.nativeElement.offsetParent) {
                this.menu.nativeElement.style.transform =
                    'translateY(' + (newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92) + 'px' + ')';
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionAbracadabraComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.track.track('incision-abracadabra', 'open');
    };
    IncisionAbracadabraComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        this.topPage.nativeElement.style.height = height + 'px';
        this.onShrink.emit(this.element);
    };
    IncisionAbracadabraComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionAbracadabraComponent;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionAbracadabraComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionAbracadabraComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _c || Object)
], IncisionAbracadabraComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]) === "function" && _d || Object)
], IncisionAbracadabraComponent.prototype, "onShrink", void 0);
IncisionAbracadabraComponent = IncisionAbracadabraComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_5" /* Component */])({
        selector: 'app-incision-abracadabra',
        template: __webpack_require__("../../../../../src/app/incision-abracadabra/incision-abracadabra.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-abracadabra/incision-abracadabra.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_0" /* forwardRef */])(function () { return IncisionAbracadabraComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _g || Object])
], IncisionAbracadabraComponent);

var IncisionAbracadabraComponent_1, _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=incision-abracadabra.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-card/incision-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'Выведи деньги уже сегодня!'\" [num]=\"'05.1'\" (enlarge)=\"this.enlarge()\">\n      <p class=\"extra\">\n        Карта [название банка] на&nbsp;вымышленные данные. Цена&nbsp;&mdash; 30&nbsp;000&nbsp;рублей.\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n\n        <div class=\"page last\">\n          <app-menu #menu [incision]=\"true\" [page]=\"1\" [items]=\"[\n  'Закладки',\n  'Складмены',\n  'Поставщики',\n  'Работа магазинов',\n  'Вывод средств',\n  'Биржа труда',\n  'Гаранты и депозиты',\n  'Работа администрации'\n  ]\">\n          </app-menu>\n          <div class=\"close magenta\" #close (click)=\"this.shrink()\"></div>\n          <app-p [extra]=\"true\">\n            <p class=\"blacked\">Entering extra content</p>\n          </app-p>\n          <app-title [glytch]=\"true\" [num]=\"'05.1'\" [title]=\"'ВЫВЕДИ ДЕНЬГИ УЖЕ СЕГОДНЯ'\">\n\n          </app-title>\n\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked\">\n              <p class=\"margined magenta-select blacked\"> Карта [название банка] на&nbsp;вымышленные данные. Цена&nbsp;&mdash; 30&nbsp;000&nbsp;рублей.</p>\n              <p class=\"margined magenta-select blacked\">Карта без дропа (нет реального хозяина), все данные вымышлены!</p>\n              <p class=\"margined magenta-select blacked\">Подойдет для личного пользования и&nbsp;под обнал электронных платежных систем.</p>\n              <p class=\"margined magenta-select blacked\">Комплект: карта, анкета с&nbsp;данными, СИМ, пин, кодовое слово.</p>\n              <p class=\"margined magenta-select blacked\">За&nbsp;блокировку банком ответственности не&nbsp;несу! Я&nbsp;гарантирую, что карты на&nbsp;вымышленные данные!!!</p>\n\n          </app-p>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"page\">\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-card/incision-card.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close.magenta {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-magenta.svg") + ");\n}\n.close:hover {\n  opacity: 0.8;\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\n.inner-image {\n  max-width: 100%;\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n.grey.last {\n  padding-bottom: 100px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.darkgrey {\n  background-color: #666666;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 120px;\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\napp-infographics-freenet {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-freenet {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-freenet {\n    padding-left: 0;\n  }\n}\napp-infographics-i2p {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-i2p {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-i2p {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-card/incision-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionCardComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncisionCardComponent = IncisionCardComponent_1 = (function (_super) {
    __extends(IncisionCardComponent, _super);
    function IncisionCardComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        _this.hideExtra = false;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    IncisionCardComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        //    console.log('incision tor activate');
    };
    IncisionCardComponent.prototype.workWithScrollPosition = function (newY) {
        //  console.log('work with scroll in incision', newY);
        if (this.enabled) {
            //   console.log(this.getOffsetTop(this.extraPage.nativeElement));
            if (this.extraPage.nativeElement.offsetParent) {
                if (window.innerWidth > 767) {
                    this.closeButton.nativeElement.style.top =
                        Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
                }
                else {
                    this.closeButton.nativeElement.style.top =
                        Math.max(0, newY - this.getOffsetTop(this.extraPage.nativeElement) + 55) + 'px';
                }
            }
            // (this.menu.nativeElement as HTMLElement).style.top = newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92 + 'px';
            if (this.menu.nativeElement.offsetParent) {
                this.menu.nativeElement.style.transform =
                    'translateY(' + (newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92) + 'px' + ')';
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionCardComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.track.track('incision-card', 'open');
    };
    IncisionCardComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        this.topPage.nativeElement.style.height = height + 'px';
        this.onShrink.emit(this.element);
    };
    IncisionCardComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionCardComponent;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionCardComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionCardComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], IncisionCardComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _d || Object)
], IncisionCardComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]) === "function" && _e || Object)
], IncisionCardComponent.prototype, "onShrink", void 0);
IncisionCardComponent = IncisionCardComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_5" /* Component */])({
        selector: 'app-incision-card',
        template: __webpack_require__("../../../../../src/app/incision-card/incision-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-card/incision-card.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_0" /* forwardRef */])(function () { return IncisionCardComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _h || Object])
], IncisionCardComponent);

var IncisionCardComponent_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=incision-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-freenet/incision-freenet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'FREENET & I2P'\" [num]=\"'02.1'\" (enlarge)=\"this.enlarge()\">\n      <p class=\"extra\">\n        Сторонники приватности активно осваивали не&nbsp;только Tor, но&nbsp;и&nbsp;менее популярные анонимные сети, в&nbsp;том числе\n        Freenet и&nbsp;Invisible Internet Project (I2P)...\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n\n        <div class=\"page\">\n          <app-menu #menu [incision]=\"true\" [page]=\"0\">\n          </app-menu>\n          <div class=\"close\" #close (click)=\"this.shrink()\"></div>\n          <app-p [extra]=\"true\">\n            <p class=\"blacked\">Entering extra content</p>\n          </app-p>\n          <app-title [glytch]=\"true\" [num]=\"'02.1'\" [title]=\"'Freenet & I2P'\">\n\n          </app-title>\n\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined yellow-select blacked\">\n              Сторонники приватности активно осваивали не&nbsp;только Tor, но&nbsp;и&nbsp;менее популярные анонимные сети, в&nbsp;том числе\n              Freenet и&nbsp;Invisible Internet Project (I2P).\n            </p>\n            <p class=\"margined yellow-select blacked\">\n              <span>Freenet</span> существует с&nbsp;2000 года и&nbsp;по&nbsp;сути представляет собой анонимное <span>хранилище</span>              защищенных данных. Главное преимущество сети&nbsp;&mdash; отсутствие центральных <span>серверов</span>. Вся\n              информация разбивается на&nbsp;блоки и&nbsp;в&nbsp;зашифрованном виде хранится на&nbsp;компьютерах пользователей.\n              Несмотря на&nbsp;наличие ряда сайтов, анонимных форумов и&nbsp;собственного почтового клиента, пока Freenet\n              выглядит как привет из&nbsp;90-х, а&nbsp;потому в&nbsp;основном ею&nbsp;пользуются энтузиасты-либертарианцы\n              и&nbsp;сторонники <span>криптоанархизма.</span>\n            </p>\n          </app-p>\n\n          <app-p [extra]=\"true\">\n            <app-loading-interface [extra]=\"true\" [title]=\"'Loading infographics...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n            </app-loading-interface>\n          </app-p>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"darkgrey\">\n      <div class=\"page\">\n        <app-infographics-freenet>\n\n        </app-infographics-freenet>\n      </div>\n    </div>\n\n    <div class=\"grey\">\n      <div class=\"page\">\n        <app-p [middle]=\"true\" [extra]=\"true\">\n          <p class=\"margined yellow-select blacked\">Созданная в&nbsp;2003 году Invisible Internet Project, или I2P, представляет собой <span>децентрализованную</span>            сеть. Данные в&nbsp;ней передаются по&nbsp;туннелям из&nbsp;промежуточных узлов, роль которых исполняют другие\n            пользователи I2P.\n          </p>\n          <p class=\"margined yellow-select blacked\">\n            Для защиты информации применяется так называемая <span>&laquo;чесночная&raquo; маршрутизация:</span> каждый пакет\n            данных шифруется, объединяется с&nbsp;другими пакетами и&nbsp;передается через два узла в&nbsp;исходящем туннеле\n            и&nbsp;два узла во&nbsp;входящем. При этом промежуточные узлы не&nbsp;знают, какова дальнейшая судьба передаваемых\n            пакетов данных, и&nbsp;будет&nbsp;ли следующий узел конечным. Туннели по&nbsp;умолчанию меняются каждые десять\n            минут.\n          </p>\n        </app-p>\n        <app-p [extra]=\"true\">\n          <app-loading-interface [extra]=\"true\" [title]=\"'Loading infographics...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n          </app-loading-interface>\n        </app-p>\n      </div>\n    </div>\n\n\n    <div class=\"darkgrey\">\n      <div class=\"page\">\n        <app-infographics-i2p>\n\n        </app-infographics-i2p>\n      </div>\n    </div>\n\n    <div class=\"grey last\">\n      <div class=\"page\">\n        <app-p [middle]=\"true\" [extra]=\"true\">\n          <p class=\"margined yellow-select blacked\">На&nbsp;сегодня I2P обладает развитой <span>инфраструктурой</span>&nbsp;&mdash; в&nbsp;большинство популярных клиентов\n            уже встроены зашифрованные мессенджеры почтовые сервисы и&nbsp;даже торрент-трекеры. Тем не&nbsp;менее I2P, как\n            и&nbsp;Freenet, в&nbsp;разы менее популярна и&nbsp;востребована по&nbsp;сравнению с&nbsp;Tor, хотя и&nbsp;обладает\n            рядом преимуществ как в&nbsp;<span>безопасности</span> передачи данных, так и&nbsp;в&nbsp;соблюдении <span>анонимности.</span>\n          </p>\n        </app-p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page\">\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-freenet/incision-freenet.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close:hover {\n  opacity: 0.8;\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n.grey.last {\n  padding-bottom: 100px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.darkgrey {\n  background-color: #666666;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 120px;\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\napp-infographics-freenet {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-freenet {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-freenet {\n    padding-left: 0;\n  }\n}\napp-infographics-i2p {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-i2p {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-i2p {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-freenet/incision-freenet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionFreenetComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncisionFreenetComponent = IncisionFreenetComponent_1 = (function (_super) {
    __extends(IncisionFreenetComponent, _super);
    function IncisionFreenetComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        _this.hideExtra = false;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    IncisionFreenetComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        //    console.log('incision tor activate');
    };
    IncisionFreenetComponent.prototype.workWithScrollPosition = function (newY) {
        //  console.log('work with scroll in incision', newY);
        if (this.enabled) {
            //   console.log(this.getOffsetTop(this.extraPage.nativeElement));
            if (this.extraPage.nativeElement.offsetParent) {
                if (window.innerWidth > 767) {
                    this.closeButton.nativeElement.style.top =
                        Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
                }
                else {
                    this.closeButton.nativeElement.style.top =
                        Math.max(0, newY - this.getOffsetTop(this.extraPage.nativeElement) + 55) + 'px';
                }
            }
            // (this.menu.nativeElement as HTMLElement).style.top = newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92 + 'px';
            if (this.menu.nativeElement.offsetParent) {
                this.menu.nativeElement.style.transform =
                    'translateY(' + (newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92) + 'px' + ')';
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionFreenetComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.track.track('incision-freenet', 'open');
    };
    IncisionFreenetComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        this.topPage.nativeElement.style.height = height + 'px';
        this.onShrink.emit(this.element);
    };
    IncisionFreenetComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionFreenetComponent;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionFreenetComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionFreenetComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], IncisionFreenetComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _d || Object)
], IncisionFreenetComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]) === "function" && _e || Object)
], IncisionFreenetComponent.prototype, "onShrink", void 0);
IncisionFreenetComponent = IncisionFreenetComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_5" /* Component */])({
        selector: 'app-incision-freenet',
        template: __webpack_require__("../../../../../src/app/incision-freenet/incision-freenet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-freenet/incision-freenet.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_0" /* forwardRef */])(function () { return IncisionFreenetComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _h || Object])
], IncisionFreenetComponent);

var IncisionFreenetComponent_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=incision-freenet.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-fskn/incision-fskn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'МВД пыталось вскрыть Tor'\" [num]=\"'03.1'\" (enlarge)=\"this.enlarge()\">\n      <p class=\"extra\">\n        Источник &laquo;Ленты.ру&raquo; в&nbsp;силовых структурах утверждает, что в&nbsp;ФСКН искали способы борьбы с&nbsp;продажей\n        наркотиков в&nbsp;Tor...\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n\n        <div class=\"page last\">\n          <app-menu #menu [incision]=\"true\" [page]=\"1\" [items]=\"[\n  'Прогулка по&nbsp;району',\n  'Крыша от&nbsp;ФСКН',\n  'Не&nbsp;было денег',\n  'Переполох в&nbsp;ГУНК',\n  'Будущее наркоконтроля'\n  ]\">\n          </app-menu>\n          <div class=\"close blue\" #close (click)=\"this.shrink()\"></div>\n          <app-p [extra]=\"true\" [middle]=\"true\">\n            <p class=\"blacked\">Источник &laquo;Ленты.ру&raquo; в&nbsp;силовых структурах утверждает, что в&nbsp;ФСКН искали <span>способы борьбы</span>              с&nbsp;продажей наркотиков в&nbsp;Tor. В&nbsp;середине 2015 года руководство ведомства даже консультировалось\n              по&nbsp;этому вопросу с&nbsp;коллегами из&nbsp;других силовых структур.</p>\n            <p class=\"blacked\">\n              Но&nbsp;консультации прекратились, после того как осенью 2015 года Центральный научно-исследовательский институт экономики,\n              информатики и&nbsp;систем управления (ЦНИИ ЭИСУ) <span>расторг</span> четыре контракта с&nbsp;МВД,\n              в&nbsp;том числе договор на&nbsp;поиск алгоритмов деанонимизации пользователей Tor.</p>\n          </app-p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"page\">\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-fskn/incision-fskn.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close.magenta {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-magenta.svg") + ");\n}\n.close.blue {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-blue.svg") + ");\n  top: 0;\n}\n.close:hover {\n  opacity: 0.8;\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\n.inner-image {\n  max-width: 100%;\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n.grey.last {\n  padding-bottom: 100px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.darkgrey {\n  background-color: #666666;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 120px;\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\napp-infographics-freenet {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-freenet {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-freenet {\n    padding-left: 0;\n  }\n}\napp-infographics-i2p {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-i2p {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-i2p {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-fskn/incision-fskn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionFsknComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncisionFsknComponent = IncisionFsknComponent_1 = (function (_super) {
    __extends(IncisionFsknComponent, _super);
    function IncisionFsknComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        _this.hideExtra = false;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    IncisionFsknComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        //    console.log('incision tor activate');
    };
    IncisionFsknComponent.prototype.workWithScrollPosition = function (newY) {
        //  console.log('work with scroll in incision', newY);
        if (this.enabled) {
            //   console.log(this.getOffsetTop(this.extraPage.nativeElement));
            /* if (this.extraPage.nativeElement.offsetParent) {
               if (window.innerWidth > 767) {
                 (this.closeButton.nativeElement as HTMLElement).style.top =
                   Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
               } else {
                 (this.closeButton.nativeElement as HTMLElement).style.top = '-25px';
       
               }
             }*/
            // (this.menu.nativeElement as HTMLElement).style.top = newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92 + 'px';
            if (this.menu.nativeElement.offsetParent) {
                this.menu.nativeElement.style.transform =
                    'translateY(' + (newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92) + 'px' + ')';
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionFsknComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.track.track('incision-fskn-tor', 'open');
    };
    IncisionFsknComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        this.topPage.nativeElement.style.height = height + 'px';
        this.onShrink.emit(this.element);
    };
    IncisionFsknComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionFsknComponent;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionFsknComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionFsknComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], IncisionFsknComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _d || Object)
], IncisionFsknComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]) === "function" && _e || Object)
], IncisionFsknComponent.prototype, "onShrink", void 0);
IncisionFsknComponent = IncisionFsknComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_5" /* Component */])({
        selector: 'app-incision-fskn',
        template: __webpack_require__("../../../../../src/app/incision-fskn/incision-fskn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-fskn/incision-fskn.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_0" /* forwardRef */])(function () { return IncisionFsknComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _h || Object])
], IncisionFsknComponent);

var IncisionFsknComponent_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=incision-fskn.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-grower/incision-grower.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'Монолог гровера'\" [num]=\"'03.1'\" (enlarge)=\"this.enlarge()\">\n      <p class=\"extra\">\n        Я&nbsp;десять лет растил марихуану на&nbsp;даче. Сначала просто для друзей, потом начал продавать, а&nbsp;последние три года\n        поставлял ее магазину...\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n\n        <div class=\"page last\">\n          <app-menu #menu [incision]=\"true\" [page]=\"1\" [items]=\"[\n  'Закладки',\n  'Складмены',\n  'Поставщики',\n  'Работа магазинов',\n  'Вывод средств',\n  'Биржа труда',\n  'Гаранты и депозиты',\n  'Работа администрации'\n  ]\">\n          </app-menu>\n          <div class=\"close magenta\" #close (click)=\"this.shrink()\"></div>\n          <app-p [extra]=\"true\">\n            <p class=\"blacked\">Entering extra content</p>\n          </app-p>\n          <app-title [glytch]=\"true\" [num]=\"'03.1'\" [title]=\"'Монолог гровера'\">\n\n          </app-title>\n\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked\">\n              Я&nbsp;десять лет растил марихуану на&nbsp;даче. Сначала просто для друзей, потом начал продавать, а&nbsp;последние три года\n              поставлял ее магазину на&nbsp;RAMP.</p>\n\n            <p class=\"margined magenta-select blacked\">Тщательно заботился о&nbsp;безопасности. Оборудовал отдельный сарай, а&nbsp;лампы и&nbsp;вентиляторы запитал\n              от&nbsp;генератора, чтобы никто не&nbsp;удивлялся расходу электричества. А&nbsp;еще старался не&nbsp;покупать\n              землю, кокосовую смесь и&nbsp;удобрения в&nbsp;одних и&nbsp;тех&nbsp;же местах.</p>\n\n            <p class=\"margined magenta-select blacked\">Все инструкции по&nbsp;гровингу нашел в&nbsp;интернете. Если знаешь английский, то&nbsp;на&nbsp;форумах не&nbsp;только\n              скачаешь профессионально написанные учебники, но&nbsp;и&nbsp;проконсультируешься у&nbsp;настоящих гуру. Они\n              подскажут, что и&nbsp;как лучше выращивать и помогут со&nbsp;всеми вопросами во&nbsp;время цикла.</p>\n\n            <p class=\"margined magenta-select blacked\">Но&nbsp;главная проблема&nbsp;&mdash; не&nbsp;вырастить урожай, а&nbsp;не&nbsp;спалиться при продаже. Раньше\n              приходилось искать покупателей через знакомых и&nbsp;общаться с&nbsp;ними лично, а&nbsp;это весьма небезопасно.\n            </p>\n\n            <p class=\"margined magenta-select blacked\">Так что со&nbsp;временем я&nbsp;сделал выбор в&nbsp;пользу анонимности и&nbsp;начал продавать через даркнет.\n              Но&nbsp;и&nbsp;тут все непросто &mdash;&nbsp;сперва пишешь дилеру, потом делаешь ему закладку с&nbsp;пробной\n              партией. Если все устраивает, то&nbsp;заранее договариваетесь о&nbsp;конкретной дате, делаешь крупный клад,\n              получаешь деньги и&nbsp;скидываешь координаты с&nbsp;описанием. Конечно, вся сделка оформляется через гарант,\n              но&nbsp;все равно каждый раз не&nbsp;по&nbsp;себе&nbsp;&mdash; боишься потерять товар и&nbsp;доверие покупателя.\n            </p>\n          </app-p>\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked\"> <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_4.gif\" /></p>\n          </app-p>\n\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked\">Я&nbsp;работал по&nbsp;циклам. Один полный цикл от&nbsp;посадки семян до&nbsp;готового урожая&nbsp;&mdash; это\n              два-три месяца, после чего у меня на&nbsp;руках оказывалось где-то 30&nbsp;килограммов сортовой марихуаны.\n              Пока шел следующий цикл, я&nbsp;продавал ее закладками по&nbsp;пять кило и&nbsp;имел с&nbsp;этого около миллиона\n              рублей.\n\n            </p>\n          </app-p>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"page\">\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-grower/incision-grower.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close.magenta {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-magenta.svg") + ");\n}\n.close:hover {\n  opacity: 0.8;\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\n.inner-image {\n  max-width: 100%;\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n.grey.last {\n  padding-bottom: 100px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.darkgrey {\n  background-color: #666666;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 120px;\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\napp-infographics-freenet {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-freenet {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-freenet {\n    padding-left: 0;\n  }\n}\napp-infographics-i2p {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-i2p {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-i2p {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-grower/incision-grower.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionGrowerComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncisionGrowerComponent = IncisionGrowerComponent_1 = (function (_super) {
    __extends(IncisionGrowerComponent, _super);
    function IncisionGrowerComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        _this.hideExtra = false;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    IncisionGrowerComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        //    console.log('incision tor activate');
    };
    IncisionGrowerComponent.prototype.workWithScrollPosition = function (newY) {
        //  console.log('work with scroll in incision', newY);
        if (this.enabled) {
            //   console.log(this.getOffsetTop(this.extraPage.nativeElement));
            if (this.extraPage.nativeElement.offsetParent) {
                if (window.innerWidth > 767) {
                    this.closeButton.nativeElement.style.top =
                        Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
                }
                else {
                    this.closeButton.nativeElement.style.top =
                        Math.max(0, newY - this.getOffsetTop(this.extraPage.nativeElement) + 55) + 'px';
                }
            }
            // (this.menu.nativeElement as HTMLElement).style.top = newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92 + 'px';
            if (this.menu.nativeElement.offsetParent) {
                this.menu.nativeElement.style.transform =
                    'translateY(' + (newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92) + 'px' + ')';
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionGrowerComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.track.track('incision-grower', 'open');
    };
    IncisionGrowerComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        this.topPage.nativeElement.style.height = height + 'px';
        this.onShrink.emit(this.element);
    };
    IncisionGrowerComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionGrowerComponent;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionGrowerComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionGrowerComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], IncisionGrowerComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _d || Object)
], IncisionGrowerComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]) === "function" && _e || Object)
], IncisionGrowerComponent.prototype, "onShrink", void 0);
IncisionGrowerComponent = IncisionGrowerComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_5" /* Component */])({
        selector: 'app-incision-grower',
        template: __webpack_require__("../../../../../src/app/incision-grower/incision-grower.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-grower/incision-grower.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_0" /* forwardRef */])(function () { return IncisionGrowerComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _h || Object])
], IncisionGrowerComponent);

var IncisionGrowerComponent_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=incision-grower.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-interview/incision-interview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'Интервью с&nbsp;дилером'\" [num]=\"'04.1'\" (enlarge)=\"this.enlarge()\">\n\n      <p class=\"extra\">\n        Давно&nbsp;ли вы&nbsp;работаете с&nbsp;клиентами из&nbsp;даркнета? Вы&nbsp;работаете исключительно с&nbsp;продавцами на&nbsp;RAMP\n        ...\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n\n        <div class=\"page last\">\n          <app-menu #menu [incision]=\"true\" [page]=\"1\" [items]=\"[\n  'Закладки',\n  'Складмены',\n  'Поставщики',\n  'Работа магазинов',\n  'Вывод средств',\n  'Биржа труда',\n  'Гаранты и депозиты',\n  'Работа администрации'\n  ]\">\n          </app-menu>\n          <div class=\"close magenta\" #close (click)=\"this.shrink()\"></div>\n          <app-p [extra]=\"true\">\n            <p class=\"blacked\">Entering extra content</p>\n          </app-p>\n          <app-title [glytch]=\"true\" [num]=\"'04.1'\" [title]=\"'Интервью с&nbsp;дилером'\">\n\n          </app-title>\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Давно&nbsp;ли вы&nbsp;работаете с&nbsp;клиентами из&nbsp;даркнета? Вы&nbsp;работаете исключительно с&nbsp;продавцами на&nbsp;RAMP,\n              или у&nbsp;вас есть клиенты на других площадках? С&nbsp;какими видами наркотиков вы&nbsp;работаете?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                В&nbsp;даркнет перевели деятельность почти три года назад. Из&nbsp;даркнета работаю только с&nbsp;площадкой RAMP, но&nbsp;бывают\n                исключения. Направления, за&nbsp;которые отвечаю именно&nbsp;я,&nbsp;&mdash; каннабиноиды, эйфоретики, и&nbsp;понемногу\n                начинаю вводить ЛСД. Компаньоны занимаются кокаином, а&nbsp;также метамфетамином.\n              </p>\n\n            </app-p>\n          </div>\n\n\n          <!--<app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked\"> <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_8.gif\" /></p>\n          </app-p>-->\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Сколько лет вы&nbsp;в&nbsp;бизнесе? Занимались&nbsp;ли вы&nbsp;поставками наркотиков до&nbsp;формирования российских площадок\n              в&nbsp;Tor?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                В&nbsp;бизнесе я&nbsp;с&nbsp;начала 2010&nbsp;года. Занимался всегда как раз работой напрямую с&nbsp;офлайн-клиентами, но&nbsp;под\n                движением сообщества перешел в&nbsp;даркнет.\n              </p>\n\n            </app-p>\n          </div>\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Какова ваша модель бизнеса? Вы&nbsp;отвечаете за&nbsp;поставки на&nbsp;российский рынок или являетесь своеобразным агрегатором\n              заказов, передавая запросы российских селлеров в&nbsp;Tor их&nbsp;западным коллегам и&nbsp;занимаясь сопровождением\n              сделок?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                За&nbsp;последний год перешел на&nbsp;организацию закупок напрямую с&nbsp;ферм и&nbsp;лабораторий. Соответственно, и&nbsp;логистика\n                полностью своя.\n              </p>\n\n            </app-p>\n          </div>\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Какова периодичность и&nbsp;объем ваших поставок? Можете&nbsp;ли вы&nbsp;сказать что-то о&nbsp;поставках других дилеров?\n              Насколько различны поставщики? Существует&nbsp;ли &laquo;биржа поставок&raquo; или каждый использует свои каналы?\n              Насколько различен продукт у&nbsp;различных продавцов?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                Поставки происходят с&nbsp;разной периодичностью. Здесь влияют праздники, концерты, организации мероприятий, да&nbsp;и&nbsp;та&nbsp;же\n                сезонность. Вот на&nbsp;весенний период могу раскрыть поставки каннабиноидов. Марихуана (прессованная)&nbsp;&mdash;\n                шесть раз в&nbsp;месяц, гашиш и&nbsp;его производные&nbsp;&mdash; четыре раза в&nbsp;месяц. Биржи как таковой\n                нет, существует ряд организаций, которые могут доставить все, что требуется, но&nbsp;зачастую они убыточны.\n                На&nbsp;своем опыте могу сказать, что приятнее и удобнее работать напрямую с&nbsp;фермами и&nbsp;лабораториями.\n                Больше контроля качества и&nbsp;взаимодействия (в&nbsp;плане заключения выгодных сделок). Продукция [у&nbsp;различных\n                продавцов] пересекается примерно в&nbsp;20&nbsp;процентах случаев, и&nbsp;это вполне малый процент.\n              </p>\n\n            </app-p>\n          </div>\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Откуда обычно приходит товар и&nbsp;где он&nbsp;выгружается? Как он&nbsp;транспортируется и&nbsp;как попадает к&nbsp;конечным\n              покупателям? Занимаетесь ли&nbsp;вы&nbsp;организацией каналов поставок самостоятельно или отдаете это на&nbsp;аутсорс?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                Товар зачастую приходит через страны Азии, даже если заказывался в&nbsp;Европе. Там проще провезти и&nbsp;не&nbsp;поднять\n                шума. А&nbsp;к&nbsp;конечным покупателям он&nbsp;либо летит вертолетами и&nbsp;самолетами, либо доставляется\n                &laquo;службами доставки&raquo;. Внутри страны действует только аутсорс. За&nbsp;пределами (до&nbsp;границ\n                окрещенного государства [России])&nbsp;&mdash; сами.\n              </p>\n\n            </app-p>\n          </div>\n\n\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Каков ваш ежемесячный оборот и&nbsp;объем прибыли? Сколько вы&nbsp;тратите на&nbsp;отмыв и&nbsp;вывод средств? Знаете&nbsp;ли\n              вы&nbsp;что-то о&nbsp;доходах других продавцов? Сколько на&nbsp;самом деле получает площадка? Какой процент\n              сделок приходится на&nbsp;оптовые поставки и&nbsp;сколько денег это приносит? Что вы&nbsp;можете сказать о&nbsp;других\n              дилерах?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                За&nbsp;показательный месяц возьмем март. Оборот в&nbsp;месяц&nbsp;&mdash; примерно 150-250 килограммов марихуаны, 50-75\n                килограммов гашиша, около 400 таблеток MDMA, около 400 кристаллов MDMA (кристаллы в&nbsp;1-1,5&nbsp;миллиграмма).\n                С&nbsp;ЛСД (марки и&nbsp;готовый сахар) объем пока небольшой&nbsp;&mdash; чуть больше 500&nbsp;марок. Но&nbsp;для\n                сравнения&nbsp;&mdash; за&nbsp;две недели апреля продано уже 200 килограммов марихуаны. Вот вам наглядный\n                пример сезонного роста.\n              </p>\n              <p class=\"margined magenta-select blacked answer\">\n                Прибыль я&nbsp;разглашать не&nbsp;могу и&nbsp;на&nbsp;будущее советую не&nbsp;интересоваться данным вопросом. Скажу, что\n                лично мой доход составляет чуть больше 35&nbsp;тысяч долларов. Отмыв средств тоже не&nbsp;могу раскрыть,\n                так как все работают через свои каналы.\n              </p>\n              <p class=\"margined magenta-select blacked answer\">\n                Сама площадка почти ничего не&nbsp;зарабатывает. Люди, кто все организовали, получают немалые деньги, но&nbsp;тратят почти\n                все на&nbsp;себя (серверы, домены, взятки).\n              </p>\n              <p class=\"margined magenta-select blacked answer\">\n                У&nbsp;меня оптовые сделки&nbsp;&mdash; это почти 60&nbsp;процентов, но&nbsp;объем, к&nbsp;сожалению, падает. О&nbsp;других\n                дилерах не&nbsp;могу ничего рассказать. В&nbsp;нашем деле не&nbsp;принято обсуждать данные вопросы даже между\n                собой, так что извините. Назовем это кодексом.\n              </p>\n\n            </app-p>\n          </div>\n\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked\"> <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_9.gif\" /></p>\n          </app-p>\n\n\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Наблюдаете&nbsp;ли вы&nbsp;рост спроса за&nbsp;последние годы? Насколько это связано с&nbsp;развитием наркорынка в&nbsp;Tor?\n              На&nbsp;какие вещества растет спрос?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                Рост происходит, причем не&nbsp;слабый. Связано напрямую с&nbsp;интернет-торговлей. Стало гораздо проще купить что-то. Даже\n                проще, чем доехать до&nbsp;своего местного дилера. К&nbsp;примеру, сидит человек на&nbsp;работе, хочет [употребить]\n                что-то. Находит ближайший тайник и&nbsp;не&nbsp;задумывается о&nbsp;звонках и&nbsp;шифровках с&nbsp;дилерами\n                в&nbsp;офлайне.\n              </p>\n              <p class=\"margined magenta-select blacked answer\">\n                Но&nbsp;не&nbsp;знаю, как там с&nbsp;кокаином. Лично я&nbsp;им&nbsp;не&nbsp;торгую, это дело моих компаньонов.\n              </p>\n\n            </app-p>\n          </div>\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Возникают&nbsp;ли у&nbsp;вас проблемы с&nbsp;законом? Сотрудники силовых структур в&nbsp;курсе вашего бизнеса? Если&nbsp;да,\n              то&nbsp;как строится ваше взаимодействие? Сколько стоит крыша? Как высоко эта крыша расположена и&nbsp;в&nbsp;каком\n              ведомстве? Часто&nbsp;ли приходится осуществлять поставки товара для &laquo;ведомственных целей&raquo;?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                Проблемы с&nbsp;законом возникают у&nbsp;тех, кто его нарушает. Бывают, конечно, попытки уличить нас в&nbsp;чем-то, но&nbsp;силы\n                денег и&nbsp;алчности вполне хватает на&nbsp;решение данных проблем. Сотрудники в&nbsp;курсе, но&nbsp;зачастую\n                не&nbsp;могут связать факты.\n              </p>\n              <p class=\"margined magenta-select blacked answer\">\n                &laquo;Крыша&raquo; стоит четверть дохода. Сумма опять&nbsp;же не&nbsp;может быть названа. Взаимодействие&nbsp;&mdash; сугубо\n                деловые отношения. Иногда поставки приходится совершать в&nbsp;убыток, но&nbsp;это зачастую учитывается в&nbsp;оплату\n                защиты.\n              </p>\n              <p class=\"margined magenta-select blacked answer\">\n                Остатки ФСКН пытаются показать, как хорошо они работают, но&nbsp;все их&nbsp;&laquo;поимки&raquo;&nbsp;&mdash; сугубо спектакли.\n              </p>\n\n\n            </app-p>\n          </div>\n\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Сколько иностранцев работают на&nbsp;RAMP? Есть&nbsp;ли заграничные дилеры, нанимающие русскоговорящих операторов?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                В&nbsp;силу методов работы наших органов правопорядка иностранцев, пожалуй, меньше пяти процентов. Но&nbsp;объективно оценить\n                не&nbsp;могу, так как сам работаю только с&nbsp;русскими.\n              </p>\n\n\n\n            </app-p>\n          </div>\n\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Почему на&nbsp;площадке практически не&nbsp;встречается героин? Существует&nbsp;ли эмбарго, или низкий уровень предложения\n              связан с&nbsp;отсутствием спроса и&nbsp;нужных каналов поставок?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                Героин просто перестал быть настолько популярным, как раньше. Сейчас средний возраст человека, покупающего что-то у&nbsp;конечного\n                дилера,&nbsp;&mdash; 26&nbsp;лет. А&nbsp;в&nbsp;26&nbsp;тебе хочется под ЛСД гулять по&nbsp;паркам или под\n                MDMA заниматься сексом с&nbsp;партнером.\n              </p>\n\n\n\n            </app-p>\n          </div>\n\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Насколько тесно вы&nbsp;знаете администрацию ресурса? Можете рассказать какие-либо подробности об&nbsp;их&nbsp;привычках\n              или взаимодействии с&nbsp;ними?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                Знаком заочно с&nbsp;одним из&nbsp;основателей. Общались только через шифрованные сообщения. Байки и&nbsp;истории существуют\n                у&nbsp;мелких селлеров, на&nbsp;моем уровне приходится существовать без ошибок. Соответственно, байки и&nbsp;истории\n                почти никогда не&nbsp;появляются.\n              </p>\n\n\n\n            </app-p>\n          </div>\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Как вы&nbsp;оцениваете перспективу наркорынка в&nbsp;российском Tor? Какой объем наркоторговля в&nbsp;Tor, по-вашему, занимает\n              от&nbsp;общего объема российского рынка?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                Tor занимает приблизительно половину всего наркорынка. Дальнейшая судьба зависит только от&nbsp;властей нашего государства.\n                Если уж&nbsp;они решат бороться по-настоящему, то&nbsp;все быстро закончится. Поэтому у&nbsp;всех есть план\n                отступления.\n              </p>\n            </app-p>\n          </div>\n\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked\"> <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_8.gif\" /></p>\n          </app-p>\n\n          <app-p [question]=\"true\" [short]=\"true\" [extra]=\"true\">\n            <p class=\"margined magenta-select blacked question\">\n              Ходит много слухов о&nbsp;закрытой части форума. Что там можно найти?\n            </p>\n\n          </app-p>\n          <div class=\"offset\">\n            <app-p [answer]=\"true\" [short]=\"true\" [extra]=\"true\">\n              <p class=\"margined magenta-select blacked answer\">\n                Ну, закрытая часть форума больше предназначена для налаживания связей и&nbsp;принятия определенных решений.\n              </p>\n              <p class=\"margined magenta-select blacked answer\">\n                У&nbsp;розничных дилеров это обсуждения районов работы. Часто можно видеть, что все торговцы будто по&nbsp;очереди раскладывают\n                клады в&nbsp;каждом районе. Это их&nbsp;модель рекламы.\n              </p>\n              <p class=\"margined magenta-select blacked answer\">\n                У&nbsp;таких, как&nbsp;мы, полу- и&nbsp;полностью оптовых,&nbsp;&mdash; это новые предложения и&nbsp;открытые заказы, своеобразные\n                аукционы, ну&nbsp;и&nbsp;некоторые вопросы для личного обучения и&nbsp;приобретения новых знаний.\n              </p>\n              <p class=\"margined magenta-select blacked answer\">\n                Ничего, скажем так, сильно секретного там и&nbsp;нет. Конечно, есть слухи, что мы&nbsp;там напрямую с&nbsp;Госдумой общаемся\n                и&nbsp;собираемся по&nbsp;субботам в&nbsp;дорогих ресторанах, но&nbsp;это не&nbsp;так.\n              </p>\n            </app-p>\n          </div>\n\n\n\n\n        </div>\n\n\n      </div>\n\n    </div>\n\n  </div>\n  <div class=\"page\">\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-interview/incision-interview.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close.magenta {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-magenta.svg") + ");\n}\n.close:hover {\n  opacity: 0.8;\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\n.inner-image {\n  max-width: 100%;\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n.grey.last {\n  padding-bottom: 100px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.darkgrey {\n  background-color: #666666;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 120px;\n}\n.page .offset {\n  margin-left: 84px;\n}\n@media (max-width: 767px) {\n  .page .offset {\n    margin-left: 0;\n  }\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n  background-color: black;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\napp-infographics-freenet {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-freenet {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-freenet {\n    padding-left: 0;\n  }\n}\napp-infographics-i2p {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-i2p {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-i2p {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-interview/incision-interview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionInterviewComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncisionInterviewComponent = IncisionInterviewComponent_1 = (function (_super) {
    __extends(IncisionInterviewComponent, _super);
    function IncisionInterviewComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        _this.hideExtra = false;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    IncisionInterviewComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        //    console.log('incision tor activate');
    };
    IncisionInterviewComponent.prototype.workWithScrollPosition = function (newY) {
        //  console.log('work with scroll in incision', newY);
        if (this.enabled) {
            //   console.log(this.getOffsetTop(this.extraPage.nativeElement));
            if (this.extraPage.nativeElement.offsetParent) {
                if (window.innerWidth > 767) {
                    this.closeButton.nativeElement.style.top =
                        Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
                }
                else {
                    this.closeButton.nativeElement.style.top =
                        Math.max(0, newY - this.getOffsetTop(this.extraPage.nativeElement) + 55) + 'px';
                }
            }
            // (this.menu.nativeElement as HTMLElement).style.top = newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92 + 'px';
            if (this.menu.nativeElement.offsetParent) {
                this.menu.nativeElement.style.transform =
                    'translateY(' + (newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92) + 'px' + ')';
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionInterviewComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.track.track('incision-interview', 'open');
    };
    IncisionInterviewComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        this.topPage.nativeElement.style.height = height + 'px';
        this.onShrink.emit(this.element);
    };
    IncisionInterviewComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionInterviewComponent;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionInterviewComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionInterviewComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], IncisionInterviewComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _d || Object)
], IncisionInterviewComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]) === "function" && _e || Object)
], IncisionInterviewComponent.prototype, "onShrink", void 0);
IncisionInterviewComponent = IncisionInterviewComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_5" /* Component */])({
        selector: 'app-incision-interview',
        template: __webpack_require__("../../../../../src/app/incision-interview/incision-interview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-interview/incision-interview.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_0" /* forwardRef */])(function () { return IncisionInterviewComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _h || Object])
], IncisionInterviewComponent);

var IncisionInterviewComponent_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=incision-interview.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-protocols/incision-protocols.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'MESSAGING PROTOCOLS'\" [num]=\"'03.1'\" (enlarge)=\"this.enlarge()\">\n      <p class=\"extra\">\n        PGP (Pretty Good Privacy) &mdash;защищенный протокол для общения, разработанный криптографом Филиппом Циммерманом&nbsp;&mdash;\n        одним из&nbsp;идеологов движения шифропанков...\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n\n        <div class=\"page last\">\n          <app-menu #menu [incision]=\"true\" [page]=\"0\">\n          </app-menu>\n          <div class=\"close\" #close (click)=\"this.shrink()\"></div>\n          <app-p [extra]=\"true\">\n            <p class=\"blacked\">Entering extra content</p>\n          </app-p>\n          <app-title [glytch]=\"true\" [num]=\"'03.1'\" [title]=\"'Messaging protocols'\">\n\n          </app-title>\n\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined yellow-select blacked\">\n              1) <span>PGP (Pretty Good Privacy)</span>&nbsp;&mdash; защищенный протокол для общения, разработанный криптографом\n              Филиппом Циммерманом&nbsp;&mdash; одним из&nbsp;идеологов движения шифропанков. С&nbsp;помощью специальных\n              <span>алгоритмов</span> программа шифрует пересылаемые данные и&nbsp;создает две пары ключей для двух участников\n              диалога. Без них информацию практически <span>невозможно\n              расшифровать.</span>\n            </p>\n          </app-p>\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined yellow-select blacked\">\n              2) <span>Jabber</span>&nbsp;&mdash; популярный протокол обмена сообщениями. Благодаря открытому исходному коду\n              позволяет внедрять в&nbsp;переписку PGP- и&nbsp;<span>OTR-шифрование.</span>\n            </p>\n          </app-p>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"page\">\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-protocols/incision-protocols.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close:hover {\n  opacity: 0.8;\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n.grey.last {\n  padding-bottom: 100px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.darkgrey {\n  background-color: #707070;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 120px;\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\napp-infographics-about-tor {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-about-tor {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-about-tor {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 850px) {\n  app-menu {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-protocols/incision-protocols.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionProtocolsComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncisionProtocolsComponent = IncisionProtocolsComponent_1 = (function (_super) {
    __extends(IncisionProtocolsComponent, _super);
    function IncisionProtocolsComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        _this.hideExtra = false;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    IncisionProtocolsComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        // console.log('incision tor activate');
    };
    IncisionProtocolsComponent.prototype.workWithScrollPosition = function (newY) {
        //  console.log('work with scroll in incision', newY);
        if (this.enabled) {
            //  console.log(this.getOffsetTop(this.extraPage.nativeElement));
            if (this.extraPage.nativeElement.offsetParent) {
                if (window.innerWidth > 767) {
                    this.closeButton.nativeElement.style.top =
                        Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
                }
                else {
                    this.closeButton.nativeElement.style.top =
                        Math.max(0, newY - this.getOffsetTop(this.extraPage.nativeElement) + 55) + 'px';
                }
            }
            if (this.menu.nativeElement.offsetParent) {
                this.menu.nativeElement.style.transform =
                    'translateY(' + (newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92) + 'px' + ')';
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionProtocolsComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        //   console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.track.track('incision-protocols', 'open');
    };
    IncisionProtocolsComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        //   console.log(this.topPage.nativeElement.clientHeight, this.topPage.nativeElement.style.height);
        this.topPage.nativeElement.style.height = height + 'px';
        this.onShrink.emit(this.element);
    };
    IncisionProtocolsComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionProtocolsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionProtocolsComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionProtocolsComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], IncisionProtocolsComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _d || Object)
], IncisionProtocolsComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]) === "function" && _e || Object)
], IncisionProtocolsComponent.prototype, "onShrink", void 0);
IncisionProtocolsComponent = IncisionProtocolsComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_5" /* Component */])({
        selector: 'app-incision-protocols',
        template: __webpack_require__("../../../../../src/app/incision-protocols/incision-protocols.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-protocols/incision-protocols.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_0" /* forwardRef */])(function () { return IncisionProtocolsComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _h || Object])
], IncisionProtocolsComponent);

var IncisionProtocolsComponent_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=incision-protocols.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-roles/incision-roles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'Глоссарий'\" [num]=\"'08.1'\" (enlarge)=\"this.enlarge()\">\n      <p class=\"extra\">\n      Кто работает на&nbsp;RAMP\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n\n        <div class=\"page last\">\n          <app-menu #menu [incision]=\"true\" [page]=\"1\" [items]=\"[\n  'Закладки',\n  'Складмены',\n  'Поставщики',\n  'Работа магазинов',\n  'Вывод средств',\n  'Биржа труда',\n  'Гаранты и депозиты',\n  'Работа администрации'\n  ]\">\n          </app-menu>\n          <div class=\"close magenta\" #close (click)=\"this.shrink()\"></div>\n          <app-p [extra]=\"true\">\n            <p class=\"blacked\">Entering extra content</p>\n          </app-p>\n          <app-title [glytch]=\"true\" [num]=\"'08.1'\" [title]=\"'Глоссарий'\">\n\n          </app-title>\n\n          <app-p [extra]=\"true\">\n            <app-loading-interface [extra]=\"true\" [title]=\"'Loading infographics...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n            </app-loading-interface>\n          </app-p>\n\n        </div>\n\n\n      </div>\n\n    </div>\n    <div class=\"darkgrey\">\n      <div class=\"page\">\n        <app-infographics-roles>\n\n        </app-infographics-roles>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"page\">\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-roles/incision-roles.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close:hover {\n  opacity: 0.8;\n}\n.close.magenta {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-magenta.svg") + ");\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n.grey.last {\n  padding-bottom: 100px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.darkgrey {\n  background-color: #666666;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 120px;\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\napp-infographics-roles {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-roles {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-roles {\n    padding-left: 0;\n  }\n}\napp-infographics-i2p {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-i2p {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-i2p {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-roles/incision-roles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionRolesComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncisionRolesComponent = IncisionRolesComponent_1 = (function (_super) {
    __extends(IncisionRolesComponent, _super);
    function IncisionRolesComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        _this.hideExtra = false;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    IncisionRolesComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        //    console.log('incision tor activate');
    };
    IncisionRolesComponent.prototype.workWithScrollPosition = function (newY) {
        //  console.log('work with scroll in incision', newY);
        if (this.enabled) {
            //   console.log(this.getOffsetTop(this.extraPage.nativeElement));
            if (this.extraPage.nativeElement.offsetParent) {
                if (window.innerWidth > 767) {
                    this.closeButton.nativeElement.style.top =
                        Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
                }
                else {
                    this.closeButton.nativeElement.style.top =
                        Math.max(0, newY - this.getOffsetTop(this.extraPage.nativeElement) + 55) + 'px';
                }
            }
            // (this.menu.nativeElement as HTMLElement).style.top = newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92 + 'px';
            if (this.menu.nativeElement.offsetParent) {
                this.menu.nativeElement.style.transform =
                    'translateY(' + (newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92) + 'px' + ')';
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionRolesComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.track.track('incision-roles', 'open');
    };
    IncisionRolesComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        this.topPage.nativeElement.style.height = height + 'px';
        this.onShrink.emit(this.element);
    };
    IncisionRolesComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionRolesComponent;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionRolesComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionRolesComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], IncisionRolesComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _d || Object)
], IncisionRolesComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["d" /* EventEmitter */]) === "function" && _e || Object)
], IncisionRolesComponent.prototype, "onShrink", void 0);
IncisionRolesComponent = IncisionRolesComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_5" /* Component */])({
        selector: 'app-incision-roles',
        template: __webpack_require__("../../../../../src/app/incision-roles/incision-roles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-roles/incision-roles.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_0" /* forwardRef */])(function () { return IncisionRolesComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* ApplicationRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _h || Object])
], IncisionRolesComponent);

var IncisionRolesComponent_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=incision-roles.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-silkroad/incision-silkroad.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'SILK ROAD'\" [num]=\"'01.2'\" (enlarge)=\"this.enlarge()\">\n      <p class=\"extra\">\n        На&nbsp;Silk Road любой желающий мог продавать наркотики и&nbsp;оружие, а&nbsp;также предоставлять различные нелегальные услуги...\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n        <div class=\"page\">\n          <app-menu #menu [incision]=\"true\" [page]=\"0\">\n          </app-menu>\n          <div class=\"close\" #close (click)=\"this.shrink()\"></div>\n          <app-p [extra]=\"true\">\n            <p class=\"blacked\">Entering extra content</p>\n          </app-p>\n          <app-title [glytch]=\"true\" [num]=\"'01.2'\" [title]=\"'Silk Road'\">\n\n          </app-title>\n          <app-p [extra]=\"true\">\n            <p class=\"blacked\">previewing case file...</p>\n          </app-p>\n        </div>\n      </div>\n    </div>\n\n\n\n\n    <div class=\"grey last\">\n      <div class=\"page photo\">\n        <app-side-photo [name]=\"'Ross William Ulbricht'\" [photo]=\"'ulbricht.png'\">\n\n        </app-side-photo>\n\n        <app-p [noLine]=\"true\">\n          <p class=\"photo blacked yellow-select margined\">На&nbsp;<span>Silk Road</span> любой желающий мог продавать наркотики и&nbsp;оружие, а&nbsp;также предоставлять различные нелегальные\nуслуги. </p>\n\n          <p class=\"photo blacked yellow-select margined\">Продавцы приобретали специальные аккаунты через онлайн-аукцион и&nbsp;платили Ульбрихту комиссию с&nbsp;каждой\n            транзакции. Для покупателей регистрация была бесплатной. <span>Наркотики</span> быстро вырвались в&nbsp;топ продаж&nbsp;&mdash;\n            на&nbsp;них приходилось до&nbsp;80&nbsp;процентов всех сделок, а&nbsp;на&nbsp;площадке можно было\n            купить 340 видов психоактивных веществ. Разделы с&nbsp;оружием, порнографией кредитными картами и&nbsp;услугами\n            киллеров, напротив, не&nbsp;пользовались особой популярностью. </p>\n\n          <p class=\"photo blacked yellow-select margined\">В&nbsp;2013 году Ульбрихта <span>арестовали</span> агенты ФБР. Он&nbsp;рекламировал Silk Road под своим старым\n            ником для хакерских форумов и&nbsp;заказал поддельные документы из&nbsp;Канады на&nbsp;домашний в&nbsp;адрес\n            в&nbsp;Сан-Франциско. На&nbsp;момент закрытия площадки ее&nbsp;месячный оборот превышал 1,5 миллиона долларов,\n            а&nbsp;общая сумма транзакций за&nbsp;два года работы превысила <span>1,2 миллиарда долларов.</span> </p>\n\n          <p class=\"photo blacked yellow-select margined\">В&nbsp;2015 году Ульбрихта признали виновным в&nbsp;торговле наркотиками, сговоре с&nbsp;целью отмывания средств\n            и&nbsp;в&nbsp;хакерской деятельности. Он&nbsp;получил <span>два пожизненных</span> срока. </p>\n        </app-p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page\">\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-silkroad/incision-silkroad.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close:hover {\n  opacity: 0.8;\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.grey.last {\n  padding-top: 0;\n  padding-bottom: 100px;\n}\n.darkgrey {\n  background-color: #707070;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 260px;\n}\n@media (max-width: 767px) {\n  .page app-side-photo {\n    position: static;\n  }\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\n.extraPage .page.photo {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/silkroad/paper.png") + ");\n  background-size: cover;\n  background-position: top right;\n  background-repeat: no-repeat;\n  padding: 54px 153px 64px 84px;\n}\n@media (max-width: 767px) {\n  .extraPage .page.photo {\n    padding-top: 36px;\n    padding-left: 24px;\n    padding-right: 24px;\n    padding-bottom: 40px;\n    background-position: top left;\n  }\n}\napp-infographics-about-tor {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-about-tor {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-about-tor {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-silkroad/incision-silkroad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionSilkroadComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncisionSilkroadComponent = IncisionSilkroadComponent_1 = (function (_super) {
    __extends(IncisionSilkroadComponent, _super);
    function IncisionSilkroadComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        _this.hideExtra = false;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* EventEmitter */]();
        return _this;
    }
    IncisionSilkroadComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        // console.log('incision tor activate');
    };
    IncisionSilkroadComponent.prototype.workWithScrollPosition = function (newY) {
        if (this.enabled) {
            // console.log('work with scroll in incision', newY);
            // console.log(this.getOffsetTop(this.extraPage.nativeElement));
            if (this.extraPage.nativeElement.offsetParent) {
                if (window.innerWidth > 767) {
                    this.closeButton.nativeElement.style.top =
                        Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
                }
                else {
                    this.closeButton.nativeElement.style.top =
                        Math.max(0, newY - this.getOffsetTop(this.extraPage.nativeElement) + 55) + 'px';
                }
            }
            if (this.menu.nativeElement.offsetParent) {
                this.menu.nativeElement.style.transform =
                    'translateY(' + (newY - this.getOffsetTop(this.menu.nativeElement.parentElement) + 92) + 'px' + ')';
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionSilkroadComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        //  console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.track.track('incision-silkroad', 'open');
    };
    IncisionSilkroadComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        // console.log(this.topPage.nativeElement.clientHeight, this.topPage.nativeElement.style.height);
        this.topPage.nativeElement.style.height = height + 'px';
        this.onShrink.emit(this.element);
    };
    IncisionSilkroadComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionSilkroadComponent;
}(__WEBPACK_IMPORTED_MODULE_1__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionSilkroadComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_6" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionSilkroadComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], IncisionSilkroadComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _d || Object)
], IncisionSilkroadComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* EventEmitter */]) === "function" && _e || Object)
], IncisionSilkroadComponent.prototype, "onShrink", void 0);
IncisionSilkroadComponent = IncisionSilkroadComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_5" /* Component */])({
        selector: 'app-incision-silkroad',
        template: __webpack_require__("../../../../../src/app/incision-silkroad/incision-silkroad.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-silkroad/incision-silkroad.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_0" /* forwardRef */])(function () { return IncisionSilkroadComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* ApplicationRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _h || Object])
], IncisionSilkroadComponent);

var IncisionSilkroadComponent_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=incision-silkroad.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision-tor/incision-tor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n\n  <div class=\"page topPage\" #topPage>\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n    <app-extra [class.hide]=\"this.hideExtra\" [title]=\"'Как работает тор'\" [num]=\"'00.1'\" (enlarge)=\"this.enlarge()\">\n      <p class=\"extra\">\n        В&nbsp;середине 1990-х годов американские военные искали новый безопасный способ передачи разведданных. Сотрудники исследовательской\n        лаборатории Военно-морских сил США Пол Сиверсон, Майкл Рид и&nbsp;Дэвид Голдшлаг предложили ...\n      </p>\n    </app-extra>\n  </div>\n  <div class=\"extraPage\" #extraPage>\n\n    <div class=\"wrapper\">\n      <div class=\"grey\">\n        <div class=\"page\">\n\n          <div class=\"close\" #close (click)=\"this.shrink()\"></div>\n          <app-p [extra]=\"true\">\n            <p class=\"blacked\">Entering extra content</p>\n          </app-p>\n          <app-title [glytch]=\"true\" [num]=\"'00.1'\" [title]=\"'Как работает Tor'\">\n\n          </app-title>\n          <app-side-photo [name]=\"'Roger Dinglldine'\" [photo]=\"'roger.png'\">\n\n          </app-side-photo>\n\n          <app-p [middle]=\"true\" [extra]=\"true\">\n            <p class=\"margined yellow-select blacked\">\n              В&nbsp;середине 1990-х годов американские военные искали новый безопасный способ передачи разведданных. Сотрудники исследовательской\n              лаборатории Военно-морских сил США Пол Сиверсон, Майкл Рид и&nbsp;Дэвид Голдшлаг предложили использовать для\n              этого так называемую <span>луковую маршрутизацию</span>&nbsp;&mdash; систему специальных узлов,\n              последовательно шифрующих информацию и&nbsp;маскирующих истинный IP-адрес пользователей.\n            </p>\n            <p class=\"margined yellow-select blacked\">\n              В&nbsp;1997 году проектом заинтересовалось Управление перспективных исследовательских проектов Министерства обороны <span>(DARPA)</span>.\n              Ученые Роджер Динглдайн и&nbsp;Ник Метьюсон помогли Сиверсону представить альфа-версию анонимной сети Onion\n              Routing project, которую позже переименовали в&nbsp;The Onion Router или <span>Tor</span>.\n            </p>\n          </app-p>\n\n          <app-p [extra]=\"true\">\n            <app-loading-interface [extra]=\"true\" [title]=\"'Loading infographics...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n            </app-loading-interface>\n          </app-p>\n\n\n\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"darkgrey\">\n      <div class=\"page\">\n        <app-infographics-about-tor>\n\n        </app-infographics-about-tor>\n      </div>\n    </div>\n\n    <div class=\"grey last\">\n      <div class=\"page\">\n        <app-p [middle]=\"true\" [extra]=\"true\">\n          <p class=\"margined yellow-select blacked\">В&nbsp;2003 году к&nbsp;проекту допустили несколько сторонних разработчиков. Через пару месяцев исследователи ВМС\n            опубликовали в&nbsp;сети исходный код Tor, а&nbsp;некоммерческая организация <span>&laquo;Фонд электронных рубежей&raquo;</span>            (EFF) помогла Динглдайну и&nbsp;Метьюсону доработать технологию. Три года спустя интернет-активисты помогли ученым\n            основать собственную организацию <span>The Tor Project,</span> которая с&nbsp;тех пор отвечает за&nbsp;функционирование\n            анонимной сети.\n          </p>\n          <p class=\"margined yellow-select blacked\">\n            Несмотря на&nbsp;то&nbsp;что основным спонсором Tor всегда выступало правительство США, в&nbsp;специальной доменной зоне.onion быстро появились форумы так называемых <span>шифропанков</span>&nbsp;&mdash; любителей анонимности\n            и&nbsp;криптографии, тесно связанных с&nbsp;миром хакеров. Позже к&nbsp;ним добавились и&nbsp;многочисленные\n            торговые площадки, где можно анонимно купить <span>наркотики,</span> оружие, поддельные документы и&nbsp;хакерский\n            софт.\n          </p>\n          <p class=\"margined yellow-select blacked\">\n\n            Сам Tor работает на&nbsp;основе вышеупомянутой &laquo;луковой&raquo; маршрутизации, а&nbsp;роль защищенных узлов играют несколько\n            тысяч компьютеров и&nbsp;серверов, принадлежащих пользователям анонимной сети. Информация последовательно <span>шифруется</span>            и&nbsp;передается через три случайно выбранных узла (входной, промежуточный и&nbsp;выходной), причем каждый из&nbsp;них\n            знает лишь о&nbsp;том, откуда пришли зашифрованные данные, и&nbsp;куда их&nbsp;надо отправить дальше.\n          </p>\n          <p class=\"margined yellow-select blacked\">\n\n            Перечень узлов публикуется в&nbsp;открытом доступе, что позволяет спецслужбам некоторых стран ограничивать доступ к&nbsp;анонимной\n            сети. Однако у&nbsp;Tor есть и&nbsp;секретные узлы (так называемые мосты), полный список которых доступен лишь\n            сотрудникам Tor Project.\n          </p>\n\n        </app-p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page\">\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/incision-tor/incision-tor.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.close {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: 45px;\n  right: 45px;\n  cursor: pointer;\n  transition: ease 0.3s opacity;\n  z-index: 5;\n}\n.close:hover {\n  opacity: 0.8;\n}\n@media (max-width: 767px) {\n  .close {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/close-black.svg") + ");\n    right: 24px;\n    top: 24px;\n  }\n}\napp-extra {\n  margin-left: -52px;\n  display: block;\n  transition: opacity 0.5s ease, ease 0.7s height, ease 0.7s top;\n  opacity: 1;\n  position: relative;\n  top: 0;\n}\n@media (max-width: 767px) {\n  app-extra {\n    margin-left: 0;\n  }\n}\napp-extra.hide {\n  top: -30px;\n  opacity: 0;\n}\n.grey {\n  background-color: #a0a0a0;\n  padding-top: 48px;\n  padding-bottom: 16px;\n}\n@media (max-width: 767px) {\n  .grey {\n    padding-top: 18px;\n  }\n}\n.grey.last {\n  padding-bottom: 100px;\n}\n@media (max-width: 850px) {\n  .grey.last {\n    padding-bottom: 36px;\n  }\n}\n.darkgrey {\n  background-color: #707070;\n}\n.page {\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n  transition: ease 0.5s height;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-side-photo {\n  position: absolute;\n  left: 847px;\n  top: 120px;\n}\n@media (max-width: 767px) {\n  .page app-side-photo {\n    position: static;\n  }\n}\n.extraPage {\n  position: relative;\n  top: -100px;\n  transition: cubic-bezier(0, 0, 0.2, 1) 0.7s height, 0.3s opacity cubic-bezier(0, 0, 0.2, 1), top 0.7s ease, margin-bottom 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 5;\n  height: 0;\n}\n.extraPage.show {\n  top: 0px;\n  opacity: 1;\n  margin-bottom: -40px;\n}\napp-infographics-about-tor {\n  display: block;\n  padding-left: 85px;\n}\n@media (max-width: 850px) {\n  app-infographics-about-tor {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 800px) {\n  app-infographics-about-tor {\n    padding-left: 0;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-p {\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision-tor/incision-tor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionTorComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IncisionTorComponent = IncisionTorComponent_1 = (function (_super) {
    __extends(IncisionTorComponent, _super);
    function IncisionTorComponent(element, appRef, track) {
        var _this = _super.call(this, element) || this;
        _this.appRef = appRef;
        _this.track = track;
        // @ViewChild('menu') menu: MenuComponent;
        _this.onShrink = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* EventEmitter */]();
        _this.hideExtra = false;
        return _this;
    }
    IncisionTorComponent.prototype.activate = function () {
        _super.prototype.activate.call(this);
        // console.log('incision tor activate');
    };
    IncisionTorComponent.prototype.workWithScrollPosition = function (newY) {
        // console.log('work with scroll in incision', newY);
        if (this.enabled) {
            // console.log(this.getOffsetTop(this.extraPage.nativeElement));
            if (this.extraPage.nativeElement.offsetParent) {
                if (window.innerWidth > 767) {
                    this.closeButton.nativeElement.style.top =
                        Math.max(45, newY - this.getOffsetTop(this.extraPage.nativeElement) + 45) + 'px';
                }
                else {
                    this.closeButton.nativeElement.style.top =
                        Math.max(0, newY - this.getOffsetTop(this.extraPage.nativeElement) + 55) + 'px';
                }
            }
            _super.prototype.workWithScrollPosition.call(this, newY);
        }
    };
    IncisionTorComponent.prototype.enlarge = function () {
        this.extraPage.nativeElement.style.height = 'auto';
        this.topPage.nativeElement.style.height = this.topPage.nativeElement.clientHeight + 'px';
        this.appRef.tick();
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        var height = this.extraPage.nativeElement.clientHeight;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = '0px';
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.topPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.add('show');
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.extraPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.hideExtra = true;
        // console.log(this.extraPage.nativeElement.style.height, this.extraPage.nativeElement.clientHeight);
        this.appRef.tick();
        this.track.track('incision-tor', 'open');
    };
    IncisionTorComponent.prototype.shrink = function () {
        this.extraPage.nativeElement.style.height = '0px';
        this.extraPage.nativeElement.classList.remove('show');
        this.hideExtra = false;
        this.topPage.nativeElement.style.height = 'auto';
        this.appRef.tick();
        var height = this.topPage.nativeElement.clientHeight;
        this.topPage.nativeElement.style.height = '0px';
        this.appRef.tick();
        var test = this.topPage.nativeElement.clientHeight;
        var test2 = this.topPage.nativeElement.style.height;
        // console.log(this.topPage.nativeElement.clientHeight, this.topPage.nativeElement.style.height);
        this.topPage.nativeElement.style.height = height + 'px';
        this.appRef.tick();
        this.onShrink.emit(this.element);
    };
    IncisionTorComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return IncisionTorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_6" /* ViewChild */])('extraPage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], IncisionTorComponent.prototype, "extraPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_6" /* ViewChild */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], IncisionTorComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_6" /* ViewChild */])('topPage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], IncisionTorComponent.prototype, "topPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_4" /* Output */])('onShrink'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* EventEmitter */]) === "function" && _d || Object)
], IncisionTorComponent.prototype, "onShrink", void 0);
IncisionTorComponent = IncisionTorComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_5" /* Component */])({
        selector: 'app-incision-tor',
        template: __webpack_require__("../../../../../src/app/incision-tor/incision-tor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision-tor/incision-tor.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_0" /* forwardRef */])(function () { return IncisionTorComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* ApplicationRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _g || Object])
], IncisionTorComponent);

var IncisionTorComponent_1, _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=incision-tor.component.js.map

/***/ }),

/***/ "../../../../../src/app/incision/incision.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  incision works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/incision/incision.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/incision/incision.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncisionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncisionComponent = (function () {
    function IncisionComponent() {
    }
    IncisionComponent.prototype.ngOnInit = function () {
    };
    return IncisionComponent;
}());
IncisionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-incision',
        template: __webpack_require__("../../../../../src/app/incision/incision.component.html"),
        styles: [__webpack_require__("../../../../../src/app/incision/incision.component.less")]
    }),
    __metadata("design:paramtypes", [])
], IncisionComponent);

//# sourceMappingURL=incision.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-about-tor/infographics-about-tor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <img class=\"desktop\" src=\"./assets/images/tor/ig.png\" srcset=\"./assets/images/tor/ig@2x.png 2x\" alt=\"\"/>\n  <img class=\"mobile\" src=\"./assets/images/tor/ig-mobile.png\" />\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-about-tor/infographics-about-tor.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  height: 432px;\n  background-color: lightgrey;\n  max-width: 740px;\n}\n.body .mobile {\n  display: none;\n  max-width: 640px;\n  width: 100%;\n}\n@media (max-width: 740px) {\n  .body {\n    height: auto;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n  .body .desktop {\n    display: none;\n  }\n  .body .mobile {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-about-tor/infographics-about-tor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsAboutTorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfographicsAboutTorComponent = (function () {
    function InfographicsAboutTorComponent() {
    }
    InfographicsAboutTorComponent.prototype.ngOnInit = function () {
    };
    return InfographicsAboutTorComponent;
}());
InfographicsAboutTorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-about-tor',
        template: __webpack_require__("../../../../../src/app/infographics-about-tor/infographics-about-tor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-about-tor/infographics-about-tor.component.less")]
    }),
    __metadata("design:paramtypes", [])
], InfographicsAboutTorComponent);

//# sourceMappingURL=infographics-about-tor.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-freenet/infographics-freenet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <img src=\"./assets/images/freenet/ig.png\" srcset=\"./assets/images/freenet/ig@2x.png 2x\" />\n  <img class=\"mobile\" src=\"./assets/images/freenet/ig-mobile.png\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-freenet/infographics-freenet.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  height: 432px;\n  background-color: lightgrey;\n  max-width: 740px;\n}\n.body .mobile {\n  display: none;\n  max-width: 640px;\n  width: 100%;\n}\n@media (max-width: 740px) {\n  .body {\n    height: auto;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n  .body .desktop {\n    display: none;\n  }\n  .body .mobile {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-freenet/infographics-freenet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsFreenetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfographicsFreenetComponent = (function () {
    function InfographicsFreenetComponent() {
    }
    InfographicsFreenetComponent.prototype.ngOnInit = function () {
    };
    return InfographicsFreenetComponent;
}());
InfographicsFreenetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-freenet',
        template: __webpack_require__("../../../../../src/app/infographics-freenet/infographics-freenet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-freenet/infographics-freenet.component.less")]
    }),
    __metadata("design:paramtypes", [])
], InfographicsFreenetComponent);

//# sourceMappingURL=infographics-freenet.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-garant/infographics-garant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <img class=\"desktop\" src=\"./assets/images/garant/ig.png\" />\n  <img class=\"mobile\" src=\"./assets/images/garant/ig-mobile.png\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-garant/infographics-garant.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  height: 380px;\n  background-color: lightgrey;\n  max-width: 740px;\n  margin-left: 84px;\n}\n.body .mobile {\n  display: none;\n  width: 100%;\n}\n.body .desktop {\n  max-width: 100%;\n}\n@media (max-width: 767px) {\n  .body {\n    height: auto;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .body .desktop {\n    display: none;\n  }\n  .body .mobile {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-garant/infographics-garant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsGarantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfographicsGarantComponent = (function () {
    function InfographicsGarantComponent() {
    }
    InfographicsGarantComponent.prototype.ngOnInit = function () {
    };
    return InfographicsGarantComponent;
}());
InfographicsGarantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-garant',
        template: __webpack_require__("../../../../../src/app/infographics-garant/infographics-garant.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-garant/infographics-garant.component.less")]
    }),
    __metadata("design:paramtypes", [])
], InfographicsGarantComponent);

//# sourceMappingURL=infographics-garant.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-i2p/infographics-i2p.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <img class=\"desktop\" src=\"./assets/images/i2p/ig.png\" srcset=\"./assets/images/i2p/ig@2x.png 2x\" />\n  <img class=\"mobile\" src=\"./assets/images/i2p/ig-mobile.png\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-i2p/infographics-i2p.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  height: 432px;\n  background-color: lightgrey;\n  max-width: 740px;\n}\n.body .mobile {\n  display: none;\n  max-width: 640px;\n}\n@media (max-width: 740px) {\n  .body {\n    height: auto;\n  }\n  .body .desktop {\n    display: none;\n  }\n  .body .mobile {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-i2p/infographics-i2p.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsI2pComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfographicsI2pComponent = (function () {
    function InfographicsI2pComponent() {
    }
    InfographicsI2pComponent.prototype.ngOnInit = function () {
    };
    return InfographicsI2pComponent;
}());
InfographicsI2pComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-i2p',
        template: __webpack_require__("../../../../../src/app/infographics-i2p/infographics-i2p.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-i2p/infographics-i2p.component.less")]
    }),
    __metadata("design:paramtypes", [])
], InfographicsI2pComponent);

//# sourceMappingURL=infographics-i2p.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-marketplaces/infographics-marketplaces.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" [class.activated]=\"this.isActivated\">\n  <div class=\"navigation\">\n    <div class=\"title\">{{this.getItemById(this.current).title}}</div>\n    <div class=\"arrow left\" [class.disabled]=\"this.current==0\" (click)=\"this.change(-1)\"></div>\n    <div class=\"years\">\n      <div class=\"wrapper\" [style.transform]=\"this.getMobileTransform()\">\n        <div class=\"year\" *ngFor=\"let item of this.years;let i=index\" [class.long]=\"this.checkVal(item)\">\n          <div class=\"title\" *ngIf=\"this.checkVal(item)\">{{item}}</div>\n          <div class=\"line\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\" arrow right\" [class.disabled]=\"this.current==10\" (click)=\"this.change(1)\"></div>\n  </div>\n  <div class=\"items\">\n    <div class=\"mobile-titles\">\n      <div class=\"mobile-group\" *ngFor=\"let group of data\">\n        <div class=\"mobile-item\" *ngFor=\"let item of group\">\n          <div class=\"mobile-title\" [class.current]=\"item.story==this.current\">{{item.title}}</div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"wrapper\" [style.transform]=\"this.getMobileTransform()\">\n      <div class=\"group\" *ngFor=\"let group of data\">\n        <div class=\"item\" *ngFor=\"let item of group\" (click)=\"this.set(item.story)\" [class.current]=\"item.story==this.current\">\n          <div class=\"bg\"></div>\n          <div class=\"title\">{{item.title}}</div>\n          <div class=\"line\" [style.left]=\"this.getCoord(item.from, true)\" [style.right]=\"this.getCoord(item.to)\" [style.background-color]=\"item.color\"></div>\n          <div class=\"links\">\n            <div class=\"link\" *ngFor=\"let link of item.links\" [class.down0]=\"link.type=='down0'\" [class.down1]=\"link.type=='down1'\" [class.both]=\"link.type=='both'\"\n              [class.black-up]=\"link.type=='black-up'\" [class.black-down0]=\"link.type=='black-down0'\" [class.black-down1]=\"link.type=='black-down1'\"\n              [style.left]=\"this.getCoord(link.date,true)\">\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"selector\" [style.left]=\"this.getCoord(this.getItemById(this.current).from, true)\">\n      <div class=\"seeker\">\n        <div class=\"circ\"></div>\n        <div class=\"line\"></div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"description\">\n    <div class=\"left-line\"></div>\n    <div class=\"right-side\" [style.background-color]=\"this.getItemById(this.current).color\">\n      <div class=\"logo\" [style.background-image]=\"'url(./assets/images/markets/logos/'+this.getItemById(this.current).logo+')'\"\n        [class.noImage]=\"this.getItemById(this.current).logo==='no.png'\">{{this.getItemById(this.current).title}}</div>\n      <div class=\"text\" [innerHTML]=\"this.getItemById(this.current).text\"></div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-marketplaces/infographics-marketplaces.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  background-color: #999999;\n  max-width: 740px;\n  margin-left: 50px;\n  padding: 16px;\n  min-height: 505px;\n  opacity: 1;\n  margin-left: 84px;\n  transition: -webkit-transform 0.5s 0.5s ease;\n  transition: transform 0.5s 0.5s ease;\n  transition: transform 0.5s 0.5s ease, -webkit-transform 0.5s 0.5s ease;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n}\n@media (max-width: 850px) {\n  .body {\n    margin-left: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .body {\n    width: 100%;\n    margin: 0;\n    background-color: white;\n    max-width: 100%;\n    padding: 0;\n  }\n}\n.body.activated {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n.body .navigation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  margin-bottom: 16px;\n}\n@media (max-width: 767px) {\n  .body .navigation {\n    position: relative;\n    display: block;\n    padding-top: 16px;\n  }\n}\n.body .navigation > .title {\n  display: none;\n}\n@media (max-width: 767px) {\n  .body .navigation > .title {\n    display: block;\n    width: 100%;\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    margin-bottom: 5px;\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n.body .navigation .arrow {\n  width: 48px;\n  height: 48px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: ease 0.3s opacity;\n}\n@media (max-width: 767px) {\n  .body .navigation .arrow {\n    position: absolute;\n    top: 16px;\n  }\n}\n.body .navigation .arrow.left {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/arrow-left.svg") + ");\n}\n@media (max-width: 767px) {\n  .body .navigation .arrow.left {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/arrow-left-mobile.svg") + ");\n    left: 8px;\n  }\n}\n.body .navigation .arrow.right {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/arrow-right.svg") + ");\n}\n@media (max-width: 767px) {\n  .body .navigation .arrow.right {\n    right: 8px;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/arrow-right-mobile.svg") + ");\n  }\n}\n.body .navigation .arrow:not(.disabled) {\n  cursor: pointer;\n}\n.body .navigation .arrow:not(.disabled):hover {\n  opacity: 0.8;\n}\n.body .navigation .arrow.disabled {\n  opacity: 0.5;\n}\n.body .navigation .years {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  position: relative;\n  padding-left: 18px;\n  padding-right: 18px;\n}\n@media (max-width: 767px) {\n  .body .navigation .years {\n    left: 50%;\n  }\n}\n.body .navigation .years .wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .body .navigation .years .wrapper {\n    min-width: 767px;\n    padding-left: 48px;\n    padding-right: 80px;\n    width: 767px;\n    transition: ease 0.3s transform;\n  }\n}\n.body .navigation .years .year {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 30px;\n  position: relative;\n}\n.body .navigation .years .year .line {\n  width: 0;\n  height: 4px;\n  border-left: 2px solid #666666;\n  position: absolute;\n  bottom: 0;\n}\n@media (max-width: 767px) {\n  .body .navigation .years .year .line {\n    display: none;\n  }\n}\n.body .navigation .years .year .title {\n  font-family: \"Roboto Mono\";\n  font-weight: 500;\n  font-size: 16px;\n  color: #666666;\n  position: absolute;\n  width: 40px;\n  margin-left: -20px;\n  text-align: center;\n}\n.body .navigation .years .year.long .line {\n  height: 8px;\n}\n.body .items {\n  position: relative;\n}\n@media (max-width: 767px) {\n  .body .items {\n    left: 50%;\n  }\n}\n.body .items .mobile-titles {\n  display: none;\n  pointer-events: none;\n}\n@media (max-width: 767px) {\n  .body .items .mobile-titles {\n    display: block;\n    position: absolute;\n    color: #666666;\n    left: calc(-50% + 16px);\n    font-family: \"Roboto Mono\";\n    font-size: 16px;\n    line-height: 16px;\n    z-index: 2;\n  }\n}\n.body .items .mobile-titles .mobile-group .mobile-item {\n  height: 16px;\n  margin-bottom: 4px;\n}\n.body .items .mobile-titles .mobile-group .mobile-item .mobile-title {\n  display: block;\n}\n.body .items .mobile-titles .mobile-group .mobile-item .mobile-title.current {\n  color: white;\n}\n.body .items .wrapper {\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .body .items .wrapper {\n    overflow: visible;\n    min-width: 767px;\n    transition: ease 0.3s transform;\n  }\n}\n.body .items .group {\n  margin-bottom: 20px;\n}\n@media (max-width: 767px) {\n  .body .items .group {\n    margin-bottom: 0;\n    min-width: 767px;\n  }\n}\n.body .items .group .item {\n  width: 100%;\n  height: 16px;\n  margin-bottom: 4px;\n  position: relative;\n}\n.body .items .group .item:not(.current) {\n  cursor: pointer;\n}\n.body .items .group .item:not(.current):hover .bg {\n  opacity: 0.3;\n}\n.body .items .group .item:not(.current):hover .line {\n  opacity: 0.8;\n}\n.body .items .group .item .bg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #A6A6A6;\n  transition: ease 0.3s background-color, ease 0.3s opacity;\n}\n@media (max-width: 767px) {\n  .body .items .group .item .bg {\n    width: 300%;\n    left: -100%;\n    background-color: white;\n  }\n}\n.body .items .group .item .title {\n  position: absolute;\n  top: 0;\n  left: 16px;\n  color: #666666;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  line-height: 16px;\n  z-index: 2;\n  transition: ease 0.3s color;\n}\n@media (max-width: 767px) {\n  .body .items .group .item .title {\n    display: none;\n  }\n}\n.body .items .group .item .line {\n  position: absolute;\n  height: 100%;\n  transition: ease 0.3s opacity;\n}\n.body .items .group .item.current .title {\n  color: white;\n}\n.body .items .group .item.current .bg {\n  background-color: black;\n}\n.body .items .group .item .links {\n  pointer-events: none;\n}\n.body .items .group .item .links .link {\n  position: absolute;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  z-index: 10;\n  margin-left: -4px;\n  width: 8px;\n}\n.body .items .group .item .links .link.both {\n  height: 36px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/both.svg") + ");\n}\n.body .items .group .item .links .link.down0 {\n  height: 76px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/down0.svg") + ");\n}\n.body .items .group .item .links .link.down1 {\n  height: 56px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/down1.svg") + ");\n}\n.body .items .group .item .links .link.black-down0 {\n  height: 152px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/black-down0.svg") + ");\n}\n@media (max-width: 767px) {\n  .body .items .group .item .links .link.black-down0 {\n    height: 128px;\n    top: 4px;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/black-down0-mobile.svg") + ");\n  }\n}\n.body .items .group .item .links .link.black-down1 {\n  height: 36px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/black-down1.svg") + ");\n}\n.body .items .group .item .links .link.black-up {\n  height: 36px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/markets/black-up.svg") + ");\n}\n.body .items .selector {\n  position: absolute;\n  bottom: 0;\n  top: -40px;\n  transition: ease 0.3s left;\n  margin-left: -4px;\n  width: 8px;\n}\n@media (max-width: 767px) {\n  .body .items .selector {\n    display: none;\n  }\n}\n.body .items .selector .seeker {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.body .items .selector .circ {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 8px;\n  border: 1px solid black;\n  top: 0;\n  left: 0;\n}\n.body .items .selector .line {\n  width: 0;\n  top: 8px;\n  bottom: 0;\n  left: 4px;\n  border-left: 1px dashed black;\n  position: absolute;\n}\n.body .description {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n@media (max-width: 767px) {\n  .body .description {\n    display: block;\n    padding: 16px;\n  }\n}\n.body .description .left-line {\n  max-width: 16px;\n  min-width: 16px;\n  background-color: black;\n  margin-right: 16px;\n}\n@media (max-width: 767px) {\n  .body .description .left-line {\n    display: none;\n  }\n}\n.body .description .right-side {\n  padding-right: 40px;\n}\n@media (min-width: 767px) {\n  .body .description .right-side {\n    background-color: transparent!important;\n  }\n}\n@media (max-width: 767px) {\n  .body .description .right-side {\n    padding: 12px;\n  }\n}\n.body .description .right-side .logo {\n  width: 100%;\n  height: 48px;\n  background-position: left center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-bottom: 16px;\n  font-size: 0;\n}\n@media (max-width: 767px) {\n  .body .description .right-side .logo {\n    display: none;\n  }\n}\n.body .description .right-side .logo.noImage {\n  font-family: \"Roboto Mono\";\n  font-weight: bold;\n  font-size: 45px;\n  background-image: none!important;\n  height: 26px;\n  line-height: 29px;\n}\n.body .description .right-side .text {\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-marketplaces/infographics-marketplaces.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsMarketplacesComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfographicsMarketplacesComponent = InfographicsMarketplacesComponent_1 = (function (_super) {
    __extends(InfographicsMarketplacesComponent, _super);
    function InfographicsMarketplacesComponent(element) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.years = [];
        _this.current = 0;
        // offset - 33%;
        _this.data = [
            [
                { story: 0, id: 0, title: 'WayAway', logo: 'no.png', text: 'Форум по&nbsp;продаже синтетических наркотиков, в&nbsp;том числе &laquo;спайсов&raquo; и&nbsp;&laquo;солей&raquo;. Был запущен в&nbsp;легальном сегменте сети в&nbsp;2009&nbsp;года, через два года появился и&nbsp;в&nbsp;даркнете.', from: 2011, to: 2018.28, color: '#96AADC', links: [{ type: 'both', to: 1, date: 2012.12 }, { type: 'down0', to: 3, date: 2015.62 }] },
                { story: 1, id: 1, title: 'Legal RC', logo: 'no.png', text: 'Форум по&nbsp;продаже наркотиков в&nbsp;легальном интернете, специализирующийся на&nbsp;синтетических веществах&nbsp;&mdash; &laquo;спайсах&raquo; и&nbsp;&laquo;солях&raquo;.', from: 2012, to: 2018.28, color: '#B9D335', links: [{ type: 'down1', to: 3, date: 2015.75 }] },
                { story: 8, id: 2, title: 'Russian Silkroad', logo: 'no.png', text: 'Форум для торговли наркотиками. В&nbsp;конце 2015 года поглощен торговой площадкой Hydra.', from: 2015.25, to: 2016, color: '#FF8F9A', links: [{ type: 'black-up', to: 3, date: 2015.9 }] },
                { story: 10, id: 3, title: 'Hydra', logo: 'hydra.png', text: 'Торговая площадка для продажи наркотиков с&nbsp;автоматизированными магазинами и&nbsp;встроенным обменником биткоинов. Является прямым конкурентом RAMP. Использовала рекламные мощности Legal RC и WayAway', from: 2015.5, to: 2018.28, color: '#397FFF' }
            ],
            [
                { story: 2, id: 4, title: 'Runion', logo: 'no.png', text: 'Старейший форум российского даркнета с&nbsp;различными тематическими разделами и&nbsp;обучающими материалами. После смены администрации в&nbsp;основном развивается как торговая площадка.', from: 2012, to: 2018.28, color: '#95D3D7', links: [{ type: 'black-down0', to: 10, date: 2014.85 }, { type: 'both', to: 5, date: 2015 }] },
                { story: 7, id: 5, title: 'RuTor', logo: 'no.png', text: 'Форум по&nbsp;продаже наркотиков, оружия и&nbsp;хакерского софта. Имеет тесные связи с&nbsp;Runion.', from: 2014.75, to: 2018.28, color: '#3FD89B', links: [] },
                { story: 9, id: 6, title: 'Anthill', logo: 'no.png', text: 'Относительно молодая торговая площадка, преимущественно работающая в&nbsp;Москве и&nbsp;Московской области.', from: 2015.25, to: 2018.28, color: '#FF8136', links: [] }
            ],
            [
                { story: 5, id: 7, title: 'RAMP', logo: 'no.png', text: 'Форум для продажи наркотиков с&nbsp;системой моментальных магазинов. Одна из&nbsp;крупнейших площадок в&nbsp;российском &laquo;темном&raquo; интернете с&nbsp;290 тысячами зарегистрированных пользователей.', from: 2012.75, to: 2018.28, color: '#FFD200', links: [{ type: 'black-down1', to: 8, date: 2015.4 }] },
                { story: 4, id: 8, title: 'R2D2', logo: 'no.png', text: 'Закрытый форум для анонимного общения и&nbsp;торговли наркотиками. Прекратил работу в&nbsp;середине 2015 года после серии DDoS-атак, предположительно устроенных администрацией RAMP.', from: 2012.25, to: 2015.52, color: '#CCCCCC', links: [] },
                { story: 3, id: 9, title: 'Amber Road', logo: 'no.png', text: 'Форум с&nbsp;торговым разделом для продажи наркотиков, оружия и&nbsp;хакерского софта. Прекратил работу в&nbsp;начале 2016 года из-за отсутствия клиентской базы и&nbsp;окончания хостинга.', from: 2012, to: 2016.05, color: '#666666', links: [] },
                { story: 6, id: 10, title: 'Malina', logo: 'no.png', text: 'Небольшой форум для торговли наркотиками. Не&nbsp;пользовался широкой популярностью и&nbsp;прекратил работу в&nbsp;начале 2015&nbsp;года. По&nbsp;слухам, к&nbsp;этому причастен хакер SleepWalker с&nbsp;Runion раскрывший личные данные администрации площадки.', from: 2013, to: 2015, color: '#FF008F', links: [] }
            ]
        ];
        for (var i = 0; i < 29; i++) {
            _this.years.push(i / 4 + 2010.5);
        }
        return _this;
        //  console.log(this.years);
    }
    InfographicsMarketplacesComponent.prototype.getItemById = function (num) {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var group = _a[_i];
            for (var _b = 0, group_1 = group; _b < group_1.length; _b++) {
                var item = group_1[_b];
                if (item.story === num) {
                    return item;
                }
            }
        }
        return null;
    };
    InfographicsMarketplacesComponent.prototype.change = function (delta) {
        if (this.current + delta !== -1 && this.current + delta !== 11) {
            this.current += delta;
        }
    };
    InfographicsMarketplacesComponent.prototype.set = function (num) {
        this.current = num;
    };
    InfographicsMarketplacesComponent.prototype.getMobileCoords = function (num) {
        var min = 2009.8;
        var max = 2018.2;
        return -(num - min) / (max - min) * 100 + '%';
    };
    InfographicsMarketplacesComponent.prototype.getMobileTransform = function () {
        var item = this.getItemById(this.current);
        if (window.innerWidth < 768) {
            return 'translateX(' + this.getMobileCoords(item.from) + ')';
        }
        else {
            return 'none';
        }
        // return 'none';
    };
    InfographicsMarketplacesComponent.prototype.getCoord = function (num, from) {
        if (from === void 0) { from = false; }
        var min = 2009.695;
        var max = 2018.28;
        if (from) {
            return (num - min) / (max - min) * 100 + '%';
        }
        else {
            if (num === max) {
                return '-100%';
            }
            else {
                return (1 - (num - min) / (max - min)) * 100 + '%';
            }
        }
    };
    InfographicsMarketplacesComponent.prototype.checkVal = function (num) {
        return num === Math.round(num);
    };
    InfographicsMarketplacesComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return InfographicsMarketplacesComponent;
}(__WEBPACK_IMPORTED_MODULE_0__activable__["a" /* Activable */]));
InfographicsMarketplacesComponent = InfographicsMarketplacesComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-marketplaces',
        template: __webpack_require__("../../../../../src/app/infographics-marketplaces/infographics-marketplaces.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-marketplaces/infographics-marketplaces.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* forwardRef */])(function () { return InfographicsMarketplacesComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], InfographicsMarketplacesComponent);

var InfographicsMarketplacesComponent_1, _a;
//# sourceMappingURL=infographics-marketplaces.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-mvd/infographics-mvd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <img class=\"desktop\" src=\"./assets/images/fskn/ig.png\" />\n  <img class=\"mobile\" src=\"./assets/images/fskn/ig-mobile.png\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-mvd/infographics-mvd.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  height: 468px;\n  background-color: lightgrey;\n  max-width: 740px;\n  margin-left: 84px;\n}\n.body .mobile {\n  display: none;\n  width: 100%;\n}\n.body .desktop {\n  max-width: 100%;\n}\n@media (max-width: 767px) {\n  .body {\n    height: auto;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .body .desktop {\n    display: none;\n  }\n  .body .mobile {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-mvd/infographics-mvd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsMvdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfographicsMvdComponent = (function () {
    function InfographicsMvdComponent() {
    }
    InfographicsMvdComponent.prototype.ngOnInit = function () {
    };
    return InfographicsMvdComponent;
}());
InfographicsMvdComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-mvd',
        template: __webpack_require__("../../../../../src/app/infographics-mvd/infographics-mvd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-mvd/infographics-mvd.component.less")]
    }),
    __metadata("design:paramtypes", [])
], InfographicsMvdComponent);

//# sourceMappingURL=infographics-mvd.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-regions/infographics-regions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" (click)=\"this.unfocus($event)\">\n  <div class=\"title\">Среднее число новых тем по&nbsp;разделам</div>\n  <div class=\"regions \" [class.opened]=\"this.opened\">\n\n    <div class=\"upper\">\n      <div class=\"title\" (click)=\"this.openclose()\">\n        <div class=\"current\">\n          {{this.current}}\n        </div>\n\n        <div class=\"arrow\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17.41 10.12\">\n            <defs>\n              <style>\n                .cls-1 {\n                  fill: none;\n                  stroke: black;\n                  stroke-miterlimit: 10;\n                  stroke-width: 2px;\n                }\n              </style>\n            </defs>\n            <title>Asset 1</title>\n            <g id=\"Layer_2\" data-name=\"Layer 2\">\n              <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n                <polyline class=\"cls-1\" points=\"16.71 0.71 8.71 8.71 0.71 0.71\" />\n              </g>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n    <div class=\"down\">\n      <div class=\"list\" #list>\n        <div class=\"close\" (click)=\"this.closeMobile()\"></div>\n        <div class=\"item\" *ngFor=\"let item of this.array; let i=index\" [innerHTML]=\"item.name\" [attr.id]=\"item.id\" (click)=\"this.selectItem($event)\"\n          [class.selected]=\"this.currentSelected==item.id\"></div>\n      </div>\n    </div>\n\n\n\n  </div>\n  <div class=\"bottom\">\n\n    <div class=\"legend\">\n      <div class=\"item\" *ngFor=\"let item of this.array; let i=index\" [attr.id]=\"item.id\" (click)=\"this.selectItem($event)\" [class.selected]=\"this.currentSelected==item.id\">\n        <div class=\"icon\" [style.background-color]=\"item.color\"></div>\n        <div class=\"name\">{{item.name}}</div>\n      </div>\n    </div>\n\n    <div class=\"graphs\">\n\n      <div class=\"vertical\">\n        <div class=\"item\">\n          <div class=\"line\"></div>\n          <div class=\"num\">{{this.currentSelected==0?\"100\":\"50\"}}</div>\n        </div>\n        <div class=\"item\">\n          <div class=\"line\"></div>\n          <div class=\"num\">{{this.currentSelected==0?\"50\":\"25\"}}</div>\n\n        </div>\n        <div class=\"item\">\n          <div class=\"line\"></div>\n          <div class=\"num\">0</div>\n        </div>\n      </div>\n      <div class=\"horizontal\">\n        <div class=\"item\">\n          <div class=\"line\"></div>\n          <div class=\"num\">2012</div>\n        </div>\n        <div class=\"item\">\n          <div class=\"line\"></div>\n          <div class=\"num\">13</div>\n        </div>\n        <div class=\"item\">\n          <div class=\"line\"></div>\n          <div class=\"num\">14</div>\n        </div>\n        <div class=\"item\">\n          <div class=\"line\"></div>\n          <div class=\"num\">15</div>\n        </div>\n        <div class=\"item\">\n          <div class=\"line\"></div>\n          <div class=\"num\">16</div>\n        </div>\n        <div class=\"item\">\n          <div class=\"line\"></div>\n          <div class=\"num\">2017</div>\n        </div>\n      </div>\n\n      <div class=\"main\">\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==0\">\n          <img src=\"./assets/images/regions/all.svg\" />\n        </div>\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==1\">\n          <img src=\"./assets/images/regions/g0.svg\" />\n        </div>\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==2\"> <img src=\"./assets/images/regions/g1.svg\" /></div>\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==3\"> <img src=\"./assets/images/regions/g2.svg\" /></div>\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==4\"> <img src=\"./assets/images/regions/g3.svg\" /></div>\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==5\"> <img src=\"./assets/images/regions/g4.svg\" /></div>\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==6\"> <img src=\"./assets/images/regions/g5.svg\" /></div>\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==7\"> <img src=\"./assets/images/regions/g6.svg\" /></div>\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==8\"> <img src=\"./assets/images/regions/g7.svg\" /></div>\n        <div class=\"graphen\" [class.show]=\"this.currentSelected==9\"> <img src=\"./assets/images/regions/g8.svg\" /></div>\n      </div>\n\n\n    </div>\n  </div>\n  <div class=\"mobile-navigation\">\n    <div class=\"left\"></div>\n    <div class=\"right\"></div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-regions/infographics-regions.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  position: relative;\n  background-color: #999;\n  max-width: 740px;\n  margin-left: 84px;\n  padding: 16px;\n  min-height: 505px;\n}\n@media (max-width: 850px) {\n  .body {\n    margin-left: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .body {\n    margin-left: 0;\n    width: 100%;\n    max-width: 100%;\n    background-color: white;\n    overflow: hidden;\n  }\n}\n.body .title {\n  font-family: \"Roboto Mono\";\n  font-size: 18px;\n  color: black;\n  margin-bottom: 20px;\n  width: calc(100% - 280px);\n}\n@media (max-width: 767px) {\n  .body .title {\n    margin-bottom: 16px;\n    width: 100%;\n  }\n}\n.body .regions {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 262px;\n  background-color: rgba(255, 255, 255, 0.75);\n  z-index: 10;\n}\n@media (max-width: 767px) {\n  .body .regions {\n    display: block;\n    position: static;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n.body .regions .upper {\n  position: relative;\n  width: 100%;\n  height: 32px;\n  border: 2px solid black;\n}\n@media (max-width: 767px) {\n}\n.body .regions .upper .title {\n  width: 100%;\n  height: 100%;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: #666666;\n}\n.body .regions .upper .title .current {\n  pointer-events: none;\n  padding-left: 12px;\n  padding-top: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.body .regions .upper .arrow {\n  width: 16px;\n  height: 8px;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  margin-top: -4px;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  transition: ease 0.3s transform;\n}\n.body .regions .upper .arrow svg {\n  position: absolute;\n  top: 0;\n}\n@media (max-width: 767px) {\n}\n.body .regions .down {\n  overflow: hidden;\n}\n.body .regions .down .list {\n  max-height: 0px;\n  overflow: hidden;\n  position: relative;\n  top: -100%;\n  transition: ease 0.3s max-height;\n}\n@media (max-width: 767px) {\n  .body .regions .down .list {\n    position: fixed;\n    width: 100%;\n    z-index: 5;\n    bottom: 0;\n    background-color: white;\n    max-height: 100%;\n    left: 0;\n    top: 48px;\n    display: none;\n    padding-top: 16px;\n  }\n}\n.body .regions .down .list .close {\n  position: fixed;\n  top: 68px;\n  right: 24px;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/regions/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: none;\n}\n@media (max-width: 767px) {\n  .body .regions .down .list .close {\n    display: block;\n  }\n}\n.body .regions .down .list .item {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-left: 14px;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: #666666;\n  line-height: 16px;\n  padding-top: 3px;\n  padding-bottom: 2px;\n  cursor: pointer;\n  transition: ease 0.3s color, background-color ease 0.3s;\n}\n.body .regions .down .list .item /deep/ b {\n  pointer-events: none;\n}\n.body .regions .down .list .item:hover {\n  color: black;\n  background-color: white;\n}\n.body .regions .down .list .item.selected {\n  color: black;\n  background-color: white;\n}\n@media (max-width: 767px) {\n  .body .regions .down .list .item {\n    font-size: 18px;\n    font-weight: 500;\n    color: black;\n    margin-bottom: 11px;\n  }\n}\n.body .regions.opened .down .list {\n  top: 0;\n  max-height: 612px;\n}\n@media (max-width: 767px) {\n  .body .regions.opened .down .list {\n    max-height: 100%;\n    top: 48px;\n    display: block;\n  }\n}\n.body .regions.opened .upper .arrow {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n.body .items .hover {\n  position: absolute;\n  width: 400px;\n  background-color: white;\n  z-index: 10;\n}\n.body .bottom {\n  position: relative;\n}\n.body .bottom .legend {\n  position: absolute;\n  left: 16px;\n  z-index: 2;\n}\n@media (max-width: 767px) {\n  .body .bottom .legend {\n    display: none;\n  }\n}\n.body .bottom .legend .item {\n  transition: ease 0.3s opacity;\n}\n.body .bottom .legend .item:first-child {\n  display: none;\n}\n.body .bottom .legend .item:not(.selected) {\n  cursor: pointer;\n}\n.body .bottom .legend .item:not(.selected):hover {\n  opacity: 0.5;\n}\n.body .bottom .legend .item .icon {\n  width: 16px;\n  height: 16px;\n  border-radius: 16px;\n  display: inline-block;\n  margin-right: 4px;\n}\n.body .bottom .legend .item .name {\n  display: inline-block;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: #666666;\n  transition: ease 0.3s color;\n}\n.body .bottom .legend .item.selected .name {\n  color: black;\n}\n.body .bottom .graphs {\n  position: absolute;\n  left: 32px;\n  right: 48px;\n  height: 344px;\n}\n@media (max-width: 767px) {\n  .body .bottom .graphs {\n    left: 0;\n    right: 0;\n    height: 332px;\n  }\n}\n.body .bottom .graphs .main {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.body .bottom .graphs .main .graphen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: ease 0.3s opacity;\n  opacity: 0;\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  /* &:nth-child(1) {\n                    //    background-image: url(./../../assets/images/regions/all.svg);\n                }\n                &:nth-child(2) {\n                    //  background-image: url(./../../assets/images/regions/g0.svg);\n                }\n                &:nth-child(3) {\n                    background-image: url(./../../assets/images/regions/g1.svg);\n                }\n                &:nth-child(4) {\n                    background-image: url(./../../assets/images/regions/g2.svg);\n                }\n                &:nth-child(5) {\n                    background-image: url(./../../assets/images/regions/g3.svg);\n                }\n                &:nth-child(6) {\n                    background-image: url(./../../assets/images/regions/g4.svg);\n                }\n                &:nth-child(7) {\n                    background-image: url(./../../assets/images/regions/g5.svg);\n                }\n                &:nth-child(8) {\n                    background-image: url(./../../assets/images/regions/g6.svg);\n                }\n                &:nth-child(9) {\n                    background-image: url(./../../assets/images/regions/g7.svg);\n                }\n                &:nth-child(10) {\n                    background-image: url(./../../assets/images/regions/g8.svg);\n                }*/\n}\n.body .bottom .graphs .main .graphen.show {\n  opacity: 1;\n}\n.body .bottom .graphs .main .graphen img {\n  width: 100%;\n  height: 100%;\n}\n.body .bottom .graphs .vertical {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .body .bottom .graphs .vertical {\n    left: 0;\n    right: 0;\n  }\n}\n.body .bottom .graphs .vertical .item {\n  width: 48px;\n  height: 2px;\n  margin-right: -32px;\n}\n@media (max-width: 767px) {\n  .body .bottom .graphs .vertical .item {\n    left: 0;\n    right: 0;\n    width: 100%;\n    margin-right: 0;\n  }\n}\n.body .bottom .graphs .vertical .item:last-child {\n  visibility: hidden;\n}\n.body .bottom .graphs .vertical .item .line {\n  width: 48px;\n  border-bottom: 2px solid black;\n}\n@media (max-width: 767px) {\n  .body .bottom .graphs .vertical .item .line {\n    width: 100%;\n  }\n}\n.body .bottom .graphs .vertical .item .num {\n  width: 100%;\n  text-align: right;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: black;\n}\n@media (max-width: 767px) {\n  .body .bottom .graphs .vertical .item .num {\n    text-align: left;\n  }\n}\n.body .bottom .graphs .horizontal {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.body .bottom .graphs .horizontal .item {\n  padding-top: 8px;\n  width: 2px;\n}\n@media (max-width: 767px) {\n  .body .bottom .graphs .horizontal .item {\n    padding-top: 17px;\n    width: auto;\n  }\n}\n.body .bottom .graphs .horizontal .item .line {\n  height: 8px;\n  border-right: 2px solid white;\n  margin-bottom: 8px;\n}\n@media (max-width: 767px) {\n  .body .bottom .graphs .horizontal .item .line {\n    display: none;\n  }\n}\n.body .bottom .graphs .horizontal .item .num {\n  width: 50px;\n  color: white;\n  text-align: center;\n  margin-left: -25px;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n}\n@media (max-width: 767px) {\n  .body .bottom .graphs .horizontal .item .num {\n    color: #666666;\n    display: none;\n    margin-left: 0;\n  }\n}\n@media (max-width: 767px) {\n}\n.body .bottom .graphs .horizontal .item:first-child .num {\n  text-align: left;\n  display: block;\n}\n.body .bottom .graphs .horizontal .item:last-child .num {\n  text-align: right;\n  display: block;\n}\n.body .bottom .mobile-navigation {\n  position: absolute;\n  bottom: 8px;\n  left: 0px;\n  right: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: none;\n}\n.body .bottom .mobile-navigation div {\n  width: 56px;\n  height: 56px;\n  position: relative;\n  z-index: 2;\n  background-color: white;\n  background-size: 48px 48px;\n}\n.body .bottom .mobile-navigation div.left {\n  background-position: right;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/regions/left.svg") + ");\n}\n.body .bottom .mobile-navigation div.right {\n  background-position: left;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/regions/right.svg") + ");\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-regions/infographics-regions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsRegionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfographicsRegionsComponent = (function () {
    function InfographicsRegionsComponent() {
        this.current = 'Все регионы';
        this.opened = false;
        this.currentSelected = 0;
        this.array = [
            { id: 3, name: 'Украина', color: '#397FFF' },
            { id: 6, name: 'Южный ФО', color: '#F2F2F2' },
            { id: 7, name: 'Уральский ФО', color: '#96AADC' },
            { id: 4, name: 'Сибирский ФО', color: '#FF6E5A' },
            { id: 5, name: 'Северо-Западный ФО', color: '#B9D335' },
            { id: 8, name: 'Приволжский ФО', color: '#95D3D7' },
            { id: 9, name: 'Москва и Центральный ФО', color: '#FF8F9A' },
            { id: 1, name: 'Дальневосточный ФО', color: '#FFD200' },
            { id: 2, name: 'Беларусь', color: '#3FD89B' }
        ];
        this.array.sort(function (a, b) {
            return a.id - b.id;
        });
        this.array.unshift({ id: 0, name: 'Все регионы', color: '#00FF00' });
    }
    InfographicsRegionsComponent.prototype.ngOnInit = function () {
    };
    InfographicsRegionsComponent.prototype.selectItem = function (event) {
        // console.log('click item', event);
        console.log(event.currentTarget);
        event.preventDefault();
        event.stopImmediatePropagation();
        var item = this.getItemById(parseInt(event.currentTarget.id, 10));
        this.current = item.name;
        this.currentSelected = item.id;
        this.close();
    };
    InfographicsRegionsComponent.prototype.select = function (num) {
    };
    InfographicsRegionsComponent.prototype.closeMobile = function () {
        this.close();
    };
    InfographicsRegionsComponent.prototype.getItemById = function (num) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === num) {
                return item;
            }
        }
        return null;
    };
    InfographicsRegionsComponent.prototype.unfocus = function (event) {
        var found = false;
        for (var _i = 0, _a = event.path; _i < _a.length; _i++) {
            var item = _a[_i];
            // console.log(item);
            if (item.classList && item.classList.contains('regions')) {
                found = true;
                break;
            }
        }
        // console.log(found, event);
        if (!found) {
            this.close();
        }
    };
    InfographicsRegionsComponent.prototype.openclose = function () {
        if (this.opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    InfographicsRegionsComponent.prototype.open = function () {
        this.opened = true;
        if (window.innerWidth <= 767) {
            document.body.style.overflow = 'hidden';
        }
    };
    InfographicsRegionsComponent.prototype.close = function () {
        this.opened = false;
        if (window.innerWidth <= 767) {
            document.body.style.overflow = '';
        }
    };
    return InfographicsRegionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('list'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], InfographicsRegionsComponent.prototype, "list", void 0);
InfographicsRegionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-regions',
        template: __webpack_require__("../../../../../src/app/infographics-regions/infographics-regions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-regions/infographics-regions.component.less")]
    }),
    __metadata("design:paramtypes", [])
], InfographicsRegionsComponent);

var _a;
//# sourceMappingURL=infographics-regions.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-roles/infographics-roles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <img class=\"desktop\" src=\"./assets/images/roles/all.png\" />\n  <img class=\"mobile\" src=\"./assets/images/roles/b0.png\" />\n  <img class=\"mobile\" src=\"./assets/images/roles/b1.png\" />\n  <img class=\"mobile\" src=\"./assets/images/roles/b2.png\" />\n  <img class=\"mobile\" src=\"./assets/images/roles/b3.png\" />\n  <img class=\"mobile\" src=\"./assets/images/roles/b4.png\" />\n  <img class=\"mobile\" src=\"./assets/images/roles/b5.png\" />\n  <img class=\"mobile\" src=\"./assets/images/roles/b6.png\" />\n  <img class=\"mobile\" src=\"./assets/images/roles/b7.png\" />\n  <img class=\"mobile\" src=\"./assets/images/roles/b8.png\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-roles/infographics-roles.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  height: 2388px;\n  background-color: lightgrey;\n  max-width: 740px;\n}\n.body .mobile {\n  display: none;\n  width: 100%;\n}\n.body .desktop {\n  max-width: 100%;\n}\n@media (max-width: 767px) {\n  .body {\n    height: auto;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .body .desktop {\n    display: none;\n  }\n  .body .mobile {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-roles/infographics-roles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsRolesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfographicsRolesComponent = (function () {
    function InfographicsRolesComponent() {
    }
    InfographicsRolesComponent.prototype.ngOnInit = function () {
    };
    return InfographicsRolesComponent;
}());
InfographicsRolesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-roles',
        template: __webpack_require__("../../../../../src/app/infographics-roles/infographics-roles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-roles/infographics-roles.component.less")]
    }),
    __metadata("design:paramtypes", [])
], InfographicsRolesComponent);

//# sourceMappingURL=infographics-roles.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-scheme/infographics-scheme.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"title\">Схема работы площадки</div>\n\n  <div class=\"block\">\n    <div class=\"scheme\">\n      <div class=\"base\">\n        <object type=\"image/svg+xml\" data=\"./assets/images/schema/base.svg\"></object>\n        <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_base.svg\"></object>\n      </div>\n      <div class=\"slides\">\n        <div class=\"slide\" [class.show]=\"this.current==0\">\n          <object type=\"image/svg+xml\" data=\"./assets/images/schema/g0.svg\"></object>\n          <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_g0.svg\"></object>\n        </div>\n\n        <div class=\"slide\" [class.show]=\"this.current==1\">\n          <object type=\"image/svg+xml\" data=\"./assets/images/schema/g1.svg\"></object>\n          <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_g1.svg\"></object>\n        </div>\n\n        <div class=\"slide\" [class.show]=\"this.current==2\">\n          <object type=\"image/svg+xml\" data=\"./assets/images/schema/g2.svg\"></object>\n          <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_g2.svg\"></object>\n        </div>\n\n        <div class=\"slide\" [class.show]=\"this.current==3\">\n          <object type=\"image/svg+xml\" data=\"./assets/images/schema/g3.svg\"></object>\n          <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_g3.svg\"></object>\n        </div>\n\n\n        <div class=\"slide\" [class.show]=\"this.current==4\">\n          <object type=\"image/svg+xml\" data=\"./assets/images/schema/g4.svg\"></object>\n          <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_g4.svg\"></object>\n        </div>\n\n        <div class=\"slide\" [class.show]=\"this.current==5\">\n          <object type=\"image/svg+xml\" data=\"./assets/images/schema/g5.svg\"></object>\n          <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_g5.svg\"></object>\n        </div>\n\n        <div class=\"slide\" [class.show]=\"this.current==6\">\n          <object type=\"image/svg+xml\" data=\"./assets/images/schema/g6.svg\"></object>\n          <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_g6.svg\"></object>\n        </div>\n\n        <div class=\"slide\" [class.show]=\"this.current==7\">\n          <object type=\"image/svg+xml\" data=\"./assets/images/schema/g7.svg\"></object>\n          <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_g7.svg\"></object>\n        </div>\n\n        <div class=\"slide\" [class.show]=\"this.current==8\">\n          <object type=\"image/svg+xml\" data=\"./assets/images/schema/g8.svg\"></object>\n          <object type=\"image/svg+xml\" class=\"mobile\" data=\"./assets/images/schema/m_g8.svg\"></object>\n        </div>\n\n\n      </div>\n      <div class=\"hotspots\">\n        <div class=\"hotspot\" (click)=\"this.select(0)\"></div>\n        <div class=\"hotspot\" (click)=\"this.select(1)\"></div>\n        <div class=\"hotspot\" (click)=\"this.select(2)\"></div>\n        <div class=\"hotspot\" (click)=\"this.select(3)\"></div>\n        <div class=\"hotspot\" (click)=\"this.select(4)\"></div>\n        <div class=\"hotspot\" (click)=\"this.select(5)\"></div>\n        <div class=\"hotspot\" (click)=\"this.select(6)\"></div>\n        <div class=\"hotspot\" (click)=\"this.select(7)\"></div>\n        <div class=\"hotspot\" (click)=\"this.select(8)\"></div>\n      </div>\n    </div>\n    <div class=\"texts\">\n      <div class=\"num\">\n        <div class=\"item\" [class.show]=\"this.current==0\">Дилер</div>\n        <div class=\"item\" [class.show]=\"this.current==1\">Оператор</div>\n        <div class=\"item\" [class.show]=\"this.current==2\">Администрация</div>\n        <div class=\"item\" [class.show]=\"this.current==3\">Трансграничный поставщик</div>\n        <div class=\"item\" [class.show]=\"this.current==4\">Курьер</div>\n        <div class=\"item\" [class.show]=\"this.current==5\">Производитель <span>(гровер или химик)</span></div>\n        <div class=\"item\" [class.show]=\"this.current==6\">Складмен</div>\n        <div class=\"item\" [class.show]=\"this.current==7\">Кладмены</div>\n        <div class=\"item\" [class.show]=\"this.current==8\">Покупатель</div>\n\n      </div>\n      <div class=\"text\">\n        <div class=\"item\" [class.show]=\"this.current==2\">\n          <ul>\n\n\n            <li>\n              Получает от&nbsp;дилеров оплату за&nbsp;квоты и&nbsp;рекламу, а&nbsp;также депозиты</li>\n            <li>Предоставляет дилерам моментальный магазин и&nbsp;ветку на&nbsp;форуме</li>\n            <li>Модерирует форум</li>\n            <li>Отслеживает негативные отзывы</li>\n            <li>Заботится о&nbsp;безопасности клиентов и&nbsp;честности сделок</li>\n            <li>Предоставляет услуги гаранта</li>\n            <li>Принимает решение по&nbsp;перезакладам</li>\n          </ul>\n        </div>\n        <div class=\"item\" [class.show]=\"this.current==0\">\n          <ul>\n            <li>Договаривается с&nbsp;поставщиками и&nbsp;производителями наркотиков</li>\n            <li>Нанимает и&nbsp;увольняет сотрудников: операторов, складменов и&nbsp;кладменов</li>\n            <li>При трудоустройстве собирает с&nbsp;сотрудников депозиты</li>\n          </ul>\n        </div>\n        <div class=\"item\" [class.show]=\"this.current==1\">\n          <ul>\n            <li>Вносит большой депозит дилеру</li>\n            <li>Нанимает курьеров для доставки товара от&nbsp;поставщиков до&nbsp;складменов</li>\n            <li>Передает адрес оптовых партий складменам</li>\n            <li>Передает адреса мастер-кладов кладменам</li>\n            <li>Размещает адреса в&nbsp;базе моментальных магазинов</li>\n            <li>Контролирует продажи </li>\n            <li>Отвечает клиентам в&nbsp;Jabber и&nbsp;личные сообщения</li>\n            <li>Выступает от&nbsp;лица магазина в&nbsp;диспутах по&nbsp;ненаходам</li>\n          </ul>\n        </div>\n        <div class=\"item\" [class.show]=\"this.current==3\">\n          <ul>\n            <li>Собирает заказы на&nbsp;доставку наркотиков с&nbsp;владельцев магазинов</li>\n            <li>Страхует сделку у&nbsp;администрации</li>\n            <li>Через дроповодов нанимает дропов для приема груза</li>\n            <li>Получает от&nbsp;дропов адрес спрятанного товара, перезакладывает его и&nbsp;скидывает магазину координаты\n            </li>\n\n          </ul>\n        </div>\n        <div class=\"item\" [class.show]=\"this.current==5\">\n          <ul>\n            <li>Синтезирует или выращивает оптовые партии наркотиков</li>\n            <li>Страхует сделку у&nbsp;администрации</li>\n            <li>Прячет оптовую партию и&nbsp;передает ее&nbsp;адрес оператору</li>\n\n          </ul>\n        </div>\n\n        <div class=\"item\" [class.show]=\"this.current==4\">\n          <ul>\n            <li>Вносит большой депозит дилеру</li>\n            <li>Получает от&nbsp;оператора адрес оптовой партии и&nbsp;оплату</li>\n            <li>Доставляет товар в&nbsp;другой регион, прячет его и&nbsp;скидывает адрес оператору</li>\n          </ul>\n        </div>\n        <div class=\"item\" [class.show]=\"this.current==6\">\n          <ul>\n            <li>Вносит большой депозит дилеру</li>\n\n            <li>Получает адрес оптовой партии от&nbsp;оператора</li>\n\n            <li>Подбирает оптовую партию и&nbsp;развешивает из&nbsp;нее мастер-клады</li>\n\n            <li>Прячет мастер-клады и&nbsp;передает их&nbsp;адреса оператору</li>\n\n          </ul>\n        </div>\n        <div class=\"item\" [class.show]=\"this.current==7\">\n          <ul>\n            <li>Вносит минимальный депозит дилеру</li>\n            <li>Получает адрес мастер-клада от&nbsp;оператора</li>\n            <li>Делает закладки в&nbsp;своем районе и&nbsp;отправляет их&nbsp;адреса оператору</li>\n\n          </ul>\n        </div>\n        <div class=\"item\" [class.show]=\"this.current==8\">\n          <ul>\n            <li>Регистрируется на&nbsp;RAMP</li>\n            <li>Совершает покупки в&nbsp;моментальных магазинах или на&nbsp;форуме</li>\n            <li>По&nbsp;желанию оформляет гарант</li>\n            <li>Открывает диспут в&nbsp;случае ненахода клада с&nbsp;гарантом</li>\n\n          </ul>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-scheme/infographics-scheme.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  position: relative;\n  background-color: #999;\n  max-width: 740px;\n  margin-left: 84px;\n  padding: 16px;\n  min-height: 505px;\n}\n@media (max-width: 850px) {\n  .body {\n    margin-left: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .body {\n    margin-left: 0;\n    width: 100%;\n    max-width: 100%;\n    background-color: white;\n    overflow: hidden;\n    height: auto;\n  }\n}\n.body .title {\n  font-family: \"Roboto Mono\";\n  font-size: 18px;\n  color: black;\n  margin-bottom: 20px;\n  width: calc(100% - 280px);\n}\n@media (max-width: 767px) {\n  .body .title {\n    margin-bottom: 16px;\n    width: 100%;\n  }\n}\n.block {\n  position: relative;\n  width: 100%;\n  height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media (max-width: 767px) {\n  .block {\n    display: block;\n    text-align: center;\n    height: auto;\n  }\n}\n.block .base {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.block .base object {\n  display: block;\n}\n@media (max-width: 767px) {\n  .block .base object {\n    display: none;\n  }\n}\n.block .base object.mobile {\n  display: none;\n}\n@media (max-width: 767px) {\n  .block .base object.mobile {\n    display: block;\n  }\n}\n@media (max-width: 767px) {\n  .block .base {\n    position: static;\n    height: auto;\n  }\n  .block .base object {\n    width: 100%;\n    height: auto;\n  }\n}\n.block .slides {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 767px) {\n  .block .slides {\n    top: 0;\n  }\n}\n.block .slides .slide {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: ease 0.3s opacity;\n}\n@media (max-width: 767px) {\n  .block .slides .slide object {\n    display: none;\n  }\n}\n.block .slides .slide object.mobile {\n  display: none;\n}\n@media (max-width: 767px) {\n  .block .slides .slide object.mobile {\n    display: block;\n  }\n}\n.block .slides .slide.show {\n  opacity: 1;\n}\n.block .scheme {\n  width: 400px;\n  height: 400px;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .block .scheme {\n    width: 100%;\n    height: auto;\n    display: inline-block;\n    margin-bottom: 24px;\n  }\n}\n.block .scheme .hotspots {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  z-index: 5;\n  opacity: 0;\n}\n@media (max-width: 767px) {\n  .block .scheme .hotspots {\n    position: absolute;\n    top: 0;\n  }\n}\n.block .scheme .hotspots .hotspot {\n  cursor: pointer;\n  width: 33%;\n  border: 1px solid black;\n  height: 33%;\n}\n.block .texts {\n  width: 276px;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .block .texts {\n    width: 100%;\n  }\n}\n.block .texts .num {\n  font-family: \"Roboto Mono\";\n  font-size: 20px;\n  color: black;\n  margin-bottom: 26px;\n  font-weight: 500;\n  text-align: left;\n  padding-left: 22px;\n}\n@media (max-width: 767px) {\n  .block .texts .num {\n    font-weight: 500;\n    margin-bottom: 16px;\n  }\n}\n.block .texts .num .item {\n  opacity: 0;\n  transition: ease 0.3s opacity;\n  display: none;\n  line-height: 20px;\n}\n.block .texts .num .item span {\n  white-space: nowrap;\n}\n@media (max-width: 767px) {\n  .block .texts .num .item {\n    width: 100%;\n    position: static;\n  }\n}\n.block .texts .num .item:first-child {\n  position: relative;\n}\n.block .texts .num .item.show {\n  opacity: 1;\n  display: block;\n}\n.block .texts .text {\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  color: black;\n  text-align: left;\n}\n.block .texts .text .item {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  opacity: 0;\n  transition: ease 0.3s opacity;\n  pointer-events: none;\n  position: static;\n  display: none;\n}\n.block .texts .text .item ul {\n  padding-left: 22px;\n}\n.block .texts .text .item li {\n  list-style: none;\n}\n.block .texts .text .item li:before {\n  content: '-';\n  position: absolute;\n  margin-left: -20px;\n}\n.block .texts .text .item p {\n  margin-top: 7px;\n  margin-bottom: 7px;\n  display: block;\n}\n.block .texts .text .item p:before {\n  content: \"-\";\n  float: left;\n}\n.block .texts .text .item.show {\n  opacity: 1;\n  pointer-events: all;\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-scheme/infographics-scheme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsSchemeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfographicsSchemeComponent = (function () {
    function InfographicsSchemeComponent() {
        this.current = 2;
    }
    InfographicsSchemeComponent.prototype.ngOnInit = function () {
    };
    InfographicsSchemeComponent.prototype.select = function (num) {
        if (this.current !== num) {
            this.current = num;
        }
        console.log(this.current);
    };
    return InfographicsSchemeComponent;
}());
InfographicsSchemeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-scheme',
        template: __webpack_require__("../../../../../src/app/infographics-scheme/infographics-scheme.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-scheme/infographics-scheme.component.less")]
    }),
    __metadata("design:paramtypes", [])
], InfographicsSchemeComponent);

//# sourceMappingURL=infographics-scheme.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-stuff/infographics-stuff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" (click)=\"this.unfocus($event)\">\n  <div class=\"title\">Какие наркотики есть на&nbsp;RAMP</div>\n  <div class=\"regions \" [class.opened]=\"this.opened\">\n\n    <div class=\"upper\">\n      <div class=\"title\" (click)=\"this.showMobileList()\"><input type=\"text\" placeholder=\"Выберите регион\" value=\"\" [(ngModel)]=\"searchString\" (ngModelChange)=\"searchChange($event)\"\n          (focus)=\"this.focus()\" (keydown)=\"keyDown($event)\"></div>\n      <div class=\"arrow\" (click)=\"this.openclose()\"></div>\n    </div>\n\n    <div class=\"down\">\n      <div class=\"list\" #list>\n        <div class=\"close\" (click)=\"this.closeMobile()\"></div>\n        <div class=\"item\" *ngFor=\"let item of this.searchArray; let i=index\" [innerHTML]=\"item.name\" [attr.id]=\"item.id\" (click)=\"this.selectItem($event)\"\n          [class.selected]=\"this.currentSelected==i\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"items\">\n    <app-stuff-item *ngFor=\"let item of this.keys\" [key]=\"item\" (mouseover)=\"this.mouseover(item)\" (mouseout)=\"this.mouseout()\"></app-stuff-item>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-stuff/infographics-stuff.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  background-color: #999999;\n  position: relative;\n  background-color: #999;\n  max-width: 740px;\n  margin-left: 84px;\n  padding: 16px;\n  min-height: 505px;\n}\n@media (max-width: 850px) {\n  .body {\n    margin-left: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .body {\n    margin-left: 0;\n    width: 100%;\n    max-width: 100%;\n    background-color: white;\n  }\n}\n.body .title {\n  font-family: \"Roboto Mono\";\n  font-size: 18px;\n  color: black;\n  margin-bottom: 20px;\n  width: calc(100% - 280px);\n}\n@media (max-width: 767px) {\n  .body .title {\n    margin-bottom: 16px;\n    width: 100%;\n  }\n}\n.body .regions {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 260px;\n  background-color: rgba(255, 255, 255, 0.75);\n  z-index: 10;\n}\n@media (max-width: 767px) {\n  .body .regions {\n    display: block;\n    position: static;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n.body .regions .upper {\n  position: relative;\n  width: 100%;\n  height: 32px;\n  border: 2px solid #95D3D7;\n}\n@media (max-width: 767px) {\n  .body .regions .upper {\n    border: 2px solid #3FD89B;\n  }\n}\n.body .regions .upper .title {\n  width: 100%;\n  height: 100%;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: #666666;\n}\n.body .regions .upper .title input {\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  padding-left: 12px;\n}\n@media (max-width: 767px) {\n  .body .regions .upper .title input {\n    pointer-events: none;\n  }\n}\n.body .regions .upper .title input:focus {\n  border: none;\n  outline: none;\n}\n.body .regions .upper .arrow {\n  width: 16px;\n  height: 8px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/stuff/arrow.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  margin-top: -4px;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  .body .regions .upper .arrow {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/stuff/mobile-arrow.svg") + ");\n  }\n}\n.body .regions .down {\n  overflow: hidden;\n}\n.body .regions .down .list {\n  max-height: 0px;\n  overflow: auto;\n  position: relative;\n  top: -100%;\n  transition: ease 0.3s max-height;\n}\n@media (max-width: 767px) {\n  .body .regions .down .list {\n    position: fixed;\n    width: 100%;\n    z-index: 5;\n    bottom: 0;\n    background-color: white;\n    max-height: 100%;\n    left: 0;\n    top: 48px;\n    display: none;\n    padding-top: 16px;\n  }\n}\n.body .regions .down .list .close {\n  position: fixed;\n  top: 68px;\n  right: 24px;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/stuff/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: none;\n}\n@media (max-width: 767px) {\n  .body .regions .down .list .close {\n    display: block;\n  }\n}\n.body .regions .down .list .item {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-left: 14px;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: #666666;\n  line-height: 16px;\n  padding-top: 3px;\n  padding-bottom: 2px;\n  cursor: pointer;\n  transition: ease 0.3s color, background-color ease 0.3s;\n}\n.body .regions .down .list .item /deep/ b {\n  pointer-events: none;\n}\n.body .regions .down .list .item:hover {\n  color: black;\n  background-color: white;\n}\n.body .regions .down .list .item.selected {\n  color: black;\n  background-color: white;\n}\n@media (max-width: 767px) {\n  .body .regions .down .list .item {\n    font-size: 18px;\n    font-weight: 500;\n    color: black;\n    margin-bottom: 11px;\n  }\n}\n.body .regions.opened .down .list {\n  top: 0;\n  max-height: 612px;\n}\n@media (max-width: 767px) {\n  .body .regions.opened .down .list {\n    max-height: 100%;\n    top: 48px;\n    display: block;\n  }\n}\n.body .regions.opened .upper .arrow {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n.body .items .hover {\n  position: absolute;\n  width: 400px;\n  background-color: white;\n  z-index: 10;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-stuff/infographics-stuff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stuff_item_stuff_item_component__ = __webpack_require__("../../../../../src/app/stuff-item/stuff-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsStuffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfographicsStuffComponent = (function () {
    function InfographicsStuffComponent(http, appRef) {
        var _this = this;
        this.http = http;
        this.appRef = appRef;
        this.searchString = 'Все регионы';
        this.opened = false;
        this.searchArray = [];
        this.currentSelected = -1;
        this.keys = [];
        this.data = [];
        this.total = [];
        this.max = 0;
        this.http.request('./assets/data/stuff.json')
            .subscribe(function (response) { _this.build(response.json()); });
    }
    InfographicsStuffComponent.prototype.keyDown = function (event) {
        // console.log(event);
        if (event.keyCode === 40) {
            this.currentSelected++;
        }
        else if (event.keyCode === 38) {
            this.currentSelected--;
        }
        else if (event.keyCode === 13) {
            this.searchString = this.searchArray[this.currentSelected].name.replace('<b>', '').replace('</b>', '');
            document.activeElement.blur();
            this.select(this.searchArray[this.currentSelected].id);
        }
        if (this.currentSelected > this.searchArray.length - 1) {
            this.currentSelected = 0;
        }
        else if (this.currentSelected < 0) {
            this.currentSelected = this.searchArray.length - 1;
        }
        var array = this.items.toArray();
        this.list.nativeElement.scrollTop = 21 * this.currentSelected;
    };
    InfographicsStuffComponent.prototype.openclose = function () {
        this.opened = !this.opened;
    };
    InfographicsStuffComponent.prototype.ngOnInit = function () {
    };
    InfographicsStuffComponent.prototype.focus = function () {
        this.searchString = '';
        this.search();
        this.opened = true;
        this.list.nativeElement.scrollTop = 0;
    };
    InfographicsStuffComponent.prototype.unfocus = function (event) {
        var found = false;
        for (var _i = 0, _a = event.path; _i < _a.length; _i++) {
            var item = _a[_i];
            // console.log(item);
            if (item.classList && item.classList.contains('regions')) {
                found = true;
                break;
            }
        }
        // console.log(found, event);
        if (!found) {
            this.opened = false;
        }
    };
    InfographicsStuffComponent.prototype.ngAfterViewInit = function () {
    };
    InfographicsStuffComponent.prototype.build = function (data) {
        this.keys = data.keys;
        this.appRef.tick();
        for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
            var item = _a[_i];
            this.data.push({ name: item.name, id: this.data.length, stuff: item.stuff });
            for (var i = 0; i < item.stuff.length; i++) {
                if (!this.total[i]) {
                    this.total[i] = item.stuff[i];
                }
                else {
                    this.total[i] += item.stuff[i];
                }
            }
        }
        this.data.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        for (var _b = 0, _c = this.total; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item > this.max) {
                this.max = item;
            }
        }
        this.data.unshift({ name: 'Все регионы', id: -1, stuff: this.total });
        for (var _d = 0, _e = this.keys; _d < _e.length; _d++) {
            var key = _e[_d];
            key.all = this.total[key.id];
        }
        this.keys.sort(function (a, b) {
            return b.all - a.all;
        });
        //  console.log('all:', this.total);
        var array = this.items.toArray();
        for (var i = 0; i < this.keys.length; i++) {
            array[i].value = array[i].key.all;
            array[i].max = this.max;
        }
        this.searchString = '';
        this.search();
        //  this.select(3);
    };
    InfographicsStuffComponent.prototype.showMobileList = function () {
        if (window.innerWidth <= 767) {
            this.searchString = '';
            this.search();
            this.opened = true;
            document.body.style.overflow = 'hidden';
        }
    };
    InfographicsStuffComponent.prototype.closeMobile = function () {
        document.body.style.overflow = '';
        this.opened = false;
    };
    InfographicsStuffComponent.prototype.search = function () {
        var searchString = this.searchString.toLowerCase();
        var list = [];
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            var index = item.name.toLowerCase().indexOf(searchString);
            if (index !== -1) {
                var newString = item.name;
                newString = this.insert(newString, index, '<b>');
                newString = this.insert(newString, index + searchString.length + 3, '</b>');
                list.push({ name: newString, id: item.id });
            }
        }
        //  console.log('list', list);
        this.currentSelected = -1;
        this.searchArray = list;
    };
    InfographicsStuffComponent.prototype.insert = function (currentString, index, string) {
        if (index > 0) {
            return currentString.substring(0, index) + string + currentString.substring(index, currentString.length);
        }
        else {
            return string + currentString;
        }
    };
    ;
    InfographicsStuffComponent.prototype.searchChange = function (event) {
        this.search();
        // console.log('search change');
    };
    InfographicsStuffComponent.prototype.select = function (num) {
        var item = this.getItemById(num);
        var array = this.items.toArray();
        for (var i = 0; i < this.keys.length; i++) {
            array[i].value = item.stuff[this.keys[i].id];
        }
        this.opened = false;
    };
    InfographicsStuffComponent.prototype.selectItem = function (event) {
        // console.log('click item', event);
        event.preventDefault();
        event.stopImmediatePropagation();
        this.searchString = event.target.innerText;
        this.select(parseInt(event.target.id));
        this.closeMobile();
    };
    InfographicsStuffComponent.prototype.getItemById = function (num) {
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === num) {
                return item;
            }
        }
        return null;
    };
    return InfographicsStuffComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_0__stuff_item_stuff_item_component__["a" /* StuffItemComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* QueryList */]) === "function" && _a || Object)
], InfographicsStuffComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewChild */])('list'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], InfographicsStuffComponent.prototype, "list", void 0);
InfographicsStuffComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-stuff',
        template: __webpack_require__("../../../../../src/app/infographics-stuff/infographics-stuff.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-stuff/infographics-stuff.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ApplicationRef */]) === "function" && _d || Object])
], InfographicsStuffComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=infographics-stuff.component.js.map

/***/ }),

/***/ "../../../../../src/app/infographics-vacancy/infographics-vacancy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <img class=\"desktop\" src=\"./assets/images/vacancy/ig.png\" />\n  <img class=\"mobile\" src=\"./assets/images/vacancy/ig-mobile.png\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/infographics-vacancy/infographics-vacancy.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  height: 640px;\n  background-color: lightgrey;\n  max-width: 740px;\n  margin-left: 84px;\n}\n.body .mobile {\n  display: none;\n  width: 100%;\n}\n.body .desktop {\n  max-width: 100%;\n}\n@media (max-width: 767px) {\n  .body {\n    height: auto;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .body .desktop {\n    display: none;\n  }\n  .body .mobile {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infographics-vacancy/infographics-vacancy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicsVacancyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfographicsVacancyComponent = (function () {
    function InfographicsVacancyComponent() {
    }
    InfographicsVacancyComponent.prototype.ngOnInit = function () {
    };
    return InfographicsVacancyComponent;
}());
InfographicsVacancyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-infographics-vacancy',
        template: __webpack_require__("../../../../../src/app/infographics-vacancy/infographics-vacancy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/infographics-vacancy/infographics-vacancy.component.less")]
    }),
    __metadata("design:paramtypes", [])
], InfographicsVacancyComponent);

//# sourceMappingURL=infographics-vacancy.component.js.map

/***/ }),

/***/ "../../../../../src/app/link-block/link-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" [class.light]=\"!this.global.color\">\n  <div class=\"title\">extra content available</div>\n  <div class=\"list\">\n    <div class=\"link\" *ngFor=\"let item of this.links\">\n      <a href=\"{{item.link}}\" target=\"_blank\">>>&nbsp;{{item.title}}</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/link-block/link-block.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  min-width: 252px;\n  width: auto;\n  padding-top: 16px;\n  padding-bottom: 24px;\n  padding-left: 16px;\n  padding-right: 16px;\n  border: 1px solid white;\n  display: inline-block;\n  transition: ease 0.3s border;\n}\n.body .title {\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  color: #404040;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n.body .link:not(:last-child) {\n  margin-bottom: 5px;\n}\n.body .link a {\n  color: white;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: ease 0.3s opacity;\n  cursor: pointer;\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  transition: ease 0.3s color;\n}\n.body .link a:hover {\n  opacity: 0.8;\n}\n.body.light {\n  border-color: black;\n}\n.body.light .link a {\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/link-block/link-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkBlockComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkBlockComponent = (function (_super) {
    __extends(LinkBlockComponent, _super);
    function LinkBlockComponent(element, global) {
        var _this = _super.call(this, element) || this;
        _this.global = global;
        return _this;
    }
    LinkBlockComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return LinkBlockComponent;
}(__WEBPACK_IMPORTED_MODULE_1_activable__["a" /* Activable */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('links'),
    __metadata("design:type", Array)
], LinkBlockComponent.prototype, "links", void 0);
LinkBlockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-link-block',
        template: __webpack_require__("../../../../../src/app/link-block/link-block.component.html"),
        styles: [__webpack_require__("../../../../../src/app/link-block/link-block.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */]) === "function" && _b || Object])
], LinkBlockComponent);

var _a, _b;
//# sourceMappingURL=link-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/loading-interface/loading-interface.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" [class.extra]=\"this.extra\" [class.light]=\"!this.global.color\">\n  <div class=\"title\">{{this.title}}</div>\n  <div class=\"percent\">{{this.percent.toFixed(0)}}%;</div>\n\n  <div class=\"next\">\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/loading-interface/loading-interface.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .body {\n  font-family: \"Roboto Mono\";\n  color: #404040;\n  font-size: 14px;\n  font-weight: bold;\n}\n:host .body.extra {\n  color: #404040;\n}\n:host .body .title {\n  display: inline-block;\n}\n:host .body .percent {\n  display: inline-block;\n}\n:host .body .next {\n  display: block;\n}\n:host .body.light {\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loading-interface/loading-interface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingInterfaceComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingInterfaceComponent = LoadingInterfaceComponent_1 = (function (_super) {
    __extends(LoadingInterfaceComponent, _super);
    function LoadingInterfaceComponent(element, global) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.global = global;
        _this.isActivated = false;
        _this.extra = false;
        _this.done = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* EventEmitter */]();
        _this.percent = 0;
        _this.emitted = false;
        return _this;
    }
    LoadingInterfaceComponent.prototype.ngOnInit = function () {
        // this.activate();
        _super.prototype.ngOnInit.call(this);
        this.enterFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame || function (callback) {
            setTimeout(callback, 1000 / 60);
        };
        this.enterFrameHandler();
    };
    LoadingInterfaceComponent.prototype.enterFrameHandler = function () {
        var _this = this;
        this.enterFrame.call(window, function () {
            _this.enterFrameHandler();
        });
        if (this.isActivated && !this.emitted) {
            if (this.percent < 100) {
                var now = new Date().getTime();
                if (this.prevDate) {
                    this.percent += (now - this.prevDate) / 20;
                }
                else {
                    this.percent += 1;
                }
                this.prevDate = now;
            }
            //  console.log('interval', this.percent);
            if (this.percent >= 100) {
                this.percent = 100;
                this.emitted = true;
                this.done.emit();
            }
        }
    };
    LoadingInterfaceComponent.prototype.activate = function () {
        // console.log('activate');
        this.percent = 0;
        this.isActivated = true;
    };
    return LoadingInterfaceComponent;
}(__WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('title'),
    __metadata("design:type", String)
], LoadingInterfaceComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('extra'),
    __metadata("design:type", Object)
], LoadingInterfaceComponent.prototype, "extra", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* Output */])('done'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], LoadingInterfaceComponent.prototype, "done", void 0);
LoadingInterfaceComponent = LoadingInterfaceComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-loading-interface',
        template: __webpack_require__("../../../../../src/app/loading-interface/loading-interface.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loading-interface/loading-interface.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_0" /* forwardRef */])(function () { return LoadingInterfaceComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */]) === "function" && _c || Object])
], LoadingInterfaceComponent);

var LoadingInterfaceComponent_1, _a, _b, _c;
//# sourceMappingURL=loading-interface.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [class.light]=\"!this.global.color\">\n    <app-header></app-header>\n\n\n\n\n    <div class=\"page padding\">\n\n\n\n\n\n\n\n        <!--<app-infographics-regions></app-infographics-regions>-->\n\n        <!--<app-infographics-scheme></app-infographics-scheme>-->\n\n        <!--<app-infographics-marketplaces></app-infographics-marketplaces>-->\n\n        <!--<app-infographics-stuff></app-infographics-stuff>-->\n        <!--<app-chat>\n\n        <div class=\"item\">\n            Конкурентами я&nbsp;могу назвать именно молодые наглые площадки. И&nbsp;с&nbsp;ними я&nbsp;расправляюсь беспощадно, поэтому\n            вы&nbsp;про них ничего и&nbsp;не&nbsp;слышали. Вообще, сегодня вливать большие бабки в&nbsp;драг-площадку станет\n            только самоубийца&nbsp;&mdash; рынок поделен и&nbsp;переделен. Все, кто вложился, пока что вряд&nbsp;ли даже\n            отбил свое. Впрочем, как только у&nbsp;кого-то получится сделать что-то достойное внимания, мы&nbsp;с&nbsp;радостью\n            выкупим его стартап за&nbsp;хорошую шестизначную сумму в&nbsp;долларах.\n        </div>\n        <div class=\"item\">Будет&nbsp;ли широкомасштабная война Legal RC&nbsp;против RAMP, покажет время. Я&nbsp;надеюсь, что она не&nbsp;нужна\n            ни&nbsp;им, ни&nbsp;нам. Но&nbsp;если что, мы&nbsp;похороним старичков, что поделать.</div>\n\n    </app-chat>-->\n        <app-p>\n            <app-loading-interface [title]=\"'loading interface...'\" (done)=\"this.incrimentNarrativeIndex()\">\n                database_01 loaded;\n            </app-loading-interface>\n        </app-p>\n\n\n\n\n        <app-p [short]=\"true\" [narrativeIndex]=\"1\">\n            <p>\n                В&nbsp;невидимом для большинства пользователей сети <span>&laquo;темном&raquo;</span> интернете существуют\n                сотни сайтов, где можно беспрепятственно купить оружие, посмотреть особо извращенные виды порнографии или\n                воспользоваться услугами хакеров. Достаточно установить себе специальный <span>Tor-браузер</span> и&nbsp;зайти\n                на&nbsp;один из&nbsp;таких ресурсов в&nbsp;доменной зоне <span>.onion</span>\n            </p>\n        </app-p>\n\n\n        <app-p [short]=\"true\" [narrativeIndex]=\"1\">\n            <p>\n                Но&nbsp;больше всего Tor известен тем, что там продаются практически все виды наркотиков. На&nbsp;анонимных площадках обитают\n                тысячи продавцов и&nbsp;их&nbsp;клиентов, наладивших четкие схемы распространения психоактивных веществ и&nbsp;отмывания\n                преступных доходов.\n            </p>\n        </app-p>\n\n\n\n        <app-p [narrativeIndex]=\"1\">\n            <p class=\"grey\">\n                welcome&nbsp;to...\n            </p>\n        </app-p>\n\n\n        <app-dot-line [narrativeIndex]=\"1\">\n        </app-dot-line>\n\n        <app-p [narrativeIndex]=\"1\">\n            <app-yellow-ramp [narrativeIndex]=\"1\" [currentNarrativeIndex]=\"this.narrativeIndex\">\n            </app-yellow-ramp>\n        </app-p>\n\n\n        <app-dot-line [narrativeIndex]=\"1\">\n        </app-dot-line>\n    </div>\n\n    <div class=\"warning\" [class.show]=\"this.narrativeIndex>=1\">\n        <div class=\"inner\">\n            Внимание! Производство, сбыт и&nbsp;пересылка наркотических средств и&nbsp;психотропных веществ является уголовным преступлением\n            и преследуется по&nbsp;закону (статьи 228-231 Уголовного кодекса Российской Федерации).\n        </div>\n    </div>\n\n    <div class=\"page\">\n\n        <app-p [narrativeIndex]=\"1\">\n            <app-enter-button [narrativeIndex]=\"1\" (done)=\"this.incrimentNarrativeIndex()\">> ENTER</app-enter-button>\n        </app-p>\n\n        <app-dot-line *ngIf=\"this.narrativeIndex>=2\" [narrativeIndex]=\"2\"></app-dot-line>\n\n\n\n        <app-p *ngIf=\"this.narrativeIndex>=2\" [fatLine]=\"true\" [narrativeIndex]=\"2\" [middle]=\"true\">\n            <p class=\"margined\">\n                К&nbsp;нелегальному бизнесу давно присоединились и&nbsp;русскоязычные обитатели Tor. Ежемесячно они продают и&nbsp;покупают\n                наркотиков на&nbsp;миллиарды рублей, заполняя улицы крупных городов тайниками-закладками с&nbsp;марихуаной,\n                амфетамином и&nbsp;психоделиками.\n            </p>\n            <p class=\"margined\">\n                Этот рынок четко разделен на&nbsp;сферы влияния&nbsp;и, по&nbsp;сути, монополизирован крупнейшей в&nbsp;СНГ площадкой <span>Russian\n            Anonymous Marketplace</span> или RAMP, работающей более чем в&nbsp;100 городах России, Белоруссии и&nbsp;Украины.\n                Администраторы и&nbsp;продавцы ежемесячно зарабатывают до&nbsp;полумиллиона долларов, активно расширяют клиентскую\n                базу, нанимают новых производителей и&nbsp;распространителей наркотиков и&nbsp;практически не&nbsp;встречают\n                противодействия со&nbsp;стороны правоохранительных органов.\n\n            </p>\n            <p>\n                &laquo;Лента.ру&raquo; и&nbsp;«Темы не мемы» проследили историю становления RAMP, выяснили, как площадка разгромила конкурентов\n                и&nbsp;создала одну из&nbsp;крупнейших в&nbsp;мире тайных схем производства и&nbsp;продажи наркотиков.\n            </p>\n        </app-p>\n\n\n        <app-dot-line *ngIf=\"this.narrativeIndex>=2\" [narrativeIndex]=\"2\">\n        </app-dot-line>\n\n\n        <app-global-navigation #navigation *ngIf=\"this.narrativeIndex>=2\" [narrativeIndex]=\"2\">\n\n        </app-global-navigation>\n\n\n\n    </div>\n\n\n    <ng-template appPageHost></ng-template>\n    <!--<app-page0 *ngIf=\"this.narrativeIndex>=2\" [narrativeIndex]=\"2\">\n\n    </app-page0>-->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host > .wrapper {\n  background-color: black;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  transition: ease 0.3s background-color;\n  min-height: 100vh;\n  padding-bottom: 200px;\n}\n:host > .wrapper.light {\n  background-color: white;\n}\n:host > .wrapper .warning {\n  width: 100%;\n  background-color: #0032ff;\n  color: black;\n  text-transform: uppercase;\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  margin-bottom: 32px;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  transition: ease 0.3s transform;\n}\n:host > .wrapper .warning.show {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n:host > .wrapper .warning .inner {\n  width: 100%;\n  max-width: 992px;\n  margin: auto;\n  padding-top: 16px;\n  padding-bottom: 24px;\n  padding-left: 86px;\n}\n@media (max-width: 850px) {\n  :host > .wrapper .warning .inner {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  :host > .wrapper .warning .inner {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n:host > .wrapper .page {\n  width: 100%;\n  max-width: 992px;\n  margin: auto;\n}\n:host > .wrapper .page.padding {\n  padding-top: 64px;\n}\n@media (max-width: 850px) {\n  :host > .wrapper .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  :host > .wrapper .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n:host > .wrapper .page app-global-navigation {\n  display: block;\n  margin: auto;\n  margin-left: 82px;\n}\n@media (max-width: 767px) {\n  :host > .wrapper .page app-global-navigation {\n    margin: 0;\n  }\n}\n@media (max-width: 767px) {\n  app-infographics-stuff {\n    display: block;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\n@media (max-width: 767px) {\n  app-infographics-marketplaces {\n    display: block;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\n@media (max-width: 767px) {\n  app-infographics-scheme {\n    display: block;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\n@media (max-width: 767px) {\n  app-infographics-regions {\n    display: block;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page2_page2_component__ = __webpack_require__("../../../../../src/app/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_navigation_global_navigation_component__ = __webpack_require__("../../../../../src/app/global-navigation/global-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paging_service_service__ = __webpack_require__("../../../../../src/app/paging-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1_component__ = __webpack_require__("../../../../../src/app/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page0_page0_component__ = __webpack_require__("../../../../../src/app/page0/page0.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_directive__ = __webpack_require__("../../../../../src/app/page.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MainPageComponent = (function (_super) {
    __extends(MainPageComponent, _super);
    function MainPageComponent(element, global, componentFactoryResolver, paging) {
        var _this = _super.call(this, element) || this;
        _this.global = global;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.paging = paging;
        _this.page1Created = false;
        _this.pages = [null, null, null];
        _this.isActivated = true;
        _this.paging.pageEmitter.subscribe(function (newPage) {
            if (_this.narrativeIndex < 2) {
                _this.narrativeIndex = 2;
            }
            var navigationPosition = _this.getOffsetTop(_this.navigation.element.nativeElement) +
                _this.navigation.element.nativeElement.clientHeight;
            //  console.log(this.navigation, navigationPosition, this.navigation.element);
            if (Math.abs(_this.lastScroll - navigationPosition) > window.innerHeight) {
                window.scrollTo(0, navigationPosition);
            }
            _this.createPage(newPage);
        });
        return _this;
    }
    MainPageComponent.prototype.incrimentNarrativeIndex = function () {
        var _this = this;
        _super.prototype.incrimentNarrativeIndex.call(this);
        if (this.narrativeIndex === 2) {
            var n = 0;
            setTimeout(function () {
                _this.updateVisibility();
            }, 1000);
        }
    };
    MainPageComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    MainPageComponent.prototype.updateVisibility = function () {
        if (this.narrativeIndex === 2 && !this.page1Created) {
            // this.paging.current = this.getPrevPage()
            var page = this.getPrevPage();
            this.createPage(page);
            this.paging._current = page;
            this.page1Created = true;
        }
        _super.prototype.updateVisibility.call(this);
    };
    MainPageComponent.prototype.getPrevPage = function () {
        var id = parseInt(this.getParameterByName('page'), 10);
        if (isNaN(id)) {
            id = 0;
        }
        return id;
    };
    MainPageComponent.prototype.getParameterByName = function (name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };
    MainPageComponent.prototype.createPage = function (num) {
        // console.log('CREATE PAGE', num);
        var viewContainerRef = this.pageHost.viewContainerRef;
        for (var i = 0; i < 3; i++) {
            if (i !== num) {
                if (this.pages[i]) {
                    this.pages[i].instance.disable();
                }
            }
        }
        viewContainerRef.detach(0);
        if (this.pages[num]) {
            this.pages[num].instance.enable();
            viewContainerRef.insert(this.pages[num].hostView, 0);
        }
        else {
            var componentFactory = void 0;
            if (num === 0) {
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__page0_page0_component__["a" /* Page0Component */]);
            }
            else if (num === 1) {
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__page1_page1_component__["a" /* Page1Component */]);
            }
            else if (num === 2) {
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_0__page2_page2_component__["a" /* Page2Component */]);
            }
            // viewContainerRef.
            var componentRef = viewContainerRef.createComponent(componentFactory);
            this.pages[num] = componentRef;
        }
    };
    MainPageComponent.prototype.ngAfterViewInit = function () {
        this.resizeMe();
        this.workWithScrollPosition(0);
    };
    MainPageComponent.prototype.onResize = function (event) {
        this.resizeMe();
    };
    MainPageComponent.prototype.resizeMe = function () {
    };
    return MainPageComponent;
}(__WEBPACK_IMPORTED_MODULE_7__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_6" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__page_directive__["a" /* PageDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__page_directive__["a" /* PageDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__page_directive__["a" /* PageDirective */]) === "function" && _a || Object)
], MainPageComponent.prototype, "pageHost", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_6" /* ViewChild */])('navigation'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__global_navigation_global_navigation_component__["a" /* GlobalNavigationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global_navigation_global_navigation_component__["a" /* GlobalNavigationComponent */]) === "function" && _b || Object)
], MainPageComponent.prototype, "navigation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_7" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainPageComponent.prototype, "onResize", null);
MainPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["_5" /* Component */])({
        selector: 'app-main-page',
        template: __webpack_require__("../../../../../src/app/main-page/main-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-page/main-page.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_core__["M" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__global_service__["a" /* GlobalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__angular_core__["Q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_core__["Q" /* ComponentFactoryResolver */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__paging_service_service__["a" /* PagingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__paging_service_service__["a" /* PagingServiceService */]) === "function" && _f || Object])
], MainPageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" [class.incision]=\"this.incision\" [class.light]=\"!this.global.color\">\n  <div class=\"shade\"></div>\n  <div class=\"menu-item\" [class.light]=\"!this.global.color\" *ngFor=\"let item of this.items;let i=index\" [class.current]=\"i==this.paging.pages[this.page]\"\n    (click)=\"this.select(i)\">\n    <div class=\"dot\"></div>\n    <div class=\"title\">{{i+1}}. {{item}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  display: block;\n  width: 200px;\n  position: relative;\n}\n@media (max-width: 1105px) {\n  .body {\n    display: none;\n  }\n}\n.body .shade {\n  position: absolute;\n  top: -8px;\n  left: -12px;\n  right: -8px;\n  bottom: -8px;\n  background-color: black;\n  opacity: 0.5;\n  border-radius: 5px;\n  transition: ease 0.3s background-color;\n}\n.body.light .shade {\n  background-color: white;\n}\n.body .menu-item {\n  height: 16px;\n  margin-bottom: 16px;\n  position: relative;\n  z-index: 2;\n  transition: ease 0.3s opacity;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.body .menu-item:hover {\n  opacity: 0.8;\n}\n.body .menu-item .dot {\n  width: 9px;\n  height: 9px;\n  display: inline-block;\n  border: 1px solid #323232;\n  border-radius: 16px;\n  vertical-align: middle;\n  margin-right: 12px;\n  transition: ease 0.3s border, ease 0.3s background-color, width 0.3s ease, height 0.3s ease, margin ease 0.3s;\n}\n.body .menu-item.light .dot {\n  border: 1px solid black;\n}\n.body .menu-item .title {\n  color: #3f3f3f;\n  font-family: \"Roboto Mono\";\n  font-size: 12px;\n  font-weight: 500;\n  vertical-align: middle;\n  display: inline-block;\n}\n.body .menu-item.light .title {\n  color: #999999;\n}\n.body .menu-item.current {\n  pointer-events: none;\n}\n.body .menu-item.current .dot {\n  width: 16px;\n  height: 16px;\n  border: 1px solid white;\n  background-color: white;\n  margin-right: 8px;\n  margin-left: -3px;\n}\n.body .menu-item.current .title {\n  color: #cccccc;\n}\n.body .menu-item.current.light .dot {\n  border: 1px solid black;\n  background-color: black;\n}\n.body .menu-item.current.light .title {\n  color: black;\n}\n.body.incision {\n  pointer-events: none;\n}\n.body.incision .shade {\n  display: none;\n}\n.body.incision .menu-item .dot {\n  border-color: black;\n}\n.body.incision .menu-item.current .dot {\n  border-color: black;\n  background-color: black;\n}\n.body.incision .title {\n  visibility: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paging_service_service__ = __webpack_require__("../../../../../src/app/paging-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(element, paging, global) {
        this.element = element;
        this.paging = paging;
        this.global = global;
        this.current = 0;
        this.destroyed = false;
        this.items = [
            'История Tor',
            'Tor в России',
            'История RAMP',
            'RAMP и конкуренты',
            'Бизнес RAMP',
            'RAMP и СМИ'
        ];
        this.page = 0;
        this.incision = false;
        this.nativeElement = element.nativeElement;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    MenuComponent.prototype.select = function (num) {
        if (!this.incision) {
            this.paging.emitter.emit({ page: this.page, section: num });
        }
        this.current = num;
    };
    return MenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('items'),
    __metadata("design:type", Array)
], MenuComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('page'),
    __metadata("design:type", Object)
], MenuComponent.prototype, "page", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('incision'),
    __metadata("design:type", Object)
], MenuComponent.prototype, "incision", void 0);
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__paging_service_service__["a" /* PagingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__paging_service_service__["a" /* PagingServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/p/p.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"left\" [class.final]=\"this.final\" [class.blue]=\"this.blue\" [class.magenta]=\"this.magenta\" [class.yellow]=\"this.yellow\"\n  [class.extra]=\"this.extra\" [class.fatLine]=\"this.fatLine\" [class.activated]=\"this.isActivated\" [class.noLine]=\"this.noLine\"\n  [class.light]=\"!this.global.color\" [class.answer]=\"this.answer\" [class.question]=\"this.question\">\n\n</div>\n<div class=\"content\" [class.final]=\"this.final\" [class.blue]=\"this.blue\" [class.magenta]=\"this.magenta\" [class.yellow]=\"this.yellow\"\n  [class.light]=\"!this.global.color\" [class.noLine]=\"this.noLine\" [class.activate]=\"this.isActivated\" [class.short]=\"this.short\"\n  [class.middle]=\"this.middle\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/p/p.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  margin: auto;\n  margin-bottom: 16px;\n}\n:host .left {\n  width: 16px;\n  min-width: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #404040;\n  margin-right: 16px;\n  margin-left: 52px;\n  opacity: 0;\n  transition: ease 0.3s opacity, ease 0.3s background-color;\n}\n@media (max-width: 850px) {\n  :host .left {\n    margin-left: 0;\n    margin-right: 32px;\n  }\n}\n@media (max-width: 767px) {\n  :host .left {\n    display: none;\n  }\n}\n:host .left.fatLine {\n  width: 68px;\n  margin-left: 0;\n}\n@media (max-width: 850px) {\n  :host .left.fatLine {\n    margin-left: -45px;\n  }\n}\n:host .left.activated {\n  opacity: 1;\n}\n:host .left.extra {\n  background-color: #707070;\n}\n:host .left.extra.light {\n  background-color: #707070;\n}\n:host .left.noLine {\n  display: none;\n}\n:host .left.yellow {\n  background-color: #ffc800;\n}\n:host .left.magenta {\n  background-color: #aa50ff;\n}\n:host .left.blue {\n  background-color: #387fff;\n}\n:host .left.final {\n  background-color: white;\n}\n:host .left.light {\n  background-color: #999999;\n}\n:host .left.light.yellow {\n  background-color: #ffc800;\n}\n:host .left.light.magenta {\n  background-color: #aa50ff;\n}\n:host .left.light.blue {\n  background-color: #387fff;\n}\n:host .left.light.extra {\n  background-color: #707070;\n}\n:host .left.answer {\n  background-color: #373737;\n}\n:host .left.question {\n  background-color: #707070;\n}\n:host .content {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: 100%;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n:host .content.middle {\n  max-width: 740px;\n}\n:host .content.short {\n  max-width: 572px;\n}\n:host .content /deep/ p {\n  color: black;\n  font-size: 14px;\n  font-family: \"Roboto Mono\";\n  margin: auto;\n  font-weight: 500;\n}\n:host .content /deep/ p.extra {\n  max-width: 656px;\n  margin-left: 0;\n  color: black;\n}\n:host .content /deep/ p.blacked {\n  color: #999999;\n}\n:host .content /deep/ p span {\n  display: inline-block;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  transition: ease 0.3s 0.2s transform;\n  color: black;\n  background-color: #666666;\n}\n:host .content /deep/ p.yellow-select span {\n  background-color: #ffc800;\n}\n:host .content /deep/ p.magenta-select span {\n  background-color: #aa50ff;\n}\n:host .content /deep/ p.blue-select span {\n  background-color: #387fff;\n}\n:host .content /deep/ p.margined:not(:last-child) {\n  margin-bottom: 20px;\n}\n:host .content.activate {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n:host .content.activate /deep/ p {\n  color: #a0a0a0;\n}\n:host .content.activate /deep/ p span {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n:host .content.activate /deep/ p.grey {\n  color: #404040;\n  font-weight: bold;\n}\n:host .content.activate /deep/ p.blacked {\n  color: black;\n}\n:host .content.activate /deep/ p.question {\n  color: #707070;\n}\n:host .content.activate /deep/ p.question:first-child:before {\n  content: \"Q:\";\n  display: inline-block;\n  color: #707070;\n  font-weight: bold;\n}\n:host .content.activate /deep/ p.answer {\n  color: #373737;\n}\n:host .content.activate /deep/ p.answer:first-child:before {\n  content: \"A:\";\n  display: inline-block;\n  color: #373737;\n  font-weight: bold;\n}\n:host .content.activate.extra /deep/ p {\n  color: black;\n}\n:host .content.yellow /deep/ p {\n  color: #ffc800;\n}\n:host .content.magenta /deep/ p {\n  color: #aa50ff;\n}\n:host .content.blue /deep/ p {\n  color: #387fff;\n}\n:host .content.light /deep/ p {\n  font-weight: normal;\n  color: #707070;\n}\n:host .content.light /deep/ p span {\n  color: white;\n}\n:host .content.light /deep/ p.grey {\n  font-weight: 500;\n}\n:host .content.light /deep/ p.blacked span {\n  color: black;\n}\n:host .content.light /deep/ p.yellow-select span {\n  color: black;\n}\n:host .content.light /deep/ p.magenta-select span {\n  color: black;\n}\n:host .content.light /deep/ p.blue-select span {\n  color: black;\n}\n:host .content.light /deep/ p.question {\n  color: #707070;\n}\n:host .content.light /deep/ p.question:first-child:before {\n  content: \"Q:\";\n  display: inline-block;\n  color: #707070;\n  font-weight: bold;\n}\n:host .content.light /deep/ p.answer {\n  color: #373737;\n}\n:host .content.light /deep/ p.answer:first-child:before {\n  content: \"A:\";\n  display: inline-block;\n  color: #373737;\n  font-weight: bold;\n}\n:host .content.light.yellow /deep/ p {\n  color: #ffc800;\n}\n:host .content.light.magenta /deep/ p {\n  color: #aa50ff;\n}\n:host .content.light.blue /deep/ p {\n  color: #387fff;\n}\n:host .content.light.extra /deep/ p {\n  color: black;\n}\n:host .content.light.extra /deep/ p.question {\n  color: #707070;\n}\n:host .content.light.extra /deep/ p.question:first-child:before {\n  content: \"Q:\";\n  display: inline-block;\n  color: #707070;\n  font-weight: bold;\n}\n:host .content.light.extra /deep/ p.answer {\n  color: #373737;\n}\n:host .content.light.extra /deep/ p.answer.first-child:before {\n  content: \"A:\";\n  display: inline-block;\n  color: #373737;\n  font-weight: bold;\n}\n:host .content.final /deep/ p {\n  color: white;\n  font-size: 20px;\n  font-family: \"Roboto Mono\";\n}\n:host .content.final /deep/ p:after {\n  content: \"\";\n  display: inline-block;\n  width: 10px;\n  height: 19px;\n  background-color: white;\n  -webkit-animation: blink 0.4s infinite linear alternate-reverse;\n          animation: blink 0.4s infinite linear alternate-reverse;\n  margin-left: 5px;\n  margin-bottom: -1px;\n}\n:host .content.final.light /deep/ p {\n  color: black;\n}\n:host .content.final.light /deep/ p:after {\n  background-color: black;\n}\n:host .content /deep/ .button {\n  background-color: #999999;\n  color: black;\n  height: 32px;\n  display: inline-block;\n  line-height: 32px;\n  text-transform: uppercase;\n}\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/p/p.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PComponent = PComponent_1 = (function (_super) {
    __extends(PComponent, _super);
    function PComponent(element, global) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.global = global;
        _this.fatLine = false;
        _this.noLine = false;
        _this.short = false;
        _this.yellow = false;
        _this.middle = false;
        _this.extra = false;
        _this.final = false;
        _this.magenta = false;
        _this.blue = false;
        _this.question = false;
        _this.answer = false;
        return _this;
        // console.log('element:', element);
    }
    PComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return PComponent;
}(__WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('fatLine'),
    __metadata("design:type", Object)
], PComponent.prototype, "fatLine", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('noLine'),
    __metadata("design:type", Object)
], PComponent.prototype, "noLine", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('short'),
    __metadata("design:type", Object)
], PComponent.prototype, "short", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('yellow'),
    __metadata("design:type", Object)
], PComponent.prototype, "yellow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('middle'),
    __metadata("design:type", Object)
], PComponent.prototype, "middle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('extra'),
    __metadata("design:type", Object)
], PComponent.prototype, "extra", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('final'),
    __metadata("design:type", Object)
], PComponent.prototype, "final", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('magenta'),
    __metadata("design:type", Object)
], PComponent.prototype, "magenta", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('blue'),
    __metadata("design:type", Object)
], PComponent.prototype, "blue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('question'),
    __metadata("design:type", Object)
], PComponent.prototype, "question", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('answer'),
    __metadata("design:type", Object)
], PComponent.prototype, "answer", void 0);
PComponent = PComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-p',
        template: __webpack_require__("../../../../../src/app/p/p.component.html"),
        styles: [__webpack_require__("../../../../../src/app/p/p.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_0" /* forwardRef */])(function () { return PComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */]) === "function" && _b || Object])
], PComponent);

var PComponent_1, _a, _b;
//# sourceMappingURL=p.component.js.map

/***/ }),

/***/ "../../../../../src/app/page.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageDirective = (function () {
    function PageDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return PageDirective;
}());
PageDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[appPageHost]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewContainerRef */]) === "function" && _a || Object])
], PageDirective);

var _a;
//# sourceMappingURL=page.directive.js.map

/***/ }),

/***/ "../../../../../src/app/page0/page0.component.html":
/***/ (function(module, exports) {

module.exports = "<app-incision-tor (onShrink)=\"this.scrollToElement($event)\">\n\n</app-incision-tor>\n\n<div class=\"page\">\n    <app-menu [page]=\"0\" #menu>\n    </app-menu>\n</div>\n\n\n\n<div class=\"page\">\n    <app-title [light]=\"true\" [num]=\"'01'\" [glytch]=\"true\" [title]=\"'Как Tor приглянулся преступникам'\">\n\n    </app-title>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">В&nbsp;конце 1990-х годов сотрудники исследовательской лаборатории Военно-морского министерства США корпели над технологией\n            шифрования Onion Routing project (ORP) и&nbsp;вряд&nbsp;ли могли представить, что спустя 20&nbsp;лет станут невольными\n            пособниками наркоторговцев и&nbsp;продавцов оружия.</p>\n        <p class=\"margined yellow-select\">Напротив, ученые хотели сделать мир безопаснее, а&nbsp;работавший с&nbsp;ними программист министерства обороны Роджер\n            Динглдайн и&nbsp;вовсе мечтал защитить людей от&nbsp;всевидящего ока властей. Именно он&nbsp;убедил военных опубликовать\n            в&nbsp;сети исходный код программы, привлек к&nbsp;ней внимание интернет-сообщества и&nbsp;возглавил разработку\n            анонимной сети <span>Tor.</span></p>\n    </app-p>\n\n    <app-p [middle]=\"true\">\n        <img class=\"inner-image\" src=\"./assets/images/title_0_0.gif\" />\n    </app-p>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Когда она наконец заработала, Динглдайн основал организацию The Tor Project и&nbsp;пообещал защищать права и&nbsp;свободы\n            людей с&nbsp;помощью технологий.</p>\n        <p class=\"margined yellow-select\">Первыми Tor облюбовали единомышленники ученого, увлекавшиеся философией <span>шифропанка.</span> Они выступали за&nbsp;всеобщую\n            приватность данных, а&nbsp;видные представители движения приложили руку к&nbsp;созданию торрент-клиента BitTorrent,\n            проекта WikiLeaks и&nbsp;криптовалюты <span>Bitcoin.</span></p>\n    </app-p>\n    <app-link-block [links]='[{title:\"Tor Project Mission Statement\", link:\"https://twitter.com/torproject/status/635856569201246208\"},{title:\"Биткоины\", link:\"https://lenta.ru/articles/2015/12/11/bitcoin/\"}, {title:\"Криптовалюта\", link:\"https://lenta.ru/articles/2016/07/23/cryptopolitics/\"}]'>\n\n\n    </app-link-block>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Как только <span>биткоины</span> стали полноценным платежным средством, особо предприимчивые обитатели анонимной\n            сети тут&nbsp;же решили продавать в&nbsp;ней оружие и&nbsp;<span>наркотики.</span></p>\n\n        <p class=\"margined yellow-select\">Одна из&nbsp;первых таких площадок под названием <span>Silk Road</span> появилась в&nbsp;2011&nbsp;году. Ее&nbsp;создатель,\n            американец Росс Уильям Ульбрихт, называл себя либертарианцем и&nbsp;сторонником свободной экономики, что не&nbsp;мешало\n            ему брать комиссию с&nbsp;каждой покупки психоактивных веществ или оружия. Когда ФБР выследило и&nbsp;арестовало\n            Ульбрихта, ежемесячный оборот Silk Road превышал <span>1,5 миллиона долларов.</span></p>\n    </app-p>\n\n</div>\n\n<app-incision-silkroad (onShrink)=\"this.scrollToElement($event)\">\n\n</app-incision-silkroad>\n\n\n<div class=\"page\">\n    <app-title [light]=\"true\" [num]=\"'02'\" [glytch]=\"true\" [title]=\"'Как осваивали Tor в&nbsp;России'\">\n    </app-title>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\"> Многолетний работник телеком-отрасли вспоминает, что в&nbsp;России Tor быстро приметили любители технологий и&nbsp;сторонники\n            приватности, считавшие себя <span>&laquo;русскими шифропанками&raquo;.</span></p>\n    </app-p>\n\n    <app-p [middle]=\"true\">\n        <img class=\"inner-image\" src=\"./assets/images/title_0_1.gif\" />\n    </app-p>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Это была весьма разношерстная публика: от&nbsp;сотрудников НИИ и&nbsp;чиновников Министерства связи до&nbsp;молодых\n            офицеров спецслужб и&nbsp;студентов технических вузов. Именно они рассказывали американцам о&nbsp;путче 1991\n            года в&nbsp;файлообменной системе Usenet, делали домен.ru, проводили в&nbsp;России интернет и&nbsp;запускали\n            сотовую связь. </p>\n\n    </app-p>\n\n    <app-link-block [links]='[{title:\"Шифропанки\", link:\"http://www.cypherpunks.ru/\"}, {title:\"Путч в юзнете\", link:\"https://www.opendemocracy.net/od-russia/natalia-konradova/putch-usenet\"}]'>\n\n    </app-link-block>\n\n\n    <app-p [middle]=\"true\">\n\n        <p class=\"margined yellow-select\">Они&nbsp;же ездили на&nbsp;многочисленные отраслевые <span>конференции</span> и&nbsp;общались с&nbsp;западными коллегами&nbsp;&mdash;\n            учеными из&nbsp;Европейского центра ядерных исследований (CERN), бывшими сотрудниками DARPA и&nbsp;работниками\n            ведущих интернет-компаний.</p>\n\n        <p class=\"margined yellow-select\">Неудивительно, что они&nbsp;же первыми тестировали новые <span>технологии,</span> получая их&nbsp;напрямую от&nbsp;заграничных\n            друзей. Собеседник &laquo;Ленты.ру&raquo; рассказывает, что впервые опробовал Tor еще в&nbsp;2007&nbsp;году,\n            а&nbsp;уже через пару лет русские шифропанки создали в&nbsp;&laquo;темном&raquo; интернете целую россыпь анонимных\n            форумов и&nbsp;<span>имиджборд.</span> </p>\n\n        <p class=\"margined yellow-select\">Попасть на&nbsp;них можно было только по&nbsp;приглашению одного из&nbsp;форумчан, а&nbsp;запретных тем практически\n            не&nbsp;существовало&nbsp;&mdash; обсуждение исходного кода очередной хакерской программы нередко соседствовало\n            с&nbsp;бурной дискуссией про евреев-фальшивомонетчиков или съемки межрасового порно.</p>\n    </app-p>\n</div>\n\n\n<app-incision-freenet (onShrink)=\"this.scrollToElement($event)\"></app-incision-freenet>\n\n\n<div class=\"page\">\n    <app-title [light]=\"true\" [num]=\"'03'\" [glytch]=\"true\" [title]=\"'Как в&nbsp;русском Tor появились наркотики'\">\n    </app-title>\n\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\"> Собеседник &laquo;Ленты.ру&raquo; считает, что одним из&nbsp;обитателей имиджборд в&nbsp;Tor был Zed&nbsp;&mdash;\n            основатель старейшего из&nbsp;ныне известных русскоязычных даркнет-форумов <span>Runion.</span> В&nbsp;марте\n            2012 года туда переместились многие обитатели &laquo;темного&raquo; интернета, забравшие с&nbsp;собой советы\n            о&nbsp;том, как скормить банкомату поддельные купюры или обезопасить себя от&nbsp;прослушки.</p>\n\n        <p class=\"margined yellow-select\"><span>Zed</span> хорошо поработал над интерфейсом Runion. Общение было разделено по&nbsp;темам (например, &laquo;защита\n            информации&raquo;, &laquo;психология&raquo; и&nbsp;&laquo;финансы&raquo;), а&nbsp;пользователи публиковали объемные\n            статьи и&nbsp;получали за&nbsp;них вознаграждение в&nbsp;биткоинах. Благодаря этому форум быстро превратился\n            в&nbsp;настоящую энциклопедию для хакеров и&nbsp;мошенников, а&nbsp;когда администрация ввела открытую регистрацию,\n            число посетителей увеличилось до&nbsp;нескольких тысяч в&nbsp;день.</p>\n    </app-p>\n\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Как и&nbsp;в&nbsp;случае с&nbsp;Silk Road, одной из&nbsp;самых популярных тем быстро стали <span>наркотики</span>.\n            В&nbsp;Tor не&nbsp;принято было скрывать свое пристрастие к&nbsp;веществам, а&nbsp;Zed всячески поддерживал рассказы\n            об&nbsp;опыте их&nbsp;употребления. Со&nbsp;временем такие дискуссии переросли в&nbsp;негласные сделки через\n            зашифрованные письма, а&nbsp;следившие за&nbsp;успехами Silk Road форумчане задумались о&nbsp;создании полноценных\n            торговых площадок.\n        </p>\n\n        <p class=\"margined yellow-select\">Первая из&nbsp;них называлась <span>R2D2</span> и&nbsp;начала работу в&nbsp;мае 2012&nbsp;года. Сайт все еще был\n            нацелен на&nbsp;анонимное общение, но&nbsp;администраторы создали специальный раздел для торговли, позаимствовав\n            идею монетизации все у&nbsp;того&nbsp;же Silk Road: наркодилеры перечисляли им&nbsp;<span>процент</span> с&nbsp;каждой\n            покупки. При этом владельцы площадки изначально ориентировались на&nbsp;продвинутых юзеров, а&nbsp;потому попасть\n            на&nbsp;R2D2 можно было только по&nbsp;приглашениям.</p>\n\n\n    </app-p>\n\n    <app-p>\n        <app-loading-interface [title]=\"'loading infographics...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n        </app-loading-interface>\n    </app-p>\n\n\n</div>\n\n<div class=\"darkgrey\">\n    <div class=\"page\">\n        <app-infographics-marketplaces></app-infographics-marketplaces>\n    </div>\n</div>\n\n<div class=\"page\">\n\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">А&nbsp;в&nbsp;сентябре 2012 года запустилась Russian Anonymous Marketplace или <span>RAMP</span>. Ее&nbsp;создатель\n            и&nbsp;главный администратор Darkside ввел свободную регистрацию, но&nbsp;сразу дал понять, что собирается торговать\n            только наркотиками. На&nbsp;оружие, хакерский софт, поддельные документы и&nbsp;политические дискуссии был наложен\n            строжайший\n            <span>запрет</span>.\n        </p>\n\n        <p class=\"margined yellow-select\">В&nbsp;отличие от&nbsp;конкурентов <span>Darkside</span>, быстро прозванный Большим боссом или Махараджей, решил\n            не&nbsp;взимать комиссию с&nbsp;каждой сделки, а&nbsp;продавать для наркодилеров специальные <span>квоты</span>:\n            300 долларов за&nbsp;саму возможность торговать на&nbsp;площадке и&nbsp;400-800 долларов&nbsp;&mdash; за&nbsp;каждое\n            реализуемое вещество. Еще за&nbsp;300 долларов можно было выкупить место на&nbsp;главной странице, а&nbsp;за&nbsp;700\n            долларов&nbsp;&mdash; разместить рекламный баннер в&nbsp;шапке сайта.</p>\n\n        <p class=\"margined yellow-select\">Все общение на&nbsp;RAMP изначально строилось только через внутреннюю систему зашифрованных по&nbsp;<span>PGP</span>            личных сообщений или защищенный мессенджер <span>Jabber</span>, а&nbsp;наркотики приобретались за&nbsp;биткоины\n            или через платежную систему Qiwi. Все вещества распространялись с&nbsp;помощью <span>тайников-закладок</span>,\n            инструкции по&nbsp;поиску которых клиенты получали от&nbsp;продавцов.\n        </p>\n\n    </app-p>\n</div>\n\n\n\n<app-incision-protocols (onShrink)=\"this.scrollToElement($event)\"></app-incision-protocols>\n\n\n<div class=\"page\">\n\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Администрация с&nbsp;самого начала предельно жестко контролировала продавцов&nbsp;&mdash; перед началом работы они\n            публиковали <span>фотографии</span> оптовых партий наркотиков, а&nbsp;покупателей настойчиво призывали оставлять\n            <span>отзывы</span> о&nbsp;каждой сделке. Такая система позволяла выявлять так называемых кидал&nbsp;&mdash;\n            если пользователи массово жаловались на&nbsp;ненайденные закладки или неудовлетворительное качество веществ,\n            то&nbsp;магазин навсегда лишали возможности торговать на&nbsp;площадке.\n        </p>\n\n        <p class=\"margined yellow-select\">В&nbsp;2014 году <span>Darkside</span> дал первое и&nbsp;единственное в&nbsp;своей жизни интервью американскому изданию\n            Wired. Он&nbsp;рассказал, что за&nbsp;два года аудитория RAMP превысила <span>15&nbsp;тысяч человек,</span> и&nbsp;он&nbsp;ежегодно\n            зарабатывает до&nbsp;<span>250 тысяч долларов.</span></p>\n\n    </app-p>\n</div>\n\n\n<div class=\"page\">\n    <app-title [light]=\"true\" [num]=\"'04'\" [glytch]=\"true\" [title]=\"'Как RAMP боролся с&nbsp;конкурентами'\">\n    </app-title>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">В&nbsp;то&nbsp;время RAMP\n            <span>не&nbsp;был монополистом</span> на&nbsp;рынке продажи наркотиков в&nbsp;Tor. Помимо уже упомянутой R2D2,\n            купить запрещенные вещества можно было на&nbsp;площадках AmberRoad, Malina и&nbsp;RuTor. Неудивительно, что к&nbsp;концу\n            2014 года между ресурсами развернулась настоящая <span>война</span> за&nbsp;передел рынка.\n        </p>\n\n        <p class=\"margined yellow-select\">По&nbsp;слухам, причиной конфликта стало агрессивное поведение владельца R2D2&nbsp;&mdash; старожила русского Tor\n            с&nbsp;ником AntiDot. Скорее всего, он&nbsp;боялся, что конкуренты уведут у&nbsp;него всех клиентов, но&nbsp;истинные\n            причины остаются неизвестными. Старейший администратор RAMP с&nbsp;ником Orange утверждал, что решил наказать\n            AntiDot за&nbsp;дерзость и&nbsp;в&nbsp;середине 2015 года <span>уничтожил</span> его площадку с&nbsp;помощью\n            серии DDoS-атак.</p>\n\n    </app-p>\n\n    <app-p [middle]=\"true\">\n        <img class=\"inner-image\" src=\"./assets/images/title_0_3.gif\" />\n    </app-p>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">За&nbsp;AntiDot вступились администраторы AmberRoad и&nbsp;еще <span>нескольких ресурсов.</span> Они попытались привлечь\n            на&nbsp;свою сторону и&nbsp;Runion, но&nbsp;старейший форум российского даркнета в&nbsp;то&nbsp;время переживал\n            болезненную смену власти. По&nbsp;слухам, несмотря на&nbsp;внушительную аудиторию, площадка не&nbsp;приносила\n            прибыли, а&nbsp;у&nbsp;Zed заканчивались деньги на&nbsp;выплату гонораров за&nbsp;статьи. В&nbsp;итоге старожил\n            русского Tor продал проект соратникам, попытавшимся наладить на&nbsp;нем продажу оружия и&nbsp;наркотиков. Однако\n            на&nbsp;первых порах они решили сохранить <span>нейтралитет</span> и&nbsp;не&nbsp;ввязываться в&nbsp;противостояние.</p>\n        <p class=\"margined yellow-select\">Это предрешило <span>судьбу конкурентов</span> RAMP. &laquo;AmberRoad держался без клиентов два года, ничего не&nbsp;заработал\n            и&nbsp;ушел на&nbsp;дно, когда закончился хостинг&raquo;,&nbsp;&mdash; позже хвастался Orange. Справиться с&nbsp;Malina\n            ему, по&nbsp;слухам, помог один из&nbsp;новых администраторов Runion&nbsp;&mdash; хакер с&nbsp;ником SleepWalker.\n            Он&nbsp;якобы нашел у&nbsp;конкурентов уязвимости, <span>сдеанонил</span> (раскрыл личные данные) их&nbsp;администраторов\n            и&nbsp;передал информацию полиции.</p>\n\n    </app-p>\n    <app-p [yellow]=\"true\">\n        <p>\n            Entering chat...\n        </p>\n    </app-p>\n    <app-chat>\n\n        <div class=\"item\">\n            Конкурентами я&nbsp;могу назвать именно молодые наглые площадки. И&nbsp;с&nbsp;ними я&nbsp;расправляюсь беспощадно, поэтому\n            вы&nbsp;про них ничего и&nbsp;не&nbsp;слышали. Вообще, сегодня вливать большие бабки в&nbsp;драг-площадку станет\n            только самоубийца&nbsp;&mdash; рынок поделен и&nbsp;переделен. Все, кто вложился, пока что вряд&nbsp;ли даже\n            отбил свое. Впрочем, как только у&nbsp;кого-то получится сделать что-то достойное внимания, мы&nbsp;с&nbsp;радостью\n            выкупим его стартап за&nbsp;хорошую шестизначную сумму в&nbsp;долларах.\n        </div>\n        <div class=\"item\">Будет&nbsp;ли широкомасштабная война Legal RC&nbsp;против RAMP, покажет время. Я&nbsp;надеюсь, что она не&nbsp;нужна\n            ни&nbsp;им, ни&nbsp;нам. Но&nbsp;если что, мы&nbsp;похороним старичков, что поделать.</div>\n\n    </app-chat>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Orange описывает и&nbsp;еще один случай деанона&nbsp;&mdash; в&nbsp;2015 году Darkside якобы опубликовал в&nbsp;открытом\n            доступе имя и&nbsp;адрес владельца набиравшей популярность площадки &laquo;Подвал&raquo;. Причиной конфликта\n            вновь послужило &laquo;дерзкое поведение&raquo; жертвы.</p>\n\n        <p class=\"margined yellow-select\">Владелец RAMP жестоко наказывал и&nbsp;пытавшихся начать собственный бизнес наркодилеров. В&nbsp;2015 году один из&nbsp;крупнейших\n            продавцов площадки с&nbsp;ником BestSeller отказался платить Darkside и&nbsp;открыл свою площадку, но&nbsp;пал\n            жертвой спланированной <span>информационной кампании</span>&nbsp;&mdash; его массово обвинили в&nbsp;&laquo;сливе&raquo;\n            клиентов спецслужбам.\n        </p>\n\n        <p class=\"margined yellow-select\">Суровая борьба с&nbsp;<span>конкурентами</span> привела к&nbsp;тому, что к&nbsp;концу 2015 года единственными соперниками\n            RAMP остались форумы <span>Legal RC</span>&nbsp;и&nbsp;<span>Way Away,</span> специализирующиеся на&nbsp;торговле\n            синтетическими каннабиноидами и&nbsp;дизайнерскими стимуляторами. В&nbsp;народе эти две группы веществ получили\n            название &laquo;спайсы&raquo; (из-за надписи на&nbsp;упаковке), и&nbsp;&laquo;соли&raquo; (из-за продажи под\n            видом солей для ванн).</p>\n\n        <p class=\"margined yellow-select\">Правда, Orange отмечал, что у&nbsp;его проекта совершенно другая аудитория. Дело в&nbsp;том, что на&nbsp;RAMP запрещены\n            продажи спайсов, а&nbsp;покупатели в&nbsp;них якобы не&nbsp;заинтересованы.</p>\n\n    </app-p>\n    <app-p [yellow]=\"true\">\n        <p>\n            Entering chat...\n        </p>\n    </app-p>\n    <app-chat>\n\n        <div class=\"item\">\n            Я&nbsp;не&nbsp;имею ничего против против потребления спайсухи. Просто у&nbsp;каждого ресурса есть своя фишка и&nbsp;свой\n            имидж: на&nbsp;нашем вот нету спайсов, и&nbsp;все, кто устал от&nbsp;их&nbsp;засилья, пришли к&nbsp;нам. Это\n            был хороший ход с&nbsp;точки зрения маркетинга, и&nbsp;нам глупо от&nbsp;него отказываться в&nbsp;попытках ухватить\n            кусок пожирнее.\n        </div>\n        <div class=\"item\">Вот [Legal&nbsp;RC] разрешили у&nbsp;себя [традиционные виды наркотиков] и&nbsp;в&nbsp;итоге лишний раз выставили\n            себя клоунами&nbsp;&mdash; теперь там спайс и&nbsp;чуточку всего понемножку. Они от&nbsp;своего решения несут\n            только убытки, если баланс свести.</div>\n\n    </app-chat>\n\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n</div>\n\n<div class=\"page\">\n    <app-title [light]=\"true\" [num]=\"'05'\" [glytch]=\"true\" [title]=\"'Как RAMP развивал бизнес'\">\n    </app-title>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Параллельно с&nbsp;уничтожением конкурентов RAMP работал над <span>увеличением заработка.</span> В&nbsp;начале 2014\n            года администрация площадки внедрила так называемые &laquo;моментальные магазины&raquo;, или <span>автошопы.</span>            По&nbsp;сути, они автоматизировали процесс покупки разовых доз наркотиков&nbsp;&mdash; если раньше клиенты писали\n            напрямую продавцам, то&nbsp;теперь заходили на&nbsp;отдельную страницу и&nbsp;выбирали уже готовые закладки с&nbsp;нужной\n            дозой веществ в&nbsp;их&nbsp;городе.</p>\n        <p class=\"margined yellow-select\">Darkside и&nbsp;его помощники всячески поощряли магазины переходить именно на&nbsp;такую систему продаж, сделав автошопы\n            бесплатным бонусом к&nbsp;оплате квоты дилера. Это привело к&nbsp;тому, что за&nbsp;два года там сосредоточилась\n            практически вся торговля наиболее востребованными наркотическими веществами в&nbsp;&laquo;темном&raquo; интернете.\n        </p>\n\n    </app-p>\n\n    <app-p [middle]=\"true\">\n        <img class=\"inner-image\" src=\"./assets/images/title_0_4.gif\" />\n    </app-p>\n    <app-p [middle]=\"true\">\n\n        <p class=\"margined yellow-select\">Согласно собственным <span>подсчетам</span> &laquo;Ленты.ру&raquo;, ежедневно в&nbsp;моментальных магазинах представлено\n            2369 разовых доз марихуаны, 1884 дозы гашиша, 1189 доз экстази, 818 доз кокаина, 665 доз мефедрона, 614 доз амфетамина\n            и&nbsp;545 доз MDMA.</p>\n    </app-p>\n    <app-p>\n        <app-loading-interface [title]=\"'loading content...'\" (done)=\"this.incrimentNarrativeIndex()\">\n        </app-loading-interface>\n    </app-p>\n\n</div>\n<div class=\"darkgrey\">\n    <div class=\"page\">\n        <app-infographics-stuff></app-infographics-stuff>\n    </div>\n</div>\n\n<div class=\"page\">\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Это, в&nbsp;свою очередь, привело к&nbsp;стремительному росту аудитории площадки. В&nbsp;январе 2017 года на&nbsp;RAMP\n            насчитывалось уже <span>235 тысяч зарегистрированных пользователей,</span> а&nbsp;в&nbsp;мае&nbsp;&mdash; 295&nbsp;тысяч.</p>\n    </app-p>\n\n    <app-p [yellow]=\"true\">\n        <p>\n            Entering chat...\n        </p>\n    </app-p>\n    <app-chat>\n        <div class=\"item\">\n            По&nbsp;любым формальным критериям: число юзеров в&nbsp;день, количество покупок в&nbsp;час, количество дилеров, оборот денег\n            в&nbsp;день, оборот денег в&nbsp;месяц, количество городов, количество товаров, количество постов на&nbsp;форуме\n            в&nbsp;час, количество автошопов, среднее количество товаров у&nbsp;дилера, общая сумма депозитов кладменов,&nbsp;&mdash;\n            мы&nbsp;растем все это время и&nbsp;начали еще быстрее расти за&nbsp;последние два месяца.\n        </div>\n    </app-chat>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Более того, нелегальные магазины регулярно расширяют свою географию, что позволяет им&nbsp;привлекать новых клиентов,\n            а&nbsp;значит, увеличивать оборот и&nbsp;прибыль. По&nbsp;словам одного из&nbsp;администраторов RAMP, месячный\n            объем сделок в&nbsp;даркнете уже превышает <span>два миллиарда рублей,</span> а&nbsp;в&nbsp;2016 году сетевые\n            наркоторговцы закупили и&nbsp;продали товара на&nbsp;<span>24&nbsp;миллиарда рублей.</span></p>\n    </app-p>\n\n    <app-dot-line [wide]=\"true\">\n    </app-dot-line>\n</div>\n\n<div class=\"page\">\n    <app-title [light]=\"true\" [num]=\"'06'\" [glytch]=\"true\" [title]=\"'Почему RAMP избегает публичности'\">\n    </app-title>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Сегодня детище Darkside по&nbsp;сути является <span>монополистом</span> по&nbsp;торговле классическими психоактивными\n            веществами в&nbsp;российском Tor. При этом RAMP до&nbsp;сих пор привлекает потребителей исключительно с&nbsp;помощью\n            сарафанного радио и&nbsp;старается <span>избегать упоминаний</span> в&nbsp;прессе.</p>\n        <p class=\"margined yellow-select\">Весьма доходчиво объяснили это и&nbsp;корреспонденту &laquo;Ленты.ру&raquo;.\n        </p>\n\n    </app-p>\n\n\n\n\n    <app-p [yellow]=\"true\">\n        <p>\n            Entering chat...\n        </p>\n    </app-p>\n    <app-chat>\n        <div class=\"item\">Тебя не&nbsp;избивали до&nbsp;состояния желеобразной массы железными трубами, не&nbsp;сжигали кредитных тачек за&nbsp;половину\n            биткоина, не&nbsp;трогали семью и&nbsp;родителей. Мы&nbsp;не&nbsp;мафия, у&nbsp;нас все проще, тендерная основа.\n            Тут такой контингент, что если мне кто-то не&nbsp;нравится, он&nbsp;просто исчезает. Причем за&nbsp;куда меньшие\n            прегрешения вроде регулярного воровства кладов или попыток ******* (обмануть) дилера на&nbsp;бабки. Так что я&nbsp;искренне\n            надеюсь на&nbsp;вашу разумность и&nbsp;отсутствие желания прославиться в&nbsp;роли Анны Политковской\n\n\n        </div>\n        <div class=\"item\">\n            <a href=\"http://darknet.lenta.ru/assets/images/car.jpg\" target=\"_blank\">http://darknet.lenta.ru/assets/images/car.jpg<br/><br/>\n            <img class=\"inner-image\" src=\"./assets/images/car.jpg\" /></a>\n        </div>\n    </app-chat>\n\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Вместо этого Orange предложил за&nbsp;некую сумму (&laquo;умножил ее&nbsp;в&nbsp;голове на&nbsp;два, ведь это моя\n            любимая Ленточка&raquo;) написать разоблачительный материал про конкурентов.\n        </p>\n    </app-p>\n    <app-p [yellow]=\"true\">\n        <p>\n            Entering chat...\n        </p>\n    </app-p>\n    <app-chat>\n        <div class=\"item\">\n            Не&nbsp;пишите о&nbsp;нас ничего. Мы&nbsp;достаточно специфический бизнес и&nbsp;прекрасно существуем без всякой рекламы.\n            Более того, рекламировать наркотические вещества&nbsp;&mdash; крайне не&nbsp;этично. Если Вы&nbsp;решитесь на&nbsp;статью,\n            пожалуйста, укажите мнение администрации касательно этого вопроса.\n        </div>\n        <div class=\"item\">Я&nbsp;много лет последовательно отказываю в&nbsp;интервью всем русским журналистам. Мы&nbsp;понимаем Ваше стремление\n            сделать статью на&nbsp;горячую тему, Ваше общение выдает в&nbsp;вас профессионала, и&nbsp;мне всегда была симпатична\n            &laquo;Лента&raquo;, в&nbsp;отличие от&nbsp;ваших конкурентов из&nbsp;&laquo;Медузы&raquo;, которых я&nbsp;просто\n            шлю [*****].</div>\n        <div class=\"item\">Я&nbsp;могу помочь Вам с&nbsp;обзорной статьей про русский Tor в&nbsp;целом и&nbsp;даже дам Вам постфактум денег\n            при условии, что RAMP там не&nbsp;будет упомянут вовсе, а&nbsp;в&nbsp;качестве главных злодеев, которые круче\n            всех и&nbsp;держат львиную долю рынка, будут упомянуты мои злейшие конкуренты Legal RC.</div>\n        <div class=\"item\">Если статья понравится, заберете после публикации 100-200 тысяч рублей. Копейки, конечно, но&nbsp;больше это вроде\n            не&nbsp;стоит. Если&nbsp;же статья мне не&nbsp;понравится...</div>\n    </app-chat>\n\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">\n            Предложение RAMP наехать на&nbsp;конкурентов через СМИ легко объяснимо, ведь те&nbsp;первыми использовали медиапространство\n            для привлечения потенциальных покупателей. В&nbsp;июле 2016 года представитель Runion связался с&nbsp;несколькими\n            журналистами (в&nbsp;том числе корреспондентом &laquo;Ленты.ру&raquo;) и&nbsp;предложил опубликовать &laquo;уникальный\n            материал&raquo;, по&nbsp;сути представлявший собой завуалированную нативную рекламу магазинов по&nbsp;торговле\n            наркотиками и&nbsp;оружием. Через месяц статьи о&nbsp;Runion вышли в&nbsp;изданиях &laquo;Медуза&raquo; и&nbsp;&laquo;Бумага&raquo;.\n        </p>\n    </app-p>\n\n    <app-link-block [links]='[{title:\"Наркотическая многоходовочка\", link:\"https://lenta.ru/articles/2016/08/23/runionvsramp/\"}]'>\n\n    </app-link-block>\n\n\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">\n            В&nbsp;ноябре 2016 года в&nbsp;СМИ появилась информация о&nbsp;том, что сотни тысяч пользователей WhatsApp и&nbsp;Viber получили\n            <span>спам-сообщение</span> с&nbsp;рекламой еще одного потенциального конкурента RAMP&nbsp;&mdash; системы моментальных магазинов <span>Hydra.</span> В&nbsp;феврале 2017 года человек, назвавший себя представителем Hydra, написал корреспонденту &laquo;Ленты.ру&raquo; в&nbsp;Facebook и&nbsp;предложил подготовить рекламную статью о&nbsp;площадке за&nbsp;четыре тысячи долларов. Подтверждений его связи с&nbsp;Hydra получено не&nbsp;было.\n        </p>\n        <p class=\"margined yellow-select\">\n            С&nbsp;помощью таких материалов в&nbsp;СМИ конкуренты RAMP вполне ожидаемо пытаются привлечь на&nbsp;свои площадки тех, кто\n            слышал о&nbsp;даркнете, но&nbsp;пока не&nbsp;освоил Tor. Darkside&nbsp;же в&nbsp;этом не&nbsp;нуждается, ведь\n            благодаря сформированной годами репутации к&nbsp;нему и&nbsp;так будут приходить новые клиенты.\n        </p>\n        <p class=\"margined yellow-select\">\n            Это подтверждает и&nbsp;аудитория мессенджера Telegram. Анонимный канал &laquo;Найдено на&nbsp;рампе&raquo; со&nbsp;скриншотами\n            смешных отзывов с&nbsp;RAMP всего за&nbsp;семь месяцев набрал более 6400&nbsp;подписчиков. По&nbsp;одной из&nbsp;версий,\n            таким образом администраторы или продавцы площадки попытались прорекламировать свои услуги.\n        </p>\n        <p class=\"margined yellow-select\">\n            В&nbsp;закрытый <span>Telegram-чат Darknet,</span> где обсуждают последствия употребления различных наркотических\n            веществ, всего за&nbsp;месяц вступили 2300&nbsp;человек, и, судя по&nbsp;переписке, многие из&nbsp;них не&nbsp;достигли\n            совершеннолетия. Еще на&nbsp;один Telegram-канал со&nbsp;статьями о&nbsp;даркнете и&nbsp;наркотиках за&nbsp;два\n            месяца подписалось более <span>11,5 тысяч</span> человек.\n        </p>\n    </app-p>\n\n    <app-p [yellow]=\"true\">\n        <p>\n            Entering chat...\n        </p>\n    </app-p>\n    <app-chat>\n        <div class=\"item\">\n            Я&nbsp;могу сказать смело, что успех наших проектов&nbsp;&mdash; это закономерность. Откиньтесь на&nbsp;спинку стула и&nbsp;подождите,\n            пока мы&nbsp;завоевываем мир.\n        </div>\n    </app-chat>\n    <app-p [middle]=\"true\">\n        <p class=\"margined yellow-select\">Серьезный интерес к&nbsp;наркоторговле в&nbsp;&laquo;темном&raquo; интернете подтверждает и&nbsp;<span>опрос</span>            &laquo;Ленты.ру&raquo; в&nbsp;популярном Telegram-канале &laquo;Технологии, медиа и&nbsp;общество&raquo; с&nbsp;20&nbsp;тысячами\n            подписчиков. Из&nbsp;2400 респондентов <span>38&nbsp;процентов</span> либо знакомы с&nbsp;теми, кто <span>употребляет</span>            наркотики, либо делают это сами. А&nbsp;26&nbsp;процентов, или 546&nbsp;человек, знают про возможность купить\n            запрещенные вещества в&nbsp;Tor. И&nbsp;с&nbsp;высокой долей вероятности сделают это именно на&nbsp;RAMP.\n        </p>\n    </app-p>\n\n    <app-link-block [links]='[{title:\"Технологии, медиа и&nbsp;общество\", link:\"https://t.me/brodetsky\"}]'>\n\n    </app-link-block>\n\n    <app-p [final]=\"true\">\n        <p>CONNECTION CLOSED</p>\n    </app-p>\n    <app-p class=\"sharing\">\n        <app-sharing-block>\n        </app-sharing-block>\n    </app-p>\n\n</div>\n\n<app-dot-line [wide]=\"true\">\n</app-dot-line>\n<div class=\"page\">\n    <app-global-navigation>\n\n    </app-global-navigation>\n</div>\n<app-dot-line [wide]=\"true\">\n</app-dot-line>\n<div class=\"page\">\n    <app-p [middle]=\"true\">\n        <div class=\"button-wrapper\">\n            <div class=\"button\" (click)=\"this.loadNextButtonClick()\" [class.disabled]=\"this.narrativeIndex==0\">&gt;&gt;&nbsp;LOAD NEXT DIRECTORY</div>\n        </div>\n    </app-p>\n</div>\n<app-dot-line [wide]=\"true\">\n</app-dot-line>\n"

/***/ }),

/***/ "../../../../../src/app/page0/page0.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  margin: auto;\n  overflow: hidden;\n  display: block;\n  /*&.hide {\n        transform: scaleY(0);\n        position:absolute;\n    }*/\n}\napp-incision-tor {\n  display: block;\n  width: 100%;\n}\n.page {\n  width: 100%;\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-title {\n  color: white;\n}\n.inner-image {\n  max-width: 100%;\n}\napp-link-block {\n  padding-left: 68px;\n  display: block;\n  margin-top: 32px;\n  margin-bottom: 16px;\n}\n@media (max-width: 850px) {\n  app-link-block {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 767px) {\n  app-link-block {\n    padding-left: 0;\n    padding-right: 0;\n    max-width: 100%;\n  }\n}\n.darkgrey {\n  background-color: #707070;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\napp-chat {\n  display: block;\n  margin-bottom: 64px;\n  position: relative;\n  z-index: 5;\n}\n@media (max-width: 767px) {\n  app-chat {\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\n@media (max-width: 767px) {\n  app-infographics-stuff {\n    display: block;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\n@media (max-width: 767px) {\n  app-infographics-marketplaces {\n    display: block;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\napp-p.sharing {\n  margin-top: 40px;\n}\napp-global-navigation {\n  display: block;\n  margin: auto;\n  margin-left: 82px;\n}\n@media (max-width: 767px) {\n  app-global-navigation {\n    margin: 0;\n  }\n}\n.button-wrapper {\n  text-align: center;\n}\n.button {\n  height: 32px;\n  color: black;\n  background-color: #999999;\n  text-align: left;\n  min-width: 252px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 2px;\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  font-weight: 500;\n  transition: ease 0.3s background-color, 0.3s ease opacity;\n  pointer-events: none;\n}\n.button.disabled {\n  -webkit-animation: none;\n          animation: none;\n  opacity: 0.2;\n}\n.button:not(.disabled) {\n  -webkit-animation: button-blink 0.04s infinite linear alternate-reverse;\n          animation: button-blink 0.04s infinite linear alternate-reverse;\n  opacity: 1;\n  pointer-events: all;\n}\n.button:not(.disabled):hover {\n  background-color: #e5e5e5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page0/page0.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__title_title_component__ = __webpack_require__("../../../../../src/app/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paging_service_service__ = __webpack_require__("../../../../../src/app/paging-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_gsap__ = __webpack_require__("../../../../gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_gsap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page0Component; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import ScrollToPlugin from 'gsap/ScrollToPlugin';
var Page0Component = Page0Component_1 = (function (_super) {
    __extends(Page0Component, _super);
    function Page0Component(element, paging, track, appRef) {
        var _this = _super.call(this, element) || this;
        _this.paging = paging;
        _this.track = track;
        _this.appRef = appRef;
        return _this;
        // console.log('page element:', element);
    }
    Page0Component.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.paging.emitter.subscribe(function (data) {
            if (data.page === 0) {
                _this.scrollTo(data.section);
            }
        });
        this.activate();
    };
    Page0Component.prototype.scrollTo = function (num) {
        __WEBPACK_IMPORTED_MODULE_7_gsap__["TweenMax"].to(this, 2, { scroll: this.getOffsetTop(this.titles.toArray()[num].element.nativeElement) - 55, ease: __WEBPACK_IMPORTED_MODULE_7_gsap__["Sine"].easeOut });
    };
    Object.defineProperty(Page0Component.prototype, "scroll", {
        get: function () {
            return this.lastScroll;
        },
        set: function (newScroll) {
            window.scrollTo(0, newScroll);
            this.workWithScrollPosition(newScroll);
        },
        enumerable: true,
        configurable: true
    });
    Page0Component.prototype.enable = function () {
        _super.prototype.enable.call(this);
        // (this.element.nativeElement as HTMLElement).classList.remove('hide');
    };
    Page0Component.prototype.disable = function () {
        _super.prototype.disable.call(this);
        // (this.element.nativeElement as HTMLElement).classList.add('hide');
        /* TweenMax.to(this.element.nativeElement, 1, {
           height: 0, onComplete: () => {
             this.element.nativeElement.style.height = 'auto';
           }
         })*/
    };
    Page0Component.prototype.workWithScrollPosition = function (newY) {
        var _this = this;
        if (this.enabled) {
            if (this.menu.nativeElement.parentElement) {
                this.menu.nativeElement.style.transform = 'translateY(' +
                    Math.max(0, newY - this.getOffsetTop(this.menu.nativeElement) +
                        92) + 'px' + ')';
                _super.prototype.workWithScrollPosition.call(this, newY);
                var max_1 = -1;
                if (this.titles) {
                    this.titles.forEach(function (item, index) {
                        if (_this.getOffsetTop(item.element.nativeElement) - 60 <= newY) {
                            max_1 = index;
                        }
                    });
                }
                this.paging.pages[0] = max_1;
            }
        }
        /*const percent: number = Math.round((newY - this.getOffsetTop(this.element.nativeElement))
          / (this.element.nativeElement.clientHeight - window.innerHeight) * 100);
    
        if (percent >= 0 && percent <= 100) {
          this.track.track('page0-scroll-percent:', percent.toString());
        }*/
    };
    Page0Component.prototype.scrollToElement = function (element) {
        __WEBPACK_IMPORTED_MODULE_7_gsap__["TweenMax"].to(this, 0.4, { scroll: this.getOffsetTop(element.nativeElement) - 55, ease: __WEBPACK_IMPORTED_MODULE_7_gsap__["Sine"].easeOut });
    };
    Page0Component.prototype.loadNextButtonClick = function () {
        this.paging.current = 1;
    };
    return Page0Component;
}(__WEBPACK_IMPORTED_MODULE_4__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */]) === "function" && _a || Object)
], Page0Component.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_8" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__title_title_component__["a" /* TitleComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_core__["_9" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_core__["_9" /* QueryList */]) === "function" && _b || Object)
], Page0Component.prototype, "titles", void 0);
Page0Component = Page0Component_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_5" /* Component */])({
        selector: 'app-page0',
        template: __webpack_require__("../../../../../src/app/page0/page0.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page0/page0.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_0" /* forwardRef */])(function () { return Page0Component_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__paging_service_service__["a" /* PagingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__paging_service_service__["a" /* PagingServiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__tracking_service__["a" /* TrackingService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_core__["m" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_core__["m" /* ApplicationRef */]) === "function" && _f || Object])
], Page0Component);

var Page0Component_1, _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=page0.component.js.map

/***/ }),

/***/ "../../../../../src/app/page1/page1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'00'\" [glytch]=\"true\" [title]=\"'&laquo;Мы&nbsp;строили замки из&nbsp;стограммовых плиток гашиша&raquo;'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Наркоторговля&nbsp;&mdash; бизнес, проникающий во&nbsp;все сферы общества. Провизор аптеки, продающий шприцы и&nbsp;корвалол,\n      сотрудник банка, отмывающий преступные доходы, полицейский, заставляющий школьника вывернуть карманы,&nbsp;&mdash;\n      все они, осознанно или нет, лишь винтики в&nbsp;огромной системе нелегального бизнеса.</p>\n    <p class=\"margined magenta-select\">Времена, когда наркоманы умирали от&nbsp;передозировки героином, давно прошли, сегодня на&nbsp;его место пришли дизайнерские\n      наркотики, в&nbsp;народе известные как &laquo;соли&raquo; и&nbsp;&laquo;спайсы&raquo;. Никуда не&nbsp;делись и&nbsp;потребители\n      классических психоактивных веществ. Летом в&nbsp;парках чувствуется знакомый многим запах травы, а&nbsp;полицейские\n      досмотры на&nbsp;пути к&nbsp;популярным клубам с&nbsp;модным техно давно стали рутиной. Дальнобойщики используют амфетамин,\n      рискуя стать героями кровавых хитов на&nbsp;YouTube и&nbsp;забрать с&nbsp;собой десяток жизней.</p>\n    <p class=\"margined magenta-select\">Под влиянием прогресса меняются и&nbsp;схемы продажи наркотиков. Современные технологии обеспечивают преступникам анонимность\n      в&nbsp;сети и&nbsp;позволяют создавать глубоко законспирированные сообщества. Более того, виртуальные и&nbsp;прокси-серверы,\n      VPN, Tor и&nbsp;алгоритмы шифрования вытесняют наиболее слабые места любой преступной организации&nbsp;&mdash; основанные\n      на&nbsp;доверии договоренности и&nbsp;личные контакты.</p>\n\n\n    <p class=\"margined magenta-select\">Именно поэтому все контактировавшие с&nbsp;&laquo;Лентой.ру&raquo; источники&nbsp;&mdash; лишь ники и&nbsp;аватары в&nbsp;анонимной\n      сети Tor. На&nbsp;основе их&nbsp;рассказов и&nbsp;анализа открытых данных мы&nbsp;выяснили, как работает одна из&nbsp;старейших\n      в&nbsp;мире площадок даркнета&nbsp;&mdash; Russian Anonymous Marketplace или RAMP.</p>\n    <p class=\"margined magenta-select\">Здесь владельцы онлайн-супермаркетов делают миллионы на&nbsp;продаже наркотиков и&nbsp;ищут сотрудников на&nbsp;внутренней\n      бирже труда, школьники и&nbsp;студенты получают по&nbsp;150 тысяч рублей за&nbsp;распихивание закладок под лестницами\n      и&nbsp;оконными карнизами, а&nbsp;всесильная администрация искусно дирижирует сайтом с&nbsp;290 тысячами пользователей\n      и&nbsp;годовым оборотом в&nbsp;24&nbsp;миллиарда рублей.</p>\n    <p class=\"margined magenta-select\">Лента.ру выяснила, кто производит, хранит и&nbsp;фасует наркотики для жителей 110 городов России, Белоруссии и&nbsp;Украины,\n      сколько на&nbsp;этом зарабатывают продавцы и&nbsp;откуда администраторы получают 1,5 миллиарда рублей в&nbsp;год.*</p>\n  </app-p>\n\n\n\n\n  <app-dot-line></app-dot-line>\n</div>\n\n<div class=\"warning\" [class.show]=\"true\">\n  <div class=\"inner\">\n    Внимание! Производство, сбыт и&nbsp;пересылка наркотических средств и&nbsp;психотропных веществ является уголовным преступлением\n    и преследуется по&nbsp;закону (статьи 228-231 Уголовного кодекса Российской Федерации).\n  </div>\n</div>\n\n<div class=\"page\">\n  <app-menu [page]=\"1\" #menu [items]=\"[\n  'Закладки',\n  'Складмены',\n  'Поставщики',\n  'Работа магазинов',\n  'Вывод средств',\n  'Биржа труда',\n  'Гаранты и депозиты',\n  'Работа администрации'\n  ]\">\n  </app-menu>\n</div>\n<div class=\"page\">\n  <!--<app-dot-line></app-dot-line>-->\n  <app-title [light]=\"true\" [num]=\"'01'\" [glytch]=\"true\" [title]=\"'Как делают закладки'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">Двадцать лет назад словосочетание тайник-закладка было в&nbsp;ходу, пожалуй, лишь среди шпионов и&nbsp;чекистов, которые\n      этих шпионов ловили. Но&nbsp;сегодня, когда наркоторговля постепенно уходит в&nbsp;интернет и&nbsp;все больше исключает\n      физический контакт между продавцом и&nbsp;покупателем, вчерашние методы спецслужб приходят на&nbsp;помощь дилерам.</p>\n    <p class=\"margined magenta-select\">На&nbsp;Западе покупатели предпочитают получать товар по&nbsp;почте&nbsp;&mdash; отправления внутри границ США и&nbsp;стран&nbsp;&mdash;\n      участниц Евросоюза практически не&nbsp;проверяются. Для страховки наркотики тщательно маскируют внутри посылки, а&nbsp;если\n      покупателю все&nbsp;же не&nbsp;повезло, то&nbsp;на&nbsp;помощь приходит адвокат и&nbsp;презумпция невиновности.</p>\n  </app-p>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">В&nbsp;российских реалиях доставка почтой куда опаснее. Отправления из-за границы тщательно проверяются, а&nbsp;свои\n      посылки приходится запечатывать на&nbsp;глазах сотрудников почты. Понять, что товар &laquo;спалили&raquo;, можно только\n      при его получении. И&nbsp;первым сигналом наверняка станет берец сотрудника правоохранительных органов, переводящий\n      неудачливого покупателя в&nbsp;горизонтальное положение.</p>\n    <p class=\"margined magenta-select\">Если груз отправили из&nbsp;другой страны, то&nbsp;горе-контрабандист сталкивается со&nbsp;статьей 229.1. Уголовного\n      кодекса и&nbsp;сотрудниками ФСБ, а&nbsp;такие встречи, как правило, приводят к&nbsp;долгим тюремным срокам. Действовавшие\n      в&nbsp;одиночку получают до&nbsp;20&nbsp;лет, а&nbsp;успевшие подтянуть друзей могут провести за&nbsp;решеткой остаток\n      жизни.\n    </p>\n\n\n\n    <p class=\"margined magenta-select\">Именно поэтому в&nbsp;России наркотики прячут в&nbsp;укромных местах и&nbsp;передают покупателю инструкции по&nbsp;их&nbsp;поиску.\n      Такие тайники называют закладками, кладами, квестами или минами. <span>Кладмен</span>&nbsp;&mdash; тот, кто эти закладки\n      делает и&nbsp;получает оплату за&nbsp;те, что были найдены покупателем. Передача товара между продавцами и&nbsp;поставщиками,\n      а&nbsp;также продажа оптовых партий тоже проходит через закладки, а&nbsp;сложность тайника обычно прямо пропорциональна\n      цене товара.</p>\n\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_0.gif\" />\n  </app-p>\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Подготовка кладов начинается с&nbsp;упаковки. Обычно наркотики делят на&nbsp;&laquo;веса&raquo; (порции) и&nbsp;герметично\n      запечатывают. Сначала идет пакет-зиплок, затем небольшой пластиковый пакет. Для верхнего слоя используют изоленту,\n      иногда добавляя магнит. Получившаяся закладка по&nbsp;размеру меньше зажигалки Cricket, имеющей габариты 8&times;2х1&nbsp;сантиметр.</p>\n    <p class=\"margined magenta-select\">К&nbsp;каждому тайнику делают фотографии места и&nbsp;описание&nbsp;&mdash; где лежит клад и&nbsp;как его найти. Чем\n      точнее и&nbsp;понятнее описание, тем проще будет покупателю.</p>\n\n  </app-p>\n\n  <app-dot-line [wide]=\"true\">\n  </app-dot-line>\n\n  <app-p [magenta]=\"true\">\n    <p>\n      Entering chat...\n    </p>\n  </app-p>\n  <app-chat [magenta]=\"true\" [speaker]=\"'%username%'\">\n\n    <div class=\"item\">\n      В&nbsp;моем захолустном городке продавцов не&nbsp;так уж&nbsp;и&nbsp;много. Кладменов не&nbsp;сильно больше, некоторых из&nbsp;них\n      я&nbsp;знала в&nbsp;лицо, а&nbsp;заодно и&nbsp;номера их&nbsp;машин, домашний адрес и&nbsp;подружку (я&nbsp;наблюдательна,\n      а&nbsp;они тоже торчали влегкую). Одно время было две команды кладеров, работавших параллельно.\n\n    </div>\n    <div class=\"item\">Первая&nbsp;&mdash; из&nbsp;двух мальчиков: деловые, собранные, на&nbsp;стиле, хорошие машинки. Заклады качественные,\n      свежие, постоянно мелкие няшные бонусы. Ну, начиная от&nbsp;травки на&nbsp;утро, и&nbsp;заканчивая сердечками на&nbsp;паках\n      и&nbsp;рафаэлками в&nbsp;кладах. Милота, иначе и&nbsp;не&nbsp;скажешь.\n    </div>\n    <div class=\"item\">И&nbsp;была вторая команда: обдолбанные [раздолбаи], вечные ненаходы, они на&nbsp;диком палеве. Их&nbsp;только на&nbsp;моих\n      глазах несколько раз пытались принять менты. Не&nbsp;знаю, чем уж&nbsp;закончилось, но&nbsp;больше я&nbsp;их&nbsp;не&nbsp;видела.</div>\n\n\n  </app-chat>\n\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">\n      Место закладки ограничено лишь фантазией, а&nbsp;она, как известно, безгранична. Иногда товар прикапывают у&nbsp;заметного\n      ориентира, например, канализационного люка, забора или одинокого дерева. Куда чаще закладки закапывают в&nbsp;парках\n      и&nbsp;скверах. Если сверток с&nbsp;магнитом, то&nbsp;можно прикрепить его к&nbsp;водостоку, откосу подоконника, гаражу\n      или любой другой металлической поверхности, куда не&nbsp;полезут прохожие. Периодически в&nbsp;сети появляются фото\n      закладок в&nbsp;скворечниках.\n    </p>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_1.gif\" />\n  </app-p>\n\n\n\n  <app-p [magenta]=\"true\">\n    <p>\n      Entering chat...\n    </p>\n  </app-p>\n  <app-chat [magenta]=\"true\" [speaker]=\"'%username%'\">\n\n    <div class=\"item\">\n      Мне 24&nbsp;года, и&nbsp;два из&nbsp;них я&nbsp;работал кладменом на&nbsp;RAMP. Начинал с&nbsp;депозита в&nbsp;30&nbsp;тысяч,\n      но&nbsp;постепенно увеличил до&nbsp;150&nbsp;тысяч. Работал на&nbsp;три магазина, от&nbsp;первых двух ушел, потому\n      что они давали мало заказов на&nbsp;кокаин, а&nbsp;они самые дорогие&nbsp;&mdash; 800-900 рублей за&nbsp;клад.\n\n    </div>\n    <div class=\"item\">Третий работодатель был более щедр. У&nbsp;меня была машина, так что я&nbsp;вполне мог работать пять дней в&nbsp;неделю\n      и&nbsp;делать 20-25 кладок в&nbsp;день. Все в&nbsp;центре Москвы и&nbsp;на&nbsp;магнитах&nbsp;&mdash; под скамейками,\n      карнизами и&nbsp;водосточными трубами. &laquo;Минировал&raquo; ночью, но&nbsp;само место предварительно фотографировал\n      днем. Оператор магазина ценил, что я&nbsp;отправлял снимки и&nbsp;описание всего через пару минут после того, как закладывал.\n    </div>\n    <div class=\"item\">За&nbsp;граммовые клады в&nbsp;среднем получал 400&nbsp;рублей, за&nbsp;три грамма&mdash; 600&nbsp;рублей, а&nbsp;за&nbsp;пять&nbsp;&mdash;\n      700&nbsp;рублей. Конкретные суммы, конечно, зависят от&nbsp;вещества, но&nbsp;в&nbsp;месяц выходило не&nbsp;меньше\n      150-200&nbsp;тысяч.\n    </div>\n\n    <div class=\"item\">\n      Конечно, я&nbsp;понимал, что если меня со&nbsp;всем этим возьмут, то&nbsp;посадят лет на&nbsp;20. У&nbsp;меня&nbsp;же с&nbsp;собой\n      веса расфасованные, опера с&nbsp;ходу&nbsp;бы пришили покушение на&nbsp;сбыт. Так что соблюдал меры предосторожности:\n      в&nbsp;машине у&nbsp;меня был тайник, я&nbsp;никогда не&nbsp;парковался рядом с&nbsp;местом клада и&nbsp;всегда был\n      готов скинуть вес, если поблизости появятся сотрудники.\n\n    </div>\n\n    <div class=\"item\">\n      Но&nbsp;паранойя все равно была жуткая. А&nbsp;как иначе, я&nbsp;ежедневно ездил по&nbsp;городу с&nbsp;50&nbsp;граммами всяких\n      веществ. Поэтому и&nbsp;решил уйти: на&nbsp;нормальной работе пусть и&nbsp;платят куда меньше, зато нет этого жуткого\n      нервяка.\n    </div>\n\n  </app-chat>\n\n\n</div>\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'02'\" [glytch]=\"true\" [title]=\"'Где хранят оптовые партии'\">\n\n  </app-title>\n\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">Классические дилеры часто берут товар &laquo;на&nbsp;реализацию&raquo;. Это значит, что деньги за&nbsp;партию возвращаются\n      после продажи, а к&nbsp;ее&nbsp;изначальной стоимости капают проценты. Такие долги тянутся через нескольких посредников,\n      и&nbsp;каждый из&nbsp;них увеличивает риск утраты денег или товара. Но&nbsp;долги в&nbsp;преступном мире принято отдавать,\n      а&nbsp;личное знакомство позволяет использовать эффективные методы взыскания.</p>\n    <p class=\"margined magenta-select\">В&nbsp;даркнете каждый сотрудник интернет-магазина анонимен. Недобросовестный курьер может сбежать с&nbsp;партией, разбавить&nbsp;ее,\n      полностью заменить содержимое или банально работать кое-как. Чтобы свести подобные инциденты к&nbsp;минимуму, используют\n      залоги или депозиты.</p>\n    <p class=\"margined magenta-select\">Сотрудник вносит дилеру денежный депозит, равный стоимости товара, и&nbsp;только после этого получает на&nbsp;руки вещества.\n      Если он&nbsp;допускает прокол, его штрафуют, вычитая деньги из&nbsp;суммы залога. Залоги&nbsp;&mdash; неотъемлемая\n      часть работы онлайн-площадок, гарантирующая безубыточность каждой единицы товара.\n    </p>\n    <p class=\"margined magenta-select\">Но&nbsp;иногда честное слово можно подтвердить не&nbsp;только деньгами. В&nbsp;качестве залога принимают свежее фото\n      лица, паспорта и&nbsp;листа бумаги с&nbsp;посланием дилеру. Этот способ не&nbsp;используется в&nbsp;&laquo;темном&raquo;\n      интернете, но&nbsp;популярен на&nbsp;площадках в&nbsp;легальном сегменте сети, торгующих синтетическими спайсами и&nbsp;солями.\n      В&nbsp;открытом доступе можно легко найти сотни таких фотографий.\n    </p>\n  </app-p>\n\n</div>\n\n<div class=\"page\">\n  <app-p [magenta]=\"true\">\n    <p>\n      Entering chat...\n    </p>\n  </app-p>\n  <app-chat [magenta]=\"true\" [speaker]=\"'%username%'\">\n    <div class=\"item\">\n      Я&nbsp;работала кладером вместе со&nbsp;своим парнем. Когда клиентов стало больше, мы&nbsp;перестали справляться, а&nbsp;барыге\n      надоело постоянно делать для нас закладки. Мы&nbsp;нашли новых кладменов, а&nbsp;нас повысили)) Мы&nbsp;стали забирать\n      оптовые партии и&nbsp;по&nbsp;кускам отдавать их&nbsp;кладменам.\n    </div>\n    <div class=\"item\">Постепенно у&nbsp;нас дома начали скапливаться наркотики. Их&nbsp;было действительно много. Очень много. Дети строят\n      крепости из подушек и&nbsp;одеял, а&nbsp;мы&nbsp;строили замки из&nbsp;стограммовых плиток гашиша и&nbsp;полиэтиленовых\n      брикетов, набитых спрессованной марихуаной, кокаином или амфетамином))) Если&nbsp;бы прямо сейчас начались &laquo;маски-шоу&raquo;\n      [процесс задержания], то&nbsp;хлебать мне баланду лет пятнадцать((.\n    </div>\n    <div class=\"item\">Поэтому барыга и&nbsp;не&nbsp;хочет хранить товар у&nbsp;себя и&nbsp;постоянно делать закладки: вдруг примут)) Проще\n      платить нам, ну&nbsp;и&nbsp;за курьеров, которые поголовно [идиоты]. Кто [обманывает], кого попринимали менты, а&nbsp;нам\n      искать новых. Найти того, кто не&nbsp;долбит, почти нереально, а&nbsp;с&nbsp;нарками вечно проблемы.\n    </div>\n\n  </app-chat>\n\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_2.gif\" />\n  </app-p>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">\n      С&nbsp;ростом объемов бизнеса многие дилеры отказались от&nbsp;хранения, фасовки и&nbsp;передачи товара кладменам, отдав\n      работу на&nbsp;аутсорс так называемым <span>складменам.</span> Эта работа требует не&nbsp;только немалого опыта\n      и&nbsp;доверия от&nbsp;продавца, но&nbsp;и&nbsp;внушительного залога. Чаще всего складами становятся доверенные закладчики,\n      накопившие достаточно денег на&nbsp;депозите.\n    </p>\n  </app-p>\n  <app-p [magenta]=\"true\">\n    <p>\n      Entering chat...\n    </p>\n  </app-p>\n  <app-chat [magenta]=\"true\" [speaker]=\"'%username%'\">\n\n    <div class=\"item\">\n      Я&nbsp;освоил Tor в&nbsp;начале 2013 года и&nbsp;несколько лет работал кладменом на&nbsp;одного и&nbsp;того&nbsp;же дилера\n      с&nbsp;RAMP. Со&nbsp;временем втерся в доверие, увеличил залог до&nbsp;нескольких сотен тысяч рублей и&nbsp;получил\n      повышение. Теперь делаю всего по&nbsp;пять-семь крупных закладок в&nbsp;неделю.\n    </div>\n    <div class=\"item\">\n      Мы&nbsp;зовем их&nbsp;&laquo;мастер-клады&raquo;, потому что каждый весит несколько сотен граммов, и&nbsp;прятать их&nbsp;приходится\n      куда надежнее. Обычно пакую их&nbsp;в&nbsp;несколько вакуумных пакетов и&nbsp;использую термопресс, а&nbsp;затем прикапываю\n      их&nbsp;в&nbsp;лесах и&nbsp;парках на&nbsp;окраине города. Фотографирую место, составляю описание, ставлю GPS-метку\n      в&nbsp;мобильном приложении и&nbsp;отправляю все шефу.\n\n    </div>\n    <div class=\"item\">Мастер-клады подбирают кладмены, раскладывающие полученный товар в&nbsp;своих районах. Ребята на&nbsp;опыте сами развешивают\n      и пакуют закладки, новичкам лучше прятать уже готовые. </div>\n\n    <div class=\"item\">Иногда я&nbsp;делаю мастер-клады и&nbsp;для оптовых покупателей. Сначала они через личку на&nbsp;форуме или Jabber договариваются\n      о сделке с&nbsp;дилером и&nbsp;оформляют гарант, а&nbsp;затем мне идет указка, сколько и&nbsp;чего им&nbsp;отвесить.\n    </div>\n    <div class=\"item\">Но&nbsp;вообще мне платят 400 тысяч рублей лишь за&nbsp;то, что держу килограммы стаффа у&nbsp;себя в&nbsp;квартире.\n      Но&nbsp;это не&nbsp;опасно&nbsp;&mdash; все герметично запаковано и&nbsp;достается только когда нужно сделать очередной\n      мастер-клад. К&nbsp;тому&nbsp;же амфетамин и&nbsp;мефедрон вообще не&nbsp;пахнут, как и&nbsp;таблетки с&nbsp;психоделиками.\n      А&nbsp;марихуану и&nbsp;гашиш просто нужно правильно хранить. Так что если вы&nbsp;не&nbsp;собака-нюхач, то&nbsp;в&nbsp;жизни\n      не&nbsp;догадаетесь, чем я&nbsp;занимаюсь.\n    </div>\n    <div class=\"item\">Признаюсь, я&nbsp;крайне ценю своего работодателя за&nbsp;доверие. Да, все наше общение ограничивается описаниями кладов\n      и&nbsp;ссылками на&nbsp;фотографии с&nbsp;Imgur. Зато эта работа уже сделала меня рублевым миллионером. </div>\n  </app-chat>\n\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_3.gif\" />\n  </app-p>\n\n</div>\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'03'\" [glytch]=\"true\" [title]=\"'Откуда поставляют наркотики'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">В 2013-м купить наркотики на RAMP можно было в Москве, Петербурге и еще паре городов-миллионников. В 2017-м в разделе\n      «Продажа ПАВ» отсутствует лишь Северо-Кавказский федеральный округ. Дилеры стараются упрочить свое присутствие в регионах,\n      попутно осваивая Белоруссию и Украину.</p>\n    <p class=\"margined magenta-select\">Выход на&nbsp;новые рынки проходит в&nbsp;несколько этапов. Сначала на&nbsp;форуме создается отдельная тема с&nbsp;названием\n      вроде\n      <span>&laquo;есть&nbsp;ли спрос на&nbsp;гашиш в&nbsp;Белгороде&raquo;.</span>Отклики пользователей позволяют поставщикам\n      оценить потенциальный спрос на&nbsp;тот или иной вид товара. После этого продавцы связываются с&nbsp;местными производителями\n      и&nbsp;распространителями веществ, предлагая им&nbsp;сотрудничество на&nbsp;взаимовыгодных условиях.\n    </p>\n  </app-p>\n\n\n</div>\n\n<div class=\"darkgrey\">\n  <div class=\"page\">\n    <app-infographics-regions></app-infographics-regions>\n  </div>\n</div>\n\n<div class=\"page\">\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">В&nbsp;обмен на&nbsp;процент с&nbsp;продаж владельцы крупных магазинов готовы инвестировать в&nbsp;нелегальный бизнес,\n      поделиться обучающими материалами или посоветовать, где отмыть преступные доходы.\n    </p>\n    <p class=\"margined magenta-select\">Театр начинается с&nbsp;вешалки, а&nbsp;торговля наркотиками&nbsp;&mdash; с&nbsp;их&nbsp;производства. На&nbsp;форуме\n      ищут\n      <span>химиков</span> и&nbsp;знатоков по&nbsp;выращиванию марихуаны&nbsp;&mdash; так называемых <span>гроверов.</span>      Порой продавцы поддерживают начинающих наркопроизводителей, поставляя им&nbsp;подробные инструкции и&nbsp;оборудование,\n      а&nbsp;также оплачивая залог для администрации в&nbsp;счет будущих поставок.</p>\n  </app-p>\n\n</div>\n<app-incision-grower (onShrink)=\"this.scrollToElement($event)\">\n\n</app-incision-grower>\n<div class=\"page\">\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">Та&nbsp;же схема действует и&nbsp;в&nbsp;отношении <span>варщиков,</span> поставляющих на&nbsp;черный рынок амфетамин,\n      психоделики и&nbsp;таблетки экстази. Помимо стандартных консультаций, дилеры готовы добывать для них специфические\n      ингредиенты (прекурсоры), торговля которыми ограничена или запрещена на&nbsp;территории России.\n\n    </p>\n\n\n\n    <p class=\"margined magenta-select\">Некоторые пользователи специализируются исключительно на&nbsp;повышении квалификации производителей и&nbsp;обещают им&nbsp;&laquo;обучение\n      на&nbsp;уровне бакалавриата химфака МГУ&raquo;. Цены на&nbsp;такие услуги обговариваются индивидуально, но&nbsp;обычно\n      с&nbsp;клиентов берут по&nbsp;пять тысяч рублей за&nbsp;разовую консультацию и&nbsp;50&nbsp;тысяч рублей за&nbsp;цикл\n      инструкций и&nbsp;видеоуроков по&nbsp;производству амфетамина или мефедрона. Полноценное <span>обучение</span> обойдется\n      в&nbsp;несколько сотен тысяч рублей, более половины из&nbsp;них уйдет на&nbsp;авторские учебники и&nbsp;ролики.</p>\n\n\n\n    <p class=\"margined magenta-select\">Но&nbsp;ряд элитных магазинов не&nbsp;доверяют химикам-самоучкам и&nbsp;все еще заказывают наркотики из-за границы. В&nbsp;их&nbsp;репертуаре\n      не&nbsp;только традиционно импортный кокаин, но&nbsp;и&nbsp;прессованная сортовая марихуана, марокканский и&nbsp;непальский\n      гашиш, амстердамские экстази и&nbsp;MDMA, иногда проскальзывают почти не&nbsp;встречающиеся в&nbsp;России мескалин\n      и&nbsp;кодеиновые сиропы. В&nbsp;большинстве случаев их&nbsp;бизнес зависит от&nbsp;<span>посредников</span>, берущих\n      свой процент за&nbsp;поставки из-за рубежа.\n    </p>\n\n  </app-p>\n\n  <app-p [magenta]=\"true\">\n    <p>\n      Entering chat...\n    </p>\n  </app-p>\n  <app-chat [magenta]=\"true\" [speaker]=\"'%username%'\">\n    <div class=\"item\">Я&nbsp;вошел в&nbsp;дело около полутора лет назад. Друзья предложили, согласился, хотя особой нужды не&nbsp;было, я&nbsp;и&nbsp;без\n      этого неплохо зарабатывал. Связались с&nbsp;нужным человеком, он&nbsp;передал нам все инструкции и&nbsp;контакты&nbsp;&mdash;\n      иностранных поставщиков и&nbsp;российских покупателей.\n    </div>\n    <div class=\"item\">Вся коммуникация строилась через Jabber. Россияне составляли списки нужных веществ, мы&nbsp;перенаправляли их&nbsp;заграничным\n      коллегам. Когда те&nbsp;рапортовали, что все готово к&nbsp;отправке, мы&nbsp;нанимали дроповода, он&nbsp;через своих\n      людей принимал посылки, делал закладки и&nbsp;скидывал нам координаты. Мы&nbsp;их&nbsp;перезакладывали и&nbsp;отправляли\n      адреса российским дилерам, а&nbsp;разницу в цене забирали себе.</div>\n    <div class=\"item\">В&nbsp;Таиланде или Европе кило марихуаны стоит 150 тысяч рублей, а&nbsp;российский покупатель забирал его за&nbsp;200-250&nbsp;тысяч.\n      С экстази цена еще лучше: 100 таблеток за&nbsp;20&nbsp;тысяч рублей в&nbsp;России уходили уже минимум за&nbsp;35&nbsp;тысяч.\n      Ежемесячно мы&nbsp;имели на&nbsp;троих 15&nbsp;миллионов рублей. Из&nbsp;них 10&nbsp;шло на&nbsp;покупку новой партии,\n      еще миллион уходил владельцу контактов, столько же&nbsp;&mdash; на&nbsp;дроповода и&nbsp;обналичку средств.\n    </div>\n\n\n\n  </app-chat>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_5.gif\" />\n  </app-p>\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">Не&nbsp;менее важна и&nbsp;логистика. Этим занимаются <span>курьеры,</span> чья задача&nbsp;&mdash; перевезти товар из&nbsp;точки&nbsp;А\n      в&nbsp;точку Б.&nbsp;Транспортировка наркотиков&nbsp;&mdash; одно из&nbsp;самых рискованных занятий в&nbsp;даркнете.\n      Курьерам постоянно приходится придумывать новые способы обмана полицейских: они регулярно меняют машины, ловят попутки\n      или используют сервис BlaBlaCar. В&nbsp;часы пик многие передвигаются на&nbsp;пригородных электричках и&nbsp;пытаются\n      затеряться в&nbsp;толпе.\n    </p>\n  </app-p>\n\n\n\n  <app-p [magenta]=\"true\">\n    <p>\n      Entering chat...\n    </p>\n  </app-p>\n  <app-chat [magenta]=\"true\" [speaker]=\"'%username%'\">\n    <div class=\"item\">Я&nbsp;работал кладменом, но&nbsp;тут предложение поступило за&nbsp;раз поднять чуть меньше сотки тысяч рублей. У&nbsp;меня,\n      как у&nbsp;студента, конечно, слюни потекли от&nbsp;таких цифр. Я&nbsp;не&nbsp;думая согласился. Мы&nbsp;обсудили [с&nbsp;работодателем]\n      примерный план действий и&nbsp;приступили. Покупателю он&nbsp;обозначил срок в&nbsp;две недели, а&nbsp;выехал я&nbsp;на&nbsp;следующий\n      день после того, как забрал посылку. Всего с&nbsp;собой было три килограмма товара и&nbsp;нужно было положить три клада\n      по&nbsp;одному кило. Ехать было не&nbsp;стремно, транспорт не&nbsp;шмонали, ехал в&nbsp;целом не&nbsp;очень долго,\n      не&nbsp;на&nbsp;Камчатку послали. Стремно было, когда приехал&nbsp;&mdash; ощущение, что люди видят, что я&nbsp;не&nbsp;свой\n      (приезжий), ловил кучу взглядов, что немного высаживало, но&nbsp;отступать было поздно, буквально молился, чтобы не&nbsp;тормознули\n      менты по&nbsp;любому вопросу, я&nbsp;бы точно спалился. Тогда я&nbsp;еще не&nbsp;был сильно готов к&nbsp;таким моральным\n      нагрузкам. Но&nbsp;после добрался на&nbsp;автобусе до&nbsp;окрестностей города, там в&nbsp;деревне сделал клады и&nbsp;со&nbsp;спокойной\n      душой покинул город.\n    </div>\n\n\n  </app-chat>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">Никуда не&nbsp;делись и&nbsp;классические трюки контрабандистов&nbsp;&mdash; курьеры охотно используют тайники в&nbsp;автомобилях\n      и&nbsp;сумки с&nbsp;двойным дном. Более того, на&nbsp;RAMP существует специальный закрытый раздел, где можно найти\n      целые авторские учебники по&nbsp;нелегальному провозу веществ с&nbsp;подробными иллюстрациями и&nbsp;примерами из&nbsp;жизни\n      обитателей форумов.\n    </p>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_6.gif\" />\n  </app-p>\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">За&nbsp;100 граммов перевозимого товара обычно платят 10&nbsp;тысяч рублей, но&nbsp;у&nbsp;большинства дилеров минимальный\n      объем перевозок &mdash;300 грамм или полкило. Курьер вносит залог в&nbsp;несколько сотен тысяч, подбирает крупную закладку\n      и&nbsp;перевозит в&nbsp;другой город, где ее&nbsp;позже забирает складмен. Многим платят до&nbsp;100 тысяч рублей за&nbsp;рейс,\n      в&nbsp;месяц выходит до&nbsp;500 тысяч рублей. &copy;&nbsp;форум\n    </p>\n    <p class=\"margined magenta-select\">Многие работодатели в&nbsp;целях конспирации не&nbsp;раскрывают будущие маршруты. Зачастую начальной точкой является\n      крупный город в&nbsp;центральной части страны, например Москва или Петербург. Оттуда товар везут в&nbsp;регионы или\n      страны СНГ. Встречаются и&nbsp;запросы на&nbsp;перевозки и&nbsp;между областными центрами. Иногда ищут людей для контрабанды\n      наркотиков с&nbsp;территории Украины, как правило в&nbsp;Белоруссию.</p>\n    <p class=\"margined magenta-select\">Другой способ доставки оптовых партий&nbsp;&mdash; почтовые отправления. Риск уголовного преследования останавливает\n      лишь розничного покупателя, имеющего альтернативу в&nbsp;виде закладок. Для дилера риск&nbsp;&mdash; это всегда деньги,\n      которые платят дропам за&nbsp;отправку и&nbsp;прием посылок.</p>\n    <p class=\"margined magenta-select\"><span>Дроп</span>&nbsp;&mdash; подставное лицо, участвующее в&nbsp;преступных схемах с&nbsp;наибольшими рисками. Например,\n      в&nbsp;обналичке средств в&nbsp;банкоматах, получении посылок или регистрации юридических лиц. Еще пару лет назад дропы\n      считались &laquo;лохами, которых кинуть не&nbsp;жалко&raquo;. Но&nbsp;такая схема быстро показала свою неэффективность&nbsp;&mdash;\n      попавшийся дроп охотно помогал полиции поймать работодателя.</p>\n  </app-p>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">Поэтому продавцы в&nbsp;Tor стали искать анонимов, ради немалых денег готовых пойти на&nbsp;осознанный риск и&nbsp;регулярно\n      принимать нелегальные грузы. В&nbsp;ответ на&nbsp;форумах появились так называемые <span>дроповоды</span>&nbsp;&mdash;\n      своеобразные сутенеры для дропов, принимающие заказы на&nbsp;доставку наркотиков в&nbsp;Россию.\n    </p>\n    <p class=\"margined magenta-select\">В&nbsp;связке с&nbsp;дроповодами работают изготовители поддельных документов или <span>переклейщики.</span> Они могут\n      несколько раз менять паспортные данные в&nbsp;одном и&nbsp;том&nbsp;же документе, чтобы заказывать посылки на&nbsp;разные\n      имена. Продавцы оформляют на&nbsp;них доставку небольшой курьерской компанией, а&nbsp;складмены получают товар от&nbsp;дропов\n      закладками.\n    </p>\n  </app-p>\n\n\n\n</div>\n\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'04'\" [glytch]=\"true\" [title]=\"'Как работают магазины на RAMP'\">\n\n  </app-title>\n\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">После того как товар прошел через руки всех участников цепи и&nbsp;превратился в&nbsp;закладку, его нужно продать. Сделки\n      заключаются двумя способами: можно написать продавцу в&nbsp;личные сообщения или воспользоваться системой моментальных\n      магазинов.\n    </p>\n    <p class=\"margined magenta-select\">При личном контакте переписка шифруется, а&nbsp;список наркотиков можно посмотреть на&nbsp;форуме. Сделав выбор, покупатель\n      договаривается с&nbsp;продавцом и&nbsp;оплачивает заказ. На&nbsp;этом уровне используют только биткоины, а&nbsp;большинство\n      клиентов дилеры знают &laquo;в&nbsp;лицо&raquo;, а&nbsp;точнее, по&nbsp;подписи ключей шифрования.\n    </p>\n    <p class=\"margined magenta-select\">В&nbsp;ноябре 2014 года всем дилерам стала доступна разработанная администрацией система моментальных магазинов.</p>\n    <p class=\"margined magenta-select\">По&nbsp;сути они работают как автоматы по&nbsp;продаже газировки и&nbsp;шоколадных батончиков. Покупатель выбирает товар\n      на&nbsp;цифровой витрине магазина, после чего получает реквизиты для оплаты. Удостоверившись, что платеж проведен,\n      система выдает адрес покупки клиенту и&nbsp;предлагает оставить публичный отзыв.</p>\n    <p class=\"margined magenta-select\">Позиции на&nbsp;витрине каталогизированы. Товары разбиты на&nbsp;категории, существует фильтр по&nbsp;городам и&nbsp;названиям\n      магазинов. Товар перед покупкой придется &laquo;пощупать&raquo;, то&nbsp;есть выбрать нужный вес, перейдя на&nbsp;страницу\n      с&nbsp;его подробным описанием.</p>\n    <p class=\"margined magenta-select\">При выборе веса также можно посмотреть снимки товара и&nbsp;отзывы других покупателей. Существуют позиции с&nbsp;разными\n      видами и&nbsp;сортами товара, а&nbsp;в&nbsp;крупных городах можно выбрать район закладки.</p>\n  </app-p>\n\n\n\n  <app-chat [magenta]=\"true\" [speaker]=\"'%username%'\">\n    <div class=\"item\">Посмотрите описания амфетамина. Соль и&nbsp;изомер пишут всего два-три дилера в&nbsp;Москве (страшно смотреть регионы),\n      но&nbsp;при этом в&nbsp;моментальном магазине 39&nbsp;позиций амфетамина. То&nbsp;есть реально только два дилера из&nbsp;39&nbsp;знают,\n      чем они в&nbsp;действительности торгуют. Но&nbsp;дилерам это не&nbsp;важно. Важнее придумать своему товару дебильное\n      название: СУПЕРКРИСТАЛЛИУС АПЕЛЬСИНКА В РАЮ HQ. Как будто имбицилов допустили к&nbsp;прилавку.\n    </div>\n\n\n  </app-chat>\n\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_7.gif\" />\n  </app-p>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">\n      Иногда клиенты могут выбрать способ оплаты. Помимо биткоинов, можно воспользоваться одной из&nbsp;систем электронных кошельков.\n      В&nbsp;любом случае, робот обработает транзакцию и&nbsp;выдаст адрес товара.\n    </p>\n    <p class=\"margined magenta-select\">Но&nbsp;написав в&nbsp;личные сообщения или воспользовавшись автошопом, покупатель скорее всего взаимодействует лишь\n      с&nbsp;наемным работником. Сегодня дилер с&nbsp;RAMP&nbsp;&mdash; это уже не&nbsp;продавец, а&nbsp;организатор и&nbsp;главный\n      бенефициар работы магазина, ушедший от&nbsp;&laquo;барыги на&nbsp;районе&raquo; в&nbsp;сторону топ-менеджеров, которым\n      и&nbsp;продает свой товар.\n    </p>\n    <p class=\"margined magenta-select\">Для стабильной и&nbsp;качественной работы магазина нужно контролировать кладменов, складменов, курьеров и&nbsp;производителей,\n      попутно продавая товар по&nbsp;переписке и&nbsp;через &laquo;моменталку&raquo;, а&nbsp;также решая проблемы покупателей.</p>\n  </app-p>\n  <p class=\"margined magenta-select\">\n    схема\n  </p>\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">\n      Поэтому в&nbsp;крупных магазинах всю административную работу отдают на&nbsp;аутсорс, нанимая разного рода <span>администраторов,</span>      помощников и&nbsp;агентов поддержки. Если верить объявлениям рекрутеров на&nbsp;форуме, путь от&nbsp;кладмена до&nbsp;обладающего\n      статусом партнера администратора можно проделать за&nbsp;2,5&nbsp;года.\n    </p>\n\n  </app-p>\n\n\n\n\n</div>\n\n<app-incision-interview (onShrink)=\"this.scrollToElement($event)\"></app-incision-interview>\n\n<div class=\"page\">\n  <app-title [light]=\"true\" [num]=\"'05'\" [glytch]=\"true\" [title]=\"'Как отмывают деньги'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Но&nbsp;чтобы зарабатывать на&nbsp;наркоторговле в&nbsp;даркнете, совсем не&nbsp;обязательно торговать наркотиками. Обналичивание\n      средств, разработка дизайна и&nbsp;маркетинговой стратегии, поставки химического оборудования и&nbsp;специального софта,\n      советы и&nbsp;обучающие материалы от&nbsp;гуру&nbsp;&mdash; все это с&nbsp;успехом продается и&nbsp;покупается на&nbsp;RAMP.</p>\n    <p class=\"margined magenta-select\">Для отмывания денег существует отдельная ветка форума, где на&nbsp;выбор дилерам представлены сразу несколько способов\n      обмена биткоинов на&nbsp;рубли или доллары. Самый популярный&nbsp;&mdash; воспользоваться услугами одного из&nbsp;старейших\n      сервисов на&nbsp;RAMP под названием &laquo;Bitcoin-прачечная&raquo;.</p>\n    <p class=\"margined magenta-select\">Клиент переводит &laquo;прачкам&raquo; криптовалюту, а&nbsp;через сутки забирает закладку с&nbsp;наличными. Сервис работает\n      с&nbsp;суммами от&nbsp;200 тысяч рублей и&nbsp;взимает за&nbsp;свои услуги десятипроцентную комиссию. Если требуется\n      отмыть от&nbsp;300 тысяч до&nbsp;миллиона, комиссия уменьшается до&nbsp;восьми процентов, а&nbsp;начиная с&nbsp;миллиона&nbsp;&mdash;\n      до&nbsp;шести процентов. За&nbsp;дополнительную плату вывод средств любезно ускорят до&nbsp;одного-двух часов, а&nbsp;деньги\n      переведут на&nbsp;подставные пластиковые карты.</p>\n    <p class=\"margined magenta-select\">Но&nbsp;это можно сделать и&nbsp;самостоятельно: оформленные на&nbsp;фальшивые имена карточки крупного российского банка\n      стоят от&nbsp;20&nbsp;до&nbsp;30&nbsp;тысяч рублей и&nbsp;позволяют за&nbsp;раз снять до&nbsp;150&nbsp;тысяч. Именно\n      с&nbsp;их&nbsp;помощью многие участники преступного бизнеса обналичивают свои зарплаты, а&nbsp;на&nbsp;форуме есть\n      подробные советы о&nbsp;том, как замаскироваться для похода к&nbsp;банкомату.</p>\n\n  </app-p>\n\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_10.gif\" />\n  </app-p>\n\n\n\n  <app-incision-card (onShrink)=\"this.scrollToElement($event)\"></app-incision-card>\n\n\n\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">На&nbsp;RAMP работают и&nbsp;<span>студии дизайна,</span> готовые за&nbsp;150-200 тысяч рублей разработать концепцию\n      и&nbsp;узнаваемый бренд для онлайн-магазина, перевести его на&nbsp;виртуальный сервер и&nbsp;настроить работу софта.</p>\n    <p class=\"margined magenta-select\">Они&nbsp;же разрабатывают логотипы, печатают брендированные пакетики-зиплоки и&nbsp;проводят рекламные кампании на&nbsp;площадках\n      в даркнете или прямиком на&nbsp;улицах города, где рисуют граффити и&nbsp;расклеивают стикеры с&nbsp;QR-кодами.\n    </p>\n    <p class=\"margined magenta-select\">Наконец, на&nbsp;форуме встречаются и&nbsp;<span>компьютерные специалисты,</span> продающие платные инструкции и&nbsp;свой\n      авторский софт. По&nbsp;желанию клиента они устанавливают на&nbsp;флешку или ноутбук особую модификацию операционной\n      системы на&nbsp;базе Linux с&nbsp;полным шифрованием диска, возможностью дистанционного уничтожения данных и&nbsp;входом\n      по&nbsp;двум паролям. Они&nbsp;же настраивают особые виртуальные серверы со&nbsp;входом через два заграничных VPN-сервиса.</p>\n  </app-p>\n\n  <app-incision-abracadabra (onShrink)=\"this.scrollToElement($event)\">\n\n  </app-incision-abracadabra>\n\n\n\n</div>\n\n\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'06'\" [glytch]=\"true\" [title]=\"'Где нанимают сотрудников'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">За&nbsp;безликими никнеймами пользователей стоят живые люди, а&nbsp;для бесперебойной работы магазинов нужны&nbsp;те,\n      кто будет делать закладки, производить, перевозить и&nbsp;хранить наркотики. Не&nbsp;меньше бизнес нуждается в&nbsp;уже\n      упомянутых дизайнерах, программистах, маркетологах и&nbsp;сотрудниках службы поддержки, решающих проблемы клиентов.</p>\n    <p class=\"margined magenta-select\">Для&nbsp;поиска кандидатов существует раздел форума <span>&laquo;Работа&raquo;,</span> где собраны вакансии и&nbsp;резюме\n      соискателей. Рынок труда разбит на&nbsp;подразделы по&nbsp;территориальному признаку, а&nbsp;дилеры могут создать тему\n      с&nbsp;информацией о&nbsp;конкретной должности. Соискатели задают работодателю вопросы и&nbsp;отправляют резюме в&nbsp;комментариях\n      или личным сообщением.\n    </p>\n\n  </app-p>\n</div>\n<div class=\"darkgrey\">\n  <div class=\"page\">\n    <app-infographics-vacancy></app-infographics-vacancy>\n\n\n\n  </div>\n</div>\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Как и&nbsp;в&nbsp;любом кадровом агентстве, существует база резюме, для чего используют корень раздела. Спрос на&nbsp;рабочую\n      силу стабильно растет, а&nbsp;количество вакансий увеличивается.\n    </p>\n\n  </app-p>\n\n</div>\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'07'\" [glytch]=\"true\" [title]=\"'Как обеспечивается честность сделок'\">\n\n  </app-title>\n\n\n  <app-chat [magenta]=\"true\" [speaker]=\"'%username%'\">\n    <div class=\"item\">Прежде всего, мать его, не&nbsp;доверяй людям. Мир не&nbsp;состоит из&nbsp;добрых волшебников, которые сидят и&nbsp;ждут,\n      как тебе помочь. На&nbsp;самом деле, большинство населения&nbsp;&mdash; это больные ублюдки, которые только и&nbsp;думают\n      о&nbsp;том, как&nbsp;бы тебя где [обмануть]. Печально, но&nbsp;факт: становясь старше, ты&nbsp;в&nbsp;этом будешь убеждаться\n      все больше. А&nbsp;значит, делай выводы:<br/> Проводите все сделки через гарант-сервис. Вообще все. Не&nbsp;сдавайте\n      залоги напрямую дилерам.<br/> Прежде чем согласиться на&nbsp;что угодно, подумай о&nbsp;том, зачем это нужно тому,\n      кто предлагает.<br/>Если чего-то не&nbsp;знаешь, уточни у&nbsp;того, кто точно знает.\n      <br/>На&nbsp;все это у&nbsp;тебя ответа может не&nbsp;оказаться. Тогда спроси себя. Я&nbsp;не&nbsp;знаю, как работает\n      движок форума. Но&nbsp;я&nbsp;знаю, кто знает и&nbsp;кому не&nbsp;имеет смысла мне врать. Это админы. Их&nbsp;движок,\n      они сами могли&nbsp;бы сменить мне пароль на&nbsp;любой, если бы&nbsp;хотели. Пойду спрошу у&nbsp;админов!</div>\n  </app-chat>\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">На&nbsp;площадке принято платить вперед. А&nbsp;где платят вперед, там кидают. Помимо покупателей, под ударом нередко\n      оказываются и&nbsp;сотрудники магазинов, чьи депозиты хранят дилеры. Отсюда следует, что дилеров тоже необходимо контролировать.\n      Эту задачу и&nbsp;выполняет <span>администрация</span> площадки.</p>\n    <p class=\"margined magenta-select\">Первый способ контроля&nbsp;&mdash; это <span>квоты дилеров,</span> дающие право вести торговлю на&nbsp;ресурсе. Они\n      приобретаются у&nbsp;администрации и&nbsp;могут быть аннулированы за&nbsp;нарушение правил торговли. Квоты бывают трех\n      типов: базовая, продвинутая и&nbsp;на&nbsp;специальные товары.\n    </p>\n    <p class=\"margined magenta-select\">Стоимость базовой квоты&nbsp;&mdash; 300&nbsp;долларов. За&nbsp;эти деньги продавец получает тему в&nbsp;региональном\n      разделе форума и&nbsp;автоматизированный магазин. Продвинутая квота стоит 600 долларов и&nbsp;позволяет перенести магазин\n      из&nbsp;регионального раздела на&nbsp;главную страницу. Специальные квоты включают в&nbsp;себя стоимость продвинутой\n      и&nbsp;дают право торговать конкретным веществом в&nbsp;конкретном городе.</p>\n    <p class=\"margined magenta-select\">Помимо квот, дилеры вносят <span>депозиты,</span> которые хранятся администрацией площадки. Как правило, чем выше товарооборот\n      дилера, тем выше депозит. Самые надежные и&nbsp;ответственные дилеры внесли до&nbsp;20&nbsp;процентов ежемесячного\n      оборота и&nbsp;образовали категорию &laquo;Проверенные дилеры&raquo;.\n    </p>\n    <p class=\"margined magenta-select\">Третий элемент контроля&nbsp;&mdash; созданная администрацией <span>система гаранта.</span>\n    </p>\n    <p class=\"margined magenta-select\">Админы выступают посредниками в&nbsp;сделках, гарантируя их&nbsp;честность своей репутацией. Услуги гаранта добровольны,\n      но&nbsp;стоят 5&nbsp;процентов от&nbsp;суммы сделки, которые по&nbsp;договоренности оплачивает одна из&nbsp;сторон.\n    </p>\n  </app-p>\n\n</div>\n<div class=\"darkgrey\">\n  <div class=\"page\">\n    <app-infographics-garant></app-infographics-garant>\n\n\n  </div>\n</div>\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Администрация ресурса обладает монополией на&nbsp;предоставление услуг гаранта. Более того, недобросовестным продавцам\n      могут заблокировать вывод средств из&nbsp;автошопа, а&nbsp;сам магазин закрыть. Услуги гаранта доступны и&nbsp;для\n      депозитов сотрудников, выступая своеобразным &laquo;налогом на&nbsp;защиту труда&raquo;.</p>\n  </app-p>\n\n\n  <app-chat [magenta]=\"true\">\n    <div class=\"item\">По&nbsp;поводу практически всех сделок, был у&nbsp;нас случай, когда %dealername не&nbsp;поделил с&nbsp;кладменом свой\n      залог, и&nbsp;он&nbsp;отошел к&nbsp;админам. Там копейки были (130 или 150 баксов вроде), но&nbsp;все&nbsp;же было\n      такое. %dealername тяжелый человек, и&nbsp;кладмен там тоже был тяжелый человек, у&nbsp;них личное что-то было, и&nbsp;они\n      просто хотели друг другу западлянку сделать. Во&nbsp;всех таких случаях залог публично идет на&nbsp;благотворительность\n      разработчикам Tor, чтобы ни&nbsp;у&nbsp;кого не&nbsp;было сомнений в&nbsp;личных интересах гаранта по&nbsp;поводу этих\n      сумм. Я&nbsp;не&nbsp;люблю врать, если несколько подобных случаев за&nbsp;3&nbsp;года было, значит, я не&nbsp;могу\n      писать, что всегда все ровно. Но&nbsp;имею полное право писать, что практически всегда.\n\n    </div>\n\n  </app-chat>\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Для сделок в&nbsp;&laquo;моменталках&raquo; доступен гарант, работающий автоматически.</p>\n    <p class=\"margined magenta-select\">Магазины отвечают за&nbsp;товар в&nbsp;течение 12&nbsp;часов после заказа, так что если покупатель купил клад с&nbsp;гарантом\n      и&nbsp;не&nbsp;нашел его, то&nbsp;он&nbsp;открывает &laquo;диспут&raquo;&nbsp;&mdash; разбирательство с&nbsp;привлечением\n      админа.\n    </p>\n    <p class=\"margined magenta-select\">Он&nbsp;изучает представленные клиентом, кладменом и&nbsp;представителем магазина фотографии и&nbsp;аргументы, после\n      чего нередко назначает перезаклад&nbsp;&mdash; велит отправить клиенту другой адрес с&nbsp;тем&nbsp;же или даже большим\n      количеством веществ. Стоимость перезаклада вычитается из&nbsp;залога кладмена.</p>\n    <p class=\"margined magenta-select\">На&nbsp;30&nbsp;кладок стабильно случается 2-3&nbsp;ненахода: наркотики обнаруживают случайные люди, они теряются или\n      становятся добычей шкуроходов&nbsp;&mdash; искателей чужих закладок, знакомых с&nbsp;методами работы кладменов. &copy;&nbsp;Кладмен</p>\n    <p class=\"margined magenta-select\">Но&nbsp;моментальные магазины покрывают лишь розничный и&nbsp;мелкооптовый спрос. В&nbsp;сообщениях на&nbsp;форуме администратор\n      ресурса пишет, что основные клиенты гаранта торгуют оптом.</p>\n    <p class=\"margined magenta-select\">По&nbsp;словам одного из&nbsp;продавцов, оптовые сделки занимают около 60&nbsp;процентов его оборота, но&nbsp;эта доля\n      падает. Однако достоверно оценить долю оптовых сделок на&nbsp;площадке чрезвычайно сложно.</p>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page1/pic_1_11.gif\" />\n  </app-p>\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">Помимо квот, администрация контролирует и&nbsp;внутренний рынок рекламы. За&nbsp;100 долларов магазины в&nbsp;региональной\n      ветке форума &laquo;прикрепят&raquo; наверху. Топ 16&nbsp;позиций на&nbsp;главной странице стоят от&nbsp;5000 долларов\n      за&nbsp;первую до&nbsp;300 долларов за&nbsp;шестнадцатую.</p>\n    <p class=\"margined magenta-select\">Продавец также может разместить рекламный баннер сверху главной страницы. Всего есть место для 21&nbsp;баннера трех разных\n      размеров. Они обойдутся в&nbsp;2000, 1200 и&nbsp;600 долларов в&nbsp;месяц.\n    </p>\n  </app-p>\n\n\n\n\n\n</div>\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'08'\" [glytch]=\"true\" [title]=\"'Как работает администрация RAMP'\">\n  </app-title>\n\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Управлять ресурсом с&nbsp;почти 300 тысячами пользователей&nbsp;&mdash; задача не&nbsp;из&nbsp;легких. Особенно если\n      эти пользователи ежедневно покупают и&nbsp;продают наркотики более чем в&nbsp;100 городах России. Именно поэтому на&nbsp;RAMP\n      работает целая команда администраторов, распределившая между собой многочисленные обязанности и&nbsp;следящая за&nbsp;неукоснительным\n      выполнением правил форума.</p>\n    <p class=\"margined magenta-select\">Выйти с&nbsp;ними на&nbsp;связь можно через специальный раздел, где кратко описаны их&nbsp;основные задачи. Остальную\n      информацию пришлось собирать по&nbsp;крупицам в&nbsp;разных разделах форума, и&nbsp;никто не&nbsp;гарантирует, что\n      она соответствует действительности.</p>\n    <p class=\"margined magenta-select\">Основатель и&nbsp;главный администратор RAMP <span>Darkside,</span> он&nbsp;же Большой босс и&nbsp;Махараджа, отвечает\n      за&nbsp;наем и&nbsp;увольнение новых сотрудников, а&nbsp;также принимает ключевые решения по&nbsp;развитию площадки.\n      С&nbsp;легкой руки журналиста Wired Энди Гринберга его считают главным наркобароном русского даркнета. В&nbsp;последние\n      годы минимизировал свою активность на&nbsp;форуме и&nbsp;почти не&nbsp;оставляет новых записей. По&nbsp;слухам, ему\n      больше 30&nbsp;лет, он&nbsp;уже давно живет не&nbsp;в&nbsp;России и&nbsp;регулярно употребляет героин.</p>\n    <p class=\"margined magenta-select\">Негласной правой рукой Darkside до&nbsp;недавнего времени считался старейший администратор площадки, он&nbsp;же &laquo;почетный\n      пенсионер&raquo; <span>Orange,</span> отвечавший за&nbsp;решение всех оперативных вопросов. В&nbsp;отличие от&nbsp;своего\n      босса, он&nbsp;был весьма словоохотлив и&nbsp;регулярно участвовал в&nbsp;дискуссиях на&nbsp;форуме: обсуждал вопросы\n      анонимности и&nbsp;опасность &laquo;пакета Яровой&raquo;, рассказывал, что вместе с&nbsp;семьей уехал из&nbsp;России,\n      и&nbsp;делился личным опытом употребления наркотиков.</p>\n  </app-p>\n\n  <app-chat [magenta]=\"true\">\n    <div class=\"item\">Чем упарывается Darkside&nbsp;&mdash; ни&nbsp;для кого на&nbsp;форуме не&nbsp;секрет. Он&nbsp;предпочитает наркотики\n      опиоидной группы всем остальным. Но&nbsp;он&nbsp;гений, ему можно. Я&nbsp;на&nbsp;99&nbsp;процентов трезвенник, хотя\n      я&nbsp;очень глубоко в&nbsp;теме [употребления] марихуаны. Раньше увлекался опиоидной группой, но&nbsp;конченным никогда\n      не&nbsp;был. [Стимуляторы] и&nbsp;прочую ерунду всегда презирал, хотя пробовал все. Могу изредка позволить на&nbsp;праздник\n      что-нибудь из&nbsp;старого-любимого, но&nbsp;вы&nbsp;об&nbsp;этом никогда не&nbsp;узнаете. Происходит это очень редко,\n      и&nbsp;на&nbsp;форуме я&nbsp;в&nbsp;нужном состоянии не&nbsp;бываю.\n    </div>\n\n  </app-chat>\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">А&nbsp;еще хвастался тем, что именно благодаря ему RAMP победил всех конкурентов и&nbsp;стал лидером по&nbsp;продаже\n      психоактивных веществ в&nbsp;&laquo;темном&raquo; интернете. Более того, Orange намекал, что у&nbsp;него есть возможность\n      организовать масштабную DDoS-атаку или слить данные неугодных ему людей правоохранительным органам. Именно поэтому\n      администратор обладал непререкаемым авторитетом и&nbsp;считался своеобразным &laquo;отцом-основателем&raquo; RAMP.\n      Тем не&nbsp;менее в&nbsp;январе 2017 года он&nbsp;неожиданно объявил, что окончательно &laquo;уходит на&nbsp;пенсию&raquo;\n      и&nbsp;устремляется &laquo;вперед в&nbsp;белую жизнь&raquo;.</p>\n    <p class=\"margined magenta-select\">А&nbsp;вот его преемнику <span>Stereotype</span> пришлось разгребать целую кучу проблем. В&nbsp;феврале с&nbsp;площадки\n      ушли сразу несколько проверенных дилеров, а&nbsp;один из&nbsp;них два дня подряд отправлял покупателям в&nbsp;моментальных\n      магазинах несуществующие адреса закладок.</p>\n    <p class=\"margined magenta-select\">\n      Тогда&nbsp;же пользователи начали массово жаловаться на&nbsp;перебои в&nbsp;работе RAMP, по&nbsp;времени совпавшие с&nbsp;масштабной\n      атакой хакеров Anonymous на&nbsp;хостинг-провайдера Freedom Hosting&nbsp;II. Все это не&nbsp;прибавило авторитета новому\n      администратору, хотя он&nbsp;успешно разрешил большинство конфликтов и&nbsp;увеличил аудиторию до&nbsp;295 тысяч пользователей.\n    </p>\n  </app-p>\n\n  <app-link-block [links]='[{title:\"Месть за детское порно привела к исчезновению большинства сайтов в Tor\", link:\"https://lenta.ru/news/2017/03/09/darknet_gone/\"}]'>\n\n  </app-link-block>\n\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Более того, Stereotype удалось сохранить старую команду младших админов и&nbsp;технических специалистов. Их&nbsp;потеря\n      могла серьезно ударить по&nbsp;бизнесу RAMP, поскольку каждый из&nbsp;них отвечает за&nbsp;конкретный участок работы.</p>\n    <p class=\"margined magenta-select\">Например, <span>Orbit</span> занимается исключительно гарантами и&nbsp;депозитами. Он&nbsp;сопровождает все сделки, в&nbsp;том\n      числе на&nbsp;сумму свыше миллиона рублей, пополняет депозиты наемных работников и&nbsp;снимает средства с&nbsp;балансов\n      недобросовестных сотрудников.</p>\n    <p class=\"margined magenta-select\">Обслуживанием дилеров занимаются сразу два администратора. <span>Easytalker</span> принимает заявки на&nbsp;открытие\n      магазинов, выдает квоты, настраивает автошопы и&nbsp;оплату через электронные кошельки, а&nbsp;<span>Revolt</span>      собирает с&nbsp;торговцев ежемесячные платежи за&nbsp;уже предоставленные услуги и&nbsp;рекламные места, а&nbsp;также\n      может подключить новые опции.\n    </p>\n    <p class=\"margined magenta-select\">\n      <span>Cyclon</span> отвечает за техническую часть функционирования форума и автошопов, устраняет баги и решает проблемы\n      с зависшими платежами. Он же следит за разделом с предложениями по улучшению работы RAMP.\n    </p>\n    <p class=\"margined magenta-select\"><span>Pineapple</span> курирует жалобы пользователей и занимается проблемными дилерами. Именно он отвечает за блокировку\n      средств в моментальных магазинах, лишает торговцев статусов и награждает их титулом «кидала». Он же разрешает спорные\n      ситуации, с которыми не справились его подчиненные — модераторы <span>Lizard,</span> <span>Yungthug</span> и <span>Rocksteady.</span></p>\n    <p class=\"margined magenta-select\">Те, в&nbsp;свою очередь, следят за&nbsp;культурой общения на&nbsp;форуме, где не&nbsp;поощряются оскорбления и&nbsp;мат,\n      блокируют неадекватных пользователей&nbsp;и, что самое главное, разрешают диспуты по&nbsp;ненаходам, если пользователи\n      предварительно оформили гарант. Они&nbsp;же мониторят отзывы о&nbsp;качестве товара.</p>\n    <p class=\"margined magenta-select\">Не&nbsp;менее важную роль играет и&nbsp;созданная в&nbsp;2014 году служба безопасности RAMP. Возглавляющие ее&nbsp;<span>Exsistentia</span>      и&nbsp;<span>Usual</span> следят за&nbsp;честностью дилеров, не&nbsp;позволяя им&nbsp;торговать без квот или распространять\n      запрещенные на&nbsp;площадке спайсы и&nbsp;соли.\n    </p>\n    <p class=\"margined magenta-select\">Они&nbsp;же решают вопросы с&nbsp;крупными кидалами. По&nbsp;слухам, местная служба безопасности способна физически расправляться\n      с неугодными администрации персонами, и&nbsp;для этого у&nbsp;Exsistentia есть несколько бывших сотрудников силовых\n      структур.\n    </p>\n\n  </app-p>\n\n</div>\n<app-incision-roles (onShrink)=\"this.scrollToElement($event)\">\n\n</app-incision-roles>\n<div class=\"page\">\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Понять, сколько зарабатывает администрация, можно путем нехитрой арифметики. На&nbsp;главной странице форума представлены\n      153&nbsp;продавца, ежемесячно вносящие по&nbsp;600&nbsp;долларов. Первые 16&nbsp;позиций в&nbsp;списке продаются за&nbsp;отдельную\n      плату: от&nbsp;3000 долларов за&nbsp;первую до&nbsp;300 долларов за&nbsp;шестнадцатую. Таким образом, от&nbsp;магазинов\n      на&nbsp;главной странице администрация ежемесячно получает <span>118 тысяч долларов,</span> 91&nbsp;тысяча из&nbsp;которых&nbsp;&mdash;\n      плата за&nbsp;квоты, а&nbsp;26&nbsp;тысяч&nbsp;&mdash; продажа мест вверху списка.</p>\n    <p class=\"margined magenta-select\">Магазины стоимостью 300 долларов собраны в&nbsp;отдельном разделе. Всего их&nbsp;не&nbsp;менее 500, и&nbsp;они ежемесячно\n      приносят администрации еще 150 тысяч долларов. За&nbsp;отдельную плату в&nbsp;100 долларов эти магазины могут быть\n      &laquo;закреплены&raquo; наверху, чем пользуются 150&nbsp;продавцов, а&nbsp;администрация получает 15&nbsp;тысяч долларов.\n      Выручка от&nbsp;продажи расширенных квот составляет еще <span>155 тысяч долларов.</span></p>\n    <p class=\"margined magenta-select\">На&nbsp;главной странице также находится по&nbsp;семь баннеров большого, среднего и&nbsp;малого размеров, приносящие\n      дополнительные\n      <span>26&nbsp;тысяч долларов</span> в&nbsp;месяц. Несмотря на&nbsp;относительно высокую стоимость, все места, как правило,\n      выкуплены.\n    </p>\n    <p class=\"margined magenta-select\">Таким образом, ежемесячный доход администрации составляет более<span>465 тысяч долларов,</span> или <span>27&nbsp;миллионов 924 тысячи рублей,</span>      а&nbsp;в&nbsp;год площадка зарабатывает <span>5&nbsp;миллионов 584 тысячи долларов</span>, или <span>335 миллионов 88&nbsp;тысяч рублей.</span></p>\n    <p class=\"margined magenta-select\">Сами администраторы в&nbsp;беседе с&nbsp;&laquo;Лентой.ру&raquo; по-разному оценивали размер аудитории и&nbsp;финансовые\n      показатели площадки. Один из&nbsp;них отмечал, что RAMP занимает до&nbsp;пяти процентов российского рынка наркотиков,\n      увеличив долю с&nbsp;трех процентов в 2015-м.\n    </p>\n    <p class=\"margined magenta-select\">В&nbsp;2014 и&nbsp;2015 годах году бывший глава ФСКН Виктор Иванов оценивал общий объем рынка в&nbsp;1,5 триллиона рублей.\n      Если эти данные верны, то&nbsp;в&nbsp;2015-м оборот RAMP составил 45&nbsp;миллиардов рублей, а&nbsp;в&nbsp;2016 году&nbsp;&mdash;\n      75&nbsp;миллиардов рублей.</p>\n    <p class=\"margined magenta-select\">Однако, по&nbsp;словам другого администратора площадки, месячный объем сделок в&nbsp;российском даркнете составляет всего\n      2&nbsp;миллиарда рублей, а&nbsp;в&nbsp;2016 году дилеры закупили и&nbsp;продали наркотиков на&nbsp;<span>24&nbsp;миллиарда рублей.</span></p>\n    <p class=\"margined magenta-select\">Не&nbsp;стоит забывать, что администрация получает пять процентов от&nbsp;суммы каждой покупки в&nbsp;автошопах и&nbsp;любой\n      сделки, проведенной через гарант. Как отметил один из&nbsp;админов, большинство оптовых сделок проходят гладко, а&nbsp;без\n      товара чаще всего остаются не&nbsp;воспользовавшиеся гарантом в&nbsp;автошопе розничные покупатели.\n    </p>\n    <p class=\"margined magenta-select\">Если предположить, что транзакции через автошопы или с&nbsp;гарантом составляют половину всех сделок на&nbsp;площадке,\n      то&nbsp;при годовом обороте в&nbsp;24&nbsp;миллиарда рублей администрация в&nbsp;2016 году получила 1,2 миллиарда рублей\n      комиссионных, а&nbsp;суммарная выручка площадки составила <span>1,535 миллиарда рублей.</span> Если воспользоваться\n      оценкой Виктора Иванова, то&nbsp;комиссионные за&nbsp;2016 год равны 3,75 миллиарда рублей, а&nbsp;выручка&nbsp;&mdash;\n      4,085 миллиарда рублей.\n    </p>\n    <p class=\"margined magenta-select\">Очевидно, что часть этой суммы тратится на&nbsp;содержание площадки&nbsp;&mdash; аренду и&nbsp;поддержку серверов, скорее\n      всего, расположенных в&nbsp;законспирированном месте за&nbsp;пределами России, а&nbsp;также зарплаты администраторам.</p>\n    <p class=\"margined magenta-select\">Однако в&nbsp;распоряжении редакции нет данных о&nbsp;конкретных статьях расходов RAMP, а&nbsp;значит, и&nbsp;объем чистой\n      прибыли остается неизвестным. Один из&nbsp;продавцов утверждает, что, несмотря на&nbsp;немалые доходы, площадка практически\n      ничего не&nbsp;зарабатывает из-за трат на&nbsp;аренду и&nbsp;серверов, и&nbsp;доменов, а&nbsp;также выплату взяток.</p>\n\n  </app-p>\n</div>\n<div class=\"darkgrey\">\n  <div class=\"page\">\n    <app-infographics-scheme></app-infographics-scheme>\n\n  </div>\n</div>\n<div class=\"page\">\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined magenta-select\">Тем не&nbsp;менее миллиардные доходы и&nbsp;стабильно растущая аудитория гарантируют RAMP лидирующие позиции по&nbsp;продажам\n      наркотиков в&nbsp;даркнете, а&nbsp;отработанные механизмы привлечения продавцов и&nbsp;производителей позволят захватывать\n      все новые регионы России и&nbsp;стран СНГ.</p>\n    <p class=\"margined magenta-select\">И&nbsp;самое страшное, что это прекрасно понимают сами администраторы.</p>\n  </app-p>\n\n  <app-chat [magenta]=\"true\">\n    <div class=\"item\">\n      Мы&nbsp;лучшие, потому что у&nbsp;нас самые скилловые кодеры, самые усидчивые и&nbsp;башковитые младшие админы, самые неподкупные\n      модеры, самые четкие и&nbsp;профессиональные селлеры&nbsp;и, конечно&nbsp;же, в&nbsp;самую первую очередь, самые движняковые\n      юзеры. А&nbsp;мы&nbsp;всего лишь дирижеры оркестра талантливейших людей. Это честь для меня&nbsp;&mdash; работать в&nbsp;таком\n      проекте и&nbsp;с&nbsp;такими людьми.\n    </div>\n    <div class=\"item\">RAMP&nbsp;&mdash; это монополия, потому что лучшие из&nbsp;лучших в&nbsp;нашем деле договорились играть по&nbsp;одним\n      правилам и&nbsp;собрались вместе вместо конкуренции и&nbsp;войны. В&nbsp;конечном итоге так выгоднее всем.</div>\n\n  </app-chat>\n\n\n\n  <app-p [final]=\"true\">\n    <p>CONNECTION CLOSED</p>\n  </app-p>\n  <app-p class=\"sharing\">\n    <app-sharing-block [page]=\"1\">\n    </app-sharing-block>\n  </app-p>\n\n\n</div>\n\n<app-dot-line [wide]=\"true\">\n</app-dot-line>\n<div class=\"page\">\n  <app-global-navigation>\n\n  </app-global-navigation>\n</div>\n<app-dot-line [wide]=\"true\">\n</app-dot-line>\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <div class=\"button-wrapper\">\n      <div class=\"button\" (click)=\"this.loadNextButtonClick()\" [class.disabled]=\"this.narrativeIndex==0\">&gt;&gt;&nbsp;LOAD NEXT DIRECTORY</div>\n    </div>\n  </app-p>\n</div>\n<app-dot-line [wide]=\"true\">\n</app-dot-line>"

/***/ }),

/***/ "../../../../../src/app/page1/page1.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  margin: auto;\n  display: block;\n  /* &.hide {\n        transform: scaleY(0);\n        position: absolute;\n    }*/\n}\n.page {\n  width: 100%;\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-title {\n  color: white;\n}\n.inner-image {\n  max-width: 100%;\n}\napp-link-block {\n  padding-left: 68px;\n  display: block;\n  margin-top: 32px;\n  margin-bottom: 16px;\n}\n@media (max-width: 850px) {\n  app-link-block {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 767px) {\n  app-link-block {\n    padding-left: 0;\n    padding-right: 0;\n    max-width: 100%;\n  }\n}\n.darkgrey {\n  background-color: #707070;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\napp-chat {\n  display: block;\n  margin-bottom: 64px;\n  position: relative;\n  z-index: 5;\n}\n@media (max-width: 767px) {\n  app-chat {\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\napp-p.sharing {\n  margin-top: 40px;\n}\n.warning {\n  width: 100%;\n  background-color: #0032ff;\n  color: black;\n  text-transform: uppercase;\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  margin-bottom: 32px;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  transition: ease 0.3s transform;\n}\n.warning.show {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n.warning .inner {\n  width: 100%;\n  max-width: 992px;\n  margin: auto;\n  padding-top: 16px;\n  padding-bottom: 24px;\n  padding-left: 86px;\n}\n@media (max-width: 850px) {\n  .warning .inner {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .warning .inner {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\napp-global-navigation {\n  display: block;\n  margin: auto;\n  margin-left: 82px;\n}\n@media (max-width: 767px) {\n  app-global-navigation {\n    margin: 0;\n  }\n}\n@media (max-width: 767px) {\n  app-infographics-garant {\n    display: block;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page1/page1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__("../../../../gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paging_service_service__ = __webpack_require__("../../../../../src/app/paging-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__title_title_component__ = __webpack_require__("../../../../../src/app/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Component; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Page1Component = Page1Component_1 = (function (_super) {
    __extends(Page1Component, _super);
    function Page1Component(element, paging, track) {
        var _this = _super.call(this, element) || this;
        _this.paging = paging;
        _this.track = track;
        _this.activated = true;
        return _this;
    }
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.paging.emitter.subscribe(function (data) {
            if (data.page === 1) {
                _this.scrollTo(data.section + 1);
            }
        });
        this.activate();
    };
    Page1Component.prototype.enable = function () {
        _super.prototype.enable.call(this);
        /*  TweenMax.set(this.element.nativeElement, { height: 'auto' });
          TweenMax.from(this.element.nativeElement, 1, {
            height: 0, onComplete: () => {
              this.element.nativeElement.style.height = '';
            }
          })*/
        // (this.element.nativeElement as HTMLElement).classList.remove('hide');
    };
    Page1Component.prototype.disable = function () {
        _super.prototype.disable.call(this);
        /*TweenMax.to(this.element.nativeElement, 1, {
          height: 0, onComplete: () => {
            this.element.nativeElement.style.height = 'auto';
          }
        })*/
        // (this.element.nativeElement as HTMLElement).classList.add('hide');
    };
    Page1Component.prototype.scrollTo = function (num) {
        __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(this, 2, { scroll: this.getOffsetTop(this.titles.toArray()[num].element.nativeElement) - 55, ease: __WEBPACK_IMPORTED_MODULE_0_gsap__["Sine"].easeOut });
    };
    Object.defineProperty(Page1Component.prototype, "scroll", {
        get: function () {
            return this.lastScroll;
        },
        set: function (newScroll) {
            window.scrollTo(0, newScroll);
            this.workWithScrollPosition(newScroll);
        },
        enumerable: true,
        configurable: true
    });
    Page1Component.prototype.workWithScrollPosition = function (newY) {
        var _this = this;
        if (this.enabled) {
            //  console.log('scrollPosition:', newY);
            if (this.titles) {
                this.menu.nativeElement.style.transform = 'translateY(' +
                    Math.max(0, newY - this.getOffsetTop(this.menu.nativeElement) +
                        92) + 'px' + ')';
                _super.prototype.workWithScrollPosition.call(this, newY);
                //  console.log('VVVVVVVVVVVVVVVVVV');
                var max_1 = -1;
                this.titles.forEach(function (item, index) {
                    if (index > 0) {
                        if (_this.getOffsetTop(item.element.nativeElement) - 60 <= newY) {
                            max_1 = index - 1;
                        }
                    }
                    // console.log('-----------');
                });
                this.paging.pages[1] = max_1;
            }
            var percent = Math.round((newY - this.getOffsetTop(this.element.nativeElement))
                / (this.element.nativeElement.clientHeight - window.innerHeight) * 100);
            //   console.log('page1 percent:', percent);
            if (percent >= 0 && percent <= 100) {
                this.track.track('page1-scroll-percent:', percent.toString());
            }
        }
        // console.log('=============');
    };
    Page1Component.prototype.scrollToElement = function (element) {
        __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(this, 0.4, { scroll: this.getOffsetTop(element.nativeElement) - 55, ease: __WEBPACK_IMPORTED_MODULE_0_gsap__["Sine"].easeOut });
    };
    Page1Component.prototype.loadNextButtonClick = function () {
        this.paging.current = 2;
    };
    return Page1Component;
}(__WEBPACK_IMPORTED_MODULE_1__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _a || Object)
], Page1Component.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_8" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_5__title_title_component__["a" /* TitleComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_core__["_9" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_core__["_9" /* QueryList */]) === "function" && _b || Object)
], Page1Component.prototype, "titles", void 0);
Page1Component = Page1Component_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_5" /* Component */])({
        selector: 'app-page1',
        template: __webpack_require__("../../../../../src/app/page1/page1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page1/page1.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_6__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_0" /* forwardRef */])(function () { return Page1Component_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_core__["M" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__paging_service_service__["a" /* PagingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__paging_service_service__["a" /* PagingServiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__tracking_service__["a" /* TrackingService */]) === "function" && _e || Object])
], Page1Component);

var Page1Component_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=page1.component.js.map

/***/ }),

/***/ "../../../../../src/app/page2/page2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'00'\" [glytch]=\"true\" [title]=\"'Главные по&nbsp;закладочкам'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n\n    <p class=\"margined magenta-select\">Торговля наркотиками в&nbsp;России медленно, но&nbsp;верно уходит в&nbsp;&laquo;темный&raquo; интернет. Нелегальные площадки\n      в&nbsp;Tor уже доступны в&nbsp;более чем ста городах и&nbsp;зарабатывают миллиарды рублей, а&nbsp;правоохранительные\n      органы, похоже, не&nbsp;совсем понимают, как с&nbsp;ними бороться. Сотрудники ППС ловят на&nbsp;улицах лишь закладчиков\n      и&nbsp;покупателей, а&nbsp;пришедшие на&nbsp;смену ФСКН оперативники ГУНК не&nbsp;торопятся с&nbsp;арестами основных\n      бенефициаров нелегального бизнеса&nbsp;&mdash; владельцев магазинов и&nbsp;администраторов.</p>\n    <p class=\"margined magenta-select\">Многие экс-сотрудники силовых структур уверены&nbsp;&mdash; наркоторговлю в&nbsp;Tor можно было уничтожить еще в&nbsp;2012&nbsp;году.\n      Но&nbsp;в&nbsp;ФСКН были слишком заняты борьбой с&nbsp;крупными поставщиками, которая на&nbsp;деле превращалась в&nbsp;крышевание.\n      Преступники не&nbsp;только выплачивали оперативникам процент с&nbsp;продаж наркотиков, но&nbsp;и&nbsp;помогали улучшать\n      показатели раскрываемости преступлений.</p>\n    <p class=\"margined magenta-select\">&laquo;Лента.ру&raquo; выяснила, почему борьба с&nbsp;наркотиками в&nbsp;России трансформировалась во&nbsp;взаимовыгодный\n      бизнес для продавцов и&nbsp;силовиков, как оперативники ФСКН крышевали наркоторговцев и&nbsp;получится&nbsp;ли у&nbsp;МВД\n      исправить ошибки предшественников.</p>\n  </app-p>\n\n\n\n\n  <app-dot-line></app-dot-line>\n</div>\n\n\n\n<div class=\"page\">\n  <app-menu [page]=\"2\" #menu [items]=\"[\n  'Прогулка по&nbsp;району',\n  'Крыша от&nbsp;ФСКН',\n  'Невнимание к&nbsp;Tor',\n  'Переполох в&nbsp;ГУНК',\n  'Будущее наркоконтроля'\n  ]\">\n  </app-menu>\n</div>\n\n<div class=\"page\">\n  <!--<app-dot-line></app-dot-line>-->\n  <app-title [light]=\"true\" [num]=\"'01'\" [glytch]=\"true\" [title]=\"'Прогулка по району'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Мартовский ветер пробирает до&nbsp;костей, несмотря на&nbsp;предусмотрительно поддетый под пальто теплый свитер. Но&nbsp;замерзнуть\n      окончательно не&nbsp;успеваю&nbsp;&mdash; прямо передо мной филигранно прижимается к&nbsp;обочине ВАЗ-2114&nbsp;с синими\n      полосами и&nbsp;надписью <span>&laquo;Полиция&raquo;.</span> Из&nbsp;него стремительно выбирается необъятных размеров\n      сержант Михаил с&nbsp;лежащим на&nbsp;животе автоматом. Старшина Николай, напротив, покидает транспортное средство\n      медленно и&nbsp;с&nbsp;достоинством. Лелик и&nbsp;Болик, как их&nbsp;прозвали местные, любезно согласились провести\n      мне экскурсию по&nbsp;району.</p>\n  </app-p>\n\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Мы&nbsp;тут выросли, школу окончили. Потом в&nbsp;пэпсы вместе пошли. Только Колька вон, эта, подсуетился,\n      а&nbsp;я&nbsp;так, все с&nbsp;соплями [погонами сержанта] хожу,&nbsp;&mdash; громогласно смеется Михаил и&nbsp;озорно\n      поглядывает на&nbsp;молчаливого напарника.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Первая остановка&nbsp;&mdash; шаурма в&nbsp;магазине на&nbsp;углу. Патрульные бесплатно берут по&nbsp;донеру в&nbsp;сырном\n      лаваше, предлагают и&nbsp;мне. Не&nbsp;отказываюсь, соблазнившись &laquo;лучшей точкой на&nbsp;весь район&raquo;. Съедаем\n      прямо в&nbsp;машине под краткую лекцию Николая о&nbsp;том, как важно соблюдать режим питания. Особенно перед предстоящей\n      нам <span>&laquo;рыбалкой&raquo;.</span></p>\n  </app-p>\n\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Ты&nbsp;если&nbsp;чо, эта, в&nbsp;машине сиди,&nbsp;&mdash; инструктирует меня Михаил. И&nbsp;да, эта, не&nbsp;обессудь,\n      если мы&nbsp;кого-нибудь заграбастаем, до&nbsp;метро пешочком пойдешь. Сам понимаешь, в&nbsp;отдел тебя не&nbsp;повезем.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n<div class=\"page\">\n  <app-p>\n    <app-loading-interface [title]=\"'loading data...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n    </app-loading-interface>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page2/pic_2_1.gif\" />\n  </app-p>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Попутно узнаю, что &laquo;рыбалка&raquo; не&nbsp;имеет ничего общего с&nbsp;рыбой. Оказывается, так полицейские зовут\n      <span>объезд</span> мест, где делают <span>закладки</span> с&nbsp;наркотиками. Собственно, ради этого я&nbsp;и&nbsp;напросился\n      на&nbsp;экскурсию. Николай объясняет, что закладчики&nbsp;&mdash; существа хитрые, а&nbsp;потому почти никогда дважды\n      не&nbsp;оставляют наркотики в&nbsp;одном месте.</p>\n  </app-p>\n\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Но&nbsp;у&nbsp;нас на&nbsp;районе все иначе, вот увидишь&nbsp;&mdash; не&nbsp;без гордости продолжает&nbsp;он.\n      Дай только доедем до&nbsp;леса.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Пока экипаж кружит по&nbsp;району, а&nbsp;я&nbsp;невольно поеживаюсь от&nbsp;обещания <span>&laquo;доехать до&nbsp;леса&raquo;,</span>      Михаил рассказывает, как просто было жить до&nbsp;ухода наркоторговли в&nbsp;&laquo;темный&raquo; интернет.\n    </p>\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Эта, кто на&nbsp;райончике берет <span>стафф</span> [наркотические вещества] и&nbsp;раскидывает, мы&nbsp;всех\n      знаем, вместе&nbsp;же в&nbsp;школе учились. Мы&nbsp;им&nbsp;делали, эта, внушение. По-дружески говорили, чтоб на&nbsp;нашей\n      территории <span>не&nbsp;банчили</span> [продавали наркотики]. В&nbsp;других районах пожалуйста, а&nbsp;у&nbsp;нас,\n      эта, порядок должен быть. Кто не&nbsp;слушался&nbsp;&mdash; получал пару раз по&nbsp;коленкам да&nbsp;по&nbsp;почкам,\n      а&nbsp;особо упертые потом на&nbsp;зону поехали. А&nbsp;еще, эта, цветочные палатки трясли, там&nbsp;же всякие <span>спайсы</span>      толкают. Вот и&nbsp;следили, чтоб не&nbsp;травили никого,&nbsp;&mdash; вспоминает&nbsp;он.</p>\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Как наряд патрульно-постовой службы мы&nbsp;обязаны знать места наиболее вероятного совершения <span>преступлений</span>      и&nbsp;скопления антиобщественного элемента,&nbsp;&mdash; прерывает рассказ напарника Николай. Вот&nbsp;мы, собственно,\n      к&nbsp;такому месту скопления и&nbsp;приближаемся.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n<div class=\"page\">\n  <app-p>\n    <app-loading-interface [title]=\"'loading data...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n    </app-loading-interface>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page2/pic_2_2.gif\" />\n  </app-p>\n</div>\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Я&nbsp;гляжу в&nbsp;окно, но&nbsp;никакого &laquo;скопления антиобщественного элемента&raquo; не&nbsp;вижу. По&nbsp;левую\n      руку сплошным частоколом стоит лес, справа в&nbsp;отдалении виднеются многоэтажки. Машина замедляет ход, и&nbsp;Михаил\n      с&nbsp;Николаем начинают всматриваться в&nbsp;редких <span>прохожих,</span> попутно объясняя, в&nbsp;чем, собственно,\n      состоит процесс &laquo;рыбалки&raquo;.\n    </p>\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Смотри, эта, там вон дальше вход в&nbsp;парк. В&nbsp;парке делают <span>прикопы.</span> Ну, эта, закапывают\n      закладки то&nbsp;есть. Щас вот проезжаем, палим тех, кто в&nbsp;парк входит. Особенно если, эта, с&nbsp;телефонами\n      идут. Потом быстренько кружочек делаем и&nbsp;еще раз проезжаем. Кого подозрительного видим, эта,&nbsp;&mdash; стопарим\n      и&nbsp;\n      <span>карманчики смотрим,</span>&nbsp;&mdash; быстро вводит меня в&nbsp;курс дела Михаил.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Николай добавляет, что обычно в&nbsp;лесу прячут <span>закладки</span> с&nbsp;5-10 граммами наркотиков, а&nbsp;это уже\n      крупный размер, уголовка. Попавшиеся полицейским покупатели рискуют получить немалый <span>тюремный срок,</span> а&nbsp;сами\n      стражи порядка&nbsp;&mdash; поощрение от&nbsp;начальства. На&nbsp;вопрос, как они определяют потенциальных наркоманов,\n      полицейские в&nbsp;один голос отвечают, что просто останавливают всех встречающихся на&nbsp;пути людей.\n    </p>\n  </app-p>\n</div>\n\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Ну, сам посуди, до&nbsp;ближайших домов метров пятьсот, кто сюда вообще в&nbsp;ночи сунется! Либо бегуны,\n      либо <span>наркоманы,</span>&nbsp;&mdash; пожимает плечами Николай.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Правда, первая&nbsp;же влюбленная парочка успешно опровергает этот стереотип. Их&nbsp;не&nbsp;пугает ни&nbsp;стремительно\n      притормозившая полицейская &laquo;четырка&raquo;, ни&nbsp;грозное требование Михаила <span>предъявить документы.</span>      Да&nbsp;и&nbsp;сами стражи порядка при виде районной романтики как-то робеют&nbsp;и, неловко прощаясь, возвращаются\n      обратно в&nbsp;машину.\n    </p>\n    <p class=\"margined blue-select\">Следующие три круга тоже не&nbsp;дают результатов: ничего <span>запрещенного</span> не&nbsp;находится ни&nbsp;у&nbsp;двоих\n      весьма нетрезвых мужчин лет 35, ни&nbsp;у&nbsp;парня с&nbsp;девушкой в&nbsp;ухающей рэпером Хаски старенькой Volvo.\n    </p>\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Эх, не&nbsp;везет сегодня,&nbsp;&mdash; сетует Михаил. А&nbsp;так&nbsp;мы, бывает, в&nbsp;неделю по&nbsp;<span>3-4\n      человечка вяжем.</span> Тут, эта, весь лес дырявыми бутылками засыпан. Все сюда ходят ...[употреблять]. Тут раньше,\n      эта, палатка стояла, так там продавали только воду в&nbsp;бутылках и&nbsp;сигареты поштучно. Ну, ты&nbsp;понял для\n      чего. А&nbsp;теперь вот еще прикопы делают, все своими закладками ...[загадили].</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Рассказ прерывается очередным рывком &laquo;четырки&raquo; к&nbsp;обочине: <span>двое подростков</span> идут из&nbsp;парка\n      и&nbsp;о&nbsp;чем-то оживленно беседуют. Вспоминаю, что во&nbsp;время предыдущего круга они заходили в&nbsp;парк, а&nbsp;значит,\n      возможно, <span>подняли закладку.</span>\n    </p>\n    <p class=\"margined blue-select\">Михаил и&nbsp;Николай синхронно вываливаются из&nbsp;машины и&nbsp;начинают <span>проверять документы.</span> До&nbsp;меня\n      доносятся вопросы вроде &laquo;и&nbsp;чо&nbsp;тут делаем?&raquo; и&nbsp;&laquo;имеем при себе чо&nbsp;запрещенное?&raquo;.\n      Но&nbsp;ребята оказываются крепкими орешками&nbsp;&mdash; отказываются демонстрировать <span>содержимое карманов</span>      и&nbsp;нагло требуют понятых. Николай в&nbsp;ответ обещает &laquo;вызвонить их&nbsp;с&nbsp;соседнего дома&raquo; и&nbsp;советует\n      &laquo;не&nbsp;ерепениться&raquo;.\n    </p>\n  </app-p>\n</div>\n\n<div class=\"page\">\n  <app-p>\n    <app-loading-interface [title]=\"'loading data...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n    </app-loading-interface>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page2/pic_2_3.gif\" />\n  </app-p>\n</div>\n\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Увлекательный диалог прерывает вызов&nbsp;&mdash; соседи жалуются на&nbsp;бурную вечеринку. Патрульные неохотно возвращают\n      подросткам паспорта и&nbsp;любезно предлагают добросить меня до&nbsp;метро.\n    </p>\n\n  </app-p>\n</div>\n\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Не&nbsp;было у&nbsp;них ничего, слишком дерзкие и&nbsp;спокойные. Я&nbsp;по&nbsp;глазам вижу, когда у&nbsp;людей\n      <span>наркота на&nbsp;кармане.</span> Не&nbsp;люблю просто, когда начинают, эта, всякие там шуры-муры с&nbsp;понятыми\n      и&nbsp;осмотрами. Сразу ...[ударить] хочется, да&nbsp;посильнее. Нет у&nbsp;тебя ничего, так покажи, чо&nbsp;стесняться,&nbsp;&mdash;\n      обернувшись назад, раздраженно рассуждает Михаил.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">На&nbsp;вопрос, считают&nbsp;ли они такой способ борьбы с&nbsp;наркотиками эффективным, он&nbsp;отвечает еще более гневной\n      тирадой.\n    </p>\n\n  </app-p>\n</div>\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;У&nbsp;нас тут весь район в&nbsp;этом говне, и&nbsp;всем на&nbsp;это ...[все равно]. Каждый день бабульки\n      сумасшедшие в&nbsp;отдел звонят и&nbsp;орут, что во&nbsp;дворах <span>наркоту закладывают,</span>&nbsp;&mdash; Михаил\n      так злится, что даже забывает о&nbsp;своем фирменном &laquo;эта&raquo;. Куда не&nbsp;копни, везде эти закладки, в&nbsp;каждом\n      подъезде ...[употребляют]. И&nbsp;так в&nbsp;каждом районе! Ты&nbsp;ваще, походу, не&nbsp;шаришь, как дела обстоят.\n      Не&nbsp;будем мы&nbsp;их&nbsp;шугать, никто не&nbsp;будет. Ребятам из&nbsp;наркоконтроля некогда за&nbsp;ними бегать,\n      они там по&nbsp;серьезке <span>бабки делают.</span> А&nbsp;так хоть кто-то сядет, другим неповадно будет.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">В&nbsp;2016 году по&nbsp;всей стране было зарегистрировано более 200 тысяч преступлений, связанных с&nbsp;незаконным\n      оборотом наркотиков, но&nbsp;лишь три тысячи из&nbsp;них были совершены в&nbsp;особо крупном размере. Более того, с&nbsp;пересылкой\n      наркотиков связано всего 525&nbsp;преступлений, а&nbsp;с&nbsp;производством лишь&nbsp;66.\n    </p>\n    <p class=\"margined blue-select\">Я&nbsp;пытаюсь узнать, как именно ребята из&nbsp;Наркоконтроля <span>&laquo;делают бабки&raquo;,</span> но&nbsp;понимаю,\n      что вопрос не&nbsp;по&nbsp;адресу.\n    </p>\n\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Они со&nbsp;всем этим должны бороться, у&nbsp;них и&nbsp;ресурсы есть, наверное. Поинтересуйся при случае,\n      почему они в&nbsp;курсе всех <span>крупных поставок,</span> но&nbsp;поставки эти все равно проходят,&nbsp;&mdash; усмехается\n      Николай.\n    </p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Напоследок патрульные советуют мне быть поаккуратнее. Отшучиваюсь мемом про «не стоит вскрывать эту тему…», но они, похоже,\n      совсем не понимают юмора.\n    </p>\n  </app-p>\n  <app-p>\n    <app-loading-interface [title]=\"'loading infographics...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n    </app-loading-interface>\n  </app-p>\n</div>\n\n<div class=\"darkgrey\">\n  <div class=\"page\">\n    <app-infographics-mvd></app-infographics-mvd>\n  </div>\n</div>\n\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'02'\" [glytch]=\"true\" [title]=\"'Крыша от&nbsp;ФСКН'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">\n      Выйти на&nbsp;контакт с&nbsp;работниками расформированной в&nbsp;апреле 2016 года ФСКН (Федеральной службы по&nbsp;контролю\n      за&nbsp;оборотом наркотиков) даже сложнее, чем с&nbsp;наркодилерами.\n    </p>\n    <p class=\"margined blue-select\">\n      А&nbsp;если и&nbsp;получается, то&nbsp;большинство экс-оперативников отделываются дежурными фразами про &laquo;комплексы\n      следственных мероприятий&raquo; и&nbsp;наотрез отказываются вдаваться в&nbsp;подробности.\n    </p>\n  </app-p>\n\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Никто не&nbsp;горит желанием посвящать случайных людей в&nbsp;мир <span>борьбы с&nbsp;наркотиками,</span>&nbsp;&mdash;\n      объясняет один из&nbsp;них. &mdash;&nbsp;Просто подумайте, откуда мы&nbsp;получали информацию о&nbsp;поставщиках и&nbsp;как\n      перехватывали крупные партии. И&nbsp;сразу поймете почему.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Но&nbsp;его коллега считает, что на&nbsp;самом деле сотрудники ФСКН не&nbsp;хотят <span>подставлять товарищей</span>      и&nbsp;порочить честь ведомства.\n    </p>\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Большинству до&nbsp;сих пор трудно признать, что война с&nbsp;наркотиками <span>уже проиграна.</span> И&nbsp;дело\n      тут совсем не&nbsp;в&nbsp;статистике, которой так любят манипулировать большие начальники. Просто это факт, с&nbsp;которым\n      нужно было смириться, как только ты&nbsp;начинал работать в&nbsp;ФСКН. </p>\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp; За&nbsp;годы службы я&nbsp;повидал немало молодых ребят, которые приходили к&nbsp;нам и&nbsp;думали, что\n      будет как в&nbsp;кино&nbsp;&mdash; ну, знаете, чтоб <span>со&nbsp;спецназом в&nbsp;окна,</span> перестрелками и&nbsp;рейдами\n      по&nbsp;притонам.\n    </p>\n    <p class=\"margined blacked blue-select\">Но&nbsp;глянешь на&nbsp;них через год, и&nbsp;все как один выгорели и&nbsp;превратились в&nbsp;равнодушных роботов, работающих\n      только на&nbsp;результат. Им&nbsp;сразу говорили, что все наркотики не&nbsp;изъять, а&nbsp;<span>всех барыг не&nbsp;закрыть.</span>      Даже шутка такая была: раз в&nbsp;названии ФСКН есть слово &laquo;контроль&raquo;, то&nbsp;будем не&nbsp;бороться с&nbsp;наркотиками,\n      а&nbsp;контролировать их&nbsp;распространение. Несогласные либо уходили сразу, либо превращались в&nbsp;таких&nbsp;же,\n      как и&nbsp;все остальные.</p>\n\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n\n</div>\n\n\n<div class=\"page\">\n  <app-p>\n    <app-loading-interface [title]=\"'loading data...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n    </app-loading-interface>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page2/pic_2_4.gif\" />\n  </app-p>\n</div>\n\n\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">Так сложилось исторически, еще со&nbsp;времен первого руководства. Мы&nbsp;тогда буквально за&nbsp;год взяли на&nbsp;контроль\n      <span>все каналы поставок,</span> вышли на&nbsp;крупных производителей и&nbsp;оптовых сбытчиков. Папки с&nbsp;делами\n      стояли в&nbsp;рядок на&nbsp;полочках, хоть завтра всех закрой. Но&nbsp;смысла в&nbsp;этом было немного&nbsp;&mdash;\n      посадишь, завтра все равно появятся новые. Это&nbsp;же рынок, есть спрос, будет и&nbsp;предложение. </p>\n\n    <p class=\"margined blacked blue-select\">Зато имея в&nbsp;руках &laquo;крупняк&raquo;, можно было, так сказать, <span>контролировать спрос</span> и&nbsp;предложение.\n      Своеобразное &laquo;разделяй и&nbsp;властвуй&raquo;&nbsp;&mdash; поддержать одних, чтобы они уничтожили других. Конечно,\n      все это делалось неофициально, но&nbsp;нам дали очень широкие полномочия по&nbsp;разработке конкретных лиц и&nbsp;взаимодействию\n      с&nbsp;информаторами.\n    </p>\n\n    <p class=\"margined blacked blue-select\">Параллельно планировалось <span>снизить спрос</span> на&nbsp;наркотики среди молодежи и&nbsp;запустить программы реабилитации.\n      Оставшиеся наркоторговцы лишились&nbsp;бы потенциальных клиентов, а&nbsp;мы&nbsp;бы по&nbsp;максимуму <span>перекрыли каналы</span>      поставок и&nbsp;тем самым сузили&nbsp;бы рынок до&nbsp;микроскопических размеров.</p>\n\n    <p class=\"margined blacked blue-select\">Кстати именно поэтому в&nbsp;ФСКН были так против всех разговоров о&nbsp;легализации. Наоборот, надо было показать, что\n      все <span>наркотики одинаково опасны.</span> Отсюда и&nbsp;миф о&nbsp;том, что с&nbsp;марихуаны легко пересесть на&nbsp;героин.\n      Начальство наивно думало, что если\n      <span>запугать общество,</span> то&nbsp;употреблять будут меньше.</p>\n\n    <p class=\"margined blacked blue-select\">Но&nbsp;этот план был хорош лишь на&nbsp;бумаге. Как и&nbsp;идея маленькой победоносной войны между поставщиками. Потому\n      что она спровоцировала куда более серьезное противостояние&nbsp;&mdash; знаменитые <span>&laquo;Ментовские войны&raquo;.</span></p>\n    <p class=\"margined blacked blue-select\">В&nbsp;результате мы&nbsp;лишились [предыдущего главы ФСКН] Черкесова, а&nbsp;сменивший его Иванов первым делом затеял\n      масштабную борьбу с&nbsp;коррупцией. А&nbsp;в&nbsp;результате <span>уволил кучу оперов</span> и&nbsp;пустил псу под\n      хвост годы оперативной работы. Мы&nbsp;<span>лишились информаторов</span> на&nbsp;местах, перестали контролировать\n      кучу оптовиков&nbsp;и, по&nbsp;сути, начали все с&nbsp;начала.</p>\n    <p class=\"margined blacked blue-select\">К&nbsp;тому&nbsp;же новые руководители не&nbsp;особо вдавались в&nbsp;тонкости оперативной работы и&nbsp;вечно требовали\n      заполнять какие-то бумажки, так что негласно работать с&nbsp;криминальным элементом стало куда сложнее. А&nbsp;в&nbsp;борьбе\n      с&nbsp;наркотиками без этого никак.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p>\n    <app-loading-interface [title]=\"'loading data...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n    </app-loading-interface>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page2/pic_2_5.gif\" />\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">Но&nbsp;была и&nbsp;куда более серьезная проблема. О&nbsp;ней не&nbsp;принято говорить открыто, но&nbsp;и&nbsp;игнорировать\n      не&nbsp;получится. Наркоторговля&nbsp;&mdash; это очень <span>прибыльный бизнес,</span> и&nbsp;если у&nbsp;тебя под\n      носом ворочают миллионами, трудно не&nbsp;присоединиться. Так что приходится признать&nbsp;&mdash; среди нас было немало\n      тех, кто <span>крышевал</span> продажу наркотиков, причем абсолютно на&nbsp;всех уровнях. За&nbsp;это нас, собственно,\n      и&nbsp;прозвали\n      <span>&laquo;Госнаркокартелем&raquo;.</span></p>\n\n    <p class=\"margined blacked blue-select\">Например, в&nbsp;крупных городах большинство оперативников районных отделов ФСКН плотно работало с&nbsp;<span>местными поставщиками.</span>      Чтоб вы&nbsp;понимали, это такие агрегаторы заказов: они присматривают за&nbsp;оптовыми сбытчиками и&nbsp;стабильно\n      обеспечивают их&nbsp;нужным количеством наркотиков.\n    </p>\n\n    <p class=\"margined blacked blue-select\">Допустим, ежемесячно покупают <span>50&nbsp;килограмм гашиша</span> через &laquo;первые руки&raquo;, то&nbsp;есть напрямую\n      у&nbsp;производителя, делят с&nbsp;ним затраты на&nbsp;транспортировку, а&nbsp;потом продают своим сбытчикам партиями\n      по&nbsp;10&nbsp;кило, но&nbsp;уже подороже. Иногда крупный <span>барыга</span> предварительно &laquo;заряжает&raquo;\n      им&nbsp;деньги, получает товар почти по&nbsp;себестоимости и&nbsp;отдает процент с&nbsp;прибыли или вообще &laquo;берет\n      на&nbsp;реал&raquo;, то&nbsp;есть продает, а&nbsp;потом <span>возвращает деньги</span> вместе с&nbsp;прибылью.</p>\n\n    <p class=\"margined blacked blue-select\">Поставщик&nbsp;же следит за&nbsp;тем, чтобы у&nbsp;бизнеса не&nbsp;возникало проблем. А&nbsp;значит, <span>улаживает дела</span>      с&nbsp;силовиками, в&nbsp;том числе с&nbsp;сотрудниками ФСКН. Им&nbsp;ежемесячно <span>капал процент</span> с&nbsp;каждого\n      крупного груза, а&nbsp;они в&nbsp;ответ гарантировали, что по&nbsp;их&nbsp;линии не&nbsp;будет проблем.</p>\n\n    <p class=\"margined blacked blue-select\">А&nbsp;еще через поставщиков опера <span>выполняли &laquo;палки&raquo;</span> по&nbsp;АППГ [повышали уровень раскрываемости\n      преступлений и&nbsp;объема изъятых наркотических веществ по&nbsp;сравнению с&nbsp;аналогичным периодом прошлого года]\n      и&nbsp;&laquo;крупнякам&raquo;, то&nbsp;есть <span>задержаниям</span> за&nbsp;сбыт в&nbsp;крупном или особо крупном\n      размере.\n    </p>\n    <p class=\"margined blacked blue-select\">Поставщики искали для оперов <span>&laquo;пассажиров&raquo;</span>&nbsp;&mdash; мелких наркоторговцев без серьезных связей\n      и&nbsp;обязательно с&nbsp;другого района, ведь сдавать своих считается западло. Действовали по&nbsp;стандартной схеме:\n      оптовые продавцы <span>втирались в&nbsp;доверие</span> к&nbsp;будущим жертвам, приглашали их&nbsp;на&nbsp;тусовки,\n      вместе употребляли и&nbsp;продавали им&nbsp;пробную партию, скажем, граммов в&nbsp;200&nbsp;гашиша.</p>\n    <p class=\"margined blacked blue-select\">А&nbsp;потом предлагали по&nbsp;очень выгодной цене (тысяч на&nbsp;100 дешевле рыночной) <span>&laquo;зацепить&raquo;</span>      уже пару кило. Те&nbsp;приезжали на&nbsp;район и&nbsp;совершали сделку, после чего их&nbsp;тут&nbsp;же <span>брали оперативники.</span>      Чтобы обезопасить продавцов, в&nbsp;деле указывалось, что наркотики были приобретены у&nbsp;неустановленных лиц, а&nbsp;на&nbsp;задержании\n      работали только &laquo;подтянутые к&nbsp;теме&raquo; опера.</p>\n    <p class=\"margined blacked blue-select\">&laquo;Пассажирам&raquo; тут&nbsp;же вменяли <span>покушение на&nbsp;сбыт,</span> совершенное группой по&nbsp;предварительному\n      сговору. А&nbsp;дальше все зависело от&nbsp;мастерства конкретных сотрудников. Обычно они предлагали <span>скостить срок,</span>      если задержанные сдадут всех знакомых барыг или поучаствуют <span>в&nbsp;контрольной закупке.</span> Потом отпускали\n      под домашний арест. Люди успокаивались, думали, что все обойдется, пока на&nbsp;суде им&nbsp;не&nbsp;<span>давали 15&nbsp;лет.</span></p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p>\n    <app-loading-interface [title]=\"'loading data...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n    </app-loading-interface>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page2/pic_2_6.gif\" />\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">А&nbsp;знаете, что самое забавное? Формально сотрудники действовали <span>в&nbsp;рамках закона</span> &laquo;Об&nbsp;оперативно-разыскной\n      деятельности&raquo;: районные поставщики оказывали <span>помощь в&nbsp;расследовании,</span> а&nbsp;значит, считались\n      конфиденциальными информаторами. В&nbsp;крайнем случае, продажу наркотиков обвиняемым квалифицировали как &laquo;контролируемую\n      поставку&raquo;.\n    </p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">\n      Факты &laquo;крышевания&raquo; наркоторговцев подтверждают и&nbsp;другие бывшие работники ФСКН, а&nbsp;также сотрудники МВД\n      и&nbsp;Следственного комитета.\n    </p>\n    <p class=\"margined blue-select\">\n      Один из&nbsp;экс-оперативников Наркоконтроля признает, что в&nbsp;ведомстве царила нездоровая атмосфера, а&nbsp;сотрудники\n      не&nbsp;только получали <span>процент с&nbsp;продажи</span> наркотиков, но&nbsp;и&nbsp;сами участвовали в&nbsp;их&nbsp;сбыте.\n      Его коллега отмечает, что за&nbsp;восемь лет работы в&nbsp;ФСКН пристрастился к&nbsp;амфетамину и&nbsp;теперь испытывает\n      серьезные проблемы со&nbsp;здоровьем.\n    </p>\n    <p class=\"margined blue-select\">\n      Он&nbsp;же напоминает, что наркополицейские неоднократно становились фигурантами громких скандалов и&nbsp;<span>уголовных дел.</span>      Например, в&nbsp;2013 году главу управления ФСКН задержали за&nbsp;сбыт 20&nbsp;килограммов героина, а&nbsp;двоих сотрудников\n      одного из&nbsp;столичных отделов нашли в&nbsp;состоянии <span>наркотического опьянения</span> во&nbsp;время перевозки\n      28&nbsp;килограммов наркотиков на&nbsp;служебном автомобиле. Позже один из&nbsp;них умер в&nbsp;больнице, а&nbsp;их&nbsp;отдел\n      был расформирован.\n    </p>\n\n  </app-p>\n\n\n\n  <app-link-block [links]='[\n  {title:\"Задержание экс-главы ФСКН \", link:\"https://www.gazeta.ru/social/news/2013/04/24/n_2874005.shtml\"},\n  {title:\"Сотрудники ФСКН под действием наркотиков\", link:\"https://lenta.ru/news/2013/11/03/fskn/\"},\n  {title:\"Смерть сотрудника ФСКН\", link:\"https://lenta.ru/news/2013/11/17/fskn/\"}\n  ]'>\n\n  </app-link-block>\n\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">\n      В&nbsp;2012 году сотрудники правозащитной организации &laquo;Агора&raquo; со&nbsp;ссылкой на&nbsp;документы ФСБ рассказывали\n      о&nbsp;якобы хранившихся в&nbsp;районных отделах ФСКН крупных <span>партиях наркотиков,</span> деньги от&nbsp;продажи\n      которых использовались, чтобы <span>&laquo;отмазать&raquo;</span> сотрудников от&nbsp;уголовного преследования. В&nbsp;том&nbsp;же\n      году криминалиста ФСКН арестовали за&nbsp;организацию оптовых поставок кокаина из&nbsp;Латинской Америки.\n    </p>\n    <p class=\"margined blue-select\">\n      Но&nbsp;самая <span>громкая история</span> случилась в&nbsp;2011 году в&nbsp;Вологодской области, где начальник Череповецкого\n      межрайонного отдела ФСКН Алексей Советов и&nbsp;11&nbsp;его подчиненных на&nbsp;протяжении четырех лет фальсифицировали\n      уголовные дела и&nbsp;вымогали у&nbsp;обвиняемых деньги, а&nbsp;также <span>контролировали распространение</span> наркотиков\n      в&nbsp;Череповце и&nbsp;занимались их&nbsp;сбытом через знакомых дилеров.\n    </p>\n    <p class=\"margined blue-select\">\n      В&nbsp;итоге злополучный отдел ФСКН <span>взяли штурмом</span> спецназовцы питерского ФСБ, а&nbsp;коррумпированных\n      сотрудников признали виновными по&nbsp;150&nbsp;эпизодам. Правда, бывший сотрудник ФСКН не&nbsp;видит в&nbsp;этом ничего\n      экстраординарного.\n    </p>\n\n  </app-p>\n\n\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;Такое и&nbsp;правда встречалось в&nbsp;региональных отделах ФСКН, просто тут вся схема неожиданно <span>выплыла\n      наружу.</span> Скорее всего, информацию слил кто-то из&nbsp;работавших там оперов, затаивших обиду на&nbsp;коллег,&nbsp;&mdash;\n      считает&nbsp;он. Чтобы вы&nbsp;понимали, в&nbsp;ФСКН царила <span>круговая порука</span>&nbsp;&mdash; опера дружили\n      семьями, вместе работали и&nbsp;бизнес тоже делали вместе. Да&nbsp;и&nbsp;вообще такие дела просто так никуда не&nbsp;просачиваются:\n      своих сдавать&nbsp;&mdash; это <span>западло.</span></p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n\n\n  <app-link-block [links]='[\n  {title:\"Реализация наркотиков сотрудниками \", link:\"http://openinform.ru/fs/j_photos/openinform_361.pdf\"},\n  {title:\"Задержание офицера ФСКН\", link:\"http://www.newsru.com/crime/07feb2012/arestdrugfsknpdm.html\"},\n  {title:\"Штурм отдела Госнаркоконтроля\", link:\"https://lenta.ru/news/2011/11/03/antidrug/\"}\n  ]'>\n  </app-link-block>\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">\n      В&nbsp;криминальных связях подозревали не&nbsp;только рядовых сотрудников, но&nbsp;и&nbsp;<span>руководство</span>      ФСКН. Например, замглавы ведомства Николая Аулова, в&nbsp;марте 2016 года заочно арестованного в&nbsp;Испании за&nbsp;связь\n      с&nbsp;Геннадием Петровым&nbsp;&mdash; лидером Малышевской <span>преступной группировки,</span> в&nbsp;1990-х годах\n      контролировавшей поставки оптовых партий наркотиков через Санкт-Петербург.\n    </p>\n    <p class=\"margined blue-select\">\n      В&nbsp;ответ глава ФСКН Виктор Иванов объяснил, что Аулов постоянно <span>контактирует</span> с&nbsp;Петровым, используя\n      его как &laquo;полезного информатора по&nbsp;ряду вопросов&raquo;.\n    </p>\n  </app-p>\n\n  <app-link-block [links]='[\n  {title:\"Охота на замдиректора ФСКН\", link:\"http://www.rosbalt.ru/moscow/2016/03/31/1502531.html\"},\n  {title:\"Связи с криминальным авторитетом\", link:\"https://www.novayagazeta.ru/news/2016/01/21/117886-glava-fskn-rasskazal-o-svyazyah-s-pokinuvshim-rossiyu-kriminalnym-avtoritetom\"}\n  ]'>\n  </app-link-block>\n\n\n</div>\n\n\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'03'\" [glytch]=\"true\" [title]=\"'В&nbsp;даркнете не&nbsp;было денег'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Именно &laquo;своеобразные&raquo; отношения с&nbsp;информаторами во&nbsp;многом и&nbsp;привели к&nbsp;тому, что в&nbsp;ФСКН\n      долго не&nbsp;обращали <span>внимания</span> на&nbsp;торговые площадки в&nbsp;&laquo;темном&raquo; интернете. Несмотря\n      на&nbsp;то&nbsp;что владельцы первых магазинов на&nbsp;RAMP и&nbsp;R2D2 покупали наркотики у&nbsp;контролируемых ФСКН\n      поставщиков, органы упустили возможность <span>пресечь наркотороговлю</span> в&nbsp;Tor еще в&nbsp;зародыше.</p>\n  </app-p>\n\n</div>\n\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;В&nbsp;то&nbsp;время даркнет был никому не&nbsp;интересен. Это была жалкая <span>тусовка анонимов</span>      с&nbsp;грошовыми доходами, а&nbsp;опера привыкли иметь дело с&nbsp;крупняком.</p>\n    <p class=\"margined blacked blue-select\">К&nbsp;тому&nbsp;же, давайте честно, в&nbsp;2012 году многие мои коллеги редко пользовались интернетом и&nbsp;ходили\n      с&nbsp;кнопочными Nokia. Все эти высокие технологии были им&nbsp;<span>не&nbsp;нужны,</span> и&nbsp;они ничего в&nbsp;них\n      не&nbsp;смыслили. Вы&nbsp;вообще представляете себе опера, который тогда не&nbsp;то&nbsp;что лез в&nbsp;Tor, а&nbsp;просто\n      понимал, что написано в&nbsp;отчете компьютерных специалистов? Я&nbsp;вот не&nbsp;представляю.</p>\n  </app-p>\n\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page2/pic_2_7.gif\" />\n  </app-p>\n\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">Конечно, у&nbsp;нас были и&nbsp;молодые ребята. Они знали английский, ездили на&nbsp;всякие конференции и&nbsp;общались\n      там <span>с&nbsp;коллегами из&nbsp;DEA</span> (Управление по&nbsp;борьбе с&nbsp;наркотиками США) или Европола. Там\n      им&nbsp;рассказывали про Silk Road и&nbsp;<span>предупреждали,</span> что нечто похожее может появиться и&nbsp;в&nbsp;России.\n      Но&nbsp;это никто не&nbsp;воспринимал всерьез, хотя руководство и&nbsp;поручило <span>следить за&nbsp;форумами</span>      в&nbsp;Tor и&nbsp;даже потребовало составлять какие-то отчеты. Правда, читал&nbsp;ли их&nbsp;кто-то потом&nbsp;&mdash;\n      большой вопрос.\n    </p>\n    <p class=\"margined blacked blue-select\">Отношение к&nbsp;Tor <span>поменялось</span> где-то к&nbsp;середине 2013&nbsp;года. Да&nbsp;и&nbsp;то&nbsp;потому, что\n      схему с&nbsp;закладками и&nbsp;оплатой по&nbsp;Qiwi освоили обычные продавцы, а&nbsp;в&nbsp;крупных городах стены были\n      изрисованы надписями &laquo;спайсы, соли&raquo;. К&nbsp;тому&nbsp;же <span>на RAMP жаловались</span> некоторые поставщики\n      в&nbsp;Москве и&nbsp;Петербурге&nbsp;&mdash; закладки уменьшали их&nbsp;доходы, а&nbsp;продавцы в&nbsp;даркнете не&nbsp;горели\n      желанием башлять за&nbsp;&laquo;крышу&raquo; в&nbsp;органах.\n    </p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<app-incision-fskn (onShrink)=\"this.scrollToElement($event)\">\n\n</app-incision-fskn>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">Когда в&nbsp;ФСКН спохватились, было уже поздно. Выйти на&nbsp;владельцев интернет-магазинов удавалось редко, хотя их&nbsp;с&nbsp;радостью\n      <span>сливали</span> конкуренты &laquo;на&nbsp;земле&raquo;. Впрочем, это лишь усугубило ситуацию&nbsp;&mdash; обитатели\n      &laquo;темного&raquo; интернета просто отказались от&nbsp;личных контактов при сделках с&nbsp;наркотиками.</p>\n    <p class=\"margined blacked blue-select\">В&nbsp;итоге ФСКН решила <span>не&nbsp;светить</span> эту тему и&nbsp;отчитывалась только об&nbsp;очередной обезвреженной\n      банде &laquo;интернет-торговцев смертью&raquo;, которые, с&nbsp;вероятностью 90&nbsp;процентов забыли про анонимность\n      и&nbsp;просто <span>спалились</span> перед поставщиками.\n    </p>\n    <p class=\"margined blacked blue-select\">А&nbsp;потом ФСКН не&nbsp;стало, и&nbsp;борьба с&nbsp;наркотиками вообще подвисла. Сейчас у&nbsp;новых ребят [сотрудников\n      Главного управления по&nbsp;контролю за&nbsp;оборотом наркотиков (ГУНК)] <span>дикий головняк</span>, и&nbsp;им&nbsp;не&nbsp;до&nbsp;Tor.\n      Тем более что в&nbsp;масштабах России это по-прежнему очень небольшой рынок.</p>\n\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'04'\" [glytch]=\"true\" [title]=\"'Переполох в&nbsp;ГУНК'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">\n      Недавно сформированное ГУНК действительно переживает <span>непростые времена.</span> Возглавивший управление генерал-майор\n      Андрей Храпов&nbsp;&mdash; потомственный силовик, долгие годы занимавшийся раскрытием заказных убийств и&nbsp;борьбой\n      с&nbsp;наркотиками в&nbsp;Главном управлении уголовного розыска,&nbsp;&mdash; утверждал, что взял на&nbsp;работу самых\n      опытных сотрудников ФСКН.\n    </p>\n    <p class=\"margined blue-select\">\n      Однако на&nbsp;самом деле в&nbsp;МВД, по&nbsp;разным оценкам, <span>не&nbsp;попало</span> от&nbsp;16&nbsp;до&nbsp;23&nbsp;тысяч\n      работников Наркоконтроля, в&nbsp;том числе спецназовцы подразделения &laquo;Гром&raquo;.\n    </p>\n  </app-p>\n\n  <app-link-block [links]='[\n  {title:\"Сотрудники ФСКН остались без зарплат\", link:\"https://ria.ru/society/20160713/1465254997.html\"},\n  {title:\"Сотрудники ФСКН устроиваются в МВД \", link:\"http://tass.ru/politika/3327519\"},\n  {title:\"Укомплектование МВД \", link:\"http://www.kommersant.ru/doc/3100671\"}\n  ]'>\n  </app-link-block>\n\n</div>\n\n\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;В&nbsp;ГУНК старались не&nbsp;брать людей предпенсионного возраста, а&nbsp;многие молодые сотрудники ушли\n      сами из-за <span>низких зарплат.</span> В&nbsp;ФСКН&nbsp;же были ставки федеральных служащих, а&nbsp;в&nbsp;полиции\n      платят минимум на&nbsp;20-25 тысяч меньше.</p>\n    <p class=\"margined blacked blue-select\">Работы при этом только прибавилось, ведь у&nbsp;ГУНК и&nbsp;<span>штат меньше,</span> и&nbsp;материально-техническое\n      оснащение хуже. Ну&nbsp;и&nbsp;смена статуса тоже играет роль&nbsp;&mdash; у&nbsp;федеральной службы все&nbsp;же больше\n      влияния, чем у&nbsp;полицейского управления.\n    </p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Другой экс-сотрудник ФСКН рассказывает, что его коллегам массово предлагали перейти не&nbsp;в&nbsp;ГУНК, а&nbsp;в&nbsp;<span>другие\n      подразделения</span> МВД. Например, в&nbsp;Главное управление экономической безопасности, следственный департамент\n      и&nbsp;даже патрульно-постовую службу.\n    </p>\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;На&nbsp;самом деле это не&nbsp;более чем попытка избавиться от&nbsp;<span>негативного наследия</span> Наркоконтроля,\n      в&nbsp;том числе порочащих связей оперативников с&nbsp;продавцами и&nbsp;поставщиками наркотиков. Руководство ГУНК,\n      похоже, не&nbsp;хочет иметь ничего общего с&nbsp;грехами предшественников. Но&nbsp;не&nbsp;совсем понимает, что по-другому\n      <span>победить</span> наркоторговлю просто невозможно, ведь в&nbsp;этом деле все опирается на&nbsp;<span>информаторов.</span></p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">Пока негласное решение не&nbsp;брать бывших сотрудников Наркоконтроля в&nbsp;ГУНК действительно бьет по&nbsp;борьбе с&nbsp;наркотиками:\n      в 2016 году по&nbsp;всей России изъяли всего <span>21,7 тонны</span> психоактивных веществ&nbsp;&mdash; на&nbsp;15&nbsp;тонн\n      <span>меньше,</span> чем годом ранее.\n    </p>\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">&mdash;&nbsp;А&nbsp;еще у&nbsp;ГУНК огромный <span>недобор</span> сотрудников, особенно в&nbsp;региональных управлениях.\n      До&nbsp;штатной численности в&nbsp;34&nbsp;тысячи человек им&nbsp;как до&nbsp;луны,&nbsp;&mdash; констатирует сотрудник\n      силовых структур.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p>\n    <app-loading-interface [title]=\"'loading data...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n    </app-loading-interface>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page2/pic_2_8.gif\" />\n  </app-p>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">\n      Даже в&nbsp;Москве неделями <span>не&nbsp;отвечают</span> на&nbsp;запросы, а&nbsp;из&nbsp;600 сотрудников на&nbsp;работе\n      появляется где-то половина. Правда на&nbsp;них висит куча откровенно глупых обязанностей, доставшихся в&nbsp;наследство\n      от&nbsp;ФСКН. Например, проверки фармакологических заводов или ветеринарных клиник.\n    </p>\n\n    <p class=\"margined blue-select\">\n      Но&nbsp;факт остается фактом: сейчас в&nbsp;ГУНК <span>слабо представляют,</span> как бороться с&nbsp;наркотиками,\n      да&nbsp;и&nbsp;ресурсов у&nbsp;них маловато. Но&nbsp;главное &mdash;&nbsp;с&nbsp;развалом ФСКН была утеряна уникальная\n      сеть информаторов. Да, многие из&nbsp;них были у&nbsp;силовиков <span>&laquo;под крышей&raquo;,</span> но&nbsp;один\n      их&nbsp;звонок мог <span>заменить</span> собой полгода оперативной работы.\n    </p>\n  </app-p>\n</div>\n\n<div class=\"page\">\n  <app-dot-line></app-dot-line>\n  <app-title [light]=\"true\" [num]=\"'05'\" [glytch]=\"true\" [title]=\"'Будущее наркоконтроля'\">\n\n  </app-title>\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">\n      С&nbsp;другой стороны, у&nbsp;МВД есть шанс <span>избежать ошибок</span> предшественников и&nbsp;не&nbsp;допустить\n      массовой коррупции в&nbsp;рядах борцов с&nbsp;наркотиками. К&nbsp;тому&nbsp;же стремительное развитие площадок в&nbsp;&laquo;темном&raquo;\n      интернете меняет саму <span>структуру потребления</span> психоактивных веществ. На&nbsp;первый план выходит не&nbsp;взаимодействие\n      с&nbsp;источниками, а&nbsp;постоянное отслеживание деятельности продавцов и&nbsp;администраторов в&nbsp;Tor, а&nbsp;также\n      борьба с&nbsp;местными производителями. И&nbsp;для этого в&nbsp;МВД уже создана неплохая база.\n    </p>\n    <p class=\"margined blue-select\">\n      По&nbsp;словам представителя управления &laquo;К&raquo; МВД Александра Вураско, полиция <span>отслеживает</span> происходящее\n      в&nbsp;сетях Tor или I2P, а&nbsp;затем использует эти сведения в&nbsp;процессе расследования. Он&nbsp;с&nbsp;гордостью\n      рассказывает, что управление &laquo;К&raquo; задерживало педофилов, распространявших детскую порнографию в&nbsp;Tor\n      и&nbsp;обменивавшихся файлами через Freenet, а&nbsp;значит, наркоторговцы тоже <span>уязвимы.</span>\n    </p>\n  </app-p>\n  <app-p [blue]=\"true\">\n    <p>\n      Entering chat...\n    </p>\n  </app-p>\n  <app-chat [blue]=\"true\" [speaker]=\"'Александр Вураско'\">\n    <div class=\"item\">Это как раскрывать ограбление банка. Там установлены камеры, поэтому преступники надевают маски. Так вот, даркнет&nbsp;&mdash;\n      это некая маска. Но&nbsp;ведь чтобы найти грабителей, совсем необязательно знать их&nbsp;в&nbsp;лицо&quot;. </div>\n  </app-chat>\n\n\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">\n      С&nbsp;Вураско согласен и&nbsp;сотрудник с&nbsp;многолетним стажем из&nbsp;Следственного комитета.\n    </p>\n    <p class=\"margined blue-select\">\n      Для борьбы с&nbsp;RAMP придется <span>наблюдать</span> за&nbsp;продавцами, а&nbsp;затем работать по&nbsp;их&nbsp;<span>поставщикам.</span>      Они не&nbsp;гении и&nbsp;не&nbsp;крутые хакеры, а&nbsp;обычные провинциалы, делающие все по&nbsp;инструкциям с&nbsp;тех&nbsp;же\n      форумов.\n    </p>\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">Ну&nbsp;согласитесь, нельзя растить килограммами траву или варить фен и&nbsp;не&nbsp;<span>спалиться</span> на&nbsp;мелочах&nbsp;&mdash;\n      они&nbsp;же где-то берут сырье, удобрения и&nbsp;семена. Нужно сводить эти факты воедино, а&nbsp;затем устраивать <span>громкие\n      задержания,</span> снимать это на&nbsp;видео, публиковать в&nbsp;СМИ, а&nbsp;заодно и&nbsp;им&nbsp;на&nbsp;форум кидать.\n      Чтобы другие знали: скоро придем и&nbsp;за&nbsp;ними. То&nbsp;же самое и&nbsp;с&nbsp;&laquo;крышеванием&raquo;. Работал\n      с&nbsp;барыгами&nbsp;&mdash; хлоп, <span>пожизненное</span> с&nbsp;конфискацией имущества. Чтоб неповадно было.</p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n</div>\n\n<div class=\"page\">\n  <app-p [middle]=\"true\">\n    <p class=\"margined blue-select\">\n      Но&nbsp;экс-сотрудник ФСКН считает, что страх наказания не&nbsp;изменит ситуацию, а&nbsp;еще больше озлобит общество.\n    </p>\n\n    <p class=\"margined blue-select\">\n      В&nbsp;войне с&nbsp;наркотиками главное&nbsp;&mdash; это <span>доверие</span> населения. Люди должны знать, что им&nbsp;помогут\n      вылечиться и&nbsp;не&nbsp;закроют за&nbsp;косяк или растущий в&nbsp;шкафу куст. Мы&nbsp;слишком закрутили гайки и&nbsp;<span>превратились\n      в&nbsp;зверей,</span> вяжущих пекарей за&nbsp;булочки с&nbsp;маком.\n    </p>\n  </app-p>\n  <app-p>\n    <app-loading-interface [title]=\"'loading data...'\" (done)=\"this.incrimentNarrativeIndex()\">\n\n    </app-loading-interface>\n  </app-p>\n  <app-p [middle]=\"true\">\n    <img class=\"inner-image\" src=\"./assets/images/page2/pic_2_9.gif\" />\n  </app-p>\n</div>\n\n<div class=\"page document\">\n  <app-cut-out></app-cut-out>\n  <app-p [middle]=\"true\" [noLine]=\"true\">\n    <p class=\"margined blacked blue-select\">А&nbsp;молодежь тем временем <span>слушала Гуфа</span> с&nbsp;его &laquo;пускаем дым, легко&nbsp;ли быть молодым&raquo;\n      и&nbsp;тусовалась в&nbsp;клубах. А&nbsp;потом появился даркнет, и&nbsp;теперь модно сидеть на&nbsp;форумах и&nbsp;<span>подбирать закладочки.</span></p>\n    <p class=\"margined blacked blue-select\">Мы&nbsp;<span>задерживали</span> ребят из&nbsp;приличных семей, они и&nbsp;сами употребляли, и&nbsp;продавали. Спрашивал&nbsp;их:\n      &laquo;вы&nbsp;зачем это делали?&raquo;, а&nbsp;они молчат и&nbsp;сопли пускают. <span>Мода</span> у&nbsp;них такая,\n      понимаете? Нужно быть опасным, ходить с&nbsp;ножом или травматом и&nbsp;банчить наркотой. А&nbsp;родители пока за&nbsp;универ\n      заплатят и&nbsp;на&nbsp;работу устроят.</p>\n    <p class=\"margined blacked blue-select\">Да&nbsp;и&nbsp;вообще, что вы&nbsp;хотите от&nbsp;людей? Им&nbsp;даже в&nbsp;Москве платят тысяч 40-50, а&nbsp;простой\n      закладчик <span>поднимает 100-150.</span> То&nbsp;же самое и&nbsp;с&nbsp;органами: если предлагают <span>взять 20&nbsp;тысяч</span>      долларов, большинство два раза откажется, а&nbsp;на&nbsp;третий <span>согласится.</span></p>\n    <p class=\"margined blacked blue-select\">Так что тут одно из&nbsp;двух: либо платите нормально сотрудникам органов, либо <span>меняйте законодательство</span>      и&nbsp;не&nbsp;закрывайте всех подряд за&nbsp;пару грамм. А&nbsp;главное&nbsp;&mdash; не&nbsp;заставляйте это делать\n      нас.\n    </p>\n  </app-p>\n  <app-cut-out [down]=\"true\"></app-cut-out>\n\n</div>\n<div class=\"page\">\n  <app-p [final]=\"true\">\n    <p>CONNECTION CLOSED</p>\n  </app-p>\n  <app-p class=\"sharing\">\n    <app-sharing-block [page]=\"2\">\n    </app-sharing-block>\n  </app-p>\n\n\n</div>\n\n<app-dot-line [wide]=\"true\">\n</app-dot-line>\n<div class=\"page\">\n  <app-global-navigation>\n\n  </app-global-navigation>\n</div>\n<app-dot-line [wide]=\"true\">\n</app-dot-line>"

/***/ }),

/***/ "../../../../../src/app/page2/page2.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  margin: auto;\n  display: block;\n  /* &.hide {\n        transform: scaleY(0);\n        position: absolute;\n    }*/\n}\n.page {\n  width: 100%;\n  max-width: 992px;\n  margin: auto;\n  position: relative;\n}\n@media (max-width: 850px) {\n  .page {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .page {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.page app-title {\n  color: white;\n}\n.page.document {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/page2/paper.png") + ");\n  background-size: cover;\n  background-position: top left;\n  padding-top: 54px;\n  padding-right: 153px;\n  padding-bottom: 38px;\n  padding-left: 84px;\n  margin-top: 32px;\n  margin-bottom: 32px;\n  position: relative;\n}\n.page.document.paper1 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/page2/paper_03.jpg") + ");\n}\n.page.document.paper2 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/page2/paper_04.jpg") + ");\n}\n@media (max-width: 767px) {\n  .page.document {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n.inner-image {\n  max-width: 100%;\n}\napp-link-block {\n  padding-left: 68px;\n  display: block;\n  margin-top: 32px;\n  margin-bottom: 16px;\n}\n@media (max-width: 850px) {\n  app-link-block {\n    padding-left: 48px;\n  }\n}\n@media (max-width: 767px) {\n  app-link-block {\n    padding-left: 0;\n    padding-right: 0;\n    max-width: 100%;\n  }\n}\n.darkgrey {\n  background-color: #707070;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\napp-chat {\n  display: block;\n  margin-bottom: 64px;\n  position: relative;\n  z-index: 5;\n}\n@media (max-width: 767px) {\n  app-chat {\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\napp-menu {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  width: 126px;\n  transition: ease 0.3s transform;\n}\napp-p.sharing {\n  margin-top: 40px;\n}\n.warning {\n  width: 100%;\n  background-color: #0032ff;\n  color: black;\n  text-transform: uppercase;\n  font-family: \"Roboto Mono\";\n  font-size: 14px;\n  margin-bottom: 32px;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  transition: ease 0.3s transform;\n}\n.warning.show {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n.warning .inner {\n  width: 100%;\n  max-width: 992px;\n  margin: auto;\n  padding-top: 16px;\n  padding-bottom: 24px;\n  padding-left: 86px;\n}\n@media (max-width: 850px) {\n  .warning .inner {\n    padding-right: 48px;\n  }\n}\n@media (max-width: 767px) {\n  .warning .inner {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\napp-global-navigation {\n  display: block;\n  margin: auto;\n  margin-left: 82px;\n}\n@media (max-width: 767px) {\n  app-global-navigation {\n    margin: 0;\n  }\n}\n@media (max-width: 767px) {\n  app-infographics-mvd {\n    display: block;\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page2/page2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__("../../../../gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page__ = __webpack_require__("../../../../../src/page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracking_service__ = __webpack_require__("../../../../../src/app/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paging_service_service__ = __webpack_require__("../../../../../src/app/paging-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__title_title_component__ = __webpack_require__("../../../../../src/app/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Page2Component = Page2Component_1 = (function (_super) {
    __extends(Page2Component, _super);
    function Page2Component(element, paging, track) {
        var _this = _super.call(this, element) || this;
        _this.paging = paging;
        _this.track = track;
        _this.activated = true;
        return _this;
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.paging.emitter.subscribe(function (data) {
            if (data.page === 2) {
                _this.scrollTo(data.section + 1);
            }
        });
        this.activate();
    };
    Page2Component.prototype.ngAfterViewInit = function () {
        var elements = this.element.nativeElement.getElementsByClassName('document');
        for (var i = 0; i < elements.length; i++) {
            var random = Math.random();
            if (random <= 1 / 2) {
                elements.item(i).classList.add('paper1');
            }
            else {
                elements.item(i).classList.add('paper2');
            }
        }
    };
    Page2Component.prototype.enable = function () {
        _super.prototype.enable.call(this);
        /*  TweenMax.set(this.element.nativeElement, { height: 'auto' });
          TweenMax.from(this.element.nativeElement, 1, {
            height: 0, onComplete: () => {
              this.element.nativeElement.style.height = '';
            }
          })*/
        // (this.element.nativeElement as HTMLElement).classList.remove('hide');
    };
    Page2Component.prototype.disable = function () {
        _super.prototype.disable.call(this);
        /*TweenMax.to(this.element.nativeElement, 1, {
          height: 0, onComplete: () => {
            this.element.nativeElement.style.height = 'auto';
          }
        })*/
        // (this.element.nativeElement as HTMLElement).classList.add('hide');
    };
    Page2Component.prototype.scrollTo = function (num) {
        __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(this, 2, { scroll: this.getOffsetTop(this.titles.toArray()[num].element.nativeElement) - 55, ease: __WEBPACK_IMPORTED_MODULE_0_gsap__["Sine"].easeOut });
    };
    Object.defineProperty(Page2Component.prototype, "scroll", {
        get: function () {
            return this.lastScroll;
        },
        set: function (newScroll) {
            window.scrollTo(0, newScroll);
            this.workWithScrollPosition(newScroll);
        },
        enumerable: true,
        configurable: true
    });
    Page2Component.prototype.workWithScrollPosition = function (newY) {
        var _this = this;
        if (this.enabled) {
            //  console.log('scrollPosition:', newY);
            if (this.titles) {
                this.menu.nativeElement.style.transform = 'translateY(' +
                    Math.max(0, newY - this.getOffsetTop(this.menu.nativeElement) +
                        92) + 'px' + ')';
                _super.prototype.workWithScrollPosition.call(this, newY);
                //  console.log('VVVVVVVVVVVVVVVVVV');
                var max_1 = -1;
                this.titles.forEach(function (item, index) {
                    if (index > 0) {
                        if (_this.getOffsetTop(item.element.nativeElement) - 60 <= newY) {
                            max_1 = index - 1;
                        }
                    }
                    // console.log('-----------');
                });
                this.paging.pages[2] = max_1;
            }
            var percent = Math.round((newY - this.getOffsetTop(this.element.nativeElement))
                / (this.element.nativeElement.clientHeight - window.innerHeight) * 100);
            //   console.log('page1 percent:', percent);
            if (percent >= 0 && percent <= 100) {
                this.track.track('page2-scroll-percent:', percent.toString());
            }
        }
        // console.log('=============');
    };
    Page2Component.prototype.scrollToElement = function (element) {
        __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(this, 0.4, { scroll: this.getOffsetTop(element.nativeElement) - 55, ease: __WEBPACK_IMPORTED_MODULE_0_gsap__["Sine"].easeOut });
    };
    return Page2Component;
}(__WEBPACK_IMPORTED_MODULE_1__page__["a" /* Page */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_6" /* ViewChild */])('menu'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_menu_menu_component__["a" /* MenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_menu_menu_component__["a" /* MenuComponent */]) === "function" && _a || Object)
], Page2Component.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_8" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_5__title_title_component__["a" /* TitleComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_core__["_9" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_core__["_9" /* QueryList */]) === "function" && _b || Object)
], Page2Component.prototype, "titles", void 0);
Page2Component = Page2Component_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_5" /* Component */])({
        selector: 'app-page2',
        template: __webpack_require__("../../../../../src/app/page2/page2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page2/page2.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_6__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_0" /* forwardRef */])(function () { return Page2Component_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_core__["M" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__paging_service_service__["a" /* PagingServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__paging_service_service__["a" /* PagingServiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__tracking_service__["a" /* TrackingService */]) === "function" && _e || Object])
], Page2Component);

var Page2Component_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=page2.component.js.map

/***/ }),

/***/ "../../../../../src/app/paging-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagingServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagingServiceService = (function () {
    function PagingServiceService() {
        /* this._current = parseInt(this.getParameterByName('page'), 10);
         if (isNaN(this._current)) {
           this._current = 0;
         }*/
        this.pages = [-1];
        this.enable = [true, true, true];
        this._current = -1;
        this.emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.pageEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    Object.defineProperty(PagingServiceService.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (num) {
            if (this._current !== num) {
                this._current = num;
                this.pageEmitter.emit(num);
                window.history.pushState({}, '', this.UpdateQueryString('page', num, window.location.href));
                for (var i = 0; i < this.pages.length; i++) {
                    if (i !== num) {
                        this.pages[i] = -1;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PagingServiceService.prototype.UpdateQueryString = function (key, value, url) {
        if (!url) {
            url = window.location.href;
        }
        ;
        var re = new RegExp('([?&])' + key + '=.*?(&|#|$)(.*)', 'gi');
        var hash;
        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null) {
                return url.replace(re, '$1' + key + '=' + value + '$2$3');
            }
            else {
                hash = url.split('#');
                url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
                if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                    url += '#' + hash[1];
                }
                return url;
            }
        }
        else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?';
                hash = url.split('#');
                url = hash[0] + separator + key + '=' + value;
                if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                    url += '#' + hash[1];
                }
                return url;
            }
            else {
                return url;
            }
        }
    };
    return PagingServiceService;
}());
PagingServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PagingServiceService);

//# sourceMappingURL=paging-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/sharing-block/sharing-block.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"sharing\">\n                        <div class=\"fb\" (click)=\"this.share($event, 'fb')\"></div>\n                        <div class=\"vk\" (click)=\"this.share($event, 'vk')\"></div>\n                        <div class=\"tw\" (click)=\"this.share($event, 'tw')\"></div>\n                    </div>"

/***/ }),

/***/ "../../../../../src/app/sharing-block/sharing-block.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sharing {\n  font-size: 0;\n}\n.sharing div {\n  cursor: pointer;\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n}\n.sharing div:hover {\n  opacity: 0.8s;\n}\n.sharing div:not(:last-child) {\n  margin-right: 38px;\n}\n.sharing div.fb {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/fb.svg") + ");\n}\n.sharing div.vk {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/vk.svg") + ");\n}\n.sharing div.tw {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/tw.svg") + ");\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sharing-block/sharing-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharingBlockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharingBlockComponent = (function () {
    function SharingBlockComponent() {
        this.page = 0;
    }
    SharingBlockComponent.prototype.ngOnInit = function () {
    };
    SharingBlockComponent.prototype.share = function (event, network) {
        event.preventDefault();
        event.stopPropagation();
        var link = 'http://darknet.lenta.ru/?page=' + this.page;
        var description = "\u041F\u043B\u043E\u0449\u0430\u0434\u043A\u0438 \u0432 \u0441\u0435\u0442\u0438 Tor \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442 \u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u044B \u0440\u0443\u0431\u043B\u0435\u0439, \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u044F \u0443\u043B\u0438\u0446\u044B \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u043C\u0438 \u0441 \u043D\u0430\u0440\u043A\u043E\u0442\u0438\u043A\u0430\u043C\u0438. \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0430\u044F \u0438\u0437 \u043D\u0438\u0445, RAMP, \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 100 \u0433\u043E\u0440\u043E\u0434\u0430\u0445, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044F \u0441\u043E\u0442\u043D\u0438 \u0442\u044B\u0441\u044F\u0447 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043C\u0430\u0440\u0438\u0445\u0443\u0430\u043D\u043E\u0439, \u043A\u043E\u043A\u0430\u0438\u043D\u043E\u043C \u0438 \u043F\u0441\u0438\u0445\u043E\u0434\u0435\u043B\u0438\u043A\u0430\u043C\u0438.";
        var title = 'Очень темные дела';
        var twitterText = 'Очень темные дела ';
        var image = 'http://darknet.lenta.ru/assets/share.png';
        title = encodeURIComponent(title);
        description = encodeURIComponent(description);
        twitterText = encodeURIComponent(twitterText);
        if (network === 'vk') {
            var url = 'http://vk.com/share.php?url=' + link + '&description=' + description + '&image=' + image + '&title=' + title;
            window.open(url, '_blank', 'width=400,height=500');
        }
        else if (network === 'fb') {
            var url = 'https://www.facebook.com/sharer/sharer.php?u=' + link;
            window.open(url, '_blank', 'width=400,height=500');
        }
        else if (network === 'tw') {
            var url = 'https://twitter.com/intent/tweet?original_referer=' + link + '&text=' + twitterText + '&tw_p=tweetbutton&url=' + link;
            window.open(url, '_blank', 'width=400,height=500');
        }
    };
    return SharingBlockComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('page'),
    __metadata("design:type", Object)
], SharingBlockComponent.prototype, "page", void 0);
SharingBlockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-sharing-block',
        template: __webpack_require__("../../../../../src/app/sharing-block/sharing-block.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sharing-block/sharing-block.component.less")]
    }),
    __metadata("design:paramtypes", [])
], SharingBlockComponent);

//# sourceMappingURL=sharing-block.component.js.map

/***/ }),

/***/ "../../../../../src/app/side-photo/side-photo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"nameBlock\">\n    <div class=\"name\" *ngFor=\"let item of this.name.split(' ')\">\n      <div class=\"wrapper\">\n        {{item}}&nbsp;\n      </div>\n    </div>\n  </div>\n\n  <div class=\"photo\">\n    <img src=\"./assets/images/photos/{{this.photo}}\" alt=\"{{this.name}}\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/side-photo/side-photo.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body .nameBlock {\n  max-width: 152px;\n  margin-bottom: 22px;\n}\n.body .nameBlock .name {\n  display: inline-block;\n  background-color: #666666;\n  margin-bottom: -2px;\n}\n.body .nameBlock .name .wrapper {\n  color: white;\n  font-family: \"Roboto Mono\";\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 15px;\n  margin-bottom: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-photo/side-photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePhotoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidePhotoComponent = (function () {
    function SidePhotoComponent() {
        this.name = '';
        this.photo = '';
    }
    SidePhotoComponent.prototype.ngOnInit = function () {
    };
    return SidePhotoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('name'),
    __metadata("design:type", Object)
], SidePhotoComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('photo'),
    __metadata("design:type", Object)
], SidePhotoComponent.prototype, "photo", void 0);
SidePhotoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-side-photo',
        template: __webpack_require__("../../../../../src/app/side-photo/side-photo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-photo/side-photo.component.less")]
    }),
    __metadata("design:paramtypes", [])
], SidePhotoComponent);

//# sourceMappingURL=side-photo.component.js.map

/***/ }),

/***/ "../../../../../src/app/stuff-item/stuff-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block\" [class.opacity]=\"this.value==0\">\n  <div class=\"title\" (click)=\"this.showMobileDescription()\">\n    <div class=\"hover\" *ngIf=\"this.key.id!=4\" [class.show]=\"this.showHover\">\n      <div class=\"title\">{{this.key.name}}</div>\n      <div class=\"text\" [innerHTML]=\"this.key.description\"></div>\n      <div class=\"close\" (click)=\"this.closeMobileDescription($event)\"></div>\n\n    </div>\n    {{this.key.name}}\n    <div class=\"num-mobile\" [class.hide]=\"this.value==0\">{{this.value}}</div>\n  </div>\n\n  <div class=\"fill\" #fill>\n    <div class=\"now\" [style.width]=\"this.getWidth()\" [class.hide]=\"this.value==0\"></div>\n    <div class=\"past\" [style.width]=\"this.getPastWidth()\" [class.hide]=\"this.value==0\"></div>\n    <div class=\"num\" [style.left]=\"this.getNumLeft()\" #num [class.hide]=\"this.value==0\">{{this.value}}</div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/stuff-item/stuff-item.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".block {\n  width: 100%;\n  display: block;\n  background-color: #A6A6A6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 16px;\n  margin-bottom: 4px;\n  position: relative;\n  transition: ease 0.3s opacity;\n}\n@media (max-width: 767px) {\n  .block {\n    display: block;\n    background-color: white;\n    padding-left: 0;\n  }\n}\n.block .title {\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  width: 205px;\n  color: #666666;\n  line-height: 12px;\n  padding-top: 6px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default;\n}\n@media (max-width: 767px) {\n  .block .title {\n    display: block;\n    margin-bottom: 4px;\n  }\n}\n.block .title .hover {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 221px;\n  right: 0;\n  background-color: white;\n  padding: 16px;\n  opacity: 0;\n  z-index: 10;\n  padding-top: 4px;\n  transition: ease 0.3s opacity;\n  padding-bottom: 3px;\n}\n.block .title .hover .text {\n  line-height: 20px;\n}\n.block .title .hover.show {\n  display: block;\n  opacity: 1;\n}\n.block .title .hover .title {\n  display: none;\n}\n@media (max-width: 767px) {\n  .block .title .hover .title {\n    display: block;\n    font-family: \"Roboto Mono\";\n    font-weight: 500;\n    font-size: 18px;\n    color: black;\n    margin-bottom: 20px;\n  }\n}\n.block .title .hover .close {\n  display: none;\n  position: fixed;\n  top: 68px;\n  right: 24px;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/stuff/close.svg") + ");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n@media (max-width: 767px) {\n  .block .title .hover .close {\n    display: block;\n  }\n}\n@media (max-width: 767px) {\n  .block .title .hover {\n    font-size: 16px;\n    line-height: 20px;\n    position: fixed;\n    top: 48px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 10;\n    pointer-events: all;\n    padding-top: 16px;\n    display: none;\n  }\n}\n.block .title .num-mobile {\n  display: none;\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: black;\n  line-height: 11px;\n  padding-top: 6px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.block .title .num-mobile.hide {\n  opacity: 0;\n}\n@media (max-width: 767px) {\n  .block .title .num-mobile {\n    display: block;\n  }\n}\n@media (min-width: 767px) {\n  .block .title:hover .hover {\n    opacity: 1;\n  }\n}\n.block .fill {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: auto;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .block .fill {\n    display: block;\n    height: 4px;\n    width: 100%;\n  }\n}\n.block .fill .num {\n  font-family: \"Roboto Mono\";\n  font-size: 16px;\n  color: black;\n  position: absolute;\n  line-height: 11px;\n  padding-top: 6px;\n  transition: ease 0.3s left, ease 0.3s opacity;\n  z-index: 2;\n}\n@media (max-width: 767px) {\n  .block .fill .num {\n    display: none;\n  }\n}\n.block .fill .num.hide {\n  opacity: 0;\n}\n.block .fill .past {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 34%;\n  background-color: #95D3D7;\n  opacity: 0.4;\n  transition: ease 0.3s width, ease 0.3s opacity;\n}\n@media (max-width: 767px) {\n  .block .fill .past {\n    background-color: #E5E5E5;\n    opacity: 1;\n  }\n}\n.block .fill .now {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 15%;\n  height: 100%;\n  background-color: #95D3D7;\n  transition: ease 0.3s width, ease 0.3s opacity;\n  z-index: 2;\n}\n@media (max-width: 767px) {\n  .block .fill .now {\n    background-color: #3FD89B;\n  }\n}\n.block .fill .now.hide {\n  opacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stuff-item/stuff-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuffItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StuffItemComponent = (function () {
    function StuffItemComponent(element) {
        this.element = element;
        this.value = 0;
        this.max = 0;
        this.all = 0;
        this.showHover = false;
    }
    StuffItemComponent.prototype.ngOnInit = function () {
    };
    StuffItemComponent.prototype.getNumLeft = function () {
        var fillWidth = this.fill.nativeElement.clientWidth;
        var numWidth = this.num.nativeElement.clientWidth;
        var percent = this.value / this.max;
        if (window.innerWidth > 767) {
            percent = Math.max(0.01, percent);
        }
        else {
            percent = Math.max(0.03, percent);
        }
        var newPosition = fillWidth * percent + 8;
        if (newPosition + numWidth + 16 > fillWidth) {
            newPosition = fillWidth - numWidth - 16;
        }
        return newPosition + 'px';
    };
    StuffItemComponent.prototype.closeMobileDescription = function (event) {
        document.body.style.overflow = '';
        event.stopPropagation();
        this.showHover = false;
    };
    StuffItemComponent.prototype.showMobileDescription = function () {
        if (window.innerWidth <= 767) {
            this.showHover = true;
            document.body.style.overflow = 'hidden';
        }
    };
    StuffItemComponent.prototype.getPastWidth = function () {
        if (window.innerWidth > 767) {
            return Math.max(1, this.key.all / this.max * 100) + '%';
        }
        else {
            return Math.max(3, this.key.all / this.max * 100) + '%';
        }
    };
    StuffItemComponent.prototype.getWidth = function () {
        if (window.innerWidth > 767) {
            return Math.max(1, this.value / this.max * 100) + '%';
        }
        else {
            return Math.max(3, this.value / this.max * 100) + '%';
        }
    };
    return StuffItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('key'),
    __metadata("design:type", Object)
], StuffItemComponent.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('value'),
    __metadata("design:type", Object)
], StuffItemComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('max'),
    __metadata("design:type", Object)
], StuffItemComponent.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('all'),
    __metadata("design:type", Object)
], StuffItemComponent.prototype, "all", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('fill'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], StuffItemComponent.prototype, "fill", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('num'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], StuffItemComponent.prototype, "num", void 0);
StuffItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-stuff-item',
        template: __webpack_require__("../../../../../src/app/stuff-item/stuff-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stuff-item/stuff-item.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _c || Object])
], StuffItemComponent);

var _a, _b, _c;
//# sourceMappingURL=stuff-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/title/title.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" [class.light]=\"this.light\" [class.noShadow]=\"!this.light\" [class.glytch]=\"this.glytch\">\n  <div class=\"numBlock\">\n    <div class=\"num\">\n      <div class=\"wrapper\">{{this.num}}</div>\n    </div>\n\n    <div class=\"num\" [class.light]=\"this.light\" *ngIf=\"this.glytch\">\n      <div class=\"wrapper\">{{this.num}}</div>\n    </div>\n    <div class=\"num\" [class.light]=\"this.light\" *ngIf=\"this.glytch\">\n      <div class=\"wrapper\">{{this.num}}</div>\n    </div>\n    <div class=\"num\" [class.light]=\"this.light\" *ngIf=\"this.glytch\">\n      <div class=\"wrapper\">{{this.num}}</div>\n    </div>\n    <div class=\"num\" [class.light]=\"this.light\" *ngIf=\"this.glytch\">\n      <div class=\"wrapper\">{{this.num}}</div>\n    </div>\n    <div class=\"num\" [class.light]=\"this.light\" *ngIf=\"this.glytch\">\n      <div class=\"wrapper\">{{this.num}}</div>\n    </div>\n    <div class=\"num\" [class.light]=\"this.light\" *ngIf=\"this.glytch\">\n      <div class=\"wrapper\">{{this.num}}</div>\n    </div>\n\n  </div>\n\n  <div class=\"blockBlock\">\n    <div class=\"block\"></div>\n    <div class=\"block\" [class.light]=\"this.light\" *ngIf=\"this.glytch\"></div>\n    <div class=\"block\" [class.light]=\"this.light\" *ngIf=\"this.glytch\"></div>\n    <div class=\"block\" [class.light]=\"this.light\" *ngIf=\"this.glytch\"></div>\n    <div class=\"block\" [class.light]=\"this.light\" *ngIf=\"this.glytch\"></div>\n    <div class=\"block\" [class.light]=\"this.light\" *ngIf=\"this.glytch\"></div>\n    <div class=\"block\" [class.light]=\"this.light\" *ngIf=\"this.glytch\"></div>\n  </div>\n  <div class=\"titleBlock\"  [class.light]=\"!this.global.color\" >\n    <div class=\"title\" [class.light]=\"this.light\" [attr.data]=\"this.title\">\n      {{this.title}}\n    </div>\n    <div class=\"title\" [class.light]=\"this.light\" [attr.data]=\"this.title\" *ngIf=\"this.glytch\">\n      {{this.title}}\n    </div>\n    <div class=\"title\" [class.light]=\"this.light\" [attr.data]=\"this.title\" *ngIf=\"this.glytch\">\n      {{this.title}}\n    </div>\n    <div class=\"title\" [class.light]=\"this.light\" [attr.data]=\"this.title\" *ngIf=\"this.glytch\">\n      {{this.title}}\n    </div>\n    <div class=\"title\" [class.light]=\"this.light\" [attr.data]=\"this.title\" *ngIf=\"this.glytch\">\n      {{this.title}}\n    </div>\n    <div class=\"title\" [class.light]=\"this.light\" [attr.data]=\"this.title\" *ngIf=\"this.glytch\">\n      {{this.title}}\n    </div>\n    <div class=\"title\" [class.light]=\"this.light\" [attr.data]=\"this.title\" *ngIf=\"this.glytch\">\n      {{this.title}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/title/title.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n.body {\n  width: 100%;\n  position: relative;\n  font-size: 0;\n  margin-left: -52px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  margin-bottom: 26px;\n}\n@media (max-width: 850px) {\n  .body {\n    margin-left: -104px;\n  }\n}\n@media (max-width: 767px) {\n  .body {\n    margin-left: 0;\n    display: block;\n  }\n}\n.body .num {\n  color: black;\n  background-color: #707070;\n  font-family: \"Roboto Slab\";\n  font-size: 18px;\n  display: inline-block;\n  margin-right: 20px;\n  vertical-align: middle;\n  font-weight: bold;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n.body .num .wrapper {\n  line-height: 15px;\n  margin-bottom: 5px;\n}\n.body .num:nth-child(2) {\n  position: absolute;\n  top: 0;\n  left: 1px;\n  -webkit-animation: glytch1 0.27s infinite linear alternate-reverse;\n          animation: glytch1 0.27s infinite linear alternate-reverse;\n  text-shadow: 1px 0 green;\n}\n.body .num:nth-child(3) {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  -webkit-animation: glytch1 0.2s infinite linear alternate-reverse;\n          animation: glytch1 0.2s infinite linear alternate-reverse;\n  text-shadow: 1px 0 red;\n}\n.body .num:nth-child(4) {\n  position: absolute;\n  top: 0;\n  left: 1px;\n  -webkit-animation: glytch1 0.23s infinite linear alternate-reverse;\n          animation: glytch1 0.23s infinite linear alternate-reverse;\n  text-shadow: 1px 0 blue;\n}\n.body .num:nth-child(5) {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  -webkit-animation: glytch1 0.27s infinite linear alternate-reverse;\n          animation: glytch1 0.27s infinite linear alternate-reverse;\n  text-shadow: 1px 0 green;\n}\n.body .num:nth-child(6) {\n  position: absolute;\n  top: 0;\n  left: 1px;\n  -webkit-animation: glytch1 0.25s infinite linear alternate-reverse;\n          animation: glytch1 0.25s infinite linear alternate-reverse;\n  text-shadow: 1px 0 blue;\n}\n.body .num:nth-child(7) {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  -webkit-animation: glytch1 0.21s infinite linear alternate-reverse;\n          animation: glytch1 0.21s infinite linear alternate-reverse;\n  text-shadow: 1px 0 red;\n}\n.body .numBlock {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  position: relative;\n}\n@media (max-width: 767px) {\n  .body .numBlock {\n    margin-bottom: 10px;\n  }\n}\n.body .blockBlock {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  position: relative;\n  vertical-align: middle;\n}\n@media (max-width: 767px) {\n  .body .blockBlock {\n    display: none;\n  }\n}\n.body .block {\n  vertical-align: middle;\n  width: 68px;\n  height: 32px;\n  background-color: #707070;\n  margin-right: 16px;\n  display: inline-block;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n@media (max-width: 850px) {\n  .body .block {\n    margin-right: 32px;\n  }\n}\n.body .block:nth-child(2) {\n  position: absolute;\n  top: 0;\n  left: 2px;\n  -webkit-animation: glytch0 0.27s infinite linear alternate-reverse;\n          animation: glytch0 0.27s infinite linear alternate-reverse;\n  text-shadow: 1px 0 green;\n}\n.body .block:nth-child(3) {\n  position: absolute;\n  top: 0;\n  left: -3px;\n  -webkit-animation: glytch0 0.2s infinite linear alternate-reverse;\n          animation: glytch0 0.2s infinite linear alternate-reverse;\n  text-shadow: 1px 0 red;\n}\n.body .block:nth-child(4) {\n  position: absolute;\n  top: 0;\n  left: 3px;\n  -webkit-animation: glytch0 0.23s infinite linear alternate-reverse;\n          animation: glytch0 0.23s infinite linear alternate-reverse;\n  text-shadow: 1px 0 blue;\n}\n.body .block:nth-child(5) {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  -webkit-animation: glytch0 0.27s infinite linear alternate-reverse;\n          animation: glytch0 0.27s infinite linear alternate-reverse;\n  text-shadow: 1px 0 green;\n}\n.body .block:nth-child(6) {\n  position: absolute;\n  top: 0;\n  left: 2px;\n  -webkit-animation: glytch0 0.25s infinite linear alternate-reverse;\n          animation: glytch0 0.25s infinite linear alternate-reverse;\n  text-shadow: 1px 0 blue;\n}\n.body .block:nth-child(7) {\n  position: absolute;\n  top: 0;\n  left: -4px;\n  -webkit-animation: glytch0 0.15s infinite linear alternate-reverse;\n          animation: glytch0 0.15s infinite linear alternate-reverse;\n  text-shadow: 1px 0 red;\n}\n.body .titleBlock {\n  position: relative;\n}\n.body .titleBlock.light .light {\n  color: black;\n  background-color: white!important;\n}\n.body .title {\n  vertical-align: middle;\n  display: inline-block;\n  font-size: 48px;\n  font-family: \"Roboto Slab\";\n  font-weight: 300;\n  line-height: 48px;\n  letter-spacing: 4px;\n  max-width: 700px;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  position: relative;\n  transition: ease 0.3s background-color, 0.3s ease color;\n}\n@media (max-width: 767px) {\n  .body .title {\n    width: 100%;\n    font-size: 26px;\n    line-height: 28px;\n  }\n}\n.body .title:nth-child(2) {\n  position: absolute;\n  top: 0;\n  left: -4px;\n  -webkit-animation: glytch0 0.25s infinite linear alternate-reverse;\n          animation: glytch0 0.25s infinite linear alternate-reverse;\n  text-shadow: 1px 0 green;\n  background-color: #a0a0a0;\n}\n.body .title:nth-child(2).light {\n  background-color: black;\n}\n.body .title:nth-child(3) {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  -webkit-animation: glytch0 0.4s infinite linear alternate-reverse;\n          animation: glytch0 0.4s infinite linear alternate-reverse;\n  text-shadow: 1px 0 red;\n  background-color: #a0a0a0;\n}\n.body .title:nth-child(3).light {\n  background-color: black;\n}\n.body .title:nth-child(4) {\n  position: absolute;\n  top: 0;\n  left: -15px;\n  -webkit-animation: glytch0 0.15s infinite linear alternate-reverse;\n          animation: glytch0 0.15s infinite linear alternate-reverse;\n  text-shadow: 1px 0 blue;\n  background-color: #a0a0a0;\n}\n.body .title:nth-child(4).light {\n  background-color: black;\n}\n.body .title:nth-child(5) {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  -webkit-animation: glytch0 0.27s infinite linear alternate-reverse;\n          animation: glytch0 0.27s infinite linear alternate-reverse;\n  text-shadow: 1px 0 green;\n  background-color: #a0a0a0;\n}\n.body .title:nth-child(5).light {\n  background-color: black;\n}\n.body .title:nth-child(6) {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  -webkit-animation: glytch0 0.2s infinite linear alternate-reverse;\n          animation: glytch0 0.2s infinite linear alternate-reverse;\n  text-shadow: 1px 0 blue;\n  background-color: #a0a0a0;\n}\n.body .title:nth-child(6).light {\n  left: -3px;\n  background-color: black;\n}\n.body .title:nth-child(7) {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  -webkit-animation: glytch0 0.24s infinite linear alternate-reverse;\n          animation: glytch0 0.24s infinite linear alternate-reverse;\n  text-shadow: 1px 0 red;\n  background-color: #a0a0a0;\n}\n.body .title:nth-child(7).light {\n  background-color: black;\n}\n.body.light {\n  margin-left: -39px;\n}\n@media (max-width: 850px) {\n  .body.light {\n    margin-left: -90px;\n  }\n}\n@media (max-width: 767px) {\n  .body.light {\n    margin-left: 0;\n  }\n}\n.body.light .num {\n  color: white;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  background-color: #404040;\n}\n.body.light .numBlock {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n}\n.body.light .blockBlock {\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n}\n.body.light .block {\n  background-color: #404040;\n  height: auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  height: 100%;\n}\n.body.light .title {\n  color: white;\n}\n.body.noShadow .numBlock div {\n  text-shadow: none!important;\n}\n.body.noShadow .blockBlock div {\n  text-shadow: none!important;\n}\n.body.noShadow .titleBlock div {\n  text-shadow: none!important;\n}\n@-webkit-keyframes glytch0 {\n  /*  0% {\n        clip: rect(00px, auto, 32px, 0);\n    }\n    100% {\n        clip: rect(120px, auto, 160px, 0);\n    }*/\n  0% {\n    -webkit-clip-path: inset(0px 0px 30px 0px);\n            clip-path: inset(0px 0px 30px 0px);\n    clip: rect(0px, auto, 32px, 0);\n  }\n  100% {\n    -webkit-clip-path: inset(30px 0px 0px 0px);\n            clip-path: inset(30px 0px 0px 0px);\n    clip: rect(120px, auto, 160px, 0);\n  }\n}\n@keyframes glytch0 {\n  /*  0% {\n        clip: rect(00px, auto, 32px, 0);\n    }\n    100% {\n        clip: rect(120px, auto, 160px, 0);\n    }*/\n  0% {\n    -webkit-clip-path: inset(0px 0px 30px 0px);\n            clip-path: inset(0px 0px 30px 0px);\n    clip: rect(0px, auto, 32px, 0);\n  }\n  100% {\n    -webkit-clip-path: inset(30px 0px 0px 0px);\n            clip-path: inset(30px 0px 0px 0px);\n    clip: rect(120px, auto, 160px, 0);\n  }\n}\n@-webkit-keyframes glytch1 {\n  0% {\n    clip: rect(0px, auto, 5px, 0);\n  }\n  100% {\n    clip: rect(20px, auto, 30px, 0);\n  }\n}\n@keyframes glytch1 {\n  0% {\n    clip: rect(0px, auto, 5px, 0);\n  }\n  100% {\n    clip: rect(20px, auto, 30px, 0);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleComponent = (function (_super) {
    __extends(TitleComponent, _super);
    function TitleComponent(element, global) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.global = global;
        _this.num = '';
        _this.light = false;
        _this.glytch = false;
        _this.title = '';
        return _this;
    }
    TitleComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return TitleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('num'),
    __metadata("design:type", Object)
], TitleComponent.prototype, "num", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('light'),
    __metadata("design:type", Object)
], TitleComponent.prototype, "light", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('glytch'),
    __metadata("design:type", Object)
], TitleComponent.prototype, "glytch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])('title'),
    __metadata("design:type", Object)
], TitleComponent.prototype, "title", void 0);
TitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-title',
        template: __webpack_require__("../../../../../src/app/title/title.component.html"),
        styles: [__webpack_require__("../../../../../src/app/title/title.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */]) === "function" && _b || Object])
], TitleComponent);

var _a, _b;
//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ "../../../../../src/app/tracking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackingService = (function () {
    function TrackingService() {
    }
    TrackingService.prototype.track = function (category, label) {
        ga('send', 'event', category, label);
    };
    return TrackingService;
}());
TrackingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TrackingService);

//# sourceMappingURL=tracking.service.js.map

/***/ }),

/***/ "../../../../../src/app/yellow-ramp/yellow-ramp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" [class.activated]=\"this.isActivated\" [class.goWhite]=\"this.currentNarrativeIndex>=2\" [class.light]=\"!this.global.color\">\n  <div class=\"main\" [innerHTML]=\"this.title\">\n\n  </div>\n  <div class=\"item\">\n    <div class=\"inner\" [innerHTML]=\"this.title\">\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"inner\" [innerHTML]=\"this.title\">\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"inner\" [innerHTML]=\"this.title\">\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"inner\" [innerHTML]=\"this.title\">\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"inner\" [innerHTML]=\"this.title\">\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"inner\" [innerHTML]=\"this.title\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/yellow-ramp/yellow-ramp.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  display: block;\n  font-family: \"Roboto Mono\";\n  font-weight: 900;\n  color: #ffb200;\n  position: relative;\n  font-size: 70px;\n  line-height: 53px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  opacity: 0;\n  letter-spacing: 10px;\n  transition: ease 0.5s opacity, color ease 0.3s;\n}\n@media (max-width: 1022px) {\n  .body {\n    font-size: 60px;\n  }\n}\n@media (max-width: 850px) {\n  .body {\n    font-size: 48px;\n  }\n}\n.body /deep/ span {\n  font-size: 30px;\n}\n.body.activated {\n  opacity: 1;\n}\n.body.goWhite {\n  color: #8d8d85;\n  font-size: 30px;\n  line-height: 25px;\n  transition: font-size ease 1s, color ease 1s, line-height ease 1s;\n}\n@media (max-width: 767px) {\n  .body.goWhite {\n    line-height: 30px;\n  }\n}\n.body.goWhite .item {\n  transition: ease 1s opacity;\n  opacity: 0;\n}\n.body .main {\n  transition: ease 0.5s color;\n}\n@media (max-width: 767px) {\n  .body .main {\n    text-align: center;\n  }\n}\n.body .item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  left: 4px;\n  -webkit-animation: glytch0 0.12s infinite linear alternate-reverse;\n          animation: glytch0 0.12s infinite linear alternate-reverse;\n  background-color: black;\n  transition: font-size ease 0.5s, background-color ease 0.3s;\n}\n.body .item .inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  text-shadow: -2px 0 red;\n  background-color: black;\n  transition: ease 0.3s background-color;\n}\n@media (max-width: 767px) {\n  .body .item .inner {\n    text-align: center;\n  }\n}\n.body .item:nth-child(2) {\n  left: -4px;\n  -webkit-animation: glytch0 0.17s infinite linear alternate-reverse;\n          animation: glytch0 0.17s infinite linear alternate-reverse;\n}\n.body .item:nth-child(2) .inner {\n  text-shadow: 2px 0 green;\n}\n.body .item:nth-child(3) {\n  left: -4px;\n  -webkit-animation: glytch0 0.11s infinite linear alternate-reverse;\n          animation: glytch0 0.11s infinite linear alternate-reverse;\n}\n.body .item:nth-child(3) .inner {\n  text-shadow: 2px 0 green;\n}\n.body .item:nth-child(4) {\n  left: -5px;\n  -webkit-animation: glytch0 0.22s infinite linear alternate-reverse;\n          animation: glytch0 0.22s infinite linear alternate-reverse;\n}\n.body .item:nth-child(4) .inner {\n  text-shadow: -2px 0 red;\n}\n.body .item:nth-child(5) {\n  left: 2px;\n  -webkit-animation: glytch0 0.15s infinite linear alternate-reverse;\n          animation: glytch0 0.15s infinite linear alternate-reverse;\n}\n.body.light {\n  color: blue;\n}\n.body.light.goWhite {\n  color: #8d8d85;\n}\n.body.light .item {\n  background-color: white;\n}\n.body.light .item .inner {\n  background-color: white;\n}\n@-webkit-keyframes glytch0 {\n  0% {\n    clip: rect(0px, auto, 5%, 0);\n    -webkit-clip-path: inset(0px 0px 5% 0px);\n            clip-path: inset(0px 0px 5% 0px);\n  }\n  100% {\n    clip: rect(95%, auto, 5%, 0);\n    -webkit-clip-path: inset(95% 0px 0px 0px);\n            clip-path: inset(95% 0px 0px 0px);\n  }\n}\n@keyframes glytch0 {\n  0% {\n    clip: rect(0px, auto, 5%, 0);\n    -webkit-clip-path: inset(0px 0px 5% 0px);\n            clip-path: inset(0px 0px 5% 0px);\n  }\n  100% {\n    clip: rect(95%, auto, 5%, 0);\n    -webkit-clip-path: inset(95% 0px 0px 0px);\n            clip-path: inset(95% 0px 0px 0px);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/yellow-ramp/yellow-ramp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YellowRampComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YellowRampComponent = YellowRampComponent_1 = (function (_super) {
    __extends(YellowRampComponent, _super);
    function YellowRampComponent(element, global) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.global = global;
        _this.title = 'ОЧЕНЬ<span> </span>ТЕМНЫЕ<span> </span>ДЕЛА';
        return _this;
    }
    YellowRampComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    return YellowRampComponent;
}(__WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */]));
YellowRampComponent = YellowRampComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-yellow-ramp',
        template: __webpack_require__("../../../../../src/app/yellow-ramp/yellow-ramp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/yellow-ramp/yellow-ramp.component.less")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_0" /* forwardRef */])(function () { return YellowRampComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */]) === "function" && _b || Object])
], YellowRampComponent);

var YellowRampComponent_1, _a, _b;
//# sourceMappingURL=yellow-ramp.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/close-black.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "close-black.023d788fcb3b4416f6da.svg";

/***/ }),

/***/ "../../../../../src/assets/images/close-blue.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "close-blue.a2f4dd778a4cff7fce8d.svg";

/***/ }),

/***/ "../../../../../src/assets/images/close-magenta.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "close-magenta.e8eaf0775170d5281755.svg";

/***/ }),

/***/ "../../../../../src/assets/images/close.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "close.acc3cb1144dac5a3e98b.svg";

/***/ }),

/***/ "../../../../../src/assets/images/dot-line-white.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dot-line-white.b99c2ed725625066f971.svg";

/***/ }),

/***/ "../../../../../src/assets/images/dot-line.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dot-line.376d14dcdd937adc8322.svg";

/***/ }),

/***/ "../../../../../src/assets/images/fb.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb.4585f6d601f8d5efd9bd.svg";

/***/ }),

/***/ "../../../../../src/assets/images/header/hamb-black-open.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hamb-black-open.1d4941f2ae8420471e85.svg";

/***/ }),

/***/ "../../../../../src/assets/images/header/hamb-black.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hamb-black.b0d9ed0f1e3f6bd27f76.svg";

/***/ }),

/***/ "../../../../../src/assets/images/header/hamb-open.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hamb-open.fce2a2f3f6eba17a4831.svg";

/***/ }),

/***/ "../../../../../src/assets/images/header/hamb.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hamb.210714a0cfa7b64397fd.svg";

/***/ }),

/***/ "../../../../../src/assets/images/lenta-light.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lenta-light.527d04ee9f9e6470d139.svg";

/***/ }),

/***/ "../../../../../src/assets/images/lenta-logo.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lenta-logo.71ec13874b7d0350464e.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/arrow-left-mobile.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow-left-mobile.6761d9bdc6aa9bd21feb.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/arrow-left.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow-left.5584f3e8bd12351bf796.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/arrow-right-mobile.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow-right-mobile.0639aec5ca0f595c33d0.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/arrow-right.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow-right.22f5aba6df98d3d6a815.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/black-down0-mobile.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "black-down0-mobile.86426205ca10bfc444bb.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/black-down0.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "black-down0.7542ac64c560c71fdf24.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/black-down1.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "black-down1.6edbe4828d6fa9cdf65f.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/black-up.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "black-up.23c7dca56b920c9bba24.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/both.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "both.5a5f99f89992448d16ac.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/down0.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "down0.e2fc9ae33526405e24c7.svg";

/***/ }),

/***/ "../../../../../src/assets/images/markets/down1.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "down1.3c486b0bb6955acd1f3f.svg";

/***/ }),

/***/ "../../../../../src/assets/images/page2/paper.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "paper.9d067e87e4e716a5bb54.png";

/***/ }),

/***/ "../../../../../src/assets/images/page2/paper_03.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "paper_03.5f9877d071933cf0d4e4.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/page2/paper_04.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "paper_04.e99dbebe9397f495c703.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/regions/close.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "close.3c08afa2d72e1db8d055.svg";

/***/ }),

/***/ "../../../../../src/assets/images/regions/left.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "left.8cc99bf95f37d0e2a818.svg";

/***/ }),

/***/ "../../../../../src/assets/images/regions/right.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "right.165e252a117d9c0b3cf0.svg";

/***/ }),

/***/ "../../../../../src/assets/images/silkroad/paper.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "paper.9d067e87e4e716a5bb54.png";

/***/ }),

/***/ "../../../../../src/assets/images/stuff/arrow.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow.5eba7f3ab8753ab6848f.svg";

/***/ }),

/***/ "../../../../../src/assets/images/stuff/close.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "close.68c410d2ec778f4a5395.svg";

/***/ }),

/***/ "../../../../../src/assets/images/stuff/mobile-arrow.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mobile-arrow.ead758618e58f3f34b5a.svg";

/***/ }),

/***/ "../../../../../src/assets/images/tw.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tw.ae22b42e568b9ca8dbfc.svg";

/***/ }),

/***/ "../../../../../src/assets/images/vk.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vk.e0e0ee61a6cc6a4e84c5.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activable__ = __webpack_require__("../../../../../src/activable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page = (function (_super) {
    __extends(Page, _super);
    function Page(element) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.narrativeIndex = 0;
        _this.updateCounter = 0;
        _this.lastScroll = 0;
        _this.enabled = true;
        _this.isDestroyed = false;
        window.addEventListener('scroll', function (event) { _this.handleScroll(event); });
        return _this;
    }
    Page.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    Page.prototype.ngAfterViewInit = function () {
        this.handleScroll(null);
    };
    Page.prototype.incrimentNarrativeIndex = function () {
        // super.
        this.narrativeIndex++;
        this.updateVisibility();
    };
    Page.prototype.activate = function () {
        _super.prototype.activate.call(this);
        this.updateVisibility();
    };
    Page.prototype.enable = function () {
        // console.log('enable page', this);
        for (var _i = 0, _a = this.activableQuery.toArray(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item instanceof Page) {
                item.enable();
            }
        }
        this.enabled = true;
        this.handleScroll(null);
    };
    Page.prototype.disable = function () {
        //     console.log('disable page', this);
        for (var _i = 0, _a = this.activableQuery.toArray(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item instanceof Page) {
                item.disable();
                item.deactivate();
            }
        }
        this.enabled = false;
    };
    Page.prototype.updateVisibility = function () {
        if (this.enable) {
            this.handleScroll(this.lastScroll);
        }
    };
    Page.prototype.handleScroll = function (event) {
        if (event === void 0) { event = null; }
        var newY = 0;
        if (event && event.pageY) {
            newY = event.pageY;
        }
        else if (document.documentElement.scrollTop) {
            newY = document.documentElement.scrollTop;
        }
        else {
            newY = document.body.scrollTop;
        }
        // this.trackService.scroll(newY/)
        this.workWithScrollPosition(newY);
    };
    Page.prototype.workWithScrollPosition = function (newY) {
        //   console.log(this, this.isDestroyed, this.isActivated);
        if (this.enable) {
            if (!this.isDestroyed) {
                this.lastScroll = newY;
                if (this.isActivated) {
                    var top = newY;
                    var bottom = newY + window.innerHeight - 5;
                    //  console.log(top, bottom);
                    //   console.log(this, this.activableQuery);
                    if (this.activableQuery) {
                        var array = this.activableQuery.toArray();
                        //  console.log(this, array);
                        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                            var item = array_1[_i];
                            if (!item.isActivated) {
                                // console.log(item.constructor.name);
                                //  const itemTop: number = this.getOffsetTop(item.element.nativeElement);
                                //   const itemBottom: number = itemTop + item.element.nativeElement.clientHeight;
                                // console.log(item, item.top, bottom)
                                if (this.updateCounter === 10) {
                                    item.updateTop();
                                }
                                if (item.top < bottom && this.narrativeIndex >= item.narrativeIndex) {
                                    item.activate();
                                }
                            }
                        }
                    }
                    // console.log('========');
                }
                this.updateCounter++;
                if (this.updateCounter >= 11) {
                    this.updateCounter = 0;
                }
            }
        }
    };
    Page.prototype.getOffsetTop = function (element) {
        // console.log('offsettop:', element, element.parentNode, element.parentElement);
        var offset = 0;
        if (element) {
            offset = element.offsetTop;
            if (element.offsetParent !== document.body) {
                offset += this.getOffsetTop(element.offsetParent);
            }
        }
        return offset;
    };
    return Page;
}(__WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__activable__["a" /* Activable */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* QueryList */]) === "function" && _a || Object)
], Page.prototype, "activableQuery", void 0);
var _a;
//# sourceMappingURL=page.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map