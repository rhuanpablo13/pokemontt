import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import {Pokemon} from '../../models/pokemon';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.scss']
})
export class GlassComponent implements OnInit {
  pokemons: Array<Pokemon>;
 
  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getListPokemon().subscribe((response) => {
      response.data.sort(function(a,b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });

      this.pokemons = response.data
    });
  }

  onSubmit(name): void{
    this.pokemonService.getListPokemon(name).subscribe((response) => {
      console.log(response);
      
      this.pokemons = response.data
    });
  };
}
