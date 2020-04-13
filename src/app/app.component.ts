import { Component, OnInit, ViewChild} from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from './services/storage.service';
import { StorageKey } from './storage.key';
import {IonRouterOutlet, NavController, Platform} from '@ionic/angular';
import {RouterHandlerService} from "./services/router-handler.service";
import { Router } from '@angular/router';
import { AndroidFingerprintAuth } from '_@ionic-native_android-fingerprint-auth@5.23.0@@ionic-native/android-fingerprint-auth/ngx';
// import { AndroidFingerprintAuth } from '_@ionic-native_android-fingerprint-auth@5.22.0@@ionic-native/android-fingerprint-auth/ngx';

// import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 
  @ViewChild(IonRouterOutlet, {static: true})
  rootOutlet: IonRouterOutlet;
  public static tabsOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageService: StorageService,
    private routerHandlerService: RouterHandlerService,
    private router:Router,
    // private androidFingerprintAuth: AndroidFingerprintAuth
    private androidFingerprintAuth:AndroidFingerprintAuth
  ) {
 
    this.initializeApp();

    console.log(this.rootOutlet)
 
  }
  async initializeApp() {
   
    this.platform.ready().then(() => {
         this.initializeFirstPage()   
        this.statusBar.overlaysWebView(true);
      // this.statusBar.overlaysWebView(false);
      this.statusBar.styleDefault() 
      // this.statusBar.styleLightContent();
     
      console.log(this.rootOutlet)
      this.routerHandlerService.routerHandle(this.rootOutlet);
      // this.storageService.add.
      // this.storageService.remove(StorageKey.FIRST)
      // this.splashScreen.hide();
    });
  }
//引导页
  async initializeFirstPage(){
    // this.storageService.add(StorageKey.FIRST,'true')
    //判断当前是否第一次进入app  然后跳转到登录页
    const isFirstOpen = await this.storageService.get(StorageKey.FIRST)
    
    console.log(isFirstOpen)
if(isFirstOpen != null){
    if(isFirstOpen == 'true'){
      this.router.navigateByUrl('first-open')
      this.storageService.add(StorageKey.FIRST,'false')
    } else{
      //  const token = this.storageService.get(StorageKey.TOKEN);
      //  console.log(token)
       //没有登陆过app
      //  alert(StorageKey.HADLOGIN)
      let hadLogin = await this.storageService.get(StorageKey.HADLOGIN);
       if(hadLogin == 'false' || hadLogin == undefined){
       
        //  alert("token未定义")
        this.router.navigateByUrl('login')
       }else{
    //已登录app,调用指纹解锁
        this.androidFingerprintAuth.isAvailable()
        .then((result)=> {
          if(result.isAvailable){
            // it is available
      
            this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
              .then(result => {
                 if (result.withFingerprint) {
                  this.router.navigateByUrl('tabs/tab1')
                     console.log('Successfully encrypted credentials.');
                     console.log('Encrypted credentials: ' + result.token);
                 } else if (result.withBackup) {
                  this.router.navigateByUrl('tabs/tab1')
                   console.log('Successfully authenticated with backup password!');
                 } else console.log('Didn\'t authenticate!');
              })
              .catch(error => {
                 if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                   console.log('Fingerprint authentication cancelled');
                 } else console.error(error)
              });
      
          } else {
            // fingerprint auth isn't available
          }
        })
        .catch(error => console.error(error));


       }
     
    
     }
}else{
  this.router.navigateByUrl('first-open')
this.storageService.add(StorageKey.FIRST,'false')

}
    
  
  }
}
