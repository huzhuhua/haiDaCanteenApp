
import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http/http.service';
import {StorageKey} from '../../storage.key';
import { LoginService } from 'src/app/services/login.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { GetUserInfoService } from 'src/app/services/get-user-info.service';
import { CryptoService } from 'src/app/services/crypto.service';

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
}
