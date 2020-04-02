
import {LaunchService} from '..//services/launch.service';
import {Router} from '@angular/router';
import { MyProductService } from '../services/my-product.service';
import {Product} from '../model/product';
import {LifeHook} from '../services/life-hook.service';
import {  IonContent } from '@ionic/angular';
import { Component, OnInit , ViewChild} from '@angular/core';
@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    @ViewChild(IonContent, name) content: IonContent;
    public amount;
    public balance;
    productList: any;
    constructor(private router: Router , private launchService: LaunchService, private myproductService: MyProductService) {

    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {

    }
// 查询已购函数
    async myproduct() {
        this.productList = await this.myproductService. myproduct();
        console.log(this.productList)
        this.amount = 0;
        this.balance = 0;
        for (let i = 0; i < this.productList.length; i++) {
           this.amount += this.productList[i].nowAmount * 1;
           this.balance += this.productList[i].income * 1;
       }
    //    console.log(this.income)
    }

    productDetail() {
        this.router.navigateByUrl('/product-details');
    }
    async onPageWillClose() {
        console.log('RegisterPage页面即将关闭，开始清除数据。。。');
    }

    async onPageWillEnter() {
        this.myproduct();
        // 接收发射过来的数据
        this.launchService.launchevent.subscribe((value: any) => {
            if (value === '重新查询产品列表') {
                // 这里就可以操作数据放置请求。
                this.myproduct();
            }
        });
        console.log('RegisterPage页面即将显示，开始初始化或刷新数据。。。');
    }
    
// 回到顶部
top() {
    this.content.scrollToTop(0);
  }
}
