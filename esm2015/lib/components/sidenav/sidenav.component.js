/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SidenavComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.programsShow);
    }
}
SidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidenav',
                template: "  <div class=\"sideNavheading\" routerLink=\"../programs\"  matTooltip=\"{{'message.goToProgramDashboard' | translate}}\" *ngIf=\"programsShow\">\n    <i class=\"material-icons\">\n      keyboard_arrow_left\n    </i> {{ 'headings.programs' | translate }}\n  </div>\n    <!-- <div routerLink = \"{{option.anchorLink}}\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLinkActive=\"active\"*ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n    <!-- <div [routerLink]=\"['assessments/:programId/:assessmentId/'+option.link?.anchorLink,option.link.programId,option.link.assessmentId ]\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n        <!-- <div [routerLink]=\"[option.link.anchorLink ]\"  [queryParamsHandling]=\"preserve\" [queryParams]=\"{ programId : option.link.programId , assessmentId : option.link.assessmentId}\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n\n\n\n    <div [routerLink]=\"[option.anchorLink ]\"  routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\">\n        <span class=\"sideNavSubheading\"> \n            {{ option.value | translate }}\n          </span>\n      </div>\n   ",
                styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;height:40px;display:flex;cursor:pointer}.subHeading{color:var(--grey-color)}.sideNavheading{height:40px;display:flex;align-items:center;padding:0 0 0 5px;cursor:pointer}.active,.sideNavheading:hover,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}"]
            }] }
];
/** @nocollapse */
SidenavComponent.ctorParameters = () => [];
SidenavComponent.propDecorators = {
    link: [{ type: Input }],
    programsShow: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNekQsTUFBTSxPQUFPLGdCQUFnQjtJQUszQjtJQUNBLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixvdkNBQXVDOzthQUV4Qzs7Ozs7bUJBRUUsS0FBSzsyQkFDTCxLQUFLOzs7O0lBRE4sZ0NBQW1COztJQUNuQix3Q0FBc0I7O0lBQ3RCLHFDQUFVOztJQUNWLHdDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZW5hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsaW5rOiBhbnk7XG4gIEBJbnB1dCgpIHByb2dyYW1zU2hvdztcbiAgcHJvZ3JhbUlkO1xuICBhc3Nlc3NtZW50SWQ7XG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZ3JhbXNTaG93KVxuICB9XG5cbn1cbiJdfQ==