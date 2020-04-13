import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.page.html',
  styleUrls: ['./evaluate.page.scss'],
})
export class EvaluatePage implements OnInit {
public list:any
  constructor(private searchService:SearchService) { }

  ngOnInit() {
    this.getEvaluate()
  }
//获取评价
async getEvaluate(){
 this.list =  await this.searchService.getEvaluate()
 console.log(this.list)
}
async onPageWillClose() {
      
  // this.productList = res.list;
  
  console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
 this.getEvaluate()
  console.log('RegisterPage页面即将进入，开始初始化数据。。。');

}
}
