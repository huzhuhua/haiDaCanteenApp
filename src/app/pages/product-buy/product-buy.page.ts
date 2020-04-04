import { Component, OnInit, Directive, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

  // 导入产品详情服务,路由
import { ProductDetailsService } from '../../services/product-details.service';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';
@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.page.html',
  styleUrls: ['./product-buy.page.scss'],
})
// @Directive({
//   selector: 'echart'
// })
export class ProductBuyPage implements OnInit {
      // 定义产品id,产品对象
      // @ViewChild('echart',{static:true}) echart: ElementRef
  public productid = '1';

  public products = {
    holdDay: undefined
  };
  constructor(
    private storageService:StorageService,
   private nav:NavController, 
    private activateRoute: ActivatedRoute,
    private searchService:SearchService
    ) {
    this.productid = this.activateRoute.snapshot.queryParamMap.get('id');
    console.log(this.productid);
  }
  ngOnInit() {
    this.getdetail(this.productid);
  }

  // 请求该id的产品数据
  async getdetail(productId: string) {
   
   const q = await this.searchService.searchId(productId);
   this.products =q[0]
   console.log(this.products)
      }

    // 加入购物车跳转事件
  async buy() {
    let a = await this.storageService.get(StorageKey.SHOPPINGCAR)
    if (a == undefined) {
      a = []
    }
    a.unshift(this.productid)
    console.log(this.productid)
    this.storageService.add(StorageKey.SHOPPINGCAR, a)
this.nav.navigateBack('tabs/tab2')
    // this.router.navigateByUrl('product-pay');
  }
  // 获取首页传过来的id
}