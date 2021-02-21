import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdavacNavBarComponent } from './prodavac-nav-bar.component';

describe('ProdavacNavBarComponent', () => {
  let component: ProdavacNavBarComponent;
  let fixture: ComponentFixture<ProdavacNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdavacNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdavacNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
