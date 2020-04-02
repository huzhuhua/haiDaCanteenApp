import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
// 引入组件
import {My} from '../model/my';
import {MyService} from '../services/my.service';
import { Router } from '@angular/router';
import {StorageKey} from '../storage.key';
import {LifeHook} from '../services/life-hook.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public balance: number;
  public earnings:number;
  public myINfo: object = {};
  // 声明数组：调用model
  // myList: Array<My> = [];
  constructor(public nav: NavController,private myService: MyService, private router: Router, private storage: Storage ) {

  }


  // 调用数据：将服务中请求到的数据返回给数组
  async ngOnInit() {


  }


  async onPageWillClose() {
    console.log('RegisterPage页面即将关闭，开始清除数据。。。');
  }

  async onPageWillEnter() {
    this.myINfo = await this.myService.getmy();
    this.balance = await this.myService.getBalance();

    // this.earnings = await this.myService.getEarnings();
    // if(this.earnings == undifine){

    // }
    // console.log(this.cardList);
    console.log('RegisterPage页面即将显示，开始初始化或刷新数据。。。');
  }


}
