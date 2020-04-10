import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { NativeService } from 'src/app/services/native.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input()
  productList;
  
  constructor(
    private router:Router,
    private nativeService:NativeService,
    private searchService:SearchService) { }

  ngOnInit() {
  
  }
//退款
async refund(orderNumber:any){
const a= await this.searchService.refund(orderNumber)
if(a=="1"){
this.nativeService.showAlert("退款成功","确定",()=>{ 
  for(var i=0;i<this.productList.length;i++){
  if(this.productList[i].orderNumber==orderNumber){
    this.productList[i].status = "2"
  }
}})
}
}
//评价
async evaluate(orderNumber:any){
await this.nativeService.showPrompt("请输入您的评价",[{
         name: 'evaluate',
          type: 'text',
          value: '',
          placeholder: ''
}],
[
      {
        text: '取消',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: '确定',
        handler: (result) => {    //获取表单输入的值
         
          this.searchService.evaluate(result.evaluate,orderNumber)
          for(var i=0;i<this.productList.length;i++){
            if(this.productList[i].orderNumber==orderNumber){
              this.productList[i].evaluate = result.evaluate
            }
          }
        
        }
      }
    ])
}
}
