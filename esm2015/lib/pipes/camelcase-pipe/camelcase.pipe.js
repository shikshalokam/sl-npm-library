/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class CamelCasePipe {
    constructor() { }
    /**
     * @param {?} camelCase
     * @return {?}
     */
    transform(camelCase) {
        if (camelCase == null || camelCase == "") {
            return camelCase;
        }
        camelCase = camelCase.trim();
        /** @type {?} */
        var newText = "";
        for (var i = 0; i < camelCase.length; i++) {
            if (/[A-Z]/.test(camelCase[i])
                && i != 0
                && /[a-z]/.test(camelCase[i - 1])) {
                newText += " ";
            }
            if (i == 0 && /[a-z]/.test(camelCase[i])) {
                newText += camelCase[i].toUpperCase();
            }
            else {
                newText += camelCase[i];
            }
        }
        return newText;
    }
}
CamelCasePipe.decorators = [
    { type: Pipe, args: [{
                name: 'camelcase',
                pure: false
            },] }
];
/** @nocollapse */
CamelCasePipe.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZWxjYXNlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2NhbWVsY2FzZS1waXBlL2NhbWVsY2FzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRCxNQUFNLE9BQU8sYUFBYTtJQUN4QixnQkFBZSxDQUFDOzs7OztJQUNoQixTQUFTLENBQUMsU0FBYztRQUVwQixJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLEVBQUUsRUFBRTtZQUN4QyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQ3pCLE9BQU8sR0FBRyxFQUFFO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQ3ZCLENBQUMsSUFBSSxDQUFDO21CQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLElBQUksR0FBRyxDQUFDO2FBQ2hCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hDO2dCQUNFLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QjtTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBN0JKLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLEtBQUs7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY2FtZWxjYXNlJyxcbiAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ2FtZWxDYXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIHRyYW5zZm9ybShjYW1lbENhc2U6IGFueSk6IGFueSB7XG4gICBcbiAgICAgIGlmIChjYW1lbENhc2UgPT0gbnVsbCB8fCBjYW1lbENhc2UgPT0gXCJcIikge1xuICAgICAgICByZXR1cm4gY2FtZWxDYXNlO1xuICAgICAgfVxuICBcbiAgICAgIGNhbWVsQ2FzZSA9IGNhbWVsQ2FzZS50cmltKCk7XG4gICAgICB2YXIgbmV3VGV4dCA9IFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbWVsQ2FzZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoL1tBLVpdLy50ZXN0KGNhbWVsQ2FzZVtpXSlcbiAgICAgICAgICAgICYmIGkgIT0gMFxuICAgICAgICAgICAgJiYgL1thLXpdLy50ZXN0KGNhbWVsQ2FzZVtpLTFdKSkge1xuICAgICAgICAgIG5ld1RleHQgKz0gXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT0gMCAmJiAvW2Etel0vLnRlc3QoY2FtZWxDYXNlW2ldKSlcbiAgICAgICAge1xuICAgICAgICAgIG5ld1RleHQgKz0gY2FtZWxDYXNlW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBjYW1lbENhc2VbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gbmV3VGV4dDtcbiAgICB9XG4gIH1cblxuIl19