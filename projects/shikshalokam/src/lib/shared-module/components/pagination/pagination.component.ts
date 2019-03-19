import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {


  @Input() length;
  @Input() itemsPerPage;
  pagination;
  last;
  selected;
  pageSize: FormGroup;
  paginationFlag = false;
  data;
  @Output() paginationResponse = new EventEmitter();
  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.last = this.length / this.itemsPerPage[0];
    if( (this.length % this.itemsPerPage [0])  !== 0   ){
     this.last =  Math.floor(this.last) + 1 ;
    }
    this.selected = this.itemsPerPage[0];
    this.pagination = {
      previousPageIndex: 0,
      currentPageIndex: 0,
      pageLimit: this.selected,
      pageIndex: 1
    }
   
    this.data = {
      editable: true,
      field: "pageLimit",
      input: "dropdown",
      label: "",
      validation: { required: true },
      value: this.itemsPerPage[0],
      visible: true,
    }
    Object.assign(this.data , {options : []})
    this.itemsPerPage.forEach(element => {
    this.data.options.push( { 
      value : element,
      label : element
    })
    });
    this.pageSize = this._fb.group({
      pageLimit: [this.pagination.pageLimit, Validators.required]
    });
    this.paginationFlag = true;
    console.log(this.pageSize);
  }

  page(event) {
    if (event === 'back') {
      this.pagination.previousPageIndex = this.pagination.currentPageIndex;
      this.pagination.currentPageIndex -= 1;
    }
    else if (event === 'next') {
      this.pagination.previousPageIndex = this.pagination.currentPageIndex;
      this.pagination.currentPageIndex += 1;
    }
    else if (event === 'first') {
      this.pagination.previousPageIndex = 0;
      this.pagination.currentPageIndex = 0;
    }
    else if (event === 'last') {
      this.pagination.previousPageIndex = this.last;
      this.pagination.currentPageIndex = this.pagination.previousPageIndex;
    }

    this.sendPaginationResponse();
  }
  setPageLimit(event){
    console.log("pagelimit Set" , event)
    this.last = this.length / event;
    this.pagination.currentPageIndex = 0 ;
    this.pagination.previousPageIndex = 0;
    if( (this.length % event)  !== 0   ){

      this.last =  Math.floor(this.last) + 1 ;
      console.log(this.last)
     }
    this.pagination.pageLimit = event;
    this.sendPaginationResponse();
  }
  sendPaginationResponse() {
    this.paginationResponse.emit(this.pagination)
  }
}
