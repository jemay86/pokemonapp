import { Observable } from 'rxjs/Observable';
import { IPokemonDetails } from './../../models/pokemon-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pokemon } from '../../models/pokemon';
import { PokemonApiProvider } from '../../providers/pokemon-api/pokemon-api';

/**
 * Generated class for the PokemonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon-detail',
  templateUrl: 'pokemon-detail.html',
})
export class PokemonDetailPage {

  pok: Pokemon
  pokDetails$: Observable<IPokemonDetails>

  constructor(public navCtrl: NavController, public navParams: NavParams, public pokApi: PokemonApiProvider) {
    this.pok = navParams.get('pok');
    this.pokDetails$ = pokApi.getPokemonDetails(this.pok);

  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonDetailPage');
  }

}
