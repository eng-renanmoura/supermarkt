import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagamentoBuscaComponent } from './forma-de-pagamento-busca.component';

describe('FormaDePagamentoBuscaComponent', () => {
  let component: FormaDePagamentoBuscaComponent;
  let fixture: ComponentFixture<FormaDePagamentoBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaDePagamentoBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagamentoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
