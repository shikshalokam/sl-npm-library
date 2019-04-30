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

}
