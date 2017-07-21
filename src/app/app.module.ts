import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { FaqPage } from '../pages/faq/faq';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';


import { HomePage } from '../pages/home/home';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges';
import { ChipPage } from '../pages/chip/chip';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    TutorialPage,
    FaqPage,
    ContactPage,
    AboutPage,
    HomePage,
    ActionSheetPage,
    AlertsPage,
    BadgesPage,
    ChipPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    TutorialPage,
    FaqPage,
    ContactPage,
    AboutPage,
    HomePage,
    ActionSheetPage,
    AlertsPage,
    BadgesPage,
    ChipPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
