import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup ({
    username: new  FormControl(''),
    password: new FormControl(''),
  })

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  public login(): void{
    localStorage.setItem('Role', 'Vizitator');
    this.router.navigate(['/login']);
  }

}
