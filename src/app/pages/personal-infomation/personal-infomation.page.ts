import { Component, OnInit } from '@angular/core';
import { BlankCardService } from 'src/app/services/blank-card.service';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';
import { MyService } from 'src/app/services/my.service';
import { ChooseImgService } from 'src/app/services/choose-img.service';
import { CameraService } from 'src/app/services/camera.service';
import { NativeService } from 'src/app/services/native.service';
import { FileTransferService } from 'src/app/services/file-transfer.service';
import { HttpService } from 'src/app/services/http/http.service';
import { URI } from 'src/app/uri';

@Component({
  selector: 'app-personal-infomation',
  templateUrl: './personal-infomation.page.html',
  styleUrls: ['./personal-infomation.page.scss'],
})
export class PersonalInfomationPage implements OnInit {
  public url :string = "../../assets/hdImages/头像 icon.png"
  // 声明数组：调用model
  public myInfo: any={
    name:"",
    mobile:"",
    headPortrait:""
  };
  public name:string;
  public mobile:string;
   public text:string;
  constructor(
    private httpService:HttpService,
    private chooseImg:ChooseImgService,
    private camera:CameraService,
    private nativeService:NativeService,
    private storage:StorageService,
    private myService:MyService,
    private router: Router, 
    private fileTransfer:FileTransferService,
    public actionSheetController: ActionSheetController,
    
  ) { }

async   ngOnInit() {
   await this.get()
}
//获取个人信息
async get(){
  const a = await this.myService.getmy();
  console.log(a)
  this.myInfo =a[0]

  console.log(this.myInfo)
  if(this.myInfo.headPortrait != null){
  this.url = this.myInfo.headPortrait
}
this.name = this.myInfo.name;
this.mobile = this.myInfo.mobile
}
 // 添加上拉菜单
 //上传图片
 async upload() {
  this.nativeService.presentActionSheet('上传头像', [{
    text: '拍照上传', icon: 'aperture-outline', handler: () => {
      let imgUrl: any = this.camera.takePhoto();       
      let a = imgUrl.then((data) => {        
        if (data) {
           console.log(data)
           let a=  this.fileTransfer.upload(data,'http://qqahl.com:3000/headTranser') ;
           console.log(a)
   //         const data1=data[0];
   //         const a=   this.httpService.post(URI.upload, {file: data1 })
           a.then((data)=>{
   // this.url = data
   const r = data.response
   const m = JSON.parse(r)
 this.url = m.data.path
 this.myService.modifyHead(this.url)
             console.log(m.data.path)
            })
        } else {
          console.log('9999')
        }
      })
    }
  }, {
    text: '从文件夹选择', icon: 'images-outline', handler: () => {
      let imgUrl: any = this.chooseImg.chooseImg(1); let a = imgUrl.then((data) => {
       
        // this.base64.encodeFile(imgUrl).then((base64File: string) => {
        //   console.log(base64File);
        // }, (err) => {
        //   console.log(err);
        // });
         

       
        if (data) {
          console.log(data)
          
          // let m=  this.fileTransfer.upload(data[0],'https://imgbb.com/') ;
   let a=  this.fileTransfer.upload(data[0],'http://qqahl.com:3000/headTranser') ;
          console.log(a)
  //         const data1=data[0];
  //         const a=   this.httpService.post(URI.upload, {file: data1 })
          a.then((data)=>{
  // this.url = data
  const r = data.response
  const m = JSON.parse(r)
this.url = m.data.path
this.myService.modifyHead(this.url)
            console.log(m.data.path)
          })
          console.log(a)
          
        }
         else {
          console.log('9999')
        }
      })
      console.log('从文件夹上传')
    }
  }, {
    text: '取消',
    icon: 'close',
    role: 'cancel',
    handler: () => {
      console.log('Cancel clicked');
    }
  }])

}
//修改姓名
async modifyName(){
this.nativeService.showPrompt("请输入姓名",[
      {
        name: 'name',
        type: 'text',
        value: '',
        placeholder: '请输入要修改的名字'
      }],[
            {
              text: '取消',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: '确定修改',
              handler: (result) => {    //获取表单输入的值
                console.log(result.name);
                this.myService.modifyName(result.name)
               this.get()
              }
            }
          ])
}
async onPageWillEnter() {
   
  await this.get()
  // this.earnings = await this.myService.getEarnings();
  // if(this.earnings == undifine){

  // }
  // console.log(this.cardList);
  console.log('RegisterPage页面即将显示，开始初始化或刷新数据。。。');
}
  
}