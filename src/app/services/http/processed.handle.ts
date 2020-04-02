import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Constant } from '../../Constant';
import { NativeService } from '../native.service';
import { NavController } from '@ionic/angular';
import { HttpService } from './http.service';
import { URI } from '../../uri'
import { StorageService } from '../storage.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { CryptoService } from '../crypto.service';
@Injectable({
    providedIn: 'root'
})
export class ProcessedHandler {
    constructor(private nativeService: NativeService,
        private httpService: HttpService,
        private storage: StorageService,
        private router: Router,
        private crypto:CryptoService
    ) {
    }

    handle(res: HttpResponse<any>): HttpResponse<any> {
        this.nativeService.hideLoading();
        switch (res.status) {
            case 200:
                return this.r200(res);
            default:
                this.rError(res);
                return;
        }
    }

    r200(res: HttpResponse<any>): HttpResponse<any> {
        
            if( res.body&&res.body.code&&res.body.code ===Constant.SUCCESS_CODE){
                
                return this.rSuccess(res);
            } 
             else {
            this.rBError(res);         
                   
        }
    }

    rSuccess(res: HttpResponse<any>): HttpResponse<any> {
    if(res.body.data){
        
    
        return res.clone({ body:res.body.data});
    
  }else
       return res.clone({ body: "1" });
    }

    mSuccess(res: HttpResponse<any>): HttpResponse<any> {
        return res.clone({ body: res.body });
    }

    rBError(res: HttpResponse<any>) {
        switch (res.body.code) {

             case Constant.USER_IDCARD_WRONG:
                //   this.router.navigateByUrl("/tabs")
                this.nativeService.showConfirm(res.body.msg, '确定', () => { this.router.navigateByUrl("/open-acount") }, '取消', () => { }, '温馨提示')
                //   return  this.rSuccess(res)
                break;
                case Constant.USER_BANKCARD_WRONG:
                    // this.router.navigateByUrl("/tabs")
                this.nativeService.showConfirm(res.body.msg, '确定', () => { this.router.navigateByUrl("/bind-card") }, '取消', () => { }, '温馨提示')
                break;
                case  Constant.ID_CARD_EXPIRED:
                this.nativeService.showAlert(res.body.msg, '确定', () => {this.router.navigateByUrl("/login") }, '警告')
                // return  this.rSuccess(res)
                default:
                this.nativeService.showAlert(res.body.msg, '确定', () => { }, '警告')
                
                // return  this.rSuccess(res)
                break;
            
        }
    }

    // dealForceToUpdate(resData: any) {

    //     this.nativeService.showAlert(resData.updateTip, '立即更新', () => {
    //         if (this.nativeService.isIos()) {
    //             this.nativeService.openUrlByBrowser(resData.iosUpdateUrl);
    //         } else {
    //             this.nativeService.openUrlByBrowser(resData.androidUpdateUrl);
    //         }
    //     }, '发现新版本');
    // }

    // async dealSpecialBusinessError(errCode: string) {
    //     const types = ['账号已有手机绑定', '手机已有账号绑定'];
    //     const title = errCode === Constants.RESET_PHONE_ERR_CODE[0] ? types[0] : types[1];
    //     this.nativeService.showConfirm('点击重置按钮将为您进行重置操作或向人事发送重置申请邮件!', '重置', () => {
    //         this.reset_phone(errCode);
    //     }, '取消', () => {
    //     }, true, title);
    // }

    rError(res: HttpResponse<any>) {
        this.nativeService.showAlert('请求失败');
    }

    // private async reset_phone(errCode: string) {
    //     const userInfo: UserInfo = await this.storage.read(StorageKey.USER_INFO);
    //     const info = await this.httpService.get(API.RESET_IMSI, {
    //         loginId: userInfo.email,
    //         imsi: userInfo.imsi,
    //         errCode
    //     });
    //     if (info) {
    //         this.nativeService.showAlert(info.result);
    //     }
    // }
}