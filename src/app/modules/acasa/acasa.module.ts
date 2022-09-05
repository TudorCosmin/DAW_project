import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcasaRoutingModule } from './acasa-routing.module';
import { ProduseComponent } from './produse/produse.component';
import { AcasaComponent } from './acasa/acasa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { materialize } from 'rxjs';
import { MaterialModule } from '../material/material.module';
import { LivrareComponent } from './livrare/livrare.component';


@NgModule({
  declarations: [
    ProduseComponent,
    AcasaComponent,
    LivrareComponent
  ],
  imports: [
    CommonModule,
    AcasaRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AcasaModule { }
