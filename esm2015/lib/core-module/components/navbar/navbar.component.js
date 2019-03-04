/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NavbarComponent {
    constructor() {
        this.showDropdown = false;
        this.Logout = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.showDropdown = !this.showDropdown;
    }
    /**
     * @return {?}
     */
    onSignout() {
        this.Logout.emit(true);
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-navbar',
                template: "<div *ngIf=\"currentUser\">\n\n<nav class=\"navbar noMarginPadding \">\n\n    <div class=\"col-sm-6  col-md-6 col-xs-6 col-lg-6 alingCenterline noMarginPadding\">\n  \n      <img  class=\"logo\" src ={{logo}} >\n      <!-- <mat-card-title class=\"pageBrand\">\n        <strong>{{ 'brand' | translate }}</strong>\n      </mat-card-title> -->\n        </div>\n  \n    <!-- <div class=\"col-sm-4 mod \">\n         <mat-card-title style=\"font-size:18px; color:gray; text-align: center;\" >\n          Sikhshalocham Samikhsa \n            <mat-icon svgIcon=\"thumbs-up\" style=\"font-size:29px; color: gray;\">\n            </mat-icon>\n        </mat-card-title> \n      </div> -->\n  \n    <div class=\"col-sm-6 col-md-6 col-xs-6 col-lg-6 \">\n      <span class=\"right _flex-box alingCenterline\">\n        <button mat-icon-button (click)=\"openDropdown()\">\n              <i class=\"material-icons\">\n                  apps\n                  </i>\n        </button>\n            <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n              <div class=\"dropdownDiv\">\n                <div class=\"col-sm-3 dropdownFeature\">\n                    <div class=\"verticalCenteralign\">\n                      <div class=\"apple\" >\n                        <i class=\"material-icons\" id=\"whiteIcon\">\n                          create\n                        </i>\n                      </div>\n                      <div class=\"active\">\n                        {{'menuDropdown.myApps' | translate}}\n                      </div>\n                    </div>\n                </div>\n              </div>\n            </div>\n      <span mat-button [matMenuTriggerFor]=\"menu\" class=\"alingCenterline _cursor-pointer\">\n              <i class=\"material-icons brand dropdownIcon\">\n                  person\n                  </i>\n            <!-- <span class=\"brand \">{{currentUser?.name}}</span> -->\n        <i class=\"material-icons brand icon\">\n          keyboard_arrow_down\n        </i>\n      </span>\n      <mat-menu #menu=\"matMenu\">\n        <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n                supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item  class=\"matmenuIcon black\">\n          <i class=\"material-icons\">\n            done\n          </i>\n          <span class=\"padding\">{{currentUser?.name}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n          <span class=\"bigPadding black\">\n              {{'menuDropdown.signOut' | translate}}\n          </span>\n        </span>\n      </mat-menu>\n      <!-- <div class=\"right horizontalLine\">\n        <i class=\"material-icons brand helpIcon\">\n          help_outline\n        </i>\n      </div> -->\n  </span>\n  \n    </div>\n  </nav>\n</div>",
                styles: [".noMarginPadding{margin:0;padding:0}.brand{color:var(--primary-color);margin-bottom:0}.logo{height:50px}.apple{background-image:linear-gradient(to bottom,#1cdffe 10%,#2462e9 90%);height:80px;width:80px;border:1px solid var(--primary-color);border-radius:15px;padding:10px;display:flex;align-items:center;justify-content:center}.horizontalLine{position:relative;padding:0 8px}.icon{font-size:16px;padding-right:10px}.helpIcon{font-weight:10px}.horizontalLine:before{content:\"\";background:var(--border-color);position:absolute;bottom:20%;left:-5px;height:60%;width:1px}.navbar{display:flex;align-items:center}.line{line-height:12px}.navicon{font-size:80px;color:linear-gradient(to bottom,from var(--primary-color) 100%,to var(--blue-gradient) 100%)}.dropdownDiv{color:#000;background-color:#fff;position:absolute;min-width:500px;height:350px;right:8px;top:35px;z-index:105;border-radius:2px;box-shadow:0 0 3px 3px rgba(0,0,0,.08);margin:20px;padding:20px 0}.dropdownDiv:before{content:\"\";position:absolute;top:-27px;right:60px;border-left:13px solid transparent;border-right:13px solid transparent;border-top:13px solid transparent;border-bottom:13px solid rgba(0,0,0,.08)}.dropdownDiv:after{content:\"\";position:absolute;top:-24px;right:60px;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid transparent;border-bottom:12px solid #fff}.dropdownFeature{padding:20px}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transperent;z-index:101}#whiteIcon{color:#fff;font-size:45px;line-height:1}.verticalCenteralign{display:flex;flex-direction:column;align-items:center;cursor:pointer}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:0}.pageMenu{margin-bottom:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;line-height:2}.active{margin-top:10px;border-radius:12px;border:1px solid #46a9ff;padding:5px 10px;background-color:#e5f2fe;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;white-space:nowrap;font-size:11px}.right{display:flex;justify-content:flex-end}.matmenuIcon{display:flex;align-items:center;color:#bababa}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:#4c4c4c}"]
            }] }
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [];
NavbarComponent.propDecorators = {
    dropdownLabel: [{ type: Input }],
    currentUser: [{ type: Input }],
    logo: [{ type: Input }],
    Logout: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxlQUFlO0lBTTFCO1FBTEEsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFJWCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUcsQ0FBQztJQUV2QyxDQUFDOzs7O0lBQ0QsUUFBUTtJQUNSLENBQUM7Ozs7SUFDRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELFNBQVM7UUFFUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixzK0ZBQXNDOzthQUV2Qzs7Ozs7NEJBR0UsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsTUFBTTs7OztJQUpQLHVDQUFxQjs7SUFDckIsd0NBQXdCOztJQUN4QixzQ0FBMEI7O0lBQzFCLCtCQUFlOztJQUNmLGlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW5hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzaG93RHJvcGRvd24gPSBmYWxzZTtcbiAgQElucHV0KCkgZHJvcGRvd25MYWJlbCA7XG4gIEBJbnB1dCgpIGN1cnJlbnRVc2VyOiBhbnk7XG4gIEBJbnB1dCgpIGxvZ28gO1xuICBAT3V0cHV0KCkgTG9nb3V0ID0gbmV3IEV2ZW50RW1pdHRlciAoKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgb3BlbkRyb3Bkb3duKCkge1xuICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gIXRoaXMuc2hvd0Ryb3Bkb3duO1xuICB9XG4gIG9uU2lnbm91dCgpXG4gIHtcbiAgICB0aGlzLkxvZ291dC5lbWl0KHRydWUpO1xuICB9XG59XG5cblxuXG4iXX0=