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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvc2VydmljZXMvYXBpLXNlcnZpY2UvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFbEQ7SUFLRSxvQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRXpDLHdCQUFHOzs7O0lBQUgsVUFBSSxHQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUNELDRCQUFPOzs7O0lBQVAsVUFBUSxHQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUM7SUFFN0IsQ0FBQzs7Ozs7O0lBQ0QseUJBQUk7Ozs7O0lBQUosVUFBSyxHQUFVLEVBQUMsVUFBYztRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRyxVQUFVLENBQUMsQ0FBQTtJQUN6QyxDQUFDOzs7Ozs7O0lBQ0QsMkJBQU07Ozs7OztJQUFOLFVBQU8sR0FBVyxFQUFFLElBQVMsRUFBRyxJQUFZOztZQUNwQyxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUU7UUFDekMsSUFBSSxJQUFJLEVBQUU7WUFDUixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3pCLENBQUMsRUFBQyxDQUFBO1NBQ1A7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRyxFQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Z0JBMUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsVUFBVTs7O3FCQURuQjtDQThCQyxBQTNCRCxJQTJCQztTQXhCWSxVQUFVOzs7Ozs7SUFFVCwwQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldCh1cmwgOiBzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCk7XG4gIH1cbiAgZ2V0SlNPTih1cmwgOiBzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCB1cmwpO1xuXG4gIH1cbiAgcG9zdCh1cmw6c3RyaW5nLHVwZGF0ZURhdGE6YW55KXtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsICwgdXBkYXRlRGF0YSlcbiAgfVxuICB1cGxvYWQodXJsOiBzdHJpbmcsIGZpbGUgOiBbXSAsIG5hbWUgOnN0cmluZykge1xuICAgIGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICBBcnJheS5mcm9tKGZpbGUpLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSxmKVxuICAgICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGZvcm1EYXRhICwge3JlcG9ydFByb2dyZXNzOiB0cnVlLCBvYnNlcnZlOiAnZXZlbnRzJ30pO1xuICB9XG59XG4iXX0=