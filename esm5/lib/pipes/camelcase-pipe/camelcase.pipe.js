/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var CamelCasePipe = /** @class */ (function () {
    function CamelCasePipe() {
    }
    /**
     * @param {?} camelCase
     * @return {?}
     */
    CamelCasePipe.prototype.transform = /**
     * @param {?} camelCase
     * @return {?}
     */
    function (camelCase) {
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
    };
    CamelCasePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'camelcase',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    CamelCasePipe.ctorParameters = function () { return []; };
    return CamelCasePipe;
}());
export { CamelCasePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZWxjYXNlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2NhbWVsY2FzZS1waXBlL2NhbWVsY2FzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUtFO0lBQWUsQ0FBQzs7Ozs7SUFDaEIsaUNBQVM7Ozs7SUFBVCxVQUFVLFNBQWM7UUFFcEIsSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxFQUFFLEVBQUU7WUFDeEMsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDOztZQUN6QixPQUFPLEdBQUcsRUFBRTtRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUN2QixDQUFDLElBQUksQ0FBQzttQkFDTixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLEdBQUcsQ0FBQzthQUNoQjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QztnQkFDRSxPQUFPLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekI7U0FDRjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2dCQTdCSixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLElBQUksRUFBRSxLQUFLO2lCQUNaOzs7O0lBMkJDLG9CQUFDO0NBQUEsQUE5QkgsSUE4Qkc7U0ExQlUsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY2FtZWxjYXNlJyxcbiAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ2FtZWxDYXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIHRyYW5zZm9ybShjYW1lbENhc2U6IGFueSk6IGFueSB7XG4gICBcbiAgICAgIGlmIChjYW1lbENhc2UgPT0gbnVsbCB8fCBjYW1lbENhc2UgPT0gXCJcIikge1xuICAgICAgICByZXR1cm4gY2FtZWxDYXNlO1xuICAgICAgfVxuICBcbiAgICAgIGNhbWVsQ2FzZSA9IGNhbWVsQ2FzZS50cmltKCk7XG4gICAgICB2YXIgbmV3VGV4dCA9IFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbWVsQ2FzZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoL1tBLVpdLy50ZXN0KGNhbWVsQ2FzZVtpXSlcbiAgICAgICAgICAgICYmIGkgIT0gMFxuICAgICAgICAgICAgJiYgL1thLXpdLy50ZXN0KGNhbWVsQ2FzZVtpLTFdKSkge1xuICAgICAgICAgIG5ld1RleHQgKz0gXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT0gMCAmJiAvW2Etel0vLnRlc3QoY2FtZWxDYXNlW2ldKSlcbiAgICAgICAge1xuICAgICAgICAgIG5ld1RleHQgKz0gY2FtZWxDYXNlW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBjYW1lbENhc2VbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gbmV3VGV4dDtcbiAgICB9XG4gIH1cblxuIl19