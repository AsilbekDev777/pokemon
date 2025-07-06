import {Stat} from './interfaces/stat/stat';
import {Ability} from './interfaces/ability/ability';
import {Cries} from './interfaces/cries/cries';
import {Form} from './interfaces/forms/forms';
import {Index} from './interfaces/index';
import {Mfe} from './interfaces/mfe/mfe';
import {PastAbility} from './interfaces/pastAbility/pastAbility';
import {Species} from './interfaces/species/species';
import {Sprites} from './interfaces/sprites/sprites';
import {Type} from './interfaces/type/type';

export type PokemonData = {
  abilities: Ability[]
  base_experience: number
  cries: Cries
  forms: Form[]
  game_indices: Index[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_abilities: PastAbility[]
  past_types: any[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}
