/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
export class ApiInterceptor {
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const downloadReportUrl = 'programsSubmissionStatus/DCPCR?evidenceId=';
        /** @type {?} */
        const authToken = localStorage.getItem('auth-token');
        if (req.url.includes(downloadReportUrl)) {
            /** @type {?} */
            const authReq = req.clone({ setHeaders: { "internal-access-token": localStorage.getItem('downloadReport-token') } });
            return next.handle(authReq);
        }
        /** @type {?} */
        const authReq = req.clone({ setHeaders: { "X-authenticated-user-token": authToken } });
        return next.handle(authReq);
    }
}
ApiInterceptor.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbWNvcmVtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaW50ZXJjZXB0b3Itc2VydmljZS9pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFHekIsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7O2NBQzFDLGlCQUFpQixHQUFHLDRDQUE0Qzs7Y0FDaEUsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3BELElBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFDcEM7O2tCQUNRLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsdUJBQXVCLEVBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFDLEVBQUMsQ0FBQztZQUNoSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7O2NBQ0ssT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSw0QkFBNEIsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDO1FBQ3BGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFkRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKSB7XG4gICAgY29uc3QgZG93bmxvYWRSZXBvcnRVcmwgPSAncHJvZ3JhbXNTdWJtaXNzaW9uU3RhdHVzL0RDUENSP2V2aWRlbmNlSWQ9J1xuICAgIGNvbnN0IGF1dGhUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoLXRva2VuJyk7XG4gICAgaWYocmVxLnVybC5pbmNsdWRlcyhkb3dubG9hZFJlcG9ydFVybCkpXG4gICAgICB7XG4gICAgICAgIGNvbnN0IGF1dGhSZXEgPSByZXEuY2xvbmUoe3NldEhlYWRlcnM6e1wiaW50ZXJuYWwtYWNjZXNzLXRva2VuXCIgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG93bmxvYWRSZXBvcnQtdG9rZW4nKX19KTtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGF1dGhSZXEpO1xuICAgICAgfVxuICAgICAgY29uc3QgYXV0aFJlcSA9IHJlcS5jbG9uZSh7IHNldEhlYWRlcnM6IHsgXCJYLWF1dGhlbnRpY2F0ZWQtdXNlci10b2tlblwiOiBhdXRoVG9rZW4gfSB9KVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoYXV0aFJlcSk7XG4gIH1cbn1cbiJdfQ==