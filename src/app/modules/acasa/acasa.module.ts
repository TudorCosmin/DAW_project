import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcasaRoutingModule } from './acasa-routing.module';
import { ProduseComponent } from './produse/produse.component';
import { AcasaComponent } from './acasa/acasa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { materialize } from 'rxjs';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProduseComponent,
    AcasaComponent
  ],
  imports: [
    CommonModule,
    AcasaRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AcasaModule { }
