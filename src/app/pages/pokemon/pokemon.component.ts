import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon:  Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    const id = this.route.snapshot.queryParams.id;
    console.log(this.route.snapshot);
    
    this.pokemonService.getPokemon(id).subscribe((response)=> {
      console.log(response.data);
      
      this.pokemon = response.data
    })
  }
}
