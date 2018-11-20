
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonApiProvider} from "../../providers/pokemon-api/pokemon-api";

import { Pokemon} from "../../models/pokemon";
import {PokemonDetailPage} from "../pokemon-detail/pokemon-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   pokemons:[Pokemon]

  constructor(public navCtrl: NavController, private pokApi: PokemonApiProvider) {

      pokApi.getPokemons().subscribe( (res: [Pokemon])=>  this.pokemons = res)

  }

  showPokDetail( pok: Pokemon) {
       //this.pokApi.getPokemonDetails(pok).s
        this.navCtrl.push('PokemonDetailPage', {id:pok.id, pok:pok})
  }

}