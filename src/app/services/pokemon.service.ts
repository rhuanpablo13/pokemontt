import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pokemon } from '../models/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getListPokemon($name = null) {
    if ($name) return this.http.get(`${environment.API_PATH}cards?q=name:${$name}*`);
      
    return this.http.get(`${environment.API_PATH}cards?orderBy:name`);
  }

    getPokemon($id: string) {
    return this.http.get(`${environment.API_PATH}cards/${$id}`);
  }
}
