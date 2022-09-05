import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrareComponent } from './livrare.component';

describe('LivrareComponent', () => {
  let component: LivrareComponent;
  let fixture: ComponentFixture<LivrareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
