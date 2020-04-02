import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  
  // 声明事件名
  public launchevent: any;

  constructor() {
    // 定义发射事件
    this.launchevent = new EventEmitter();
  }

}
