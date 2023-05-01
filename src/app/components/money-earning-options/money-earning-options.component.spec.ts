import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyEarningOptionsComponent } from './money-earning-options.component';

describe('MoneyEarningOptionsComponent', () => {
  let component: MoneyEarningOptionsComponent;
  let fixture: ComponentFixture<MoneyEarningOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyEarningOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyEarningOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
