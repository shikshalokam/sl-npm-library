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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL2NvcmUtbW9kdWxlL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS1uYXZiYXIvcmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBVUU7UUFKVSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdoQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUcsQ0FBQztJQUV2QyxDQUFDOzs7O0lBQ0QsNENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFDRCw2Q0FBUzs7O0lBQVQ7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsK0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxrcURBQWlEOztpQkFFbEQ7Ozs7OzZCQUVFLE1BQU07OEJBQ04sS0FBSzt1QkFDTCxLQUFLO3lCQUNMLE1BQU07O0lBY1QsZ0NBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWxCWSx5QkFBeUI7OztJQUNwQywrQ0FBMEM7O0lBQzFDLGdEQUEwQjs7SUFDMUIseUNBQWU7O0lBQ2YsMkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmVzcG9uc2l2ZS1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNwb25zaXZlLW5hdmJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgb3BlbkRyYXdlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgY3VycmVudFVzZXI6IGFueTtcbiAgQElucHV0KCkgbG9nbyA7XG4gIEBPdXRwdXQoKSBMb2dvdXQgPSBuZXcgRXZlbnRFbWl0dGVyICgpO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9wZW5TaWRlTmF2KCk7XG4gIH1cbiAgb25TaWdub3V0KClcbiAge1xuICAgIHRoaXMuTG9nb3V0LmVtaXQodHJ1ZSk7XG4gIH1cbiAgb3BlblNpZGVOYXYoKXtcbiAgICB0aGlzLm9wZW5EcmF3ZXIuZW1pdCh0cnVlKTtcbiAgfVxuXG59XG4iXX0=