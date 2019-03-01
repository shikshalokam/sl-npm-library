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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQ7SUFVRTtJQUNBLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNoQyxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLG92Q0FBdUM7O2lCQUV4Qzs7Ozs7dUJBRUUsS0FBSzsrQkFDTCxLQUFLOztJQVVSLHVCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSxnQkFBZ0I7OztJQUMzQixnQ0FBbUI7O0lBQ25CLHdDQUFzQjs7SUFDdEIscUNBQVU7O0lBQ1Ysd0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGVuYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbms6IGFueTtcbiAgQElucHV0KCkgcHJvZ3JhbXNTaG93O1xuICBwcm9ncmFtSWQ7XG4gIGFzc2Vzc21lbnRJZDtcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9ncmFtc1Nob3cpXG4gIH1cblxufVxuIl19