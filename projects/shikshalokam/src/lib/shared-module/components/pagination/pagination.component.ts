import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {


  @Input() length;
  @Input() paginationLabel;
  @Input() itemsPerPage;
  @Input() pageLimit ;
  @Input() pageIndex ;
  pagination;
  last;
  selected;
  pageSize: FormGroup;
  paginationFlag = false;
  data;
  label;
  startList;
  endList;
  @Output() paginationResponse = new EventEmitter();
  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    if(this.pageIndex){
      this.startList = ( this.pageIndex ) * this.pageLimit + 1;
      if(this.length - this.startList > this.pageLimit)
      this.endList = this.startList + this.pageLimit -1;
      else {
      this.endList = this.startList + (this.length - this.startList );
      }
    }
   else{
     this.startList = 1;
     if(this.pageLimit){
     this.endList = this.startList + this.pageLimit  -1;
     }
     else {
       this.endList = this.startList + this.itemsPerPage[0]  -1;
     }

   }
    this.label = "Showing "+this.startList + ' - '+this.endList +" out of "+this.length +" "+this.paginationLabel;
    this.last = this.length / this.pageLimit  -1 ;
    if( (this.length % this.pageLimit)  !== 0   ){
     this.last =  Math.floor(this.last) +1 ;
    }
    this.selected = this.pageLimit ? this.pageLimit : this.itemsPerPage[0];
    this.pagination = {
      previousPageIndex: 0,
      pageIndex: this.pageIndex ,
      pageLimit: this.selected,
      length: this.length,
      label : this.paginationLabel
    }
   
    this.data = {
      editable: true,
      field: "pageLimit",
      input: "dropdown",
      label: this.pageLimit,
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
    switch(event){
      case 'back':{
        this.pagination.previousPageIndex = this.pagination.pageIndex;
        this.pagination.pageIndex -= 1;
        this.pageIndex = this.pagination.pageIndex ;
        break;
      }
      case 'next':{
      this.pagination.previousPageIndex = this.pagination.pageIndex;
      this.pagination.pageIndex += 1;
      this.pageIndex = this.pagination.pageIndex ;
      break;
      }
      case 'first':{
        this.pagination.previousPageIndex = 0;
        this.pagination.pageIndex = 0;
        this.pageIndex = this.pagination.pageIndex ;
        break;
      }
      case 'last':{
      this.pagination.previousPageIndex = this.last;
      this.pagination.pageIndex = this.pagination.previousPageIndex;
      this.pageIndex = this.pagination.pageIndex ;
      break;
      }
    }
   
    this.startList = ( this.pagination.pageIndex ) * this.pageLimit + 1;
    if(this.length - this.startList > this.pageLimit)
         this.endList = this.startList + this.pageLimit -1;
    else {
      this.endList = this.startList + (this.length - this.startList );

    }
    this.label = "Showing "+this.startList + ' - '+this.endList +" out of "+this.length +" "+this.paginationLabel;

    this.sendPaginationResponse();
  }
  setPageLimit(event){
    console.log("pagelimit Set" , event)
    this.last = this.length / event  -1;
    this.pagination.pageIndex = 0 ;
    this.pagination.previousPageIndex = 0;
    if( (this.length % event)  !== 0   ){

      this.last =  Math.floor(this.last)+1 ;
      console.log(this.last)
     }
     
    this.pagination.pageLimit = event;
    this.startList = 1;
    this.endList = this.startList + this.pagination.pageLimit -1;
    this.label = "Showing "+this.startList + ' - '+this.endList +" out of "+this.length +" "+this.paginationLabel;
    this.sendPaginationResponse();
  }
  sendPaginationResponse() {
    this.paginationResponse.emit(this.pagination)
  }
}
