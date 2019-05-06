import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  objectForm;

  constructor(private location: Location, private spinner: NgxSpinnerService, private _formBuilder: FormBuilder) {
  }

  onBack() {
    this.location.back();
  }
  loaderShow() {
    this.spinner.show();
  }
  loaderHide() {
    this.spinner.hide();
  }
  toGroup(inputs) {

    let group: any = {};
    inputs.forEach(element => {
      if (element.input == "array") {
        group[element.field] = this.createFormArray(element);
      }
      else {
        group[element.field] = element.validation.required ? new FormControl({ value: element.value || '', disabled: !element.editable }, Validators.required)
          : new FormControl({ value: element.value || '', disabled: !element.editable });
      }
    });
    return new FormGroup(group);
  }
  createFormArray(inputs) {

    let elements: any = [];
    inputs.array.forEach(element => {
      elements[element['field']] = element.validation.required ? new FormControl({ value: element.value || '', disabled: !element.editable }, Validators.required)
        : new FormControl({ value: element.value || '', disabled: !element.editable });
    });

    return new FormArray(elements);
  }

  createControl(object) {
    this.objectForm = this._formBuilder.group({});

    object.forEach(field => {
      let controlLabel = field.field;
      let controls;

      if (field.input === "array") {
        controls = new FormArray([])
        field.value.forEach(level => {
          controls.push(this._formBuilder.group({
            [controlLabel]: [level ? level : '', Validators.required]
          })
          )
        })

      }
      else {
        controls = new FormControl(field.value ? field.value : "", field.validation.required ? Validators.required : null
        );
      }
      this.objectForm.addControl(field.field, controls);
    });
    return this.objectForm;
  }

  uploadFile(object){
    this.objectForm = this._formBuilder.group({});
    object.forEach(field => {
      let controlLabel = field.field;
      let controls;

      if (field.input === "file") {

       
        controls = new FormControl(field.value ? field.value : null, [field.validation.required ? Validators.required : null]
        );
      }
      this.objectForm.addControl(field.field, controls);
    });
    console.log(this.objectForm)
    return this.objectForm;

  }

}
// export function requiredFileType( types: String[] ) {
//   return function (control: FormControl) {
//     types.forEach( type => {

//     const file = control.value;

//     if ( file ) {
      
//       let extension = file.lastIndexOf(".");
//       extension = file.substring(extension+1).toLowerCase();

//       if ( type.toLowerCase() === extension.toLowerCase() ) {
//         return {
//           requiredFileType: true
//         };
//       }
      
//       // return null;
//     }
//   })


//     return null;
//   };
// }
