/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class TranslateService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.language = {};
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const langPath = `assets/i18n/${lang || 'en'}.json`;
            // const langPath = `assets/i18n/od.json`;
            this.http.get(langPath).subscribe((/**
             * @param {?} translation
             * @return {?}
             */
            translation => {
                this.language = Object.assign({}, translation || {});
                resolve(this.language);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.language = {};
                resolve(this.language);
            }));
        }));
    }
}
TranslateService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /** @type {?} */
    TranslateService.prototype.language;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RyYW5zbGF0ZS1zZXJ2aWNlL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBSTNCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUVxQixDQUFDOzs7OztJQUV6QyxHQUFHLENBQUMsSUFBWTtRQUNkLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztrQkFDbkMsUUFBUSxHQUFHLGVBQWUsSUFBSSxJQUFJLElBQUksT0FBTztZQUNuRCwwQ0FBMEM7WUFFMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUssUUFBUSxDQUFDLENBQUMsU0FBUzs7OztZQUNuQyxXQUFXLENBQUMsRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckQsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QixDQUFDOzs7O1lBQ0QsS0FBSyxDQUFDLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXZCRixVQUFVOzs7O1lBRkYsVUFBVTs7OztJQUtqQixvQ0FBbUI7Ozs7O0lBRVAsZ0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xuXG4gIGxhbmd1YWdlOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIHVzZShsYW5nOiBzdHJpbmcpOiBQcm9taXNlPHt9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHt9PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBsYW5nUGF0aCA9IGBhc3NldHMvaTE4bi8ke2xhbmcgfHwgJ2VuJ30uanNvbmA7XG4gICAgICAvLyBjb25zdCBsYW5nUGF0aCA9IGBhc3NldHMvaTE4bi9vZC5qc29uYDtcblxuICAgICAgdGhpcy5odHRwLmdldDx7fT4obGFuZ1BhdGgpLnN1YnNjcmliZShcbiAgICAgICAgdHJhbnNsYXRpb24gPT4ge1xuICAgICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0cmFuc2xhdGlvbiB8fCB7fSk7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmxhbmd1YWdlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMubGFuZ3VhZ2UgPSB7fTtcbiAgICAgICAgICByZXNvbHZlKHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=