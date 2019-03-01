/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ApiService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        return this.http.get(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getJSON(url) {
        return this.http.get(url);
    }
    /**
     * @param {?} url
     * @param {?} updateData
     * @return {?}
     */
    post(url, updateData) {
        return this.http.post(url, updateData);
    }
    /**
     * @param {?} url
     * @param {?} file
     * @param {?} name
     * @return {?}
     */
    upload(url, file, name) {
        /** @type {?} */
        const formData = new FormData();
        if (file) {
            Array.from(file).forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => {
                formData.append(name, f);
            }));
        }
        console.log(formData);
        return this.http.post(url, formData, { reportProgress: true, observe: 'events' });
    }
}
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient)); }, token: ApiService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS1zZXJ2aWNlL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBS2xELE1BQU0sT0FBTyxVQUFVOzs7O0lBRXJCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7OztJQUV6QyxHQUFHLENBQUMsR0FBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsR0FBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTdCLENBQUM7Ozs7OztJQUNELElBQUksQ0FBQyxHQUFVLEVBQUMsVUFBYztRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRyxVQUFVLENBQUMsQ0FBQTtJQUN6QyxDQUFDOzs7Ozs7O0lBQ0QsTUFBTSxDQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUcsSUFBWTs7Y0FDcEMsUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFO1FBQ3pDLElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3pCLENBQUMsRUFBQyxDQUFBO1NBQ1A7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRyxFQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFVBQVU7Ozs7Ozs7O0lBT0wsMEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXQodXJsIDogc3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xuICB9XG4gIGdldEpTT04odXJsIDogc3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCggdXJsKTtcblxuICB9XG4gIHBvc3QodXJsOnN0cmluZyx1cGRhdGVEYXRhOmFueSl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCAsIHVwZGF0ZURhdGEpXG4gIH1cbiAgdXBsb2FkKHVybDogc3RyaW5nLCBmaWxlIDogW10gLCBuYW1lIDpzdHJpbmcpIHtcbiAgICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgQXJyYXkuZnJvbShmaWxlKS5mb3JFYWNoKGYgPT4ge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsZilcbiAgICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBmb3JtRGF0YSAsIHtyZXBvcnRQcm9ncmVzczogdHJ1ZSwgb2JzZXJ2ZTogJ2V2ZW50cyd9KTtcbiAgfVxufVxuIl19