import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { GetCodeService } from 'src/app/services/get-code.service';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';


@Component({
  selector: 'app-get-code',
  templateUrl: './get-code.component.html',
  styleUrls: ['./get-code.component.scss'],
})
export class GetCodeComponent implements OnInit {
 text ="获取验证码";
 canClick = false;
@Input()
mobile:string;
@Input()
countAmount = 60;

// @Output()
// outputEvent :EventEmitter<any>= new EventEmitter<any>();

timeInterval : any;
countAmountTmp :number;
  constructor(private getCodeService:GetCodeService,private storageService:StorageService) { }

  ngOnInit() {
    
  }
  //验证码返回给父组件
  // reCode (value:string) {
  //   this.outputEvent.emit(value)
  // }
   async getCode(){
    //  console.log("55")
    const code = await this.getCodeService.getCode(this.mobile);
    // await this.reCode(code);
     console.log(code)
    //  await this.getCodeService.getCode();
     this.countAmountTmp = this.countAmount;
    this.timeInterval = setInterval(() =>{
      this.canClick = true;
      this.text = this.countAmount + '秒后可以获取';
      this.countAmount--;
      if(this.countAmount ===0){
        clearInterval(this.timeInterval);
        this.countAmount = this.countAmountTmp;
         this.canClick=false;
        this.text = '获取验证码'

      }
    },1000) }
}
