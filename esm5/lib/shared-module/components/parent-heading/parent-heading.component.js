/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UtilityService } from '../../../core-module/services/utility-service/utility.service';
;
var ParentHeadingComponent = /** @class */ (function () {
    function ParentHeadingComponent(dialog, utilityService) {
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.sendMarkAsComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '450px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result)
                _this.sendFlag();
        }));
    };
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.sendFlag = /**
     * @return {?}
     */
    function () {
        this.sendMarkAsComplete.emit(true);
    };
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.onBack = /**
     * @return {?}
     */
    function () {
        this.utilityService.onBack();
    };
    ParentHeadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-parent-heading',
                    template: "<div class=\"horizontalLine\">\n  <span class=\" alingCenterlineParentHeading\">\n    <div>\n      <h4 class=\"primaryColor\">{{schoolName}}</h4>\n    </div>\n    <!-- <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><button mat-raised-button  class=\" btnColor \"(click)=\"openDialog()\">{{'buttons.markasComplete' | translate}}</button></span> -->\n    <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><span class=\" active \" (click)=\"openDialog()\">{{'buttons.markasComplete'\n        | translate}}</span></span>\n  </span>\n  <mat-divider *ngIf=\"schoolName || schoolNameDivider\" class=\"Margin noPadding\"></mat-divider>\n  <!-- <span class=\"alingCenterline smallMargin\"  *ngIf=\"!showControl\"> -->\n  <span class=\"alingCenterline smallMargin\">\n    <button  *ngIf=\"!showControl\" class=\"noPadding\" mat-button (click)=\"onBack()\"><i class=\"material-icons\">\n        keyboard_arrow_left\n      </i>\n      <span>Back</span>\n    </button>\n    <span class=\"heading  space noMargin space\" *ngIf=\"genericHeading\">\n      {{ genericHeading | translate}}\n    </span>\n\n  </span>\n</div>",
                    styles: [".heading{margin-top:0;font-size:18px}.btnColor{background-color:var(--primary-color);color:var(--white-color);margin-left:30px}.alingCenterlineParentHeading{display:flex;align-items:center;flex-wrap:wrap}.active{border-radius:12px;border:1px solid var(--primary-color);padding:2px 8px;background-color:var(--button-background-color);cursor:pointer;margin-left:25px}.horizontalLine{display:flex;flex-direction:column}.noPadding{padding:0}.noMargin{margin:0}.Margin{margin:0 -20px}.primaryColor{color:var(--primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    ParentHeadingComponent.ctorParameters = function () { return [
        { type: MatDialog },
        { type: UtilityService }
    ]; };
    ParentHeadingComponent.propDecorators = {
        genericHeading: [{ type: Input }],
        schoolName: [{ type: Input }],
        atleastOneComplete: [{ type: Input }],
        schoolId: [{ type: Input }],
        schoolNameDivider: [{ type: Input }],
        showControl: [{ type: Input }],
        sendMarkAsComplete: [{ type: Output }]
    };
    return ParentHeadingComponent;
}());
export { ParentHeadingComponent };
if (false) {
    /** @type {?} */
    ParentHeadingComponent.prototype.genericHeading;
    /** @type {?} */
    ParentHeadingComponent.prototype.schoolName;
    /** @type {?} */
    ParentHeadingComponent.prototype.atleastOneComplete;
    /** @type {?} */
    ParentHeadingComponent.prototype.schoolId;
    /** @type {?} */
    ParentHeadingComponent.prototype.schoolNameDivider;
    /** @type {?} */
    ParentHeadingComponent.prototype.showControl;
    /** @type {?} */
    ParentHeadingComponent.prototype.sendMarkAsComplete;
    /** @type {?} */
    ParentHeadingComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    ParentHeadingComponent.prototype.utilityService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWhlYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9wYXJlbnQtaGVhZGluZy9wYXJlbnQtaGVhZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsR0FBRyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUFBLENBQUM7QUFFaEc7SUFjRSxnQ0FBb0IsTUFBaUIsRUFBVSxjQUE4QjtRQUF6RCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRG5FLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFDc0IsQ0FBQzs7OztJQUVsRix5Q0FBUTs7O0lBQVI7SUFFQSxDQUFDOzs7O0lBRUQsMkNBQVU7OztJQUFWO1FBQUEsaUJBVUM7O1lBVE8sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3JELEtBQUssRUFBRSxPQUFPO1lBQ2QsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQztRQUVGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ3RDLElBQUksTUFBTTtnQkFDUixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBQ0QseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHNxQ0FBOEM7O2lCQUUvQzs7OztnQkFSUSxTQUFTO2dCQUVULGNBQWM7OztpQ0FTcEIsS0FBSzs2QkFDTCxLQUFLO3FDQUNMLEtBQUs7MkJBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUNMLEtBQUs7cUNBQ0wsTUFBTTs7SUF5QlQsNkJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQWhDWSxzQkFBc0I7OztJQUNqQyxnREFBZ0M7O0lBQ2hDLDRDQUFvQjs7SUFDcEIsb0RBQTRCOztJQUM1QiwwQ0FBa0I7O0lBQ2xCLG1EQUE0Qjs7SUFDNUIsNkNBQXFCOztJQUNyQixvREFBMkQ7O0lBQzlDLHdDQUF3Qjs7Ozs7SUFBRSxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRGlhbG9nQm94Q29tcG9uZW50IH0gZnJvbSAnLi4vZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUtbW9kdWxlL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UnOztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBhcmVudC1oZWFkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmVudC1oZWFkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyZW50LWhlYWRpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFBhcmVudEhlYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBnZW5lcmljSGVhZGluZzogc3RyaW5nO1xuICBASW5wdXQoKSBzY2hvb2xOYW1lO1xuICBASW5wdXQoKSBhdGxlYXN0T25lQ29tcGxldGU7XG4gIEBJbnB1dCgpIHNjaG9vbElkO1xuICBASW5wdXQoKSBzY2hvb2xOYW1lRGl2aWRlciA7XG4gIEBJbnB1dCgpIHNob3dDb250cm9sO1xuICBAT3V0cHV0KCkgc2VuZE1hcmtBc0NvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBjb25zdHJ1Y3RvciggcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLCBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dCb3hDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNDUwcHgnLFxuICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgIHRoaXMuc2VuZEZsYWcoKTtcbiAgICB9KTtcbiAgfVxuICBzZW5kRmxhZygpIHtcbiAgICB0aGlzLnNlbmRNYXJrQXNDb21wbGV0ZS5lbWl0KHRydWUpO1xuICB9XG5cbiAgb25CYWNrKCkge1xuICAgICAgdGhpcy51dGlsaXR5U2VydmljZS5vbkJhY2soKTtcbiAgfVxufVxuIl19