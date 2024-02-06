import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGetbyComponent } from './order-getby.component';

describe('OrderGetbyComponent', () => {
  let component: OrderGetbyComponent;
  let fixture: ComponentFixture<OrderGetbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderGetbyComponent]
    });
    fixture = TestBed.createComponent(OrderGetbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
