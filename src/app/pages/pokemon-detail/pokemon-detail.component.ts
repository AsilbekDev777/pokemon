
import {Component, inject} from '@angular/core';
import type {PokemonData} from '../../types/root-type';
import {PokemonService} from '../../data/services/pokemon.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  route = inject(ActivatedRoute);
  pokemonService = inject(PokemonService);
  pokemonMoreInfo!: PokemonData;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getMorePokemon(id).subscribe((data) => {

        this.pokemonMoreInfo = data;
      });
    }
  }
}

