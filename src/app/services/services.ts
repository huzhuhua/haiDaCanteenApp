
import { StorageService } from './storage.service';
import { LoginService } from './login.service'
import { LoginGuardService } from './login-guard.service';
import { NativeService } from './native.service';
import { BackButtonService } from './back-button.service';
import { OpenAcountService } from './open-acount.service';
import { ProductService } from './product.service';
import { GetUserInfoService } from './get-user-info.service';
import { RechargeService } from './recharge.service';
// import { WithdrawService } from './withdraw.service';
import { HttpService } from './http/http.service';
import { InterceptorService } from './http/interceptor.service';
import {RouterHandlerService} from "./router-handler.service";
import { CryptoService } from './crypto.service';
import { ResetPasswordService } from './reset-password.service';
import { CameraService } from './camera.service';
import { ChooseFileService } from './choose-file.service';
import { FileTransferService } from './file-transfer.service';
import { ChooseImgService } from './choose-img.service';
import { AddressService } from './address.service';
// import { WebSocketService } from './web-socket.service';
// import { ChooseFileService } from './choose-file.service';
export const Services = [
    HttpService,
    InterceptorService,
    LoginGuardService,
    StorageService,
    NativeService,
    LoginService,
    OpenAcountService,
    BackButtonService,
    ProductService,
    GetUserInfoService,
    RechargeService,
    
    RouterHandlerService,
    CryptoService,
    ResetPasswordService,
    CameraService,
   ChooseFileService,
   FileTransferService,
   ChooseImgService,
   AddressService
//    WebSocketService
];