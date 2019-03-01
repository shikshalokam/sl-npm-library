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
class BreadcrumbComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-breadcrumb',
                template: "<div class =\" breadCrumbheading\">\n  <span *ngFor=\"let rout of breadcrumbRoute;last as isLast\" [routerLink]=\"[rout.url,rout.id ]\"routerLinkActive=\"active\">\n   {{rout.label}} <span *ngIf=\"!isLast\"> > </span>\n   </span>\n</div>\n",
                styles: [".breadCrumbheading{padding-bottom:50px}.active{color:var(--primary-color)}"]
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    breadcrumbRoute: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DashboardBlocksComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DashboardBlocksComponent.decorators = [
    { type: Component, args: [{
                selector: 'dashboard-blocks',
                template: "\n<div class=\"_flex-box _justify-content-center wrapper\">\n\n  <div class=\"_full-width \">\n    <div *ngFor=\"let dashBoard of list\" >\n      <div class=\" col-lg-3 col-md-4 col-sm-6 col-xs-12 margin-top _justify-content-center flex-box\" routerLink=\"{{dashBoard.anchorLink}}\" title=\"{{dashBoard.tooltip|translate}}\">\n        <div class=\" box iconBox\">\n          <i class=\"material-icons folderIcon\">\n            reorder\n          </i>\n        </div>\n        <div class=\" box \">\n          <div class=\"description\">\n              {{dashBoard.tooltip|translate}}\n          </div>\n          \n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>",
                styles: [".flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.description{color:var(--grey-color);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:110px;text-align:center}.dashBoardIcon{width:200px;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;border-radius:20px;margin:0 20px}.margin-top{margin-top:20px}.folderIcon{font-size:70px;color:var(--primary-color);display:flex;align-items:center}.wrapper{padding:0 20px}.box{width:100%;display:flex;justify-content:center}.iconBox{background-image:linear-gradient(to top,#e8eced 10%,#fff 90%);height:120px;width:120px;border:1px solid var(--grey-color);border-radius:15px}"]
            }] }
];
/** @nocollapse */
DashboardBlocksComponent.ctorParameters = () => [];
DashboardBlocksComponent.propDecorators = {
    list: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DialogBoxComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
DialogBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dialog-box',
                template: "<h1 mat-dialog-title>{{'message.alertHeading' | translate}}</h1>\n<div mat-dialog-content>\n  <p>{{'message.alertMessage' | translate}}</p>\n</div>\n<div mat-dialog-actions class=\"alingCenterline\" >\n  <button mat-button  class=\"margin\" (click)=\"onCancel()\">{{'buttons.cancel' | translate }}</button>\n  <button mat-button class=\"btnColor margin\"   [mat-dialog-close] = \"true\"   >{{'buttons.complete' | translate}}</button>\n</div>\n",
                styles: [".btnColor{background-color:var(--primary-color);color:var(--white-color)}.alingCenterline{display:flex;align-items:center;justify-content:flex-end}.margin{margin:15px 0 0 10px}"]
            }] }
];
/** @nocollapse */
DialogBoxComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownFieldComponent {
    constructor() {
        this.emitResponseType = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} responseType
     * @return {?}
     */
    changeResponseType(responseType) {
        this.emitResponseType.emit(responseType);
    }
}
DropdownFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dropdown-field',
                template: "<div [formGroup]=\"genericForm\" >\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" *ngIf=\"genericData.input == 'radio' ||genericData.input == 'dropdown'\">\n    <mat-select [disabled]=\"!genericData.editable\" placeholder=\"{{genericData.label}}\" formControlName=\"{{genericData.field}}\" required >\n        <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType(opt.value)\" >\n          {{opt.label}}\n        </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\"  *ngIf=\"genericData.input == 'multiselect' \">\n      <mat-select [disabled]=\"!genericData.editable\" placeholder=\"{{genericData.label}}\" formControlName=\"{{genericData.field}}\" required multiple >\n          <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType\">\n            {{opt.label}}\n          </mat-option>\n      </mat-select>\n    </mat-form-field>\n</div>",
                styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:1000}.right{text-align:right}"]
            }] }
];
/** @nocollapse */
DropdownFieldComponent.ctorParameters = () => [];
DropdownFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    emitResponseType: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicFormComponent {
    constructor() {
        this.editnewquestion = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    changeResponseType(event, index) {
        this.genericData[index].value = event;
    }
    /**
     * @param {?} edit
     * @return {?}
     */
    editquestion(edit) {
        this.editnewquestion.emit(edit);
    }
}
DynamicFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dynamic-form',
                template: "<div class=\"col-sm-12 \" [formGroup]= \"genericForm\"  *ngIf=\" genericForm\" >\n  <div *ngFor=\"let data of genericData ; let i  = index\" >\n    <app-dropdown-field *ngIf=\"(data.input == 'radio'|| data.input == 'dropdown' || data.input == 'multiselect' ) && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" (emitResponseType)=\"changeResponseType($event,i)\"></app-dropdown-field>\n  \n    <app-text-field *ngIf=\"data.input == 'text'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-text-field>\n    \n    <app-textarea-field *ngIf=\"data.input == 'textarea'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-textarea-field>\n   \n    <app-number-field *ngIf=\"data.input == 'number'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-number-field>\n    \n    <app-select-field *ngIf=\"data.input == 'boolean'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-select-field>\n\n    <app-form-array-field (editquestion)=\"editquestion($event)\" *ngIf=\"data.input == 'array'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-form-array-field>\n\n    <br>\n  </div> \n\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
DynamicFormComponent.ctorParameters = () => [];
DynamicFormComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    editnewquestion: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormArrayFieldComponent {
    constructor() {
        this.editquestion = new EventEmitter();
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
        this.questionCount = this.genericData['array'].length || 1;
    }
    /**
     * @param {?} edit
     * @return {?}
     */
    editQuestion(edit) {
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
    }
}
FormArrayFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-form-array-field',
                template: "<div [formGroup]=\"genericForm\" *ngIf=\"genericForm\">\n  <div formArrayName=\"question\" >\n    <div *ngFor=\"let arrayOption of genericData.array; let i = index\" class=\"_flex-box _justify-content-center\" >\n      <mat-form-field class=\"col-sm-11 fixSize _halfWidth\">\n          <input matInput type=\"text\" value=\"{{arrayOption.value}}\" placeholder=\"{{genericData.label}} \" formControlName=\"{{i}}\"\n          required>\n      </mat-form-field>\n      \n\n        <button class =\"col-sm-1\"*ngIf=\"questionCount >1\" mat-raised-button (click)=\"editQuestion(i)\" color=\"warn\">\n              \n            <i class=\"material-icons\">\n                close\n                </i>\n          </button>\n        </div>\n    \n  </div>\n  <button mat-raised-button (click)=\"editQuestion('add')\" class=\"_primary-btn btn-margin\">\n              \n      {{'buttons.addNew'| translate}}\n      <i class=\"material-icons\">\n          add\n          </i>\n    </button>\n    <button mat-raised-button *ngIf=\"questionCount>1\"(click)=\"editQuestion('reset')\" color=\"warn\" [disabled]=\" questionCount<2\" class=\"btn-margin\">\n              \n        {{'buttons.removeAll'| translate}}\n        <i class=\"material-icons white\">\n            delete_forever\n            </i>\n      </button>\n</div>",
                styles: [".btn-margin{margin:0 10px}._flexbox{flex-direction:column;align-items:center;display:flex}"]
            }] }
];
/** @nocollapse */
FormArrayFieldComponent.ctorParameters = () => [];
FormArrayFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    editquestion: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageCardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ImageCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-image-card',
                template: "<span *ngFor=\"let url of imageUrl\">\n  <div class=\"card\">\n    <div class=\"roundedCard\">\n      <img src={{url}} class=\"imageCard\">\n    </div>\n  </div>\n</span>",
                styles: [".roundedCard{display:flex;align-items:center;margin:10px;height:130px;border:2px solid var(--grey-color);border-radius:5px;width:130px;background-color:var(--light-grey-color)}.imageCard{width:126px;height:auto}.card{display:inline-block}"]
            }] }
];
/** @nocollapse */
ImageCardComponent.ctorParameters = () => [];
ImageCardComponent.propDecorators = {
    imageUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-loader',
                template: "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate\"></ngx-spinner>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LoaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NumberFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-number-field',
                template: "<div [formGroup]=\"genericForm\">\n  <mat-form-field *ngIf=\"genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n    <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n    <input [disabled]=\"!genericData.editable\" type=\"number\"  pattern=\"^[0-9]{10}$\" placeholder=\"{{genericData.label}} \" formControlName=\"{{genericData.field}}\" matInput required > \n  </mat-form-field>\n\n  <mat-form-field  *ngIf=\"!genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n      <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n      <input type=\"number\"  [disabled]=\"!genericData.editable\" placeholder=\"{{genericData.label}} \" formControlName=\"{{genericData.field}}\" matInput  > \n    </mat-form-field>\n</div>",
                styles: [".bold{font-size:15px;font-weight:1000}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
NumberFieldComponent.ctorParameters = () => [];
NumberFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtilityService {
    /**
     * @param {?} location
     * @param {?} spinner
     */
    constructor(location, spinner) {
        this.location = location;
        this.spinner = spinner;
    }
    /**
     * @return {?}
     */
    onBack() {
        this.location.back();
    }
    /**
     * @return {?}
     */
    loaderShow() {
        this.spinner.show();
    }
    /**
     * @return {?}
     */
    loaderHide() {
        this.spinner.hide();
    }
    /**
     * @param {?} inputs
     * @return {?}
     */
    toGroup(inputs) {
        /** @type {?} */
        let group = {};
        inputs.forEach((/**
         * @param {?} inputs
         * @return {?}
         */
        inputs => {
            if (inputs.input == "array") {
                group[inputs.field] = this.createFormArray(inputs);
            }
            else {
                group[inputs.field] = inputs.validation.required ? new FormControl(inputs.value || '', Validators.required)
                    : new FormControl(inputs.value || '');
            }
        }));
        return new FormGroup(group);
    }
    /**
     * @param {?} inputs
     * @return {?}
     */
    createFormArray(inputs) {
        /** @type {?} */
        let elements = [];
        inputs.array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            elements[element['field']] = element.validation.required ? new FormControl(element.value || '', Validators.required)
                : new FormControl(element.value || '');
        }));
        return new FormArray(elements);
    }
}
UtilityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UtilityService.ctorParameters = () => [
    { type: Location },
    { type: NgxSpinnerService }
];
/** @nocollapse */ UtilityService.ngInjectableDef = defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(inject(Location), inject(NgxSpinnerService)); }, token: UtilityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParentHeadingComponent {
    /**
     * @param {?} dialog
     * @param {?} utilityService
     */
    constructor(dialog, utilityService) {
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.sendMarkAsComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '450px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result)
                this.sendFlag();
        }));
    }
    /**
     * @return {?}
     */
    sendFlag() {
        this.sendMarkAsComplete.emit(true);
    }
    /**
     * @return {?}
     */
    onBack() {
        this.utilityService.onBack();
    }
}
ParentHeadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-parent-heading',
                template: "<div class=\"horizontalLine\">\n  <span class=\" alingCenterlineParentHeading\">\n    <div>\n      <h4 class=\"primaryColor\">{{schoolName}}</h4>\n    </div>\n    <!-- <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><button mat-raised-button  class=\" btnColor \"(click)=\"openDialog()\">{{'buttons.markasComplete' | translate}}</button></span> -->\n    <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><span class=\" active \" (click)=\"openDialog()\">{{'buttons.markasComplete'\n        | translate}}</span></span>\n  </span>\n  <mat-divider *ngIf=\"schoolName || schoolNameDivider\" class=\"Margin noPadding\"></mat-divider>\n  <!-- <span class=\"alingCenterline smallMargin\"  *ngIf=\"!showControl\"> -->\n  <span class=\"alingCenterline smallMargin\">\n    <button  *ngIf=\"!showControl\" class=\"noPadding\" mat-button (click)=\"onBack()\"><i class=\"material-icons\">\n        keyboard_arrow_left\n      </i>\n      <span>Back</span>\n    </button>\n    <span class=\"heading  space noMargin space\" *ngIf=\"genericHeading\">\n      {{ genericHeading | translate}}\n    </span>\n\n  </span>\n</div>",
                styles: [".heading{margin-top:0;font-size:18px}.btnColor{background-color:var(--primary-color);color:var(--white-color);margin-left:30px}.alingCenterlineParentHeading{display:flex;align-items:center;flex-wrap:wrap}.active{border-radius:12px;border:1px solid var(--primary-color);padding:2px 8px;background-color:var(--button-background-color);cursor:pointer;margin-left:25px}.horizontalLine{display:flex;flex-direction:column}.noPadding{padding:0}.noMargin{margin:0}.Margin{margin:0 -20px}.primaryColor{color:var(--primary-color)}"]
            }] }
];
/** @nocollapse */
ParentHeadingComponent.ctorParameters = () => [
    { type: MatDialog },
    { type: UtilityService }
];
ParentHeadingComponent.propDecorators = {
    genericHeading: [{ type: Input }],
    schoolName: [{ type: Input }],
    atleastOneComplete: [{ type: Input }],
    schoolId: [{ type: Input }],
    schoolNameDivider: [{ type: Input }],
    showControl: [{ type: Input }],
    sendMarkAsComplete: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SelectFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-select-field',
                template: "<div [formGroup]=\"genericForm\" >\n    <div class=\" col-sm-6 fixSize _halfWidth\">\n      <mat-checkbox  [disabled]=\"!genericData.editable\" formControlName =\"{{genericData.field}}\" value=\"{{genericData.value}}\" required>{{genericData.label}}</mat-checkbox>\n    </div>\n  </div>",
                styles: [""]
            }] }
];
/** @nocollapse */
SelectFieldComponent.ctorParameters = () => [];
SelectFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-text-field',
                template: "<div [formGroup]= \"genericForm\" *ngIf=\"genericForm\">\n    <mat-form-field  class=\"col-sm-6 fixSize _halfWidth\">\n            <input [disabled]=\"!genericData.editable\" matInput   type=\"text\" placeholder=\"{{genericData.label}} \" formControlName=\"{{genericData?.field}}\"  required>\n    </mat-form-field>\n</div>\n\n\n",
                styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
