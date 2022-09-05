import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcasaRoutingModule } from './acasa-routing.module';
import { ProduseComponent } from './produse/produse.component';
import { AcasaComponent } from './acasa/acasa.component';


@NgModule({
  declarations: [
    ProduseComponent,
    AcasaComponent
  ],
  imports: [
    CommonModule,
    AcasaRoutingModule
  ]
})
export class AcasaModule { }
