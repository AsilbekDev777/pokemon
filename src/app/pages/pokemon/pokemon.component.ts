import {Component, inject} from '@angular/core';
import {PokemonService} from '../../data/services/pokemon.service';
import {Router} from '@angular/router';
import {PokemonData} from '../../types/root-type';
import {PokemonListResponse} from '../../types/pokemonListResponse';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})

export class PokemonComponent {
  pokemonService = inject(PokemonService);
  router = inject(Router);
  pokemonInfo:PokemonData[] = [];
  limit = 8;
  offset = 0;
  loading = false;


  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    if (this.loading) return;

    this.loading = true;

    // @ts-ignore
    this.pokemonService.getPokemon(this.limit, this.offset).subscribe((response: PokemonListResponse) => {
      const results = response.results;
      results.forEach((result: { name: string; }) => {
        // @ts-ignore
        this.pokemonService.getMorePokemon(result.name).subscribe((response: PokemonData) => {
          this.pokemonInfo.push(response);
          this.pokemonInfo.sort((a, b) => a.id - b.id);
        });
      });

      this.offset += this.limit;
      this.loading = false;
    });

  }

  morePokemon(id:number){
    this.router.navigate(['/pokemon-detail', id]).then();
  }


}
