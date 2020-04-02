import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NativeService} from 'src/app/services/native.service';
import {RechargeService} from 'src/app/services/recharge.service';
import {Router} from '@angular/router';
import {HttpService} from 'src/app/services/http/http.service';
import {StorageKey} from 'src/app/storage.key';
import {StorageService} from 'src/app/services/storage.service';
import {BlankCard} from "../../model/blank-card";
import {MyCard} from 'src/app/model/myCard';
import { BindCard } from 'src/app/model/bind-card';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
    selector: 'app-recharge',
    templateUrl: './recharge.page.html',
    styleUrls: ['./recharge.page.scss'],
})
export class RechargePage implements OnInit {
    bankCardNum: AbstractControl;
    public limit:any;
    // cardIds: BindCard;
    cardIds:any;
    text: AbstractControl;
    money: AbstractControl;
    password: AbstractControl;
    rechargeForm: FormGroup;
    value: any;
    code1: any;
    true: boolean = true;
    selected: number;
    banks: Array<{ bankName: string, 'bankSignal': string }> = [

        {bankName: '中国建设银行', bankSignal: '4367421'},
        {bankName: '中国农业银行', bankSignal: '552559'},
        {bankName: '中国工商银行', bankSignal: '427030'},
        // {bankName: '交通银行', bankSignal: '012344'},
        {bankName: '中国银行', bankSignal: '622760'},
        // {bankName: '中信银行', bankSignal: '012346'},

    ];

    constructor(private storageService: StorageService, private nativeService: NativeService, private fb: FormBuilder, private rechargeService: RechargeService, private router: Router, private httpService: HttpService) {
        this.rechargeForm = this.fb.group(
            {
                bankCardNum: new FormControl('', {
                    // validators: [Validators.required, Validators.pattern(new RegExp(/^([1-9]{1})(\d{14}|\d{18})$/))]
                    validators: []
                }),

                money: ['', [Validators.required, Validators.pattern('')]]
                ,
                password: ['', [Validators.required, Validators.pattern(''),  Validators.pattern(new RegExp(/^\d{6}$/))]],
                text: new FormControl('', {
                    validators: []
                }),
            }
        )
        this.text = this.rechargeForm.controls.text;

        this.money = this.rechargeForm.controls.money;
        this. password = this.rechargeForm.controls. password;
        this.bankCardNum = this.rechargeForm.controls.bankCardNum;
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

            // cd.detectChanges();
            //检查数据是否有变化，刷新页面


        });
    }

    ngOnInit() {
        // this.getValue(),
        this.getCardIds()

        // this.limit = 
    }

//下拉框,获取银行卡列表
    async getCardIds() {
        

console.log(this.bankCardNum.value)

        this.cardIds = await this.rechargeService.getCardId()
      
        console.log(this.cardIds);
        console.log(this.cardIds[0].bankCardNum);
        for (let i = 0; i < this.cardIds.length; i++) {
            const six = this.cardIds[i].bankCardNum.substring(0, 6);
            console.log(six)
            const four = this.cardIds[i].bankCardNum.substring(this.cardIds[i].bankCardNum.length - 4, this.cardIds[i].bankCardNum.length);
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
            if (this.cardIds[i].isPrimaryCard == '1') {
                
                this.selected = this.cardIds[i].formatName + this.cardIds[i].formatNum;
                // this.selec.setValue(this.selected)
                this.text.setValue(this.selected)
                this.bankCardNum.setValue(this.cardIds[i].bankCardNum)
                console.log(this.bankCardNum.value)
                this.limit = await this.rechargeService.getLimit(this.bankCardNum.value)
                console.log(this.limit)
            }


            //  this.value = this.cardIds[0];
        }
        console.log(this.cardIds);
    }


    async recharge() {
        const rechargeParam = this.rechargeForm.getRawValue();
        const a =   await this.rechargeService.recharge(rechargeParam)
      console.log(a)
        if (a == "成功") {

            this.nativeService.showAlert('充值成功', '确定', () => {
                this.router.navigateByUrl('tabs/tab4')
            }, '温馨提示')

        }

    }

    returnCode(code: string) {
        this.code1 = code;
    }
}

