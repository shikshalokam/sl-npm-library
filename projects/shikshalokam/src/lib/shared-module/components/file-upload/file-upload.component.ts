import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-file-upload-field',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
@Input()genericData;
@Input()genericForm:FormGroup;
@Input()genericEdit:boolean;
@Output() emitResponseType = new EventEmitter();
  message: string;
  imagePath: any;
  imgURL;
  fileSelected: boolean = false;
ngOnInit(){
 
}
preview(files) {
  if (files.length === 0)
    return;
  this.fileSelected = true;
  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}

}