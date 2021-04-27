import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import {Pokemon} from '../../models/pokemon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.scss']
})
export class GlassComponent implements OnInit {
  faSearch = faSearch;
  pokemons: Array<Pokemon>;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getListPokemon().subscribe((response) => {
      response.data.sort(function(a,b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });

      this.pokemons = response.data
    });

  }
}
