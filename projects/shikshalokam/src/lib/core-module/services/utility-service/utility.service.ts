import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private location :Location,private spinner: NgxSpinnerService) { }

  onBack(){
    this.location.back();
  }
  loaderShow(){
    this.spinner.show();
  }
  loaderHide(){
    this.spinner.hide();
  }
  toGroup(inputs) {

    let group: any = {};
    console.log("togroup")
    console.log(inputs)
    inputs.forEach(element => {
      if(element.input == "array")
      {
        group[element.field] = this.createFormArray(element);
      }
      else{
        group[element.field] = element.validation.required ? new FormControl({value: element.value || '', disabled: !element.editable}, Validators.required)
        : new FormControl({value: element.value || '', disabled: !element.editable});
      }
    });
    console.log("return array")
    console.log(group)
    return new FormGroup(group);
  }
  createFormArray(inputs){

    let elements : any = [];
    inputs.array.forEach(element => {
      elements[element['field']] = element.validation.required ? new FormControl({value: element.value || '', disabled: !element.editable}, Validators.required)
                                            : new FormControl({value: element.value || '', disabled: !element.editable});
    });
   
    return new FormArray(elements);
  }
}

