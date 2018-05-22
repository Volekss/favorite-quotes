import { Component } from '@angular/core';
import {Quote} from "../../data/quote";
import {QuotesService} from "../../services/quotes";
import {MenuController, ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor (private quoteService: QuotesService, private modalCtrl: ModalController, private settingsServcie: SettingsService) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    console.log(quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuotesFromFavorites(quote);
    this.quotes = this.quoteService.getFavoriteQuotes();
  }


  getBackground() {
    return this.settingsServcie.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsServcie.isAltBackground();
  }

}


