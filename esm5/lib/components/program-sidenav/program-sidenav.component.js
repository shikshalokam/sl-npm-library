/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ProgramSidenavComponent = /** @class */ (function () {
    function ProgramSidenavComponent() {
        this.program = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ProgramSidenavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.currentProgramIndex = 0;
    };
    /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    ProgramSidenavComponent.prototype.programSelect = /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    function (assessments, i) {
        this.currentProgramIndex = i;
        this.program.emit(assessments);
    };
    ProgramSidenavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-program-sidenav',
                    template: "<div class=\"heading\">\n    {{ 'headings.programs' | translate }}\n</div>\n<div class=\"subHeading\" *ngFor=\"let results of result; let i=index\" (click)=\"programSelect(results, i)\">\n    <span class=\"sideNavSubheading\" [ngClass]=\"{'active': currentProgramIndex === i}\">\n        <div class=\"overFlowHidden\" matTooltip=\"{{results.name}}\" >\n            {{results.name}}\n        </div>\n    </span>\n</div>\n",
                    styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;min-height:40px;display:flex;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.subHeading{color:var(--grey-color)}.active,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}.heading{height:40px;display:flex;align-items:center;padding:0 0 0 15px}.overFlowHidden{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    ProgramSidenavComponent.ctorParameters = function () { return []; };
    ProgramSidenavComponent.propDecorators = {
        result: [{ type: Input }],
        program: [{ type: Output }]
    };
    return ProgramSidenavComponent;
}());
export { ProgramSidenavComponent };
if (false) {
    /** @type {?} */
    ProgramSidenavComponent.prototype.result;
    /** @type {?} */
    ProgramSidenavComponent.prototype.currentProgramIndex;
    /** @type {?} */
    ProgramSidenavComponent.prototype.program;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbWNvcmVtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9ncmFtLXNpZGVuYXYvcHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUcsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVNFO1FBRVUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFGdkIsQ0FBQzs7OztJQUlqQiwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELCtDQUFhOzs7OztJQUFiLFVBQWMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGdiQUErQzs7aUJBRWhEOzs7Ozt5QkFFRSxLQUFLOzBCQUtMLE1BQU07O0lBVVQsOEJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSx1QkFBdUI7OztJQUNsQyx5Q0FBcUI7O0lBQ3JCLHNEQUE0Qjs7SUFJNUIsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0ICwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZ3JhbS1zaWRlbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyYW0tc2lkZW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyYW0tc2lkZW5hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyYW1TaWRlbmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcmVzdWx0OiBhbnk7XG4gIGN1cnJlbnRQcm9ncmFtSW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBPdXRwdXQoKSBwcm9ncmFtID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VycmVudFByb2dyYW1JbmRleCA9IDA7XG4gIH1cblxuICBwcm9ncmFtU2VsZWN0KGFzc2Vzc21lbnRzLCBpKXtcbiAgICB0aGlzLmN1cnJlbnRQcm9ncmFtSW5kZXggPSBpO1xuICAgIHRoaXMucHJvZ3JhbS5lbWl0KGFzc2Vzc21lbnRzKTtcbiAgfVxufVxuIl19