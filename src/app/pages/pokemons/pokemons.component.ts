import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import {Pokemon} from '../../models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemons: Array<Pokemon>;
 
  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getListPokemon().subscribe((response: any) => {
      this.pokemons = response.data
    });
  }

  onSubmit(name: string): void{
    this.pokemonService.getListPokemon(name).subscribe((response: any) => {
      this.pokemons = response.data
    });
  };
}
