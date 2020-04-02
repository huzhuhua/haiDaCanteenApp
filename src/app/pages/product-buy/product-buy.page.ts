import { Component, OnInit, Directive, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

  // 导入产品详情服务,路由
import { ProductDetailsService } from '../../services/product-details.service';
import { ActivatedRoute } from '@angular/router';
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
  public data1= [820, 932, 901, 934, 1290, 1330, 1320]
  public products = {
    holdDay: undefined
  };
  constructor(private el: ElementRef, private router: Router, private productDetailsService: ProductDetailsService, private activateRoute: ActivatedRoute ) {
    this.productid = this.activateRoute.snapshot.queryParamMap.get('id');
    console.log(this.productid);
  }

  ngOnInit() {

      // // 获取api内id
      // this.activateRoute.params.subscribe((data) => {
      //   // console.log(data);
      //   this.productId = data.id;
      // });

    this.getdetail(this.productid);
    

  }

  // 请求该id的产品数据
  async getdetail(productId: string) {
    this.products = await this.productDetailsService.get(productId);
   
    
     
    console.log(this.data1)
    if(this.products.holdDay == '-1'){
 this.products.holdDay = '无限';
    }
      
      }

 //请求曲线图数据
 async graph(productId: string){
  const b = await this.productDetailsService.get2(productId)
  for(let i=0;i<b.length;i++){
   
    
    this.data1[i]=JSON.parse( b[i].rateReturn)
}

this.chartOption.series[0].data=this.data1;
}



 
  
    // 买入跳转事件
  buyPay() {
    this.router.navigateByUrl('product-pay');
  }
  // 获取首页传过来的id



//曲线图
  chartOption = {
    // title: {
    //     text: '堆叠区域图'
    // },
    tooltip : {
        trigger: 'axis'
    },
  //   legend:{
  //     data: ['收益率'],
  //     width:10,
  //     height:10
  // },
    // legend: {
    //     data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    // },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
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
            data:[],
            // const a = [820, 932, 901, 934, 1290, 1330, 1320],
            // data: [820, 932, 901, 934, 1290, 1330, 1320]
           
        }
    ]
  
}

}