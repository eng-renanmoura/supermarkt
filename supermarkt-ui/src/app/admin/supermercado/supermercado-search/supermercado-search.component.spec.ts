import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermercadoSearchComponent } from './supermercado-search.component';

describe('SupermercadoSearchComponent', () => {
  let component: SupermercadoSearchComponent;
  let fixture: ComponentFixture<SupermercadoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermercadoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermercadoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
