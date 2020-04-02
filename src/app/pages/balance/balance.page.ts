import { Component, OnInit } from '@angular/core';

// 引入组件
import {Balance} from '../../model/balance';
import {BalanceService} from '../../services/balance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  
  // 声明数组：调用model
  // balanceList: Array<Balance> = [];
    public myINfo: object = {};

  constructor(private balanceService: BalanceService,private router: Router,) { }



    // 调用数据：将服务中请求到的数据返回给数组
   async ngOnInit() {

    this.myINfo = await this.balanceService.getbalance();
    // console.log(this.cardList);
    
  }

}


