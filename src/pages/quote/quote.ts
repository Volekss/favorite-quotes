import { Component } from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  scripture: string;
  text: string;
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('here');
    this.scripture = this.navParams.get('scripture');
    this.text = this.navParams.get('text');
    console.log(this.scripture);
  }

  unFavorite() {

  }

  onCloseModal(removeFromFavorite = false) {
    this.viewCtrl.dismiss(removeFromFavorite);
  }
}
