import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNovoEEditarComponent } from './item-novo-e-editar.component';

describe('ItemNovoEEditarComponent', () => {
  let component: ItemNovoEEditarComponent;
  let fixture: ComponentFixture<ItemNovoEEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNovoEEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNovoEEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
