
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GetProductService } from '../services/get-product.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LifeHook } from '../services/life-hook.service';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { AppComponent } from '../../app/app.component';

// import { FormsModule , ReactiveFormsModule} from '@angular/formas';
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    @ViewChild(IonInfiniteScroll, name) infiniteScroll: IonInfiniteScroll;
    // 回顶部
    @ViewChild(IonContent, name) content: IonContent;

    @Input()
    tabFlag;
    // public productList :pageNumProduct;
    pageNum = 1;
    pageSize = 2;
    month: AbstractControl;
    rate: AbstractControl;
    selectForm: FormGroup;
    Tmonth = 3;
    Trate = 1;
    public hasMore = true;
    public productList = [];
    List = [];
    ngOnInit() {
        this.pageNum = 1;

        this.hasMore = true;

        this.get();
    }
    constructor(private fb: FormBuilder, private getProductService: GetProductService) {
        this.selectForm = this.fb.group(
            {
                month: new FormControl('', {
                    validators: []
                }),
                rate: [],
            },
        ),
            this.month = this.selectForm.controls.month,
            this.rate = this.selectForm.controls.rate,
            this.month.valueChanges.subscribe(
                (data: any) => {
                    const selectForm = this.selectForm.getRawValue();
                    console.log(selectForm)
                    this.product(selectForm);
                    // cd.detectChanges();
                    // 检查数据是否有变化，刷新页面
                }),
            this.rate.valueChanges.subscribe(
                (data: any) => {

                    const selectForm = this.selectForm.getRawValue();
                    console.log(selectForm)
                    this.product(selectForm);

                    // cd.detectChanges();
                    // 检查数据是否有变化，刷新页面
                });
    }
    //回到顶部
    top() {
        this.content.scrollToTop(0);
    }

    // 获取产品表,需修改list类型
    // async get() {
    //     this.List = await this.getProductService.get();
    //     this.productList = this.List;
    //     console.log(this.productList)
    //     for(let i=0;i<this.productList.length;i++){
    //         if(this.productList[i].holdDay== '-1'){
    //             console.log('1111')
    //          this.productList[i].holdDay = '无限'
    //         }
    //     }
    // }
    // 下拉刷新
    async doRefresh(event) {
        this.pageNum = 1;

        this.get();
        //         const response:pageNumProduct  = await this.productService.getToSeeProductList(this.pageNum,this.pageSize);
        //         const b= response.list
        //      this.productList=this.productList.splice(0,0);
        //      this.productList=this.productList.concat(b)
        // console.log(this.productList)
        //  this.productList.concat(b)
        //  this.toggleInfiniteScroll();

        this.hasMore = true;

        setTimeout(() => {


            event.target.complete();

        }, 2000);
    }

    // 切换
    toggleInfiniteScroll() {

        this.infiniteScroll.disabled = false;

    }
    //分页加载
    async ionInfinite(e) {

        this.pageNum += 1;

        // const response: pageNumProduct = await this.productService.getToSeeProductList(this.pageNum, this.pageSize);
        const response: any = await this.getProductService.get(this.pageNum, this.pageSize);

        const b = response.list;
        console.log(b)

        this.productList = this.productList.concat(b);
        this.List = this.productList;
        for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].holdDay == '-1') {

                this.productList[i].holdDay = '无限';
            }
        }
        // 判断下一页有没有数据
        // if (!response.hasNextpageNum) {
        if (b) {
            // e.target.disabled=true;

            this.hasMore = false;
        }
        //   e.target.disabled=true;
        e.target.complete(); // 请求完成数据以后告诉ion-infinite-scroll更新数据
    }

    //获取第一页
    async get() {
        console.log(this.pageNum);
        console.log(this.pageSize);
        const a = await this.getProductService.get(this.pageNum, this.pageSize);
        this.productList = a.list;
        this.List = this.productList;
        console.log(this.productList);

        // this.productList = res.list;
        // this.productList = res;

        for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].holdDay == '-1') {

                this.productList[i].holdDay = '无限';
            }
        }

    }



    async product(param: { month: string, rate: string }) {
        if (param.month == null) {
            param.month = "0";
        }
        if (param.rate == null) {
            param.rate = "0";
        }
        const a = [];
        // @ts-ignore
        const day = param.month * 30;
        for (let i = 0; i < this.List.length; i++) {
            if (day > 20000) {
                if (this.List[i].preorderType == 1 && this.List[i].rateReturn >= param.rate) {
                    a.push(this.List[i])
                }
            } else if (day > 2000 ) {
                if (this.List[i].holdDay == '无限' && this.List[i].rateReturn >= param.rate) {
                    a.push(this.List[i]);
                }
            }

            else {
                if(day ==0){
                    if(this.List[i].rateReturn >= param.rate){
                        a.push(this.List[i]);
                    }
                }else{
                    if (this.List[i].holdDay != '无限' && this.List[i].holdDay >= day && this.List[i].rateReturn >= param.rate) {
                        a.push(this.List[i]);
                    }
                }
              
            }
        }



        console.log(a)
        this.productList = a;
    }


    async onpageNumWillClose() {
        console.log('RegisterpageNum页面即将关闭，开始清除数据。。。');
    }

    async onpageNumWillEnter() {
        // this.get();

        this.month.setValue(0)
        this.rate.setValue(0)
        console.log('RegisterpageNum页面即将显示，开始初始化或刷新数据。。。');
    }

}