TextFieldComponent.ctorParameters = () => [];
TextFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextareaFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    check(val) {
    }
}
TextareaFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-textarea-field',
                template: "<div [formGroup]=\"genericForm\" *ngIf=\"genericForm\"  >\n    <mat-form-field class=\"col-sm-6 fixSize  _halfWidth\">\n        <div class=\"form-group\">\n            <textarea [disabled]=\"!genericData.editable\" matInput formControlName=\"{{genericData.field}}\" required placeholder=\"{{genericData.label}} \"></textarea>\n        </div>\n    </mat-form-field>\n</div>",
                styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px;margin-bottom:30px}"]
            }] }
];
/** @nocollapse */
TextareaFieldComponent.ctorParameters = () => [];
TextareaFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourceService {
    constructor() {
        this.language = [
            'English'
        ];
    }
}
ResourceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ResourceService.ctorParameters = () => [];
/** @nocollapse */ ResourceService.ngInjectableDef = defineInjectable({ factory: function ResourceService_Factory() { return new ResourceService(); }, token: ResourceService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavbarComponent {
    constructor() {
        this.showDropdown = false;
        this.Logout = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.showDropdown = !this.showDropdown;
    }
    /**
     * @return {?}
     */
    onSignout() {
        this.Logout.emit(true);
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-navbar',
                template: "<div *ngIf=\"currentUser\">\n\n<nav class=\"navbar noMarginPadding \">\n\n    <div class=\"col-sm-6  col-md-6 col-xs-6 col-lg-6 alingCenterline noMarginPadding\">\n  \n      <img  class=\"logo\" src ={{logo}} >\n      <!-- <mat-card-title class=\"pageBrand\">\n        <strong>{{ 'brand' | translate }}</strong>\n      </mat-card-title> -->\n        </div>\n  \n    <!-- <div class=\"col-sm-4 mod \">\n         <mat-card-title style=\"font-size:18px; color:gray; text-align: center;\" >\n          Sikhshalocham Samikhsa \n            <mat-icon svgIcon=\"thumbs-up\" style=\"font-size:29px; color: gray;\">\n            </mat-icon>\n        </mat-card-title> \n      </div> -->\n  \n    <div class=\"col-sm-6 col-md-6 col-xs-6 col-lg-6 \">\n      <span class=\"right _flex-box alingCenterline\">\n        <button mat-icon-button (click)=\"openDropdown()\">\n              <i class=\"material-icons\">\n                  apps\n                  </i>\n        </button>\n            <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n              <div class=\"dropdownDiv\">\n                <div class=\"col-sm-3 dropdownFeature\">\n                    <div class=\"verticalCenteralign\">\n                      <div class=\"apple\" >\n                        <i class=\"material-icons\" id=\"whiteIcon\">\n                          create\n                        </i>\n                      </div>\n                      <div class=\"active\">\n                        {{'menuDropdown.myApps' | translate}}\n                      </div>\n                    </div>\n                </div>\n              </div>\n            </div>\n      <span mat-button [matMenuTriggerFor]=\"menu\" class=\"alingCenterline _cursor-pointer\">\n              <i class=\"material-icons brand dropdownIcon\">\n                  person\n                  </i>\n            <!-- <span class=\"brand \">{{currentUser?.name}}</span> -->\n        <i class=\"material-icons brand icon\">\n          keyboard_arrow_down\n        </i>\n      </span>\n      <mat-menu #menu=\"matMenu\">\n        <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n                supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item  class=\"matmenuIcon black\">\n          <i class=\"material-icons\">\n            done\n          </i>\n          <span class=\"padding\">{{currentUser?.name}}</span>\n        </span>\n        <mat-divider></mat-divider>\n        <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n          <span class=\"bigPadding black\">\n              {{'menuDropdown.signOut' | translate}}\n          </span>\n        </span>\n      </mat-menu>\n      <!-- <div class=\"right horizontalLine\">\n        <i class=\"material-icons brand helpIcon\">\n          help_outline\n        </i>\n      </div> -->\n  </span>\n  \n    </div>\n  </nav>\n</div>",
                styles: [".noMarginPadding{margin:0;padding:0}.brand{color:var(--primary-color);margin-bottom:0}.logo{height:50px}.apple{background-image:linear-gradient(to bottom,#1cdffe 10%,#2462e9 90%);height:80px;width:80px;border:1px solid var(--primary-color);border-radius:15px;padding:10px;display:flex;align-items:center;justify-content:center}.horizontalLine{position:relative;padding:0 8px}.icon{font-size:16px;padding-right:10px}.helpIcon{font-weight:10px}.horizontalLine:before{content:\"\";background:var(--border-color);position:absolute;bottom:20%;left:-5px;height:60%;width:1px}.navbar{display:flex;align-items:center}.line{line-height:12px}.navicon{font-size:80px;color:linear-gradient(to bottom,from var(--primary-color) 100%,to var(--blue-gradient) 100%)}.dropdownDiv{color:#000;background-color:#fff;position:absolute;min-width:500px;height:350px;right:8px;top:35px;z-index:105;border-radius:2px;box-shadow:0 0 3px 3px rgba(0,0,0,.08);margin:20px;padding:20px 0}.dropdownDiv:before{content:\"\";position:absolute;top:-27px;right:60px;border-left:13px solid transparent;border-right:13px solid transparent;border-top:13px solid transparent;border-bottom:13px solid rgba(0,0,0,.08)}.dropdownDiv:after{content:\"\";position:absolute;top:-24px;right:60px;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid transparent;border-bottom:12px solid #fff}.dropdownFeature{padding:20px}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transperent;z-index:101}#whiteIcon{color:#fff;font-size:45px;line-height:1}.verticalCenteralign{display:flex;flex-direction:column;align-items:center;cursor:pointer}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:0}.pageMenu{margin-bottom:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;line-height:2}.active{margin-top:10px;border-radius:12px;border:1px solid #46a9ff;padding:5px 10px;background-color:#e5f2fe;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;white-space:nowrap;font-size:11px}.right{display:flex;justify-content:flex-end}.matmenuIcon{display:flex;align-items:center;color:#bababa}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:#4c4c4c}"]
            }] }
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [];
NavbarComponent.propDecorators = {
    dropdownLabel: [{ type: Input }],
    currentUser: [{ type: Input }],
    logo: [{ type: Input }],
    Logout: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidenavComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResponsiveNavbarComponent {
    constructor() {
        this.openDrawer = new EventEmitter();
        this.Logout = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.openSideNav();
    }
    /**
     * @return {?}
     */
    onSignout() {
        this.Logout.emit(true);
    }
    /**
     * @return {?}
     */
    openSideNav() {
        this.openDrawer.emit(true);
    }
}
ResponsiveNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-responsive-navbar',
                template: "<nav class=\"responsiveNavbar noMarginPadding\">\n  <body class=\" col-xs-12 noMarginPadding alingCenterline\" >\n      <span class=\"col-xs-4 alingCenterline noMarginPadding\">\n          <button mat-icon-button>\n          <i class=\"material-icons\" (click)=\"openSideNav()\">\n            menu\n              </i>\n              </button>\n      </span>\n    \n    <mat-card-title class=\"pageBrand col-xs-4 alingCenterline\">\n        <img  class=\"logo\" src ={{logo}} >\n      <!-- <strong>{{ 'brandResponsive' | translate }}</strong> -->\n    </mat-card-title>\n\n    <span class=\"col-xs-4 noMarginPadding _flexEnd\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\" _cursor-pointer\">\n          <i class=\"material-icons dropdownIcon\">\n              person\n              </i>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding \">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n  \n        </mat-menu>\n      </span>\n    \n    </body>\n</nav>",
                styles: [".noMarginPadding{margin:0;padding:0}.icon{font-size:16px;padding-right:10px}._flexEnd{display:flex;justify-content:flex-end}.logo{height:50px}.responsiveNavbar{display:none;align-items:center;height:51px}.line{line-height:12px}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:-4px;display:flex;justify-content:center}.pageMenu{margin-top:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;margin-top:7px;font-weight:700}.active{color:var(--white-color);background-color:var(--primary-color)}.matmenuIcon{display:flex;align-items:center;color:var(--grey-color)}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--black-color)}.responsiveLogo{margin-top:-5px}"]
            }] }
];
/** @nocollapse */
ResponsiveNavbarComponent.ctorParameters = () => [];
ResponsiveNavbarComponent.propDecorators = {
    openDrawer: [{ type: Output }],
    currentUser: [{ type: Input }],
    logo: [{ type: Input }],
    Logout: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgramSidenavComponent {
    constructor() {
        this.program = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentProgramIndex = 0;
    }
    /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    programSelect(assessments, i) {
        this.currentProgramIndex = i;
        this.program.emit(assessments);
    }
}
ProgramSidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-program-sidenav',
                template: "<div class=\"heading\">\n    {{ 'headings.programs' | translate }}\n</div>\n<div class=\"subHeading\" *ngFor=\"let results of result; let i=index\" (click)=\"programSelect(results, i)\">\n    <span class=\"sideNavSubheading\" [ngClass]=\"{'active': currentProgramIndex === i}\">\n        <div class=\"overFlowHidden\" matTooltip=\"{{results.name}}\" >\n            {{results.name}}\n        </div>\n    </span>\n</div>\n",
                styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;min-height:40px;display:flex;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.subHeading{color:var(--grey-color)}.active,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}.heading{height:40px;display:flex;align-items:center;padding:0 0 0 15px}.overFlowHidden{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
            }] }
];
/** @nocollapse */
ProgramSidenavComponent.ctorParameters = () => [];
ProgramSidenavComponent.propDecorators = {
    result: [{ type: Input }],
    program: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.language = {};
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const langPath = `assets/i18n/${lang || 'en'}.json`;
            // const langPath = `assets/i18n/od.json`;
            this.http.get(langPath).subscribe((/**
             * @param {?} translation
             * @return {?}
             */
            translation => {
                this.language = Object.assign({}, translation || {});
                resolve(this.language);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.language = {};
                resolve(this.language);
            }));
        }));
    }
}
TranslateService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
        this.resarray = '';
        this.obj = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
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
            element => {
                if (this.resarray) {
                    this.resarray = this.resarray[element];
                }
            }));
            return this.resarray || key;
        }
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CamelCasePipe {
    constructor() { }
    /**
     * @param {?} camelCase
     * @return {?}
     */
    transform(camelCase) {
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
    }
}
CamelCasePipe.decorators = [
    { type: Pipe, args: [{
                name: 'camelcase',
                pure: false
            },] }
];
/** @nocollapse */
CamelCasePipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NoValuePipe {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value == null || value == "") {
            return "-NA-";
        }
        return value;
    }
}
NoValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'blank',
                pure: false
            },] }
];
/** @nocollapse */
NoValuePipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiInterceptor {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        return this.http.get(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getJSON(url) {
        return this.http.get(url);
    }
    /**
     * @param {?} url
     * @param {?} updateData
     * @return {?}
     */
    post(url, updateData) {
        return this.http.post(url, updateData);
    }
    /**
     * @param {?} url
     * @param {?} file
     * @param {?} name
     * @return {?}
     */
    upload(url, file, name) {
        /** @type {?} */
        const formData = new FormData();
        if (file) {
            Array.from(file).forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => {
                formData.append(name, f);
            }));
        }
        console.log(formData);
        return this.http.post(url, formData, { reportProgress: true, observe: 'events' });
    }
}
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ ApiService.ngInjectableDef = defineInjectable({ factory: function ApiService_Factory() { return new ApiService(inject(HttpClient)); }, token: ApiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [TranslateService, UtilityService, ApiInterceptor, ApiService]
        };
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [ResourceService]
        };
    }
}
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