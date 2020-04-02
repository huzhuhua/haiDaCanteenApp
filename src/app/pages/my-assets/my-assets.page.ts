import { Component, OnInit , Directive, ElementRef,ViewChild} from '@angular/core';


@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.page.html',
  styleUrls: ['./my-assets.page.scss'],
})
@Directive({
  selector: 'echart'
})
export class MyAssetsPage implements OnInit {
 
 
  constructor(
   ) {}
 
  
 
  ngOnInit() {
   //设置饼状图数据
    this.pieChart.series[0].data=  [  {value: 58, name: '我的理财'},
    {value: 42, name: '我的余额'},]
    // this.getEchart();
  }
 
  
 
  //表格配置项
  public pieChart = {
    color: [ '#F1419D','#4DEFCF'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  // legend: {
  //     orient: 'vertical',
  //     left: 10,
  //     data: ['我的余额', '我的理财']
  // },
  series: [
      {
          name: '资金来源',
          type: 'pie',
          radius: ['70%', '85%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data: [
     
          ]
      }
  ]}

}
