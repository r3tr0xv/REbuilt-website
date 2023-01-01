import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmDeclineComponent } from './order-confirm-decline.component';

describe('OrderConfirmDeclineComponent', () => {
  let component: OrderConfirmDeclineComponent;
  let fixture: ComponentFixture<OrderConfirmDeclineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmDeclineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
