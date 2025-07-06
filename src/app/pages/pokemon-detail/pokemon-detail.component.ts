
import {Component} from '@angular/core';
import {PokemonData} from '../../types/root-type';
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
  // pokemonMoreInfo!: PokemonData;
  //
  // constructor(
  //   private route: ActivatedRoute,
  //   private pokemonService: PokemonService
  // ) {}
  //
  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.pokemonService.getMorePokemon(id).subscribe((data) => {
  //       // @ts-ignore
  //       this.pokemonMoreInfo = data;
  //     });
  //   }
  // }
}

