import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormularioComponent } from './item-formulario.component';

describe('ItemFormularioComponent', () => {
  let component: ItemFormularioComponent;
  let fixture: ComponentFixture<ItemFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
