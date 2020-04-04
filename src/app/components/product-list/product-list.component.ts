import { Component, OnInit, Input } from '@angular/core';
import { ProductList } from '../../model/product-list';
import { GetProductService } from 'src/app/services/get-product.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
   
  @Input()
  productList;
  
  constructor(
    private productService:ProductService,
    private getProductService: GetProductService, 
    private router: Router) {

  }
  ngOnInit() {
   
  }

  productBuy() {
    this.router.navigateByUrl('product-buy');
  }
  navigate(id:string){
    console.log(id)
    this.router.navigate(['/product-buy'],{queryParams: {id:id}})
  }
  
//收藏产品功能
async addLove(e,productId:any){
  e.stopPropagation();
  console.log(this.productList)
   console.log(productId)
   for(let i=0;i<this.productList.length;i++){
     if(productId==this.productList[i].id ){
       if(this.productList[i].loveStatus==false){
        await this.productService.removeLove(productId);
        this.productList[i].loveStatus == false
       }else {
        await this.productService.addLove(productId);
        this.productList[i].loveStatus == true
        // this.ngOnInit()
       }
     
      //  this.ngOnInit()
     }
   }

}
}
