import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.page.html',
  styleUrls: ['./search-order.page.scss'],
})
export class SearchOrderPage implements OnInit {
  public productList: any;
  constructor(private orderService:OrderService) { }

  ngOnInit() {
  }
 //获取查询订单
 async searchOrder(){
  let input = <HTMLElement><unknown>document.getElementsByClassName("input");
  if(/^([+-]?)\d*\.?\d+$/.test(input[0].value)){
    this.productList =await this.orderService.searchOrderByOrderNumber(input[0].value)
  }else{
     this.productList =await this.orderService.searchOrderByName(input[0].value)
  }
 
 

console.log(this.productList)
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
    console.log(list)
    this.productList[i].allProducts =list
  }
  console.log(this.productList)
  
  }
}
