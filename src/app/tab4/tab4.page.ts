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
  public url :string = "../../assets/hdImages/头像 icon.png"

  public myINfo: any={
    name:"",
    mobile:"",
    headPortrait:""
  };
  // 声明数组：调用model
  // myList: Array<My> = [];
  constructor(public nav: NavController,private myService: MyService, private router: Router, private storage: Storage ) {

  }


  // 调用数据：将服务中请求到的数据返回给数组
  async ngOnInit() {
   
    const a = await this.myService.getmy();
    this.myINfo =a[0]
    console.log(this.myINfo)
    if(this.myINfo.headPortrait != null){
    this.url = this.myINfo.headPortrait
    }

   

  }


  async onPageWillClose() {
    console.log('RegisterPage页面即将关闭，开始清除数据。。。');
  }

  async onPageWillEnter() {
   
    const a = await this.myService.getmy();
    this.myINfo =a[0]
    console.log(this.myINfo)
    if(this.myINfo.headPortrait != null){
    this.url = this.myINfo.headPortrait
    }
    // this.earnings = await this.myService.getEarnings();
    // if(this.earnings == undifine){

    // }
    // console.log(this.cardList);
    console.log('RegisterPage页面即将显示，开始初始化或刷新数据。。。');
  }

  onClick1(){
    this.router.navigateByUrl('/personal-infomation');
  }

  onClick2(){
    this.router.navigateByUrl('/collection');
  }

  onClick3(){
    this.router.navigateByUrl('/evaluate');
  }
  onClick4(){
    this.router.navigateByUrl('/address');
  }
  onClick5(){
    this.router.navigateByUrl('/setting');
  }
}
