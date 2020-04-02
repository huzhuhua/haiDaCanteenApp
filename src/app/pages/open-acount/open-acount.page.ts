import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { OpenAcountService } from 'src/app/services/open-acount.service';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http/http.service';
import { User } from 'src/app/model/user';
import { StorageKey } from 'src/app/storage.key';
import { StorageService } from 'src/app/services/storage.service';
import { NativeService } from 'src/app/services/native.service';
import {UserInfo} from '../../model/userInfo';
import { from } from 'rxjs';
import { CameraService } from 'src/app/services/camera.service';
import { URI } from 'src/app/uri';
import { ChooseImgService } from 'src/app/services/choose-img.service';
@Component({
  selector: 'app-open-acount',
  templateUrl: './open-acount.page.html',
  styleUrls: ['./open-acount.page.scss'],
})
export class OpenAcountPage implements OnInit {
  realName: AbstractControl;
  idCard: AbstractControl;
  openAcountForm: FormGroup;
   password:AbstractControl;
   idPhoto1:AbstractControl;
   idPhoto2:AbstractControl;
   flag:boolean=false;
   flag1:boolean=false;
   url:any;
   url1:any;
    constructor(private chooseImg:ChooseImgService,private camera:CameraService, private nativeService: NativeService, private storageService: StorageService, private fb: FormBuilder, private openAcountService: OpenAcountService, private router: Router, private httpService: HttpService) {
      this.openAcountForm = this.fb.group(
        {
          realName: new FormControl('', {
            validators: [Validators.required, Validators.pattern(new RegExp(/^[A-Za-z0-9\u4e00-\u9fa5]+$/))]
          } ) ,
          idCard: new FormControl('', {
            validators: [Validators.required, Validators.pattern(new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/))]
          } ) ,
          password: ['', [Validators.required, Validators.pattern(''),  Validators.pattern(new RegExp(/^\d{6}$/))]],
          // cardImg1:[],
          // cardImg2:[],
          idPhoto1:[],
          idPhoto2:[]

     }
     );
      this.realName = this.openAcountForm.controls.realName;
      this.idCard = this.openAcountForm.controls.idCard;
     this.password = this.openAcountForm.controls.password;
     this.idPhoto1 = this.openAcountForm.controls.idPhoto1;
     this.idPhoto2 = this.openAcountForm.controls.idPhoto2;
     }


  ngOnInit() {

  }
  async openAccount() {
    const openAccountParam = this.openAcountForm.getRawValue();
    console.log(openAccountParam)
    const a = await this.openAcountService.openAccount(openAccountParam);

    if (a) {
      
        await this.storageService.add(StorageKey.USER_INFO, a);
        await this.router.navigateByUrl('bind-card');
    }
}
okButtonHandler() {

}
async onPageWillClose() {

  console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
  console.log('RegisterPage页面即将进入，开始初始化数据。。。');
}
 //上传图片
 async upload(flag:any) {
   console.log(flag)
  this.nativeService.presentActionSheet('上传银行卡（正面）', [{
    text: '拍照上传', icon: 'aperture-outline', handler: () => {
      let imgUrl: any = this.camera.takePhoto(); let a = imgUrl.then((data) => {
        console.log(data)
        if (data) {
         if(flag==true){
          this.url =  'data:image/png;base64,' +  data;
          this.flag =true;
          this.idPhoto1.setValue( data)   ;
         }else{
          this.url1 =  'data:image/png;base64,' +  data;
          this.flag1 =true;
          this.idPhoto2.setValue( data)   ;
         }
          
       
         
          // this.httpService.post(URI.uploadImg, {picture: data })
         
          // this.fileTransfer.upload(data,'https://imgbb.com/') ;
          // this.fileTransfer.upload('','http://39.96.49.203/picture/') ;
        } else {
          console.log('9999')
        }
      })
    }
  }, {
    text: '从文件夹选择', icon: 'images-outline', handler: () => {
      let imgUrl: any = this.chooseImg.chooseImg(1); let a = imgUrl.then((data) => {
     
        if (data) {
          const data1 =data[0];
          if(flag==true){
            console.log('第一个')
            this.url =  'data:image/png;base64,' +  data1;
            this.idPhoto1.setValue( data1)   ;
            this.flag =true;
          
          }else{
            this.url1 =  'data:image/png;base64,' +  data1;
            this.idPhoto2.setValue( data1)   ;
            this.flag1 =true;
          }
         
          // this.httpService.post(URI.uploadImg, {picture: data })
        } else {
          console.log('9999')
        }
      })
      console.log('从文件夹上传')
    }
  }, {
    text: '取消',
    icon: 'close',
    role: 'cancel',
    handler: () => {
      console.log('Cancel clicked');
    }
  }])

}



}
