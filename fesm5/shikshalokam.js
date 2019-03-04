import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Location, CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDividerModule, MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatTooltipModule, MatInputModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Component, Input, Inject, Output, EventEmitter, Injectable, NgModule, Directive, Pipe, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule as MatButtonModule$1 } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-breadcrumb',
                    template: "<div class =\" breadCrumbheading\">\n  <span *ngFor=\"let rout of breadcrumbRoute;last as isLast\" [routerLink]=\"[rout.url,rout.id ]\"routerLinkActive=\"active\">\n   {{rout.label}} <span *ngIf=\"!isLast\"> > </span>\n   </span>\n</div>\n",
                    styles: [".breadCrumbheading{padding-bottom:50px}.active{color:var(--primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return []; };
    BreadcrumbComponent.propDecorators = {
        breadcrumbRoute: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DashboardBlocksComponent = /** @class */ (function () {
    function DashboardBlocksComponent() {
    }
    /**
     * @return {?}
     */
    DashboardBlocksComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DashboardBlocksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dashboard-blocks',
                    template: "\n<div class=\"_flex-box _justify-content-center wrapper\">\n\n  <div class=\"_full-width \">\n    <div *ngFor=\"let dashBoard of list\" >\n      <div class=\" col-lg-3 col-md-4 col-sm-6 col-xs-12 margin-top _justify-content-center flex-box\" routerLink=\"{{dashBoard.anchorLink}}\" title=\"{{dashBoard.tooltip|translate}}\">\n        <div class=\" box iconBox\">\n          <i class=\"material-icons folderIcon\">\n            reorder\n          </i>\n        </div>\n        <div class=\" box \">\n          <div class=\"description\">\n              {{dashBoard.tooltip|translate}}\n          </div>\n          \n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>",
                    styles: [".flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.description{color:var(--grey-color);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:110px;text-align:center}.dashBoardIcon{width:200px;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;border-radius:20px;margin:0 20px}.margin-top{margin-top:20px}.folderIcon{font-size:70px;color:var(--primary-color);display:flex;align-items:center}.wrapper{padding:0 20px}.box{width:100%;display:flex;justify-content:center}.iconBox{background-image:linear-gradient(to top,#e8eced 10%,#fff 90%);height:120px;width:120px;border:1px solid var(--grey-color);border-radius:15px}"]
                }] }
    ];
    /** @nocollapse */
    DashboardBlocksComponent.ctorParameters = function () { return []; };
    DashboardBlocksComponent.propDecorators = {
        list: [{ type: Input }]
    };
    return DashboardBlocksComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DialogBoxComponent = /** @class */ (function () {
    function DialogBoxComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    DialogBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DialogBoxComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    DialogBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-dialog-box',
                    template: "<h1 mat-dialog-title>{{'message.alertHeading' | translate}}</h1>\n<div mat-dialog-content>\n  <p>{{'message.alertMessage' | translate}}</p>\n</div>\n<div mat-dialog-actions class=\"alingCenterline\" >\n  <button mat-button  class=\"margin\" (click)=\"onCancel()\">{{'buttons.cancel' | translate }}</button>\n  <button mat-button class=\"btnColor margin\"   [mat-dialog-close] = \"true\"   >{{'buttons.complete' | translate}}</button>\n</div>\n",
                    styles: [".btnColor{background-color:var(--primary-color);color:var(--white-color)}.alingCenterline{display:flex;align-items:center;justify-content:flex-end}.margin{margin:15px 0 0 10px}"]
                }] }
    ];
    /** @nocollapse */
    DialogBoxComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return DialogBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownFieldComponent = /** @class */ (function () {
    function DropdownFieldComponent() {
        this.emitResponseType = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DropdownFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} responseType
     * @return {?}
     */
    DropdownFieldComponent.prototype.changeResponseType = /**
     * @param {?} responseType
     * @return {?}
     */
    function (responseType) {
        this.emitResponseType.emit(responseType);
    };
    DropdownFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-dropdown-field',
                    template: "<div [formGroup]=\"genericForm\" >\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" *ngIf=\"genericData.input == 'radio' ||genericData.input == 'dropdown'\">\n    <mat-select [disabled]=\"!genericData.editable\" placeholder=\"{{genericData.label}}\" formControlName=\"{{genericData.field}}\" required >\n        <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType(opt.value)\" >\n          {{opt.label}}\n        </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\"  *ngIf=\"genericData.input == 'multiselect' \">\n      <mat-select [disabled]=\"!genericData.editable\" placeholder=\"{{genericData.label}}\" formControlName=\"{{genericData.field}}\" required multiple >\n          <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType\">\n            {{opt.label}}\n          </mat-option>\n      </mat-select>\n    </mat-form-field>\n</div>",
                    styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:1000}.right{text-align:right}"]
                }] }
    ];
    /** @nocollapse */
    DropdownFieldComponent.ctorParameters = function () { return []; };
    DropdownFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }],
        emitResponseType: [{ type: Output }]
    };
    return DropdownFieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent() {
        this.editnewquestion = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DynamicFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    DynamicFormComponent.prototype.changeResponseType = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        this.genericData[index].value = event;
    };
    /**
     * @param {?} edit
     * @return {?}
     */
    DynamicFormComponent.prototype.editquestion = /**
     * @param {?} edit
     * @return {?}
     */
    function (edit) {
        this.editnewquestion.emit(edit);
    };
    DynamicFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-dynamic-form',
                    template: "<div class=\"col-sm-12 \" [formGroup]= \"genericForm\"  *ngIf=\" genericForm\" >\n  <div *ngFor=\"let data of genericData ; let i  = index\" >\n    <app-dropdown-field *ngIf=\"(data.input == 'radio'|| data.input == 'dropdown' || data.input == 'multiselect' ) && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" (emitResponseType)=\"changeResponseType($event,i)\"></app-dropdown-field>\n  \n    <app-text-field *ngIf=\"data.input == 'text'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-text-field>\n    \n    <app-textarea-field *ngIf=\"data.input == 'textarea'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-textarea-field>\n   \n    <app-number-field *ngIf=\"data.input == 'number'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-number-field>\n    \n    <app-select-field *ngIf=\"data.input == 'boolean'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-select-field>\n\n    <app-form-array-field (editquestion)=\"editquestion($event)\" *ngIf=\"data.input == 'array'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-form-array-field>\n\n    <br>\n  </div> \n\n\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DynamicFormComponent.ctorParameters = function () { return []; };
    DynamicFormComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }],
        editnewquestion: [{ type: Output }]
    };
    return DynamicFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormArrayFieldComponent = /** @class */ (function () {
    function FormArrayFieldComponent() {
        this.editquestion = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FormArrayFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.questionCount = this.genericData['array'].length || 1;
    };
    /**
     * @param {?} edit
     * @return {?}
     */
    FormArrayFieldComponent.prototype.editQuestion = /**
     * @param {?} edit
     * @return {?}
     */
    function (edit) {
        if (edit == 'add') {
            this.questionCount++;
        }
        else if (edit == 'reset') {
            this.questionCount = 1;
        }
        else {
            this.questionCount -= 1;
        }
        this.editquestion.emit(edit);
    };
    FormArrayFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-form-array-field',
                    template: "<div [formGroup]=\"genericForm\" *ngIf=\"genericForm\">\n  <div formArrayName=\"question\" >\n    <div *ngFor=\"let arrayOption of genericData.array; let i = index\" class=\"_flex-box _justify-content-center\" >\n      <mat-form-field class=\"col-sm-11 fixSize _halfWidth\">\n          <input matInput type=\"text\" value=\"{{arrayOption.value}}\" placeholder=\"{{genericData.label}} \" formControlName=\"{{i}}\"\n          required>\n      </mat-form-field>\n      \n\n        <button class =\"col-sm-1\"*ngIf=\"questionCount >1\" mat-raised-button (click)=\"editQuestion(i)\" color=\"warn\">\n              \n            <i class=\"material-icons\">\n                close\n                </i>\n          </button>\n        </div>\n    \n  </div>\n  <button mat-raised-button (click)=\"editQuestion('add')\" class=\"_primary-btn btn-margin\">\n              \n      {{'buttons.addNew'| translate}}\n      <i class=\"material-icons\">\n          add\n          </i>\n    </button>\n    <button mat-raised-button *ngIf=\"questionCount>1\"(click)=\"editQuestion('reset')\" color=\"warn\" [disabled]=\" questionCount<2\" class=\"btn-margin\">\n              \n        {{'buttons.removeAll'| translate}}\n        <i class=\"material-icons white\">\n            delete_forever\n            </i>\n      </button>\n</div>",
                    styles: [".btn-margin{margin:0 10px}._flexbox{flex-direction:column;align-items:center;display:flex}"]
                }] }
    ];
    /** @nocollapse */
    FormArrayFieldComponent.ctorParameters = function () { return []; };
    FormArrayFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }],
        editquestion: [{ type: Output }]
    };
    return FormArrayFieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageCardComponent = /** @class */ (function () {
    function ImageCardComponent() {
    }
    /**
     * @return {?}
     */
    ImageCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ImageCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-image-card',
                    template: "<span *ngFor=\"let url of imageUrl\">\n  <div class=\"card\">\n    <div class=\"roundedCard\">\n      <img src={{url}} class=\"imageCard\">\n    </div>\n  </div>\n</span>",
                    styles: [".roundedCard{display:flex;align-items:center;margin:10px;height:130px;border:2px solid var(--grey-color);border-radius:5px;width:130px;background-color:var(--light-grey-color)}.imageCard{width:126px;height:auto}.card{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    ImageCardComponent.ctorParameters = function () { return []; };
    ImageCardComponent.propDecorators = {
        imageUrl: [{ type: Input }]
    };
    return ImageCardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    /**
     * @return {?}
     */
    LoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-loader',
                    template: "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate\"></ngx-spinner>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoaderComponent.ctorParameters = function () { return []; };
    return LoaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberFieldComponent = /** @class */ (function () {
    function NumberFieldComponent() {
    }
    /**
     * @return {?}
     */
    NumberFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NumberFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-number-field',
                    template: "<div [formGroup]=\"genericForm\">\n  <mat-form-field *ngIf=\"genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n    <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n    <input [disabled]=\"!genericData.editable\" type=\"number\"  pattern=\"^[0-9]{10}$\" placeholder=\"{{genericData.label}} \" formControlName=\"{{genericData.field}}\" matInput required > \n  </mat-form-field>\n\n  <mat-form-field  *ngIf=\"!genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n      <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n      <input type=\"number\"  [disabled]=\"!genericData.editable\" placeholder=\"{{genericData.label}} \" formControlName=\"{{genericData.field}}\" matInput  > \n    </mat-form-field>\n</div>",
                    styles: [".bold{font-size:15px;font-weight:1000}.right{text-align:right}.fixSize{height:54.6px}"]
                }] }
    ];
    /** @nocollapse */
    NumberFieldComponent.ctorParameters = function () { return []; };
    NumberFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }]
    };
    return NumberFieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UtilityService = /** @class */ (function () {
    function UtilityService(location, spinner) {
        this.location = location;
        this.spinner = spinner;
    }
    /**
     * @return {?}
     */
    UtilityService.prototype.onBack = /**
     * @return {?}
     */
    function () {
        this.location.back();
    };
    /**
     * @return {?}
     */
    UtilityService.prototype.loaderShow = /**
     * @return {?}
     */
    function () {
        this.spinner.show();
    };
    /**
     * @return {?}
     */
    UtilityService.prototype.loaderHide = /**
     * @return {?}
     */
    function () {
        this.spinner.hide();
    };
    /**
     * @param {?} inputs
     * @return {?}
     */
    UtilityService.prototype.toGroup = /**
     * @param {?} inputs
     * @return {?}
     */
    function (inputs) {
        var _this = this;
        /** @type {?} */
        var group = {};
        inputs.forEach((/**
         * @param {?} inputs
         * @return {?}
         */
        function (inputs) {
            if (inputs.input == "array") {
                group[inputs.field] = _this.createFormArray(inputs);
            }
            else {
                group[inputs.field] = inputs.validation.required ? new FormControl(inputs.value || '', Validators.required)
                    : new FormControl(inputs.value || '');
            }
        }));
        return new FormGroup(group);
    };
    /**
     * @param {?} inputs
     * @return {?}
     */
    UtilityService.prototype.createFormArray = /**
     * @param {?} inputs
     * @return {?}
     */
    function (inputs) {
        /** @type {?} */
        var elements = [];
        inputs.array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            elements[element['field']] = element.validation.required ? new FormControl(element.value || '', Validators.required)
                : new FormControl(element.value || '');
        }));
        return new FormArray(elements);
    };
    UtilityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UtilityService.ctorParameters = function () { return [
        { type: Location },
        { type: NgxSpinnerService }
    ]; };
    /** @nocollapse */ UtilityService.ngInjectableDef = defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(inject(Location), inject(NgxSpinnerService)); }, token: UtilityService, providedIn: "root" });
    return UtilityService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParentHeadingComponent = /** @class */ (function () {
    function ParentHeadingComponent(dialog, utilityService) {
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.sendMarkAsComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '450px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result)
                _this.sendFlag();
        }));
    };
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.sendFlag = /**
     * @return {?}
     */
    function () {
        this.sendMarkAsComplete.emit(true);
    };
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.onBack = /**
     * @return {?}
     */
    function () {
        this.utilityService.onBack();
    };
    ParentHeadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-parent-heading',
                    template: "<div class=\"horizontalLine\">\n  <span class=\" alingCenterlineParentHeading\">\n    <div>\n      <h4 class=\"primaryColor\">{{schoolName}}</h4>\n    </div>\n    <!-- <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><button mat-raised-button  class=\" btnColor \"(click)=\"openDialog()\">{{'buttons.markasComplete' | translate}}</button></span> -->\n    <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><span class=\" active \" (click)=\"openDialog()\">{{'buttons.markasComplete'\n        | translate}}</span></span>\n  </span>\n  <mat-divider *ngIf=\"schoolName || schoolNameDivider\" class=\"Margin noPadding\"></mat-divider>\n  <!-- <span class=\"alingCenterline smallMargin\"  *ngIf=\"!showControl\"> -->\n  <span class=\"alingCenterline smallMargin\">\n    <button  *ngIf=\"!showControl\" class=\"noPadding\" mat-button (click)=\"onBack()\"><i class=\"material-icons\">\n        keyboard_arrow_left\n      </i>\n      <span>Back</span>\n    </button>\n    <span class=\"heading  space noMargin space\" *ngIf=\"genericHeading\">\n      {{ genericHeading | translate}}\n    </span>\n\n  </span>\n</div>",
                    styles: [".heading{margin-top:0;font-size:18px}.btnColor{background-color:var(--primary-color);color:var(--white-color);margin-left:30px}.alingCenterlineParentHeading{display:flex;align-items:center;flex-wrap:wrap}.active{border-radius:12px;border:1px solid var(--primary-color);padding:2px 8px;background-color:var(--button-background-color);cursor:pointer;margin-left:25px}.horizontalLine{display:flex;flex-direction:column}.noPadding{padding:0}.noMargin{margin:0}.Margin{margin:0 -20px}.primaryColor{color:var(--primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    ParentHeadingComponent.ctorParameters = function () { return [
        { type: MatDialog },
        { type: UtilityService }
    ]; };
    ParentHeadingComponent.propDecorators = {
        genericHeading: [{ type: Input }],
        schoolName: [{ type: Input }],
        atleastOneComplete: [{ type: Input }],
        schoolId: [{ type: Input }],
        schoolNameDivider: [{ type: Input }],
        showControl: [{ type: Input }],
        sendMarkAsComplete: [{ type: Output }]
    };
    return ParentHeadingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectFieldComponent = /** @class */ (function () {
    function SelectFieldComponent() {
    }
    /**
     * @return {?}
     */
    SelectFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SelectFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-select-field',
                    template: "<div [formGroup]=\"genericForm\" >\n    <div class=\" col-sm-6 fixSize _halfWidth\">\n      <mat-checkbox  [disabled]=\"!genericData.editable\" formControlName =\"{{genericData.field}}\" value=\"{{genericData.value}}\" required>{{genericData.label}}</mat-checkbox>\n    </div>\n  </div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SelectFieldComponent.ctorParameters = function () { return []; };
    SelectFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }]
    };
    return SelectFieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextFieldComponent = /** @class */ (function () {
    function TextFieldComponent() {
    }
    /**
     * @return {?}
     */
    TextFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TextFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-text-field',
                    template: "<div [formGroup]= \"genericForm\" *ngIf=\"genericForm\">\n    <mat-form-field  class=\"col-sm-6 fixSize _halfWidth\">\n            <input [disabled]=\"!genericData.editable\" matInput   type=\"text\" placeholder=\"{{genericData.label}} \" formControlName=\"{{genericData?.field}}\"  required>\n    </mat-form-field>\n</div>\n\n\n",
                    styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px}"]
                }] }
    ];
    /** @nocollapse */
    TextFieldComponent.ctorParameters = function () { return []; };
    TextFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }]
    };
    return TextFieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextareaFieldComponent = /** @class */ (function () {
    function TextareaFieldComponent() {
    }
    /**
     * @return {?}
     */
    TextareaFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} val
     * @return {?}
     */
    TextareaFieldComponent.prototype.check = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
    };
    TextareaFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-textarea-field',
                    template: "<div [formGroup]=\"genericForm\" *ngIf=\"genericForm\"  >\n    <mat-form-field class=\"col-sm-6 fixSize  _halfWidth\">\n        <div class=\"form-group\">\n            <textarea [disabled]=\"!genericData.editable\" matInput formControlName=\"{{genericData.field}}\" required placeholder=\"{{genericData.label}} \"></textarea>\n        </div>\n    </mat-form-field>\n</div>",
                    styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px;margin-bottom:30px}"]
                }] }
    ];
    /** @nocollapse */
    TextareaFieldComponent.ctorParameters = function () { return []; };
    TextareaFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }]
    };
    return TextareaFieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResourceService = /** @class */ (function () {
    function ResourceService() {
        this.language = [
            'English'
        ];
    }
    ResourceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ResourceService.ctorParameters = function () { return []; };
    /** @nocollapse */ ResourceService.ngInjectableDef = defineInjectable({ factory: function ResourceService_Factory() { return new ResourceService(); }, token: ResourceService, providedIn: "root" });
    return ResourceService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.showDropdown = false;
        this.Logout = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        this.showDropdown = !this.showDropdown;
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onSignout = /**
     * @return {?}
     */
    function () {
        this.Logout.emit(true);
    };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-navbar',
                    template: "<div *ngIf=\"currentUser\">\n\n<nav class=\"navbar noMarginPadding \">\n\n    <div class=\"col-sm-6  col-md-6 col-xs-6 col-lg-6 alingCenterline noMarginPadding\">\n  \n      <img  class=\"logo\" src ={{logo}} >\n      <!-- <mat-card-title class=\"pageBrand\">\n        <strong>{{ 'brand' | translate }}</strong>\n      </mat-card-title> -->\n        </div>\n  \n    <!-- <div class=\"col-sm-4 mod \">\n         <mat-card-title style=\"font-size:18px; color:gray; text-align: center;\" >\n          Sikhshalocham Samikhsa \n            <mat-icon svgIcon=\"thumbs-up\" style=\"font-size:29px; color: gray;\">\n            </mat-icon>\n        </mat-card-title> \n      </div> -->\n  \n    <div class=\"col-sm-6 col-md-6 col-xs-6 col-lg-6 \">\n      <span class=\"right _flex-box alingCenterline\">\n        <button mat-icon-button (click)=\"openDropdown()\">\n              <i class=\"material-icons\">\n                  apps\n                  </i>\n        </button>\n            <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n              <div class=\"dropdownDiv\">\n                <div class=\"col-sm-3 dropdownFeature\">\n                    <div class=\"verticalCenteralign\">\n                      <div class=\"apple\" >\n                        <i class=\"material-icons\" id=\"whiteIcon\">\n                          create\n                        </i>\n                      </div>\n                      <div class=\"active\">\n                        {{'menuDropdown.myApps' | translate}}\n                      </div>\n                    </div>\n                </div>\n              </div>\n            </div>\n      <span mat-button [matMenuTriggerFor]=\"menu\" class=\"alingCenterline _cursor-pointer\">\n              <i class=\"material-icons brand dropdownIcon\">\n                  person\n                  </i>\n            <!-- <span class=\"brand \">{{currentUser?.name}}</span> -->\n        <i class=\"material-icons brand icon\">\n          keyboard_arrow_down\n        </i>\n      </span>\n      <mat-menu #menu=\"matMenu\">\n        <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n                supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item  class=\"matmenuIcon black\">\n          <i class=\"material-icons\">\n            done\n          </i>\n          <span class=\"padding\">{{currentUser?.name}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n          <span class=\"bigPadding black\">\n              {{'menuDropdown.signOut' | translate}}\n          </span>\n        </span>\n      </mat-menu>\n      <!-- <div class=\"right horizontalLine\">\n        <i class=\"material-icons brand helpIcon\">\n          help_outline\n        </i>\n      </div> -->\n  </span>\n  \n    </div>\n  </nav>\n</div>",
                    styles: [".noMarginPadding{margin:0;padding:0}.brand{color:var(--primary-color);margin-bottom:0}.logo{height:50px}.apple{background-image:linear-gradient(to bottom,#1cdffe 10%,#2462e9 90%);height:80px;width:80px;border:1px solid var(--primary-color);border-radius:15px;padding:10px;display:flex;align-items:center;justify-content:center}.horizontalLine{position:relative;padding:0 8px}.icon{font-size:16px;padding-right:10px}.helpIcon{font-weight:10px}.horizontalLine:before{content:\"\";background:var(--border-color);position:absolute;bottom:20%;left:-5px;height:60%;width:1px}.navbar{display:flex;align-items:center}.line{line-height:12px}.navicon{font-size:80px;color:linear-gradient(to bottom,from var(--primary-color) 100%,to var(--blue-gradient) 100%)}.dropdownDiv{color:#000;background-color:#fff;position:absolute;min-width:500px;height:350px;right:8px;top:35px;z-index:105;border-radius:2px;box-shadow:0 0 3px 3px rgba(0,0,0,.08);margin:20px;padding:20px 0}.dropdownDiv:before{content:\"\";position:absolute;top:-27px;right:60px;border-left:13px solid transparent;border-right:13px solid transparent;border-top:13px solid transparent;border-bottom:13px solid rgba(0,0,0,.08)}.dropdownDiv:after{content:\"\";position:absolute;top:-24px;right:60px;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid transparent;border-bottom:12px solid #fff}.dropdownFeature{padding:20px}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transperent;z-index:101}#whiteIcon{color:#fff;font-size:45px;line-height:1}.verticalCenteralign{display:flex;flex-direction:column;align-items:center;cursor:pointer}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:0}.pageMenu{margin-bottom:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;line-height:2}.active{margin-top:10px;border-radius:12px;border:1px solid #46a9ff;padding:5px 10px;background-color:#e5f2fe;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;white-space:nowrap;font-size:11px}.right{display:flex;justify-content:flex-end}.matmenuIcon{display:flex;align-items:center;color:#bababa}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:#4c4c4c}"]
                }] }
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return []; };
    NavbarComponent.propDecorators = {
        dropdownLabel: [{ type: Input }],
        currentUser: [{ type: Input }],
        logo: [{ type: Input }],
        Logout: [{ type: Output }]
    };
    return NavbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResponsiveNavbarComponent = /** @class */ (function () {
    function ResponsiveNavbarComponent() {
        this.openDrawer = new EventEmitter();
        this.Logout = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.openSideNav();
    };
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.onSignout = /**
     * @return {?}
     */
    function () {
        this.Logout.emit(true);
    };
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.openSideNav = /**
     * @return {?}
     */
    function () {
        this.openDrawer.emit(true);
    };
    ResponsiveNavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-responsive-navbar',
                    template: "<nav class=\"responsiveNavbar noMarginPadding\">\n  <body class=\" col-xs-12 noMarginPadding alingCenterline\" >\n      <span class=\"col-xs-4 alingCenterline noMarginPadding\">\n          <button mat-icon-button>\n          <i class=\"material-icons\" (click)=\"openSideNav()\">\n            menu\n              </i>\n              </button>\n      </span>\n    \n    <mat-card-title class=\"pageBrand col-xs-4 alingCenterline\">\n        <img  class=\"logo\" src ={{logo}} >\n      <!-- <strong>{{ 'brandResponsive' | translate }}</strong> -->\n    </mat-card-title>\n\n    <span class=\"col-xs-4 noMarginPadding _flexEnd\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\" _cursor-pointer\">\n          <i class=\"material-icons dropdownIcon\">\n              person\n              </i>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding \">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n  \n        </mat-menu>\n      </span>\n    \n    </body>\n</nav>",
                    styles: [".noMarginPadding{margin:0;padding:0}.icon{font-size:16px;padding-right:10px}._flexEnd{display:flex;justify-content:flex-end}.logo{height:50px}.responsiveNavbar{display:none;align-items:center;height:51px}.line{line-height:12px}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:-4px;display:flex;justify-content:center}.pageMenu{margin-top:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;margin-top:7px;font-weight:700}.active{color:var(--white-color);background-color:var(--primary-color)}.matmenuIcon{display:flex;align-items:center;color:var(--grey-color)}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--black-color)}.responsiveLogo{margin-top:-5px}"]
                }] }
    ];
    /** @nocollapse */
    ResponsiveNavbarComponent.ctorParameters = function () { return []; };
    ResponsiveNavbarComponent.propDecorators = {
        openDrawer: [{ type: Output }],
        currentUser: [{ type: Input }],
        logo: [{ type: Input }],
        Logout: [{ type: Output }]
    };
    return ResponsiveNavbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgramSidenavComponent = /** @class */ (function () {
    function ProgramSidenavComponent() {
        this.program = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ProgramSidenavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.currentProgramIndex = 0;
    };
    /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    ProgramSidenavComponent.prototype.programSelect = /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    function (assessments, i) {
        this.currentProgramIndex = i;
        this.program.emit(assessments);
    };
    ProgramSidenavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-program-sidenav',
                    template: "<div class=\"heading\">\n    {{ 'headings.programs' | translate }}\n</div>\n<div class=\"subHeading\" *ngFor=\"let results of result; let i=index\" (click)=\"programSelect(results, i)\">\n    <span class=\"sideNavSubheading\" [ngClass]=\"{'active': currentProgramIndex === i}\">\n        <div class=\"overFlowHidden\" matTooltip=\"{{results.name}}\" >\n            {{results.name}}\n        </div>\n    </span>\n</div>\n",
                    styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;min-height:40px;display:flex;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.subHeading{color:var(--grey-color)}.active,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}.heading{height:40px;display:flex;align-items:center;padding:0 0 0 15px}.overFlowHidden{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    ProgramSidenavComponent.ctorParameters = function () { return []; };
    ProgramSidenavComponent.propDecorators = {
        result: [{ type: Input }],
        program: [{ type: Output }]
    };
    return ProgramSidenavComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.language = {};
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var langPath = "assets/i18n/" + (lang || 'en') + ".json";
            // const langPath = `assets/i18n/od.json`;
            _this.http.get(langPath).subscribe((/**
             * @param {?} translation
             * @return {?}
             */
            function (translation) {
                _this.language = Object.assign({}, translation || {});
                resolve(_this.language);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.language = {};
                resolve(_this.language);
            }));
        }));
    };
    TranslateService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return TranslateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
        this.resarray = '';
        this.obj = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        if (key.indexOf('.') === -1) {
            return this.translate['language'][key] || key;
        }
        else {
            /** @type {?} */
            var array = key.split(".");
            this.resarray = this.translate['language'];
            array.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                if (_this.resarray) {
                    _this.resarray = _this.resarray[element];
                }
            }));
            return this.resarray || key;
        }
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    return TranslatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CamelCasePipe = /** @class */ (function () {
    function CamelCasePipe() {
    }
    /**
     * @param {?} camelCase
     * @return {?}
     */
    CamelCasePipe.prototype.transform = /**
     * @param {?} camelCase
     * @return {?}
     */
    function (camelCase) {
        if (camelCase == null || camelCase == "") {
            return camelCase;
        }
        camelCase = camelCase.trim();
        /** @type {?} */
        var newText = "";
        for (var i = 0; i < camelCase.length; i++) {
            if (/[A-Z]/.test(camelCase[i])
                && i != 0
                && /[a-z]/.test(camelCase[i - 1])) {
                newText += " ";
            }
            if (i == 0 && /[a-z]/.test(camelCase[i])) {
                newText += camelCase[i].toUpperCase();
            }
            else {
                newText += camelCase[i];
            }
        }
        return newText;
    };
    CamelCasePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'camelcase',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    CamelCasePipe.ctorParameters = function () { return []; };
    return CamelCasePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.get = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http.get(url);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.getJSON = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http.get(url);
    };
    /**
     * @param {?} url
     * @param {?} updateData
     * @return {?}
     */
    ApiService.prototype.post = /**
     * @param {?} url
     * @param {?} updateData
     * @return {?}
     */
    function (url, updateData) {
        return this.http.post(url, updateData);
    };
    /**
     * @param {?} url
     * @param {?} file
     * @param {?} name
     * @return {?}
     */
    ApiService.prototype.upload = /**
     * @param {?} url
     * @param {?} file
     * @param {?} name
     * @return {?}
     */
    function (url, file, name) {
        /** @type {?} */
        var formData = new FormData();
        if (file) {
            Array.from(file).forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                formData.append(name, f);
            }));
        }
        console.log(formData);
        return this.http.post(url, formData, { reportProgress: true, observe: 'events' });
    };
    ApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ApiService.ngInjectableDef = defineInjectable({ factory: function ApiService_Factory() { return new ApiService(inject(HttpClient)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    /**
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CoreModule,
            providers: [TranslateService, UtilityService, ApiInterceptor, ApiService]
        };
    };
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TranslatePipe,
                        CamelCasePipe,
                        NoValuePipe,
                        NavbarComponent,
                        SidenavComponent,
                        ResponsiveNavbarComponent,
                        ProgramSidenavComponent
                    ],
                    imports: [
                        NgxSpinnerModule,
                        CommonModule,
                        RouterModule,
                        HttpClientModule,
                        MatButtonModule,
                        MatMenuModule,
                        MatIconModule,
                        HttpModule,
                        MatCardModule,
                        HttpClientModule,
                        MatDividerModule,
                        MatTooltipModule
                    ],
                    providers: [
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ApiInterceptor,
                            multi: true
                        },
                    ],
                    exports: [
                        TranslatePipe,
                        NavbarComponent,
                        SidenavComponent,
                        ResponsiveNavbarComponent,
                        CamelCasePipe,
                        NoValuePipe,
                        ProgramSidenavComponent,
                        CommonModule,
                    ]
                },] }
    ];
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    /**
     * @return {?}
     */
    SharedModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SharedModule,
            providers: [ResourceService]
        };
    };
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DynamicFormComponent, DialogBoxComponent, TextFieldComponent, DropdownFieldComponent, NumberFieldComponent, TextareaFieldComponent, BreadcrumbComponent, ParentHeadingComponent, ImageCardComponent, LoaderComponent, SelectFieldComponent, FormArrayFieldComponent, SearchDirective, DashboardBlocksComponent],
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatCheckboxModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatProgressSpinnerModule,
                        MatButtonModule$1,
                        MatDividerModule,
                        MatDialogModule,
                        MatRadioModule,
                        MatSelectModule,
                        RouterModule,
                        CoreModule,
                        MatSnackBarModule,
                        NgxSpinnerModule
                    ],
                    entryComponents: [DialogBoxComponent],
                    exports: [DynamicFormComponent, NgxSpinnerModule, BreadcrumbComponent, ParentHeadingComponent, MatSnackBarModule, ImageCardComponent, LoaderComponent, SearchDirective, DashboardBlocksComponent]
                },] }
    ];
    return SharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BreadcrumbComponent, DashboardBlocksComponent, DialogBoxComponent, DropdownFieldComponent, DynamicFormComponent, FormArrayFieldComponent, ImageCardComponent, LoaderComponent, NumberFieldComponent, ParentHeadingComponent, SelectFieldComponent, TextFieldComponent, TextareaFieldComponent, SearchDirective, ResourceService, SharedModule, CoreModule, CamelCasePipe, NoValuePipe, TranslatePipe, ApiService, ApiInterceptor, TranslateService, UtilityService, NavbarComponent, ProgramSidenavComponent, ResponsiveNavbarComponent, SidenavComponent };

//# sourceMappingURL=shikshalokam.js.map