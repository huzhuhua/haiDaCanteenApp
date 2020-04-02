import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, IonContent} from '@ionic/angular';
import {GetProductsService} from '../services/get-products.service';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {StorageService} from '../services/storage.service';
import {NativeService} from '../services/native.service';
import {StorageKey} from '../storage.key';
import {ProductService} from '../services/product.service';
import {NavController} from '@ionic/angular';
import {StatusService} from '../services/status.service';
import {IonSlides} from '@ionic/angular';
import {LifeHook} from '../services/life-hook.service';
import {PageProduct} from '../model/pageProduct';
import {ElementRef} from '@angular/core';
import { FinanceProduct } from '../model/financeProduct';
import { CryptoService } from '../services/crypto.service';
import {Geolocation} from "@ionic-native/geolocation/ngx"
// import { Geolocation } from '@ionic-native/geolocation'
declare var BMap;
declare var BMapLib;
@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    map: any;

  myGeo: any;

  myIcon: any;
  public address:any;
@ViewChild('map',name) map_container: ElementRef;
    // @ViewChild(IonInfiniteScroll,{static:true}) infiniteScroll: IonInfiniteScroll;
    page = 0;
    num = 4;
    public hasMore = true;
    public value = false;
    userInfo: any;
    // infinite:any;
    token: any;
    
    public sliders:any;
    public productList: any;
    public a: any;
    test = [];
    url: string = "../../../assets/images//Success.svg";
    flag = 'true';
    // @ts-ignore

    @ViewChild('slider')
    slider: IonSlides;
    @ViewChild(IonInfiniteScroll, name) infiniteScroll: IonInfiniteScroll;
    // 回顶部
    @ViewChild(IonContent, name) content: IonContent;
    // sliders = {
    //       effect: 'flip',
    //       autoplay: {
    //           delar: 2000,
    //       },
    //       //  initialSlide:0,
    //       //  pager:true,
    //       loop: true,
    //       speed: 100
    //   };
// 界面重新进入时，轮播图自动播放
    ionViewWillEnter() {

        this.slider.startAutoplay();

    }

    // 退出界面时，轮播图停止
    ionViewWillLeave() {
        this.slider.stopAutoplay();
    }


    // tslint:disable-next-line:max-line-length
    constructor(
       
        private geolocation: Geolocation,
        private crypto:CryptoService, 
        private el: ElementRef, public nav: NavController, private statusService: StatusService, private nativeService: NativeService, private storageService: StorageService, private router: Router, private productService: ProductService, private getProductsService: GetProductsService) {

    }
    async ads(){
       await  this.router.navigateByUrl("address") 
    }
    async ngOnInit() {
        // this.myIcon = new BMap.Icon("../../assets//HdImage/位置.svg", new BMap.Size(32, 32));
        // this.userInfo = await this.storageService.get(StorageKey.USER_INFO);
        this.token = await this.storageService.get(StorageKey.TOKEN);
      
        this.page = 1;
      
        this.hasMore = true;

       
        await this.getSlider();
        await this.getRecommendProduct(this.page,this.num);

        // this.geolocation.getCurrentPosition().then((resp) => {
        //     // resp.coords.latitude
        //     console.log(resp)
        //     // resp.coords.longitude
        //    }).catch((error) => {
        //      console.log('Error getting location', error);
        //    });
           
        //    let watch = this.geolocation.watchPosition();
        //    watch.subscribe((data) => {
        //        console.log(data)
        //     // data can be a set of coordinates, or an error (if an error occurred).
        //     // data.coords.latitude
        //     // data.coords.longitude
        //    });
    //     this.map = new BMap.Map("map_container");
    
    //     this.map.centerAndZoom('上海', 13);
    
    //     this.map.enableScrollWheelZoom(true);
    //  // 创建地理编码实例, 并配置参数获取乡镇级数据
    // //  var myGeo = new BMap.Geocoder({extensions_town: true});   
    //     this.myGeo = new BMap.Geocoder();
    
    //     var geolocationControl = new BMap.GeolocationControl();
    
    //     this.map.addControl(geolocationControl);
    
    //     this.getLocation();
          
           
          
      

    }
   
    ionViewDidLoad() {

        //Amin: !Important:map_container shoud be called here, it can't be inited in constructor, if called in constructor
    
       
    
      }
      getLocation() {

        this.geolocation.getCurrentPosition().then((resp) => {
           console.log(resp)
          this.myGeo.getLocation(new BMap.Point(resp.coords.longitude, resp.coords.latitude), (result)=>{ 
               
            if (result){   
            this.address = result.address;
             console.log(this)
              console.log(result)   
           
            } 
            

        });
        
        //   if (resp && resp.coords) {
    
        //     let locationPoint = new BMap.Point(resp.coords.longitude, resp.coords.latitude);
    
        //     let convertor = new BMap.Convertor();
    
        //     let pointArr = [];
    
        //     pointArr.push(locationPoint);
    
        //     convertor.translate(pointArr, 1, 5, (data) => {
        //   console.log(data)
        //       if (data.status === 0) {
    
        //         let marker = new BMap.Marker(data.points[0], { icon: this.myIcon });
    
        //         this.map.panTo(data.points[0]);
    
        //         marker.setPosition(data.points[0]);
    
        //         this.map.addOverlay(marker);
    
        //       }
    
        //     })
        //     this.map.centerAndZoom(locationPoint, 13);
        //       // 根据坐标得到地址描述    
     
    
        //     console.log('GPS定位：您的位置是 ' + resp.coords.longitude + ',' + resp.coords.latitude);
    
        //   }
    
        // }).catch(e => {
        //  console.log(e)
        //   console.log('Error happened when get current position.');
    
        });
    
      }
    // 下拉刷新
    async doRefresh(event) {
        this.page = 1;

        this.getSlider();
        this.productList = await this.productService.getRecommend(this.page,this.num)


        this.hasMore = true;

        setTimeout(() => {


            event.target.complete();
           
        }, 2000);
    }

    // 切换
    // toggleInfiniteScroll() {

    //     this.infiniteScroll.disabled = false;

    // }

