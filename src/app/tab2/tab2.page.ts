
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LifeHook } from '../services/life-hook.service';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { AppComponent } from '../../app/app.component';
import { StorageService } from '../services/storage.service';
import { StorageKey } from '../storage.key';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public productList: any;
  public flag = false;
  public allMoney = 0;
  public display = false;
  ngOnInit() {
    // this.storageService.remove(StorageKey.SHOPPINGCAR)
    this.getCard()
  }
  constructor(
    private router:Router,
    private productService: ProductService,
    private storageService: StorageService,
  ) {

  }
 
  //获取购物车商品
  async getCard() {

    const a = await this.storageService.get(StorageKey.SHOPPINGCAR)
console.log(a)
    this.productList = await this.productService.getCar(a)
    if (this.productList.length == "0") {
      this.display = false
    } else {
      this.display = true
    }
    for (let i = 0; i < this.productList.length; i++) {
      this.productList[i].flag = false
      this.productList[i].num = 1
    }
    console.log(this.productList)
  }
  //改变勾选状态
  async change(id: any) {
    let amount = 0;
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.productList[i].flag = !this.productList[i].flag
        if (this.productList[i].flag == false) {
          this.flag = false
        }
      }
      if (this.productList[i].flag == false) {
        amount += 1;
      }

    }
    if (amount == 0) {
      this.flag = true;
    }
    await this.nowMoney()
  }

  //数字减1
  async reduce(id: any) {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        if (this.productList[i].num != 0) {
          this.productList[i].num -= 1
        }


      }

    }
    await this.nowMoney()

  }
  //数字加1
  async add(id: any) {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.productList[i].num += 1
      }
    }
    await this.nowMoney()
  }
  //全选
  async allChoice() {
    if (this.flag == true) {
      for (let i = 0; i < this.productList.length; i++) {
        this.productList[i].flag = true

      }
    } else {
      for (let i = 0; i < this.productList.length; i++) {
        this.productList[i].flag = false

      }
    }
    await this.nowMoney()
  }
  //计算总金额
  async nowMoney() {
    this.allMoney = 0;
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].flag == true) {

        const m = this.productList[i].money * 1

        this.allMoney = m * this.productList[i].num + this.allMoney

      }

    }

  }
  //结算
  async submit(){
  console.log(this.productList)
  await this.storageService.add(StorageKey.PAY,this.productList)
    await this.router.navigate(["/product-pay"],{queryParams:{allMoney:this.allMoney}})
  }
  async onPageWillClose() {

    // this.productList = res.list;

    console.log('RegisterPage页面即将关闭，开始清除数据。。。');
  }

  async onPageWillEnter() {
    await this.getCard()
    console.log('RegisterPage页面即将进入，开始初始化数据。。。');

  }


}
