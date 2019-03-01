/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ProgramSidenavComponent {
    constructor() {
        this.program = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentProgramIndex = 0;
    }
    /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    programSelect(assessments, i) {
        this.currentProgramIndex = i;
        this.program.emit(assessments);
    }
}
ProgramSidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-program-sidenav',
                template: "<div class=\"heading\">\n    {{ 'headings.programs' | translate }}\n</div>\n<div class=\"subHeading\" *ngFor=\"let results of result; let i=index\" (click)=\"programSelect(results, i)\">\n    <span class=\"sideNavSubheading\" [ngClass]=\"{'active': currentProgramIndex === i}\">\n        <div class=\"overFlowHidden\" matTooltip=\"{{results.name}}\" >\n            {{results.name}}\n        </div>\n    </span>\n</div>\n",
                styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;min-height:40px;display:flex;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.subHeading{color:var(--grey-color)}.active,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}.heading{height:40px;display:flex;align-items:center;padding:0 0 0 15px}.overFlowHidden{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
            }] }
];
/** @nocollapse */
ProgramSidenavComponent.ctorParameters = () => [];
ProgramSidenavComponent.propDecorators = {
    result: [{ type: Input }],
    program: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ProgramSidenavComponent.prototype.result;
    /** @type {?} */
    ProgramSidenavComponent.prototype.currentProgramIndex;
    /** @type {?} */
    ProgramSidenavComponent.prototype.program;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbWNvcmVtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9ncmFtLXNpZGVuYXYvcHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUcsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sdUJBQXVCO0lBSWxDO1FBRVUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFGdkIsQ0FBQzs7OztJQUlqQixRQUFRO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGdiQUErQzs7YUFFaEQ7Ozs7O3FCQUVFLEtBQUs7c0JBS0wsTUFBTTs7OztJQUxQLHlDQUFxQjs7SUFDckIsc0RBQTRCOztJQUk1QiwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgLCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9ncmFtLXNpZGVuYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3JhbVNpZGVuYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZXN1bHQ6IGFueTtcbiAgY3VycmVudFByb2dyYW1JbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQE91dHB1dCgpIHByb2dyYW0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50UHJvZ3JhbUluZGV4ID0gMDtcbiAgfVxuXG4gIHByb2dyYW1TZWxlY3QoYXNzZXNzbWVudHMsIGkpe1xuICAgIHRoaXMuY3VycmVudFByb2dyYW1JbmRleCA9IGk7XG4gICAgdGhpcy5wcm9ncmFtLmVtaXQoYXNzZXNzbWVudHMpO1xuICB9XG59XG4iXX0=