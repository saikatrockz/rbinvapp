import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { InvestmentPage } from '../pages/investment/investment';
import { ConfirmPage } from '../pages/confirm/confirm';
import { HistoryPage } from '../pages/history/history';
import { PreferencePage } from '../pages/preference/preference';
import { ForgotPage } from '../pages/forgot/forgot';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    SettingsPage,
    InvestmentPage,
    ConfirmPage,
    HistoryPage,
    PreferencePage,
    ForgotPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    SettingsPage,
    InvestmentPage,
    ConfirmPage,
    HistoryPage,
    PreferencePage,
    ForgotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
