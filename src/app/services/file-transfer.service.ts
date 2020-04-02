import { Injectable } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';

import {File} from '@ionic-native/file/ngx'
@Injectable({
  providedIn: 'root'
})
export class FileTransferService {

  constructor(private transfer: FileTransfer,private file :File) { }
   fileTransfer: FileTransferObject = this.transfer.create();

// full example
upload(file:any,url:any) {

  let options: FileUploadOptions = {
     fileKey: 'file',
     fileName: 'name.jpg',
     headers: {} ,
     params: {
      type: 'file',
      action: 'upload',
      // timestamp: timestamp(),
      auth_token: '79e1bd1504962034c068461d58b9cd89a1d8a4a1'
  },
  }
  console.log('1111')
  this.fileTransfer.upload(file,'https://localhost:3000/upload' , options)
   .then((data) => {
    console.log('成功')
     console.log(data)
     // success
   }, (err) => {
     console.log(err)
     // error
   })
}

download() {

  const url = 'http://www.example.com/file.pdf';
  this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
    console.log('1')
   
    console.log('download complete: ' + entry.toURL());
  }, (err) => {
    // handle error
    console.log(err)
    console.log('2')
  });
}

}
