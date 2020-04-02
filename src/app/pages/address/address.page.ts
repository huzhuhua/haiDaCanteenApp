import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx"
import { Router } from '@angular/router';
declare var BMap;
declare var BMapLib;
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  map: any;

  myGeo: any;

  myIcon: any;
  public address: any;
  @ViewChild('map', name) map_container: ElementRef;
  constructor(private geolocation: Geolocation,
              private router:Router
    ) { }
 
  ngOnInit() {

    this.myIcon = new BMap.Icon("../../assets//HdImage/位置.svg", new BMap.Size(32, 32));
    this.map = new BMap.Map("map_container");

    this.map.centerAndZoom('上海', 13);

    this.map.enableScrollWheelZoom(true);
    // 创建地理编码实例, 并配置参数获取乡镇级数据
    // this.myGeo = new BMap.Geocoder({extensions_town: true});   
    this.myGeo = new BMap.Geocoder();

    var geolocationControl = new BMap.GeolocationControl({
      // showAddressBar: true //是否显示    
      // , enableAutoLocation: true //首次是否进行自动定位
      // , offset: new BMap.Size(0, 25)
    });

    geolocationControl.addEventListener("locationSuccess", (e) => {
      // 定位成功事件
      var address = '';
      address += e.addressComponent.province;
      address += e.addressComponent.city;
      address += e.addressComponent.district;
      address += e.addressComponent.street;
      address += e.addressComponent.streetNumber;
      this.address = address;

    });
    geolocationControl.addEventListener("locationError", function (e) {
      // 定位失败事件
      alert(e.message);
    });
    this.map.addControl(geolocationControl);

    this.getLocation();


  }
  getLocation() {

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
      this.myGeo.getLocation(new BMap.Point(resp.coords.longitude, resp.coords.latitude), (result) => {

        if (result) {
          this.address = result.address;
          console.log(this)
          console.log(result)

        }


      });

      if (resp && resp.coords) {

        let locationPoint = new BMap.Point(resp.coords.longitude, resp.coords.latitude);

        let convertor = new BMap.Convertor();

        let pointArr = [];

        pointArr.push(locationPoint);

        convertor.translate(pointArr, 1, 5, (data) => {
          console.log(data)
          if (data.status === 0) {

            let marker = new BMap.Marker(data.points[0], { icon: this.myIcon });

            this.map.panTo(data.points[0]);

            marker.setPosition(data.points[0]);

            this.map.addOverlay(marker);

          }

        })
        this.map.centerAndZoom(locationPoint, 13);
        // 根据坐标得到地址描述    


        console.log('GPS定位：您的位置是 ' + resp.coords.longitude + ',' + resp.coords.latitude);

      }

    }).catch(e => {
      console.log(e)
      console.log('Error happened when get current position.');

    });

  }
  //添加收货地址
  async addAddress(){
    this.router.navigate(["add-address"],{queryParams:{address:this.address}})
  }
  async onPageWillClose() {


  }

  async onPageWillEnter() {
    //  this.ngOnInit()

  }
}
