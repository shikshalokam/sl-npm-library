import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-programsDashboard',
  templateUrl: './programsDashboard.component.html',
  styleUrls: ['./programsDashboard.component.scss']
})
export class ProgramsDashboardComponent implements OnInit {
@Input() programsList : any;
@Output() emitCurrentProgram = new EventEmitter ();
    constructor(){}
    ngOnInit() {
    }
    programClick(currentProgram){
      this.emitCurrentProgram.emit(currentProgram);
    }
  }
  