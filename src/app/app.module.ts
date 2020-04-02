import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {IonicStorageModule} from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Services } from './services/services';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './services/http/interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
// import {Base64} from '@ionic-native/base64/ngx'
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import {PipesModule} from './pipes/pipes.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    
      ReactiveFormsModule,
      BrowserModule,
      // PipesModule,
    IonicModule.forRoot({
    backButtonText: '',
    mode: 'ios',
    swipeBackEnabled: true,
    // navAnimation: easeInOutCubicAnimation,
    }), 
AppRoutingModule,
IonicStorageModule.forRoot(),
HttpClientModule],
  providers: [
    StatusBar,
    File,
    Base64,
    AndroidFingerprintAuth,
    Camera,
    Geolocation,
    FileChooser,
    SplashScreen,
    FileTransfer,
    ImagePicker ,
  
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Services,
    Injectable
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}






