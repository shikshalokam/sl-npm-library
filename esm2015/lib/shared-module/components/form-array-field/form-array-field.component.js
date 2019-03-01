/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class FormArrayFieldComponent {
    constructor() {
        this.editquestion = new EventEmitter();
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
        this.questionCount = this.genericData['array'].length || 1;
    }
    /**
     * @param {?} edit
     * @return {?}
     */
    editQuestion(edit) {
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
    }
}
FormArrayFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-form-array-field',
                template: "<div [formGroup]=\"genericForm\" *ngIf=\"genericForm\">\n  <div formArrayName=\"question\" >\n    <div *ngFor=\"let arrayOption of genericData.array; let i = index\" class=\"_flex-box _justify-content-center\" >\n      <mat-form-field class=\"col-sm-11 fixSize _halfWidth\">\n          <input matInput type=\"text\" value=\"{{arrayOption.value}}\" placeholder=\"{{genericData.label}} \" formControlName=\"{{i}}\"\n          required>\n      </mat-form-field>\n      \n\n        <button class =\"col-sm-1\"*ngIf=\"questionCount >1\" mat-raised-button (click)=\"editQuestion(i)\" color=\"warn\">\n              \n            <i class=\"material-icons\">\n                close\n                </i>\n          </button>\n        </div>\n    \n  </div>\n  <button mat-raised-button (click)=\"editQuestion('add')\" class=\"_primary-btn btn-margin\">\n              \n      {{'buttons.addNew'| translate}}\n      <i class=\"material-icons\">\n          add\n          </i>\n    </button>\n    <button mat-raised-button *ngIf=\"questionCount>1\"(click)=\"editQuestion('reset')\" color=\"warn\" [disabled]=\" questionCount<2\" class=\"btn-margin\">\n              \n        {{'buttons.removeAll'| translate}}\n        <i class=\"material-icons white\">\n            delete_forever\n            </i>\n      </button>\n</div>",
                styles: [".btn-margin{margin:0 10px}._flexbox{flex-direction:column;align-items:center;display:flex}"]
            }] }
];
/** @nocollapse */
FormArrayFieldComponent.ctorParameters = () => [];
FormArrayFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    editquestion: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2Zvcm0tYXJyYXktZmllbGQvZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBT3RELE1BQU0sT0FBTyx1QkFBdUI7SUFRbEM7UUFIVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFHLENBQUM7SUFHN0IsQ0FBQztJQURqQixDQUFDOzs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQUk7UUFDZixJQUFHLElBQUksSUFBSSxLQUFLLEVBQ2hCO1lBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO2FBQ0ksSUFBRyxJQUFJLElBQUksT0FBTyxFQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsZ3pDQUFnRDs7YUFFakQ7Ozs7OzBCQUVFLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUVMLE1BQU07Ozs7SUFKUCw4Q0FBb0I7O0lBQ3BCLDhDQUE4Qjs7SUFDOUIsOENBQTRCOztJQUM1QiwyQ0FBcUI7O0lBQ3JCLCtDQUE2Qzs7SUFDN0MsZ0RBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0tYXJyYXktZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0tYXJyYXktZmllbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQXJyYXlGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpZ2VuZXJpY0RhdGE7XG4gIEBJbnB1dCgpZ2VuZXJpY0Zvcm06Rm9ybUdyb3VwO1xuICBASW5wdXQoKWdlbmVyaWNFZGl0OmJvb2xlYW47XG4gIHF1ZXN0aW9uIDogRm9ybUFycmF5O1xuICBAT3V0cHV0KCkgZWRpdHF1ZXN0aW9uID0gbmV3IEV2ZW50RW1pdHRlciAoKTtcbiAgcXVlc3Rpb25Db3VudDtcbiAgO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucXVlc3Rpb25Db3VudCA9IHRoaXMuZ2VuZXJpY0RhdGFbJ2FycmF5J10ubGVuZ3RoICB8fCAxO1xuICB9XG4gIFxuICBlZGl0UXVlc3Rpb24oZWRpdCl7XG4gICAgaWYoZWRpdCA9PSAnYWRkJylcbiAgICB7XG4gICAgICB0aGlzLnF1ZXN0aW9uQ291bnQrKztcbiAgICB9XG4gICAgZWxzZSBpZihlZGl0ID09ICdyZXNldCcpe1xuICAgICAgdGhpcy5xdWVzdGlvbkNvdW50ID0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnF1ZXN0aW9uQ291bnQgLT0gMTtcbiAgICB9XG4gICAgdGhpcy5lZGl0cXVlc3Rpb24uZW1pdChlZGl0KTtcbiAgfVxuXG5cbn1cbiJdfQ==