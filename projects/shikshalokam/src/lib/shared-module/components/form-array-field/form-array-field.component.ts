import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-field',
  templateUrl: './form-array-field.component.html',
  styleUrls: ['./form-array-field.component.scss']
})
export class FormArrayFieldComponent implements OnInit {
  @Input()genericData;
  @Input()genericForm:FormGroup;
  @Input()genericEdit:boolean;
  question : FormArray;
  @Output() editquestion = new EventEmitter ();
  questionCount;
  ;
  constructor( private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.questionCount = this.genericData['value'].length  || 1;
  }
  
  editQuestion(edit){
    if(edit == 'add')
    {
      this.editquestion.emit(
        {
          mode : edit ,
         controlName : this.genericData.field,
        }
        );
    }
    else if(edit == 'reset'){
      this.questionCount = 1;
      this.editquestion.emit(
        {
          mode : edit ,
         controlName : this.genericData.field,
        }
        );
    }
    else {
      this.questionCount -= 1;
      this.editquestion.emit(
        {
          mode : "delete" ,
         controlName : this.genericData.field,
         index : edit
        }
        );
    }
   
  }

  getControls() {
    return (<FormArray>this.genericForm.controls[this.genericData.field]).controls;
  }


  // reset(){
  //   //  this.genericForm.controls[this.genericData.field]['controls']=[];
  //   //   // let control;
  //   //   // control = new FormArray([])

  //   //   this.genericData.value.forEach(field => {
  //   //       // this.questionCount = this.data.questionObject.question.length;
          
  //   //         // control.push( new FormControl(level)
  //   //         this.genericForm.controls[this.genericData.field]['controls'].push(this._formBuilder.control({
  //   //           [this.genericData.field]: [ field ? field : '', Validators.required]
  //   //         })
  //   //         )
          
  
  //   //   });
  //     // this.genericForm.controls[this.genericData.field]=control; 
  //     this.genericForm.controls[this.genericData.field].reset();
  // }

  add(control){
    control.push(
      this._formBuilder.group({
        [this.genericData.field]: ['', Validators.required]
      })
    );
    this.questionCount++;

  }

  delete( control , index ){
    control.removeAt(index);
    this.questionCount--;

  }
//   customizeForm(control) {
//     let controls = control.controlName ;

//     if (control.mode == 'add') {
//       this.genericForm.controls[controls].push(
//         this._formBuilder.group({
//           [controls]: ['', Validators.required]
//         })
//       );
//     }
//     else if (control.mode == 'delete') {
//       // console.log(this.programsForm.controls[controls])
//       this.genericForm.controls[controls].removeAt(
//         // this._formBuilder.control({
//         //   keyWords: ['', Validators.required]
//         // })
//         control.index
//         );
//     }
//   //   else {
//   //     // this.programsForm.controls[controls].controls=[];
//   //     let control;
//   //     this.programMetaData.forEach(field => {
//   //       if (field.field === controls) {
//   //       let controlLabel = field.field;

//   //         control = new FormArray([])
//   //         // this.questionCount = this.data.questionObject.question.length;
//   //         field.value.forEach(level => {
//   //           // control.push( new FormControl(level)
//   //           control.push(this._formBuilder.control({
//   //             [controlLabel]: [level ? level : '', Validators.required]
//   //           })
//   //           )
//   //         })
  
//   //       }
//   //     });
//   //     this.programsForm.controls[controls]=control; 
      
//   //   console.log(this.programsForm)
//   // }
// }
}
