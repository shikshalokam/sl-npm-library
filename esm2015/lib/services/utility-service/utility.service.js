/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-spinner";
export class UtilityService {
    /**
     * @param {?} location
     * @param {?} spinner
     */
    constructor(location, spinner) {
        this.location = location;
        this.spinner = spinner;
    }
    /**
     * @return {?}
     */
    onBack() {
        this.location.back();
    }
    /**
     * @return {?}
     */
    loaderShow() {
        this.spinner.show();
    }
    /**
     * @return {?}
     */
    loaderHide() {
        this.spinner.hide();
    }
    /**
     * @param {?} inputs
     * @return {?}
     */
    toGroup(inputs) {
        /** @type {?} */
        let group = {};
        inputs.forEach((/**
         * @param {?} inputs
         * @return {?}
         */
        inputs => {
            if (inputs.input == "array") {
                group[inputs.field] = this.createFormArray(inputs);
            }
            else {
                group[inputs.field] = inputs.validation.required ? new FormControl(inputs.value || '', Validators.required)
                    : new FormControl(inputs.value || '');
            }
        }));
        return new FormGroup(group);
    }
    /**
     * @param {?} inputs
     * @return {?}
     */
    createFormArray(inputs) {
        /** @type {?} */
        let elements = [];
        inputs.array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            elements[element['field']] = element.validation.required ? new FormControl(element.value || '', Validators.required)
                : new FormControl(element.value || '');
        }));
        return new FormArray(elements);
    }
}
UtilityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UtilityService.ctorParameters = () => [
    { type: Location },
    { type: NgxSpinnerService }
];
/** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(i0.inject(i1.Location), i0.inject(i2.NgxSpinnerService)); }, token: UtilityService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    UtilityService.prototype.location;
    /**
     * @type {?}
     * @private
     */
    UtilityService.prototype.spinner;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtY29yZW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSS9FLE1BQU0sT0FBTyxjQUFjOzs7OztJQUN6QixZQUFvQixRQUFrQixFQUFTLE9BQTBCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFJLENBQUM7Ozs7SUFFOUUsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxNQUFNOztZQUVSLEtBQUssR0FBUSxFQUFFO1FBRW5CLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEIsSUFBRyxNQUFNLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFDMUI7Z0JBQ0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BEO2lCQUNHO2dCQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7b0JBQzNHLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLE1BQU07O1lBRWhCLFFBQVEsR0FBUyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztnQkFDOUUsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0UsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxRQUFRO1lBQ1IsaUJBQWlCOzs7Ozs7OztJQU1aLGtDQUEwQjs7Ozs7SUFBQyxpQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hTcGlubmVyU2VydmljZSB9IGZyb20gJ25neC1zcGlubmVyJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbiA6TG9jYXRpb24scHJpdmF0ZSBzcGlubmVyOiBOZ3hTcGlubmVyU2VydmljZSkgeyB9XG5cbiAgb25CYWNrKCl7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gIH1cbiAgbG9hZGVyU2hvdygpe1xuICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG4gIH1cbiAgbG9hZGVySGlkZSgpe1xuICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gIH1cbiAgdG9Hcm91cChpbnB1dHMpIHtcblxuICAgIGxldCBncm91cDogYW55ID0ge307XG4gICBcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dHMgPT4ge1xuICAgICAgaWYoaW5wdXRzLmlucHV0ID09IFwiYXJyYXlcIilcbiAgICAgIHtcbiAgICAgICAgZ3JvdXBbaW5wdXRzLmZpZWxkXSA9IHRoaXMuY3JlYXRlRm9ybUFycmF5KGlucHV0cyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncm91cFtpbnB1dHMuZmllbGRdID0gaW5wdXRzLnZhbGlkYXRpb24ucmVxdWlyZWQgPyBuZXcgRm9ybUNvbnRyb2woaW5wdXRzLnZhbHVlIHx8ICcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgICA6IG5ldyBGb3JtQ29udHJvbChpbnB1dHMudmFsdWUgfHwgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGdyb3VwKTtcbiAgfVxuICBjcmVhdGVGb3JtQXJyYXkoaW5wdXRzKXtcblxuICAgIGxldCBlbGVtZW50cyA6IGFueSA9IFtdO1xuICAgIGlucHV0cy5hcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudHNbZWxlbWVudFsnZmllbGQnXV0gPSBlbGVtZW50LnZhbGlkYXRpb24ucmVxdWlyZWQgPyBuZXcgRm9ybUNvbnRyb2woZWxlbWVudC52YWx1ZSB8fCAnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRm9ybUNvbnRyb2woZWxlbWVudC52YWx1ZSB8fCAnJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IEZvcm1BcnJheShlbGVtZW50cyk7XG4gIH1cbn1cblxuIl19