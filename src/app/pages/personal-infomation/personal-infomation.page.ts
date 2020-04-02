import { Component, OnInit } from '@angular/core';
import { BlankCardService } from 'src/app/services/blank-card.service';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';

@Component({
  selector: 'app-personal-infomation',
  templateUrl: './personal-infomation.page.html',
  styleUrls: ['./personal-infomation.page.scss'],
})
export class PersonalInfomationPage implements OnInit {

  // 声明数组：调用model
  infomationList: any;
   public text:string;
  constructor(
    private storage:StorageService,
    private blankcardService: BlankCardService, 
    private router: Router, 
    public actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
this.check();
this.getInfomation();
  }

  async getInfomation(){
    const a = await this.blankcardService.getInfomation()
    this.infomationList = a.idCard;
    console.log(this.infomationList)
  }

  // 添加上拉菜单
async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    // header: 'Albums',
    buttons: [ {
      text: '上传头像',
      handler: () => {
        console.log('上传头像');
        this. blankcardService.getInfomation();
      }
    }, {
      text: '取消',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('取消');
      }
    }]
  });
  await actionSheet.present();
}
//判断开户状态
  async check(){
 const a= await this.storage.get(StorageKey.USER_INFO);
 if(a>=1){
 this.text = "已上传"
 }else{
   this.text = "未上传"
 }
 console.log(this.text)
  }


}