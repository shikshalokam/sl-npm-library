/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class DashboardBlocksComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DashboardBlocksComponent.decorators = [
    { type: Component, args: [{
                selector: 'dashboard-blocks',
                template: "\n<div class=\"_flex-box _justify-content-center wrapper\">\n\n  <div class=\"_full-width \">\n    <div *ngFor=\"let dashBoard of list\" >\n      <div class=\" col-lg-3 col-md-4 col-sm-6 col-xs-12 margin-top _justify-content-center flex-box\" routerLink=\"{{dashBoard.anchorLink}}\" title=\"{{dashBoard.tooltip|translate}}\">\n        <div class=\" box iconBox\">\n          <i class=\"material-icons folderIcon\">\n            reorder\n          </i>\n        </div>\n        <div class=\" box \">\n          <div class=\"description\">\n              {{dashBoard.tooltip|translate}}\n          </div>\n          \n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>",
                styles: [".flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.description{color:var(--grey-color);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:110px;text-align:center}.dashBoardIcon{width:200px;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;border-radius:20px;margin:0 20px}.margin-top{margin-top:20px}.folderIcon{font-size:70px;color:var(--primary-color);display:flex;align-items:center}.wrapper{padding:0 20px}.box{width:100%;display:flex;justify-content:center}.iconBox{background-image:linear-gradient(to top,#e8eced 10%,#fff 90%);height:120px;width:120px;border:1px solid var(--grey-color);border-radius:15px}"]
            }] }
];
/** @nocollapse */
DashboardBlocksComponent.ctorParameters = () => [];
DashboardBlocksComponent.propDecorators = {
    list: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DashboardBlocksComponent.prototype.list;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWJsb2Nrcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2Rhc2hib2FyZC1ibG9ja3MvZGFzaGJvYXJkLWJsb2Nrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyx3QkFBd0I7SUFFbkM7SUFDQSxDQUFDOzs7O0lBR0EsUUFBUTtJQUNSLENBQUM7OztZQVpILFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixrckJBQWdEOzthQUVqRDs7Ozs7bUJBS0UsS0FBSzs7OztJQUFOLHdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXNoYm9hcmQtYmxvY2tzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC1ibG9ja3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQtYmxvY2tzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQmxvY2tzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiBcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG4gIEBJbnB1dCgpIGxpc3Q6IGFueTtcblxuICAgbmdPbkluaXQoKSB7XG4gICB9XG5cbn1cbiJdfQ==