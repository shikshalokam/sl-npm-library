/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class NoValuePipe {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value == null || value == "") {
            return "-NA-";
        }
        return value;
    }
}
NoValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'blank',
                pure: false
            },] }
];
/** @nocollapse */
NoValuePipe.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tdmFsdWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbWNvcmVtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbm8tdmFsdWUtcGlwZS9uby12YWx1ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRCxNQUFNLE9BQU8sV0FBVztJQUN0QixnQkFBZSxDQUFDOzs7OztJQUNoQixTQUFTLENBQUMsS0FBVTtRQUVoQixJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFaSixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYmxhbmsnLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOb1ZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcbiAgIFxuICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gXCJcIikge1xuICAgICAgICByZXR1cm4gXCItTkEtXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiJdfQ==