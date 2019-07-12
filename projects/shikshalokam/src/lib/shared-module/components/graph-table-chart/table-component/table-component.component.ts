import { Component, OnInit, Input } from '@angular/core';
import { config } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {

  @Input() headers;
  @Input() datas;
  @Input() tableScroll;
  displayedColumns = [];

  constructor() { }

  ngOnInit() {
    if(this.tableScroll){
      this.createDataSource();
    }
  }
  createDataSource(){
    this.headers.forEach(element => {
      this.displayedColumns.push(element.name);
    });
    this.datas = new MatTableDataSource(this.datas);
  }

}
