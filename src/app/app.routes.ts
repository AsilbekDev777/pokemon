import { Routes } from '@angular/router';
import {PokemonDetailComponent} from './pages/pokemon-detail/pokemon-detail.component';
import {PokemonComponent} from './pages/pokemon/pokemon.component';

export const routes: Routes = [
  {
    path: '',
    component: PokemonComponent
  },

  {
    path: 'pokemon-detail/:id',
    component: PokemonDetailComponent,
  }

];
