import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGradeComponent } from './item-grade.component';

describe('ItemGradeComponent', () => {
  let component: ItemGradeComponent;
  let fixture: ComponentFixture<ItemGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
