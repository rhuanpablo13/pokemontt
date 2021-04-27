import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GlassComponent} from './components/glass/glass.component'

const routes: Routes = [
  { path: '', component: GlassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




}
