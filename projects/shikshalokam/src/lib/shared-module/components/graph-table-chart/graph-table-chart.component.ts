import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-graph-table-chart',
  templateUrl: './graph-table-chart.component.html',
  styleUrls: ['./graph-table-chart.component.scss']
})
export class GraphTableChartComponent implements OnInit {
@Input() section ;
@Input() pagination : boolean = false;
@Input() pageIndex = 0 ;
@Input() pageLimit = 10;
@Input() itemsPerPage = [10, 15,20];
@Input()  paginationLabel ;
@Output() pageEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    //console.log(this.section.subSections)
  }
  pageResponse(event){
    this.pageEvent.emit(event);
  }

}
