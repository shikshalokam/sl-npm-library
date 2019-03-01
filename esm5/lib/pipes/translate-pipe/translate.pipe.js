/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '../../services/translate-service/translate.service';
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
        this.resarray = '';
        this.obj = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        if (key.indexOf('.') === -1) {
            return this.translate['language'][key] || key;
        }
        else {
            /** @type {?} */
            var array = key.split(".");
            this.resarray = this.translate['language'];
            array.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                if (_this.resarray) {
                    _this.resarray = _this.resarray[element];
                }
            }));
            return this.resarray || key;
        }
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    return TranslatePipe;
}());
export { TranslatePipe };
if (false) {
    /** @type {?} */
    TranslatePipe.prototype.resarray;
    /** @type {?} */
    TranslatePipe.prototype.obj;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3RyYW5zbGF0ZS1waXBlL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUV0RjtJQU9FLHVCQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUYvQyxhQUFRLEdBQUMsRUFBRSxDQUFDO1FBQ1osUUFBRyxHQUFHLEVBQUUsQ0FBQztJQUN5QyxDQUFDOzs7OztJQUNuRCxpQ0FBUzs7OztJQUFULFVBQVUsR0FBUTtRQUFsQixpQkFlQztRQWRDLElBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO1NBQy9DO2FBQ0c7O2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUU7WUFDNUMsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLE9BQU87Z0JBQ25CLElBQUcsS0FBSSxDQUFDLFFBQVEsRUFBQztvQkFDZixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3hDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Z0JBdkJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLEtBQUs7aUJBQ1o7Ozs7Z0JBTFEsZ0JBQWdCOztJQTBCekIsb0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXBCWSxhQUFhOzs7SUFDeEIsaUNBQVk7O0lBQ1osNEJBQVM7Ozs7O0lBQ0csa0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyYW5zbGF0ZS1zZXJ2aWNlL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndHJhbnNsYXRlJyxcbiAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICByZXNhcnJheT0nJztcbiAgb2JqID0ge307XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuICB0cmFuc2Zvcm0oa2V5OiBhbnkpOiBhbnkge1xuICAgIGlmKGtleS5pbmRleE9mKCcuJykgPT09IC0xKVxuICAgIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVsnbGFuZ3VhZ2UnXVtrZXldIHx8IGtleTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgdmFyIGFycmF5ID0ga2V5LnNwbGl0KFwiLlwiKTtcbiAgICAgICAgdGhpcy5yZXNhcnJheSA9IHRoaXMudHJhbnNsYXRlWydsYW5ndWFnZSddIDtcbiAgICAgICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBpZih0aGlzLnJlc2FycmF5KXtcbiAgICAgICAgICAgIHRoaXMucmVzYXJyYXkgPSB0aGlzLnJlc2FycmF5W2VsZW1lbnRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5yZXNhcnJheSB8fCBrZXk7XG4gICAgfVxuICB9XG59XG4iXX0=