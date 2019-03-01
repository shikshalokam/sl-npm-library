import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
export declare class FormArrayFieldComponent implements OnInit {
    genericData: any;
    genericForm: FormGroup;
    genericEdit: boolean;
    question: FormArray;
    editquestion: EventEmitter<{}>;
    questionCount: any;
    constructor();
    ngOnInit(): void;
    editQuestion(edit: any): void;
}
