/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class BreadcrumbComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-breadcrumb',
                template: "<div class =\" breadCrumbheading\">\n  <span *ngFor=\"let rout of breadcrumbRoute;last as isLast\" [routerLink]=\"[rout.url,rout.id ]\"routerLinkActive=\"active\">\n   {{rout.label}} <span *ngIf=\"!isLast\"> > </span>\n   </span>\n</div>\n",
                styles: [".breadCrumbheading{padding-bottom:50px}.active{color:var(--primary-color)}"]
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    breadcrumbRoute: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.breadcrumbRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7SUFHNUI7SUFJQSxDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7OztZQWhCSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsMlBBQTBDOzthQUUzQzs7Ozs7OEJBRUEsS0FBSzs7OztJQUFOLDhDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSBicmVhZGNydW1iUm91dGU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIFxuICAgICkge1xuICAgIFxuICAgIH1cbiAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICBcbiAgICB9XG4gICAgXG4gICBcbiAgfVxuICAiXX0=