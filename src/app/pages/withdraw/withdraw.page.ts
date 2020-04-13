import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NativeService } from 'src/app/services/native.service';
import { RechargeService } from 'src/app/services/recharge.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

import { StorageKey } from 'src/app/storage.key';
import { StorageService } from 'src/app/services/storage.service';
import { MyCard } from 'src/app/model/myCard';
import { MyService } from 'src/app/services/my.service';
@Component({
    selector: 'app-withdraw',
    templateUrl: './withdraw.page.html',
    styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
    public balance:number;
    bankCardNum:AbstractControl;
    code1:string
    cardIds:any;
    money:AbstractControl;
    password:AbstractControl;
    withdrawForm: FormGroup;
    text:AbstractControl;
    selected:number;
    constructor(private myService:MyService, private storageService:StorageService, private nativeService:NativeService, private fb: FormBuilder,private router: Router, private httpService: HttpService) {
        this. withdrawForm = this.fb.group(
            {
                bankCardNum:new FormControl('',{
                    // validators:[Validators.required, Validators.pattern(new RegExp(/^([1-9]{1})(\d{14}|\d{18})$/))]
                    validators:[]
                } ) ,

                money: ['', [Validators.required, Validators.pattern('')]]
                ,
           password: ['', [Validators.required, Validators.pattern(''), Validators.pattern(new RegExp(/^\d{6}$/))]],
                text: new FormControl('', {
                    validators: []
                }),

            }
        )
        this.text = this. withdrawForm.controls.text;
        this.money = this. withdrawForm.controls.money;
        this. password = this. withdrawForm.controls. password;
        this.bankCardNum = this. withdrawForm.controls.bankCardNum;
        this.bankCardNum.valueChanges.subscribe((data: string) => {
            console.log(data)
            const six = data.substring(0, 6);
            let name="";
            let num='';
            const four = data.substring(data.length - 4, data.length);
            switch (six) {
                case '436742':
                    name = "中国建设银行";
                    num = four
                    break;
                case '552599':
                    name = "中国农业银行";
                    num = four
                    break;
                case '427030':
                    name = "中国工商银行";
                    num = four
                    break;
                case '622760':
                    name = "中国银行";
                    num = four
                    break;
                    case '622260':
                        name  = "交通银行";
                        num = four
                        break;
                    case '622188':
                        name  = "中国邮政储蓄银行";
                        num = four
                        break;
                    case '628202':
                        name  = "中国光大银行";
                        num = four
                        break;
                    case '622688':
                        name = "中信银行";
                        num = four
                        break;
                    case '622228':
                        name = "浦发银行";
                        num = four
                        break;
                    case '628258':
                        name = "中国民生银行";
                        num = four
                        break;
                    case '625191':
                        name = "恒丰银行";
                        num = four
                        break;
                    case '602969':
                        name = "北京银行";
                        num = four
                        break;
                    case '622892':
                        name = "上海银行";
                        num = four
                        break;

                default:
                    break;
            }

            this.text.setValue(name+num)

        });
    }

    ngOnInit() {
        // this.getValue(),
        this.getCardIds();
        this.getbalance()

    }

//下拉框
    async getCardIds(){

        // this.cardIds = await this.withdrawService.getCardId();
        console.log(this.cardIds);

        for(let i=0;i<this.cardIds.length; i++){
            const six = this.cardIds[i].bankCardNum.substring(0,6);
            console.log(six)
            const four = this.cardIds[i].bankCardNum.substring(this.cardIds[i].bankCardNum.length-4,this.cardIds[i].bankCardNum.length);
            console.log(four)
            switch (six) {
                case '436742':
                    this.cardIds[i].formatName = "中国建设银行";
                    this.cardIds[i].formatNum = four
                    break;
                case '552599':
                    this.cardIds[i].formatName = "中国农业银行";
                    this.cardIds[i].formatNum = four
                    break;
                case '427030':
                    this.cardIds[i].formatName = "中国工商银行";
                    this.cardIds[i].formatNum = four
                    break;
                case '622760':
                    this.cardIds[i].formatName = "中国银行";
                    this.cardIds[i].formatNum = four
                    break;
                    case '622260':
                        this.cardIds[i].formatName = "交通银行";
                        break;
                    case '622188':
                        this.cardIds[i].formatName = "中国邮政储蓄银行";
                        break;
                    case '628202':
                        this.cardIds[i].formatName = "中国光大银行";
                        break;
                    case '622688':
                        this.cardIds[i].formatName = "中信银行";
                        break;
                    case '622228':
                        this.cardIds[i].formatName = "浦发银行";
                        break;
                    case '628258':
                        this.cardIds[i].formatName = "中国民生银行";
                        break;
                    case '625191':
                        this.cardIds[i].formatName = "恒丰银行";
                        break;
                    case '602969':
                        this.cardIds[i].formatName = "北京银行";
                        break;
                    case '622892':
                        this.cardIds[i].formatName = "上海银行";

                default:
                    break;
            }
            console.log(this.cardIds[i])
            if(this.cardIds[i].isPrimaryCard == '1'){
                this.selected = this.cardIds[i].formatName+this.cardIds[i].formatNum  ;
                this.text.setValue(this.selected);
                this.bankCardNum.setValue(this.cardIds[i].bankCardNum)
            }


//  this.value = this.cardIds[0];
        }
        console.log(this.cardIds);
    }
//可提现余额
    async getbalance(){
        this.balance = 1

    }
//提现
    async withdraw() {
        const withdrawParam = this.withdrawForm.getRawValue();
        // const a = await this.withdrawService.withdraw(withdrawParam)
        let a="";
        if (a== "成功") {

            this.nativeService.showAlert('提现成功',  '确定', ()=>{this.router.navigateByUrl('tabs/tab4')},  '温馨提示')

        }
    }

    returnCode(code:string){
        this.code1 = code;
    }
}
