/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var SearchDirective = /** @class */ (function () {
    function SearchDirective() {
        this.sendSearchValue = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SearchDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.search();
    };
    /**
     * @return {?}
     */
    SearchDirective.prototype.search = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var input = document.getElementById('search');
        /** @type {?} */
        var example = fromEvent(input, 'keyup');
        /** @type {?} */
        var debouncedInput = example.pipe(debounceTime(1000));
        /** @type {?} */
        var subscribe = debouncedInput.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.sendSearchValue.emit(_this.searchValue);
        }));
    };
    SearchDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSearch]'
                },] }
    ];
    /** @nocollapse */
    SearchDirective.ctorParameters = function () { return []; };
    SearchDirective.propDecorators = {
        searchValue: [{ type: Input }],
        sendSearchValue: [{ type: Output }]
    };
    return SearchDirective;
}());
export { SearchDirective };
if (false) {
    /** @type {?} */
    SearchDirective.prototype.searchValue;
    /** @type {?} */
    SearchDirective.prototype.sendSearchValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2RpcmVjdGl2ZXMvc2VhcmNoLWRpcmVjdGl2ZS9zZWFyY2guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDO0lBT0U7UUFGUyxvQkFBZSxHQUFFLElBQUksWUFBWSxFQUFFLENBQUM7SUFFN0IsQ0FBQzs7OztJQUNqQixrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUNELGdDQUFNOzs7SUFBTjtRQUFBLGlCQU9DOztZQU5PLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQzs7WUFDekMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDOztZQUNuQyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2pELFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUM1QyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7OzhCQUVFLEtBQUs7a0NBQ0wsTUFBTTs7SUFjVCxzQkFBQztDQUFBLEFBbkJELElBbUJDO1NBaEJZLGVBQWU7OztJQUMxQixzQ0FBNkI7O0lBQzdCLDBDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFNlYXJjaF0nXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNlYXJjaFZhbHVlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKXNlbmRTZWFyY2hWYWx1ZT0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zZWFyY2goKTtcbiAgfVxuICBzZWFyY2goKXtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbiAgICBjb25zdCBleGFtcGxlID0gZnJvbUV2ZW50KGlucHV0LCAna2V5dXAnKTtcbiAgICBjb25zdCBkZWJvdW5jZWRJbnB1dCA9IGV4YW1wbGUucGlwZShkZWJvdW5jZVRpbWUoMTAwMCkpO1xuICAgIGNvbnN0IHN1YnNjcmliZSA9IGRlYm91bmNlZElucHV0LnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgdGhpcy5zZW5kU2VhcmNoVmFsdWUuZW1pdCh0aGlzLnNlYXJjaFZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19