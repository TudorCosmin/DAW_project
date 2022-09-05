import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.scss']
})
export class ProduseComponent implements OnInit {

  public cautaForm: FormGroup = new FormGroup ({
    marca: new FormControl(''),
    categorie: new FormControl(''),
    culoare: new FormControl(''),
  })

  constructor( private router: Router ) { }

  // getters
  get marca(): AbstractControl {
    return this.cautaForm.get('marca')!;
  }

  get categorie(): AbstractControl {
    return this.cautaForm.get('categorie')!;
  }

  get culoare(): AbstractControl {
    return this.cautaForm.get('culoare')!;
  }

  ngOnInit(): void {
  }

  public cauta(): void{
    alert(this.marca.value)
  }
}

