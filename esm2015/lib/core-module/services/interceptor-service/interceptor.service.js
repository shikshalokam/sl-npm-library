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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy9pbnRlcmNlcHRvci1zZXJ2aWNlL2ludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRM0MsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUd6QixTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjs7Y0FDMUMsaUJBQWlCLEdBQUcsNENBQTRDOztjQUNoRSxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDcEQsSUFBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNwQzs7a0JBQ1EsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyx1QkFBdUIsRUFBRyxZQUFZLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUMsRUFBQyxDQUFDO1lBQ2hILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3Qjs7Y0FDSyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLDRCQUE0QixFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUM7UUFDcEYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQWRGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcbiAgICBjb25zdCBkb3dubG9hZFJlcG9ydFVybCA9ICdwcm9ncmFtc1N1Ym1pc3Npb25TdGF0dXMvRENQQ1I/ZXZpZGVuY2VJZD0nXG4gICAgY29uc3QgYXV0aFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgtdG9rZW4nKTtcbiAgICBpZihyZXEudXJsLmluY2x1ZGVzKGRvd25sb2FkUmVwb3J0VXJsKSlcbiAgICAgIHtcbiAgICAgICAgY29uc3QgYXV0aFJlcSA9IHJlcS5jbG9uZSh7c2V0SGVhZGVyczp7XCJpbnRlcm5hbC1hY2Nlc3MtdG9rZW5cIiA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb3dubG9hZFJlcG9ydC10b2tlbicpfX0pO1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoYXV0aFJlcSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhdXRoUmVxID0gcmVxLmNsb25lKHsgc2V0SGVhZGVyczogeyBcIlgtYXV0aGVudGljYXRlZC11c2VyLXRva2VuXCI6IGF1dGhUb2tlbiB9IH0pXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShhdXRoUmVxKTtcbiAgfVxufVxuIl19