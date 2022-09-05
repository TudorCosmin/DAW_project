  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acasa',
  templateUrl: './acasa.component.html',
  styleUrls: ['./acasa.component.scss']
})
export class AcasaComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  public logout(): void{
    localStorage.setItem('Role', 'Vizitator');
    this.router.navigate(['/login']);
  }

}
