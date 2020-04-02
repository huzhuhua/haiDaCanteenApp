
import {  IonContent } from '@ionic/angular';
// 导入模块，服务
import {Record} from '../../model/record';
import {RecordService} from '../../services/record.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {
  @ViewChild(IonContent,name) content:IonContent;
    // 声明记录数组 Record：model模块
    recordList: any ;
    selectForm: FormGroup;
    pays: any;
    income: any;

    // public recordList: object = {};
    // 声明服务
  constructor(private recordService: RecordService, ) { }

  async ngOnInit() {

    // 获取请求的数据
    this.recordList = await this.recordService.getrecord();

    this.pays = 0;
    this.income = 0;
    for (let i = 0; i < this.recordList.length; i++) {

      // 总支出，总收益
      const kinds = this.recordList[i].orderType;
      if(kinds == '申购' && kinds == '提现'){
        this.pays += this.recordList[i].amount * 1;
      }else{
      
      this.income += this.recordList[i].amount * 1;}
  }

    // 遍历类型。
    // @ts-ignore
    this.recordList.forEach((value) => {
        const kind = value.orderType;
        // console.log(kind);
        value.color = this.changecolor(kind);
        // console.log(value.color);
    });
    // console.log(this.recordLlist);

  }


//   定义方法设定分类对应的颜色
  changecolor(kind) {
    switch (kind) {
        case '充值':
            return 'primary';
            break;
        case '提现':
            return 'danger';
            break;

        case '赎回':
            return 'medium';
            break;
        case '申购':
            return 'success';
            break;
        default:
            break;
        }
    }

    top(){
      this.content.scrollToTop(0);  
    }
}
