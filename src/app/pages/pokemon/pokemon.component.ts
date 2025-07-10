import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {PokemonService} from '../../data/services/pokemon.service';
import {Router} from '@angular/router';
import {PokemonData} from '../../types/root-type';
import {PokemonListResponse} from '../../types/pokemonListResponse';
import {PokemonStore} from '../pokemon.store';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  providers:[PokemonStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './pokemon.component.scss'
})

export class PokemonComponent {
  // store
  readonly  pokemonStore = inject(PokemonStore);

  router = inject(Router);
  pokemonInfo:PokemonData[] = [];

loadMorePokemon() {
    this.pokemonStore.loadPokemonList(void 0);
  }

  ngOnInit() {
    this.pokemonStore.loadPokemonList();

  }

  get pokemons(){
    return this.pokemonStore.pokemons;
  }
  get loading(){
    return this.pokemonStore.isLoading;
  }


  morePokemon(id:number){
    this.router.navigate(['/pokemon-detail', id]).then();
  }


}
