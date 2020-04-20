
import { Component, OnInit , ChangeDetectorRef, ViewChild} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http/http.service';
import {StorageKey} from '../../storage.key';
import { LoginService } from 'src/app/services/login.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { GetUserInfoService } from 'src/app/services/get-user-info.service';
import { CryptoService } from 'src/app/services/crypto.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-code-login',
  templateUrl: './code-login.page.html',
  styleUrls: ['./code-login.page.scss'],
})
/*
author:  wangQiQi
description:
date:2020/3/13
*/
export class CodeLoginPage implements OnInit  {
mobile: AbstractControl;
@ViewChild(IonContent, name) content: IonContent;
code: AbstractControl;
loginForm: FormGroup;
value: string;
  constructor( private cy:CryptoService, private getUserInfoService: GetUserInfoService, private fb: FormBuilder, private loginService: LoginService, private storage: Storage, private router: Router, private httpService: HttpService, private storageService: StorageService) {
    this.loginForm = this.fb.group(
      {
        mobile: new FormControl('', {
          validators: [Validators.required, Validators.pattern(new RegExp(/^1[3456789]\d{9}$/))]
        }),

       
        code: new FormControl('', {
            validators: [Validators.required]
        }),

   }
   );
    this.mobile = this.loginForm.controls.mobile;
   
    this.code = this.loginForm.controls.code;

 
   }

  ngOnInit() {
  //   window.addEventListener('native.keyboardshow',(e:any) =>{
  //     console.log(e)
     
  //     let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("codeLoginCard");
  // console.log(scrollDiv)
  // scrollDiv[0].style.height= "480px"
  // console.log( scrollDiv[0].style.height)
  // this.content.scrollToBottom(0)
     
  
  // // 　　　　this.content.scrollToTop(e.keyboardHeight) 
  
  
  // // this.productInfo.productId = this.pId;
  // 　});
  // window.addEventListener('native.keyboardhide',  (e)=> {
  //     // todo 进行键盘不可用时操作
  //     let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("codeLoginCard");
  // console.log(scrollDiv)
  // scrollDiv[0].style.height="300px"
  // this.content.scrollToTop(0)
  //     console.log(e)
  // });
   
  }
async login() {

  const loginParam = this.loginForm.getRawValue();
 
  const token = await this.loginService.codeLogin(loginParam);
  
  console.log(token)
       // 把token存下来，直到退出登录或者退出APP后再删除
  if (token) {
        await this.storageService.add(StorageKey.TOKEN, token);
         
      
        await this.router.navigateByUrl('tabs');
       }
}
onClick() {
  console.log('ff');
}
async onPageWillClose() {
   
  console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
  window.addEventListener('native.keyboardshow',(e:any) =>{
    console.log(e)
   
    let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("codeLoginCard");
console.log(scrollDiv)
scrollDiv[0].style.height= "480px"
console.log( scrollDiv[0].style.height)
this.content.scrollToBottom(0)
   

// 　　　　this.content.scrollToTop(e.keyboardHeight) 


// this.productInfo.productId = this.pId;
　});
window.addEventListener('native.keyboardhide',  (e)=> {
    // todo 进行键盘不可用时操作
    let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("codeLoginCard");
console.log(scrollDiv)
scrollDiv[0].style.height="300px"
this.content.scrollToTop(0)
    console.log(e)
});
}
}
