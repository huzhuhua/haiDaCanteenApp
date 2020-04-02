import { Injectable } from '@angular/core';
import {IonRouterOutlet} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class RouterHandlerService {

  constructor() { }
  routerHandle(outlet: IonRouterOutlet) {
    console.log(outlet)
    outlet.activateEvents.subscribe((component: any) => {
      console.log(component)

      this.handleRouteEnter(component);
    });
    outlet.deactivateEvents.subscribe((component: any) => {
      console.log(component)
      this.handleRouteClose(component);
    });
  }

  private handleRouteEnter(component: any) {
    if (component.onPageWillEnter) {
      console.log('开始执行onPageWillEnter钩子   ' + new Date());
      component.onPageWillEnter();
      console.log('执行onPageWillEnter钩子完成   ' + new Date());
    }
  }

  private handleRouteClose(component: any) {
    if (component.onPageWillClose) {
      console.log('开始执行onPageWillClose钩子   ' + new Date());
      component.onPageWillClose();
      console.log('执行onPageWillClose钩子完成   ' + new Date());
    }
  }
}