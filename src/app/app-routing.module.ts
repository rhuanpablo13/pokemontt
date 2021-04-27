import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GlassComponent} from './components/glass/glass.component'
import { PokemonComponent} from './pages/pokemon/pokemon.component'

const routes: Routes = [
  { path: '', component: GlassComponent },
  { path: 'pokemon', component: PokemonComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
