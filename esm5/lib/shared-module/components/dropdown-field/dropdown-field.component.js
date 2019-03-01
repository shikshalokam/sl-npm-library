/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var DropdownFieldComponent = /** @class */ (function () {
    function DropdownFieldComponent() {
        this.emitResponseType = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DropdownFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} responseType
     * @return {?}
     */
    DropdownFieldComponent.prototype.changeResponseType = /**
     * @param {?} responseType
     * @return {?}
     */
    function (responseType) {
        this.emitResponseType.emit(responseType);
    };
    DropdownFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-dropdown-field',
                    template: "<div [formGroup]=\"genericForm\" >\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" *ngIf=\"genericData.input == 'radio' ||genericData.input == 'dropdown'\">\n    <mat-select [disabled]=\"!genericData.editable\" placeholder=\"{{genericData.label}}\" formControlName=\"{{genericData.field}}\" required >\n        <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType(opt.value)\" >\n          {{opt.label}}\n        </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\"  *ngIf=\"genericData.input == 'multiselect' \">\n      <mat-select [disabled]=\"!genericData.editable\" placeholder=\"{{genericData.label}}\" formControlName=\"{{genericData.field}}\" required multiple >\n          <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType\">\n            {{opt.label}}\n          </mat-option>\n      </mat-select>\n    </mat-form-field>\n</div>",
                    styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:1000}.right{text-align:right}"]
                }] }
    ];
    /** @nocollapse */
    DropdownFieldComponent.ctorParameters = function () { return []; };
    DropdownFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }],
        emitResponseType: [{ type: Output }]
    };
    return DropdownFieldComponent;
}());
export { DropdownFieldComponent };
if (false) {
    /** @type {?} */
    DropdownFieldComponent.prototype.genericData;
    /** @type {?} */
    DropdownFieldComponent.prototype.genericForm;
    /** @type {?} */
    DropdownFieldComponent.prototype.genericEdit;
    /** @type {?} */
    DropdownFieldComponent.prototype.emitResponseType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9kcm9wZG93bi1maWVsZC9kcm9wZG93bi1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBVUU7UUFEUSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFDRCxtREFBa0I7Ozs7SUFBbEIsVUFBbUIsWUFBWTtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsbWdDQUE4Qzs7aUJBRS9DOzs7Ozs4QkFFQSxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzttQ0FDTCxNQUFNOztJQVFQLDZCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSxzQkFBc0I7OztJQUNuQyw2Q0FBb0I7O0lBQ3BCLDZDQUE4Qjs7SUFDOUIsNkNBQTRCOztJQUM1QixrREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kcm9wZG93bi1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLWZpZWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25GaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKWdlbmVyaWNEYXRhO1xuQElucHV0KClnZW5lcmljRm9ybTpGb3JtR3JvdXA7XG5ASW5wdXQoKWdlbmVyaWNFZGl0OmJvb2xlYW47XG5AT3V0cHV0KCkgZW1pdFJlc3BvbnNlVHlwZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGNoYW5nZVJlc3BvbnNlVHlwZShyZXNwb25zZVR5cGUpe1xuICAgIHRoaXMuZW1pdFJlc3BvbnNlVHlwZS5lbWl0KHJlc3BvbnNlVHlwZSk7XG4gIH1cbn1cbiJdfQ==