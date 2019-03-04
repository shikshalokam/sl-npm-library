/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
var FormArrayFieldComponent = /** @class */ (function () {
    function FormArrayFieldComponent() {
        this.editquestion = new EventEmitter();
    }
    ;
    /**
     * @return {?}
     */
    FormArrayFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.questionCount = this.genericData['array'].length || 1;
    };
    /**
     * @param {?} edit
     * @return {?}
     */
    FormArrayFieldComponent.prototype.editQuestion = /**
     * @param {?} edit
     * @return {?}
     */
    function (edit) {
        if (edit == 'add') {
            this.questionCount++;
        }
        else if (edit == 'reset') {
            this.questionCount = 1;
        }
        else {
            this.questionCount -= 1;
        }
        this.editquestion.emit(edit);
    };
    FormArrayFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-form-array-field',
                    template: "<div [formGroup]=\"genericForm\" *ngIf=\"genericForm\">\n  <div formArrayName=\"question\" >\n    <div *ngFor=\"let arrayOption of genericData.array; let i = index\" class=\"_flex-box _justify-content-center\" >\n      <mat-form-field class=\"col-sm-11 fixSize _halfWidth\">\n          <input matInput type=\"text\" value=\"{{arrayOption.value}}\" placeholder=\"{{genericData.label}} \" formControlName=\"{{i}}\"\n          required>\n      </mat-form-field>\n      \n\n        <button class =\"col-sm-1\"*ngIf=\"questionCount >1\" mat-raised-button (click)=\"editQuestion(i)\" color=\"warn\">\n              \n            <i class=\"material-icons\">\n                close\n                </i>\n          </button>\n        </div>\n    \n  </div>\n  <button mat-raised-button (click)=\"editQuestion('add')\" class=\"_primary-btn btn-margin\">\n              \n      {{'buttons.addNew'| translate}}\n      <i class=\"material-icons\">\n          add\n          </i>\n    </button>\n    <button mat-raised-button *ngIf=\"questionCount>1\"(click)=\"editQuestion('reset')\" color=\"warn\" [disabled]=\" questionCount<2\" class=\"btn-margin\">\n              \n        {{'buttons.removeAll'| translate}}\n        <i class=\"material-icons white\">\n            delete_forever\n            </i>\n      </button>\n</div>",
                    styles: [".btn-margin{margin:0 10px}._flexbox{flex-direction:column;align-items:center;display:flex}"]
                }] }
    ];
    /** @nocollapse */
    FormArrayFieldComponent.ctorParameters = function () { return []; };
    FormArrayFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }],
        editquestion: [{ type: Output }]
    };
    return FormArrayFieldComponent;
}());
export { FormArrayFieldComponent };
if (false) {
    /** @type {?} */
    FormArrayFieldComponent.prototype.genericData;
    /** @type {?} */
    FormArrayFieldComponent.prototype.genericForm;
    /** @type {?} */
    FormArrayFieldComponent.prototype.genericEdit;
    /** @type {?} */
    FormArrayFieldComponent.prototype.question;
    /** @type {?} */
    FormArrayFieldComponent.prototype.editquestion;
    /** @type {?} */
    FormArrayFieldComponent.prototype.questionCount;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2Zvcm0tYXJyYXktZmllbGQvZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXREO0lBYUU7UUFIVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFHLENBQUM7SUFHN0IsQ0FBQztJQURqQixDQUFDOzs7O0lBR0QsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsSUFBSTtRQUNmLElBQUcsSUFBSSxJQUFJLEtBQUssRUFDaEI7WUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7YUFDSSxJQUFHLElBQUksSUFBSSxPQUFPLEVBQUM7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDeEI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxnekNBQWdEOztpQkFFakQ7Ozs7OzhCQUVFLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUVMLE1BQU07O0lBd0JULDhCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlksdUJBQXVCOzs7SUFDbEMsOENBQW9COztJQUNwQiw4Q0FBOEI7O0lBQzlCLDhDQUE0Qjs7SUFDNUIsMkNBQXFCOztJQUNyQiwrQ0FBNkM7O0lBQzdDLGdEQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWFycmF5LWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tYXJyYXktZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWFycmF5LWZpZWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5RmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKWdlbmVyaWNEYXRhO1xuICBASW5wdXQoKWdlbmVyaWNGb3JtOkZvcm1Hcm91cDtcbiAgQElucHV0KClnZW5lcmljRWRpdDpib29sZWFuO1xuICBxdWVzdGlvbiA6IEZvcm1BcnJheTtcbiAgQE91dHB1dCgpIGVkaXRxdWVzdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIgKCk7XG4gIHF1ZXN0aW9uQ291bnQ7XG4gIDtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnF1ZXN0aW9uQ291bnQgPSB0aGlzLmdlbmVyaWNEYXRhWydhcnJheSddLmxlbmd0aCAgfHwgMTtcbiAgfVxuICBcbiAgZWRpdFF1ZXN0aW9uKGVkaXQpe1xuICAgIGlmKGVkaXQgPT0gJ2FkZCcpXG4gICAge1xuICAgICAgdGhpcy5xdWVzdGlvbkNvdW50Kys7XG4gICAgfVxuICAgIGVsc2UgaWYoZWRpdCA9PSAncmVzZXQnKXtcbiAgICAgIHRoaXMucXVlc3Rpb25Db3VudCA9IDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5xdWVzdGlvbkNvdW50IC09IDE7XG4gICAgfVxuICAgIHRoaXMuZWRpdHF1ZXN0aW9uLmVtaXQoZWRpdCk7XG4gIH1cblxuXG59XG4iXX0=