import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

public fingerUrl = "assets/HdImage/开关关（自定义）.svg";
hFaceFlag : boolean = false;
fingerFlag : boolean = false;
  constructor(private storage:StorageService,private router:Router) { }

  ngOnInit() {
  }
//指纹识别
finger(){
  console.log('111')
  this.fingerFlag = !this.fingerFlag
  if(this.fingerFlag){
    this.fingerUrl = "assets/HdImage/开关开.svg";
    this.storage.add(StorageKey.HADLOGIN,'true');
    console.log( this.storage.get(StorageKey.HADLOGIN))
  }else{
    this.fingerUrl = "assets/HdImage/开关关（自定义）.svg";
    this.storage.add(StorageKey.HADLOGIN,'false');
    console.log(this.storage.get(StorageKey.HADLOGIN))
  }
}
  //人脸识别
// hFace(){
//   this.hFaceFlag = !this.hFaceFlag
//   if(this.hFaceFlag){
//     this.hFaceUrl = "../../../assets/icon/开关开（自定义）.svg";
//   }else{
//     this.hFaceUrl = "../../../assets/icon/开关关（自定义）.svg";
//   }
// }
//退出登录
outLogin(){
  this.storage.remove(StorageKey.TOKEN);
  this.storage.remove(StorageKey.HADLOGIN)
  this.router.navigateByUrl('/login');
}

onClick1(){
  this.router.navigateByUrl('/personal-infomation');
}

onClick2(){
  this.router.navigateByUrl('/transition-password');
}

async onPageWillClose() {
   
  console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
 const a=await this.storage.get(StorageKey.HADLOGIN)
 console.log(a)
 if(a=="true"){
  this.fingerUrl = "assets/HdImage/开关开.svg";
 }

}
}
