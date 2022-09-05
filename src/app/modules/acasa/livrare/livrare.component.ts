import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-livrare',
  templateUrl: './livrare.component.html',
  styleUrls: ['./livrare.component.scss']
})
export class LivrareComponent implements OnInit {

  public livrareForm: FormGroup = new FormGroup ({
    oras: new FormControl(''),
    strada: new FormControl(''),
    bloc: new FormControl(''),
    apartament: new FormControl(''),
  })

  constructor( private router: Router ) { }

  // getters
  get oras(): AbstractControl {
    return this.livrareForm.get('oras')!;
  }

  get strada(): AbstractControl {
    return this.livrareForm.get('strada')!;
  }

  get bloc(): AbstractControl {
    return this.livrareForm.get('bloc')!;
  }

  get apartament(): AbstractControl {
    return this.livrareForm.get('apartament')!;
  }

  ngOnInit(): void {
  }

  public plaseazaComanda(): void{
    alert(this.oras.value)
  }

}
