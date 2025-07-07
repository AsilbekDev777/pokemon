import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokemonData} from '../../types/root-type';
import {Observable} from 'rxjs';
import {PokemonListResponse} from '../../types/pokemonListResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  http = inject(HttpClient)
  getPokemon(limit:number, offset:number):Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }
  getMorePokemon(name:string):Observable<PokemonData> {
    return this.http.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

}

