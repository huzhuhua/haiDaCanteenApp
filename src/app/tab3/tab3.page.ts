

import {Router} from '@angular/router';

import {Product} from '../model/product';
import {LifeHook} from '../services/life-hook.service';
import {  IonContent } from '@ionic/angular';
import { Component, OnInit , ViewChild} from '@angular/core';
import { OrderService } from '../services/order.service';
@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    @ViewChild(IonContent, name) content: IonContent;
    public productList: any;
    constructor(private router: Router ,
        private orderService:OrderService,
        ) {

    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {

    }
    //获取全部订单
    async allOrder(){
        this.productList =await this.orderService.allOrder()
     await this.handle()
    }
    //处理菜品格式
async handle(){
    if(this.productList==null){
        this.productList=[]
    }
 
  for(let i=0;i<this.productList.length;i++){
    let list=[];
    let str = this.productList[i].allProducts
    list = str.split("-")  
    list.pop()
    for(let i=0;i<list.length;i++){
        let m = list[i].split(" ")
        let o ={
            name:"",
            money:""
        }
        o.name = m[0]
        o.money = m[1]
        list[i] = o;
    }
    console.log(list)
    this.productList[i].allProducts =list
  }
  console.log(this.productList)
  
  }
    async onPageWillClose() {

      
    
        console.log('RegisterPage页面即将关闭，开始清除数据。。。');
      }
    
      async onPageWillEnter() {
       await this.allOrder()

        console.log('RegisterPage页面即将进入，开始初始化数据。。。');
    
      }
}
