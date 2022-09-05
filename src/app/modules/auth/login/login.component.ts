import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup ({
    username: new  FormControl(''),
    password: new FormControl(''),
  })

  constructor( private router: Router ) { }

  // getters
  get username(): AbstractControl {
    return this.loginForm.get('username')!;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  ngOnInit(): void {
  }

  public login(): void{
    localStorage.setItem('Role', 'Admin');
    this.router.navigate(['/acasa']);
  }

}


