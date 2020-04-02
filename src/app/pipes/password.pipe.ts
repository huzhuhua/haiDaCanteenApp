import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  
  transform(value): any {
    //   let len = value[0].length -2*value[1];
    //   let str="";
    //   for(let i=0;i<len;i++){
    //      str =str + "*"
    //   }
    // return value[0].substring(0,value[1])+str+value[0].substring(value[0].length-value[1],value[0].length);
    let str = "";
    for(let i = 6; i < value.length - 6; i++) {
     str += '*';
    }
    return value.substring(0, 6) + str + value.substring(value.length - 4, value.length);
  }

  // value[0].substring(0,value[1])+str+value[0].substring(value[0].length-value[1],value[0].length);

}
