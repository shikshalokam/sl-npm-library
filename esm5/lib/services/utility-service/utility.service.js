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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtY29yZW1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBQy9FO0lBSUUsd0JBQW9CLFFBQWtCLEVBQVMsT0FBMEI7UUFBckQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQUksQ0FBQzs7OztJQUU5RSwrQkFBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDRCxtQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCxtQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsZ0NBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFBZCxpQkFlQzs7WUFiSyxLQUFLLEdBQVEsRUFBRTtRQUVuQixNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTTtZQUNuQixJQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksT0FBTyxFQUMxQjtnQkFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEQ7aUJBQ0c7Z0JBQ0YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztvQkFDM0csQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFDRCx3Q0FBZTs7OztJQUFmLFVBQWdCLE1BQU07O1lBRWhCLFFBQVEsR0FBUyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUMxQixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQzlFLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkF4Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxRQUFRO2dCQUNSLGlCQUFpQjs7O3lCQUYxQjtDQTZDQyxBQXpDRCxJQXlDQztTQXRDWSxjQUFjOzs7Ozs7SUFDYixrQ0FBMEI7Ozs7O0lBQUMsaUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4U3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZ3gtc3Bpbm5lcic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVdGlsaXR5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb24gOkxvY2F0aW9uLHByaXZhdGUgc3Bpbm5lcjogTmd4U3Bpbm5lclNlcnZpY2UpIHsgfVxuXG4gIG9uQmFjaygpe1xuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICB9XG4gIGxvYWRlclNob3coKXtcbiAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuICB9XG4gIGxvYWRlckhpZGUoKXtcbiAgICB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuICB9XG4gIHRvR3JvdXAoaW5wdXRzKSB7XG5cbiAgICBsZXQgZ3JvdXA6IGFueSA9IHt9O1xuICAgXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXRzID0+IHtcbiAgICAgIGlmKGlucHV0cy5pbnB1dCA9PSBcImFycmF5XCIpXG4gICAgICB7XG4gICAgICAgIGdyb3VwW2lucHV0cy5maWVsZF0gPSB0aGlzLmNyZWF0ZUZvcm1BcnJheShpbnB1dHMpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JvdXBbaW5wdXRzLmZpZWxkXSA9IGlucHV0cy52YWxpZGF0aW9uLnJlcXVpcmVkID8gbmV3IEZvcm1Db250cm9sKGlucHV0cy52YWx1ZSB8fCAnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgICAgOiBuZXcgRm9ybUNvbnRyb2woaW5wdXRzLnZhbHVlIHx8ICcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEZvcm1Hcm91cChncm91cCk7XG4gIH1cbiAgY3JlYXRlRm9ybUFycmF5KGlucHV0cyl7XG5cbiAgICBsZXQgZWxlbWVudHMgOiBhbnkgPSBbXTtcbiAgICBpbnB1dHMuYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnRzW2VsZW1lbnRbJ2ZpZWxkJ11dID0gZWxlbWVudC52YWxpZGF0aW9uLnJlcXVpcmVkID8gbmV3IEZvcm1Db250cm9sKGVsZW1lbnQudmFsdWUgfHwgJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IEZvcm1Db250cm9sKGVsZW1lbnQudmFsdWUgfHwgJycpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBGb3JtQXJyYXkoZWxlbWVudHMpO1xuICB9XG59XG5cbiJdfQ==