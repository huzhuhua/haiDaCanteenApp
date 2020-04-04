import { Component , OnInit, ViewChild} from '@angular/core';
// import {IonTabs} from '@ionic/angular';
import {RouterHandlerService} from "../services/router-handler.service";
import { IonTabs, ModalController } from '@ionic/angular';
import { Router ,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage  implements OnInit {
  @ViewChild(IonTabs, {static: true}) // viewChild根据你指定的标签类型或"ID"来帮你对应的HTML元素
  tabs: IonTabs;
  data: any;
  flag = 'tab1';
  currentUrl = '';
  defaultSelectedTabName = 'tab1';
  tabFlag = '';
  tabsButtons: Array<{ url: string, iconName: string, tabName: string, label: string, iconSrc: string, iconSrc2: string }> = [
      {
          url: '/tabs/tab1',
          iconName: 'tab1',
          tabName: 'tab1',
          label: '首页',
          iconSrc: 'assets/HdImage/首页.svg',
          iconSrc2: 'assets/HdImage/首页亮.svg'
      },
      {
        url: '/tabs/tab2',
        iconName: 'tab2',
        tabName: 'tab2',
        label: '购物车',
        iconSrc: 'assets/HdImage/购物车.svg',
        iconSrc2: 'assets/HdImage/购物车亮.svg'
    },
      {
          url: '/tabs/tab3',
          iconName: 'tab3',
          tabName: 'tab3',
          label: '订单',
          iconSrc: 'assets/HdImage/订单.svg',
          iconSrc2: 'assets/HdImage/订单亮.svg'
      },  {
          url: '/tabs/tab4',
          iconName: 'tab4',
          tabName: 'tab4',
          label: '我的',
          iconSrc: 'assets/HdImage/我的.svg',
          iconSrc2: 'assets/HdImage/我的亮.svg'
      }];


  constructor( private modalCtrl: ModalController,private router:Router, private routerHandlerService: RouterHandlerService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          this.currentUrl = event.urlAfterRedirects;
          for (const tab of this.tabsButtons) {
              if (tab.url === event.urlAfterRedirects) {
                  this.defaultSelectedTabName = tab.tabName;
              }
          }
      }
  });
  }


  





  ngOnInit() {
    console.log(this.tabs)
    console.log(this.tabs)
    console.log(this.tabs.outlet)
    setTimeout(() =>{
      this.routerHandlerService.routerHandle(this.tabs.outlet);
    }
     
  ,500)
   
  }

  change(event) {
    this.tabFlag = event.detail.tab;
    console.log(event.detail.tab)
  }

}

