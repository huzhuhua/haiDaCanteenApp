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
public hFaceUrl = "../../../assets/hdImages/开关 关.svg";
public fingerUrl = "../../../assets/hdImages/开关 关.svg";
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
    this.fingerUrl = "../../../assets/hdImages/开关开.svg";
  }else{
    this.fingerUrl = "../../../assets/hdImages/开关 关.svg";
  }
}
  //人脸识别
hFace(){
  this.hFaceFlag = !this.hFaceFlag
  if(this.hFaceFlag){
    this.hFaceUrl = "../../../assets/hdImages/开关开.svg";
  }else{
    this.hFaceUrl = "../../../assets/hdImages/开关 关.svg";
  }
}
//退出登录
outLogin(){
  this.storage.remove(StorageKey.TOKEN);
  this.router.navigateByUrl('/login');
}
}
