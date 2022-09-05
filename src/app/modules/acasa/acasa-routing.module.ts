import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from './acasa/acasa.component';
import { LivrareComponent } from './livrare/livrare.component';
import { ProduseComponent } from './produse/produse.component';

const routes: Routes = [

{
  path: '',
  component: AcasaComponent
},

{
  path: 'produse',
  component: ProduseComponent
},

{
  path: 'livrare',
  component: LivrareComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcasaRoutingModule { }
