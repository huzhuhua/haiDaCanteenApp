import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginGuardService} from './services/login-guard.service';

const routes: Routes = [
    {path: 'bind-card', redirectTo: 'bind-card', pathMatch: 'full'},
    // {
    //     path: '',
    //     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    //     canActivate: [LoginGuardService],
    //     canActivateChild: [LoginGuardService]
    // },
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule),
    },
    {
        path: 'open-acount',
        loadChildren: () => import('./pages/open-acount/open-acount.module').then(m => m.OpenAcountPageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },
    {
        path: 'bind-card',
        loadChildren: () => import('./pages/bind-card/bind-card.module').then(m => m.BindCardPageModule),
        // canActivate: [LoginGuardService],
        // canActivateChild: [LoginGuardService]
    },
    // {
    //     path: 'bind-card-success',
    //     loadChildren: () => import('./pages/bind-card-success/bind-card-success.module').then(m => m.BindCardSuccessPageModule),
    //     canActivate: [LoginGuardService],
    //     canActivateChild: [LoginGuardService]
    // },
    {
        path: 'recharge',
        loadChildren: () => import('./pages/recharge/recharge.module').then(m => m.RechargePageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },
    // {
    //     path: 'recharge-success',
    //     loadChildren: () => import('./pages/recharge-success/recharge-success.module').then(m => m.RechargeSuccessPageModule),
    //     canActivate: [LoginGuardService],
    //     canActivateChild: [LoginGuardService]
    // },
    {
        path: 'withdraw',
        loadChildren: () => import('./pages/withdraw/withdraw.module').then(m => m.WithdrawPageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },
    // {
    //     path: 'withdraw-success',
    //     loadChildren: () => import('./pages/withdraw-success/withdraw-success.module').then(m => m.WithdrawSuccessPageModule),
    //     canActivate: [LoginGuardService],
    //     canActivateChild: [LoginGuardService]
    // },

    {
        path: 'blank-card',
        loadChildren: () => import('./pages/blank-card/blank-card.module').then(m => m.BlankCardPageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },
    {
        path: 'record',
        loadChildren: () => import('./pages/record/record.module').then(m => m.RecordPageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },
    {
        path: 'balance',
        loadChildren: () => import('./pages/balance/balance.module').then(m => m.BalancePageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },
    {
        path: 'product-details',
        loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },
    {
        path: 'product-buy',
        loadChildren: () => import('./pages/product-buy/product-buy.module').then(m => m.ProductBuyPageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },

    // {
    //     path: 'transfer-success',
    //     loadChildren: () => import('./pages/transfer-success/transfer-success.module').then(m => m.TransferSuccessPageModule),
    //     canActivate: [LoginGuardService],
    //     canActivateChild: [LoginGuardService]
    // },
    {
        path: 'product-pay',
        loadChildren: () => import('./pages/product-pay/product-pay.module').then(m => m.ProductPayPageModule),
        canActivate: [LoginGuardService],
        canActivateChild: [LoginGuardService]
    },
    // {
    //     path: 'pay-success',
    //     loadChildren: () => import('./pages/pay-success/pay-success.module').then(m => m.PaySuccessPageModule),
    //     canActivate: [LoginGuardService],
    //     canActivateChild: [LoginGuardService]
    // },
  {
    path: 'redemption',
    loadChildren: () => import('./pages/redemption/redemption.module').then( m => m.RedemptionPageModule),
    canActivate: [LoginGuardService],
    canActivateChild: [LoginGuardService]
  },
  {
    path: 'first-open',
    loadChildren: () => import('./pages/first-open/first-open.module').then( m => m.FirstOpenPageModule)
  },
  {
    path: 'find-password',
    loadChildren: () => import('./pages/find-password/find-password.module').then( m => m.FindPasswordPageModule)
  },
  {
    path: 'agreement',
    loadChildren: () => import('./pages/agreement/agreement.module').then( m => m.AgreementPageModule)
  },
  {
    path: 'code-login',
    loadChildren: () => import('./pages/code-login/code-login.module').then( m => m.CodeLoginPageModule)
  },
  {
    path: 'returns-detailed',
    loadChildren: () => import('./pages/returns-detailed/returns-detailed.module').then( m => m.ReturnsDetailedPageModule),
    canActivate: [LoginGuardService],
    canActivateChild: [LoginGuardService]
  },
  {
    path: 'my-assets',
    loadChildren: () => import('./pages/my-assets/my-assets.module').then( m => m.MyAssetsPageModule),
    canActivate: [LoginGuardService],
    canActivateChild: [LoginGuardService]
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule),
    canActivate: [LoginGuardService],
    canActivateChild: [LoginGuardService]
  },
  {
    path: 'personal-infomation',
    loadChildren: () => import('./pages/personal-infomation/personal-infomation.module').then( m => m.PersonalInfomationPageModule),
    canActivate: [LoginGuardService],
    canActivateChild: [LoginGuardService]
  },
  {
    path: 'transition-password',
    loadChildren: () => import('./pages/transition-password/transition-password.module').then( m => m.TransitionPasswordPageModule),
    canActivate: [LoginGuardService],
    canActivateChild: [LoginGuardService]
  },
  //找回密码
  {
    path: 'find-pass',
    loadChildren: () => import('./pages/find-pass/find-pass.module').then( m => m.FindPassPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./pages/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'modify-address',
    loadChildren: () => import('./pages/modify-address/modify-address.module').then( m => m.ModifyAddressPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
