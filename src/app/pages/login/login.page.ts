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
import { webSocket } from 'rxjs/webSocket';
import { WebSocketService } from 'src/app/services/web-socket.service';

declare var baidu_location
// import * as io from 'socket.io-client';
import * as io from 'socket.io-client';
import { NavController, IonContent } from '@ionic/angular';
// import { Alipay } from '@ionic-native/alipay/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
/*
author:  wangQiQi
description:
date:2020/3/13
*/
export class LoginPage implements OnInit {
  @ViewChild(IonContent, name) content: IonContent;
  messages = [];
  connection;
  message;
 ws;
mobile: AbstractControl;
password: AbstractControl;
code: AbstractControl;
loginForm: FormGroup;
value: string;
msg:string;
// socket = io("ws://127.0.0.1:3000");
  constructor( 
    // private ws:WebSocketService,
    public nav: NavController,
    private cy:CryptoService, 
    // private alipay:Alipay,
    private getUserInfoService: GetUserInfoService, 
    private fb: FormBuilder, 
    private loginService: LoginService, 
    private storage: Storage, 
    private router: Router, 
    private httpService: HttpService, 
    private storageService: StorageService) {
    this.loginForm = this.fb.group(
      {
        mobile: new FormControl('', {
          validators: [Validators.required, Validators.pattern(new RegExp(/^1[3456789]\d{9}$/))]
        }),

          password: ['', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(16), Validators.pattern(new RegExp(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/))]]
        
       

   }
   );
    this.mobile = this.loginForm.controls.mobile;
    this.password = this.loginForm.controls.password;
  

 
   }

  ngOnInit() {
  //   this.alipay.pay(alipayOrder)
  //  .then(result => {
  //     console.log(result); // Success
  //  })
  //  .catch(error => {
  //     console.log(error); // Failed
  //  });
  window.addEventListener('native.keyboardshow',(e:any) =>{
    console.log(e)
   
    let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("card");
console.log(scrollDiv)
scrollDiv[0].style.height= "480px"
console.log( scrollDiv[0].style.height)
this.content.scrollToBottom(0)
   

// 　　　　this.content.scrollToTop(e.keyboardHeight) 


// this.productInfo.productId = this.pId;
　});
window.addEventListener('native.keyboardhide',  (e)=> {
    // todo 进行键盘不可用时操作
    let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("card");
console.log(scrollDiv)
scrollDiv[0].style.height="300px"
this.content.scrollToTop(0)
    console.log(e)
});

   
      
      }
    
  
  

//聊天
blurCheck(){
 
  const test= <HTMLElement><unknown>document.getElementsByClassName("test");
  
  const msg = test[0].value
  // this.socket.emit('news', { a:msg}); //向服务器发送消息
  
}

async login() {

  const loginParam = this.loginForm.getRawValue();
 
  let token = await this.loginService.login(loginParam);
  
  console.log(token)
       // 把token存下来，直到退出登录或者退出APP后再删除
  if (token) { 
   
     
        await this.storageService.add(StorageKey.TOKEN, token);
          console.log('sss')
       
        await this.nav.navigateForward("tabs/tab1")
        // await this.router.navigateByUrl('address');
       }
}
onClick() {
  console.log('ff');
}
}
