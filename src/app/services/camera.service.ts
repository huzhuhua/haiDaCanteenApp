import { Injectable } from '@angular/core';

import {Camera ,CameraOptions} from '@ionic-native/camera/ngx'
@Injectable({
  providedIn: 'root'
})

export class CameraService {
  constructor(private camera:Camera) { 
   
  }
   async takePhoto() {
   let a:any;
  const  options: CameraOptions = {
    targetWidth: 500,
    targetHeight: 500,
    quality: 20,
    // destinationType: this.camera.DestinationType.DATA_URL,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE
  }
    return   this.camera.getPicture(options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64 (DATA_URL):
  let base64Image =  imageData;
  
  //  let base64Image = 'data:image/jpeg;base64,' + imageData;
  
   console.log(base64Image)
  return base64Image
 }, (err) => {
  // Handle error 
  console.log(err)
 })
 
}

}
