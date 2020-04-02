import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { URI } from '../../uri';
import { StorageKey } from '../../storage.key';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { RegisterService } from 'src/app/services/register.service';
import { NativeService } from '../../services/native.service';
import { NavController } from '@ionic/angular';
import { ResetPasswordService } from 'src/app/services/reset-password.service';
@Component({
  selector: 'app-find-password',
  templateUrl: './find-password.page.html',
  styleUrls: ['./find-password.page.scss'],
})
/*
author:  wangQiQi
description:
date:2020/3/13
*/
export class FindPasswordPage implements OnInit {
  mobile: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
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

        password: ['', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(16), Validators.pattern(new RegExp(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/))]]
        ,
        confirmPassword: []
        ,
        code: new FormControl('', {
          validators: [Validators.required]
        })

      }
    )
    this.mobile = this.resetPasswordForm.controls.mobile;
    this.password = this.resetPasswordForm.controls.password;
    this.confirmPassword = this.resetPasswordForm.controls.confirmPassword;
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
  }
  blurCheck(){
    console.log(this.password)
    console.log(this.confirmPassword)
    if(this.password.value != this.confirmPassword.value){
      this.check = true;
    }
  }
  focusCheck(){
    this.check = false;
  //   if(this.password == this.confirmPassword){
  //  this.check = true;
  //   }
    
  }
  async resetPassword() {

    const resetPasswordParam = this.resetPasswordForm.getRawValue();
    console.log(resetPasswordParam)
    const result = await this.resetPasswordService.resetPassword(resetPasswordParam)

    if(result == null){
      this.nativeService.showAlert('密码重置成功',  '确定', ()=>{this.router.navigateByUrl('login')},  '温馨提示')
    }

  }

  okButtonHandler() {

  }
  returnCode(code: string) {
    this.value = code;
  }
}