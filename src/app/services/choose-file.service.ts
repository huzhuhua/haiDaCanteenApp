import { Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
@Injectable({
  providedIn: 'root'
})
export class ChooseFileService {

  constructor(private fileChooser: FileChooser) { }
  async  chooseFile(){
    
   return    this.fileChooser.open()
  .then((uri) => {
    console.log(uri)
    return uri
  }
  )
  .catch(e => console.log(e));
  }
}
