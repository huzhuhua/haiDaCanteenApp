import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// 导入产品详情服务,路由
import {ProductDetailsService} from '../../services/product-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.page.html',
    styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
    // 定义产品id,产品对象
    public name: string;
    public info: string;
    public rate: string;
    public income: string;
    public  endTime: string;
    public products: object = {};
    public amount: string;
    public yesterdayIncome: string;
    public  id: string;
    public productType
    // name:item.financeProduct.name,info:item.financeProduct.description,rate:item.financeProduct.rateReturn,income:item.financeProduct.income,endTime:item.endTime
    constructor(private router: Router, private productDetailsService: ProductDetailsService, private activateRoute: ActivatedRoute) {
        console.log(this.activateRoute.snapshot.queryParamMap)
        this.name = this.activateRoute.snapshot.queryParamMap.get('name');
        this.info = this.activateRoute.snapshot.queryParamMap.get('info');
        this.rate = this.activateRoute.snapshot.queryParamMap.get('rate');
        this.income = this.activateRoute.snapshot.queryParamMap.get('income');
        this.productType = this.activateRoute.snapshot.queryParamMap.get('productType');
        console.log(this.productType)
        this.endTime = this.activateRoute.snapshot.queryParamMap.get('endTime');
        this.yesterdayIncome = this.activateRoute.snapshot.queryParamMap.get('yesterdayIncome');
        this.amount = this.activateRoute.snapshot.queryParamMap.get('amount');
        this.id = this.activateRoute.snapshot.queryParamMap.get('id');
        this.endTime = this.activateRoute.snapshot.queryParamMap.get('endTime');
        console.log(this.endTime)
        // if(b == null){
        //     this.endTime="
        // }else{
        //     this.endTime = b;
        // }
    }
    ngOnInit() {
    //
    }
//曲线图
chartOption = {
    // title: {
    //     text: '堆叠区域图'
    // },
    tooltip : {
        trigger: 'axis'
    },
//     legend:{
//       data: ['收益率'],
//       width:10,
//       height:10
//   },
 
    grid: {
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLabel: {
              show: true,
              textStyle: {
                  color: '#e1e1ea'
              }
          },
          splitLine: {//分割线配置
            show:true,
            lineStyle: {
                color: "rgba(219,225,255,1)",
         }},

            axisLine:{
             
    
              lineStyle:{
                  color:'#e1e1ea',
                  width:1,//这里是为了突出显示加上的
              }
          } ,

            data : ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
        }
    ],
    yAxis : [
        {
        //   axisLabel: {
        //     show: true,
        //     textStyle: {
        //         color: '#666'
        //     }
        // },
        splitLine: {//分割线配置
          show:true,
          lineStyle: {
              color: "rgba(219,225,255,1)",
       }},
          axisLine:{
            lineStyle:{
                color:'#e1e1ea',
                width:1,//这里是为了突出显示加上的
            }
        } ,
            type : 'value'
        }
    ],
    series : [
       
        {
            name: '收益率',
            type: 'line',
            smooth: true,
          
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
              normal: {
                  color: '#fff',
                  maskColor: 'rgba(255, 255, 44, 0.8)',
                  lineStyle:{
                    color: '#9966ff',
                      width:3//设置线条粗细
                  }
              }},
            areaStyle: {normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
  
}
// 请求该id的产品数据

    // async getdetail(productId: string) {
    //     this.products = await this.productDetailsService.get(productId);
    //     console.log(this.products);
    // }

    // console.log(this.products);
}


