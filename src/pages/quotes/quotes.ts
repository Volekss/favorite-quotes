import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from "ionic-angular";
import {Quote} from "../../data/quote";
import {QuotesService} from "../../services/quotes";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  // TODO star star-outline
  favoriteQuotes: Quote[] = [];
  quoteGroup: { category: string, quotes: Quote[], icon: string };


  constructor(private navParam: NavParams, private alertCtrl: AlertController, private quoteService: QuotesService) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParam.data;
  }

  ionViewDidEnter() {
    this.favoriteQuotes = this.quoteService.getFavoriteQuotes();
    }


  /* ionViewDidLoad() {
     console.log('hi!');
     this.quoteGroup = this.navParam.data;
     Add elvis operator(?) to use this approach
   }*/

  onRemoveFromFavorites(selectedQuote: Quote) {

      // user wants to make the quote not favorite
      const alert = this.alertCtrl.create({
        title: 'Remove From Favorites',
        /*subTitle: 'Are you sure?',*/
        message: 'Are you sure you want to make the quote not favorite anymore?',
        buttons: [
          {
            text: 'No',
            role: 'cancel'
          },
          {
            text: 'Yes',
            handler: () => {
              this.quoteService.removeQuotesFromFavorites(selectedQuote);

              this.favoriteQuotes = this.quoteService.getFavoriteQuotes();
            }
          }
        ]
      });
      alert.present();


  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add To Favorites',
      /*subTitle: 'Are you sure?',*/
      message: 'Are you sure you want to add the quote to favorites?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.quoteService.addQuoteToFavorites(selectedQuote);
            this.favoriteQuotes = this.quoteService.getFavoriteQuotes();
          }
        }
      ]
    });
    alert.present();
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }
}
