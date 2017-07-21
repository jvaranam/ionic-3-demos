import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

/**
 * Generated class for the ActionSheetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 let buttonLabelsToShow = ['Share via Facebook', 'Share via Twitter'];

@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

/*options: ActionSheetOptions = {
    title: 'Share This Image with the World',
    subtitle: 'Choose from the various Options',
    buttonLabels: buttonLabelsToShow,
    addCancelButtonWithLabel: 'Cancel',
    addDestructiveButtonWithLabel: 'Delete',
    destructiveButtonLast: true
  }*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Modify your album',
     buttons: [
       {
         text: 'Destructive',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Archive',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

  openActionSheet() {
    /*this.actionSheet.show(this.options).then((buttonClickedIndex: number) => {
      console.log('Button pressed is' + buttonClickedIndex)
    }).catch((err) => {
      console.log(err)
    });*/
  }

}
