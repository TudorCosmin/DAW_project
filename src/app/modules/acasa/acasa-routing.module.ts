import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from './acasa/acasa.component';

const routes: Routes = [
{
  path: '',
  component: AcasaComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcasaRoutingModule { }
