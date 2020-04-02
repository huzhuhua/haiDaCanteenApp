import { Component, OnInit } from '@angular/core';

import {BlankCard} from '../../model/blank-card';
import {BlankCardService} from '../../services/blank-card.service';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { NativeService } from 'src/app/services/native.service';
import { GetUserInfoService } from 'src/app/services/get-user-info.service';


@Component({
  selector: 'app-blank-card',
  templateUrl: './blank-card.page.html',
  styleUrls: ['./blank-card.page.scss'],
})
export class BlankCardPage implements OnInit {

  // 声明数组：调用model
  cardList: any;
  bankCardNum: string;
  // 声明银行卡服务，路由模块
  constructor( 
    private blankcardService: BlankCardService, 
    private router: Router, 
    public actionSheetController: ActionSheetController,

  ) { }

  // 调用数据：将服务中请求到的数据返回给数组
  async ngOnInit() {
    
}
async getCard(){
  this.cardList = await this.blankcardService.getcard();
  for (let i = 0; i < this.cardList.length; i++) {
    const six = this.cardList[i].bindCard.bankCardNum.substring(0, 6);
    console.log(six)

    switch (six) {
        case '4367421':
            this.cardList[i].bindCard.formatName = "中国建设银行";
            this.cardList[i].bindCard.formatEnglishName= 'CCB'
            break;
        case '552599':
            this.cardList[i].bindCard.formatName = "中国农业银行";
            this.cardList[i].bindCard.formatEnglishName = 'ABC'
            break;
        case '427030':
            this.cardList[i].bindCard.formatName = "中国工商银行";
            this.cardList[i].bindCard.formatEnglishName = 'ICBC'
            break;
        case '622760':
            this.cardList[i].bindCard.formatName = "中国银行";
            this.cardList[i].bindCard.formatEnglishName = 'BOC'
            break;

        default:
            break;
    }
  console.log(this.cardList);
}
}

  // 添加银行卡：路由跳转到绑卡页面
   async navigate() {
    await this.router.navigateByUrl('tabs/tab4');
  }

  async navigate1() {
    await this.router.navigateByUrl('bind-card');
  }
  async onPageWillClose() {

    
}

async onPageWillEnter() {
    this.getCard();
    
}

// 添加上拉菜单
async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    // header: 'Albums',
    buttons: [ {
      text: '切换主卡',
      handler: () => {
        console.log('切换主卡');
        this. blankcardService.toChange();
      }
    }, {
      text: '取消绑卡',
      handler: () => {
        console.log('取消绑卡');
        this. blankcardService.toUntying();
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

}
