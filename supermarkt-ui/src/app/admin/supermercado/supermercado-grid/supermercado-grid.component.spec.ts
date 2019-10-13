import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermercadoGridComponent } from './supermercado-grid.component';

describe('SupermercadoGridComponent', () => {
  let component: SupermercadoGridComponent;
  let fixture: ComponentFixture<SupermercadoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermercadoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermercadoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
