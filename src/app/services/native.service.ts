import {Injectable} from '@angular/core';
import {AlertController, LoadingController, ToastController,ActionSheetController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class NativeService {
    okButtonHandler = () => {
        console.log('okButtonClicked');
    };

    constructor(public actionSheetController: ActionSheetController, private alertCtrl: AlertController, private toastCtrl: ToastController, private loadingCtrl: LoadingController) {
    }
    //弹出输入框
    //弹出表单
  async showPrompt(header:string,inputs:any,buttons:any) {
    const alert = await this.alertCtrl.create({header,inputs,buttons})
    //   header: 'Prompt!',
    //   inputs: [
    //     {
    //       name: 'name1',
    //       type: 'text',
    //       value: 'hello',
    //       placeholder: 'Placeholder 1'
    //     },
    //     {
    //       name: 'name3',
    //       value: 'http://ionicframework.com',
    //       type: 'url',
    //       placeholder: 'Favorite site ever'
    //     },
    //     // input date with min & max
    //     {
    //       name: 'name4',
    //       type: 'date',
    //       min: '2017-03-01',
    //       max: '2018-01-12'
    //     },
    //     // input date without min nor max
    //     {
    //       name: 'name5',
    //       type: 'date'
    //     },
    //     {
    //       name: 'name6',
    //       type: 'number',
    //       min: -5,
    //       max: 10
    //     },
    //     {
    //       name: 'name7',
    //       type: 'number'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: () => {
    //         console.log('Confirm Cancel');
    //       }
    //     }, {
    //       text: 'Ok',
    //       handler: (result) => {    //获取表单输入的值
    //         console.log(result);
    //       }
    //     }
    //   ]
    // });
 
    await alert.present();
  }


//下拉弹窗
async presentActionSheet(header:string,buttons:any) {
    await this.closeTips();
    const actionSheet = await this.actionSheetController.create({
      header: header,
      buttons: buttons
    //   {
    //     text: 'Delete',
    //     role: 'destructive',
    //     icon: 'trash',
    //     handler: () => {
    //       console.log('Delete clicked');
    //     }
    // {
    //     text: 'Cancel',
    //     icon: 'close',
    //     role: 'cancel',
    //     handler: () => {
    //       console.log('Cancel clicked');
    //     }
    //   }
    });
   return  await actionSheet.present();
  }



    async showAlert(message: string, okButtonText: string = '确定', okButtonHandler = this.okButtonHandler, header: string = '温馨提示') {
        //关闭已经存在的alert、toast、loading
        await this.closeTips();
        const alert = await this.alertCtrl.create(
            {
                header, message,
                buttons: [
                    {text: okButtonText, handler: okButtonHandler}
                ]
            });
        return await alert.present();
        //显示新的弹框
    }

    async showToast(message: string, position: 'top' | 'middle' | 'bottom' = 'bottom', duration: number = 3000) {
        //关闭已经存在的alert、toast、loading
        await this.closeTips();
        //显示新的toast
        const toast = await this.toastCtrl.create({message, position, duration});
        return await toast.present();
    }

    async showLoading(message: string = '加载中', duration?: number) {
        //关闭已经存在的alert、toast、loading
        await this.closeTips();
        //显示新的loading
        const loading = await this.loadingCtrl.create({message, duration});
        await loading.present();
        console.log('打开' + new Date());
    }
    async showConfirm(message: string, okButtonText: string = '确定', okButtonHandler = this.okButtonHandler, cancelButtonText: string = '取消', cancelButtonHandler = this.okButtonHandler, header: string = '温馨提示') {
        //关闭已经存在的alert、toast、loading
        await this.closeTips();
        const alert = await this.alertCtrl.create(
            {
                header, message,
                buttons: [
                    {text: cancelButtonText, handler: cancelButtonHandler},
                    {text: okButtonText, handler: okButtonHandler}
                ]
            });
        return await alert.present();
        //显示新的弹框
    }
    async closeLoading() {
        const loading = await this.loadingCtrl.getTop();
        console.log('关闭' + new Date());
        if (loading) {
            await loading.dismiss();
        }
    }
    async hideLoading() {
        const loading = await this.loadingCtrl.getTop();
        if (loading) {
            await loading.dismiss();
        }
    }

    private async closeTips() {
        //先获取到是否有已经打开的弹框等
        const alert = await this.alertCtrl.getTop();
        if (alert) {
            await alert.dismiss();
        }
        const toast = await this.toastCtrl.getTop();
        if (toast) {
            await toast.dismiss();
        }
        const loading = await this.loadingCtrl.getTop();
        if (loading) {
            await loading.dismiss();
        }
    }
}

