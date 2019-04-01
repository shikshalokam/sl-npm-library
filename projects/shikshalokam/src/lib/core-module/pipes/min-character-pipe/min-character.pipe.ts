import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minchar',
  pure: false
})
export class MinCharacterPipe implements PipeTransform {
  constructor() {}
  transform(value: any , length?): any {
      value = value.trim();
      if (value.length <= length  || value == "") {
        return value;
      }
      else{
        value = value.substring(0,length-3)+'...';
        return value;
      }
      
  
    }
  }

