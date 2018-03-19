import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public text: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = "这是关于我的页面"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
