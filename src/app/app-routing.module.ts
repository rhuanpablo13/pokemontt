import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent} from './pages/pokemon/pokemon.component'
import { PokemonsComponent } from './pages/pokemons/pokemons.component'

export const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'pokemon', component: PokemonComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
