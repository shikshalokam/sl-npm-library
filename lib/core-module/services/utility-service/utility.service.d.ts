import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormArray } from '@angular/forms';
export declare class UtilityService {
    private location;
    private spinner;
    constructor(location: Location, spinner: NgxSpinnerService);
    onBack(): void;
    loaderShow(): void;
    loaderHide(): void;
    toGroup(inputs: any): FormGroup;
    createFormArray(inputs: any): FormArray;
}
