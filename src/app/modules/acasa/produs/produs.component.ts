import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { __param } from 'tslib';

@Component({
  selector: 'app-produs',
  templateUrl: './produs.component.html',
  styleUrls: ['./produs.component.scss']
})
export class ProdusComponent implements OnInit {

  public subscription: Subscription | undefined;
  public id: any;

  constructor( private route: ActivatedRoute, ) {  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];

    })
  }

  public getProdusId(): any {
    return this.id;
  }

}
