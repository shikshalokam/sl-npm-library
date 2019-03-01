/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var NoValuePipe = /** @class */ (function () {
    function NoValuePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NoValuePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value == null || value == "") {
            return "-NA-";
        }
        return value;
    };
    NoValuePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'blank',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    NoValuePipe.ctorParameters = function () { return []; };
    return NoValuePipe;
}());
export { NoValuePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tdmFsdWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbWNvcmVtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbm8tdmFsdWUtcGlwZS9uby12YWx1ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUtFO0lBQWUsQ0FBQzs7Ozs7SUFDaEIsK0JBQVM7Ozs7SUFBVCxVQUFVLEtBQVU7UUFFaEIsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDaEMsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBWkosSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxPQUFPO29CQUNiLElBQUksRUFBRSxLQUFLO2lCQUNaOzs7O0lBVUMsa0JBQUM7Q0FBQSxBQWJILElBYUc7U0FUVSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdibGFuaycsXG4gIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE5vVmFsdWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBcIi1OQS1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuIl19