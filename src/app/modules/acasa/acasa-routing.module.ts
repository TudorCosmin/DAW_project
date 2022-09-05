import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from './acasa/acasa.component';
import { ProduseComponent } from './produse/produse.component';

const routes: Routes = [

{
  path: 'acasa',
  component: AcasaComponent
},

{
  path: '',
  component: ProduseComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcasaRoutingModule { }
