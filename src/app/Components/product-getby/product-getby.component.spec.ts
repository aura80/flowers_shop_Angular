import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGetbyComponent } from './product-getby.component';

describe('ProductGetbyComponent', () => {
  let component: ProductGetbyComponent;
  let fixture: ComponentFixture<ProductGetbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGetbyComponent]
    });
    fixture = TestBed.createComponent(ProductGetbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
