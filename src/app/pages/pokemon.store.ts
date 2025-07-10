import {inject} from '@angular/core';
import {
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';
import {PokemonService} from '../data/services/pokemon.service';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, tap, switchMap, forkJoin, map} from 'rxjs';
import {tapResponse} from '@ngrx/operators';
import {PokemonListResponse} from '../types/pokemonListResponse';
import {PokemonData} from '../types/root-type';

type  initialType = {
  pokemons: PokemonData[];
  isLoading:boolean;
  offset: number;
  limit: number;
}
const PokemonStoreState: initialType ={
  pokemons:[],
  isLoading: false,
  offset:0,
  limit:8,
}

export const PokemonStore = signalStore(
  { providedIn: 'root' },
  withState<initialType>({
    pokemons: [],
    isLoading: false,
    offset: 0,
    limit: 8,
  }),
  withMethods((store,pokemonService = inject(PokemonService)) =>({
    loadPokemonList:rxMethod<void>(
      pipe(
        tap(()=>patchState(store, {isLoading:true})),
        switchMap(()=>{
          const limit = store.limit();
          const offset = store.offset();
          return pokemonService.getPokemon(limit, offset).pipe(
            tap(async (list: PokemonListResponse) => {
              const detailedList: PokemonData[] = [];

              for (const result of list.results) {
                const detail = await pokemonService.getMorePokemon(result.name).toPromise();
                if (detail) detailedList.push(detail);
              }
               const updated = [...store.pokemons(), ...detailedList].sort((a, b) => a.id - b.id);
              patchState(store,{
                pokemons:updated,
                isLoading:false,
                offset:offset + limit,
              })
            })
          )
        })
      )
    )
  })),
);
