/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '../../services/translate-service/translate.service';
export class TranslatePipe {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
        this.resarray = '';
        this.obj = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
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
            element => {
                if (this.resarray) {
                    this.resarray = this.resarray[element];
                }
            }));
            return this.resarray || key;
        }
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3RyYW5zbGF0ZS1waXBlL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQU10RixNQUFNLE9BQU8sYUFBYTs7OztJQUd4QixZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUYvQyxhQUFRLEdBQUMsRUFBRSxDQUFDO1FBQ1osUUFBRyxHQUFHLEVBQUUsQ0FBQztJQUN5QyxDQUFDOzs7OztJQUNuRCxTQUFTLENBQUMsR0FBUTtRQUNoQixJQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFCO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUMvQzthQUNHOztnQkFDSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFFO1lBQzVDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztvQkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3hDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7O1lBdkJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLEtBQUs7YUFDWjs7OztZQUxRLGdCQUFnQjs7OztJQU92QixpQ0FBWTs7SUFDWiw0QkFBUzs7Ozs7SUFDRyxrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhbnNsYXRlLXNlcnZpY2UvdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0cmFuc2xhdGUnLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHJlc2FycmF5PScnO1xuICBvYmogPSB7fTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybShrZXk6IGFueSk6IGFueSB7XG4gICAgaWYoa2V5LmluZGV4T2YoJy4nKSA9PT0gLTEpXG4gICAge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlWydsYW5ndWFnZSddW2tleV0gfHwga2V5O1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB2YXIgYXJyYXkgPSBrZXkuc3BsaXQoXCIuXCIpO1xuICAgICAgICB0aGlzLnJlc2FycmF5ID0gdGhpcy50cmFuc2xhdGVbJ2xhbmd1YWdlJ10gO1xuICAgICAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmKHRoaXMucmVzYXJyYXkpe1xuICAgICAgICAgICAgdGhpcy5yZXNhcnJheSA9IHRoaXMucmVzYXJyYXlbZWxlbWVudF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLnJlc2FycmF5IHx8IGtleTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==