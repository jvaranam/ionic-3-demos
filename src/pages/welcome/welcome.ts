import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { TutorialPage } from '../tutorial/tutorial';
import { FaqPage } from '../faq/faq';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { AlertsPage } from '../alerts/alerts';
import { BadgesPage } from '../badges/badges';
import { ChipPage } from '../chip/chip';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  navigateTo(_param:string){
  	if(_param == 'login'){this.navCtrl.setRoot(LoginPage)}
    if(_param == 'signup'){this.navCtrl.setRoot(SignupPage)}
    if(_param == 'forgotPassword'){this.navCtrl.setRoot(ForgotPasswordPage)}
    if(_param == 'tutorial'){this.navCtrl.setRoot(TutorialPage)}
    if(_param == 'faq'){this.navCtrl.setRoot(FaqPage)}
    if(_param == 'contact'){this.navCtrl.setRoot(ContactPage)}
    if(_param == 'about'){this.navCtrl.setRoot(AboutPage)}

    if(_param == 'home'){this.navCtrl.setRoot(HomePage)}
    if(_param == 'actionSheet'){this.navCtrl.setRoot(ActionSheetPage)}
    if(_param == 'alerts'){this.navCtrl.setRoot(AlertsPage)}
    if(_param == 'badges'){this.navCtrl.setRoot(BadgesPage)}
    if(_param == 'chip'){this.navCtrl.setRoot(ChipPage)}
  }

}
