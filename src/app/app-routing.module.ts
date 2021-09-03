import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainCharacterComponent} from './main-character/main-character.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  { path: ':id', component: MainCharacterComponent },
  { path: '', component: SearchComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
