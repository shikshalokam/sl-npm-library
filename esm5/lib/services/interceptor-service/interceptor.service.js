/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    ApiInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        /** @type {?} */
        var downloadReportUrl = 'programsSubmissionStatus/DCPCR?evidenceId=';
        /** @type {?} */
        var authToken = localStorage.getItem('auth-token');
        if (req.url.includes(downloadReportUrl)) {
            /** @type {?} */
            var authReq_1 = req.clone({ setHeaders: { "internal-access-token": localStorage.getItem('downloadReport-token') } });
            return next.handle(authReq_1);
        }
        /** @type {?} */
        var authReq = req.clone({ setHeaders: { "X-authenticated-user-token": authToken } });
        return next.handle(authReq);
    };
    ApiInterceptor.decorators = [
        { type: Injectable }
    ];
    return ApiInterceptor;
}());
export { ApiInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbWNvcmVtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaW50ZXJjZXB0b3Itc2VydmljZS9pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDO0lBQUE7SUFlQSxDQUFDOzs7Ozs7SUFYQyxrQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7O1lBQzFDLGlCQUFpQixHQUFHLDRDQUE0Qzs7WUFDaEUsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3BELElBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFDcEM7O2dCQUNRLFNBQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsdUJBQXVCLEVBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFDLEVBQUMsQ0FBQztZQUNoSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBTyxDQUFDLENBQUM7U0FDN0I7O1lBQ0ssT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSw0QkFBNEIsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDO1FBQ3BGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFkRixVQUFVOztJQWVYLHFCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcikge1xuICAgIGNvbnN0IGRvd25sb2FkUmVwb3J0VXJsID0gJ3Byb2dyYW1zU3VibWlzc2lvblN0YXR1cy9EQ1BDUj9ldmlkZW5jZUlkPSdcbiAgICBjb25zdCBhdXRoVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aC10b2tlbicpO1xuICAgIGlmKHJlcS51cmwuaW5jbHVkZXMoZG93bmxvYWRSZXBvcnRVcmwpKVxuICAgICAge1xuICAgICAgICBjb25zdCBhdXRoUmVxID0gcmVxLmNsb25lKHtzZXRIZWFkZXJzOntcImludGVybmFsLWFjY2Vzcy10b2tlblwiIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rvd25sb2FkUmVwb3J0LXRva2VuJyl9fSk7XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShhdXRoUmVxKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF1dGhSZXEgPSByZXEuY2xvbmUoeyBzZXRIZWFkZXJzOiB7IFwiWC1hdXRoZW50aWNhdGVkLXVzZXItdG9rZW5cIjogYXV0aFRva2VuIH0gfSlcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGF1dGhSZXEpO1xuICB9XG59XG4iXX0=