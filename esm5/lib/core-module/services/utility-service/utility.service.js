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
var UtilityService = /** @class */ (function () {
    function UtilityService(location, spinner) {
        this.location = location;
        this.spinner = spinner;
    }
    /**
     * @return {?}
     */
    UtilityService.prototype.onBack = /**
     * @return {?}
     */
    function () {
        this.location.back();
    };
    /**
     * @return {?}
     */
    UtilityService.prototype.loaderShow = /**
     * @return {?}
     */
    function () {
        this.spinner.show();
    };
    /**
     * @return {?}
     */
    UtilityService.prototype.loaderHide = /**
     * @return {?}
     */
    function () {
        this.spinner.hide();
    };
    /**
     * @param {?} inputs
     * @return {?}
     */
    UtilityService.prototype.toGroup = /**
     * @param {?} inputs
     * @return {?}
     */
    function (inputs) {
        var _this = this;
        /** @type {?} */
        var group = {};
        inputs.forEach((/**
         * @param {?} inputs
         * @return {?}
         */
        function (inputs) {
            if (inputs.input == "array") {
                group[inputs.field] = _this.createFormArray(inputs);
            }
            else {
                group[inputs.field] = inputs.validation.required ? new FormControl(inputs.value || '', Validators.required)
                    : new FormControl(inputs.value || '');
            }
        }));
        return new FormGroup(group);
    };
    /**
     * @param {?} inputs
     * @return {?}
     */
    UtilityService.prototype.createFormArray = /**
     * @param {?} inputs
     * @return {?}
     */
    function (inputs) {
        /** @type {?} */
        var elements = [];
        inputs.array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            elements[element['field']] = element.validation.required ? new FormControl(element.value || '', Validators.required)
                : new FormControl(element.value || '');
        }));
        return new FormArray(elements);
    };
    UtilityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UtilityService.ctorParameters = function () { return [
        { type: Location },
        { type: NgxSpinnerService }
    ]; };
    /** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(i0.inject(i1.Location), i0.inject(i2.NgxSpinnerService)); }, token: UtilityService, providedIn: "root" });
    return UtilityService;
}());
export { UtilityService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL2NvcmUtbW9kdWxlL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFDL0U7SUFJRSx3QkFBb0IsUUFBa0IsRUFBUyxPQUEwQjtRQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFBSSxDQUFDOzs7O0lBRTlFLCtCQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNELG1DQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELG1DQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxnQ0FBTzs7OztJQUFQLFVBQVEsTUFBTTtRQUFkLGlCQWVDOztZQWJLLEtBQUssR0FBUSxFQUFFO1FBRW5CLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ25CLElBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQzFCO2dCQUNFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNwRDtpQkFDRztnQkFDRixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO29CQUMzRyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUNELHdDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBTTs7WUFFaEIsUUFBUSxHQUFTLEVBQUU7UUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQzFCLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztnQkFDOUUsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0UsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQXhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxRLFFBQVE7Z0JBQ1IsaUJBQWlCOzs7eUJBRjFCO0NBNkNDLEFBekNELElBeUNDO1NBdENZLGNBQWM7Ozs7OztJQUNiLGtDQUEwQjs7Ozs7SUFBQyxpQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hTcGlubmVyU2VydmljZSB9IGZyb20gJ25neC1zcGlubmVyJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxpdHlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbiA6TG9jYXRpb24scHJpdmF0ZSBzcGlubmVyOiBOZ3hTcGlubmVyU2VydmljZSkgeyB9XG5cbiAgb25CYWNrKCl7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gIH1cbiAgbG9hZGVyU2hvdygpe1xuICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG4gIH1cbiAgbG9hZGVySGlkZSgpe1xuICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gIH1cbiAgdG9Hcm91cChpbnB1dHMpIHtcblxuICAgIGxldCBncm91cDogYW55ID0ge307XG4gICBcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dHMgPT4ge1xuICAgICAgaWYoaW5wdXRzLmlucHV0ID09IFwiYXJyYXlcIilcbiAgICAgIHtcbiAgICAgICAgZ3JvdXBbaW5wdXRzLmZpZWxkXSA9IHRoaXMuY3JlYXRlRm9ybUFycmF5KGlucHV0cyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncm91cFtpbnB1dHMuZmllbGRdID0gaW5wdXRzLnZhbGlkYXRpb24ucmVxdWlyZWQgPyBuZXcgRm9ybUNvbnRyb2woaW5wdXRzLnZhbHVlIHx8ICcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgICA6IG5ldyBGb3JtQ29udHJvbChpbnB1dHMudmFsdWUgfHwgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGdyb3VwKTtcbiAgfVxuICBjcmVhdGVGb3JtQXJyYXkoaW5wdXRzKXtcblxuICAgIGxldCBlbGVtZW50cyA6IGFueSA9IFtdO1xuICAgIGlucHV0cy5hcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudHNbZWxlbWVudFsnZmllbGQnXV0gPSBlbGVtZW50LnZhbGlkYXRpb24ucmVxdWlyZWQgPyBuZXcgRm9ybUNvbnRyb2woZWxlbWVudC52YWx1ZSB8fCAnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRm9ybUNvbnRyb2woZWxlbWVudC52YWx1ZSB8fCAnJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IEZvcm1BcnJheShlbGVtZW50cyk7XG4gIH1cbn1cblxuIl19