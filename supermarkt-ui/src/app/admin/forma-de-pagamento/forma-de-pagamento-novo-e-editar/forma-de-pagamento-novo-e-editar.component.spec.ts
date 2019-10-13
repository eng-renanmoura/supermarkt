import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagamentoNovoEEditarComponent } from './forma-de-pagamento-novo-e-editar.component';

describe('FormaDePagamentoNovoEEditarComponent', () => {
  let component: FormaDePagamentoNovoEEditarComponent;
  let fixture: ComponentFixture<FormaDePagamentoNovoEEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaDePagamentoNovoEEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagamentoNovoEEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
