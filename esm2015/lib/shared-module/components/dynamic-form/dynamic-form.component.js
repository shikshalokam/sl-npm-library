/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class DynamicFormComponent {
    constructor() {
        this.editnewquestion = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    changeResponseType(event, index) {
        this.genericData[index].value = event;
    }
    /**
     * @param {?} edit
     * @return {?}
     */
    editquestion(edit) {
        this.editnewquestion.emit(edit);
    }
}
DynamicFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dynamic-form',
                template: "<div class=\"col-sm-12 \" [formGroup]= \"genericForm\"  *ngIf=\" genericForm\" >\n  <div *ngFor=\"let data of genericData ; let i  = index\" >\n    <app-dropdown-field *ngIf=\"(data.input == 'radio'|| data.input == 'dropdown' || data.input == 'multiselect' ) && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" (emitResponseType)=\"changeResponseType($event,i)\"></app-dropdown-field>\n  \n    <app-text-field *ngIf=\"data.input == 'text'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-text-field>\n    \n    <app-textarea-field *ngIf=\"data.input == 'textarea'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-textarea-field>\n   \n    <app-number-field *ngIf=\"data.input == 'number'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-number-field>\n    \n    <app-select-field *ngIf=\"data.input == 'boolean'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-select-field>\n\n    <app-form-array-field (editquestion)=\"editquestion($event)\" *ngIf=\"data.input == 'array'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-form-array-field>\n\n    <br>\n  </div> \n\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
DynamicFormComponent.ctorParameters = () => [];
DynamicFormComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    editnewquestion: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DynamicFormComponent.prototype.genericData;
    /** @type {?} */
    DynamicFormComponent.prototype.genericForm;
    /** @type {?} */
    DynamicFormComponent.prototype.genericEdit;
    /** @type {?} */
    DynamicFormComponent.prototype.editnewquestion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBQyxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLE1BQU0sT0FBTyxvQkFBb0I7SUFRL0I7UUFIVSxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNL0MsQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUFLLEVBQUcsS0FBSztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7SUFHdEMsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsSUFBSTtRQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBRVQsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbzRDQUE0Qzs7YUFFN0M7Ozs7OzBCQUdFLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLE1BQU07Ozs7SUFIUCwyQ0FBNEI7O0lBQzVCLDJDQUErQjs7SUFDL0IsMkNBQTRCOztJQUM1QiwrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlcixPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuXG4gIHNlbGVjdG9yOiAnYXBwLWR5bmFtaWMtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZ2VuZXJpY0RhdGEgOiBhbnkgO1xuICBASW5wdXQoKWdlbmVyaWNGb3JtIDpGb3JtR3JvdXA7XG4gIEBJbnB1dCgpZ2VuZXJpY0VkaXQ6Ym9vbGVhbjtcbiAgQE91dHB1dCgpIGVkaXRuZXdxdWVzdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIFxuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICBcbiAgfVxuXG4gIGNoYW5nZVJlc3BvbnNlVHlwZShldmVudCAsIGluZGV4KXtcbiAgICB0aGlzLmdlbmVyaWNEYXRhW2luZGV4XS52YWx1ZT1ldmVudDtcbiAgICBcblxuICB9XG4gIGVkaXRxdWVzdGlvbihlZGl0KXtcbiAgICB0aGlzLmVkaXRuZXdxdWVzdGlvbi5lbWl0KGVkaXQpO1xuICB9XG59XG4iXX0=