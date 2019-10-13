import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermercadoCreateAndEditComponent } from './supermercado-create-and-edit.component';

describe('SupermercadoCreateAndEditComponent', () => {
  let component: SupermercadoCreateAndEditComponent;
  let fixture: ComponentFixture<SupermercadoCreateAndEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermercadoCreateAndEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermercadoCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
