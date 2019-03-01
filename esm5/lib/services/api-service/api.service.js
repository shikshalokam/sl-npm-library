/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.get = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http.get(url);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.getJSON = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http.get(url);
    };
    /**
     * @param {?} url
     * @param {?} updateData
     * @return {?}
     */
    ApiService.prototype.post = /**
     * @param {?} url
     * @param {?} updateData
     * @return {?}
     */
    function (url, updateData) {
        return this.http.post(url, updateData);
    };
    /**
     * @param {?} url
     * @param {?} file
     * @param {?} name
     * @return {?}
     */
    ApiService.prototype.upload = /**
     * @param {?} url
     * @param {?} file
     * @param {?} name
     * @return {?}
     */
    function (url, file, name) {
        /** @type {?} */
        var formData = new FormData();
        if (file) {
            Array.from(file).forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                formData.append(name, f);
            }));
        }
        console.log(formData);
        return this.http.post(url, formData, { reportProgress: true, observe: 'events' });
    };
    ApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());
export { ApiService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS1zZXJ2aWNlL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRWxEO0lBS0Usb0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7OztJQUV6Qyx3QkFBRzs7OztJQUFILFVBQUksR0FBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDRCw0QkFBTzs7OztJQUFQLFVBQVEsR0FBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTdCLENBQUM7Ozs7OztJQUNELHlCQUFJOzs7OztJQUFKLFVBQUssR0FBVSxFQUFDLFVBQWM7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUcsVUFBVSxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7OztJQUNELDJCQUFNOzs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxJQUFTLEVBQUcsSUFBWTs7WUFDcEMsUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFO1FBQ3pDLElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUNwQixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQTtZQUN6QixDQUFDLEVBQUMsQ0FBQTtTQUNQO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUcsRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O2dCQTFCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFVBQVU7OztxQkFEbkI7Q0E4QkMsQUEzQkQsSUEyQkM7U0F4QlksVUFBVTs7Ozs7O0lBRVQsMEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXQodXJsIDogc3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xuICB9XG4gIGdldEpTT04odXJsIDogc3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCggdXJsKTtcblxuICB9XG4gIHBvc3QodXJsOnN0cmluZyx1cGRhdGVEYXRhOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCAsIHVwZGF0ZURhdGEpXG4gIH1cbiAgdXBsb2FkKHVybDogc3RyaW5nLCBmaWxlIDogW10gLCBuYW1lIDpzdHJpbmcpIHtcbiAgICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgQXJyYXkuZnJvbShmaWxlKS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsZilcbiAgICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBmb3JtRGF0YSAsIHtyZXBvcnRQcm9ncmVzczogdHJ1ZSwgb2JzZXJ2ZTogJ2V2ZW50cyd9KTtcbiAgfVxufVxuIl19