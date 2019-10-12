import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCreateAndEditComponent } from './categoria-create-and-edit.component';

describe('CategoriaCreateAndEditComponent', () => {
  let component: CategoriaCreateAndEditComponent;
  let fixture: ComponentFixture<CategoriaCreateAndEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaCreateAndEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