// 获取第一页
//获取轮播图
    async getSlider() {
        console.log(this.page);
      
        this.sliders = await this.productService.getSlider()
         console.log(this.sliders)
      
    

       
    }
    //获取推荐产品
    async getRecommendProduct(page:number,num:number){
        this.productList = await this.productService.getRecommend(page,num)
        const a = await this.productService.allLove();
        console.log(a)
        for(var i=0;i<this.productList.length;i++){
            this.productList[i].starWidth = this.productList[i].star/5*70.47
            if(a.length ==0){
                this.productList[i].loveStatus = false
            }else{
                this.productList[i].loveStatus = false
                for(let j=0;j<a.length;j++){
                    if (a[j].id == this.productList[i].id) {
                   
                        this.productList[i].loveStatus = true
                        break;
                    }
                    // }else{
                    //     this.productList[i].loveStatus = false
                    // }
                }
            }
          }
          console.log(this.productList)
    }

    //分页加载
    async ionInfinite(e) {

        this.page += 1;

        // const response: PageProduct = await this.productService.getToSeeProductList(this.page, this.mount);
        let response: any= await this.productService.getRecommend(this.page, this.num);
      
        this.productList =  this.productList.concat(response)
        for(var i=0;i<this.productList.length;i++){
            this.productList[i].starWidth = this.productList[i].star/5*70.47
          }
          console.log(this.productList)
        // 判断下一页有没有数据
        // if (!response.hasNextPage) {
            if (response) {
            // e.target.disabled=true;
           
                this.hasMore = false;
        }
        //   e.target.disabled=true;
        e.target.complete(); // 请求完成数据以后告诉ion-infinite-scroll更新数据
    }

    // 回到顶部
    top() {
        this.content.scrollToTop(0);
    }

   //处理satr长度
  async handleStar(){
    for(var i=0;i<this.productList.length;i++){
      this.productList[i].starWidth = this.productList[i].star/5*70.47
    }
    console.log(this.productList)
  }

    async onPageWillClose() {
      
        // this.productList = res.list;
        
        console.log('RegisterPage页面即将关闭，开始清除数据。。。');
    }

    async onPageWillEnter() {
        console.log(this.page);    
        this.sliders = await this.productService.getSlider()
        console.log('RegisterPage页面即将进入，开始初始化数据。。。');

    }

}
