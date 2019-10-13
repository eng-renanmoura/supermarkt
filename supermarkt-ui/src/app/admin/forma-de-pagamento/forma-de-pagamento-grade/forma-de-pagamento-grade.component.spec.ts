import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagamentoGradeComponent } from './forma-de-pagamento-grade.component';

describe('FormaDePagamentoGradeComponent', () => {
  let component: FormaDePagamentoGradeComponent;
  let fixture: ComponentFixture<FormaDePagamentoGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaDePagamentoGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagamentoGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
