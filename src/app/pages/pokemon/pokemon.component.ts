import {Component, inject} from '@angular/core';
import {PokemonService} from '../../data/services/pokemon.service';
import {Router, RouterLink} from '@angular/router';
 // type PokemonItemDetails={
 //   name: string,
 // }
@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  pokemonService = inject(PokemonService);
  pokemon:any[] = [];

  limit = 8;
  offset = 0;
  loading = false;



  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    if (this.loading) return;

    this.loading = true;

    this.pokemonService.getPokemon(this.limit, this.offset).subscribe((response: any) => {
      const results = response.results;

      results.forEach((result: { name: string; }) => {
        this.pokemonService.getMorePokemon(result.name).subscribe((response: any) => {
          this.pokemon.push(response);
          this.pokemon.sort((a, b) => a.id - b.id);
        });
      });

      this.offset += this.limit;
      this.loading = false;
    });
  }

  constructor(private router: Router) {}

  morePokemon(){
    this.router.navigate(['/pokemon-detail',[]]);
  }


}
