/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ResponsiveNavbarComponent = /** @class */ (function () {
    function ResponsiveNavbarComponent() {
        this.openDrawer = new EventEmitter();
        this.Logout = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.openSideNav();
    };
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.onSignout = /**
     * @return {?}
     */
    function () {
        this.Logout.emit(true);
    };
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.openSideNav = /**
     * @return {?}
     */
    function () {
        this.openDrawer.emit(true);
    };
    ResponsiveNavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-responsive-navbar',
                    template: "<nav class=\"responsiveNavbar noMarginPadding\">\n  <body class=\" col-xs-12 noMarginPadding alingCenterline\" >\n      <span class=\"col-xs-4 alingCenterline noMarginPadding\">\n          <button mat-icon-button>\n          <i class=\"material-icons\" (click)=\"openSideNav()\">\n            menu\n              </i>\n              </button>\n      </span>\n    \n    <mat-card-title class=\"pageBrand col-xs-4 alingCenterline\">\n        <img  class=\"logo\" src ={{logo}} >\n      <!-- <strong>{{ 'brandResponsive' | translate }}</strong> -->\n    </mat-card-title>\n\n    <span class=\"col-xs-4 noMarginPadding _flexEnd\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\" _cursor-pointer\">\n          <i class=\"material-icons dropdownIcon\">\n              person\n              </i>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding \">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n  \n        </mat-menu>\n      </span>\n    \n    </body>\n</nav>",
                    styles: [".noMarginPadding{margin:0;padding:0}.icon{font-size:16px;padding-right:10px}._flexEnd{display:flex;justify-content:flex-end}.logo{height:50px}.responsiveNavbar{display:none;align-items:center;height:51px}.line{line-height:12px}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:-4px;display:flex;justify-content:center}.pageMenu{margin-top:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;margin-top:7px;font-weight:700}.active{color:var(--white-color);background-color:var(--primary-color)}.matmenuIcon{display:flex;align-items:center;color:var(--grey-color)}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--black-color)}.responsiveLogo{margin-top:-5px}"]
                }] }
    ];
    /** @nocollapse */
    ResponsiveNavbarComponent.ctorParameters = function () { return []; };
    ResponsiveNavbarComponent.propDecorators = {
        openDrawer: [{ type: Output }],
        currentUser: [{ type: Input }],
        logo: [{ type: Input }],
        Logout: [{ type: Output }]
    };
    return ResponsiveNavbarComponent;
}());
export { ResponsiveNavbarComponent };
if (false) {
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.openDrawer;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.currentUser;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.logo;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.Logout;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtY29yZW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Jlc3BvbnNpdmUtbmF2YmFyL3Jlc3BvbnNpdmUtbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVVFO1FBSlUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHaEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFHLENBQUM7SUFFdkMsQ0FBQzs7OztJQUNELDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0QsNkNBQVM7OztJQUFUO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELCtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsa3FEQUFpRDs7aUJBRWxEOzs7Ozs2QkFFRSxNQUFNOzhCQUNOLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxNQUFNOztJQWNULGdDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlkseUJBQXlCOzs7SUFDcEMsK0NBQTBDOztJQUMxQyxnREFBMEI7O0lBQzFCLHlDQUFlOztJQUNmLDJDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJlc3BvbnNpdmUtbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3BvbnNpdmUtbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIG9wZW5EcmF3ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGN1cnJlbnRVc2VyOiBhbnk7XG4gIEBJbnB1dCgpIGxvZ28gO1xuICBAT3V0cHV0KCkgTG9nb3V0ID0gbmV3IEV2ZW50RW1pdHRlciAoKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcGVuU2lkZU5hdigpO1xuICB9XG4gIG9uU2lnbm91dCgpXG4gIHtcbiAgICB0aGlzLkxvZ291dC5lbWl0KHRydWUpO1xuICB9XG4gIG9wZW5TaWRlTmF2KCl7XG4gICAgdGhpcy5vcGVuRHJhd2VyLmVtaXQodHJ1ZSk7XG4gIH1cblxufVxuIl19