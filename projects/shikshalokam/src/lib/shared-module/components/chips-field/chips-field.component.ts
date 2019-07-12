import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-chips-field',
  templateUrl: './chips-field.component.html',
  styleUrls: ['./chips-field.component.scss']
})
export class ChipsFieldComponent implements OnInit {
@Input()genericData;
@Input()genericForm:FormGroup;
@Input()genericEdit:boolean;
@Output() emitResponseType = new EventEmitter();
visible = true;
selectable = true;
removable = true;
addOnBlur = true;
name ;
readonly separatorKeysCodes: number[] = [ENTER, COMMA];
listOfChips = [];
ngOnInit(){
  this.name = this.genericData.field;
  this.listOfChips = this.genericData.value;
  console.log("chips")
}
add(event: MatChipInputEvent): void {
  const input = event.input;
  const value = event.value;

  // Add our fruit
  if ((value || '').trim()) {
    this.listOfChips.push( {[this.name] : value.trim()});
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}

remove(chips): void {
  const index = this.listOfChips.indexOf(chips);

  if (index >= 0) {
    this.listOfChips.splice(index, 1);
  }
}
}