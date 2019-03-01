/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-breadcrumb',
                    template: "<div class =\" breadCrumbheading\">\n  <span *ngFor=\"let rout of breadcrumbRoute;last as isLast\" [routerLink]=\"[rout.url,rout.id ]\"routerLinkActive=\"active\">\n   {{rout.label}} <span *ngIf=\"!isLast\"> > </span>\n   </span>\n</div>\n",
                    styles: [".breadCrumbheading{padding-bottom:50px}.active{color:var(--primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return []; };
    BreadcrumbComponent.propDecorators = {
        breadcrumbRoute: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.breadcrumbRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBUUk7SUFJQSxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Z0JBaEJKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwyUEFBMEM7O2lCQUUzQzs7Ozs7a0NBRUEsS0FBSzs7SUFhSiwwQkFBQztDQUFBLEFBbkJILElBbUJHO1NBZFUsbUJBQW1COzs7SUFDaEMsOENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbkBJbnB1dCgpIGJyZWFkY3J1bWJSb3V0ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgXG4gICAgKSB7XG4gICAgXG4gICAgfVxuICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgIFxuICB9XG4gICJdfQ==