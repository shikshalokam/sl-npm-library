/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    /**
     * @return {?}
     */
    SidenavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.programsShow);
    };
    SidenavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidenav',
                    template: "  <div class=\"sideNavheading\" routerLink=\"../programs\"  matTooltip=\"{{'message.goToProgramDashboard' | translate}}\" *ngIf=\"programsShow\">\n    <i class=\"material-icons\">\n      keyboard_arrow_left\n    </i> {{ 'headings.programs' | translate }}\n  </div>\n    <!-- <div routerLink = \"{{option.anchorLink}}\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLinkActive=\"active\"*ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n    <!-- <div [routerLink]=\"['assessments/:programId/:assessmentId/'+option.link?.anchorLink,option.link.programId,option.link.assessmentId ]\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n        <!-- <div [routerLink]=\"[option.link.anchorLink ]\"  [queryParamsHandling]=\"preserve\" [queryParams]=\"{ programId : option.link.programId , assessmentId : option.link.assessmentId}\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n\n\n\n    <div [routerLink]=\"[option.anchorLink ]\"  routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\">\n        <span class=\"sideNavSubheading\"> \n            {{ option.value | translate }}\n          </span>\n      </div>\n   ",
                    styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;height:40px;display:flex;cursor:pointer}.subHeading{color:var(--grey-color)}.sideNavheading{height:40px;display:flex;align-items:center;padding:0 0 0 5px;cursor:pointer}.active,.sideNavheading:hover,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    SidenavComponent.ctorParameters = function () { return []; };
    SidenavComponent.propDecorators = {
        link: [{ type: Input }],
        programsShow: [{ type: Input }]
    };
    return SidenavComponent;
}());
export { SidenavComponent };
if (false) {
    /** @type {?} */
    SidenavComponent.prototype.link;
    /** @type {?} */
    SidenavComponent.prototype.programsShow;
    /** @type {?} */
    SidenavComponent.prototype.programId;
    /** @type {?} */
    SidenavComponent.prototype.assessmentId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RDtJQVVFO0lBQ0EsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2hDLENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsb3ZDQUF1Qzs7aUJBRXhDOzs7Ozt1QkFFRSxLQUFLOytCQUNMLEtBQUs7O0lBVVIsdUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGdCQUFnQjs7O0lBQzNCLGdDQUFtQjs7SUFDbkIsd0NBQXNCOztJQUN0QixxQ0FBVTs7SUFDVix3Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGVuYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGVuYXYuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGluazogYW55O1xuICBASW5wdXQoKSBwcm9ncmFtc1Nob3c7XG4gIHByb2dyYW1JZDtcbiAgYXNzZXNzbWVudElkO1xuICBjb25zdHJ1Y3RvcigpIHsgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb2dyYW1zU2hvdylcbiAgfVxuXG59XG4iXX0=