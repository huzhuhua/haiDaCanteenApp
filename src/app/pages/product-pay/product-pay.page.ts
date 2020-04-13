import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// 导入依赖
import { NativeService } from 'src/app/services/native.service';
import { ProductPayService } from 'src/app/services/product-pay.service';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';
import { SearchService } from 'src/app/services/search.service';
import { NavController } from '@ionic/angular';


@Component({
    selector: 'app-product-pay',
    templateUrl: './product-pay.page.html',
    styleUrls: ['./product-pay.page.scss'],
})
export class ProductPayPage implements OnInit {
    public productList: any;
    public allMoney: any;
    public nowMoney: any;
    public addressList: any;
    public mainAddress: any = [];
    public timeText: any = "送达时间";
    public time: any;
    public toolNum:any="1";
    constructor(private activateRoute: ActivatedRoute,
        private nav:NavController,
        private searchService:SearchService,
        private storageService:StorageService,
        private productpayservice: ProductPayService,
        private router: Router,
        private addressService: AddressService,
        private nativeService: NativeService) {
    
        this.allMoney = this.activateRoute.snapshot.queryParamMap.get("allMoney")
        this.nowMoney = this.allMoney * 0.9
        console.log(this.allMoney)
    }
    ngOnInit() {
        const a = new Date();
        const b = a.getHours();
        console.log(a)
     console.log(a.getFullYear())
     console.log(a.getMonth())
     console.log(a.getDate())
        this.time = this.formatTime(a);

        this.getAddress()

      
       
        // this.productInfo.productId = this.pId;
    }
    //格式化时间并且时间加15分钟
    formatTime(time: any) {
        let c = time.getHours();
        // let c = 3;
        let d = time.getMinutes() + 15
        if (time.getMinutes() + 15 >= 60) {
            c += 1;
            d -= 60;
            if(d<10){
     d = "0" + d
            }
            if(c<10){
                c = "0" + c
            }
        }


        return c + ":" + d
    }
    //获取默认地址
    async getAddress() {
       
        this.mainAddress = []
        this.addressList = await this.addressService.findAddress()
        console.log(this.addressList)
        let arr;
        for (let i = 0; i < this.addressList.length; i++) {

            if (this.addressList[i].isPrimary == "1") {
                this.mainAddress.push(this.addressList[i])
            }
        }
        // this.mainAddress = arr[0];
        console.log(this.mainAddress)
    }
//餐具份数
async tool(){
   
    this.nativeService.presentActionSheet("选择餐具", [ 
        {
            text: "不需要餐具" ,
            role: '',
            icon: 'restaurant-outline',
            handler: () => {
                this.toolNum = 0 ;
            }
        },
        {
        text: "1份" ,
        role: '',
        icon: 'restaurant-outline',
        handler: () => {
            this.toolNum = 1 ;
        }
    },
    {
        text: "2份",
        role: '',
        icon: 'restaurant-outline',
        handler: () => {
            this.toolNum = 2 ;
        }
    },
    {
        text: "3份" ,
        role: '',
        icon: 'restaurant-outline',
        handler: () => {
            this.toolNum = 3 ;
        }
    },
])
}
    //选择收货时间
    async choiceTime() {
        let list = [];
        const a = new Date();
      
        let b = a.getHours();
        let c = a.getMinutes() +15
        let d="";
        for (b; b < 24; c += 15) {
            if (c > 60) {
                b++
                c = c % 60 ;
                // if(c<10){
                //     c = "0" +c 
                //     // c=Number("0" +c )
                // }
            }
            if(c<10){
                const str = b + ":" + " 0"+c
            }
            const str = b + ":" + c

            list.push(
                {
                    text: str,
                    role: '',
                    icon: 'time',
                    handler: () => {
                        this.time = str
                    }
                }
            )
        }
    
 

        this.nativeService.presentActionSheet("选择预定送达时间", list)
    }
//确认支付
async submit(){
    let input = <HTMLElement><unknown>document.getElementsByClassName("remark");
    let list=await this.storageService.get(StorageKey.PAY)
    let arr=[];
    let str="";
    for(let i=0;i<list.length;i++){
       str += list[i].id+" "+list[i].name +" "+ list[i].num +" "+list[i].money*list[i].num +"-"

    }
    arr.push(str)
   let trueAdd = this.mainAddress[0].name+"-"+this.mainAddress[0].addr+this.mainAddress[0].Tmobile
   //格式化时间
   const da = new Date()
    const y = da.getFullYear()
    const m = da.getMonth()+1
    const d = da.getDate()
    let trueTime = y+"-"+m + "-" + d + " " + this.time
    arr.push(trueTime) 

    arr.push(trueAdd) 
    arr.push(this.toolNum)
    arr.push(input[0].value)
    arr.push(this.nowMoney)
    console.log(arr)  ;
    const a = await this.searchService.pay(arr)
    if(a){
        this.storageService.remove(StorageKey.PAY)
        this.storageService.remove(StorageKey.SHOPPINGCAR)
        this.nativeService.showAlert("支付成功","确定",()=>{
            this.nav.navigateForward("tabs/tab3")
        })
    }
    console.log(a)
    // console.log(arr)

}
async onPageWillClose() {

    console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
    console.log("即将进入product-pay")
    this.getAddress()
}

}
