import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, LoginPage, PwdResetPage, MenuPage, ProfilePage, SwimmingPoolPage, AccessPage } from '../pages/index';

import { NgxQRCodeModule } from 'ngx-qrcode2';

import { FaIconComponent, PageDecoratorComponent } from '../components/index';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PwdResetPage,
    MenuPage,
    FaIconComponent,
    ProfilePage,
    SwimmingPoolPage,
    AccessPage,
    PageDecoratorComponent,
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PwdResetPage,
    MenuPage,
    ProfilePage,
    SwimmingPoolPage,
    AccessPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
