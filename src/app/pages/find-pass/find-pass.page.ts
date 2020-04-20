
import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { URI } from '../../uri';
import { StorageKey } from '../../storage.key';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { RegisterService } from 'src/app/services/register.service';
import { NativeService } from '../../services/native.service';
import { NavController, IonContent } from '@ionic/angular';
import { ResetPasswordService } from 'src/app/services/reset-password.service';
@Component({
  selector: 'app-find-pass',
  templateUrl: './find-pass.page.html',
  styleUrls: ['./find-pass.page.scss'],
})
/*
author:  wangQiQi
description:
date:2020/3/13
*/
export class FindPassPage implements OnInit {
  @ViewChild(IonContent, name) content: IonContent;
  mobile: AbstractControl;
 
  code: AbstractControl;
  resetPasswordForm: FormGroup;
   check = false;
  value: any;

  constructor( private navController: NavController, private nativeService: NativeService, private fb: FormBuilder, private resetPasswordService: ResetPasswordService, private storage: Storage, private router: Router, private httpService: HttpService) {
    this.resetPasswordForm = this.fb.group(
      {
        mobile: new FormControl('', {
          validators: [Validators.required, Validators.pattern(new RegExp(/^1[3456789]\d{9}$/))]
        }),
        code: new FormControl('', {
          validators: [Validators.required]
        })

      }
    )
    this.mobile = this.resetPasswordForm.controls.mobile;
    this.code = this.resetPasswordForm.controls.code;
    // this.confirmPassword.ionBlur.subscribe((data:any)=>{
    //   console.log(data)
    //    if(data !=this.password){
    //      this.check = true;
    //    }
    // })
  }

  ngOnInit() {
    this.code = this.value;
  //   window.addEventListener('native.keyboardshow',(e:any) =>{
  //     console.log(e)
     
  //     let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("findpassCard");
  // console.log(scrollDiv)
  // scrollDiv[0].style.height= "444px"
  // console.log( scrollDiv[0].style.height)
  // this.content.scrollToBottom(0)
     

  // // 　　　　this.content.scrollToTop(e.keyboardHeight) 
  
 
  // // this.productInfo.productId = this.pId;
  // 　});
  // window.addEventListener('native.keyboardhide',  (e)=> {
  //     // todo 进行键盘不可用时操作
  //     let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("findpassCard");
  // console.log(scrollDiv)
  // scrollDiv[0].style.height="300px"
  // this.content.scrollToTop(0)
  //     console.log(e)
  // });
  }
 

  async resetPassword() {

    const resetPasswordParam = this.resetPasswordForm.getRawValue();
    console.log(resetPasswordParam)
    const result = await this.resetPasswordService.resetPassword(resetPasswordParam)
     console.log(result)
    if(result){
      this.nativeService.showAlert(result,  '确定', ()=>{this.router.navigateByUrl('login')},  '密码找回成功')
    }

  }

  okButtonHandler() {

  }
  returnCode(code: string) {
    this.value = code;
  }
  async onPageWillClose() {
   
    console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
  window.addEventListener('native.keyboardshow',(e:any) =>{
    console.log(e)
   
    let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("findpassCard");
console.log(scrollDiv)
scrollDiv[0].style.height= "444px"
console.log( scrollDiv[0].style.height)
this.content.scrollToBottom(0)
   

// 　　　　this.content.scrollToTop(e.keyboardHeight) 


// this.productInfo.productId = this.pId;
　});
window.addEventListener('native.keyboardhide',  (e)=> {
    // todo 进行键盘不可用时操作
    let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("findpassCard");
console.log(scrollDiv)
scrollDiv[0].style.height="300px"
this.content.scrollToTop(0)
    console.log(e)
});
}
}