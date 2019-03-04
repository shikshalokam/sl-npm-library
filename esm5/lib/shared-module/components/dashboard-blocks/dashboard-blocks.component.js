/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var DashboardBlocksComponent = /** @class */ (function () {
    function DashboardBlocksComponent() {
    }
    /**
     * @return {?}
     */
    DashboardBlocksComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DashboardBlocksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dashboard-blocks',
                    template: "\n<div class=\"_flex-box _justify-content-center wrapper\">\n\n  <div class=\"_full-width \">\n    <div *ngFor=\"let dashBoard of list\" >\n      <div class=\" col-lg-3 col-md-4 col-sm-6 col-xs-12 margin-top _justify-content-center flex-box\" routerLink=\"{{dashBoard.anchorLink}}\" title=\"{{dashBoard.tooltip|translate}}\">\n        <div class=\" box iconBox\">\n          <i class=\"material-icons folderIcon\">\n            reorder\n          </i>\n        </div>\n        <div class=\" box \">\n          <div class=\"description\">\n              {{dashBoard.tooltip|translate}}\n          </div>\n          \n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>",
                    styles: [".flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.description{color:var(--grey-color);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:110px;text-align:center}.dashBoardIcon{width:200px;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;border-radius:20px;margin:0 20px}.margin-top{margin-top:20px}.folderIcon{font-size:70px;color:var(--primary-color);display:flex;align-items:center}.wrapper{padding:0 20px}.box{width:100%;display:flex;justify-content:center}.iconBox{background-image:linear-gradient(to top,#e8eced 10%,#fff 90%);height:120px;width:120px;border:1px solid var(--grey-color);border-radius:15px}"]
                }] }
    ];
    /** @nocollapse */
    DashboardBlocksComponent.ctorParameters = function () { return []; };
    DashboardBlocksComponent.propDecorators = {
        list: [{ type: Input }]
    };
    return DashboardBlocksComponent;
}());
export { DashboardBlocksComponent };
if (false) {
    /** @type {?} */
    DashboardBlocksComponent.prototype.list;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWJsb2Nrcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2Rhc2hib2FyZC1ibG9ja3MvZGFzaGJvYXJkLWJsb2Nrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBT0U7SUFDQSxDQUFDOzs7O0lBR0EsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWkgsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGtyQkFBZ0Q7O2lCQUVqRDs7Ozs7dUJBS0UsS0FBSzs7SUFLUiwrQkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLHdCQUF3Qjs7O0lBSW5DLHdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXNoYm9hcmQtYmxvY2tzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC1ibG9ja3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXNoYm9hcmQtYmxvY2tzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQmxvY2tzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiBcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG4gIEBJbnB1dCgpIGxpc3Q6IGFueTtcblxuICAgbmdPbkluaXQoKSB7XG4gICB9XG5cbn1cbiJdfQ==