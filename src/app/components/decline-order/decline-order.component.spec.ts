import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineOrderComponent } from './decline-order.component';

describe('DeclineOrderComponent', () => {
  let component: DeclineOrderComponent;
  let fixture: ComponentFixture<DeclineOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclineOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
