import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NativeService } from 'src/app/services/native.service';
import { FormBuilder, FormGroup, AbstractControl, FormControl, Validators} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-transition-password',
  templateUrl: './transition-password.page.html',
  styleUrls: ['./transition-password.page.scss'],
})
export class TransitionPasswordPage implements OnInit {

  // 数据定义
  passwordForm: FormGroup;
  mobile: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  code: AbstractControl;
  value: any;
  check = false;
  
  constructor(
    // 引导服务
    private activateRoute: ActivatedRoute,
    private navController: NavController, 
    private nativeService: NativeService, 
    private fb: FormBuilder, 
    private resetPasswordService: ResetPasswordService,
    private router: Router, 
    private httpService: HttpService,
  ) {

      // 表单验证
      this.passwordForm = this.fb.group
      ({
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
      })

      // 绑定数据
      this.mobile = this.passwordForm.controls.mobile;
      this.password = this.passwordForm.controls.password;
      this.confirmPassword = this.passwordForm.controls.confirmPassword;
      this.code = this.passwordForm.controls.code;
    
    };

  ngOnInit() {
    this.code = this.value;
  }
  
  //确认密码验证
  blurCheck(){
    if(this.password.value != this.confirmPassword.value){
      this.check = true;
    }
  };

  focusCheck(){
    this.check = false; 
  };

  async transitionPassword() {

    const transitionPasswordParam = this.passwordForm.getRawValue();
    const result = await this.resetPasswordService.transitionPassword(transitionPasswordParam)
    if(result){
      this.nativeService.showAlert('登录密码修改成功',  '确定', ()=>{this.router.navigateByUrl('setting')},  '温馨提示')
    }

  }

  returnCode(code: string) {
    this.value = code;
  }
}
