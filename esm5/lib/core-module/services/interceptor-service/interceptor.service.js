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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy9pbnRlcmNlcHRvci1zZXJ2aWNlL2ludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0M7SUFBQTtJQWVBLENBQUM7Ozs7OztJQVhDLGtDQUFTOzs7OztJQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjs7WUFDMUMsaUJBQWlCLEdBQUcsNENBQTRDOztZQUNoRSxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDcEQsSUFBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNwQzs7Z0JBQ1EsU0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyx1QkFBdUIsRUFBRyxZQUFZLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUMsRUFBQyxDQUFDO1lBQ2hILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFPLENBQUMsQ0FBQztTQUM3Qjs7WUFDSyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLDRCQUE0QixFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUM7UUFDcEYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQWRGLFVBQVU7O0lBZVgscUJBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKSB7XG4gICAgY29uc3QgZG93bmxvYWRSZXBvcnRVcmwgPSAncHJvZ3JhbXNTdWJtaXNzaW9uU3RhdHVzL0RDUENSP2V2aWRlbmNlSWQ9J1xuICAgIGNvbnN0IGF1dGhUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoLXRva2VuJyk7XG4gICAgaWYocmVxLnVybC5pbmNsdWRlcyhkb3dubG9hZFJlcG9ydFVybCkpXG4gICAgICB7XG4gICAgICAgIGNvbnN0IGF1dGhSZXEgPSByZXEuY2xvbmUoe3NldEhlYWRlcnM6e1wiaW50ZXJuYWwtYWNjZXNzLXRva2VuXCIgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG93bmxvYWRSZXBvcnQtdG9rZW4nKX19KTtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGF1dGhSZXEpO1xuICAgICAgfVxuICAgICAgY29uc3QgYXV0aFJlcSA9IHJlcS5jbG9uZSh7IHNldEhlYWRlcnM6IHsgXCJYLWF1dGhlbnRpY2F0ZWQtdXNlci10b2tlblwiOiBhdXRoVG9rZW4gfSB9KVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoYXV0aFJlcSk7XG4gIH1cbn1cbiJdfQ==