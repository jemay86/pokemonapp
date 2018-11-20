import { IPokemonDetails } from './../../models/pokemon-details';
import { IPokemonResult } from './../../models/pokemon-results';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IPokemonData } from '../../models/pokemon-data';
import {map} from "rxjs/operators"
import { Pokemon } from '../../models/pokemon';

/*
  Generated class for the PokemonApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonApiProvider {

  private limit = 100

  pokUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(public http: HttpClient) {
    console.log('Hello PokemonApiProvider Provider');
  }

  getPokemons():Observable<Pokemon[]> {

    return this.http.get<IPokemonResult>(this.pokUrl + "?limit=" + this.limit).pipe(
      map((res: IPokemonResult) => res.results),
      map((res: [IPokemonData]) => {
        return res.map(pokdata => new Pokemon(pokdata))
      })
    ); 
  }

  getPokemonDetails(pok: Pokemon): Observable<IPokemonDetails> {
    return this.http.get<IPokemonDetails>(this.pokUrl + pok.id)

  }

}
