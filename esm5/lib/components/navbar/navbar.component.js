/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.showDropdown = false;
        this.Logout = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        this.showDropdown = !this.showDropdown;
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onSignout = /**
     * @return {?}
     */
    function () {
        this.Logout.emit(true);
    };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-navbar',
                    template: "<div *ngIf=\"currentUser\">\n\n<nav class=\"navbar noMarginPadding \">\n\n    <div class=\"col-sm-6  col-md-6 col-xs-6 col-lg-6 alingCenterline noMarginPadding\">\n  \n      <img  class=\"logo\" src ={{logo}} >\n      <!-- <mat-card-title class=\"pageBrand\">\n        <strong>{{ 'brand' | translate }}</strong>\n      </mat-card-title> -->\n        </div>\n  \n    <!-- <div class=\"col-sm-4 mod \">\n         <mat-card-title style=\"font-size:18px; color:gray; text-align: center;\" >\n          Sikhshalocham Samikhsa \n            <mat-icon svgIcon=\"thumbs-up\" style=\"font-size:29px; color: gray;\">\n            </mat-icon>\n        </mat-card-title> \n      </div> -->\n  \n    <div class=\"col-sm-6 col-md-6 col-xs-6 col-lg-6 \">\n      <span class=\"right _flex-box alingCenterline\">\n        <button mat-icon-button (click)=\"openDropdown()\">\n              <i class=\"material-icons\">\n                  apps\n                  </i>\n        </button>\n            <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n              <div class=\"dropdownDiv\">\n                <div class=\"col-sm-3 dropdownFeature\">\n                    <div class=\"verticalCenteralign\">\n                      <div class=\"apple\" >\n                        <i class=\"material-icons\" id=\"whiteIcon\">\n                          create\n                        </i>\n                      </div>\n                      <div class=\"active\">\n                        {{'menuDropdown.myApps' | translate}}\n                      </div>\n                    </div>\n                </div>\n              </div>\n            </div>\n      <span mat-button [matMenuTriggerFor]=\"menu\" class=\"alingCenterline _cursor-pointer\">\n              <i class=\"material-icons brand dropdownIcon\">\n                  person\n                  </i>\n            <!-- <span class=\"brand \">{{currentUser?.name}}</span> -->\n        <i class=\"material-icons brand icon\">\n          keyboard_arrow_down\n        </i>\n      </span>\n      <mat-menu #menu=\"matMenu\">\n        <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n                supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item  class=\"matmenuIcon black\">\n          <i class=\"material-icons\">\n            done\n          </i>\n          <span class=\"padding\">{{currentUser?.name}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n          <span class=\"bigPadding black\">\n              {{'menuDropdown.signOut' | translate}}\n          </span>\n        </span>\n      </mat-menu>\n      <!-- <div class=\"right horizontalLine\">\n        <i class=\"material-icons brand helpIcon\">\n          help_outline\n        </i>\n      </div> -->\n  </span>\n  \n    </div>\n  </nav>\n</div>",
                    styles: [".noMarginPadding{margin:0;padding:0}.brand{color:var(--primary-color);margin-bottom:0}.logo{height:50px}.apple{background-image:linear-gradient(to bottom,#1cdffe 10%,#2462e9 90%);height:80px;width:80px;border:1px solid var(--primary-color);border-radius:15px;padding:10px;display:flex;align-items:center;justify-content:center}.horizontalLine{position:relative;padding:0 8px}.icon{font-size:16px;padding-right:10px}.helpIcon{font-weight:10px}.horizontalLine:before{content:\"\";background:var(--border-color);position:absolute;bottom:20%;left:-5px;height:60%;width:1px}.navbar{display:flex;align-items:center}.line{line-height:12px}.navicon{font-size:80px;color:linear-gradient(to bottom,from var(--primary-color) 100%,to var(--blue-gradient) 100%)}.dropdownDiv{color:#000;background-color:#fff;position:absolute;min-width:500px;height:350px;right:8px;top:35px;z-index:105;border-radius:2px;box-shadow:0 0 3px 3px rgba(0,0,0,.08);margin:20px;padding:20px 0}.dropdownDiv:before{content:\"\";position:absolute;top:-27px;right:60px;border-left:13px solid transparent;border-right:13px solid transparent;border-top:13px solid transparent;border-bottom:13px solid rgba(0,0,0,.08)}.dropdownDiv:after{content:\"\";position:absolute;top:-24px;right:60px;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid transparent;border-bottom:12px solid #fff}.dropdownFeature{padding:20px}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transperent;z-index:101}#whiteIcon{color:#fff;font-size:45px;line-height:1}.verticalCenteralign{display:flex;flex-direction:column;align-items:center;cursor:pointer}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:0}.pageMenu{margin-bottom:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;line-height:2}.active{margin-top:10px;border-radius:12px;border:1px solid #46a9ff;padding:5px 10px;background-color:#e5f2fe;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;white-space:nowrap;font-size:11px}.right{display:flex;justify-content:flex-end}.matmenuIcon{display:flex;align-items:center;color:#bababa}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:#4c4c4c}"]
                }] }
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return []; };
    NavbarComponent.propDecorators = {
        dropdownLabel: [{ type: Input }],
        currentUser: [{ type: Input }],
        logo: [{ type: Input }],
        Logout: [{ type: Output }]
    };
    return NavbarComponent;
}());
export { NavbarComponent };
if (false) {
    /** @type {?} */
    NavbarComponent.prototype.showDropdown;
    /** @type {?} */
    NavbarComponent.prototype.dropdownLabel;
    /** @type {?} */
    NavbarComponent.prototype.currentUser;
    /** @type {?} */
    NavbarComponent.prototype.logo;
    /** @type {?} */
    NavbarComponent.prototype.Logout;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbWNvcmVtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVdFO1FBTEEsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFJWCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUcsQ0FBQztJQUV2QyxDQUFDOzs7O0lBQ0Qsa0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUNELHNDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxtQ0FBUzs7O0lBQVQ7UUFFRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixzK0ZBQXNDOztpQkFFdkM7Ozs7O2dDQUdFLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLE1BQU07O0lBWVQsc0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSxlQUFlOzs7SUFDMUIsdUNBQXFCOztJQUNyQix3Q0FBd0I7O0lBQ3hCLHNDQUEwQjs7SUFDMUIsK0JBQWU7O0lBQ2YsaUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdmJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNob3dEcm9wZG93biA9IGZhbHNlO1xuICBASW5wdXQoKSBkcm9wZG93bkxhYmVsIDtcbiAgQElucHV0KCkgY3VycmVudFVzZXI6IGFueTtcbiAgQElucHV0KCkgbG9nbyA7XG4gIEBPdXRwdXQoKSBMb2dvdXQgPSBuZXcgRXZlbnRFbWl0dGVyICgpO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBvcGVuRHJvcGRvd24oKSB7XG4gICAgdGhpcy5zaG93RHJvcGRvd24gPSAhdGhpcy5zaG93RHJvcGRvd247XG4gIH1cbiAgb25TaWdub3V0KClcbiAge1xuICAgIHRoaXMuTG9nb3V0LmVtaXQodHJ1ZSk7XG4gIH1cbn1cblxuXG5cbiJdfQ==