import { Component, OnInit, Input } from '@angular/core';
import { ProductList } from '../../model/product-list';
import { GetProductService } from 'src/app/services/get-product.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';
import { timestamp } from 'rxjs/operators';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {

  public productList: any;
  token: any;
  
  constructor(
    private productService:ProductService,
    private getProductService: GetProductService, 
    private router: Router,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {

  await this.getAllLove()

  }
//获取收藏菜品
async getAllLove(){
  this.productList = await this.productService.allLove();
for(let i=0;i<this.productList.length;i++){
  this.productList[i].starWidth = this.productList[i].star/5*70.47
  this.productList[i].loveStatus = true
}
}
async onPageWillClose() {
      
  // this.productList = res.list;
  
  console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
   await this.getAllLove()
  console.log('RegisterPage页面即将进入，开始初始化数据。。。');

}
}
