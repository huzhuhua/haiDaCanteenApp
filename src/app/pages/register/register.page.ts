import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { URI } from '../../uri';
import { StorageKey } from '../../storage.key';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { RegisterService } from 'src/app/services/register.service';
import { NativeService } from '../../services/native.service';
import { NavController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
/*
author:  wangQiQi
description:
date:2020/3/13
*/
export class RegisterPage implements OnInit {
  @ViewChild(IonContent, name) content: IonContent;
  url: string = "assets/HdImage/勾选.svg";
//  public flag: string = 'true';
 public flag: any = 'true';
  mobile: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  code: AbstractControl;
  registerForm: FormGroup;

  check = false;
  value: any;

  constructor(private activateRoute: ActivatedRoute,private navController: NavController, private nativeService: NativeService, private fb: FormBuilder, private registerService: RegisterService, private storage: Storage, private router: Router, private httpService: HttpService) {
   //获取值
   const a = this.activateRoute.snapshot.queryParamMap.get('flag');
   console.log(a)
   
   
   
    this.registerForm = this.fb.group(
      {
        mobile: new FormControl('', {
          validators: [Validators.required, Validators.pattern(new RegExp(/^1[3456789]\d{9}$/))]
        }),

        password: ['', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(16), Validators.pattern(new RegExp(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/))]]
        ,
        confirmPassword: []
        ,
        code: new FormControl('', {
          validators: [Validators.required]
        }),


      }
    )
    this.mobile = this.registerForm.controls.mobile;
    this.password = this.registerForm.controls.password;
    this.confirmPassword = this.registerForm.controls.confirmPassword;
    this.code = this.registerForm.controls.code;

    // this.confirmPassword.ionBlur.subscribe((data:any)=>{
    //   console.log(data)
    //    if(data !=this.password){
    //      this.check = true;
    //    }
    // })
  }

  ngOnInit() {
    this.code = this.value;
    console.log(this.flag)
  //   window.addEventListener('native.keyboardshow',(e:any) =>{
  //     console.log(e)
     
  //     let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("registerCard");
  // console.log(scrollDiv)
  // scrollDiv[0].style.height= "578px"
  // console.log( scrollDiv[0].style.height)
  // this.content.scrollToBottom(0)
     

  // // 　　　　this.content.scrollToTop(e.keyboardHeight) 
  
 
  // // this.productInfo.productId = this.pId;
  // 　});
  // window.addEventListener('native.keyboardhide', (e) =>{
  //     // todo 进行键盘不可用时操作
  //     let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("registerCard");
  // console.log(scrollDiv)
  // scrollDiv[0].style.height="150px"
  // this.content.scrollToTop(0)
 
  //     console.log(e)
  // });
  }
  blurCheck() {
    console.log(this.password)
    console.log(this.confirmPassword)
    if (this.password.value != this.confirmPassword.value) {
      this.check = true;
    }
  }
  focusCheck() {
    this.check = false;
    //   if(this.password == this.confirmPassword){
    //  this.check = true;
    //   }

  }
  //注册按钮
  async register() {
  
    if (this.flag == 'true') {
      alert('请先勾选协议')
    } else {
      const registerParam = this.registerForm.getRawValue();
     
      const result = await this.registerService.register(registerParam)
      console.log(result)
      if (result == '1' ) {
        this.nativeService.showAlert('注册成功', '确定', () => { this.router.navigateByUrl('login') }, '温馨提示')
      }
    }


  }

  okButtonHandler() {

  }
  returnCode(code: string) {
    this.value = code;
  }
  //勾选协议
  async change() {
  //  this.flag = 'false'
    console.log(this.flag)
if(this.flag == 'true'){
  this.flag = 'false';
}else{
  this.flag = 'true';
}
if (this.flag == 'false') {
  this.url = 'assets/HdImage/勾选亮.svg'
} else {
  this.url = 'assets/HdImage/勾选.svg'
}
   
   

  }

  async onPageWillClose() {
   
    console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
  window.addEventListener('native.keyboardshow',(e:any) =>{
    console.log(e)
   
    let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("registerCard");
console.log(scrollDiv)
scrollDiv[0].style.height= "578px"
console.log( scrollDiv[0].style.height)
this.content.scrollToBottom(0)
   

// 　　　　this.content.scrollToTop(e.keyboardHeight) 


// this.productInfo.productId = this.pId;
　});
window.addEventListener('native.keyboardhide', (e) =>{
    // todo 进行键盘不可用时操作
    let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("registerCard");
console.log(scrollDiv)
scrollDiv[0].style.height="150px"
this.content.scrollToTop(0)

    console.log(e)
});




 //获取值
 

  if(this.activateRoute.snapshot.queryParamMap.get('flag')==null){
    this.flag = 'true';
   
  }else{
    console.log(this.activateRoute.snapshot.queryParamMap.get('flag'));
    this.flag=  this.activateRoute.snapshot.queryParamMap.get('flag');
 
  }
//点击协议后，变图片
 if(this.flag == 'false'){
  this.url = 'assets/HdImage/勾选亮.svg'
 }


}
}
