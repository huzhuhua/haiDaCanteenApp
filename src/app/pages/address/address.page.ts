import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx"
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { NativeService } from 'src/app/services/native.service';
import { StorageService } from 'src/app/services/storage.service';
declare var BMap;
declare var BMapLib;
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  public addressList: any;
  map: any;

  myGeo: any;

  myIcon: any;
  public address: any;
  @ViewChild('map', name) map_container: ElementRef;
  constructor(private geolocation: Geolocation,
    private storageService: StorageService,
    private router: Router,
    private addressService: AddressService,
    private nativeService: NativeService,
  ) { }

  ngOnInit() {
    this.findAddress()
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
  //切换收货地址
  async switch(addressId:any){
this.nativeService.showConfirm("是否将此地址设为默认地址","确定",()=>{   
    console.log(addressId)
 const a= this.addressService.switch(addressId)
    a.then((data)=>{
      if(data=="1"){
   this.findAddress()
      }
    }) 
})

  }
  //修改收货地址
  async modify(e:any,addressId: any,location:any){
    e.stopPropagation();
    this.router.navigate(["modify-address"], { queryParams: { addressId:addressId,location:location } })
  }
  //删除收获地址
  async delete(e:any,addressId: any) {
    e.stopPropagation();
    // console.log(addressId)
    this.nativeService.showConfirm("是否删除收货地址", "确定", () => {
      let a = this.addressService.deleteAddress(addressId)
      a.then((data) => {
        if (data == "1") {
          this.findAddress()
        }
      })
    })
  }
  //获取收货地址
  async findAddress() {
    this.addressList = await this.addressService.findAddress()
    console.log(this.addressList)
    let arr;
    for(let i=0;i<this.addressList.length;i++){
      
      if(this.addressList[i].isPrimary == "1"){
        arr = this.addressList.splice(i,1)
        console.log(arr)
      }

    }
  console.log(arr)
  if(arr!=undefined){
    this.addressList.unshift(arr[0])
  }
   
    console.log(this.addressList.length)
  }
  //添加收货地址
  async addAddress() {
    console.log("ff")
    this.router.navigate(["add-address"], { queryParams: { address: this.address } })
  }

  async onPageWillClose() {


  }

  async onPageWillEnter() {
    this.ngOnInit()

  }
}
