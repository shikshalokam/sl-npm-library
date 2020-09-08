import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormGroup } from "@angular/forms";
import { FormControl, NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { FieldConfig } from "../../field.interface";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'lib-input-chip',
  templateUrl: './input-chip.component.html',
  styleUrls: ['./input-chip.component.scss']
})
export class InputChipComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our keyword
    if ((value || '').trim()) {
      this.field.options.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(key): void {
    const index = this.field.options.indexOf(key);

    if (index >= 0) {
      this.field.options.splice(index, 1);
    }
  }

}
