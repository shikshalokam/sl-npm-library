/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class SearchDirective {
    constructor() {
        this.sendSearchValue = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.search();
    }
    /**
     * @return {?}
     */
    search() {
        /** @type {?} */
        const input = document.getElementById('search');
        /** @type {?} */
        const example = fromEvent(input, 'keyup');
        /** @type {?} */
        const debouncedInput = example.pipe(debounceTime(1000));
        /** @type {?} */
        const subscribe = debouncedInput.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            this.sendSearchValue.emit(this.searchValue);
        }));
    }
}
SearchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSearch]'
            },] }
];
/** @nocollapse */
SearchDirective.ctorParameters = () => [];
SearchDirective.propDecorators = {
    searchValue: [{ type: Input }],
    sendSearchValue: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SearchDirective.prototype.searchValue;
    /** @type {?} */
    SearchDirective.prototype.sendSearchValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2RpcmVjdGl2ZXMvc2VhcmNoLWRpcmVjdGl2ZS9zZWFyY2guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTlDLE1BQU0sT0FBTyxlQUFlO0lBSTFCO1FBRlMsb0JBQWUsR0FBRSxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTdCLENBQUM7Ozs7SUFDakIsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBQ0QsTUFBTTs7Y0FDRSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7O2NBQ3pDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQzs7Y0FDbkMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDOztjQUNqRCxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVM7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTthQUN4Qjs7Ozs7MEJBRUUsS0FBSzs4QkFDTCxNQUFNOzs7O0lBRFAsc0NBQTZCOztJQUM3QiwwQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBTZWFyY2hdJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzZWFyY2hWYWx1ZTogc3RyaW5nO1xuICBAT3V0cHV0KClzZW5kU2VhcmNoVmFsdWU9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuc2VhcmNoKCk7XG4gIH1cbiAgc2VhcmNoKCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG4gICAgY29uc3QgZXhhbXBsZSA9IGZyb21FdmVudChpbnB1dCwgJ2tleXVwJyk7XG4gICAgY29uc3QgZGVib3VuY2VkSW5wdXQgPSBleGFtcGxlLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKTtcbiAgICBjb25zdCBzdWJzY3JpYmUgPSBkZWJvdW5jZWRJbnB1dC5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIHRoaXMuc2VuZFNlYXJjaFZhbHVlLmVtaXQodGhpcy5zZWFyY2hWYWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==