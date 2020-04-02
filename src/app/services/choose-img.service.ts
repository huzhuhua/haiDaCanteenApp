import { Injectable } from '@angular/core';
import { ImagePicker ,ImagePickerOptions} from '@ionic-native/image-picker/ngx';
// import { ImagePicker } from '_@ionic-native_image-picker@5.22.0@@ionic-native/image-picker/ngx';
// import {ImagePicker} from '@ionic-native/image-picker'

@Injectable({
  providedIn: 'root'
})
export class ChooseImgService {

  constructor(private imagePicker:ImagePicker ) { }
  chooseImg(num:number){
    const options: ImagePickerOptions = {
      maximumImagesCount: num,
      width: 0,
      height: 0,
      quality: 20,
      outputType: 1,
    };
  return  this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
      return results
    }, (err) => { });
  }
}
