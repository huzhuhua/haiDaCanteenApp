
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LifeHook } from '../services/life-hook.service';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { AppComponent } from '../../app/app.component';
import { StorageService } from '../services/storage.service';
import { StorageKey } from '../storage.key';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public productList:any;

    ngOnInit() {
      
    }
    constructor( 
        private productService:ProductService,
        private storageService:StorageService,
      ) {
    
    }
  //获取购物车商品
async getCard(){
    const a = await this.storageService.get(StorageKey.SHOPPINGCAR)
     this.productList = await this.productService.getCar(a)
     for(let i=0;i<this.productList.length;i++){
         this.productList[i].flag = false
     }
    console.log(this.productList)
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
