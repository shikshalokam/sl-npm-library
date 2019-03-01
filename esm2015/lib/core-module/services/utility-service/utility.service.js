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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL2NvcmUtbW9kdWxlL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJL0UsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3pCLFlBQW9CLFFBQWtCLEVBQVMsT0FBMEI7UUFBckQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQUksQ0FBQzs7OztJQUU5RSxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBQ0QsVUFBVTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsT0FBTyxDQUFDLE1BQU07O1lBRVIsS0FBSyxHQUFRLEVBQUU7UUFFbkIsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUN0QixJQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksT0FBTyxFQUMxQjtnQkFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEQ7aUJBQ0c7Z0JBQ0YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztvQkFDM0csQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCxlQUFlLENBQUMsTUFBTTs7WUFFaEIsUUFBUSxHQUFTLEVBQUU7UUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO2dCQUM5RSxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvRSxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBeENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLFFBQVE7WUFDUixpQkFBaUI7Ozs7Ozs7O0lBTVosa0NBQTBCOzs7OztJQUFDLGlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXRpbGl0eVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uIDpMb2NhdGlvbixwcml2YXRlIHNwaW5uZXI6IE5neFNwaW5uZXJTZXJ2aWNlKSB7IH1cblxuICBvbkJhY2soKXtcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgfVxuICBsb2FkZXJTaG93KCl7XG4gICAgdGhpcy5zcGlubmVyLnNob3coKTtcbiAgfVxuICBsb2FkZXJIaWRlKCl7XG4gICAgdGhpcy5zcGlubmVyLmhpZGUoKTtcbiAgfVxuICB0b0dyb3VwKGlucHV0cykge1xuXG4gICAgbGV0IGdyb3VwOiBhbnkgPSB7fTtcbiAgIFxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0cyA9PiB7XG4gICAgICBpZihpbnB1dHMuaW5wdXQgPT0gXCJhcnJheVwiKVxuICAgICAge1xuICAgICAgICBncm91cFtpbnB1dHMuZmllbGRdID0gdGhpcy5jcmVhdGVGb3JtQXJyYXkoaW5wdXRzKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyb3VwW2lucHV0cy5maWVsZF0gPSBpbnB1dHMudmFsaWRhdGlvbi5yZXF1aXJlZCA/IG5ldyBGb3JtQ29udHJvbChpbnB1dHMudmFsdWUgfHwgJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICAgIDogbmV3IEZvcm1Db250cm9sKGlucHV0cy52YWx1ZSB8fCAnJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoZ3JvdXApO1xuICB9XG4gIGNyZWF0ZUZvcm1BcnJheShpbnB1dHMpe1xuXG4gICAgbGV0IGVsZW1lbnRzIDogYW55ID0gW107XG4gICAgaW5wdXRzLmFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50WydmaWVsZCddXSA9IGVsZW1lbnQudmFsaWRhdGlvbi5yZXF1aXJlZCA/IG5ldyBGb3JtQ29udHJvbChlbGVtZW50LnZhbHVlIHx8ICcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBGb3JtQ29udHJvbChlbGVtZW50LnZhbHVlIHx8ICcnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgRm9ybUFycmF5KGVsZW1lbnRzKTtcbiAgfVxufVxuXG4iXX0=