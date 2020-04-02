import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BindCardService } from 'src/app/services/bind-card.service';
import { User } from 'src/app/model/user';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';

import { NativeService } from 'src/app/services/native.service';
import { Router } from '@angular/router';
import { CameraService } from 'src/app/services/camera.service';
import { ChooseFileService } from 'src/app/services/choose-file.service';

import { FileTransferService } from 'src/app/services/file-transfer.service';
import { HttpService } from 'src/app/services/http/http.service';
import { URI } from 'src/app/uri';
// import { Base64 } from '@ionic-native/base64/ngx';
import { ChooseImgService } from 'src/app/services/choose-img.service';
import { Base64 } from '_@ionic-native_base64@5.23.0@@ionic-native/base64/ngx';
// import { Base64 } from '_@ionic-native_base64@5.22.0@@ionic-native/base64/ngx';

@Component({
  selector: 'app-bind-card',
  templateUrl: './bind-card.page.html',
  styleUrls: ['./bind-card.page.scss'],
})
export class BindCardPage implements OnInit {
  realName: AbstractControl;
  idCard: AbstractControl;
  cardPic: AbstractControl;
  bankCardNum: AbstractControl;
  code: AbstractControl;
  mobile: AbstractControl;
  bindCardForm: FormGroup;
  flag:boolean=false;
  value: string;
   url:any;
  constructor(private chooseImg:ChooseImgService, private base64: Base64,private httpService: HttpService, private fileTransfer: FileTransferService, private chooseFile: ChooseFileService, private camera: CameraService, private nativeService: NativeService, private router: Router, private storageService: StorageService, private bindCardService: BindCardService, private fb: FormBuilder) {
    this.bindCardForm = this.fb.group(
      {
        realName: new FormControl('', {
          validators: [Validators.required, Validators.pattern(new RegExp(/^[A-Za-z0-9\u4e00-\u9fa5]+$/))]
        }),
        mobile: new FormControl('', {
          validators: [Validators.required, Validators.pattern(new RegExp(/^1[3456789]\d{9}$/))]
        }),

        idCard: new FormControl('', {

          validators: [Validators.required, Validators.pattern(new RegExp(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/))]
        }),
        bankCardNum: new FormControl('', {
          validators: [Validators.required, Validators.pattern(new RegExp(/\d{17}[\d|x]|\d{15}/))]
        }),
        code: new FormControl('', {
          validators: [Validators.required]
        }),
        cardPic: [],

      }
    );
    this.mobile = this.bindCardForm.controls.mobile;
    this.realName = this.bindCardForm.controls.realName;
    this.idCard = this.bindCardForm.controls.idCard;
    this.cardPic = this.bindCardForm.controls.cardPic;
    this.bankCardNum = this.bindCardForm.controls.bankCardNum;
    this.code = this.bindCardForm.controls.code;
  }

  ngOnInit() {
  }
  okButtonHandler() {

  }
  async bindingCard() {
    const bindingCardParam = this.bindCardForm.getRawValue();
    const userInfo = await this.bindCardService.bindCard(bindingCardParam);
    console.log(userInfo);
    if (userInfo === null) {
      await this.storageService.add(StorageKey.USER_INFO, userInfo);
      this.nativeService.showAlert('绑卡成功', '确定', () => { this.router.navigateByUrl('tabs/tab4'); }, '温馨提示');

    }
    // else{
    //   this.nativeService.showConfirm('绑卡失败', '确定', this.okButtonHandler,  '取消',  this.okButtonHandler,  '')
    // }
  }
  //上传图片
  async upload() {
    this.nativeService.presentActionSheet('上传银行卡（正面）', [{
      text: '拍照上传', icon: 'aperture-outline', handler: () => {
        let imgUrl: any = this.camera.takePhoto();       
        let a = imgUrl.then((data) => {        
          if (data) {
             console.log(data)
              this.url =  'data:image/png;base64,' +  data;
            this.flag =true;
            this.cardPic.setValue( data)   ;
          
           
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
          this.url =  'data:image/png;base64,' +  data;
          // this.base64.encodeFile(imgUrl).then((base64File: string) => {
          //   console.log(base64File);
          // }, (err) => {
          //   console.log(err);
          // });
           

          // console.log(data)
          if (data) {
            const data1=data[0];
            this.cardPic.setValue( data1)   ;
            this.flag =true;
            console.log(this.cardPic)
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
  test() {
  }
  //   this.base64.encodeFile('content://com.android.providers.media.documents/document/image%3A852860').then((base64File: string) => {
  //     console.log(base64File);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

}
