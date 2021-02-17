(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Core CSS required for Ionic components to work properly */\nhtml.ios{--ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}\nhtml.md{--ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif}\nhtml{--ion-font-family: var(--ion-default-font)}\nbody{background:var(--ion-background-color)}\nbody.backdrop-no-scroll{overflow:hidden}\n.ion-color-primary{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56,128,255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}\n.ion-color-secondary{--ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 12,209,232) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;--ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important}\n.ion-color-tertiary{--ion-color-base: var(--ion-color-tertiary, #7044ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112,68,255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important}\n.ion-color-success{--ion-color-base: var(--ion-color-success, #10dc60) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 16,220,96) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;--ion-color-tint: var(--ion-color-success-tint, #28e070) !important}\n.ion-color-warning{--ion-color-base: var(--ion-color-warning, #ffce00) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255,206,0) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important}\n.ion-color-danger{--ion-color-base: var(--ion-color-danger, #f04141) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 240,65,65) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;--ion-color-tint: var(--ion-color-danger-tint, #f25454) !important}\n.ion-color-light{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244,245,248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0,0,0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}\n.ion-color-medium{--ion-color-base: var(--ion-color-medium, #989aa2) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 152,154,162) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;--ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important}\n.ion-color-dark{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34,36,40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}\n.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}\nion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden,[hidden]{display:none !important}\n.ion-page-invisible{opacity:0}\nhtml.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding: 20px}\n@supports (padding-top: 20px){html{--ion-safe-area-top: var(--ion-statusbar-padding)}}\n@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top: constant(safe-area-inset-top);--ion-safe-area-bottom: constant(safe-area-inset-bottom);--ion-safe-area-left: constant(safe-area-inset-left);--ion-safe-area-right: constant(safe-area-inset-right)}}\n@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}\n/* Basic CSS for apps built with Ionic */\naudio,canvas,progress,video{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\nb,strong{font-weight:bold}\nimg{max-width:100%;border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{height:1px;border-width:0;box-sizing:content-box}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}\nlabel,input,select,textarea{font-family:inherit;line-height:normal}\ntextarea{overflow:auto;height:auto;font:inherit;color:inherit}\ntextarea::-webkit-input-placeholder{padding-left:2px}\ntextarea:-ms-input-placeholder{padding-left:2px}\ntextarea::-ms-input-placeholder{padding-left:2px}\ntextarea::placeholder{padding-left:2px}\nform,input,optgroup,select{margin:0;font:inherit;color:inherit}\nhtml input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{cursor:pointer;-webkit-appearance:button}\na,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}\na ion-label,button ion-label{pointer-events:none}\nbutton{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}\n[tappable]{cursor:pointer}\na[disabled],button[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}\ninput[type=\"checkbox\"],input[type=\"radio\"]{padding:0;box-sizing:border-box}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}\nhtml{width:100%;height:100%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}\nhtml.plt-pwa{height:100vh}\nbody{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}\nhtml{font-family:var(--ion-font-family)}\na{background-color:transparent;color:var(--ion-color-primary, #3880ff)}\nh1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}\nh1{margin-top:20px;font-size:26px}\nh2{margin-top:18px;font-size:24px}\nh3{font-size:22px}\nh4{font-size:20px}\nh5{font-size:18px}\nh6{font-size:16px}\nsmall{font-size:75%}\nsub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}\nsup{top:-.5em}\nsub{bottom:-.25em}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding,[no-padding]{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\n.ion-padding,[padding]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding,[padding]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-padding-top,[padding-top]{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}\n.ion-padding-start,[padding-start]{--padding-start: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-start,[padding-start]{padding-left:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}}\n.ion-padding-end,[padding-end]{--padding-end: var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-end,[padding-end]{padding-right:unset;-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-padding-bottom,[padding-bottom]{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n.ion-padding-vertical,[padding-vertical]{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n.ion-padding-horizontal,[padding-horizontal]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-horizontal,[padding-horizontal]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-no-margin,[no-margin]{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}\n.ion-margin,[margin]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin,[margin]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-margin-top,[margin-top]{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}\n.ion-margin-start,[margin-start]{--margin-start: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-start,[margin-start]{margin-left:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}}\n.ion-margin-end,[margin-end]{--margin-end: var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-end,[margin-end]{margin-right:unset;-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-margin-bottom,[margin-bottom]{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n.ion-margin-vertical,[margin-vertical]{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n.ion-margin-horizontal,[margin-horizontal]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-horizontal,[margin-horizontal]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n[float-left]{float:left !important}\n[float-right]{float:right !important}\n[float-start]{float:left !important}\n:host-context([dir=rtl]) [float-start]{float:right !important}\n[float-end]{float:right !important}\n:host-context([dir=rtl]) [float-end]{float:left !important}\n@media (min-width: 576px){[float-sm-left]{float:left !important}[float-sm-right]{float:right !important}[float-sm-start]{float:left !important}:host-context([dir=rtl]) [float-sm-start]{float:right !important}[float-sm-end]{float:right !important}:host-context([dir=rtl]) [float-sm-end]{float:left !important}}\n@media (min-width: 768px){[float-md-left]{float:left !important}[float-md-right]{float:right !important}[float-md-start]{float:left !important}:host-context([dir=rtl]) [float-md-start]{float:right !important}[float-md-end]{float:right !important}:host-context([dir=rtl]) [float-md-end]{float:left !important}}\n@media (min-width: 992px){[float-lg-left]{float:left !important}[float-lg-right]{float:right !important}[float-lg-start]{float:left !important}:host-context([dir=rtl]) [float-lg-start]{float:right !important}[float-lg-end]{float:right !important}:host-context([dir=rtl]) [float-lg-end]{float:left !important}}\n@media (min-width: 1200px){[float-xl-left]{float:left !important}[float-xl-right]{float:right !important}[float-xl-start]{float:left !important}:host-context([dir=rtl]) [float-xl-start]{float:right !important}[float-xl-end]{float:right !important}:host-context([dir=rtl]) [float-xl-end]{float:left !important}}\n.ion-text-center,[text-center]{text-align:center !important}\n.ion-text-justify,[text-justify]{text-align:justify !important}\n.ion-text-start,[text-start]{text-align:start !important}\n.ion-text-end,[text-end]{text-align:end !important}\n.ion-text-left,[text-left]{text-align:left !important}\n.ion-text-right,[text-right]{text-align:right !important}\n.ion-text-nowrap,[text-nowrap]{white-space:nowrap !important}\n.ion-text-wrap,[text-wrap]{white-space:normal !important}\n@media (min-width: 576px){.ion-text-sm-center,[text-sm-center]{text-align:center !important}.ion-text-sm-justify,[text-sm-justify]{text-align:justify !important}.ion-text-sm-start,[text-sm-start]{text-align:start !important}.ion-text-sm-end,[text-sm-end]{text-align:end !important}.ion-text-sm-left,[text-sm-left]{text-align:left !important}.ion-text-sm-right,[text-sm-right]{text-align:right !important}.ion-text-sm-nowrap,[text-sm-nowrap]{white-space:nowrap !important}.ion-text-sm-wrap,[text-sm-wrap]{white-space:normal !important}}\n@media (min-width: 768px){.ion-text-md-center,[text-md-center]{text-align:center !important}.ion-text-md-justify,[text-md-justify]{text-align:justify !important}.ion-text-md-start,[text-md-start]{text-align:start !important}.ion-text-md-end,[text-md-end]{text-align:end !important}.ion-text-md-left,[text-md-left]{text-align:left !important}.ion-text-md-right,[text-md-right]{text-align:right !important}.ion-text-md-nowrap,[text-md-nowrap]{white-space:nowrap !important}.ion-text-md-wrap,[text-md-wrap]{white-space:normal !important}}\n@media (min-width: 992px){.ion-text-lg-center,[text-lg-center]{text-align:center !important}.ion-text-lg-justify,[text-lg-justify]{text-align:justify !important}.ion-text-lg-start,[text-lg-start]{text-align:start !important}.ion-text-lg-end,[text-lg-end]{text-align:end !important}.ion-text-lg-left,[text-lg-left]{text-align:left !important}.ion-text-lg-right,[text-lg-right]{text-align:right !important}.ion-text-lg-nowrap,[text-lg-nowrap]{white-space:nowrap !important}.ion-text-lg-wrap,[text-lg-wrap]{white-space:normal !important}}\n@media (min-width: 1200px){.ion-text-xl-center,[text-xl-center]{text-align:center !important}.ion-text-xl-justify,[text-xl-justify]{text-align:justify !important}.ion-text-xl-start,[text-xl-start]{text-align:start !important}.ion-text-xl-end,[text-xl-end]{text-align:end !important}.ion-text-xl-left,[text-xl-left]{text-align:left !important}.ion-text-xl-right,[text-xl-right]{text-align:right !important}.ion-text-xl-nowrap,[text-xl-nowrap]{white-space:nowrap !important}.ion-text-xl-wrap,[text-xl-wrap]{white-space:normal !important}}\n.ion-text-uppercase,[text-uppercase]{text-transform:uppercase !important}\n.ion-text-lowercase,[text-lowercase]{text-transform:lowercase !important}\n.ion-text-capitalize,[text-capitalize]{text-transform:capitalize !important}\n@media (min-width: 576px){.ion-text-sm-uppercase,[text-sm-uppercase]{text-transform:uppercase !important}.ion-text-sm-lowercase,[text-sm-lowercase]{text-transform:lowercase !important}.ion-text-sm-capitalize,[text-sm-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 768px){.ion-text-md-uppercase,[text-md-uppercase]{text-transform:uppercase !important}.ion-text-md-lowercase,[text-md-lowercase]{text-transform:lowercase !important}.ion-text-md-capitalize,[text-md-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 992px){.ion-text-lg-uppercase,[text-lg-uppercase]{text-transform:uppercase !important}.ion-text-lg-lowercase,[text-lg-lowercase]{text-transform:lowercase !important}.ion-text-lg-capitalize,[text-lg-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 1200px){.ion-text-xl-uppercase,[text-xl-uppercase]{text-transform:uppercase !important}.ion-text-xl-lowercase,[text-xl-lowercase]{text-transform:lowercase !important}.ion-text-xl-capitalize,[text-xl-capitalize]{text-transform:capitalize !important}}\n[align-self-start]{align-self:flex-start !important}\n[align-self-end]{align-self:flex-end !important}\n[align-self-center]{align-self:center !important}\n[align-self-stretch]{align-self:stretch !important}\n[align-self-baseline]{align-self:baseline !important}\n[align-self-auto]{align-self:auto !important}\n[wrap]{flex-wrap:wrap !important}\n[nowrap]{flex-wrap:nowrap !important}\n[wrap-reverse]{flex-wrap:wrap-reverse !important}\n[justify-content-start]{justify-content:flex-start !important}\n[justify-content-center]{justify-content:center !important}\n[justify-content-end]{justify-content:flex-end !important}\n[justify-content-around]{justify-content:space-around !important}\n[justify-content-between]{justify-content:space-between !important}\n[justify-content-evenly]{justify-content:space-evenly !important}\n[align-items-start]{align-items:flex-start !important}\n[align-items-center]{align-items:center !important}\n[align-items-end]{align-items:flex-end !important}\n[align-items-stretch]{align-items:stretch !important}\n[align-items-baseline]{align-items:baseline !important}\n* {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy9nbG9iYWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSw2REFBNkQ7QUNQN0QsU0FBUyw2RkFBNkYsQ0FBQztBQUFBLFFBQVEsMERBQTBELENBQUM7QUFBQSxLQUFLLDBDQUEwQyxDQUFDO0FBQUEsS0FBSyxzQ0FBc0MsQ0FBQztBQUFBLHdCQUF3QixlQUFlLENBQUM7QUFBQSxtQkFBbUIsK0RBQStELDBFQUEwRSx5RUFBeUUsd0ZBQXdGLHNFQUFzRSxtRUFBbUUsQ0FBQztBQUFBLHFCQUFxQixpRUFBaUUsNEVBQTRFLDJFQUEyRSwwRkFBMEYsd0VBQXdFLHFFQUFxRSxDQUFDO0FBQUEsb0JBQW9CLGdFQUFnRSwyRUFBMkUsMEVBQTBFLHlGQUF5Rix1RUFBdUUsb0VBQW9FLENBQUM7QUFBQSxtQkFBbUIsK0RBQStELHlFQUF5RSx5RUFBeUUsd0ZBQXdGLHNF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O0FBQUEsc0JBQXNCLG1DQUFtQyxDQUFDO0FBQUEseUJBQXlCLHVDQUF1QyxDQUFDO0FBQUEsMEJBQTBCLHdDQUF3QyxDQUFDO0FBQUEseUJBQXlCLHVDQUF1QyxDQUFDO0FBQUEsb0JBQW9CLGlDQUFpQyxDQUFDO0FBQUEscUJBQXFCLDZCQUE2QixDQUFDO0FBQUEsa0JBQWtCLCtCQUErQixDQUFDO0FBQUEsc0JBQXNCLDhCQUE4QixDQUFDO0FBQUEsdUJBQXVCLCtCQUErQixDQUFDO0FUdUJoaUM7RUFFSSwwQkFBeUI7RUFFekIsdUJBQXNCO0VBRXRCLHNCQUFxQjtFQUVyQixrQkFBaUIsRUFFaEIiLCJmaWxlIjoic3JjL2dsb2JhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwIEdsb2JhbCBDU1Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgZ2xvYmFsbHkuIFRoZXNlIHN0eWxlcyBhcmUgZm9yXG4vLyB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXG4vLyBhbHNvIHVzZWQgYXMgYW4gZW50cnkgcG9pbnQgdG8gaW1wb3J0IG90aGVyIFNhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlXG4vLyBvdXRwdXQgQ1NTLlxuXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzc1wiO1xuXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcblxuLyogT3B0aW9uYWwgQ1NTIHV0aWxzIHRoYXQgY2FuIGJlIGNvbW1lbnRlZCBvdXQgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzXCI7XG5cblxuKiB7XG5cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgXG4gICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIFxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIFxuICAgIH1cbiIsImh0bWwuaW9zey0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZ9aHRtbC5tZHstLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn1odG1sey0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KX1ib2R5e2JhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpfWJvZHkuYmFja2Ryb3Atbm8tc2Nyb2xse292ZXJmbG93OmhpZGRlbn0uaW9uLWNvbG9yLXByaW1hcnl7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsMTI4LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50fS5pb24tY29sb3Itc2Vjb25kYXJ5ey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksICMwY2QxZTgpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiLCAxMiwyMDksMjMyKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlLCAjMGJiOGNjKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCwgIzI0ZDZlYSkgIWltcG9ydGFudH0uaW9uLWNvbG9yLXRlcnRpYXJ5ey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSwgIzcwNDRmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiwgMTEyLDY4LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSwgIzYzM2NlMCkgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCwgIzdlNTdmZikgIWltcG9ydGFudH0uaW9uLWNvbG9yLXN1Y2Nlc3N7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMxMGRjNjApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiwgMTYsMjIwLDk2KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMGVjMjU0KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQsICMyOGUwNzApICFpbXBvcnRhbnR9Lmlvbi1jb2xvci13YXJuaW5ney0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjZTAwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1yZ2IsIDI1NSwyMDYsMCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSwgI2UwYjUwMCkgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy10aW50LCAjZmZkMzFhKSAhaW1wb3J0YW50fS5pb24tY29sb3ItZGFuZ2Vyey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMDQxNDEpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiLCAyNDAsNjUsNjUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUsICNkMzM5MzkpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50LCAjZjI1NDU0KSAhaW1wb3J0YW50fS5pb24tY29sb3ItbGlnaHR7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNDQsMjQ1LDI0OCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwwLDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwgI2Y1ZjZmOSkgIWltcG9ydGFudH0uaW9uLWNvbG9yLW1lZGl1bXstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTg5YWEyKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiwgMTUyLDE1NCwxNjIpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4Njg4OGYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjYTJhNGFiKSAhaW1wb3J0YW50fS5pb24tY29sb3ItZGFya3stLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzIyMjQyOCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstcmdiLCAzNCwzNiw0MCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50LCAjMzgzYTNlKSAhaW1wb3J0YW50fS5pb24tcGFnZXtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MH1pb24tcm91dGUsaW9uLXJvdXRlLXJlZGlyZWN0LGlvbi1yb3V0ZXIsaW9uLXNlbGVjdC1vcHRpb24saW9uLW5hdi1jb250cm9sbGVyLGlvbi1tZW51LWNvbnRyb2xsZXIsaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLGlvbi1hbGVydC1jb250cm9sbGVyLGlvbi1sb2FkaW5nLWNvbnRyb2xsZXIsaW9uLW1vZGFsLWNvbnRyb2xsZXIsaW9uLXBpY2tlci1jb250cm9sbGVyLGlvbi1wb3BvdmVyLWNvbnRyb2xsZXIsaW9uLXRvYXN0LWNvbnRyb2xsZXIsLmlvbi1wYWdlLWhpZGRlbixbaGlkZGVuXXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH0uaW9uLXBhZ2UtaW52aXNpYmxle29wYWNpdHk6MH1odG1sLnBsdC1pb3MucGx0LWh5YnJpZCxodG1sLnBsdC1pb3MucGx0LXB3YXstLWlvbi1zdGF0dXNiYXItcGFkZGluZzogMjBweH1Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KXtodG1sey0taW9uLXNhZmUtYXJlYS10b3A6IHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZyl9fUBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApKXtodG1sey0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApOy0taW9uLXNhZmUtYXJlYS1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pOy0taW9uLXNhZmUtYXJlYS1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpfX1Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpe2h0bWx7LS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApOy0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTstLWlvbi1zYWZlLWFyZWEtbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpfX1cbiIsImF1ZGlvLGNhbnZhcyxwcm9ncmVzcyx2aWRlb3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1hdWRpbzpub3QoW2NvbnRyb2xzXSl7ZGlzcGxheTpub25lO2hlaWdodDowfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmJvbGR9aW1ne21heC13aWR0aDoxMDAlO2JvcmRlcjowfXN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn1maWd1cmV7bWFyZ2luOjFlbSA0MHB4fWhye2hlaWdodDoxcHg7Ym9yZGVyLXdpZHRoOjA7Ym94LXNpemluZzpjb250ZW50LWJveH1wcmV7b3ZlcmZsb3c6YXV0b31jb2RlLGtiZCxwcmUsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsIG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWxhYmVsLGlucHV0LHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTppbmhlcml0O2xpbmUtaGVpZ2h0Om5vcm1hbH10ZXh0YXJlYXtvdmVyZmxvdzphdXRvO2hlaWdodDphdXRvO2ZvbnQ6aW5oZXJpdDtjb2xvcjppbmhlcml0fXRleHRhcmVhOjpwbGFjZWhvbGRlcntwYWRkaW5nLWxlZnQ6MnB4fWZvcm0saW5wdXQsb3B0Z3JvdXAsc2VsZWN0e21hcmdpbjowO2ZvbnQ6aW5oZXJpdDtjb2xvcjppbmhlcml0fWh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxpbnB1dFt0eXBlPVwicmVzZXRcIl0saW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufWEsYSBkaXYsYSBzcGFuLGEgaW9uLWljb24sYSBpb24tbGFiZWwsYnV0dG9uLGJ1dHRvbiBkaXYsYnV0dG9uIHNwYW4sYnV0dG9uIGlvbi1pY29uLGJ1dHRvbiBpb24tbGFiZWwsLmlvbi10YXBwYWJsZSxbdGFwcGFibGVdLFt0YXBwYWJsZV0gZGl2LFt0YXBwYWJsZV0gc3BhbixbdGFwcGFibGVdIGlvbi1pY29uLFt0YXBwYWJsZV0gaW9uLWxhYmVsLGlucHV0LHRleHRhcmVhe3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb259YSBpb24tbGFiZWwsYnV0dG9uIGlvbi1sYWJlbHtwb2ludGVyLWV2ZW50czpub25lfWJ1dHRvbntib3JkZXI6MDtib3JkZXItcmFkaXVzOjA7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC12YXJpYW50OmluaGVyaXQ7bGluZS1oZWlnaHQ6MTt0ZXh0LXRyYW5zZm9ybTpub25lO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259W3RhcHBhYmxlXXtjdXJzb3I6cG9pbnRlcn1hW2Rpc2FibGVkXSxidXR0b25bZGlzYWJsZWRdLGh0bWwgaW5wdXRbZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixpbnB1dDo6LW1vei1mb2N1cy1pbm5lcntwYWRkaW5nOjA7Ym9yZGVyOjB9aW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLGlucHV0W3R5cGU9XCJyYWRpb1wiXXtwYWRkaW5nOjA7Ym94LXNpemluZzpib3JkZXItYm94fWlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24saW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9dGQsdGh7cGFkZGluZzowfVxuIiwiKntib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCk7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lfWh0bWx7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0ZXh0LXNpemUtYWRqdXN0OjEwMCV9aHRtbC5wbHQtcHdhe2hlaWdodDoxMDB2aH1ib2R5ey1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO3Bvc2l0aW9uOmZpeGVkO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWF4LWhlaWdodDoxMDAlO3RleHQtcmVuZGVyaW5nOm9wdGltaXplTGVnaWJpbGl0eTtvdmVyZmxvdzpoaWRkZW47dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjstd2Via2l0LXVzZXItZHJhZzpub25lOy1tcy1jb250ZW50LXpvb21pbmc6bm9uZTt3b3JkLXdyYXA6YnJlYWstd29yZDtvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6bm9uZTt0ZXh0LXNpemUtYWRqdXN0Om5vbmV9XG4iLCJodG1se2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSl9YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKX1oMSxoMixoMyxoNCxoNSxoNnttYXJnaW4tdG9wOjE2cHg7bWFyZ2luLWJvdHRvbToxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoxLjJ9aDF7bWFyZ2luLXRvcDoyMHB4O2ZvbnQtc2l6ZToyNnB4fWgye21hcmdpbi10b3A6MThweDtmb250LXNpemU6MjRweH1oM3tmb250LXNpemU6MjJweH1oNHtmb250LXNpemU6MjBweH1oNXtmb250LXNpemU6MThweH1oNntmb250LXNpemU6MTZweH1zbWFsbHtmb250LXNpemU6NzUlfXN1YixzdXB7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXN1cHt0b3A6LS41ZW19c3Vie2JvdHRvbTotLjI1ZW19XG4iLCIuaW9uLW5vLXBhZGRpbmcsW25vLXBhZGRpbmddey0tcGFkZGluZy1zdGFydDogMDstLXBhZGRpbmctZW5kOiAwOy0tcGFkZGluZy10b3A6IDA7LS1wYWRkaW5nLWJvdHRvbTogMDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5pb24tcGFkZGluZyxbcGFkZGluZ117LS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1sZWZ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLXBhZGRpbmcsW3BhZGRpbmdde3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9fS5pb24tcGFkZGluZy10b3AsW3BhZGRpbmctdG9wXXstLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy10b3A6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfS5pb24tcGFkZGluZy1zdGFydCxbcGFkZGluZy1zdGFydF17LS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1sZWZ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1wYWRkaW5nLXN0YXJ0LFtwYWRkaW5nLXN0YXJ0XXtwYWRkaW5nLWxlZnQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9fS5pb24tcGFkZGluZy1lbmQsW3BhZGRpbmctZW5kXXstLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZy1lbmQsW3BhZGRpbmctZW5kXXtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9fS5pb24tcGFkZGluZy1ib3R0b20sW3BhZGRpbmctYm90dG9tXXstLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfS5pb24tcGFkZGluZy12ZXJ0aWNhbCxbcGFkZGluZy12ZXJ0aWNhbF17LS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfS5pb24tcGFkZGluZy1ob3Jpem9udGFsLFtwYWRkaW5nLWhvcml6b250YWxdey0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLXBhZGRpbmctaG9yaXpvbnRhbCxbcGFkZGluZy1ob3Jpem9udGFsXXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfX0uaW9uLW5vLW1hcmdpbixbbm8tbWFyZ2luXXstLW1hcmdpbi1zdGFydDogMDstLW1hcmdpbi1lbmQ6IDA7LS1tYXJnaW4tdG9wOiAwOy0tbWFyZ2luLWJvdHRvbTogMDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Lmlvbi1tYXJnaW4sW21hcmdpbl17LS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1sZWZ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1yaWdodDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLFttYXJnaW5de21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX19Lmlvbi1tYXJnaW4tdG9wLFttYXJnaW4tdG9wXXstLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9Lmlvbi1tYXJnaW4tc3RhcnQsW21hcmdpbi1zdGFydF17LS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1sZWZ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLW1hcmdpbi1zdGFydCxbbWFyZ2luLXN0YXJ0XXttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX0uaW9uLW1hcmdpbi1lbmQsW21hcmdpbi1lbmRdey0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLW1hcmdpbi1lbmQsW21hcmdpbi1lbmRde21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1lbmQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9fS5pb24tbWFyZ2luLWJvdHRvbSxbbWFyZ2luLWJvdHRvbV17LS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tYm90dG9tOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfS5pb24tbWFyZ2luLXZlcnRpY2FsLFttYXJnaW4tdmVydGljYWxdey0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tdG9wOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9Lmlvbi1tYXJnaW4taG9yaXpvbnRhbCxbbWFyZ2luLWhvcml6b250YWxdey0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1sZWZ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1yaWdodDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1tYXJnaW4taG9yaXpvbnRhbCxbbWFyZ2luLWhvcml6b250YWxde21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX19XG4iLCJbZmxvYXQtbGVmdF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fVtmbG9hdC1yaWdodF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZmxvYXQtc3RhcnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXN0YXJ0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtmbG9hdC1lbmRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1lbmRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1tmbG9hdC1zbS1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Zsb2F0LXNtLXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtmbG9hdC1zbS1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc20tc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LXNtLWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXNtLWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1tmbG9hdC1tZC1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Zsb2F0LW1kLXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtmbG9hdC1tZC1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbWQtc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LW1kLWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LW1kLWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1tmbG9hdC1sZy1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Zsb2F0LWxnLXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtmbG9hdC1sZy1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbGctc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LWxnLWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWxnLWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXtbZmxvYXQteGwtbGVmdF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fVtmbG9hdC14bC1yaWdodF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZmxvYXQteGwtc3RhcnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXhsLXN0YXJ0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtmbG9hdC14bC1lbmRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC14bC1lbmRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH19XG4iLCIuaW9uLXRleHQtY2VudGVyLFt0ZXh0LWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQtanVzdGlmeSxbdGV4dC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQtc3RhcnQsW3RleHQtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQtZW5kLFt0ZXh0LWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQtbGVmdCxbdGV4dC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQtcmlnaHQsW3RleHQtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQtbm93cmFwLFt0ZXh0LW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXdyYXAsW3RleHQtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXsuaW9uLXRleHQtc20tY2VudGVyLFt0ZXh0LXNtLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQtc20tanVzdGlmeSxbdGV4dC1zbS1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQtc20tc3RhcnQsW3RleHQtc20tc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQtc20tZW5kLFt0ZXh0LXNtLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQtc20tbGVmdCxbdGV4dC1zbS1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQtc20tcmlnaHQsW3RleHQtc20tcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQtc20tbm93cmFwLFt0ZXh0LXNtLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXNtLXdyYXAsW3RleHQtc20td3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7Lmlvbi10ZXh0LW1kLWNlbnRlcixbdGV4dC1tZC1jZW50ZXJde3RleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWp1c3RpZnksW3RleHQtbWQtanVzdGlmeV17dGV4dC1hbGlnbjpqdXN0aWZ5ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLXN0YXJ0LFt0ZXh0LW1kLXN0YXJ0XXt0ZXh0LWFsaWduOnN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWVuZCxbdGV4dC1tZC1lbmRde3RleHQtYWxpZ246ZW5kICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWxlZnQsW3RleHQtbWQtbGVmdF17dGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLXJpZ2h0LFt0ZXh0LW1kLXJpZ2h0XXt0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLW5vd3JhcCxbdGV4dC1tZC1ub3dyYXBde3doaXRlLXNwYWNlOm5vd3JhcCAhaW1wb3J0YW50fS5pb24tdGV4dC1tZC13cmFwLFt0ZXh0LW1kLXdyYXBde3doaXRlLXNwYWNlOm5vcm1hbCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpey5pb24tdGV4dC1sZy1jZW50ZXIsW3RleHQtbGctY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1qdXN0aWZ5LFt0ZXh0LWxnLWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1zdGFydCxbdGV4dC1sZy1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1lbmQsW3RleHQtbGctZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1sZWZ0LFt0ZXh0LWxnLWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1yaWdodCxbdGV4dC1sZy1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1ub3dyYXAsW3RleHQtbGctbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtbGctd3JhcCxbdGV4dC1sZy13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Lmlvbi10ZXh0LXhsLWNlbnRlcixbdGV4dC14bC1jZW50ZXJde3RleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLWp1c3RpZnksW3RleHQteGwtanVzdGlmeV17dGV4dC1hbGlnbjpqdXN0aWZ5ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLXN0YXJ0LFt0ZXh0LXhsLXN0YXJ0XXt0ZXh0LWFsaWduOnN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLWVuZCxbdGV4dC14bC1lbmRde3RleHQtYWxpZ246ZW5kICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLWxlZnQsW3RleHQteGwtbGVmdF17dGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLXJpZ2h0LFt0ZXh0LXhsLXJpZ2h0XXt0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLW5vd3JhcCxbdGV4dC14bC1ub3dyYXBde3doaXRlLXNwYWNlOm5vd3JhcCAhaW1wb3J0YW50fS5pb24tdGV4dC14bC13cmFwLFt0ZXh0LXhsLXdyYXBde3doaXRlLXNwYWNlOm5vcm1hbCAhaW1wb3J0YW50fX1cbiIsIi5pb24tdGV4dC11cHBlcmNhc2UsW3RleHQtdXBwZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtbG93ZXJjYXNlLFt0ZXh0LWxvd2VyY2FzZV17dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWNhcGl0YWxpemUsW3RleHQtY2FwaXRhbGl6ZV17dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZSAhaW1wb3J0YW50fUBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7Lmlvbi10ZXh0LXNtLXVwcGVyY2FzZSxbdGV4dC1zbS11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1sb3dlcmNhc2UsW3RleHQtc20tbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtc20tY2FwaXRhbGl6ZSxbdGV4dC1zbS1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7Lmlvbi10ZXh0LW1kLXVwcGVyY2FzZSxbdGV4dC1tZC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1tZC1sb3dlcmNhc2UsW3RleHQtbWQtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtY2FwaXRhbGl6ZSxbdGV4dC1tZC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Lmlvbi10ZXh0LWxnLXVwcGVyY2FzZSxbdGV4dC1sZy11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1sb3dlcmNhc2UsW3RleHQtbGctbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtbGctY2FwaXRhbGl6ZSxbdGV4dC1sZy1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpey5pb24tdGV4dC14bC11cHBlcmNhc2UsW3RleHQteGwtdXBwZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbG93ZXJjYXNlLFt0ZXh0LXhsLWxvd2VyY2FzZV17dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLWNhcGl0YWxpemUsW3RleHQteGwtY2FwaXRhbGl6ZV17dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZSAhaW1wb3J0YW50fX1cbiIsIlthbGlnbi1zZWxmLXN0YXJ0XXthbGlnbi1zZWxmOmZsZXgtc3RhcnQgIWltcG9ydGFudH1bYWxpZ24tc2VsZi1lbmRde2FsaWduLXNlbGY6ZmxleC1lbmQgIWltcG9ydGFudH1bYWxpZ24tc2VsZi1jZW50ZXJde2FsaWduLXNlbGY6Y2VudGVyICFpbXBvcnRhbnR9W2FsaWduLXNlbGYtc3RyZXRjaF17YWxpZ24tc2VsZjpzdHJldGNoICFpbXBvcnRhbnR9W2FsaWduLXNlbGYtYmFzZWxpbmVde2FsaWduLXNlbGY6YmFzZWxpbmUgIWltcG9ydGFudH1bYWxpZ24tc2VsZi1hdXRvXXthbGlnbi1zZWxmOmF1dG8gIWltcG9ydGFudH1bd3JhcF17ZmxleC13cmFwOndyYXAgIWltcG9ydGFudH1bbm93cmFwXXtmbGV4LXdyYXA6bm93cmFwICFpbXBvcnRhbnR9W3dyYXAtcmV2ZXJzZV17ZmxleC13cmFwOndyYXAtcmV2ZXJzZSAhaW1wb3J0YW50fVtqdXN0aWZ5LWNvbnRlbnQtc3RhcnRde2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0ICFpbXBvcnRhbnR9W2p1c3RpZnktY29udGVudC1jZW50ZXJde2p1c3RpZnktY29udGVudDpjZW50ZXIgIWltcG9ydGFudH1banVzdGlmeS1jb250ZW50LWVuZF17anVzdGlmeS1jb250ZW50OmZsZXgtZW5kICFpbXBvcnRhbnR9W2p1c3RpZnktY29udGVudC1hcm91bmRde2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQgIWltcG9ydGFudH1banVzdGlmeS1jb250ZW50LWJldHdlZW5de2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnR9W2p1c3RpZnktY29udGVudC1ldmVubHlde2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHkgIWltcG9ydGFudH1bYWxpZ24taXRlbXMtc3RhcnRde2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQgIWltcG9ydGFudH1bYWxpZ24taXRlbXMtY2VudGVyXXthbGlnbi1pdGVtczpjZW50ZXIgIWltcG9ydGFudH1bYWxpZ24taXRlbXMtZW5kXXthbGlnbi1pdGVtczpmbGV4LWVuZCAhaW1wb3J0YW50fVthbGlnbi1pdGVtcy1zdHJldGNoXXthbGlnbi1pdGVtczpzdHJldGNoICFpbXBvcnRhbnR9W2FsaWduLWl0ZW1zLWJhc2VsaW5lXXthbGlnbi1pdGVtczpiYXNlbGluZSAhaW1wb3J0YW50fVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ":root {\n  --ion-color-primary: #64b3f4 ;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-color-mycolor: linear-gradient(+55deg,  var(--ion-color-primary) 80% , green 10% );\n  --ion-color-toolbarmycolor: linear-gradient(+55deg,  var(--ion-color-primary)  50% ,  green 50% ); }\n\n.ion-color-favorite {\n  --ion-color-base: #69bb7b;\n  --ion-color-base-rgb: 105, 187, 123;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #5ca56c;\n  --ion-color-tint: #78c288; }\n\n.ion-color-twitter {\n  --ion-color-base: #1da1f4;\n  --ion-color-base-rgb: 29, 161, 244;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #1a8ed7;\n  --ion-color-tint: #34aaf5; }\n\n.ion-color-google {\n  --ion-color-base: #dc4a38;\n  --ion-color-base-rgb: 220, 74, 56;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #c24131;\n  --ion-color-tint: #e05c4c; }\n\n.ion-color-vimeo {\n  --ion-color-base: #23b6ea;\n  --ion-color-base-rgb: 35, 182, 234;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #1fa0ce;\n  --ion-color-tint: #39bdec; }\n\n.ion-color-facebook {\n  --ion-color-base: #3b5998;\n  --ion-color-base-rgb: 59, 89, 152;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #344e86;\n  --ion-color-tint: #4f6aa2; }\n\n:root {\n  --ion-headings-font-weight: 300;\n  --ion-color-angular: #ac282b;\n  --ion-color-communication: #8e8d93;\n  --ion-color-tooling: #fe4c52;\n  --ion-color-services: #fd8b2d;\n  --ion-color-design: #fed035;\n  --ion-color-workshop: #69bb7b;\n  --ion-color-food: #3bc7c4;\n  --ion-color-documentation: #b16be3;\n  --ion-color-navigation: #6600cc; }\n\n.md {\n  --ion-toolbar-background: var(--ion-color-toolbarmycolor) ;\n  --ion-toolbar-color: #fff;\n  --ion-toolbar-color-activated: #fff;\n  --ion-toolbar-color-unchecked: rgba(255, 255, 255, .6);\n  --ion-toolbar-color-checked: #fff; }\n\n.md ion-menu ion-content {\n    --ion-background-color: var(--ion-color-mycolor) ;\n    background-size: cover;\n    font-size: 1.8rem; }\n\n.md ion-menu ion-content div.scroll-content {\n      color: white; }\n\n.md ion-menu ion-content div.scroll-content ion-list .item {\n        color: white;\n        background: transparent; }\n\n.md ion-menu .bar-buttons, .md ion-menu .toolbar-title {\n    color: white; }\n\n.toolbar-background {\n  --ion-toolbar-background: var(--ion-color-toolbarmycolor) ; }\n\n@media (min-width: 450px) {\n  .container {\n    margin: auto;\n    width: 80%;\n    border: 3px;\n    padding: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3guZ2l0aHViLmlvL3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFFRSw4QkFBb0I7RUFDcEIsc0NBQXdCO0VBQ3hCLHNDQUE2QjtFQUM3QixnREFBaUM7RUFDakMsbUNBQTBCO0VBQzFCLGtDQUF5QjtFQUV6QiwrQkFBc0I7RUFDdEIsd0NBQTBCO0VBQzFCLHdDQUErQjtFQUMvQixrREFBbUM7RUFDbkMscUNBQTRCO0VBQzVCLG9DQUEyQjtFQUUzQiw4QkFBcUI7RUFDckIsdUNBQXlCO0VBQ3pCLHVDQUE4QjtFQUM5QixpREFBa0M7RUFDbEMsb0NBQTJCO0VBQzNCLG1DQUEwQjtFQUUxQiw2QkFBb0I7RUFDcEIscUNBQXdCO0VBQ3hCLHNDQUE2QjtFQUM3QixnREFBaUM7RUFDakMsbUNBQTBCO0VBQzFCLGtDQUF5QjtFQUV6Qiw2QkFBb0I7RUFDcEIscUNBQXdCO0VBQ3hCLHNDQUE2QjtFQUM3QixnREFBaUM7RUFDakMsbUNBQTBCO0VBQzFCLGtDQUF5QjtFQUV6Qiw0QkFBbUI7RUFDbkIsb0NBQXVCO0VBQ3ZCLHFDQUE0QjtFQUM1QiwrQ0FBZ0M7RUFDaEMsa0NBQXlCO0VBQ3pCLGlDQUF3QjtFQUV4QiwwQkFBaUI7RUFDakIsaUNBQXFCO0VBQ3JCLG1DQUEwQjtFQUMxQiw2Q0FBOEI7RUFDOUIsZ0NBQXVCO0VBQ3ZCLCtCQUFzQjtFQUV0Qiw0QkFBbUI7RUFDbkIsc0NBQXVCO0VBQ3ZCLHFDQUE0QjtFQUM1QiwrQ0FBZ0M7RUFDaEMsa0NBQXlCO0VBQ3pCLGlDQUF3QjtFQUV4QiwyQkFBa0I7RUFDbEIscUNBQXNCO0VBQ3RCLG9DQUEyQjtFQUMzQix3Q0FBK0I7RUFDL0IsaUNBQXdCO0VBQ3hCLGdDQUF1QjtFQUl2Qix5RkFBb0I7RUFHcEIsa0dBQTJCLEVBQzVCOztBQVVEO0VBQ0UsMEJBQWlCO0VBQ2pCLG9DQUFxQjtFQUNyQiw4QkFBcUI7RUFDckIsd0NBQXlCO0VBQ3pCLDJCQUFrQjtFQUNsQiwwQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSwwQkFBaUI7RUFDakIsbUNBQXFCO0VBQ3JCLDhCQUFxQjtFQUNyQix3Q0FBeUI7RUFDekIsMkJBQWtCO0VBQ2xCLDBCQUFpQixFQUNsQjs7QUFFRDtFQUNFLDBCQUFpQjtFQUNqQixrQ0FBcUI7RUFDckIsOEJBQXFCO0VBQ3JCLHdDQUF5QjtFQUN6QiwyQkFBa0I7RUFDbEIsMEJBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsMEJBQWlCO0VBQ2pCLG1DQUFxQjtFQUNyQiw4QkFBcUI7RUFDckIsd0NBQXlCO0VBQ3pCLDJCQUFrQjtFQUNsQiwwQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSwwQkFBaUI7RUFDakIsa0NBQXFCO0VBQ3JCLDhCQUFxQjtFQUNyQix3Q0FBeUI7RUFDekIsMkJBQWtCO0VBQ2xCLDBCQUFpQixFQUNsQjs7QUFTRDtFQUdFLGdDQUEyQjtFQUUzQiw2QkFBb0I7RUFDcEIsbUNBQTBCO0VBQzFCLDZCQUFvQjtFQUNwQiw4QkFBcUI7RUFDckIsNEJBQW1CO0VBQ25CLDhCQUFxQjtFQUNyQiwwQkFBaUI7RUFDakIsbUNBQTBCO0VBQzFCLGdDQUF1QixFQUV4Qjs7QUFhRDtFQUlDLDJEQUF5QjtFQU14QiwwQkFBb0I7RUFHcEIsb0NBQThCO0VBRzlCLHVEQUE4QjtFQUc5QixrQ0FBNEIsRUEwQzdCOztBQTdERDtJQStCQyxrREFBdUI7SUFVcEIsdUJBQXNCO0lBQ3RCLGtCQUFpQixFQVVsQjs7QUFwREg7TUE2Q00sYUFBWSxFQU1iOztBQW5ETDtRQWdEUSxhQUFZO1FBQ1osd0JBQXVCLEVBQ3hCOztBQWxEUDtJQXNESSxhQUFZLEVBQ2I7O0FBUUg7RUFFQywyREFBeUIsRUFHekI7O0FBUUQ7RUFDSTtJQUNHLGFBQVk7SUFDSyxXQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWEsRUFHaEMsRUFBQSIsImZpbGUiOiJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2Ugc2VlXG4vLyBodHRwczovL2JldGEuaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLy8gVGhlIGFwcCBkaXJlY3Rpb24gaXMgdXNlZCB0byBpbmNsdWRlXG4vLyBydGwgc3R5bGVzIGluIHlvdXIgYXBwLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHNlZVxuLy8gaHR0cHM6Ly9iZXRhLmlvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ydGxcbi8vICRhcHAtZGlyZWN0aW9uOiBsdHI7XG5cbi8vIElvbmljIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE5hbWVkIGNvbG9ycyBtYWtlcyBpdCBlYXN5IHRvIHJldXNlIGNvbG9ycyBvbiB2YXJpb3VzIGNvbXBvbmVudHMuXG4vLyBJdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgY29sb3JzXG4vLyB0byBtYXRjaCB5b3VyIGFwcCdzIGJyYW5kaW5nLiBJb25pYyBwcm92aWRlcyBlaWdodCBsYXllcmVkIGNvbG9yc1xuLy8gdGhhdCBjYW4gYmUgY2hhbmdlZCB0byB0aGVtZSBhbiBhcHAuIEFkZGl0aW9uYWwgY29sb3JzIGNhbiBiZVxuLy8gYWRkZWQgYXMgd2VsbCAoc2VlIGJlbG93KS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSBzZWVcbi8vIGh0dHBzOi8vYmV0YS5pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL2FkdmFuY2VkXG5cbi8vIFRvIGVhc2lseSBjcmVhdGUgY3VzdG9tIGNvbG9yIHBhbGV0dGVzIGZvciB5b3VyIGFwcOKAmXMgVUksXG4vLyBjaGVjayBvdXQgb3VyIGNvbG9yIGdlbmVyYXRvcjpcbi8vIGh0dHBzOi8vYmV0YS5pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL2NvbG9yLWdlbmVyYXRvclxuXG46cm9vdCB7XG5cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzY0YjNmNCA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMGNkMWU4O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxMiwgMjA5LCAyMzI7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGJiOGNjO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI0ZDZlYTtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzcwNDRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xuXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMxMGRjNjA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxNiwgMjIwLCA5NjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwZWMyNTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzI4ZTA3MDtcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjZTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMDYsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZjA0MTQxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNDUsIDYxLCA2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZjI1NDU0O1xuXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ0LCAyNDQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4vLyAgLS1pb24tY29sb3ItbXljb2xvcjogbGluZWFyLWdyYWRpZW50KC01NWRlZywgICNjMmU1OWMgMzUlICwgIzY0YjNmNCAxMDAlICk7XG4vLyAgLS1pb24tY29sb3ItbXljb2xvcjogbGluZWFyLWdyYWRpZW50KCs1NWRlZywgIGJsdWUgMTAlICwgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSA4MCUgKTtcbiAgLS1pb24tY29sb3ItbXljb2xvcjogbGluZWFyLWdyYWRpZW50KCs1NWRlZywgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSA4MCUgLCBncmVlbiAxMCUgKTtcbi8vICAtLWlvbi1jb2xvci1teWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoKzU1ZGVnLCAgYmx1ZSA4MCUgLCBncmVlbiAxMCUgKTtcbi8vICAtLWlvbi1jb2xvci10b29sYmFybXljb2xvcjogbGluZWFyLWdyYWRpZW50KCs1NWRlZywgIGJsdWUgNTAlICwgIGdyZWVuIDUwJSApO1xuICAtLWlvbi1jb2xvci10b29sYmFybXljb2xvcjogbGluZWFyLWdyYWRpZW50KCs1NWRlZywgIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAgNTAlICwgIGdyZWVuIDUwJSApO1xufVxuXG4vLyBBZGRpdGlvbmFsIElvbmljIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEluIG9yZGVyIHRvIGFkZCBjb2xvcnMgdG8gYmUgdXNlZCB3aXRoIElvbmljIGNvbXBvbmVudHMsXG4vLyB0aGUgY29sb3Igc2hvdWxkIGJlIGFkZGVkIGFzIGEgY2xhc3Mgd2l0aCB0aGUgY29udmVudGlvbiBgLmlvbi1jb2xvci17Q09MT1J9YFxuLy8gd2hlcmUgYHtDT0xPUn1gIGlzIHRoZSBjb2xvciB0byBiZSB1c2VkIG9uIHRoZSBJb25pYyBjb21wb25lbnRcbi8vIGFuZCBlYWNoIHZhcmlhbnQgaXMgZGVmaW5lZCBmb3IgdGhlIGNvbG9yLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHNlZVxuLy8gaHR0cHM6Ly9iZXRhLmlvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvYWR2YW5jZWRcblxuLmlvbi1jb2xvci1mYXZvcml0ZSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICM2OWJiN2I7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiAxMDUsIDE4NywgMTIzO1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zaGFkZTogIzVjYTU2YztcbiAgLS1pb24tY29sb3ItdGludDogIzc4YzI4ODtcbn1cblxuLmlvbi1jb2xvci10d2l0dGVyIHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzFkYTFmNDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDI5LCAxNjEsIDI0NDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICMxYThlZDc7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICMzNGFhZjU7XG59XG5cbi5pb24tY29sb3ItZ29vZ2xlIHtcbiAgLS1pb24tY29sb3ItYmFzZTogI2RjNGEzODtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDIyMCwgNzQsIDU2O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zaGFkZTogI2MyNDEzMTtcbiAgLS1pb24tY29sb3ItdGludDogI2UwNWM0Yztcbn1cblxuLmlvbi1jb2xvci12aW1lbyB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMyM2I2ZWE7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiAzNSwgMTgyLCAyMzQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiAjMWZhMGNlO1xuICAtLWlvbi1jb2xvci10aW50OiAjMzliZGVjO1xufVxuXG4uaW9uLWNvbG9yLWZhY2Vib29rIHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzNiNTk5ODtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDU5LCA4OSwgMTUyO1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zaGFkZTogIzM0NGU4NjtcbiAgLS1pb24tY29sb3ItdGludDogIzRmNmFhMjtcbn1cblxuLy8gU2hhcmVkIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRvIGN1c3RvbWl6ZSB0aGUgbG9vayBhbmQgZmVlbCBvZiB0aGlzIGFwcCwgeW91IGNhbiBvdmVycmlkZVxuLy8gdGhlIENTUyB2YXJpYWJsZXMgZm91bmQgaW4gSW9uaWMncyBzb3VyY2UgZmlsZXMuXG4vLyBUbyB2aWV3IGFsbCB0aGUgcG9zc2libGUgSW9uaWMgdmFyaWFibGVzLCBzZWU6XG4vLyBodHRwczovL2JldGEuaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9jc3MtdmFyaWFibGVzI2lvbmljLXZhcmlhYmxlc1xuXG46cm9vdCB7XG4gIC8vIFRPRE9cbiAgLy8gJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAzMDA7XG4gIC0taW9uLWhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAzMDA7XG5cbiAgLS1pb24tY29sb3ItYW5ndWxhcjogI2FjMjgyYjtcbiAgLS1pb24tY29sb3ItY29tbXVuaWNhdGlvbjogIzhlOGQ5MztcbiAgLS1pb24tY29sb3ItdG9vbGluZzogI2ZlNGM1MjtcbiAgLS1pb24tY29sb3Itc2VydmljZXM6ICNmZDhiMmQ7XG4gIC0taW9uLWNvbG9yLWRlc2lnbjogI2ZlZDAzNTtcbiAgLS1pb24tY29sb3Itd29ya3Nob3A6ICM2OWJiN2I7XG4gIC0taW9uLWNvbG9yLWZvb2Q6ICMzYmM3YzQ7XG4gIC0taW9uLWNvbG9yLWRvY3VtZW50YXRpb246ICNiMTZiZTM7XG4gIC0taW9uLWNvbG9yLW5hdmlnYXRpb246ICM2NjAwY2M7XG4vLyAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAgIzY0YjNmNDtcbn1cblxuLy8gQXBwIGlPUyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpT1Mgb25seSBDU1MgdmFyaWFibGVzIGNhbiBnbyBoZXJlXG5cbi5pb3Mge1xufVxuXG4vLyBBcHAgTWF0ZXJpYWwgRGVzaWduIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1hdGVyaWFsIERlc2lnbiBvbmx5IENTUyB2YXJpYWJsZXMgY2FuIGdvIGhlcmVcblxuLm1kIHtcbiAgLy8gVXNlIHRoZSBwcmltYXJ5IGNvbG9yIGFzIHRoZSBiYWNrZ3JvdW5kIGZvciB0aGUgdG9vbGJhclxuLy8gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogICM2NGIzZjQ7XG4gLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdG9vbGJhcm15Y29sb3IpIDtcbiAgXG4vLyAgLS1pb24tY29udGVudC1iYWNrZ3JvdW5kOiAgIzY0YjNmNDtcbi8vICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNTVkZWcsICAjYzJlNTljIDM1JSAsICM2NGIzZjQgMTAwJSApICFpbXBvcnRhbnQ7XG5cbiAgLy8gQ2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgdG9vbGJhciBjb21wb25lbnRzXG4gIC0taW9uLXRvb2xiYXItY29sb3I6ICNmZmY7XG5cbiAgLy8gQ2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgYWN0aXZhdGVkIHRvb2xiYXIgY29tcG9uZW50c1xuICAtLWlvbi10b29sYmFyLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcblxuICAvLyBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSB1bmNoZWNrZWQgc2VnbWVudCBidXR0b25zXG4gIC0taW9uLXRvb2xiYXItY29sb3ItdW5jaGVja2VkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcblxuICAvLyBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBjaGVja2VkIHNlZ21lbnQgYnV0dG9uXG4gIC0taW9uLXRvb2xiYXItY29sb3ItY2hlY2tlZDogI2ZmZjtcblxuLy9AaW1wb3J0ICcuL2dyYWRpZW50LW1peGlucyc7XG4vL0BpbXBvcnQgXCIuL2dyZWVuLWFuZC1ibHVlLXRoZW1lXCI7XG4vL0BpbXBvcnQgXCIuL2ZhY2Vib29rLW1lc3Nlbmdlci10aGVtZVwiO1xuXG5pb24tbWVudSB7IFxuXG4gIGlvbi1jb250ZW50IHtcbi8vICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICAjNjRiM2Y0IDtcbi8vIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xuLy8gLS1pb24taXRlbS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTU1ZGVnLCAgI2MyZTU5YyAzNSUgLCAjNjRiM2Y0IDEwMCUgKTtcbiAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcikgO1xuXG4vLyAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAgI2MyZTU5YyA7XG5cbi8vICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtMTBkZWcsICAjYzJlNTljIDM1JSAsICM2NGIzZjQgMTAwJSApICFpbXBvcnRhbnQ7XG4vLyAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTU1ZGVnLCAgIzY0YjNmNCAxMDAlLCAjZmZmZmYgMzUlICkgIWltcG9ydGFudDtcbi8vICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICAtd2Via2l0LWxpbmVhci1ncmFkaWVudCggdG8gbGVmdCwgI2MyZTU5YyAsICM2NGIzZjQgKTsgICAgICBcblxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcblxuICAgIGRpdi5zY3JvbGwtY29udGVudCB7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgIGlvbi1saXN0IC5pdGVtIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmJhci1idXR0b25zLCAudG9vbGJhci10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cblxuXG5cbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4vLyAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTU1ZGVnLCAgI2MyZTU5YyAzNSUgLCAjNjRiM2Y0IDEwMCUgKSAhaW1wb3J0YW50O1xuIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRvb2xiYXJteWNvbG9yKSA7XG4vLyAjYzJlNTljICwgIzY0YjNmNFxuXG59XG4vLyRmYS1mb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnQtYXdlc29tZS9mb250c1wiO1xuLy9AaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnQtYXdlc29tZS9zY3NzL2ZvbnQtYXdlc29tZVwiO1xuXG4vL0BpbXBvcnQgXCJmb250LWF3ZXNvbWVcIjtcbi8vQGltcG9ydCBcIi4uL2Fzc2V0cy9zaGFyZWJ1dHRvbi9zaGFyZS1idXR0b25zLnNjc3NcIjtcbi8vQGltcG9ydCBcIi4uL2Fzc2V0cy9zaGFyZWJ1dHRvbi90aGVtZXMvbW9kZXJuL21vZGVybi1kYXJrLXRoZW1lLnNjc3NcIjtcblxuQG1lZGlhKG1pbi13aWR0aDo0NTBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG5cbiAgICB9XG59XG5cblxuXG4vLyBBcHAgVGhlbWVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJb25pYyBhcHBzIGNhbiBoYXZlIGRpZmZlcmVudCB0aGVtZXMgYXBwbGllZCwgd2hpY2ggY2FuXG4vLyB0aGVuIGJlIGZ1dHVyZSBjdXN0b21pemVkLiBUaGlzIGltcG9ydCBjb21lcyBsYXN0XG4vLyBzbyB0aGF0IHRoZSBhYm92ZSB2YXJpYWJsZXMgYXJlIHVzZWQgYW5kIElvbmljJ3Ncbi8vIGRlZmF1bHQgYXJlIG92ZXJyaWRkZW4uXG5cbi8vIEBpbXBvcnQgXCJpb25pYy50aGVtZS5kZWZhdWx0XCI7XG5cbi8vIEZvbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUm9ib3RvIGZvbnQgaXMgdXNlZCBieSBkZWZhdWx0IGZvciBNYXRlcmlhbCBEZXNpZ24uIE5vdG8gc2Fuc1xuLy8gaXMgdXNlZCBieSBkZWZhdWx0IGZvciBXaW5kb3dzLlxuXG4vLyBAaW1wb3J0IFwicm9ib3RvXCI7XG5cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/ramesh/workspace20/thepaybox.github.io/src/theme/variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! /home/ramesh/workspace20/thepaybox.github.io/src/global.scss */"./src/global.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map